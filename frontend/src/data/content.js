export const BUSINESS = {
    name: "IRONBLOOD FITNESS STUDIO ♾️",
    shortName: "IRONBLOOD",
    owner: "BAPI DAS",
    ownerTitle: "PROFESSIONAL BODYBUILDER & FITNESS COACH",
    addressLines: ["50, Bansdroni Park, Ward Number 113,", "Kolkata, West Bengal 700070, India"],
    addressShort: "Bansdroni Park, Kolkata",
    phoneDisplay: "+91 82820 72600",
    phoneRaw: "+918282072600",
    whatsappNumber: "918282072600",
    hoursDays: "MONDAY – SUNDAY",
    hoursTime: "6:00 AM – 11:00 PM",
    mapsUrl:
        "https://www.google.com/maps/search/?api=1&query=IRONBLOOD+FITNESS+STUDIO,+50+Bansdroni+Park,+Ward+Number+113,+Kolkata,+West+Bengal+700070",
    mapsEmbedUrl:
        "https://www.google.com/maps?q=IRONBLOOD+FITNESS+STUDIO,+50+Bansdroni+Park,+Ward+Number+113,+Kolkata,+West+Bengal+700070&output=embed",
    googleRating: "4.8",
    googleReviewCount: "249",
    googleListingUrl:
        "https://www.google.com/search?q=ironblood+fitness+studio+reviews",
};

export const telHref = `tel:${BUSINESS.phoneRaw}`;
export const waHref = `https://wa.me/${BUSINESS.whatsappNumber}`;

export const NAV_LINKS = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/achievements", label: "Achievements" },
    { to: "/services", label: "Services" },
    { to: "/facilities", label: "Facilities" },
    { to: "/memberships", label: "Memberships" },
    { to: "/gallery", label: "Gallery" },
    { to: "/contact", label: "Contact" },
];

export const IMAGES = {
    bapiPose: {
        src: "/images/bapi-pose.jpg",
        alt: "Bapi Das, professional bodybuilder and head coach of Ironblood Fitness Studio, hitting a front double-biceps pose in peak contest condition",
    },
    bapiCollage: {
        src: "/images/bapi-collage.jpg",
        alt: "Competition collage of Bapi Das wearing his medal and holding the Indian flag alongside stage posing shots",
    },
    gymFloor1: {
        src: "/images/gym-floor-1.jpg",
        alt: "Ironblood Fitness Studio main training floor with benches, plate-loaded machines, cable stations and trophy shelf",
    },
    gymFloor2: {
        src: "/images/gym-floor-2.jpg",
        alt: "Strength training zone at Ironblood Fitness Studio with red and black machines, dumbbell racks, benches and boxing bag",
    },
    memberPress: {
        src: "/images/member-press.jpg",
        alt: "Member performing a barbell overhead press during a coached strength session at Ironblood Fitness Studio",
    },
    memberDumbbell: {
        src: "/images/member-dumbbell.jpg",
        alt: "Member performing an incline dumbbell press under supervision on the Ironblood Fitness Studio training floor",
    },
    compPoster: {
        src: "/images/comp-poster.jpg",
        alt: "Bapi Das receiving a trophy on stage at a bodybuilding championship, featured on an Iron Blood Muscle and Fitness Studio poster",
    },
    trophyWall: {
        src: "/images/trophy-wall.jpg",
        alt: "Bapi Das at the Ironblood Fitness Studio front desk in front of his trophy, medal and certificate display wall",
    },
    gymFloor3: {
        src: "/images/gym-floor-3.jpg",
        alt: "Dumbbell rack and free weights area on the Ironblood Fitness Studio training floor",
    },
    bapiTrophyFlag: {
        src: "/images/bapi-trophy-flag.jpg",
        alt: "Bapi Das on stage holding a championship trophy and the Indian flag with his winner's medal around his neck",
    },
    bapiStageSide: {
        src: "/images/bapi-stage-side.jpg",
        alt: "Bapi Das hitting a side chest pose under stage lights at a bodybuilding championship",
    },
    bapiStageBw: {
        src: "/images/bapi-stage-bw.jpg",
        alt: "Black and white stage portrait of Bapi Das in contest condition at a bodybuilding championship",
    },
    gymCommunity: {
        src: "/images/gym-community.jpg",
        alt: "Athletes of the Ironblood Fitness Championship posing with medals and certificates inside the studio",
    },
};

export const GALLERY = [
    { ...IMAGES.bapiPose, category: "The Coach" },
    { ...IMAGES.trophyWall, category: "The Coach" },
    { ...IMAGES.bapiStageBw, category: "The Coach" },
    { ...IMAGES.bapiTrophyFlag, category: "Competition" },
    { ...IMAGES.bapiCollage, category: "Competition" },
    { ...IMAGES.bapiStageSide, category: "Competition" },
    { ...IMAGES.compPoster, category: "Competition" },
    { ...IMAGES.gymFloor1, category: "The Studio" },
    { ...IMAGES.gymFloor2, category: "The Studio" },
    { ...IMAGES.gymFloor3, category: "The Studio" },
    { ...IMAGES.memberPress, category: "Training" },
    { ...IMAGES.memberDumbbell, category: "Training" },
    { ...IMAGES.gymCommunity, category: "Community" },
];

// All 14 achievements preserved verbatim from the supplied source material.
export const ACHIEVEMENTS = [
    {
        id: 1,
        title: "Junior Mr. India (IBBF)",
        year: "2016",
        results: [{ label: "Gold Medal", tier: "gold" }],
        location: "Coimbatore, Tamil Nadu",
        org: "IBBF",
    },
    {
        id: 2,
        title: "Junior Mr. India (IBBF)",
        year: "2017",
        results: [{ label: "Gold Medal", tier: "gold" }],
        location: "Maharashtra",
        org: "IBBF",
    },
    {
        id: 3,
        title: "Mr. World 2018, Delhi",
        year: "2018",
        results: [
            { label: "Bodybuilding — Gold Medal", tier: "gold" },
            { label: "Classic Physique — Gold Medal", tier: "gold" },
        ],
        location: "Delhi",
        org: "National Bodybuilding Union International (NBBUI)",
    },
    {
        id: 4,
        title: "Mr. Universe 2023",
        year: "2023",
        results: [
            { label: "Bodybuilding — Gold Medal", tier: "gold" },
            { label: "Classic Bodybuilding — Gold Medal", tier: "gold" },
        ],
        location: "Thailand, Pattaya",
        org: null,
    },
    {
        id: 5,
        title: "Mr. Asia 2019",
        year: "2019",
        results: [{ label: "Bodybuilding — Silver Medal", tier: "silver" }],
        location: "Bangalore",
        org: null,
    },
    {
        id: 6,
        title: "Mr. Asia 2019",
        year: "2019",
        results: [{ label: "Sports Model — Bronze Medal", tier: "bronze" }],
        location: "Bangalore",
        org: null,
    },
    {
        id: 7,
        title: "Mr. India (Senior) 2019",
        year: "2019",
        results: [{ label: "Bodybuilding — Silver Medal", tier: "silver" }],
        location: "Kochi / Kerala",
        org: null,
    },
    {
        id: 8,
        title: "Mr. Bengal",
        year: null,
        results: [
            { label: "13 Times — Gold Medal", tier: "gold" },
            { label: "4 Times — Silver Medal", tier: "silver" },
            { label: "3 Times — 3rd Place", tier: "bronze" },
        ],
        location: "West Bengal",
        org: "Various Associations",
    },
    {
        id: 9,
        title: "The Fit Expo Kolkata 2017",
        year: "2017",
        results: [{ label: "Bronze Medalist", tier: "bronze" }],
        location: "Kolkata",
        org: null,
    },
    {
        id: 10,
        title: "Numerous Other Championships",
        year: null,
        results: [{ label: "Bodybuilding & Men's Physique Championships", tier: "ranking" }],
        location: "India",
        org: null,
    },
    {
        id: 11,
        title: "Satisb Sugar Classic Bodybuilding Championship 2018",
        year: "2018",
        results: [{ label: "All India — 7th Position", tier: "ranking" }],
        location: "Belgaum, Andhra Pradesh",
        org: null,
    },
    {
        id: 12,
        title: "Federation Cup 2018",
        year: "2018",
        results: [{ label: "All India — 7th Position", tier: "ranking" }],
        location: "Patna, Bihar",
        org: "IBBF",
    },
    {
        id: 13,
        title: "Senior Mr. India 2018",
        year: "2018",
        results: [{ label: "Positioned in Top 15", tier: "ranking" }],
        location: "Pune, India",
        org: null,
    },
    {
        id: 14,
        title: "Mr. Asia & Mr. World Selection 2018",
        year: "2018",
        results: [{ label: "Positioned in Top 10", tier: "ranking" }],
        location: "Chhattisgarh",
        org: null,
    },
];

export const SPECIALIZATIONS = [
    { title: "Transformation & Competition Preparation", desc: "Stage-ready contest prep and full body transformation coaching." },
    { title: "Weight Management", desc: "Structured training and nutrition guidance for sustainable weight goals." },
    { title: "Sports Training", desc: "Athletic conditioning built around performance and discipline." },
    { title: "Stability & Mobility Training", desc: "Movement quality, joint stability and injury-aware training." },
    { title: "Strength Training", desc: "Progressive strength work with strict attention to form." },
    { title: "Nutrition & Dietician Specialist", desc: "Diet planning that supports serious training and recovery." },
];

export const SERVICES = [
    { title: "Transformation & Competition Preparation Training", tag: "Signature" },
    { title: "Weight Management", tag: "Coaching" },
    { title: "Sports Training", tag: "Performance" },
    { title: "Stability and Mobility Training", tag: "Movement" },
    { title: "Strength Training", tag: "Signature" },
    { title: "Nutrition and Dietician Specialist", tag: "Nutrition" },
    { title: "Personal Training", tag: "1-on-1" },
    { title: "Weight Training", tag: "Strength" },
    { title: "Nutrition Consulting", tag: "Nutrition" },
    { title: "Aerobics", tag: "Conditioning" },
    { title: "CrossFit", tag: "Conditioning" },
    { title: "Cycling", tag: "Cardio" },
    { title: "Private Lessons", tag: "1-on-1" },
    { title: "Youth Sports", tag: "Youth" },
];

export const FACILITIES = [
    { title: "Strength Training Equipment", desc: "Plate-loaded machines and dedicated stations for every major muscle group.", image: "gymFloor2" },
    { title: "Free Weights", desc: "Full dumbbell racks, barbells and plates for serious progressive training.", image: "gymFloor3" },
    { title: "Cardio Equipment", desc: "Treadmills and exercise cycles for conditioning work.", image: "gymFloor1" },
    { title: "Benches & Cable Stations", desc: "Adjustable benches and cable stations across the main floor.", image: "gymFloor1" },
    { title: "Functional Training Space", desc: "Boxing bag, battle ropes and open floor space for athletic work.", image: "gymFloor2" },
    { title: "Coached Training Floor", desc: "Hands-on coaching across the floor — form, tempo and progression.", image: "memberPress" },
    { title: "Competitive Environment", desc: "A trophy-lined studio built around a real bodybuilding culture.", image: "trophyWall" },
];

// 10 genuine customer reviews — wording preserved exactly as supplied.
export const REVIEWS = [
    {
        name: "Rekha Mani",
        text: "Well equipped gym.. I would definitely recommend. The atmosphere of the gym is safe and very well maintained. The owner Bapi da is nice person and approachable. Trainers are also very well behaved. I am happy with the services. Thanks Iron blood gym..!",
    },
    {
        name: "Rahul Hbk",
        text: "Great gym with top-notch, clean equipment and a very welcoming atmosphere. I’ve been training with Bonku Da, and the experience has been fantastic. They design customized workouts, pay close attention to proper form, and keep motivation high every single session. Highly recommend",
    },
    {
        name: "Anirban Gupta",
        text: "Great gym with a clean, well-equipped setup. Bapi da (the owner) is approachable and genuinely invested in helping members progress. Trainers are friendly and attentive. Highly recommend for anyone serious about fitness in the Bansdroni area",
    },
    {
        name: "Subhodeep Bhuinya",
        text: "Highly recommend this place! The owner is incredibly welcoming and helpful, which makes a huge difference. The gym is well-equipped with everything you need, and the overall aesthetic and environment are spot on. It’s a great vibe for a workout",
    },
    {
        name: "Trisanjeet Sur",
        text: "Good Training Experience. Adequate equipments. Very convenient staffs and overall a very good interaction and learning session.",
    },
    {
        name: "Ritam Pramanik",
        text: "I've had a great experience at Ironblood Fitness Studio. The trainers are knowledgeable, friendly, and always ready to help. The gym is well-maintained and has all the equipment needed for a complete workout.💪🏻🤍✨",
    },
    {
        name: "Manish Singh",
        text: "Best gym in affordable range, friendly nature, helpful in every ways and very supportive with good ambience and cleaness",
    },
    {
        name: "Payel Bose",
        text: "Fantastic environment👍👍trainers are very helpful....all equipments are very very modern & enjoying the workout time..recommended 👍👍",
    },
    {
        name: "Sayanto Chatterjee",
        text: "Great to be a part of this wonderful gym. Excellent environment, supportive trainer Chandu. Great value for money...",
    },
    {
        name: "RUPESH PATHAK",
        text: "The facility is clean, well-maintained, and equipped with a wide range of machines and free weights, catering to both beginners and advanced lifters.\n\nThe staff is friendly, professional, and always willing to assist. Whether it's demonstrating proper form or offering workout tips, their support has made a noticeable difference in my training.\n\nOne of the highlights is the atmosphere — it's motivating without being intimidating. People are focused but respectful, which creates a great community vibe. The gym also offers group classes and personal training options for those looking to take their fitness journey further.",
    },
];

export const EXPERIENCE_COPY =
    "Over 12 years of successful experience in fitness coaching, bodybuilding, weight management and body transformation, helping hundreds of clients achieve their unique fitness goals.";

export const MEDAL_STYLES = {
    gold: { dot: "#D4AF37", text: "text-[#D4AF37]", ring: "border-[#D4AF37]/40", label: "GOLD" },
    silver: { dot: "#C7C7CE", text: "text-[#C7C7CE]", ring: "border-[#C7C7CE]/40", label: "SILVER" },
    bronze: { dot: "#CD7F4E", text: "text-[#CD7F4E]", ring: "border-[#CD7F4E]/40", label: "BRONZE" },
    ranking: { dot: "#D61C24", text: "text-[#FF4A52]", ring: "border-[#D61C24]/40", label: "RANKING" },
};
