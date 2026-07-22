// --- 1. भाषा के लिए डिक्शनरी (Translations) ---
const translations = {
    "Hindi": {
        "marquee": "✨ भक्ति सेवा में आपका स्वागत है, धर्म के इस पावन डिजिटल अभियान से जुड़ें। आपका छोटा सा दान, इस भक्ति ऐप के सर्वर को अधिक शक्तिशाली व सुगम बनाने में सहायक होगा। 🙏 कपिल खंडेलवाल...",
        "themes": "🎨 थीम्स",
        "langBtn": "🌐 भाषा",
        "profileMenu": "👤 मेरी प्रोफाइल",
        "aboutMenu": "ℹ️ हमारे बारे में",
        "shareMenu": "📤 ऐप शेयर करें",
        "contactMenu": "📞 संपर्क करें",
        "donationMenu": "🙏 सहयोग करें",
        "update": "📢 अपडेट: भक्तिसेवा: डिजिटल युग में भक्ति का नया स्वरूप। दैनिक जीवन की व्यस्तताओं में भी प्रभु के साथ अपना जुड़ाव बनाए रखें। 'भक्तिसेवा' ऐप आपको एक ऐसा डिजिटल मंच प्रदान करता है जहाँ आप अपनी सुविधा के अनुसार कहीं से भी अपने आराध्य की पूजा और आरती कर सकते हैं। नीचे दिए गए 'भक्तिसेवा डिजिटल मंदिर' पर क्लिक करें और आज ही अपनी भक्ति यात्रा की शुरुआत करें। सुगमता, सादगी और श्रद्धा—अब आपके मोबाइल पर। ✨",
        "aboutTitle": "🙏 भक्ति सेवा | आपका डिजिटल मन्दिर",
        "aboutText": "भक्ति सेवा केवल एक ऐप नहीं, बल्कि आपके हाथों में समाहित एक संपूर्ण डिजिटल मन्दिर है, जहाँ आस्था और तकनीक का अद्भुत संगम होता है। यहाँ आपको अपने आराध्य देवों के प्रति पूर्ण समर्पण के साथ पूजा-अर्चना करने का पावन अवसर मिलता है। हमारी ऐप में आप न केवल विभिन्न देवी-देवताओं के दर्शन कर सकते हैं, बल्कि आरती, चालीसा, मंत्रों का संग्रह और प्रेरणादायक सुविचारों के माध्यम से अपने दिन की शुरुआत सकारात्मक ऊर्जा के साथ कर सकते हैं। सनातन धर्म की जड़ों से जुड़ने और अपनी आध्यात्मिक यात्रा को और अधिक सरल व सुखद बनाने के लिए, भक्ति सेवा एक सच्चा मार्गदर्शक है, जो आपके जीवन में शांति और भक्ति का संचार करता है।",
        "aboutCommit": "✨ हमारी प्रतिबद्धता: प्रतिदिन एक आरती, मंत्र और सटीक पंचांग।"
    },
    "English": {
        "marquee": "✨ Welcome to Bhakti Sewa, Join our divine digital mission. Your small contribution helps us strengthen and sustain this Bhakti app for all devotees. 🙏 kapilkhandelwall...",
        "themes": "🎨 Themes",
        "langBtn": "🌐 Language",
        "profileMenu": "👤 My Profile",
        "aboutMenu": "ℹ️ About Us",
        "shareMenu": "📤 Share App",
        "contactMenu": "📞 Contact Us",
        "donationMenu": "🙏 Donation",
        "update": "📢 Update: Bhaktisewa: Redefining Devotion in the Digital Age. Stay connected with the Divine even amidst a busy schedule. The Bhaktisewa App offers a seamless platform to perform puja and aarti for your preferred deity from anywhere, at any time. Click the 'Bhaktisewa Digital Mandir' button below to begin your spiritual journey. Convenience, simplicity, and devotion—now right on your mobile screen. ✨",
        "aboutTitle": "🙏 Bhakti Sewa | Your Digital Temple",
        "aboutText": "Bhakti Sewa is not just an app, but a complete digital temple in the palm of your hands, where faith and technology meet in perfect harmony. Here, you get the sacred opportunity to worship and connect with your beloved deities with complete devotion. Through our app, you can not only seek the blessings of various deities but also start your day with positive energy through our extensive collection of Aartis, Chalishas, Mantras, and inspiring Suvichars. To reconnect with the roots of Sanatan Dharma and make your spiritual journey simpler and more fulfilling, Bhakti Sewa serves as your true guide, bringing peace and devotion into your life.",
        "aboutCommit": "✨ Our commitment: Daily one Aarti, Mantra, and accurate Panchang."
    }
};

// --- 2. वर्ल्ड टॉप 10 प्रीमियम थीम्स (Premium Themes) ---
// (आपका थीम वाला कोड यहाँ नीचे वैसा ही रहेगा जैसा पहले था)
const themes = [
    { name: "शाही स्वर्ण", goldColor: "#FFD700", bgColor: "#000000", btnColor: "#FFD700" },      
    { name: "दिव्य लाल", goldColor: "#FF4500", bgColor: "#1A0000", btnColor: "#FF4500" },      
    { name: "आसमानी नीली", goldColor: "#00BFFF", bgColor: "#000B1A", btnColor: "#00BFFF" },    
    { name: "प्रकृति हरी", goldColor: "#32CD32", bgColor: "#001A00", btnColor: "#32CD32" },    
    { name: "वैष्णव बैंगनी", goldColor: "#9370DB", bgColor: "#1A001A", btnColor: "#9370DB" },  
    { name: "सूर्योदय नारंगी", goldColor: "#FF8C00", bgColor: "#1A0F00", btnColor: "#FF8C00" },
    { name: "गुलाबी भक्ति", goldColor: "#FF69B4", bgColor: "#1A000F", btnColor: "#FF69B4" },   
    { name: "शांति ग्रे", goldColor: "#A9A9A9", bgColor: "#1F1F1F", btnColor: "#A9A9A9" },      
    { name: "समुद्री फिरोजी", goldColor: "#40E0D0", bgColor: "#001A18", btnColor: "#40E0D0" }, 
    { name: "मखमली मरून", goldColor: "#C71585", bgColor: "#1A000F", btnColor: "#C71585" }     
];
