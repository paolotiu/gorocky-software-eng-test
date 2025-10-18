Database Location: SG
Repo URL: https://github.com/paolotiu/gorocky-software-eng-test
Live Demo URL:

## Setup

### Clone the repository and install dependencies

```bash
git clone https://github.com/paolotiu/gorocky-software-eng-test.git

cd gorocky-software-eng-test

npm install
```

### Populate environment variables

Create a `.env.local` file in the root directory

### Apply Prisma schema to the database

```bash
npx prisma db push

# or

npx prisma migrate deploy
```

### Add database triggers

```sql
-- Drop old trigger & function (optional safety)
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
DROP FUNCTION IF EXISTS public.handle_new_user();

-- Recreate function to insert both User and Profile
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  -- Insert into Users table
  INSERT INTO public."Users" (id, email)
  VALUES (NEW.id, NEW.email);

  -- Insert into Profiles table (username defaults to email before '@')
  INSERT INTO public."Profiles" (username, user_id, full_name)
  VALUES (
    split_part(NEW.email, '@', 1),  -- implicit username
    NEW.id,
    NULL
  );

  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Recreate trigger to call the function
CREATE TRIGGER on_auth_user_created
AFTER INSERT ON auth.users
FOR EACH ROW
EXECUTE PROCEDURE public.handle_new_user();

```

##### Why use database triggers?

Supabase Auth manages user authentication, but we need to ensure that our application-specific `Users` and `Profiles` tables are populated whenever a new user signs up. By using database triggers, we can automate this process at the database level, ensuring data consistency and reducing the need for additional application logic.

Overall, this is a way for us to seamlessly integrate Supabase Auth with our Prisma-managed database schema.

### Enable Row Level Security (RLS)

Enable RLS on all tables in the Supabase dashboard. Since we're using Prisma to interact with the database, we don't need to set up specific policies here.

### Configure Auth

In the Supabase dashboard, navigate to the "Authentication" settings and ensure that email sign-ups are enabled.

Additionally, set the "Site URL" to match your development and production URLs (e.g., `http://localhost:3000` for local development).

### Run seed script to populate initial data

```bash
npm run prisma-seed
```

### Start the development server

```bash
npm run dev
```
