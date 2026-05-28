
export const users = [
    
        {
            id: "USR001",
            name: "Rahul Sharma",
            avatar: "https://i.pravatar.cc/150?img=1",
            role: "Patient",
            status: "Active",
            prime: true,
            email: "rahul.sharma@gmail.com",
            phone: "9876543210",
            dob: "1998-04-12",
            gender: "Male",
            bloodGroup: "B+",
            joinedDate: "2025-01-15",
            lastActive: "2 hours ago",
            metrics: {
                totalOrders: 12,
                totalAppointments: 8,
                totalFamilyMembers: 3,
                totalSpent: 12450,
            },
            addresses: [
                { type: "Home", addressLine: "H.No 45, Sector 21", city: "Delhi", state: "Delhi", pincode: "110001", isDefault: true },
                { type: "Office", addressLine: "DLF Cyber City", city: "Gurgaon", state: "Haryana", pincode: "122002", isDefault: false }
            ],
            orders: [
                { orderId: "ORD1001", date: "2026-05-20", item: "Paracetamol 500mg - 30 Tablets", amount: 350, status: "Delivered" },
                { orderId: "ORD1002", date: "2026-05-18", item: "Vitamin C Capsules", amount: 620, status: "Pending" },
                { orderId: "ORD1003", date: "2026-04-12", item: "Protein Powder", amount: 1800, status: "Delivered" },
                { orderId: "ORD1004", date: "2026-03-10", item: "Hand Sanitizer Pack", amount: 250, status: "Delivered" }
            ],
            payments: [
                { paymentId: "PAY5001", date: "2026-05-20", amount: 350, method: "UPI", status: "Success" },
                { paymentId: "PAY5002", date: "2026-05-18", amount: 620, method: "Card", status: "Success" },
                { paymentId: "PAY5003", date: "2026-04-12", amount: 1800, method: "UPI", status: "Success" },
                { paymentId: "PAY5004", date: "2026-03-10", amount: 250, method: "Cash", status: "Success" }
            ],
            familyMembers: [
                { id: "FM001", name: "Priya Sharma", relation: "Wife", dob: "2000-06-22", phone: "9876500001" },
                { id: "FM002", name: "Aryan Sharma", relation: "Son", dob: "2020-02-10", phone: "9876500002" },
            ],
        },
        {
            id: "USR002",
            name: "Neha Verma",
            avatar: "https://i.pravatar.cc/150?img=5",
            role: "Nurse",
            status: "Inactive",
            prime: false,
            email: "neha.verma@gmail.com",
            phone: "9811112233",
            dob: "1995-09-10",
            gender: "Female",
            bloodGroup: "O+",
            joinedDate: "2025-02-12",
            lastActive: "3 days ago",
            metrics: {
                totalOrders: 5,
                totalAppointments: 2,
                totalFamilyMembers: 1,
                totalSpent: 4200,
            },
            addresses: [
                { type: "Work", addressLine: "Green Park Extension", city: "Noida", state: "UP", pincode: "201301", isDefault: true },
                { type: "Home", addressLine: "Sector 62", city: "Noida", state: "UP", pincode: "201301", isDefault: false }
            ],
            orders: [
                { orderId: "ORD2001", date: "2026-05-10", item: "Blood Pressure Monitor", amount: 1800, status: "Delivered" },
                { orderId: "ORD2002", date: "2026-04-20", item: "Thermometer Digital", amount: 450, status: "Delivered" },
                { orderId: "ORD2003", date: "2026-02-15", item: "Face Masks Pack", amount: 300, status: "Delivered" }
            ],
            payments: [
                { paymentId: "PAY8001", date: "2026-05-10", amount: 1800, method: "Cash", status: "Success" },
                { paymentId: "PAY8002", date: "2026-04-20", amount: 450, method: "UPI", status: "Success" },
                { paymentId: "PAY8003", date: "2026-02-15", amount: 300, method: "Card", status: "Success" }
            ],
            familyMembers: [
                { id: "FM101", name: "Ramesh Verma", relation: "Father", dob: "1968-11-02", phone: "9811112200" },
            ],
        },
        {
            id: "USR003",
            name: "Amit Singh",
            avatar: "https://i.pravatar.cc/150?img=3",
            role: "Patient",
            status: "Active",
            prime: true,
            email: "amit.singh@gmail.com",
            phone: "9876543222",
            dob: "1997-08-14",
            gender: "Male",
            bloodGroup: "A+",
            joinedDate: "2025-03-08",
            lastActive: "15 mins ago",
            metrics: {
                totalOrders: 18,
                totalAppointments: 10,
                totalFamilyMembers: 2,
                totalSpent: 18900,
            },
            addresses: [
                { type: "Home", addressLine: "Sector 45, Gurgaon", city: "Gurgaon", state: "Haryana", pincode: "122003", isDefault: true },
                { type: "Office", addressLine: "Cyber Hub", city: "Gurgaon", state: "Haryana", pincode: "122002", isDefault: false }
            ],
            orders: [
                { orderId: "ORD3001", date: "2026-05-22", item: "Diabetes Care Kit", amount: 2200, status: "Delivered" },
                { orderId: "ORD3002", date: "2026-05-15", item: "Calcium Tablets", amount: 480, status: "Pending" },
                { orderId: "ORD3003", date: "2026-04-05", item: "Omega-3 Capsules", amount: 950, status: "Delivered" },
                { orderId: "ORD3004", date: "2026-03-20", item: "Protein Bar Box", amount: 600, status: "Delivered" }
            ],
            payments: [
                { paymentId: "PAY9001", date: "2026-05-22", amount: 2200, method: "Card", status: "Success" },
                { paymentId: "PAY9002", date: "2026-05-15", amount: 480, method: "UPI", status: "Success" },
                { paymentId: "PAY9003", date: "2026-04-05", amount: 950, method: "Card", status: "Success" },
                { paymentId: "PAY9004", date: "2026-03-20", amount: 600, method: "UPI", status: "Success" }
            ],
            familyMembers: [
                { id: "FM201", name: "Sunita Singh", relation: "Mother", dob: "1972-02-20", phone: "9876511111" },
                { id: "FM202", name: "Rohit Singh", relation: "Brother", dob: "2001-09-12", phone: "9876522222" },
            ],
        },
        {
            id: "USR004",
            name: "Priya Kapoor",
            avatar: "https://i.pravatar.cc/150?img=4",
            role: "Nurse",
            status: "Inactive",
            prime: false,
            email: "priya.kapoor@gmail.com",
            phone: "9876543333",
            dob: "1994-11-09",
            gender: "Female",
            bloodGroup: "O+",
            joinedDate: "2025-04-18",
            lastActive: "2 days ago",
            metrics: { totalOrders: 6, totalAppointments: 4, totalFamilyMembers: 1, totalSpent: 5400 },
            addresses: [
                { type: "Work", addressLine: "Rajouri Garden", city: "Delhi", state: "Delhi", pincode: "110027", isDefault: true },
                { type: "Home", addressLine: "Vikaspuri", city: "Delhi", state: "Delhi", pincode: "110018", isDefault: false }
            ],
            orders: [
                { orderId: "ORD4001", date: "2026-05-12", item: "Thermometer Digital", amount: 750, status: "Delivered" },
                { orderId: "ORD4002", date: "2026-04-10", item: "First Aid Kit", amount: 450, status: "Delivered" }
            ],
            payments: [
                { paymentId: "PAY10001", date: "2026-05-12", amount: 750, method: "Cash", status: "Success" },
                { paymentId: "PAY10002", date: "2026-04-10", amount: 450, method: "UPI", status: "Success" }
            ],
            familyMembers: [{ id: "FM301", name: "Anil Kapoor", relation: "Father", dob: "1965-07-11", phone: "9876533333" }]
        },
        {
            id: "USR005",
            name: "Karan Mehta",
            avatar: "https://i.pravatar.cc/150?img=5",
            role: "Patient",
            status: "Active",
            prime: true,
            email: "karan.mehta@gmail.com",
            phone: "9876544444",
            dob: "1996-01-25",
            gender: "Male",
            bloodGroup: "AB+",
            joinedDate: "2025-01-30",
            lastActive: "30 mins ago",
            metrics: { totalOrders: 22, totalAppointments: 14, totalFamilyMembers: 4, totalSpent: 25400 },
            addresses: [
                { type: "Home", addressLine: "MG Road", city: "Bangalore", state: "Karnataka", pincode: "560001", isDefault: true },
                { type: "Work", addressLine: "Indiranagar", city: "Bangalore", state: "Karnataka", pincode: "560038", isDefault: false }
            ],
            orders: [
                { orderId: "ORD5001", date: "2026-05-24", item: "Protein Supplements", amount: 3200, status: "Delivered" },
                { orderId: "ORD5002", date: "2026-05-19", item: "Vitamin D Tablets", amount: 640, status: "Pending" },
                { orderId: "ORD5003", date: "2026-04-15", item: "Multivitamins", amount: 800, status: "Delivered" }
            ],
            payments: [
                { paymentId: "PAY11001", date: "2026-05-24", amount: 3200, method: "UPI", status: "Success" },
                { paymentId: "PAY11002", date: "2026-05-19", amount: 640, method: "Card", status: "Success" },
                { paymentId: "PAY11003", date: "2026-04-15", amount: 800, method: "UPI", status: "Success" }
            ],
            familyMembers: [
                { id: "FM401", name: "Ritika Mehta", relation: "Wife", dob: "1998-03-18", phone: "9876544445" },
                { id: "FM402", name: "Kabir Mehta", relation: "Son", dob: "2021-06-10", phone: "9876544446" }
            ]
        },
        {
            id: "USR006",
            name: "Sneha Reddy",
            avatar: "https://i.pravatar.cc/150?img=6",
            role: "Nurse",
            status: "Active",
            prime: false,
            email: "sneha.reddy@gmail.com",
            phone: "9876545555",
            dob: "1993-10-05",
            gender: "Female",
            bloodGroup: "B-",
            joinedDate: "2025-02-20",
            lastActive: "1 hour ago",
            metrics: { totalOrders: 9, totalAppointments: 7, totalFamilyMembers: 2, totalSpent: 8700 },
            addresses: [
                { type: "Work", addressLine: "Banjara Hills", city: "Hyderabad", state: "Telangana", pincode: "500034", isDefault: true },
                { type: "Home", addressLine: "Jubilee Hills", city: "Hyderabad", state: "Telangana", pincode: "500033", isDefault: false }
            ],
            orders: [
                { orderId: "ORD6001", date: "2026-05-21", item: "Blood Sugar Test Kit", amount: 1450, status: "Delivered" },
                { orderId: "ORD6002", date: "2026-05-16", item: "Pain Relief Spray", amount: 390, status: "Cancelled" },
                { orderId: "ORD6003", date: "2026-03-05", item: "Bandages Pack", amount: 150, status: "Delivered" }
            ],
            payments: [
                { paymentId: "PAY12001", date: "2026-05-21", amount: 1450, method: "UPI", status: "Success" },
                { paymentId: "PAY12002", date: "2026-05-16", amount: 390, method: "Cash", status: "Refunded" },
                { paymentId: "PAY12003", date: "2026-03-05", amount: 150, method: "Card", status: "Success" }
            ],
            familyMembers: [{ id: "FM501", name: "Ramesh Reddy", relation: "Father", dob: "1967-12-01", phone: "9876545556" }]
        },
        {
            id: "USR007",
            name: "Aditya Verma",
            avatar: "https://i.pravatar.cc/150?img=7",
            role: "Patient",
            status: "Inactive",
            prime: false,
            email: "aditya.verma@gmail.com",
            phone: "9876546666",
            dob: "1999-06-17",
            gender: "Male",
            bloodGroup: "O-",
            joinedDate: "2025-03-14",
            lastActive: "5 days ago",
            metrics: { totalOrders: 4, totalAppointments: 3, totalFamilyMembers: 1, totalSpent: 3100 },
            addresses: [
                { type: "Home", addressLine: "Civil Lines", city: "Jaipur", state: "Rajasthan", pincode: "302006", isDefault: true },
                { type: "Office", addressLine: "Vaishali Nagar", city: "Jaipur", state: "Rajasthan", pincode: "302021", isDefault: false }
            ],
            orders: [
                { orderId: "ORD7001", date: "2026-05-11", item: "Cold & Flu Medicine", amount: 450, status: "Delivered" },
                { orderId: "ORD7002", date: "2026-02-20", item: "Hand Wash", amount: 200, status: "Delivered" }
            ],
            payments: [
                { paymentId: "PAY13001", date: "2026-05-11", amount: 450, method: "Card", status: "Success" },
                { paymentId: "PAY13002", date: "2026-02-20", amount: 200, method: "UPI", status: "Success" }
            ],
            familyMembers: [{ id: "FM601", name: "Pooja Verma", relation: "Sister", dob: "2003-08-09", phone: "9876546667" }]
        },

        {
        id: "USR008",
        name: "Meera Nair",
        avatar: "https://i.pravatar.cc/150?img=8",
        role: "Nurse",
        status: "Active",
        prime: true,
        email: "meera.nair@gmail.com",
        phone: "9876547777",
        dob: "1992-04-28",
        gender: "Female",
        bloodGroup: "A-",
        joinedDate: "2025-01-08",
        lastActive: "20 mins ago",
        metrics: { totalOrders: 15, totalAppointments: 11, totalFamilyMembers: 2, totalSpent: 17600 },
        addresses: [
            { type: "Work", addressLine: "Marine Drive", city: "Mumbai", state: "Maharashtra", pincode: "400002", isDefault: true },
            { type: "Home", addressLine: "Andheri West, Flat 304", city: "Mumbai", state: "Maharashtra", pincode: "400053", isDefault: false }
        ],
        orders: [
            { orderId: "ORD8001", date: "2026-05-23", item: "Heart Health Package", amount: 4200, status: "Delivered" },
            { orderId: "ORD8002", date: "2026-05-17", item: "Vitamin B12 Syrup", amount: 560, status: "Pending" },
            { orderId: "ORD8003", date: "2026-04-01", item: "Face Masks", amount: 200, status: "Delivered" }
        ],
        payments: [
            { paymentId: "PAY14001", date: "2026-05-23", amount: 4200, method: "UPI", status: "Success" },
            { paymentId: "PAY14002", date: "2026-05-17", amount: 560, method: "Card", status: "Success" },
            { paymentId: "PAY14003", date: "2026-04-01", amount: 200, method: "UPI", status: "Success" }
        ],
        familyMembers: [{ id: "FM701", name: "Arvind Nair", relation: "Husband", dob: "1990-05-12", phone: "9876547778" }]
        },
        {
            id: "USR009",
            name: "Rohit Malhotra",
            avatar: "https://i.pravatar.cc/150?img=9",
            role: "Patient",
            status: "Active",
            prime: true,
            email: "rohit.malhotra@gmail.com",
            phone: "9876548888",
            dob: "1991-12-03",
            gender: "Male",
            bloodGroup: "B+",
            joinedDate: "2025-04-02",
            lastActive: "10 mins ago",
            metrics: { totalOrders: 28, totalAppointments: 16, totalFamilyMembers: 5, totalSpent: 32400 },
            addresses: [
                { type: "Home", addressLine: "Model Town", city: "Ludhiana", state: "Punjab", pincode: "141002", isDefault: true },
                { type: "Farmhouse", addressLine: "Near Canal Road", city: "Ludhiana", state: "Punjab", pincode: "141001", isDefault: false },
                { type: "Office", addressLine: "Civil Lines Complex", city: "Ludhiana", state: "Punjab", pincode: "141001", isDefault: false }
            ],
            orders: [
                { orderId: "ORD9001", date: "2026-05-25", item: "Full Body Checkup", amount: 5200, status: "Delivered" },
                { orderId: "ORD9002", date: "2026-05-19", item: "BP Monitoring Device", amount: 2600, status: "Delivered" }
            ],
            payments: [
                { paymentId: "PAY15001", date: "2026-05-25", amount: 5200, method: "UPI", status: "Success" },
                { paymentId: "PAY15002", date: "2026-05-19", amount: 2600, method: "Card", status: "Success" }
            ],
            familyMembers: [
                { id: "FM801", name: "Kiran Malhotra", relation: "Mother", dob: "1969-07-15", phone: "9876548889" },
                { id: "FM802", name: "Anaya Malhotra", relation: "Daughter", dob: "2018-11-22", phone: "9876548890" }
            ]
        },
        {
            id: "USR010",
            name: "Ananya Gupta",
            avatar: "https://i.pravatar.cc/150?img=10",
            role: "Patient",
            status: "Active",
            prime: false,
            email: "ananya.gupta@gmail.com",
            phone: "9876549991",
            dob: "1997-09-21",
            gender: "Female",
            bloodGroup: "A+",
            joinedDate: "2025-02-25",
            lastActive: "45 mins ago",
            metrics: { totalOrders: 11, totalAppointments: 6, totalFamilyMembers: 2, totalSpent: 9800 },
            addresses: [
                { type: "Home", addressLine: "Indirapuram", city: "Ghaziabad", state: "UP", pincode: "201014", isDefault: true },
                { type: "Work", addressLine: "Sector 62, Noida", city: "Noida", state: "UP", pincode: "201301", isDefault: false },
                { type: "Summer Home", addressLine: "Kausambi", city: "Ghaziabad", state: "UP", pincode: "201010", isDefault: false }
            ],
            orders: [
                { orderId: "ORD10001", date: "2026-05-22", item: "Iron Supplements", amount: 720, status: "Delivered" },
                { orderId: "ORD10002", date: "2026-05-18", item: "Skin Care Medicine", amount: 1180, status: "Pending" }
            ],
            payments: [
                { paymentId: "PAY16001", date: "2026-05-22", amount: 720, method: "UPI", status: "Success" },
                { paymentId: "PAY16002", date: "2026-05-18", amount: 1180, method: "Card", status: "Success" }
            ],
            familyMembers: [{ id: "FM901", name: "Vikas Gupta", relation: "Brother", dob: "2001-04-11", phone: "9876549992" }]
        },

        {
        id: "USR011",
        name: "Vikram Joshi",
        avatar: "https://i.pravatar.cc/150?img=11",
        role: "Nurse",
        status: "Inactive",
        prime: false,
        email: "vikram.joshi@gmail.com",
        phone: "9876550001",
        dob: "1989-07-14",
        gender: "Male",
        bloodGroup: "AB-",
        joinedDate: "2025-03-19",
        lastActive: "1 week ago",
        metrics: { totalOrders: 3, totalAppointments: 2, totalFamilyMembers: 1, totalSpent: 2500 },
        addresses: [
            { type: "Work", addressLine: "FC Road", city: "Pune", state: "Maharashtra", pincode: "411004", isDefault: true },
            { type: "Home", addressLine: "Kothrud", city: "Pune", state: "Maharashtra", pincode: "411038", isDefault: false }
        ],
        orders: [{ orderId: "ORD11001", date: "2026-05-13", item: "First Aid Kit", amount: 950, status: "Cancelled" }],
        payments: [{ paymentId: "PAY17001", date: "2026-05-13", amount: 950, method: "Cash", status: "Refunded" }],
        familyMembers: [{ id: "FM1001", name: "Neelam Joshi", relation: "Mother", dob: "1964-02-18", phone: "9876550002" }]
        },
        {
            id: "USR012",
            name: "Sakshi Arora",
            avatar: "https://i.pravatar.cc/150?img=12",
            role: "Patient",
            status: "Active",
            prime: true,
            email: "sakshi.arora@gmail.com",
            phone: "9876551111",
            dob: "1995-05-30",
            gender: "Female",
            bloodGroup: "O+",
            joinedDate: "2025-01-11",
            lastActive: "5 mins ago",
            metrics: { totalOrders: 19, totalAppointments: 13, totalFamilyMembers: 3, totalSpent: 21400 },
            addresses: [
                { type: "Home", addressLine: "Sector 62", city: "Noida", state: "UP", pincode: "201309", isDefault: true },
                { type: "Work", addressLine: "Sector 18", city: "Noida", state: "UP", pincode: "201301", isDefault: false }
            ],
            orders: [
                { orderId: "ORD12001", date: "2026-05-24", item: "Calcium + Zinc Tablets", amount: 890, status: "Delivered" },
                { orderId: "ORD12002", date: "2026-05-20", item: "Immunity Booster", amount: 1450, status: "Delivered" }
            ],
            payments: [
                { paymentId: "PAY18001", date: "2026-05-24", amount: 890, method: "UPI", status: "Success" },
                { paymentId: "PAY18002", date: "2026-05-20", amount: 1450, method: "Card", status: "Success" }
            ],
            familyMembers: [
                { id: "FM1101", name: "Rajat Arora", relation: "Husband", dob: "1992-10-16", phone: "9876551112" },
                { id: "FM1102", name: "Diya Arora", relation: "Daughter", dob: "2020-12-09", phone: "9876551113" }
            ]
        },
        {
            id: "USR013",
            name: "Harsh Vardhan",
            avatar: "https://i.pravatar.cc/150?img=13",
            role: "Patient",
            status: "Active",
            prime: true,
            email: "harsh.vardhan@gmail.com",
            phone: "9876552221",
            dob: "1994-03-12",
            gender: "Male",
            bloodGroup: "B+",
            joinedDate: "2025-02-08",
            lastActive: "12 mins ago",
            metrics: { totalOrders: 25, totalAppointments: 17, totalFamilyMembers: 4, totalSpent: 28600 },
            addresses: [
                { type: "Home", addressLine: "Ashok Nagar", city: "Kanpur", state: "UP", pincode: "208012", isDefault: true },
                { type: "Office", addressLine: "Mall Road", city: "Kanpur", state: "UP", pincode: "208001", isDefault: false }
            ],
            orders: [{ orderId: "ORD13001", date: "2026-05-24", item: "BP Monitoring Machine", amount: 3200, status: "Delivered" }],
            payments: [{ paymentId: "PAY19001", date: "2026-05-24", amount: 3200, method: "UPI", status: "Success" }],
            familyMembers: [{ id: "FM1201", name: "Asha Vardhan", relation: "Mother", dob: "1970-01-10", phone: "9876552222" }]
        },
        {
            id: "USR014",
            name: "Ishita Malhotra",
            avatar: "https://i.pravatar.cc/150?img=14",
            role: "Nurse",
            status: "Inactive",
            prime: false,
            email: "ishita.m@gmail.com",
            phone: "9876553331",
            dob: "1991-08-21",
            gender: "Female",
            bloodGroup: "A-",
            joinedDate: "2025-04-10",
            lastActive: "3 days ago",
            metrics: { totalOrders: 7, totalAppointments: 5, totalFamilyMembers: 1, totalSpent: 6100 },
            addresses: [
                { type: "Work", addressLine: "Salt Lake Sector 5", city: "Kolkata", state: "West Bengal", pincode: "700091", isDefault: true },
                { type: "Home", addressLine: "New Town", city: "Kolkata", state: "West Bengal", pincode: "700156", isDefault: false }
            ],
            orders: [{ orderId: "ORD14001", date: "2026-05-18", item: "Digital Thermometer", amount: 650, status: "Pending" }],
            payments: [{ paymentId: "PAY20001", date: "2026-05-18", amount: 650, method: "Cash", status: "Success" }],
            familyMembers: [{ id: "FM1301", name: "Rohit Malhotra", relation: "Brother", dob: "1995-05-11", phone: "9876553332" }]
        },
        {
                id: "USR015",
                name: "Dev Patel",
                avatar: "https://i.pravatar.cc/150?img=15",
                role: "Patient",
                status: "Active",
                prime: false,
                email: "dev.patel@gmail.com",
                phone: "9876554441",
                dob: "1998-12-09",
                gender: "Male",
                bloodGroup: "O+",
                joinedDate: "2025-03-22",
                lastActive: "1 hour ago",
                metrics: { totalOrders: 13, totalAppointments: 8, totalFamilyMembers: 2, totalSpent: 14200 },
                addresses: [
                    { type: "Home", addressLine: "Navrangpura", city: "Ahmedabad", state: "Gujarat", pincode: "380009", isDefault: true },
                    { type: "Office", addressLine: "Satellite Area", city: "Ahmedabad", state: "Gujarat", pincode: "380015", isDefault: false }
                ],
                orders: [{ orderId: "ORD15001", date: "2026-05-21", item: "Protein Powder", amount: 2400, status: "Delivered" }],
                payments: [{ paymentId: "PAY21001", date: "2026-05-21", amount: 2400, method: "Card", status: "Success" }],
                familyMembers: [{ id: "FM1401", name: "Maya Patel", relation: "Sister", dob: "2002-06-14", phone: "9876554442" }]
        },
        {
            id: "USR016",
            name: "Naina Chopra",
            avatar: "https://i.pravatar.cc/150?img=16",
            role: "Patient",
            status: "Active",
            prime: true,
            email: "naina.chopra@gmail.com",
            phone: "9876555551",
            dob: "1993-11-27",
            gender: "Female",
            bloodGroup: "AB+",
            joinedDate: "2025-01-29",
            lastActive: "8 mins ago",
            metrics: { totalOrders: 21, totalAppointments: 15, totalFamilyMembers: 3, totalSpent: 27400 },
            addresses: [
                { type: "Home", addressLine: "DLF Phase 2", city: "Gurgaon", state: "Haryana", pincode: "122002", isDefault: true },
                { type: "Gym", addressLine: "Golf Course Road", city: "Gurgaon", state: "Haryana", pincode: "122009", isDefault: false }
            ],
            orders: [{ orderId: "ORD16001", date: "2026-05-25", item: "Skin Care Package", amount: 3600, status: "Delivered" }],
            payments: [{ paymentId: "PAY22001", date: "2026-05-25", amount: 3600, method: "UPI", status: "Success" }],
            familyMembers: [{ id: "FM1501", name: "Arjun Chopra", relation: "Husband", dob: "1990-09-18", phone: "9876555552" }]
        },
        {
            id: "USR017",
            name: "Ritesh Kumar",
            avatar: "https://i.pravatar.cc/150?img=17",
            role: "Nurse",
            status: "Inactive",
            prime: false,
            email: "ritesh.kumar@gmail.com",
            phone: "9876556661",
            dob: "1988-06-03",
            gender: "Male",
            bloodGroup: "B-",
            joinedDate: "2025-02-14",
            lastActive: "6 days ago",
            metrics: { totalOrders: 5, totalAppointments: 2, totalFamilyMembers: 1, totalSpent: 3900 },
            addresses: [
                { type: "Work", addressLine: "Patliputra Colony", city: "Patna", state: "Bihar", pincode: "800013", isDefault: true },
                { type: "Home", addressLine: "Kankarbagh", city: "Patna", state: "Bihar", pincode: "800020", isDefault: false }
            ],
            orders: [{ orderId: "ORD17001", date: "2026-05-16", item: "Health Supplements", amount: 1100, status: "Cancelled" }],
            payments: [{ paymentId: "PAY23001", date: "2026-05-16", amount: 1100, method: "Cash", status: "Refunded" }],
            familyMembers: [{ id: "FM1601", name: "Kavita Kumar", relation: "Wife", dob: "1991-04-20", phone: "9876556662" }]
        },
        {
            id: "USR018",
            name: "Pallavi Sharma",
            avatar: "https://i.pravatar.cc/150?img=18",
            role: "Patient",
            status: "Active",
            prime: true,
            email: "pallavi.sharma@gmail.com",
            phone: "9876557771",
            dob: "1996-02-14",
            gender: "Female",
            bloodGroup: "O+",
            joinedDate: "2025-03-05",
            lastActive: "25 mins ago",
            metrics: { totalOrders: 17, totalAppointments: 9, totalFamilyMembers: 2, totalSpent: 19800 },
            addresses: [
                { type: "Home", addressLine: "Vaishali Nagar", city: "Jaipur", state: "Rajasthan", pincode: "302021", isDefault: true },
                { type: "Work", addressLine: "Malviya Nagar", city: "Jaipur", state: "Rajasthan", pincode: "302017", isDefault: false }
            ],
            orders: [{ orderId: "ORD18001", date: "2026-05-23", item: "Women Wellness Kit", amount: 2800, status: "Delivered" }],
            payments: [{ paymentId: "PAY24001", date: "2026-05-23", amount: 2800, method: "UPI", status: "Success" }],
            familyMembers: [{ id: "FM1701", name: "Riya Sharma", relation: "Sister", dob: "2000-08-10", phone: "9876557772" }]
        },
        {
            id: "USR019",
            name: "Mohit Bansal",
            avatar: "https://i.pravatar.cc/150?img=19",
            role: "Nurse",
            status: "Inactive",
            prime: false,
            email: "mohit.bansal@gmail.com",
            phone: "9876558881",
            dob: "1987-09-11",
            gender: "Male",
            bloodGroup: "A+",
            joinedDate: "2025-01-17",
            lastActive: "4 days ago",
            metrics: { totalOrders: 6, totalAppointments: 4, totalFamilyMembers: 1, totalSpent: 5100 },
            addresses: [
                { type: "Work", addressLine: "Hazratganj", city: "Lucknow", state: "UP", pincode: "226001", isDefault: true },
                { type: "Home", addressLine: "Gomti Nagar", city: "Lucknow", state: "UP", pincode: "226010", isDefault: false }
            ],
            orders: [{ orderId: "ORD19001", date: "2026-05-18", item: "Medical Gloves Pack", amount: 900, status: "Pending" }],
            payments: [{ paymentId: "PAY25001", date: "2026-05-18", amount: 900, method: "Cash", status: "Success" }],
            familyMembers: [{ id: "FM1801", name: "Aarti Bansal", relation: "Wife", dob: "1990-03-12", phone: "9876558882" }]
        },
        {
            id: "USR020",
            name: "Tanvi Sethi",
            avatar: "https://i.pravatar.cc/150?img=20",
            role: "Patient",
            status: "Active",
            prime: false,
            email: "tanvi.sethi@gmail.com",
            phone: "9876559991",
            dob: "1999-07-29",
            gender: "Female",
            bloodGroup: "B+",
            joinedDate: "2025-04-01",
            lastActive: "1 hour ago",
            metrics: { totalOrders: 10, totalAppointments: 5, totalFamilyMembers: 2, totalSpent: 9600 },
            addresses: [
                { type: "Home", addressLine: "Janakpuri", city: "Delhi", state: "Delhi", pincode: "110058", isDefault: true },
                { type: "Work", addressLine: "Connaught Place", city: "Delhi", state: "Delhi", pincode: "110001", isDefault: false }
            ],
            orders: [{ orderId: "ORD20001", date: "2026-05-20", item: "Hair Care Tablets", amount: 1300, status: "Delivered" }],
            payments: [{ paymentId: "PAY26001", date: "2026-05-20", amount: 1300, method: "Card", status: "Success" }],
            familyMembers: [{ id: "FM1901", name: "Kunal Sethi", relation: "Brother", dob: "2004-01-18", phone: "9876559992" }]
        },
        {
                id: "USR021",
                name: "Aman Khurana",
                avatar: "https://i.pravatar.cc/150?img=21",
                role: "Patient",
                status: "Active",
                prime: true,
                email: "aman.khurana@gmail.com",
                phone: "9876561111",
                dob: "1992-05-16",
                gender: "Male",
                bloodGroup: "AB+",
                joinedDate: "2025-02-26",
                lastActive: "9 mins ago",
                metrics: { totalOrders: 23, totalAppointments: 14, totalFamilyMembers: 3, totalSpent: 30100 },
                addresses: [
                    { type: "Home", addressLine: "Sector 15", city: "Chandigarh", state: "Punjab", pincode: "160015", isDefault: true },
                    { type: "Work", addressLine: "IT Park", city: "Chandigarh", state: "Punjab", pincode: "160101", isDefault: false }
                ],
                orders: [{ orderId: "ORD21001", date: "2026-05-25", item: "Full Body Health Package", amount: 4800, status: "Delivered" }],
                payments: [{ paymentId: "PAY27001", date: "2026-05-25", amount: 4800, method: "UPI", status: "Success" }],
                familyMembers: [{ id: "FM2001", name: "Nidhi Khurana", relation: "Wife", dob: "1994-10-14", phone: "9876561112" }]
        },
        {
            id: "USR022",
            name: "Rhea Kapoor",
            avatar: "https://i.pravatar.cc/150?img=22",
            role: "Nurse",
            status: "Inactive",
            prime: false,
            email: "rhea.kapoor@gmail.com",
            phone: "9876562221",
            dob: "1990-12-08",
            gender: "Female",
            bloodGroup: "O-",
            joinedDate: "2025-03-12",
            lastActive: "1 week ago",
            metrics: { totalOrders: 4, totalAppointments: 3, totalFamilyMembers: 1, totalSpent: 4200 },
            addresses: [
                { type: "Work", addressLine: "Anna Nagar", city: "Chennai", state: "Tamil Nadu", pincode: "600040", isDefault: true },
                { type: "Home", addressLine: "Adyar", city: "Chennai", state: "Tamil Nadu", pincode: "600020", isDefault: false }
            ],
            orders: [{ orderId: "ORD22001", date: "2026-05-15", item: "Medical Face Masks", amount: 700, status: "Cancelled" }],
            payments: [{ paymentId: "PAY28001", date: "2026-05-15", amount: 700, method: "Cash", status: "Refunded" }],
            familyMembers: [{ id: "FM2101", name: "Amit Kapoor", relation: "Father", dob: "1962-09-05", phone: "9876562222" }]
        },
        {
            id: "USR023",
            name: "Yash Thakur",
            avatar: "https://i.pravatar.cc/150?img=23",
            role: "Patient",
            status: "Active",
            prime: true,
            email: "yash.thakur@gmail.com",
            phone: "9876563331",
            dob: "1995-04-18",
            gender: "Male",
            bloodGroup: "A+",
            joinedDate: "2025-02-11",
            lastActive: "18 mins ago",
            metrics: { totalOrders: 20, totalAppointments: 12, totalFamilyMembers: 2, totalSpent: 22100 },
            addresses: [
                { type: "Home", addressLine: "Sector 9", city: "Faridabad", state: "Haryana", pincode: "121006", isDefault: true },
                { type: "Office", addressLine: "Mathura Road", city: "Faridabad", state: "Haryana", pincode: "121002", isDefault: false }
            ],
            orders: [{ orderId: "ORD23001", date: "2026-05-23", item: "Vitamin C Tablets", amount: 950, status: "Delivered" }],
            payments: [{ paymentId: "PAY29001", date: "2026-05-23", amount: 950, method: "UPI", status: "Success" }],
            familyMembers: [{ id: "FM2201", name: "Ritika Thakur", relation: "Wife", dob: "1997-06-09", phone: "9876563332" }]
        },
        {
            id: "USR024",
            name: "Kriti Jain",
            avatar: "https://i.pravatar.cc/150?img=24",
            role: "Nurse",
            status: "Inactive",
            prime: false,
            email: "kriti.jain@gmail.com",
            phone: "9876564441",
            dob: "1993-03-11",
            gender: "Female",
            bloodGroup: "B+",
            joinedDate: "2025-01-22",
            lastActive: "2 days ago",
            metrics: { totalOrders: 5, totalAppointments: 3, totalFamilyMembers: 1, totalSpent: 4800 },
            addresses: [
                { type: "Work", addressLine: "Vesu", city: "Surat", state: "Gujarat", pincode: "395007", isDefault: true },
                { type: "Home", addressLine: "Adajan", city: "Surat", state: "Gujarat", pincode: "395009", isDefault: false }
            ],
            orders: [{ orderId: "ORD24001", date: "2026-05-16", item: "First Aid Box", amount: 850, status: "Pending" }],
            payments: [{ paymentId: "PAY30001", date: "2026-05-16", amount: 850, method: "Cash", status: "Success" }],
            familyMembers: [{ id: "FM2301", name: "Nitin Jain", relation: "Brother", dob: "1998-08-13", phone: "9876564442" }]
        },
        {
            id: "USR025",
            name: "Arnav Mehra",
            avatar: "https://i.pravatar.cc/150?img=25",
            role: "Patient",
            status: "Active",
            prime: true,
            email: "arnav.mehra@gmail.com",
            phone: "9876565551",
            dob: "1991-10-27",
            gender: "Male",
            bloodGroup: "O+",
            joinedDate: "2025-03-09",
            lastActive: "7 mins ago",
            metrics: { totalOrders: 27, totalAppointments: 18, totalFamilyMembers: 4, totalSpent: 35800 },
            addresses: [
                { type: "Home", addressLine: "Punjabi Bagh", city: "Delhi", state: "Delhi", pincode: "110026", isDefault: true },
                { type: "Office", addressLine: "Okhla Phase 3", city: "Delhi", state: "Delhi", pincode: "110020", isDefault: false }
            ],
            orders: [{ orderId: "ORD25001", date: "2026-05-25", item: "Health Checkup Kit", amount: 5400, status: "Delivered" }],
            payments: [{ paymentId: "PAY31001", date: "2026-05-25", amount: 5400, method: "Card", status: "Success" }],
            familyMembers: [{ id: "FM2401", name: "Sneha Mehra", relation: "Wife", dob: "1993-02-15", phone: "9876565552" }]
        },
        {
        id: "USR026",
        name: "Diya Saxena",
        avatar: "https://i.pravatar.cc/150?img=26",
        role: "Patient",
        status: "Inactive",
        prime: false,
        email: "diya.saxena@gmail.com",
        phone: "9876566661",
        dob: "1998-01-08",
        gender: "Female",
        bloodGroup: "AB+",
        joinedDate: "2025-04-04",
        lastActive: "5 days ago",
        metrics: { totalOrders: 8, totalAppointments: 5, totalFamilyMembers: 1, totalSpent: 6900 },
        addresses: [
            { type: "Home", addressLine: "Aliganj", city: "Lucknow", state: "UP", pincode: "226024", isDefault: true }
        ],
        orders: [{ orderId: "ORD26001", date: "2026-05-18", item: "Skin Care Serum", amount: 1250, status: "Cancelled" }],
        payments: [{ paymentId: "PAY32001", date: "2026-05-18", amount: 1250, method: "UPI", status: "Refunded" }],
        familyMembers: [{ id: "FM2501", name: "Pooja Saxena", relation: "Mother", dob: "1971-12-22", phone: "9876566662" }]
        },
        {
            id: "USR027",
            name: "Kabir Arora",
            avatar: "https://i.pravatar.cc/150?img=27",
            role: "Nurse",
            status: "Active",
            prime: false,
            email: "kabir.arora@gmail.com",
            phone: "9876567771",
            dob: "1989-06-14",
            gender: "Male",
            bloodGroup: "B-",
            joinedDate: "2025-01-30",
            lastActive: "40 mins ago",
            metrics: { totalOrders: 9, totalAppointments: 6, totalFamilyMembers: 2, totalSpent: 7600 },
            addresses: [
                { type: "Work", addressLine: "Sector 22", city: "Chandigarh", state: "Punjab", pincode: "160022", isDefault: true }
            ],
            orders: [{ orderId: "ORD27001", date: "2026-05-20", item: "Medical Equipment Kit", amount: 3100, status: "Delivered" }],
            payments: [{ paymentId: "PAY33001", date: "2026-05-20", amount: 3100, method: "Cash", status: "Success" }],
            familyMembers: [{ id: "FM2601", name: "Anjali Arora", relation: "Wife", dob: "1992-11-17", phone: "9876567772" }]
        },
        {
            id: "USR028",
            name: "Sara Khan",
            avatar: "https://i.pravatar.cc/150?img=28",
            role: "Patient",
            status: "Active",
            prime: true,
            email: "sara.khan@gmail.com",
            phone: "9876568881",
            dob: "1994-09-19",
            gender: "Female",
            bloodGroup: "O-",
            joinedDate: "2025-02-18",
            lastActive: "11 mins ago",
            metrics: { totalOrders: 16, totalAppointments: 10, totalFamilyMembers: 3, totalSpent: 18700 },
            addresses: [
                { type: "Home", addressLine: "Bandra West", city: "Mumbai", state: "Maharashtra", pincode: "400050", isDefault: true }
            ],
            orders: [{ orderId: "ORD28001", date: "2026-05-24", item: "Women Care Supplements", amount: 2100, status: "Delivered" }],
            payments: [{ paymentId: "PAY34001", date: "2026-05-24", amount: 2100, method: "Card", status: "Success" }],
            familyMembers: [{ id: "FM2701", name: "Ayaan Khan", relation: "Son", dob: "2021-07-01", phone: "9876568882" }]
        },
        {
            id: "USR029",
            name: "Rajat Oberoi",
            avatar: "https://i.pravatar.cc/150?img=29",
            role: "Patient",
            status: "Inactive",
            prime: false,
            email: "rajat.oberoi@gmail.com",
            phone: "9876569991",
            dob: "1990-11-02",
            gender: "Male",
            bloodGroup: "A-",
            joinedDate: "2025-03-25",
            lastActive: "1 week ago",
            metrics: { totalOrders: 6, totalAppointments: 4, totalFamilyMembers: 1, totalSpent: 5900 },
            addresses: [
                { type: "Home", addressLine: "Malviya Nagar", city: "Delhi", state: "Delhi", pincode: "110017", isDefault: true }
            ],
            orders: [{ orderId: "ORD29001", date: "2026-05-17", item: "Joint Pain Relief Kit", amount: 1450, status: "Pending" }],
            payments: [{ paymentId: "PAY35001", date: "2026-05-17", amount: 1450, method: "UPI", status: "Success" }],
            familyMembers: [{ id: "FM2801", name: "Meena Oberoi", relation: "Mother", dob: "1965-06-08", phone: "9876569992" }]
        },
        {
            id: "USR030",
            name: "Tanya Bhatia",
            avatar: "https://i.pravatar.cc/150?img=30",
            role: "Nurse",
            status: "Active",
            prime: true,
            email: "tanya.bhatia@gmail.com",
            phone: "9876571111",
            dob: "1992-02-25",
            gender: "Female",
            bloodGroup: "B+",
            joinedDate: "2025-01-15",
            lastActive: "14 mins ago",
            metrics: { totalOrders: 18, totalAppointments: 13, totalFamilyMembers: 2, totalSpent: 24300 },
            addresses: [
                { type: "Work", addressLine: "Sector 44", city: "Noida", state: "UP", pincode: "201301", isDefault: true }
            ],
            orders: [{ orderId: "ORD30001", date: "2026-05-25", item: "Advanced Medical Kit", amount: 4300, status: "Delivered" }],
            payments: [{ paymentId: "PAY36001", date: "2026-05-25", amount: 4300, method: "Card", status: "Success" }],
            familyMembers: [{ id: "FM2901", name: "Rohan Bhatia", relation: "Brother", dob: "1998-09-13", phone: "9876571112" }]
        },
        {
        id: "USR031",
        name: "Nikhil Rana",
        avatar: "https://i.pravatar.cc/150?img=31",
        role: "Patient",
        status: "Active",
        prime: false,
        email: "nikhil.rana@gmail.com",
        phone: "9876572221",
        dob: "1997-08-06",
        gender: "Male",
        bloodGroup: "AB-",
        joinedDate: "2025-04-08",
        lastActive: "50 mins ago",
        metrics: { totalOrders: 12, totalAppointments: 7, totalFamilyMembers: 2, totalSpent: 11800 },
        addresses: [
            { type: "Home", addressLine: "Race Course Road", city: "Indore", state: "MP", pincode: "452001", isDefault: true }
        ],
        orders: [{ orderId: "ORD31001", date: "2026-05-21", item: "Immunity Booster Pack", amount: 1650, status: "Delivered" }],
        payments: [{ paymentId: "PAY37001", date: "2026-05-21", amount: 1650, method: "UPI", status: "Success" }],
        familyMembers: [{ id: "FM3001", name: "Pallavi Rana", relation: "Sister", dob: "2001-01-12", phone: "9876572222" }]
        },
        {
            id: "USR032",
            name: "Ira Menon",
            avatar: "https://i.pravatar.cc/150?img=32",
            role: "Patient",
            status: "Inactive",
            prime: false,
            email: "ira.menon@gmail.com",
            phone: "9876573331",
            dob: "1995-12-14",
            gender: "Female",
            bloodGroup: "O+",
            joinedDate: "2025-02-07",
            lastActive: "3 days ago",
            metrics: { totalOrders: 7, totalAppointments: 5, totalFamilyMembers: 1, totalSpent: 7200 },
            addresses: [
                { type: "Home", addressLine: "Kakkanad", city: "Kochi", state: "Kerala", pincode: "682030", isDefault: true }
            ],
            orders: [{ orderId: "ORD32001", date: "2026-05-19", item: "Hair Growth Supplements", amount: 1300, status: "Cancelled" }],
            payments: [{ paymentId: "PAY38001", date: "2026-05-19", amount: 1300, method: "Card", status: "Refunded" }],
            familyMembers: [{ id: "FM3101", name: "Anu Menon", relation: "Mother", dob: "1968-10-21", phone: "9876573332" }]
        },
        {
            id: "USR033",
            name: "Aarav Kapoor",
            avatar: "https://i.pravatar.cc/150?img=33",
            role: "Patient",
            status: "Active",
            prime: true,
            email: "aarav.kapoor@gmail.com",
            phone: "9876574441",
            dob: "1993-05-11",
            gender: "Male",
            bloodGroup: "B+",
            joinedDate: "2025-01-09",
            lastActive: "6 mins ago",
            metrics: { totalOrders: 24, totalAppointments: 16, totalFamilyMembers: 3, totalSpent: 31800 },
            addresses: [
                { type: "Home", addressLine: "Sector 18", city: "Noida", state: "UP", pincode: "201301", isDefault: true }
            ],
            orders: [{ orderId: "ORD33001", date: "2026-05-25", item: "Diabetes Monitoring Kit", amount: 4100, status: "Delivered" }],
            payments: [{ paymentId: "PAY39001", date: "2026-05-25", amount: 4100, method: "UPI", status: "Success" }],
            familyMembers: [{ id: "FM3201", name: "Rhea Kapoor", relation: "Wife", dob: "1995-09-18", phone: "9876574442" }]
        },
        {
            id: "USR034",
            name: "Sanya Arora",
            avatar: "https://i.pravatar.cc/150?img=34",
            role: "Nurse",
            status: "Inactive",
            prime: false,
            email: "sanya.arora@gmail.com",
            phone: "9876575551",
            dob: "1990-08-22",
            gender: "Female",
            bloodGroup: "A+",
            joinedDate: "2025-03-14",
            lastActive: "4 days ago",
            metrics: { totalOrders: 5, totalAppointments: 2, totalFamilyMembers: 1, totalSpent: 4600 },
            addresses: [
                { type: "Work", addressLine: "Andheri East", city: "Mumbai", state: "Maharashtra", pincode: "400069", isDefault: true }
            ],
            orders: [{ orderId: "ORD34001", date: "2026-05-18", item: "First Aid Medical Kit", amount: 980, status: "Pending" }],
            payments: [{ paymentId: "PAY40001", date: "2026-05-18", amount: 980, method: "Cash", status: "Success" }],
            familyMembers: [{ id: "FM3301", name: "Raj Arora", relation: "Brother", dob: "1996-12-08", phone: "9876575552" }]
        },
        {
            id: "USR035",
            name: "Vihaan Gupta",
            avatar: "https://i.pravatar.cc/150?img=35",
            role: "Patient",
            status: "Active",
            prime: true,
            email: "vihaan.gupta@gmail.com",
            phone: "9876576661",
            dob: "1996-07-29",
            gender: "Male",
            bloodGroup: "O+",
            joinedDate: "2025-02-16",
            lastActive: "21 mins ago",
            metrics: { totalOrders: 19, totalAppointments: 11, totalFamilyMembers: 2, totalSpent: 22700 },
            addresses: [
                { type: "Home", addressLine: "Civil Lines", city: "Prayagraj", state: "UP", pincode: "211001", isDefault: true }
            ],
            orders: [{ orderId: "ORD35001", date: "2026-05-24", item: "Heart Care Supplements", amount: 2600, status: "Delivered" }],
            payments: [{ paymentId: "PAY41001", date: "2026-05-24", amount: 2600, method: "Card", status: "Success" }],
            familyMembers: [{ id: "FM3401", name: "Pooja Gupta", relation: "Mother", dob: "1970-06-17", phone: "9876576662" }]
        },
        {
        id: "USR036",
        name: "Myra Sen",
        avatar: "https://i.pravatar.cc/150?img=36",
        role: "Patient",
        status: "Inactive",
        prime: false,
        email: "myra.sen@gmail.com",
        phone: "9876577771",
        dob: "1998-11-05",
        gender: "Female",
        bloodGroup: "AB+",
        joinedDate: "2025-04-12",
        lastActive: "1 week ago",
        metrics: { totalOrders: 6, totalAppointments: 4, totalFamilyMembers: 1, totalSpent: 5400 },
        addresses: [
            { type: "Home", addressLine: "Park Street", city: "Kolkata", state: "West Bengal", pincode: "700016", isDefault: true }
        ],
        orders: [{ orderId: "ORD36001", date: "2026-05-17", item: "Skin Wellness Kit", amount: 1450, status: "Cancelled" }],
        payments: [{ paymentId: "PAY42001", date: "2026-05-17", amount: 1450, method: "UPI", status: "Refunded" }],
        familyMembers: [{ id: "FM3501", name: "Ananya Sen", relation: "Sister", dob: "2002-03-10", phone: "9876577772" }]
        },
        {
            id: "USR037",
            name: "Reyansh Sood",
            avatar: "https://i.pravatar.cc/150?img=37",
            role: "Nurse",
            status: "Active",
            prime: false,
            email: "reyansh.sood@gmail.com",
            phone: "9876578881",
            dob: "1988-04-03",
            gender: "Male",
            bloodGroup: "B-",
            joinedDate: "2025-01-27",
            lastActive: "38 mins ago",
            metrics: { totalOrders: 11, totalAppointments: 7, totalFamilyMembers: 2, totalSpent: 9800 },
            addresses: [
                { type: "Work", addressLine: "Model Town", city: "Jalandhar", state: "Punjab", pincode: "144003", isDefault: true }
            ],
            orders: [{ orderId: "ORD37001", date: "2026-05-22", item: "Nursing Essentials Kit", amount: 3400, status: "Delivered" }],
            payments: [{ paymentId: "PAY43001", date: "2026-05-22", amount: 3400, method: "Cash", status: "Success" }],
            familyMembers: [{ id: "FM3601", name: "Simran Sood", relation: "Wife", dob: "1991-05-25", phone: "9876578882" }]
        },
        {
            id: "USR038",
            name: "Kiara Malhotra",
            avatar: "https://i.pravatar.cc/150?img=38",
            role: "Patient",
            status: "Active",
            prime: true,
            email: "kiara.malhotra@gmail.com",
            phone: "9876579991",
            dob: "1994-02-19",
            gender: "Female",
            bloodGroup: "O-",
            joinedDate: "2025-03-01",
            lastActive: "13 mins ago",
            metrics: { totalOrders: 22, totalAppointments: 14, totalFamilyMembers: 3, totalSpent: 29400 },
            addresses: [
                { type: "Home", addressLine: "Koramangala", city: "Bangalore", state: "Karnataka", pincode: "560034", isDefault: true }
            ],
            orders: [{ orderId: "ORD38001", date: "2026-05-25", item: "Women's Health Package", amount: 3900, status: "Delivered" }],
            payments: [{ paymentId: "PAY44001", date: "2026-05-25", amount: 3900, method: "Card", status: "Success" }],
            familyMembers: [{ id: "FM3701", name: "Aarohi Malhotra", relation: "Daughter", dob: "2021-01-09", phone: "9876579992" }]
        },
        {
            id: "USR039",
            name: "Parth Bedi",
            avatar: "https://i.pravatar.cc/150?img=39",
            role: "Patient",
            status: "Inactive",
            prime: false,
            email: "parth.bedi@gmail.com",
            phone: "9876581111",
            dob: "1991-09-13",
            gender: "Male",
            bloodGroup: "A-",
            joinedDate: "2025-02-20",
            lastActive: "5 days ago",
            metrics: { totalOrders: 7, totalAppointments: 4, totalFamilyMembers: 1, totalSpent: 6200 },
            addresses: [
                { type: "Home", addressLine: "Rajendra Nagar", city: "Patna", state: "Bihar", pincode: "800016", isDefault: true }
            ],
            orders: [{ orderId: "ORD39001", date: "2026-05-18", item: "Orthopedic Support Kit", amount: 1750, status: "Pending" }],
            payments: [{ paymentId: "PAY45001", date: "2026-05-18", amount: 1750, method: "UPI", status: "Success" }],
            familyMembers: [{ id: "FM3801", name: "Neha Bedi", relation: "Wife", dob: "1994-07-14", phone: "9876581112" }]
        },
        {
            id: "USR040",
            name: "Anika Rao",
            avatar: "https://i.pravatar.cc/150?img=40",
            role: "Nurse",
            status: "Active",
            prime: true,
            email: "anika.rao@gmail.com",
            phone: "9876582221",
            dob: "1992-10-07",
            gender: "Female",
            bloodGroup: "B+",
            joinedDate: "2025-01-12",
            lastActive: "17 mins ago",
            metrics: { totalOrders: 16, totalAppointments: 12, totalFamilyMembers: 2, totalSpent: 21300 },
            addresses: [
                { type: "Work", addressLine: "MG Road", city: "Bangalore", state: "Karnataka", pincode: "560001", isDefault: true }
            ],
            orders: [{ orderId: "ORD40001", date: "2026-05-24", item: "Advanced Care Equipment", amount: 4700, status: "Delivered" }],
            payments: [{ paymentId: "PAY46001", date: "2026-05-24", amount: 4700, method: "Card", status: "Success" }],
            familyMembers: [{ id: "FM3901", name: "Raghav Rao", relation: "Brother", dob: "1997-04-02", phone: "9876582222" }]
        },
        {
        id: "USR041",
        name: "Dhruv Nanda",
        avatar: "https://i.pravatar.cc/150?img=41",
        role: "Patient",
        status: "Active",
        prime: false,
        email: "dhruv.nanda@gmail.com",
        phone: "9876583331",
        dob: "1997-03-28",
        gender: "Male",
        bloodGroup: "AB+",
        joinedDate: "2025-04-03",
        lastActive: "27 mins ago",
        metrics: { totalOrders: 13, totalAppointments: 8, totalFamilyMembers: 2, totalSpent: 13200 },
        addresses: [
            { type: "Home", addressLine: "DLF Phase 3", city: "Gurgaon", state: "Haryana", pincode: "122010", isDefault: true }
        ],
        orders: [{ orderId: "ORD41001", date: "2026-05-21", item: "Fitness Supplements", amount: 2400, status: "Delivered" }],
        payments: [{ paymentId: "PAY47001", date: "2026-05-21", amount: 2400, method: "UPI", status: "Success" }],
        familyMembers: [{ id: "FM4001", name: "Pallak Nanda", relation: "Sister", dob: "2000-11-21", phone: "9876583332" }]
        },
        {
            id: "USR042",
            name: "Mehak Arjun",
            avatar: "https://i.pravatar.cc/150?img=42",
            role: "Patient",
            status: "Inactive",
            prime: false,
            email: "mehak.arjun@gmail.com",
            phone: "9876584441",
            dob: "1995-06-16",
            gender: "Female",
            bloodGroup: "O+",
            joinedDate: "2025-03-19",
            lastActive: "6 days ago",
            metrics: { totalOrders: 8, totalAppointments: 5, totalFamilyMembers: 1, totalSpent: 7100 },
            addresses: [
                { type: "Home", addressLine: "Panampilly Nagar", city: "Kochi", state: "Kerala", pincode: "682036", isDefault: true }
            ],
            orders: [{ orderId: "ORD42001", date: "2026-05-18", item: "Skin Recovery Pack", amount: 1550, status: "Cancelled" }],
            payments: [{ paymentId: "PAY48001", date: "2026-05-18", amount: 1550, method: "Card", status: "Refunded" }],
            familyMembers: [{ id: "FM4101", name: "Anu Arjun", relation: "Mother", dob: "1969-01-11", phone: "9876584442" }]
        },
        {
            id: "USR043",
            name: "Rohan Varma",
            avatar: "https://i.pravatar.cc/150?img=43",
            role: "Patient",
            status: "Active",
            prime: true,
            email: "rohan.varma@gmail.com",
            phone: "9876585551",
            dob: "1992-09-02",
            gender: "Male",
            bloodGroup: "A+",
            joinedDate: "2025-05-10",
            lastActive: "10 mins ago",
            metrics: { totalOrders: 15, totalAppointments: 9, totalFamilyMembers: 2, totalSpent: 18500 },
            addresses: [
                { type: "Home", addressLine: "Jubilee Hills", city: "Hyderabad", state: "Telangana", pincode: "500033", isDefault: true }
            ],
            orders: [{ orderId: "ORD43001", date: "2026-05-26", item: "Multivitamin Pack", amount: 2100, status: "Delivered" }],
            payments: [{ paymentId: "PAY49001", date: "2026-05-26", amount: 2100, method: "UPI", status: "Success" }],
            familyMembers: [{ id: "FM4201", name: "Sunita Varma", relation: "Wife", dob: "1994-11-15", phone: "9876585552" }]
        },
        {
            id: "USR044",
            name: "Ishita Shah",
            avatar: "https://i.pravatar.cc/150?img=44",
            role: "Nurse",
            status: "Active",
            prime: false,
            email: "ishita.shah@gmail.com",
            phone: "9876586661",
            dob: "1991-12-12",
            gender: "Female",
            bloodGroup: "B-",
            joinedDate: "2025-01-05",
            lastActive: "45 mins ago",
            metrics: { totalOrders: 9, totalAppointments: 6, totalFamilyMembers: 1, totalSpent: 8200 },
            addresses: [
                { type: "Work", addressLine: "Satellite", city: "Ahmedabad", state: "Gujarat", pincode: "380015", isDefault: true }
            ],
            orders: [{ orderId: "ORD44001", date: "2026-05-20", item: "Stethoscope & BP Monitor", amount: 4200, status: "Delivered" }],
            payments: [{ paymentId: "PAY50001", date: "2026-05-20", amount: 4200, method: "Card", status: "Success" }],
            familyMembers: [{ id: "FM4301", name: "Amit Shah", relation: "Brother", dob: "1994-05-20", phone: "9876586662" }]
        },
        {
            id: "USR045",
            name: "Kabir Dewan",
            avatar: "https://i.pravatar.cc/150?img=45",
            role: "Patient",
            status: "Active",
            prime: true,
            email: "kabir.dewan@gmail.com",
            phone: "9876587771",
            dob: "1996-02-28",
            gender: "Male",
            bloodGroup: "O-",
            joinedDate: "2025-02-28",
            lastActive: "5 mins ago",
            metrics: { totalOrders: 20, totalAppointments: 13, totalFamilyMembers: 3, totalSpent: 26500 },
            addresses: [
                { type: "Home", addressLine: "Vasant Kunj", city: "Delhi", state: "Delhi", pincode: "110070", isDefault: true }
            ],
            orders: [{ orderId: "ORD45001", date: "2026-05-27", item: "Immunity Booster Pack", amount: 1800, status: "Delivered" }],
            payments: [{ paymentId: "PAY51001", date: "2026-05-27", amount: 1800, method: "UPI", status: "Success" }],
            familyMembers: [{ id: "FM4401", name: "Tara Dewan", relation: "Daughter", dob: "2023-08-10", phone: "9876587772" }]
        }
    ];