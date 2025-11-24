import "dotenv/config";
import { PrismaClient } from "../src/generated/prisma/client.js";

const prisma = new PrismaClient();

async function seed() {
  try {
    console.info(`🌱 Seeding database...`);

    /* -------------------------------------------------------------------------- */
    /*                                 Clean Previous                              */
    /* -------------------------------------------------------------------------- */
    console.info(`🚮 Deleting previous data...`);
    await prisma.order.deleteMany();
    await prisma.event.deleteMany();
    await prisma.wallet.deleteMany();
    await prisma.user.deleteMany();
    console.info(`👌 All previous data deleted`);

    /* -------------------------------------------------------------------------- */
    /*                                 Create Users                                */
    /* -------------------------------------------------------------------------- */
    console.info(`👥 Creating 30 users (10 organizers, 20 customers)...`);

    const organizersData = [
      {
        name: "Ayu Putri",
        username: "ayu.putri",
        email: "ayu.putri@festival.id",
        password: "ayupass",
        role: "EVENT_ORGANIZER",
      },
      {
        name: "Budi Santoso",
        username: "budi.santoso",
        email: "budi.santoso@festival.id",
        password: "budipass",
        role: "EVENT_ORGANIZER",
      },
      {
        name: "Citra Wulandari",
        username: "citra.wulandari",
        email: "citra.wulandari@festival.id",
        password: "citrapass",
        role: "EVENT_ORGANIZER",
      },
      {
        name: "Dewa Pratama",
        username: "dewa.pratama",
        email: "dewa.pratama@festival.id",
        password: "dewapass",
        role: "EVENT_ORGANIZER",
      },
      {
        name: "Eka Nugraha",
        username: "eka.nugraha",
        email: "eka.nugraha@festival.id",
        password: "ekapass",
        role: "EVENT_ORGANIZER",
      },
      {
        name: "Fajar Hidayat",
        username: "fajar.hidayat",
        email: "fajar.hidayat@festival.id",
        password: "fajarpass",
        role: "EVENT_ORGANIZER",
      },
      {
        name: "Gita Ramadhani",
        username: "gita.ramadhani",
        email: "gita.ramadhani@festival.id",
        password: "gitapass",
        role: "EVENT_ORGANIZER",
      },
      {
        name: "Hendra Wijaya",
        username: "hendra.wijaya",
        email: "hendra.wijaya@festival.id",
        password: "hendrapass",
        role: "EVENT_ORGANIZER",
      },
      {
        name: "Intan Maharani",
        username: "intan.maharani",
        email: "intan.maharani@festival.id",
        password: "intanpass",
        role: "EVENT_ORGANIZER",
      },
      {
        name: "Joko Prasetyo",
        username: "joko.prasetyo",
        email: "joko.prasetyo@festival.id",
        password: "jokopass",
        role: "EVENT_ORGANIZER",
      },
    ];

    const customersData = [
      {
        name: "Kiki Ramadhan",
        username: "kiki.r",
        email: "kiki.r@user.id",
        password: "kikipass",
        role: "CUSTOMER",
      },
      {
        name: "Lia Amalia",
        username: "lia.a",
        email: "lia.a@user.id",
        password: "liapass",
        role: "CUSTOMER",
      },
      {
        name: "Mira Salsabila",
        username: "mira.s",
        email: "mira.s@user.id",
        password: "mirapass",
        role: "CUSTOMER",
      },
      {
        name: "Nando Wijaya",
        username: "nando.w",
        email: "nando.w@user.id",
        password: "nandopass",
        role: "CUSTOMER",
      },
      {
        name: "Oka Saputra",
        username: "oka.s",
        email: "oka.s@user.id",
        password: "okapass",
        role: "CUSTOMER",
      },
      {
        name: "Putri Lestari",
        username: "putri.l",
        email: "putri.l@user.id",
        password: "putripass",
        role: "CUSTOMER",
      },
      {
        name: "Raka Prakoso",
        username: "raka.p",
        email: "raka.p@user.id",
        password: "rakapass",
        role: "CUSTOMER",
      },
      {
        name: "Sinta Dewi",
        username: "sinta.d",
        email: "sinta.d@user.id",
        password: "sintapass",
        role: "CUSTOMER",
      },
      {
        name: "Teguh Santika",
        username: "teguh.s",
        email: "teguh.s@user.id",
        password: "teguhpass",
        role: "CUSTOMER",
      },
      {
        name: "Umi Kalsum",
        username: "umi.k",
        email: "umi.k@user.id",
        password: "umipass",
        role: "CUSTOMER",
      },
      {
        name: "Vino Harsono",
        username: "vino.h",
        email: "vino.h@user.id",
        password: "vinopass",
        role: "CUSTOMER",
      },
      {
        name: "Wulan Kartika",
        username: "wulan.k",
        email: "wulan.k@user.id",
        password: "wulanpass",
        role: "CUSTOMER",
      },
      {
        name: "Xavier Agus",
        username: "xavier.a",
        email: "xavier.a@user.id",
        password: "xavierpass",
        role: "CUSTOMER",
      },
      {
        name: "Yessi Marlina",
        username: "yessi.m",
        email: "yessi.m@user.id",
        password: "yessipass",
        role: "CUSTOMER",
      },
      {
        name: "Zaki Putra",
        username: "zaki.p",
        email: "zaki.p@user.id",
        password: "zakipass",
        role: "CUSTOMER",
      },
      {
        name: "Adhi Kurnia",
        username: "adhi.k",
        email: "adhi.k@user.id",
        password: "adhipass",
        role: "CUSTOMER",
      },
      {
        name: "Bella Sari",
        username: "bella.s",
        email: "bella.s@user.id",
        password: "bellapass",
        role: "CUSTOMER",
      },
      {
        name: "Candra Eka",
        username: "candra.e",
        email: "candra.e@user.id",
        password: "candrapass",
        role: "CUSTOMER",
      },
      {
        name: "Dina Pertiwi",
        username: "dina.p",
        email: "dina.p@user.id",
        password: "dinapass",
        role: "CUSTOMER",
      },
      {
        name: "Eko Susilo",
        username: "eko.s",
        email: "eko.s@user.id",
        password: "ekopass",
        role: "CUSTOMER",
      },
    ];

    const createdOrganizers = await Promise.all(
      organizersData.map((u) => prisma.user.create({ data: u }))
    );

    const createdCustomers = await Promise.all(
      customersData.map((u) => prisma.user.create({ data: u }))
    );

    const allUsers = [...createdOrganizers, ...createdCustomers];
    console.info(`✅ Created ${allUsers.length} users`);

    /* -------------------------------------------------------------------------- */
    /*                                 Create Wallets                              */
    /* -------------------------------------------------------------------------- */
    console.info(`💳 Creating wallets for each user...`);
    // give organizers slightly higher balances
    await Promise.all(
      allUsers.map((user, i) =>
        prisma.wallet.create({
          data: {
            userId: user.id,
            balance:
              i < createdOrganizers.length
                ? 1_000_000 + i * 50_000
                : 200_000 + i * 10_000,
          },
        })
      )
    );
    console.info(`✅ Created ${allUsers.length} wallets`);

    /* -------------------------------------------------------------------------- */
    /*                                 Create Events                                */
    /* -------------------------------------------------------------------------- */
    console.info(
      `🎪 Creating 30 Indonesian-themed events (3 per organizer)...`
    );

    // 30 event names (Indonesian cultural theme)
    const eventNames = [
      "Festival Kuliner Nusantara - Jakarta",
      "Pekan Batik Nasional - Pekalongan",
      "Wayang Night - Yogyakarta",
      "Angklung Symphony - Bandung",
      "Seni Tari Tradisional - Bali",
      "Pasar Rakyat & Kerajinan - Solo",
      "Pesta Rakyat Kemerdekaan - Medan",
      "Jogja Jazz & Kopi Fest - Yogyakarta",
      "Festival Topeng - Cirebon",
      "Pameran Tenun Ikat - Lombok",
      "Festival Kuliner Padang - Padang",
      "Pentas Gamelan & Tari - Surakarta",
      "Festival Kain Ulos - Medan",
      "Pentas Reog Ponorogo - Ponorogo",
      "Festival Sate & Warung - Madura",
      "Festival Kopi Toraja - Toraja",
      "Pameran Batik & Motif - Semarang",
      "Pasar Seni Bali - Denpasar",
      "Seminar Budaya & Sejarah - Jakarta",
      "Festival Ondel-Ondel - Jakarta",
      "Festival Wayang Kulit - Surakarta",
      "Pagelaran Tarian Melayu - Riau",
      "Festival Makanan Khas - Makassar",
      "Festival Musik Tradisional - Lombok",
      "Expo Kerajinan Anyaman - Lombok",
      "Festival Kuliner Jawa - Semarang",
      "Pameran Seni Rupa Kontemporer - Bandung",
      "Pesta Rakyat & Kesenian - Lampung",
      "Festival Tenun & Songket - Palembang",
      "Panggung Seni Banaue - Bali",
    ];

    // prices and seats: realistic ranges
    const eventsToCreate = eventNames.slice(0, 30).map((name, idx) => {
      // assign organizer round-robin among 10 organizers
      const organizer = createdOrganizers[idx % createdOrganizers.length];
      const basePrice = 50_000 + (idx % 10) * 25_000; // variety of price points
      const totalSeats = 80 + (idx % 7) * 10; // varying seat counts: 80..140
      return {
        eventOrganizerId: organizer.id,
        name,
        price: basePrice,
        totalSeats,
        availableSeats: totalSeats,
      };
    });

    const createdEvents = await Promise.all(
      eventsToCreate.map((e) => prisma.event.create({ data: e }))
    );

    console.info(`✅ Created ${createdEvents.length} events`);

    /* -------------------------------------------------------------------------- */
    /*                                 Create Orders                                */
    /* -------------------------------------------------------------------------- */
    console.info(`🧾 Creating 30 orders across events & customers...`);

    // a pool of customers’ ids to pick from
    const customerIds = createdCustomers.map((c) => c.id);

    // statuses rotating with some variety
    const statuses = [
      "PENDING",
      "DONE",
      "CANCELLED",
      "EXPIRED",
      "REJECTED",
    ] as const;

    // create 30 orders; ensure seat availability and decrease availableSeats accordingly
    const ordersToCreate = [];

    // we'll create multiple orders per event and per customer; small quantities to avoid seats underflow
    for (let i = 0; i < 30; i++) {
      const event = createdEvents[i % createdEvents.length];
      const customerId = customerIds[i % customerIds.length];
      const quantity = 1 + (i % 4); // quantities 1..4
      const status = statuses[i % statuses.length];

      // compute total
      const totalAmount = Number((event.price * quantity).toFixed(2));

      ordersToCreate.push({
        customerId,
        eventId: event.id,
        quantity,
        totalAmount,
        status,
      });
    }

    // Create orders one by one so we can decrement availableSeats safely
    const createdOrders = [];
    for (const o of ordersToCreate) {
      // fetch current available seats
      const evt = await prisma.event.findUnique({
        where: { id: o.eventId },
        select: { availableSeats: true },
      });
      if (!evt) {
        console.warn(`⚠ Event ${o.eventId} not found, skipping order`);
        continue;
      }

      // If not enough seats, reduce quantity to availableSeats or skip if none
      const qty = Math.min(o.quantity, Math.max(0, evt.availableSeats));
      if (qty === 0) {
        // no seats, create a CANCELLED or EXPIRED order to represent oversold attempt
        const order = await prisma.order.create({
          data: {
            customerId: o.customerId,
            eventId: o.eventId,
            quantity: 0,
            totalAmount: 0,
            status: "REJECTED",
          },
        });
        createdOrders.push(order);
        continue;
      }

      const order = await prisma.order.create({
        data: {
          customerId: o.customerId,
          eventId: o.eventId,
          quantity: qty,
          totalAmount: Number((o.totalAmount * (qty / o.quantity)).toFixed(2)),
          status: o.status as any,
        },
      });

      // decrement available seats
      await prisma.event.update({
        where: { id: o.eventId },
        data: { availableSeats: { decrement: qty } },
      });

      createdOrders.push(order);
    }

    console.info(`✅ Created ${createdOrders.length} orders`);
    console.info(`🏁 Seeding finished successfully`);
  } catch (error) {
    console.error(`👎 Seeding failed:`, error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

seed();
