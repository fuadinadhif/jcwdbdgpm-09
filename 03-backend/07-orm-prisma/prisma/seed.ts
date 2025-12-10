import "dotenv/config";
import { PrismaClient, RoleType } from "../src/generated/prisma/client.js";
import bcrypt from "bcryptjs";

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
        password: await bcrypt.hash("ayupass", 12),
        role: RoleType.EVENT_ORGANIZER,
      },
      {
        name: "Budi Santoso",
        username: "budi.santoso",
        email: "budi.santoso@festival.id",
        password: "budipass",
        role: RoleType.EVENT_ORGANIZER,
      },
      {
        name: "Citra Wulandari",
        username: "citra.wulandari",
        email: "citra.wulandari@festival.id",
        password: "citrapass",
        role: RoleType.EVENT_ORGANIZER,
      },
      {
        name: "Dewa Pratama",
        username: "dewa.pratama",
        email: "dewa.pratama@festival.id",
        password: "dewapass",
        role: RoleType.EVENT_ORGANIZER,
      },
      {
        name: "Eka Nugraha",
        username: "eka.nugraha",
        email: "eka.nugraha@festival.id",
        password: "ekapass",
        role: RoleType.EVENT_ORGANIZER,
      },
      {
        name: "Fajar Hidayat",
        username: "fajar.hidayat",
        email: "fajar.hidayat@festival.id",
        password: "fajarpass",
        role: RoleType.EVENT_ORGANIZER,
      },
      {
        name: "Gita Ramadhani",
        username: "gita.ramadhani",
        email: "gita.ramadhani@festival.id",
        password: "gitapass",
        role: RoleType.EVENT_ORGANIZER,
      },
      {
        name: "Hendra Wijaya",
        username: "hendra.wijaya",
        email: "hendra.wijaya@festival.id",
        password: "hendrapass",
        role: RoleType.EVENT_ORGANIZER,
      },
      {
        name: "Intan Maharani",
        username: "intan.maharani",
        email: "intan.maharani@festival.id",
        password: "intanpass",
        role: RoleType.EVENT_ORGANIZER,
      },
      {
        name: "Joko Prasetyo",
        username: "joko.prasetyo",
        email: "joko.prasetyo@festival.id",
        password: "jokopass",
        role: RoleType.EVENT_ORGANIZER,
      },
    ];

    const customersData = [
      {
        name: "Kiki Ramadhan",
        username: "kiki.r",
        email: "kiki.r@user.id",
        password: "kikipass",
        role: RoleType.CUSTOMER,
      },
      {
        name: "Lia Amalia",
        username: "lia.a",
        email: "lia.a@user.id",
        password: "liapass",
        role: RoleType.CUSTOMER,
      },
      {
        name: "Mira Salsabila",
        username: "mira.s",
        email: "mira.s@user.id",
        password: "mirapass",
        role: RoleType.CUSTOMER,
      },
      {
        name: "Nando Wijaya",
        username: "nando.w",
        email: "nando.w@user.id",
        password: "nandopass",
        role: RoleType.CUSTOMER,
      },
      {
        name: "Oka Saputra",
        username: "oka.s",
        email: "oka.s@user.id",
        password: "okapass",
        role: RoleType.CUSTOMER,
      },
      {
        name: "Putri Lestari",
        username: "putri.l",
        email: "putri.l@user.id",
        password: "putripass",
        role: RoleType.CUSTOMER,
      },
      {
        name: "Raka Prakoso",
        username: "raka.p",
        email: "raka.p@user.id",
        password: "rakapass",
        role: RoleType.CUSTOMER,
      },
      {
        name: "Sinta Dewi",
        username: "sinta.d",
        email: "sinta.d@user.id",
        password: "sintapass",
        role: RoleType.CUSTOMER,
      },
      {
        name: "Teguh Santika",
        username: "teguh.s",
        email: "teguh.s@user.id",
        password: "teguhpass",
        role: RoleType.CUSTOMER,
      },
      {
        name: "Umi Kalsum",
        username: "umi.k",
        email: "umi.k@user.id",
        password: "umipass",
        role: RoleType.CUSTOMER,
      },
      {
        name: "Vino Harsono",
        username: "vino.h",
        email: "vino.h@user.id",
        password: "vinopass",
        role: RoleType.CUSTOMER,
      },
      {
        name: "Wulan Kartika",
        username: "wulan.k",
        email: "wulan.k@user.id",
        password: "wulanpass",
        role: RoleType.CUSTOMER,
      },
      {
        name: "Xavier Agus",
        username: "xavier.a",
        email: "xavier.a@user.id",
        password: "xavierpass",
        role: RoleType.CUSTOMER,
      },
      {
        name: "Yessi Marlina",
        username: "yessi.m",
        email: "yessi.m@user.id",
        password: "yessipass",
        role: RoleType.CUSTOMER,
      },
      {
        name: "Zaki Putra",
        username: "zaki.p",
        email: "zaki.p@user.id",
        password: "zakipass",
        role: RoleType.CUSTOMER,
      },
      {
        name: "Adhi Kurnia",
        username: "adhi.k",
        email: "adhi.k@user.id",
        password: "adhipass",
        role: RoleType.CUSTOMER,
      },
      {
        name: "Bella Sari",
        username: "bella.s",
        email: "bella.s@user.id",
        password: "bellapass",
        role: RoleType.CUSTOMER,
      },
      {
        name: "Candra Eka",
        username: "candra.e",
        email: "candra.e@user.id",
        password: "candrapass",
        role: RoleType.CUSTOMER,
      },
      {
        name: "Dina Pertiwi",
        username: "dina.p",
        email: "dina.p@user.id",
        password: "dinapass",
        role: RoleType.CUSTOMER,
      },
      {
        name: "Eko Susilo",
        username: "eko.s",
        email: "eko.s@user.id",
        password: "ekopass",
        role: RoleType.CUSTOMER,
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

    console.info(`🏁 Seeding finished successfully`);
  } catch (error) {
    console.error(`👎 Seeding failed:`, error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

seed();
