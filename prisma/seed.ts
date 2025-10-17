import { PrismaClient } from '../src/generated/prisma';

const prisma = new PrismaClient();

// Sample data
const sampleUsers = [
  { email: 'alice.johnson@example.com' },
  { email: 'bob.smith@example.com' },
  { email: 'carol.williams@example.com' },
  { email: 'david.brown@example.com' },
  { email: 'eve.davis@example.com' },
  { email: 'frank.miller@example.com' },
  { email: 'grace.wilson@example.com' },
  { email: 'henry.moore@example.com' },
  { email: 'irene.taylor@example.com' },
  { email: 'jack.anderson@example.com' },
  { email: 'kate.thomas@example.com' },
  { email: 'luke.jackson@example.com' },
  { email: 'maria.white@example.com' },
  { email: 'nathan.harris@example.com' },
  { email: 'olivia.martin@example.com' },
  { email: 'peter.thompson@example.com' },
  { email: 'quinn.garcia@example.com' },
  { email: 'rachel.martinez@example.com' },
  { email: 'steve.robinson@example.com' },
  { email: 'tina.clark@example.com' },
];

const sampleProfiles = [
  {
    username: 'alicej',
    full_name: 'Alice Johnson',
    bio: 'Avid reader and book lover. Always looking for the next great story.',
  },
  {
    username: 'bobsmith',
    full_name: 'Bob Smith',
    bio: 'Software engineer by day, bookworm by night. Love sci-fi and fantasy.',
  },
  {
    username: 'carolw',
    full_name: 'Carol Williams',
    bio: 'English teacher and literary enthusiast. Classics are my passion.',
  },
  {
    username: 'davidb',
    full_name: 'David Brown',
    bio: 'History buff and non-fiction reader. Always learning something new.',
  },
  {
    username: 'eved',
    full_name: 'Eve Davis',
    bio: "Mystery and thriller addict. Can't resist a good plot twist.",
  },
  {
    username: 'frankm',
    full_name: 'Frank Miller',
    bio: 'Graphic novel enthusiast and comic book collector.',
  },
  {
    username: 'gracew',
    full_name: 'Grace Wilson',
    bio: 'Romance reader and happily-ever-after believer.',
  },
  {
    username: 'henrym',
    full_name: 'Henry Moore',
    bio: 'Philosophy student exploring the great thinkers through their works.',
  },
  {
    username: 'irenet',
    full_name: 'Irene Taylor',
    bio: 'Young adult fiction fan and aspiring writer.',
  },
  {
    username: 'jacka',
    full_name: 'Jack Anderson',
    bio: 'True crime reader and podcast enthusiast.',
  },
  {
    username: 'katet',
    full_name: 'Kate Thomas',
    bio: 'Poetry lover and literature professor.',
  },
  {
    username: 'lukej',
    full_name: 'Luke Jackson',
    bio: 'Sci-fi nerd and space exploration advocate.',
  },
  {
    username: 'mariaw',
    full_name: 'Maria White',
    bio: 'Biographies and memoirs are my jam. Real stories, real inspiration.',
  },
  {
    username: 'nathanh',
    full_name: 'Nathan Harris',
    bio: 'Historical fiction reader and amateur historian.',
  },
  {
    username: 'oliviam',
    full_name: 'Olivia Martin',
    bio: 'Book club organizer and contemporary fiction lover.',
  },
  {
    username: 'petert',
    full_name: 'Peter Thompson',
    bio: 'Business books and self-improvement guides enthusiast.',
  },
  {
    username: 'quinng',
    full_name: 'Quinn Garcia',
    bio: 'Horror fan and Stephen King completionist.',
  },
  {
    username: 'rachelm',
    full_name: 'Rachel Martinez',
    bio: 'Travel writer and adventure story collector.',
  },
  {
    username: 'stever',
    full_name: 'Steve Robinson',
    bio: 'Thriller and suspense addict. Always on edge.',
  },
  {
    username: 'tinac',
    full_name: 'Tina Clark',
    bio: 'Fantasy reader and world-building enthusiast.',
  },
];

const sampleBooks = [
  { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', total_pages: 180 },
  { title: 'To Kill a Mockingbird', author: 'Harper Lee', total_pages: 324 },
  { title: '1984', author: 'George Orwell', total_pages: 328 },
  { title: 'Pride and Prejudice', author: 'Jane Austen', total_pages: 432 },
  { title: 'The Catcher in the Rye', author: 'J.D. Salinger', total_pages: 277 },
  { title: 'Animal Farm', author: 'George Orwell', total_pages: 112 },
  { title: 'Lord of the Flies', author: 'William Golding', total_pages: 224 },
  { title: 'Brave New World', author: 'Aldous Huxley', total_pages: 268 },
  { title: 'The Hobbit', author: 'J.R.R. Tolkien', total_pages: 310 },
  { title: 'Fahrenheit 451', author: 'Ray Bradbury', total_pages: 249 },
  { title: 'Jane Eyre', author: 'Charlotte Brontë', total_pages: 507 },
  { title: 'Wuthering Heights', author: 'Emily Brontë', total_pages: 416 },
  { title: 'Moby-Dick', author: 'Herman Melville', total_pages: 635 },
  { title: 'The Odyssey', author: 'Homer', total_pages: 541 },
  { title: 'The Iliad', author: 'Homer', total_pages: 683 },
  { title: 'War and Peace', author: 'Leo Tolstoy', total_pages: 1225 },
  { title: 'Crime and Punishment', author: 'Fyodor Dostoevsky', total_pages: 671 },
  { title: 'The Brothers Karamazov', author: 'Fyodor Dostoevsky', total_pages: 796 },
  { title: 'Anna Karenina', author: 'Leo Tolstoy', total_pages: 864 },
  { title: 'Madame Bovary', author: 'Gustave Flaubert', total_pages: 341 },
  { title: 'Les Misérables', author: 'Victor Hugo', total_pages: 1463 },
  { title: 'The Count of Monte Cristo', author: 'Alexandre Dumas', total_pages: 1276 },
  { title: 'Don Quixote', author: 'Miguel de Cervantes', total_pages: 1072 },
  { title: 'Ulysses', author: 'James Joyce', total_pages: 732 },
  { title: 'The Divine Comedy', author: 'Dante Alighieri', total_pages: 798 },
  { title: 'One Hundred Years of Solitude', author: 'Gabriel García Márquez', total_pages: 417 },
  { title: 'The Stranger', author: 'Albert Camus', total_pages: 123 },
  { title: 'The Trial', author: 'Franz Kafka', total_pages: 255 },
  { title: 'The Metamorphosis', author: 'Franz Kafka', total_pages: 201 },
  { title: 'Catch-22', author: 'Joseph Heller', total_pages: 453 },
  { title: 'Slaughterhouse-Five', author: 'Kurt Vonnegut', total_pages: 275 },
  { title: 'The Sound and the Fury', author: 'William Faulkner', total_pages: 326 },
  { title: 'Invisible Man', author: 'Ralph Ellison', total_pages: 581 },
  { title: 'The Grapes of Wrath', author: 'John Steinbeck', total_pages: 464 },
  { title: 'Of Mice and Men', author: 'John Steinbeck', total_pages: 107 },
  { title: 'East of Eden', author: 'John Steinbeck', total_pages: 601 },
  { title: 'A Tale of Two Cities', author: 'Charles Dickens', total_pages: 448 },
  { title: 'Great Expectations', author: 'Charles Dickens', total_pages: 505 },
  { title: 'Oliver Twist', author: 'Charles Dickens', total_pages: 608 },
  { title: 'David Copperfield', author: 'Charles Dickens', total_pages: 882 },
  { title: 'Frankenstein', author: 'Mary Shelley', total_pages: 280 },
  { title: 'Dracula', author: 'Bram Stoker', total_pages: 418 },
  { title: 'The Picture of Dorian Gray', author: 'Oscar Wilde', total_pages: 254 },
  { title: 'Heart of Darkness', author: 'Joseph Conrad', total_pages: 96 },
  { title: 'Lord Jim', author: 'Joseph Conrad', total_pages: 425 },
  { title: 'The Old Man and the Sea', author: 'Ernest Hemingway', total_pages: 127 },
  { title: 'For Whom the Bell Tolls', author: 'Ernest Hemingway', total_pages: 471 },
  { title: 'A Farewell to Arms', author: 'Ernest Hemingway', total_pages: 332 },
  { title: 'The Sun Also Rises', author: 'Ernest Hemingway', total_pages: 251 },
  { title: 'Beloved', author: 'Toni Morrison', total_pages: 324 },
];

function getRandomDate(start: Date, end: Date): Date {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

function getRandomElement<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)]!;
}

async function main() {
  console.log('🌱 Starting seed...');

  // Clean existing data
  console.log('🧹 Cleaning existing data...');
  await prisma.userBooks.deleteMany();
  await prisma.profiles.deleteMany();
  await prisma.books.deleteMany();
  await prisma.users.deleteMany();

  // Create users
  console.log('👥 Creating users...');
  const createdUsers = await Promise.all(
    sampleUsers.map((user) =>
      prisma.users.create({
        data: user,
      })
    )
  );
  console.log(`✅ Created ${createdUsers.length} users`);

  // Create profiles
  console.log('👤 Creating profiles...');
  const createdProfiles = await Promise.all(
    createdUsers.map((user, index) =>
      prisma.profiles.create({
        data: {
          ...sampleProfiles[index],
          user_id: user.id,
        },
      })
    )
  );
  console.log(`✅ Created ${createdProfiles.length} profiles`);

  // Create books
  console.log('📚 Creating books...');
  const createdBooks = await Promise.all(
    sampleBooks.map((book) =>
      prisma.books.create({
        data: book,
      })
    )
  );
  console.log(`✅ Created ${createdBooks.length} books`);

  // Create random UserBooks relationships
  console.log('🔗 Creating user-book relationships...');
  const userBooksData: Array<{
    user_id: string;
    book_id: number;
    started_at: Date;
    finished_at: Date | null;
    review: string | null;
  }> = [];

  // Each user gets between 3-15 books
  for (const user of createdUsers) {
    const numBooks = Math.floor(Math.random() * 13) + 3; // 3 to 15 books
    const userBookIds = new Set<number>();

    // Select random unique books for this user
    while (userBookIds.size < numBooks) {
      const randomBook = getRandomElement(createdBooks);
      userBookIds.add(randomBook.id);
    }

    // Create relationships
    for (const bookId of userBookIds) {
      const startDate = getRandomDate(new Date('2023-01-01'), new Date('2025-10-01'));

      // 70% chance the book is finished
      const isFinished = Math.random() < 0.7;
      const finishDate = isFinished ? getRandomDate(startDate, new Date('2025-10-17')) : null;

      // 50% chance of having a review if finished, 10% if not finished
      const hasReview = isFinished ? Math.random() < 0.5 : Math.random() < 0.1;
      const reviews = [
        'An absolute masterpiece! Highly recommended.',
        'Good read, but a bit slow in the middle.',
        "Couldn't put it down. Amazing character development.",
        'Not what I expected, but still enjoyable.',
        "One of the best books I've read this year.",
        'A classic for a reason. Everyone should read this.',
        'Interesting premise but the execution could be better.',
        'Life-changing book. Changed my perspective on many things.',
        'A bit dated, but still relevant and powerful.',
        'Great writing style, captivating story.',
      ];

      userBooksData.push({
        user_id: user.id,
        book_id: bookId,
        started_at: startDate,
        finished_at: finishDate,
        review: hasReview ? getRandomElement(reviews) : null,
      });
    }
  }

  // Insert all UserBooks relationships
  await prisma.userBooks.createMany({
    data: userBooksData,
  });
  console.log(`✅ Created ${userBooksData.length} user-book relationships`);

  console.log('🎉 Seed completed successfully!');
}

main()
  .catch((e) => {
    console.error('❌ Error seeding database:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
