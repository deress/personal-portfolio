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
    {
        id: 1,
        path: "/about",
        text: "About",
    },
    {
        id: 2,
        path: "/education",
        text: "Education",
    },
    {
        id: 3,
        path: "/experience",
        text: "Experience",
    },
    {
        id: 4,
        path: "/project",
        text: "Projects",
    },
    {
        id: 5,
        path: "CV_Idris Muhammad.pdf",
        isFile: true,
        text: "Resume",
    },
];

export const skillsTools = [
    {
        id: 1,
        name: "Github",
        icon: "ri-github-fill",
        color: "#333",
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
        since: "Aug 2021 - July 2025",
        major: "Bachelor's Degree in Information Systems - S.Kom.",
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
        since: "Aug 2023 - Jan 2024",
        status: "Apprenticeship",
        desc: (
            <>
                Bangkit is a unique career readiness program led by Google and
                delivered with support from industry experts from their industry
                partners like GoTo and Traveloka. The
                program is designed to provide participants with first-hand
                exposure to real-world practitioners and prepare them with
                relevant skills for a successful career in leading tech
                companies.
                <br />I am successfully selected to be 3,100 participants from
                63,000 registrants as Mobile Developer (Android) Trainees and
                graduated as Google Certified Associate Android Developer.
            </>
        ),
        responsibility: [
            "Attend all Bangkit Team Meeting and Instructor Led-Training sessions, which has 3 types (soft skills, english, and tech)",
            "Attend Weekly Consultation with Facilitator",
            "Finish every assignment for each week within deadline",
            "Finish all mandatory courses for Android Learning Path on Dicoding platform",
            "Build capstone project namely VisitCampus",
            "Build android apps from scratch",
        ],
    },
    {
        id: 2,
        position: "Software Engineer Intern",
        company: "Dinas Kependudukan dan Pencatatan Sipil Kota Malang",
        companyLink: "https://dispendukcapil.malangkota.go.id/",
        since: "Feb 2024 - Jul 2024",
        status: "Internship",
        desc: (
            <>
                Dinas Kependudukan dan Pencatatan Sipil Kota Malang is a
                government agency responsible for managing population data and
                civil records in Malang City. Their work is crucial for ensuring
                that accurate demographic data is maintained and that citizens
                have access to official identification and civil documentation.
            </>
        ),
        responsibility: [
            "Building a website-based Sistem Informasi Kearsipan Penduduk (SIKAP, formerly named SIMARSIP) application using the Laravel framework starting from the analysis stage, UI design and prototyping, Front-end development, Back-end integration, to the evaluation stage.",
            "Conducting debugging and evaluation of the Sistem Informasi Administrasi Pelayanan Elektronik Terintegrasi website.",
            "Coordinated and collaborated with other team members in working on a project to achieve maximum results.",
        ],
    },
    {
        id: 3,
        position: "Software Engineer",
        company: "MUC Consultindo",
        companyLink: "https://muc.co.id/id",
        since: "Dec 2025 - Present",
        status: "Contract",
        desc: (
            <>
                MUC Consulting has grown into one of Indonesia’s leading 
                business consulting firms, built on a foundation of integrity, 
                professionalism, and strong ethical values. As part of MUC Consulting’s 
                commitment to Good Corporate Citizenship, we actively support the 
                initiatives of Indonesia Business Links, Indonesia Global Compact, 
                and United Nations Global Compact in advancing ethical and sustainable business practices.
            </>
        ),
        responsibility: [
            "Built an internal billing and invoicing system from scratch in Laravel, delivering its core features end to end within 5 months.",
            "Develop and maintain 6 software applications, spanning new builds from scratch and enhancements to existing systems.",
            "Integrated 3 internal company systems into 1 unified workflow, connecting their data so it no longer lives in separate tools.",
            "Support users and cross-functional teams by resolving technical issues, refining UI/UX from feedback, writing technical documentation and safeguarding data integrity.",
        ],
    },
];

export const organizationExperience = [
    {
        id: 1,
        position: "Staff of Development Member Resources",
        company: "Unit Kegiatan Mahasiswa O-MACO",
        companyLink: "",
        since: "Mar 2022 - Dec 2023",
        desc: (
            <>
                Unit Kegiatan Mahasiswa O-MACO Student Activity Unit is a sports
                organization under the auspices of the BEM, Faculty of Computer
                Science, University of Jember. UKM O-MACO is a structured forum
                for developing students&apos; interests and talents in several
                sports fields at this UKM.
            </>
        ),
        responsibility: [
            "Finished all division work programs that increase member value",
            "Designing a cadre system and member resources, holding continuous learning and training programs for members",
            "Developing, nurturing, and providing a platform for members to learn, be creative, and produce loyal and militant cadres",
        ],
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
        link: "myproject/githubUser.html",
        github: "",
        image: firstProject,
        desc: (
            <>
                Github User is an Android apps that uses the Github API to got
                the data and implement it by using Retrofit. This application
                have feature to search the github users, view their profiles,
                and assign them to favorites whose the data is stored in local
                storage by using Room. I also implement TabLayout for the
                following and followers of users, RecyclerView, and many more.
                This project is one of the submissions in the &quot;Belajar
                Fundamental Aplikasi Android course at Dicoding Indonesia&quot;
                which became my first project in building an Android apps by
                integrating APIs and databases into the apps. I made this
                project from scratch until it can be used by myself and I got
                5/5 stars for this submission rating.
            </>
        ),
        date: "September 2023",
        category: "Android",
    },
    {
        id: 2,
        name: "Dicoding Story",
        link: "myproject/dicodingStory.html",
        github: "",
        image: secondProject,
        desc: (
            <>
                Dicoding Story is an Android apps that have many features. The
                application uses a Private API from Dicoding. The features are
                login register authentication, view stories, view the detail of
                story, upload new story (pictures and text) and can also to add
                location, view map with the position of each story by using
                Google Map API. I also implement animation, custom view,
                preferences, paging 3, unit testing and the other component.
                This project is one of the submissions in the “Belajar
                Pengembangan Aplikasi Android Intermediate” course at Dicoding
                Indonesia which became my first project in building an Android
                apps by Google&apos;s APIs from Google Cloud into the apps. I
                made this project from scratch until it can be used by myself
                and I got 4/5 stars for the submission rating.
            </>
        ),
        date: "October 2023",
        category: "Android",
    },
    {
        id: 3,
        name: "Basket Roster",
        link: "myproject/basketRoster.html",
        github: "",
        image: thirdProject,
        desc: (
            <>
                Basket Roster is a simple Android apps that implement Jetpack
                Compose and using static data that I collected from the seagame
                roster. The idea is that users can get an overview about
                Indonesian&apos;s basketball SEA Games player. This project is
                for completing the submission in the “Belajar Membuat Aplikasi
                Android dengan Jetpack Compose” course at Dicoding Indonesia
                which became my first project in building an Android apps by
                using Jetpack Compose. I made this project from scratch until it
                can be used by myself and I got 4/5 stars for this submission
                rating.
            </>
        ),
        date: "November 2023",
        category: "Android",
    },
    {
        id: 4,
        name: "VisitCampus",
        link: "myproject/VisitCampus.html",
        github: "https://github.com/deress/VisitCampus",
        image: forthProject,
        desc: (
            <>
                VisitCampus is an easy to use application that provides
                information about colleges. This application provides various
                information about various types of colleges such as
                descriptions, achievements, graduates, registration paths, and
                can display the college environment by using Street View from
                Google Maps SDK which is summarized into one complete
                application. This application also implements Machine Learning
                Model that have been deployed by the Cloud Computing Team to
                provides features that can give insight regarding the scope of
                science that suit the user by answering the questions given.
                This information can be used by users as a guide for applying to
                college. There is also chatbot, it can be used by the users if
                they want ask something about college this chatbot can helped
                it. This project is my final project/capstone project in Bangkit
                Academy which became my first project build an Android apps as a
                Team with combining Machine Learning Team and Cloud Computing
                Team.
            </>
        ),
        date: "November 2023 - December 2023",
        category: "Android",
    },
    {
        id: 5,
        name: "SIKAP (Sistem Informasi Kearsipan Penduduk)",
        link: "myproject/sikap.html",
        github: "",
        image: fifthProject,
        desc: (
            <>
                SIKAP (Sistem Informasi Kearsipan Penduduk) is an website
                application that use to data archiving management on Dinas
                Kependudukan dan Pencatatan Sipil Kota Malang (Disdukcapil Kota
                Malang), it use for the Internal Side of Disdukcapil Kota
                Malang. This application has many features such as login, view
                record of track, add archive document, view archive document,
                edit view document, delete view document, and many more feature
                that differ for each type of user.
            </>
        ),
        date: "Feb 2024 - July 2024",
        category: "Website",
    },
];
