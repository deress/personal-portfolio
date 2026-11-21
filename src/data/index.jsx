import Yogi from "../assets/img/testimonial/yogi.webp";
import Hasbi from "../assets/img/testimonial/hasbi.webp";
import Rafi from "../assets/img/testimonial/rafi.webp";
import Unej from "../assets/img/unej.webp";

import firstSertif from "../assets/img/sertif/Belajar Dasar Pemrograman Web.webp";
import secondSertif from "../assets/img/sertif/Memulai Pemrograman dengan Dart.webp";
import thirdSertif from "../assets/img/sertif/Memulai Dasar Pemrograman untuk Menjadi Pengembang Software.webp";
import forthSertif from "../assets/img/sertif/Belajar Dasar UX Design.webp";
import fifthSertif from "../assets/img/sertif/Pengenalan ke Logika Pemrograman.webp";
import sixthSertif from "../assets/img/sertif/Memulai Pemrograman dengan Java.webp";
import seventhSertif from "../assets/img/sertif/Memulai Pemrograman dengan Kotlin.webp";
import eighthSertif from "../assets/img/sertif/Belajar Prinsip Pemrograman SOLID.webp";
import ninthSertif from "../assets/img/sertif/Belajar Membuat Aplikasi Android untuk Pemula.webp";
import tenthSertif from "../assets/img/sertif/Belajar Fundamental Aplikasi Android.webp";
import eleventhSertif from "../assets/img/sertif/Belajar Pengembangan Aplikasi Android Intermediate.webp";
import twelfthSertif from "../assets/img/sertif/Belajar Membuat Aplikasi Android dengan Jetpack Compose.webp";
import thirteenthSertif from "../assets/img/sertif/Menjadi Android Developer Expert.webp";
import fourteenthSertif from "../assets/img/sertif/Belajar Membuat Aplikasi Web dengan React.webp";
import fifteenthSertif from "../assets/img/sertif/DCA Certificate.webp";
import sixteenthSertif from "../assets/img/sertif/Belajar Dasar Git dengan Github.webp";

import firstAward from "../assets/img/sertif/Bangkit 2023 Awards.webp";
import secondAward from "../assets/img/sertif/Sertif Magang MSIB.webp";

import firstProject from "../assets/img/myproject/01.webp";
import secondProject from "../assets/img/myproject/02.webp";
import thirdProject from "../assets/img/myproject/03.webp";
import forthProject from "../assets/img/myproject/04.webp";
import fifthProject from "../assets/img/myproject/05.webp";

export const navLinks = [
    { id: 1, path: "/about", key: "about" },
    { id: 2, path: "/education", key: "education" },
    { id: 3, path: "/experience", key: "experience" },
    { id: 4, path: "/project", key: "projects" },
    {
        id: 5,
        path: { en: "CV_Idris Muhammad_ENG.pdf", id: "Idris_Muhammad_CV.pdf" },
        isFile: true,
        key: "resume",
    },
];

export const skillsTools = [
    {
        id: 1,
        name: "Github",
        icon: "ri-github-fill",
        color: "var(--color-text)",
        link: "https://github.com/",
    },
    {
        id: 2,
        name: "REST APIs",
        icon: "ri-global-line",
        color: "#96cc00",
        link: "https://developer.mozilla.org/en-US/docs/Glossary/REST",
    },
    {
        id: 3,
        name: "CSS",
        icon: "ri-css3-fill",
        color: "#ff4d07",
        link: "https://www.w3schools.com/css/",
    },
    {
        id: 4,
        name: "HTML",
        icon: "ri-html5-fill",
        color: "#ffb007",
        link: "https://www.w3schools.com/html/",
    },
    {
        id: 5,
        name: "PHP",
        icon: "ri-code-s-slash-line",
        color: "#777BB3",
        link: "https://www.php.net/",
    },
    {
        id: 6,
        name: "Laravel",
        icon: "ri-code-s-slash-line",
        color: "#ff2d20",
        link: "https://laravel.com/",
    },
    {
        id: 7,
        name: "React",
        icon: "ri-reactjs-line",
        color: "#5FD4F4",
        link: "https://react.dev/",
    },
    {
        id: 8,
        name: "Kotlin",
        icon: "ri-code-s-slash-line",
        color: "#5578ff",
        link: "https://kotlinlang.org/",
    },
    {
        id: 9,
        name: "Android",
        icon: "ri-android-fill",
        color: "#1c7d32",
        link: "https://d.android.com/",
    },
];

export const educations = [
    {
        id: 1,
        univName: "Universitas Jember",
        since: { en: "Aug 2021 - July 2025", id: "Agu 2021 - Juli 2025" },
        major: {
            en: "Bachelor's Degree in Information Systems - S.Kom.",
            id: "Sarjana Sistem Informasi - S.Kom.",
        },
        grade: "3.91",
        image: Unej,
    },
];

export const certifications = [
    {
        id: 1,
        name: "Dicoding - Belajar Dasar Pemrograman Web",
        link: "https://www.dicoding.com/certificates/4EXG66Y4EZRL",
        image: firstSertif,
        date: "2021-07-15",
    },
    {
        id: 2,
        name: "Dicoding - Memulai Pemrograman dengan Dart",
        link: "https://www.dicoding.com/certificates/JMZVGOE43ZN9",
        image: secondSertif,
        date: "2022-07-22",
    },
    {
        id: 3,
        name: "Dicoding - Memulai Dasar Pemrograman untuk Menjadi Pengembang Software",
        link: "https://www.dicoding.com/certificates/6RPNWNY34P2M",
        image: thirdSertif,
        date: "2023-08-09",
    },
    {
        id: 4,
        name: "Dicoding - Belajar Dasar UX Design",
        link: "https://www.dicoding.com/certificates/N9ZOO98M0ZG5",
        image: forthSertif,
        date: "2024-02-01",
    },

    {
        id: 5,
        name: "Dicoding - Pengenalan ke Logika Pemrograman",
        link: "https://www.dicoding.com/certificates/98XWG18E0PM3",
        image: fifthSertif,
        date: "2023-08-10",
    },
    {
        id: 6,
        name: "Dicoding - Memulai Pemrograman dengan Java",
        link: "https://www.dicoding.com/certificates/NVP7ODY9RPR0",
        image: sixthSertif,
        date: "2023-08-14",
    },
    {
        id: 7,
        name: "Dicoding - Memulai Pemrograman dengan Kotlin",
        link: "https://www.dicoding.com/certificates/NVP7OROKVPR0",
        image: seventhSertif,
        date: "2023-08-20",
    },
    {
        id: 8,
        name: "Dicoding - Belajar Prinsip Pemrograman SOLID",
        link: "https://www.dicoding.com/certificates/JMZV1EGLOXN9",
        image: eighthSertif,
        date: "2023-10-04",
    },
    {
        id: 9,
        name: "Dicoding - Belajar Membuat Aplikasi Android untuk Pemula",
        link: "https://www.dicoding.com/certificates/0LZ0QO3Y3Z65",
        image: ninthSertif,
        date: "2023-08-30",
    },
    {
        id: 10,
        name: "Dicoding - Belajar Fundamental Aplikasi Android",
        link: "https://www.dicoding.com/certificates/JMZV13QNNXN9",
        image: tenthSertif,
        date: "2023-09-26",
    },
    {
        id: 11,
        name: "Dicoding - Belajar Pengembangan Aplikasi Android Intermediate",
        link: "https://www.dicoding.com/certificates/N9ZO5RE50PG5",
        image: eleventhSertif,
        date: "2023-10-30",
    },
    {
        id: 12,
        name: "Dicoding - Belajar Membuat Aplikasi Android dengan Jetpack Compose",
        link: "https://www.dicoding.com/certificates/6RPN4EL48X2M",
        image: twelfthSertif,
        date: "2023-11-15",
    },
    {
        id: 13,
        name: "Dicoding - Menjadi Android Developer Expert",
        link: "https://www.dicoding.com/certificates/MRZMEG21LPYQ",
        image: thirteenthSertif,
        date: "2024-04-18",
    },
    {
        id: 14,
        name: "Dicoding - Belajar Membuat Aplikasi Web dengan React",
        link: "https://www.dicoding.com/certificates/N9ZOYQ4RRPG5",
        image: fourteenthSertif,
        date: "2024-11-20",
    },
    {
        id: 15,
        name: "dev.id - Dev Certification For Android (DCA)",
        link: "https://dev.id/certificate/verify/8Y0917LW24",
        image: fifteenthSertif,
        date: "2025-01-22",
    },
    {
        id: 16,
        name: "Dicoding - Belajar Dasar Git dengan GitHub",
        link: "https://www.dicoding.com/certificates/KEXL0WKWWPG2",
        image: sixteenthSertif,
        date: "2023-08-11",
    },
];

export const awards = [
    {
        id: 1,
        name: "Bangkit 2023 - Graduate in Mobile Development Path",
        image: firstAward,
    },
    {
        id: 2,
        name: "Kampus Merdeka - Complete MSIB Program 6",
        image: secondAward,
    },
];

export const workExperience = [
    {
        id: 1,
        position: "Mobile Development (Android) Cohort",
        company: "Bangkit Academy led by Google, GoTo, & Traveloka",
        companyLink: "https://grow.google/intl/id_id/bangkit/",
        since: { en: "Aug 2023 - Jan 2024", id: "Agu 2023 - Jan 2024" },
        status: { en: "Apprenticeship", id: "Program Pelatihan" },
        desc: {
            en: (
                <>
                    Bangkit is a unique career readiness program led by Google
                    and delivered with support from industry experts from their
                    industry partners like GoTo and Traveloka. The program is
                    designed to provide participants with first-hand exposure
                    to real-world practitioners and prepare them with relevant
                    skills for a successful career in leading tech companies.
                    <br />I was successfully selected as one of 3,100
                    participants from 63,000 registrants as Mobile Developer
                    (Android) Trainees and graduated as Google Certified
                    Associate Android Developer.
                </>
            ),
            id: (
                <>
                    Bangkit adalah program kesiapan karier unik yang dipimpin
                    oleh Google dan didukung oleh para ahli dari mitra
                    industrinya seperti GoTo dan Traveloka. Program ini
                    dirancang untuk memberikan pengalaman langsung bersama
                    praktisi industri serta membekali peserta dengan
                    keterampilan yang relevan untuk berkarier di perusahaan
                    teknologi terkemuka.
                    <br />
                    Saya berhasil terpilih menjadi salah satu dari 3.100 peserta
                    dari 63.000 pendaftar sebagai Mobile Developer (Android)
                    Trainee dan lulus sebagai Google Certified Associate Android
                    Developer.
                </>
            ),
        },
        responsibility: {
            en: [
                "Attend all Bangkit Team Meeting and Instructor Led-Training sessions, which has 3 types (soft skills, english, and tech)",
                "Attend Weekly Consultation with Facilitator",
                "Finish every assignment for each week within deadline",
                "Finish all mandatory courses for Android Learning Path on Dicoding platform",
                "Build capstone project namely VisitCampus",
                "Build android apps from scratch",
            ],
            id: [
                "Mengikuti seluruh Bangkit Team Meeting dan sesi Instructor-Led Training yang terdiri dari 3 jenis (soft skill, bahasa Inggris, dan teknis)",
                "Mengikuti konsultasi mingguan bersama fasilitator",
                "Menyelesaikan setiap tugas mingguan tepat waktu",
                "Menyelesaikan seluruh kursus wajib Android Learning Path di platform Dicoding",
                "Membangun capstone project bernama VisitCampus",
                "Membangun aplikasi Android dari nol",
            ],
        },
    },
    {
        id: 2,
        position: "Software Engineer Intern",
        company: "Dinas Kependudukan dan Pencatatan Sipil Kota Malang",
        companyLink: "https://dispendukcapil.malangkota.go.id/",
        since: "Feb 2024 - Jul 2024",
        status: { en: "Internship", id: "Magang" },
        desc: {
            en: (
                <>
                    Dinas Kependudukan dan Pencatatan Sipil Kota Malang is a
                    government agency responsible for managing population data
                    and civil records in Malang City. Their work is crucial for
                    ensuring that accurate demographic data is maintained and
                    that citizens have access to official identification and
                    civil documentation.
                </>
            ),
            id: (
                <>
                    Dinas Kependudukan dan Pencatatan Sipil Kota Malang adalah
                    instansi pemerintah yang bertanggung jawab mengelola data
                    kependudukan dan pencatatan sipil di Kota Malang. Peran
                    instansi ini sangat penting untuk memastikan data demografis
                    tetap akurat dan masyarakat memiliki akses terhadap dokumen
                    identitas resmi serta dokumen kependudukan.
                </>
            ),
        },
        responsibility: {
            en: [
                "Building a website-based Sistem Informasi Kearsipan Penduduk (SIKAP, formerly named SIMARSIP) application using the Laravel framework starting from the analysis stage, UI design and prototyping, Front-end development, Back-end integration, to the evaluation stage.",
                "Conducting debugging and evaluation of the Sistem Informasi Administrasi Pelayanan Elektronik Terintegrasi website.",
                "Coordinated and collaborated with other team members in working on a project to achieve maximum results.",
            ],
            id: [
                "Membangun aplikasi berbasis website Sistem Informasi Kearsipan Penduduk (SIKAP, sebelumnya bernama SIMARSIP) menggunakan framework Laravel, mulai dari tahap analisis, desain UI dan prototyping, pengembangan front-end, integrasi back-end, hingga tahap evaluasi.",
                "Melakukan debugging dan evaluasi website Sistem Informasi Administrasi Pelayanan Elektronik Terintegrasi.",
                "Berkoordinasi dan berkolaborasi dengan anggota tim lain dalam mengerjakan project untuk mencapai hasil yang maksimal.",
            ],
        },
    },
    {
        id: 3,
        position: "Software Engineer",
        company: "MUC Consulting",
        companyLink: "https://muc.co.id/id",
        since: { en: "Dec 2025 - Present", id: "Des 2025 - Sekarang" },
        status: { en: "Contract", id: "Kontrak" },
        desc: {
            en: (
                <>
                    MUC Consulting has grown into one of Indonesia’s leading
                    business consulting firms, built on a foundation of
                    integrity, professionalism, and strong ethical values. As
                    part of its commitment to Good Corporate Citizenship, MUC
                    Consulting actively supports the initiatives of Indonesia
                    Business Links, Indonesia Global Compact, and United Nations
                    Global Compact in advancing ethical and sustainable
                    business practices.
                </>
            ),
            id: (
                <>
                    MUC Consulting telah berkembang menjadi salah satu firma
                    konsultan bisnis terkemuka di Indonesia, yang dibangun di
                    atas fondasi integritas, profesionalisme, dan nilai-nilai
                    etika yang kuat. Sebagai bagian dari komitmennya terhadap
                    Good Corporate Citizenship, MUC Consulting secara aktif
                    mendukung inisiatif Indonesia Business Links, Indonesia
                    Global Compact, dan United Nations Global Compact dalam
                    mendorong praktik bisnis yang etis dan berkelanjutan.
                </>
            ),
        },
        responsibility: {
            en: [
                "Built an internal billing and invoicing system from scratch in Laravel, delivering its core features end to end within 5 months.",
                "Develop and maintain 6 software applications, spanning new builds from scratch and enhancements to existing systems.",
                "Integrated 3 internal company systems into 1 unified workflow, connecting their data so it no longer lives in separate tools.",
                "Support users and cross-functional teams by resolving technical issues, refining UI/UX from feedback, writing technical documentation and safeguarding data integrity.",
            ],
            id: [
                "Membangun sistem billing dan invoicing internal dari nol menggunakan Laravel, dengan menyelesaikan fitur-fitur utamanya secara end-to-end dalam 5 bulan.",
                "Mengembangkan dan memelihara 6 aplikasi perangkat lunak, mulai dari pembangunan aplikasi baru dari nol hingga pengembangan sistem yang sudah ada.",
                "Mengintegrasikan 3 sistem internal perusahaan menjadi 1 alur kerja terpadu, menghubungkan datanya sehingga tidak lagi tersebar di tools yang terpisah.",
                "Mendukung pengguna dan tim lintas fungsi dengan menyelesaikan masalah teknis, menyempurnakan UI/UX berdasarkan masukan, menulis dokumentasi teknis, serta menjaga integritas data.",
            ],
        },
    },
];

export const organizationExperience = [
    {
        id: 1,
        position: {
            en: "Staff of Development Member Resources",
            id: "Staf Pengembangan Sumber Daya Anggota",
        },
        company: "Unit Kegiatan Mahasiswa O-MACO",
        companyLink: "",
        since: { en: "Mar 2022 - Dec 2023", id: "Mar 2022 - Des 2023" },
        desc: {
            en: (
                <>
                    UKM O-MACO (Student Activity Unit) is a sports organization
                    under the auspices of the BEM, Faculty of Computer Science,
                    University of Jember. UKM O-MACO is a structured forum for
                    developing students&apos; interests and talents in several
                    sports fields at this UKM.
                </>
            ),
            id: (
                <>
                    UKM O-MACO adalah organisasi olahraga di bawah naungan BEM
                    Fakultas Ilmu Komputer, Universitas Jember. UKM O-MACO
                    merupakan wadah terstruktur untuk mengembangkan minat dan
                    bakat mahasiswa di berbagai cabang olahraga.
                </>
            ),
        },
        responsibility: {
            en: [
                "Finished all division work programs that increase member value",
                "Designing a cadre system and member resources, holding continuous learning and training programs for members",
                "Developing, nurturing, and providing a platform for members to learn, be creative, and produce loyal and militant cadres",
            ],
            id: [
                "Menyelesaikan seluruh program kerja divisi yang meningkatkan nilai anggota",
                "Merancang sistem kaderisasi dan sumber daya anggota, serta mengadakan program pembelajaran dan pelatihan berkelanjutan bagi anggota",
                "Mengembangkan, membina, dan menyediakan wadah bagi anggota untuk belajar, berkreasi, serta menghasilkan kader yang loyal dan militan",
            ],
        },
    },
];

export const recommendations = [
    {
        id: 1,
        desc: "Highly skilled Android developers, consistently providing the best solutions. Collaborative, detail-oriented, and makes many contributions when working on the capstone project.",
        image: Yogi,
        name: "Moch Yogi Firmansyah",
        skill: "Google Android Developer | Bangkit Academy 2023 Graduate in Android Learning",
    },
    {
        id: 2,
        desc: "I feel very fortunate to have had the opportunity to work with Muhammad Idris on a Capstone Project. He is an exceptional individual, especially in terms of responsibility and execution speed when tasks are clear. Faced with challenges, he never gives up easily but always tries to find the best solution before giving in. His response to colleagues is also remarkable, bringing a positive and cheerful atmosphere to our team, making every collaboration with him enjoyable and free from excessive pressure. His presence truly contributes positively to creating a more pleasant and enjoyable working environment.",
        image: Hasbi,
        name: "Hasbi Hussein Deri",
        skill: "Google TensorFlow Developer | Bangkit Academy 2023 Graduate in Machine Learning",
    },
    {
        id: 3,
        desc: "In the project team, Idris is a relaxed person but seems serious. Idris is a reliable person. He completes what the team has assigned to him precisely and perfectly.",
        image: Rafi,
        name: "M. Rafi Thufail",
        skill: "Undergraduate Student in Information Systems, University of Jember | Binar Academy 2023 Graduate in Backend Learning",
    },
    {
        id: 4,
        desc: "Highly skilled Android developers, consistently providing the best solutions. Collaborative, detail-oriented, and makes many contributions when working on the capstone project.",
        image: Yogi,
        name: "Moch Yogi Firmansyah",
        skill: "Google Android Developer | Bangkit Academy 2023 Graduate in Android Learning",
    },
    {
        id: 5,
        desc: "I feel very fortunate to have had the opportunity to work with Muhammad Idris on a Capstone Project. He is an exceptional individual, especially in terms of responsibility and execution speed when tasks are clear. Faced with challenges, he never gives up easily but always tries to find the best solution before giving in. His response to colleagues is also remarkable, bringing a positive and cheerful atmosphere to our team, making every collaboration with him enjoyable and free from excessive pressure. His presence truly contributes positively to creating a more pleasant and enjoyable working environment.",
        image: Hasbi,
        name: "Hasbi Hussein Deri",
        skill: "Google TensorFlow Developer | Bangkit Academy 2023 Graduate in Machine Learning",
    },
    {
        id: 6,
        desc: "In the project team, Idris is a relaxed person but seems serious. Idris is a reliable person. He completes what the team has assigned to him precisely and perfectly.",
        image: Rafi,
        name: "M. Rafi Thufail",
        skill: "Undergraduate Student in Information Systems, University of Jember | Binar Academy 2023 Graduate in Backend Learning",
    },
];

export const projects = [
    {
        id: 1,
        name: "Github User",
        slug: "github-user",
        role: "Solo Developer",
        techStack: ["Kotlin", "Retrofit", "Room", "RecyclerView", "TabLayout"],
        playStore: "",
        github: "",
        image: firstProject,
        desc: {
            en: (
                <>
                    Github User is an Android app that uses the GitHub API to
                    get the data, implemented using Retrofit. This application
                    has features to search the github users, view their
                    profiles, and add them to favorites, whose data is stored in
                    local storage by using Room. I also implement TabLayout for
                    the following and followers of users, RecyclerView, and many
                    more. This project is one of the submissions in the “Belajar
                    Fundamental Aplikasi Android” course at Dicoding Indonesia
                    which became my first project in building an Android app by
                    integrating APIs and databases into the app. I made this
                    project from scratch until it can be used by myself and I
                    got 5/5 stars for this submission rating.
                </>
            ),
            id: (
                <>
                    Github User adalah aplikasi Android yang menggunakan GitHub
                    API untuk mengambil data, yang diimplementasikan menggunakan
                    Retrofit. Aplikasi ini memiliki fitur untuk mencari pengguna
                    GitHub, melihat profil mereka, dan menambahkannya ke daftar
                    favorit yang datanya disimpan di penyimpanan lokal
                    menggunakan Room. Saya juga mengimplementasikan TabLayout
                    untuk daftar following dan followers, RecyclerView, dan
                    masih banyak lagi. Project ini merupakan salah satu
                    submission di kelas “Belajar Fundamental Aplikasi Android”
                    di Dicoding Indonesia, sekaligus project pertama saya dalam
                    membangun aplikasi Android dengan mengintegrasikan API dan
                    database. Saya membuat project ini dari nol hingga dapat
                    saya gunakan sendiri, dan mendapatkan rating 5/5 bintang
                    untuk submission ini.
                </>
            ),
        },
        date: "September 2023",
        category: "Android",
    },
    {
        id: 2,
        name: "Dicoding Story",
        slug: "dicoding-story",
        role: "Solo Developer",
        techStack: ["Kotlin", "Paging 3", "Google Maps API", "Custom View", "Unit Testing"],
        playStore: "",
        github: "",
        image: secondProject,
        desc: {
            en: (
                <>
                    Dicoding Story is an Android app that has many features. The
                    application uses a Private API from Dicoding. The features
                    are login register authentication, view stories, view the
                    detail of story, upload new story (pictures and text) and
                    can also to add location, view map with the position of each
                    story by using Google Map API. I also implement animation,
                    custom view, preferences, paging 3, unit testing and the
                    other component. This project is one of the submissions in
                    the “Belajar Pengembangan Aplikasi Android Intermediate”
                    course at Dicoding Indonesia which became my first project
                    in building an Android app using Google&apos;s APIs from
                    Google Cloud. I made this project from scratch until it can
                    be used by myself and I got 4/5 stars for the submission
                    rating.
                </>
            ),
            id: (
                <>
                    Dicoding Story adalah aplikasi Android dengan banyak fitur
                    yang menggunakan Private API dari Dicoding. Fiturnya antara
                    lain autentikasi login dan register, melihat daftar story,
                    melihat detail story, mengunggah story baru (gambar dan
                    teks) yang dapat disertai lokasi, serta melihat peta posisi
                    setiap story menggunakan Google Maps API. Saya juga
                    mengimplementasikan animasi, custom view, preferences,
                    Paging 3, unit testing, dan komponen lainnya. Project ini
                    merupakan salah satu submission di kelas “Belajar
                    Pengembangan Aplikasi Android Intermediate” di Dicoding
                    Indonesia, sekaligus project pertama saya dalam membangun
                    aplikasi Android dengan API Google dari Google Cloud. Saya
                    membuat project ini dari nol hingga dapat saya gunakan
                    sendiri, dan mendapatkan rating 4/5 bintang untuk submission
                    ini.
                </>
            ),
        },
        date: { en: "October 2023", id: "Oktober 2023" },
        category: "Android",
    },
    {
        id: 3,
        name: "Basket Roster",
        slug: "basket-roster",
        role: "Solo Developer",
        techStack: ["Kotlin", "Jetpack Compose"],
        playStore: "",
        github: "",
        image: thirdProject,
        desc: {
            en: (
                <>
                    Basket Roster is a simple Android app that implements
                    Jetpack Compose and using static data that I collected from
                    the seagame roster. The idea is that users can get an
                    overview about Indonesia&apos;s SEA Games basketball
                    players. This project is for completing the submission in
                    the “Belajar Membuat Aplikasi Android dengan Jetpack
                    Compose” course at Dicoding Indonesia which became my first
                    project in building an Android app by using Jetpack Compose.
                    I made this project from scratch until it can be used by
                    myself and I got 4/5 stars for this submission rating.
                </>
            ),
            id: (
                <>
                    Basket Roster adalah aplikasi Android sederhana yang
                    mengimplementasikan Jetpack Compose dengan data statis yang
                    saya kumpulkan dari roster SEA Games. Idenya, pengguna bisa
                    mendapatkan gambaran tentang para pemain basket Indonesia di
                    SEA Games. Project ini dibuat untuk menyelesaikan submission
                    di kelas “Belajar Membuat Aplikasi Android dengan Jetpack
                    Compose” di Dicoding Indonesia, sekaligus project pertama
                    saya dalam membangun aplikasi Android menggunakan Jetpack
                    Compose. Saya membuat project ini dari nol hingga dapat saya
                    gunakan sendiri, dan mendapatkan rating 4/5 bintang untuk
                    submission ini.
                </>
            ),
        },
        date: "November 2023",
        category: "Android",
    },
    {
        id: 4,
        name: "VisitCampus",
        slug: "visitcampus",
        role: {
            en: "Android Developer (Bangkit Capstone Team)",
            id: "Android Developer (Tim Capstone Bangkit)",
        },
        techStack: ["Kotlin", "Google Maps SDK", "Street View", "Retrofit"],
        playStore: "",
        github: "https://github.com/deress/VisitCampus",
        image: forthProject,
        desc: {
            en: (
                <>
                    VisitCampus is an easy to use application that provides
                    information about colleges. This application provides
                    various information about various types of colleges such as
                    descriptions, achievements, graduates, registration paths,
                    and can display the college environment by using Street View
                    from Google Maps SDK which is summarized into one complete
                    application. This application also implements Machine
                    Learning Model that have been deployed by the Cloud
                    Computing Team to provides features that can give insight
                    regarding the scope of science that suit the user by
                    answering the questions given. This information can be used
                    by users as a guide for applying to college. There is also a
                    chatbot that can help users if they want to ask something
                    about college. This project is my final project/capstone
                    project in Bangkit Academy which became my first project
                    build an Android app as a Team with combining Machine
                    Learning Team and Cloud Computing Team.
                </>
            ),
            id: (
                <>
                    VisitCampus adalah aplikasi yang mudah digunakan untuk
                    mendapatkan informasi seputar perguruan tinggi. Aplikasi ini
                    menyajikan berbagai informasi tentang berbagai jenis
                    perguruan tinggi seperti deskripsi, prestasi, lulusan, dan
                    jalur pendaftaran, serta dapat menampilkan lingkungan kampus
                    melalui Street View dari Google Maps SDK, yang semuanya
                    dirangkum dalam satu aplikasi. Aplikasi ini juga
                    mengimplementasikan model Machine Learning yang telah di-
                    deploy oleh tim Cloud Computing untuk memberikan gambaran
                    bidang ilmu yang sesuai dengan pengguna berdasarkan jawaban
                    atas pertanyaan yang diberikan. Informasi ini dapat
                    dijadikan panduan dalam mendaftar ke perguruan tinggi.
                    Tersedia juga chatbot yang dapat membantu pengguna jika
                    ingin bertanya seputar perguruan tinggi. Project ini
                    merupakan capstone project saya di Bangkit Academy,
                    sekaligus project pertama saya membangun aplikasi Android
                    secara tim bersama tim Machine Learning dan tim Cloud
                    Computing.
                </>
            ),
        },
        date: {
            en: "November 2023 - December 2023",
            id: "November 2023 - Desember 2023",
        },
        category: "Android",
    },
    {
        id: 5,
        name: "SIKAP (Sistem Informasi Kearsipan Penduduk)",
        slug: "sikap",
        role: "Software Engineer Intern",
        techStack: ["Laravel", "PHP"],
        playStore: "",
        note: {
            en: "The GitHub repository is private because this project was built for a government agency.",
            id: "Repository GitHub bersifat privat karena project ini dibuat untuk instansi pemerintah.",
        },
        github: "",
        image: fifthProject,
        desc: {
            en: (
                <>
                    SIKAP (Sistem Informasi Kearsipan Penduduk) is a website
                    application used for data archiving management at Dinas
                    Kependudukan dan Pencatatan Sipil Kota Malang (Disdukcapil
                    Kota Malang), used internally by Disdukcapil Kota Malang.
                    This application has many features such as login, view
                    record of track, add archive document, view archive
                    document, edit and delete archive documents, and many more
                    feature that differ for each type of user.
                </>
            ),
            id: (
                <>
                    SIKAP (Sistem Informasi Kearsipan Penduduk) adalah aplikasi
                    berbasis website untuk manajemen pengarsipan data di Dinas
                    Kependudukan dan Pencatatan Sipil Kota Malang (Disdukcapil
                    Kota Malang) yang digunakan untuk keperluan internal
                    Disdukcapil Kota Malang. Aplikasi ini memiliki banyak fitur
                    seperti login, melihat riwayat pelacakan arsip, serta
                    menambah, melihat, mengedit, dan menghapus dokumen arsip,
                    dengan fitur yang berbeda untuk setiap jenis pengguna.
                </>
            ),
        },
        date: { en: "Feb 2024 - July 2024", id: "Feb 2024 - Juli 2024" },
        category: "Website",
    },
];

export const highlights = [
    { id: 1, value: educations[0].grade, label: { en: "GPA", id: "IPK" }, path: "/education" },
    { id: 2, value: projects.length, label: "Projects", path: "/project" },
    {
        id: 3,
        value: certifications.length,
        label: { en: "Certifications", id: "Sertifikasi" },
        path: "/education",
    },
    {
        id: 4,
        value: "Google",
        label: "Associate Android Developer",
        path: "/education",
    },
];
