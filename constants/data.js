import { faker } from "@faker-js/faker";


export const colors = {
    text: "#444",
    buttonBG: "#1ea1ed"
};

export const following = [
    {
        url: "https://pbs.twimg.com/profile_images/939022584183533568/w74YZndQ_400x400.jpg",
        name: "ONE OK ROCK",
        tag: "Music & Pop",
        motto: "We will rock you!",
        time: "1w",
        type: "Community"
    },
    {
        url: "https://pbs.twimg.com/profile_images/1390108477801046019/80AxIOUI_400x400.jpg",
        name: "HOOPERS",
        tag: "Basketball",
        time: "4w",
        motto: "Time to dunk ⛹️‍♂️",
        type: "Club"
    },

    {
        url: "https://pbs.twimg.com/profile_images/1229760579650363392/LSX8S-Dq_400x400.jpg",
        name: "Black Society",
        tag: "Science & Astronomy",
        motto: "Love to sneak into black hole 🚀",
        time: "7w",
        type: "Club"
    },
    {
        url: "https://pbs.twimg.com/profile_images/1642590352849657860/l7RyJe4m_400x400.png",
        name: "Pawn Society",
        tag: "Chess",
        time: "11w",
        type: "Club",
        motto: "Time to dunk ⛹️‍♂️",
    },
    {
        url: "https://pbs.twimg.com/profile_images/1007645578266927104/vnWMv9-3_400x400.jpg",
        name: "Space Porn",
        tag: "Space and Astronomy",
        time: "1w",
        type: "Community",
        motto: "Love to sneak into black hole 🚀",
    },
    {
        url: "https://pbs.twimg.com/profile_images/1383179127868493824/ipj3IYea_400x400.jpg",
        name: "Starship",
        tag: "Space and Astronomy",
        time: "1w",
        type: "Community",
        motto: "Time to dunk ⛹️‍♂️",
    },
    {
        url: "https://pbs.twimg.com/profile_images/1621216068361412612/XDsy0IeQ_400x400.jpg",
        name: "Ai",
        tag: "Artificial Intelligence and Machine Learning",
        time: "1w",
        type: "Community",
        motto: "Love to sneak into black hole 🚀",
    },
    {
        url: "https://pbs.twimg.com/profile_images/1634058036934500352/b4F1eVpJ_400x400.jpg",
        name: "GPT Society",
        tag: "Artificial Intelligence and Machine Learning",
        time: "1w",
        type: "Community",
        motto: "Time to dunk ⛹️‍♂️",
    },
    {
        url: "https://pbs.twimg.com/profile_images/730425410631016448/uExGMwQ4_400x400.jpg",
        name: "Developer Guys",
        tag: "Software development",
        time: "1w",
        type: "Community",
        motto: "Time to dunk ⛹️‍♂️",
    },
    {
        url: "https://pbs.twimg.com/profile_images/1387934781514686468/DvGgBAHs_400x400.jpg",
        name: "Hacker Real",
        tag: "Software development",
        time: "1w",
        type: "Community",
        motto: "Time to dunk ⛹️‍♂️",
    }
];


export const suggestions = [
    {
        url: "https://pbs.twimg.com/profile_images/1007645578266927104/vnWMv9-3_400x400.jpg",
        name: "Space Porn",
        tag: "Space and Astronomy",
        time: "1w",
        type: "Community",
        motto: "If you are the one who walks with his eyes looking upwards wondering what's up there then this is the right community for you.",
        activeMembers: "143"
    },
    {
        url: "https://pbs.twimg.com/profile_images/1383179127868493824/ipj3IYea_400x400.jpg",
        name: "Starship",
        tag: "Space and Astronomy",
        time: "1w",
        type: "Club",
        motto: "Here we keep track of all the recent developments in field of space. Right now we all are hooked on Starship.",
        activeMembers: "165"
    },
    {
        url: "https://pbs.twimg.com/profile_images/1621216068361412612/XDsy0IeQ_400x400.jpg",
        name: "Ai",
        tag: "Artificial Intelligence and Machine Learning",
        time: "1w",
        type: "Community",
        motto: "Want to step into the world of ai and ml then this is the door. We make different models and train them on real dataset to get astonishing results.",
        activeMembers: "165"
    },
    {
        url: "https://pbs.twimg.com/profile_images/1634058036934500352/b4F1eVpJ_400x400.jpg",
        name: "GPT Society",
        tag: "Artificial Intelligence and Machine Learning",
        time: "1w",
        type: "Club",
        motto: "Hey! It's time to get your hands on Chat Gpt-4. Let's join together to explore the true potential of this remarkable model.",
        activeMembers: "165"
    },
    {
        url: "https://pbs.twimg.com/profile_images/1387934781514686468/DvGgBAHs_400x400.jpg",
        name: "Hacker Real",
        tag: "Software development",
        time: "1w",
        type: "Community",
        motto: "Let me make clear, it is ethical hacking for the records but we here we post beyond that.",
        activeMembers: "165"
    }
];

export const suggestionClub = following;

export const suggestionCommunity = suggestions;


export const colorsCommunity = {
    title: "#000000",
    label: "#444"
};

export const cover = {
    main: require("../assets/blackHole.jpeg"),
    secondary: require("../assets/blackCover.jpg"),
    title: "Black Hole",
    label: "A black hole is like a celestial vacuum cleaner, sucking up everything in its path and leaving no trace behind.And this the place where bunch of space nerds keep track of the updates of these giant suckers.",
    created: "May 2023",
    member: "112",
    user: "https://images.pexels.com/photos/1674752/pexels-photo-1674752.jpeg?auto=compress&cs=tinysrgb&w=800"
};


export const data = [
    {
        key: 1,
        content: require("../assets/data1.jpeg"),
        desc: "New findings mapping the cosmic growth of the universe support Einstein’s theory of gravity More: mesonstars.com / space / new- find"
    }
];

export const community = [
    {
        img: require("../assets/mars.jpeg"),
        title: "Mars"
    },
    {
        img: require("../assets/faceToFace.jpeg"),
        title: "Astronauts"
    },
    {
        img: require("../assets/uni3.jpeg"),
        title: "Cosmos"
    },
    {
        img: require("../assets/flight.jpeg"),
        title: "Flight guys"
    },
    {
        img: require("../assets/cartoon.jpeg"),
        title: 'Space tech'
    }
];



export const profile = [...Array(8).keys()].map((_, i) => {
    return {
        key: faker.datatype.uuid(),
        image: `https://randomuser.me/api/portraits/${faker.helpers.arrayElement(['women', 'men'])}/${faker.random.numeric()}.jpg`,
        name: faker.name.firstName(),
        jobTitle: faker.name.jobTitle(),
        email: faker.internet.email(),
    }
})

export const colorsClub = {
    backgroundColor: "#abc5dc",
    mainText: "#FFFFF0",
    androidColor: "#8cb7dd"
};

export const clubHeader = {
    title: "Sheyn",
    motto: "Exploring the skies, reaching new heights: Together as one, with aerospace might!"
};

export const homePage = [
    {
        key: "event",
        url: "https://img.freepik.com/premium-vector/international-civil-aviation-day_652515-66.jpg",
        data: {
            dl: true, link: true, memberId: ["https://images.pexels.com/photos/3769706/pexels-photo-3769706.jpeg?auto=compress&cs=tinysrgb&w=800", "https://images.pexels.com/photos/12192379/pexels-photo-12192379.jpeg?auto=compress&cs=tinysrgb&w=800"]
        },
        text: "Civil Aviation Day is being celebrated all over the world. Register on the link www.cad.gon.in to be part of it."
    },
    {
        key: "event",
        url: "https://images.pexels.com/photos/256379/pexels-photo-256379.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        data: {
            dl: true, link: true, memberId: ["https://images.pexels.com/photos/3769706/pexels-photo-3769706.jpeg?auto=compress&cs=tinysrgb&w=800", "https://images.pexels.com/photos/12192379/pexels-photo-12192379.jpeg?auto=compress&cs=tinysrgb&w=800"]
        },
        text: "This is what it means to be on the top of the world. Tune in to www.nasa.gov.us/radio for live ISS view. #NASA"
    },
    {
        key: "event",
        url: "https://img.freepik.com/premium-vector/international-civil-aviation-day_652515-66.jpg",
        data: {
            dl: true, link: true, memberId: ["https://images.pexels.com/photos/3769706/pexels-photo-3769706.jpeg?auto=compress&cs=tinysrgb&w=800", "https://images.pexels.com/photos/12192379/pexels-photo-12192379.jpeg?auto=compress&cs=tinysrgb&w=800"]
        },
        text: "Civil Aviation Day is being celebrated all over the world. Register on the link www.cad.gon.in to be part of it."
    },
    {
        key: "event",
        url: "https://images.pexels.com/photos/256379/pexels-photo-256379.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        data: {
            dl: true, link: true, memberId: ["https://images.pexels.com/photos/3769706/pexels-photo-3769706.jpeg?auto=compress&cs=tinysrgb&w=800", "https://images.pexels.com/photos/12192379/pexels-photo-12192379.jpeg?auto=compress&cs=tinysrgb&w=800"]
        },
        text: "This is what it means to be on the top of the world. Tune in to www.nasa.gov.us/radio for live ISS view. #NASA"
    }
];

export const gallery = [
    {
        url: "https://images.pexels.com/photos/11101053/pexels-photo-11101053.jpeg?auto=compress&cs=tinysrgb&w=800",
        desc: "Our first model.",
        key: "image"
    },
    {
        url: "https://images.pexels.com/photos/358319/pexels-photo-358319.jpeg?auto=compress&cs=tinysrgb&w=800",
        desc: "Soaring the sky.",
        key: "image"
    },
    {
        url: "https://images.pexels.com/photos/243167/pexels-photo-243167.jpeg?auto=compress&cs=tinysrgb&w=800",
        desc: "Back to drawing board.",
        key: "image"
    },
    {
        url: "https://images.pexels.com/photos/3862373/pexels-photo-3862373.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        desc: "Our first model.",
        key: "image"
    },
    {
        url: "https://images.pexels.com/photos/8244954/pexels-photo-8244954.jpeg?auto=compress&cs=tinysrgb&w=800",
        desc: "It's time for test flight...",
        key: "image"
    },
    {
        url: "https://images.pexels.com/photos/8244925/pexels-photo-8244925.jpeg?auto=compress&cs=tinysrgb&w=800",
        desc: "Sometimes crash teaches you a lot.",
        key: "image"
    },
    {
        url: "https://images.pexels.com/photos/8244986/pexels-photo-8244986.jpeg?auto=compress&cs=tinysrgb&w=800",
        desc: "Our first model.",
        key: "image"
    },
    {
        url: "https://images.pexels.com/photos/8310149/pexels-photo-8310149.jpeg?auto=compress&cs=tinysrgb&w=800",
        desc: "Our first model.",
        key: "image"
    },
    {
        url: "https://images.pexels.com/photos/10445421/pexels-photo-10445421.png?auto=compress&cs=tinysrgb&w=800",
        desc: "Our first model.",
        key: "image"
    },
    {
        url: "https://images.pexels.com/photos/4515047/pexels-photo-4515047.jpeg?auto=compress&cs=tinysrgb&w=800",
        desc: "Our first model.",
        key: "image"
    },
    {
        url: "https://images.pexels.com/photos/11101053/pexels-photo-11101053.jpeg?auto=compress&cs=tinysrgb&w=800",
        desc: "Our first model.",
        key: "image"
    },
    {
        url: "https://images.pexels.com/photos/11528165/pexels-photo-11528165.jpeg?auto=compress&cs=tinysrgb&w=800",
        desc: "Our first model.",
        key: "image"
    },
    {
        url: "https://images.pexels.com/photos/11917447/pexels-photo-11917447.jpeg?auto=compress&cs=tinysrgb&w=800",
        desc: "Our first model.",
        key: "image"
    },
    {
        url: "https://images.pexels.com/photos/11917451/pexels-photo-11917451.jpeg?auto=compress&cs=tinysrgb&w=800",
        desc: "Our first model.",
        key: "image"
    },
    {
        url: "https://images.pexels.com/photos/11917449/pexels-photo-11917449.jpeg?auto=compress&cs=tinysrgb&w=800",
        desc: "Our first model.",
        key: "image"
    },
];

export const gallery2 = [
    {
        url: "https://images.pexels.com/photos/358319/pexels-photo-358319.jpeg?auto=compress&cs=tinysrgb&w=800",
        desc: "Wings are opened...",
        key: "image"
    },
    {
        url: "https://images.pexels.com/photos/11101053/pexels-photo-11101053.jpeg?auto=compress&cs=tinysrgb&w=800",
        desc: "We love to fly.",
        key: "image"
    },
    {
        url: "https://images.pexels.com/photos/10445421/pexels-photo-10445421.png?auto=compress&cs=tinysrgb&w=800",
        desc: "First landing attempt on wet runway.",
        key: "image"
    },
    {
        url: "https://images.pexels.com/photos/243167/pexels-photo-243167.jpeg?auto=compress&cs=tinysrgb&w=800",
        desc: "Every morning something inspires us.",
        key: "image"
    },
    {
        url: "https://images.pexels.com/photos/4515047/pexels-photo-4515047.jpeg?auto=compress&cs=tinysrgb&w=800",
        desc: "Our first model.",
        key: "image"
    },
    {
        url: "https://images.pexels.com/photos/11101053/pexels-photo-11101053.jpeg?auto=compress&cs=tinysrgb&w=800",
        desc: "Our first model.",
        key: "image"
    },
    {
        url: "https://images.pexels.com/photos/3862373/pexels-photo-3862373.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        desc: "Our first model.",
        key: "image"
    },
    {
        url: "https://images.pexels.com/photos/8244954/pexels-photo-8244954.jpeg?auto=compress&cs=tinysrgb&w=800",
        desc: "Our first model.",
        key: "image"
    },
    {
        url: "https://images.pexels.com/photos/8244925/pexels-photo-8244925.jpeg?auto=compress&cs=tinysrgb&w=800",
        desc: "Our first model.",
        key: "image"
    },
    {
        url: "https://images.pexels.com/photos/8244986/pexels-photo-8244986.jpeg?auto=compress&cs=tinysrgb&w=800",
        desc: "Our first model.",
        key: "image"
    },
    {
        url: "https://images.pexels.com/photos/8310149/pexels-photo-8310149.jpeg?auto=compress&cs=tinysrgb&w=800",
        desc: "Our first model.",
        key: "image"
    },
    {
        url: "https://images.pexels.com/photos/11528165/pexels-photo-11528165.jpeg?auto=compress&cs=tinysrgb&w=800",
        desc: "Our first model.",
        key: "image"
    },
    {
        url: "https://images.pexels.com/photos/11917447/pexels-photo-11917447.jpeg?auto=compress&cs=tinysrgb&w=800",
        desc: "Our first model.",
        key: "image"
    },
    {
        url: "https://images.pexels.com/photos/11917451/pexels-photo-11917451.jpeg?auto=compress&cs=tinysrgb&w=800",
        desc: "Our first model.",
        key: "image"
    },
    {
        url: "https://images.pexels.com/photos/11917449/pexels-photo-11917449.jpeg?auto=compress&cs=tinysrgb&w=800",
        desc: "Our first model.",
        key: "image"
    },];

export const communityData = [
    {
        url: "https://pbs.twimg.com/media/FvY3pXlWcAAQ0WH?format=jpg&name=medium",
        text: "Join @NASA’s Transform to Open Science program on May 11 for a community forum featuring experts from@CERN&@NASA!Discover the role of international collaboration in space exploration and the power of open science.Register: https://bit.ly/44AuduS",
        like: 112,
        comment: 34,
        name: "Gravefield",
        date: "May 12",
        profile: "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=800",
        communityName: "Space Porn",
        communityProfile: "https://pbs.twimg.com/profile_images/1007645578266927104/vnWMv9-3_400x400.jpg",
        time: "3d"
    },
    {
        url: "https://pbs.twimg.com/media/FqOgbgXWwAM4cHH?format=jpg&name=medium",
        text: "Educators, mark your calendars! From May 8th-12th, #NASAScience will celebrate #TeacherAppreciationWeek with Digital Learning Week, a virtual event designed with you in mind. Access the ready-to-use resources, live events, & on-demand programming you need: http://go.nasa.gov/41ZUikX",
        like: 56,
        comment: 57,
        name: "Tanaka",
        date: "May 9",
        profile: "https://images.pexels.com/photos/810775/pexels-photo-810775.jpeg?auto=compress&cs=tinysrgb&w=800",
        communityName: "Space Porn",
        communityProfile: "https://pbs.twimg.com/profile_images/1007645578266927104/vnWMv9-3_400x400.jpg",
        time: "3d"
    },
    {
        url: "https://pbs.twimg.com/media/FvS8WlwX0AEOPWj?format=jpg&name=medium",
        text: "In 2021, NuSTAR followed up on a tidal disruption event and found that an extremely hot structure formed as the black hole pulled in the star’s material. This data is helping astronomers understand what happens to material captured by a black hole. https://go.nasa.gov/3jkovdr",
        like: 32,
        comment: 45,
        name: "Ammy",
        date: "May 10",
        profile: "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=800",
        communityName: "Space Porn",
        communityProfile: "https://pbs.twimg.com/profile_images/1007645578266927104/vnWMv9-3_400x400.jpg",
        time: "3d"
    },
    {
        url: "https://pbs.twimg.com/media/FvNXLctWYAAIne7?format=jpg&name=medium",
        text: "Educators, mark your calendars! From May 8th-12th, #NASAScience will celebrate #TeacherAppreciationWeek with Digital Learning Week, a virtual event designed with you in mind. Access the ready-to-use resources, live events, & on-demand programming you need: http://go.nasa.gov/41ZUikX",
        like: 56,
        comment: 57,
        name: "Tanaka",
        date: "May 9",
        profile: "https://images.pexels.com/photos/810775/pexels-photo-810775.jpeg?auto=compress&cs=tinysrgb&w=800",
        communityName: "Space Porn",
        communityProfile: "https://pbs.twimg.com/profile_images/1007645578266927104/vnWMv9-3_400x400.jpg",
        time: "3d"
    }
];

export const bg = "https://images.pexels.com/photos/5487952/pexels-photo-5487952.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

export const ccHome = [
    {
        url: "https://images.pexels.com/photos/9729881/pexels-photo-9729881.jpeg?auto=compress&cs=tinysrgb&w=800",
        color: '#db9efa',
    },
    {
        url: "https://images.pexels.com/photos/15362142/pexels-photo-15362142.jpeg?auto=compress&cs=tinysrgb&w=800",
        color: '#a1e3a1',
    },
    {
        url: "https://images.pexels.com/photos/15362125/pexels-photo-15362125.jpeg?auto=compress&cs=tinysrgb&w=800",
        color: '#9dcdfa',
    },
    {
        url: "https://images.pexels.com/photos/15299013/pexels-photo-15299013.jpeg?auto=compress&cs=tinysrgb&w=800",
        color: "#fae69d"
    },
    {
        url: "https://images.pexels.com/photos/15362141/pexels-photo-15362141.jpeg?auto=compress&cs=tinysrgb&w=800",
        color: "#fd938f"
    }
];


export const searchIcon = [
    {
        color: "#27856a",
        name: "Clubs",
        url: "https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=1600"
    },
    {
        color: "rgb(14,115,236)",
        name: "Community",
        url: "https://images.pexels.com/photos/923657/pexels-photo-923657.jpeg?auto=compress&cs=tinysrgb&w=1600"
    },
    {
        color: "#f59b23",
        name: "Made for you",
        url: "https://images.pexels.com/photos/3856027/pexels-photo-3856027.jpeg?auto=compress&cs=tinysrgb&w=1600"
    },
    {
        color: "#8c1932",
        name: "Coding",
        url: "https://images.pexels.com/photos/4974920/pexels-photo-4974920.jpeg?auto=compress&cs=tinysrgb&w=1600"
    },
    {
        color: "#503750",
        name: "Basketball",
        url: "https://images.pexels.com/photos/5384621/pexels-photo-5384621.jpeg?auto=compress&cs=tinysrgb&w=1600"
    },
    {
        color: "#477d95",
        name: "Universe",
        url: "https://images.pexels.com/photos/33688/delicate-arch-night-stars-landscape.jpg?auto=compress&cs=tinysrgb&w=1600"
    },
    {
        color: "#ba5d06",
        name: "Hydrogen",
        url: "https://images.pexels.com/photos/10670941/pexels-photo-10670941.jpeg?auto=compress&cs=tinysrgb&w=1600"
    },
    {
        color: "#af2896",
        name: "Poetry",
        url: "https://images.pexels.com/photos/904616/pexels-photo-904616.jpeg?auto=compress&cs=tinysrgb&w=1600"
    },
    {
        color: "#148a07",
        name: "Social",
        url: "https://images.pexels.com/photos/8042458/pexels-photo-8042458.jpeg?auto=compress&cs=tinysrgb&w=1600"
    },
    {
        color: "#503750",
        name: "Music",
        url: "https://images.pexels.com/photos/2123606/pexels-photo-2123606.jpeg?auto=compress&cs=tinysrgb&w=1600"
    },
    {
        color: "#0d73ec",
        name: "Ai",
        url: "https://images.pexels.com/photos/6153354/pexels-photo-6153354.jpeg?auto=compress&cs=tinysrgb&w=1600"
    },
    {
        color: "#8c1932",
        name: "Airplane",
        url: "https://images.pexels.com/photos/4515047/pexels-photo-4515047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
];

export const contribution = {
    joinDate: "May 2023",
    contributions: 32,
    rating: 882,
    badge: "elite",
    bestStreak: 13,
    currentStreak: 4,
    likes: 321,
    profile: "https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=800",
    name: "Spargens",
    community: "Black Hole"
}
