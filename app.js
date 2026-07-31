"use strict"; // Secure Play Store Standard

document.addEventListener("DOMContentLoaded", () => {
    
    // ==========================================================
    // 🛡️ 00. SAFE FALLBACK FUNCTIONS (Prevent App Crash)
    // ==========================================================
    window.playShankhBtn = window.playShankhBtn || function() { console.log("Shankh clicked"); };
    window.toggleAarti   = window.toggleAarti   || function() { console.log("Aarti clicked"); };
    window.playGhantiBtn = window.playGhantiBtn || function() { console.log("Ghanti clicked"); };
    window.doDarshan     = window.doDarshan     || function() { console.log("Darshan clicked"); };
    window.doAashirvad   = window.doAashirvad   || function() { console.log("Aashirvad clicked"); };

// ==========================================================
// 🌐 01. COMPREHENSIVE DUAL-LANGUAGE DICTIONARY (i18n)
// ==========================================================
const i18n = {
    "en": {
        // App Header & Splash
        "app_title": "Bhakti Sewa - Your Digital Temple",
        "splash_title": "Bhakti Sewa",
        "splash_subtitle": "Your Digital Temple",
        "ticker_text": "🌸 Welcome to Digital Temple! 🛕 Enjoy free live darshan, digital puja, aarti & vrat kathas from home | 🔔 Follow & Subscribe on YouTube, Instagram & Facebook for daily updates! 🙏 Jai Shri Ram | Om Namah Shivaya | Jai Mata Di | Have a blessed day! &nbsp;&nbsp;&nbsp;&nbsp;",
        "menu_notif": "Notifications",
        "menu_lang": "Language (Hindi)", 
        "menu_share": "Share App",
        "menu_rate": "Rate Us",
        "menu_theme": "Themes",
        "menu_settings": "Settings",
        "menu_contact": "Contact Us", 
        "menu_about": "About App",
        "menu_privacy": "Privacy Policy",
        
        // Navigation & Sidebar
        "sidebar_title": "🙏 Bhakti Sewa Menu",
        "sidebar_gau": "Gau Sewa & Donation", 
        "badge_punya": "Virtue",
        "sidebar_jaap": "Digital Mantra Jaap",
        "sidebar_aarti": "Aarti & Chalisa",
        "sidebar_vrat": "Vrat Kathas",
        "sidebar_bhajan": "Bhajans",
        "sidebar_rashifal": "Daily Horoscope",
        "sidebar_quiz": "Dharma Quiz",
        
        // System Settings & Modals
        "notif_title": "🔔 Notification Settings", 
        "notif_desc": "Get daily darshan, morning mantras, and festival alerts.",
        "notif_daily": "Daily Alerts",
        "btn_save": "Save Settings", 
        "update_title": "New Vrat & Holy Update!",
        "update_desc": "Today's new vrat and special aarti content have been added. View now! 🙏", 
        "btn_view_now": "View Now",
        "theme_title": "✨ Choose Devotional Theme",
        "t_saffron": "Divine Saffron",
        "t_red": "Temple Red", 
        "t_gold": "Golden Yellow",
        "t_green": "Tulsi Green",
        "t_blue": "Ganga Blue",
        "t_purple": "Puja Purple",
        "t_orange": "Chandan Saffron",
        "t_pink": "Lotus Pink",
        "t_white": "Peace White",
        "t_bhakti": "Bhakti Gold",
        "settings_title": "⚙️ Settings",
        "settings_text_size": "📝 Text Size", 
        "btn_small": "Small",
        "btn_large": "Large",
        "settings_cache": "🧹 Clear App Cache",
        "settings_cache_hint": "(Press this if the app is slow)", 
        "btn_clear": "Clear",
        
        // Contact, About & Privacy
        "contact_title": "📞 Contact Us",
        "contact_subtitle": "Join the Bhakti Sewa family and share your suggestions!", 
        "contact_disclaimer": "🙏 Request: If you have a new bhajan, vrat katha, or face technical issues, feel free to contact us.",
        "about_title": "Bhakti Sewa",
        "about_subtitle": "Digital Sanctuary of Devotion",
        "about_desc": "🙏 Bhakti Sewa is a sacred digital platform created to simplify your daily spiritual journey. Connect traditional Sanatan culture with modern technology.",
        "privacy_title": "Privacy Policy",
        "privacy_summary": "🙏 Our Promise: Bhakti Sewa app does NOT save your private data (name, number, location) on our servers.",
        
        // Gau Sewa & Mantra Jaap
        "gau_title": "Gau Sewa & Food Donation",
        "gau_benefits_title": "✨ Benefits of Cow Donation in Life:",
        "gau_benefits_list": "<li><strong>Navgraha Shanti:</strong> Pacifies planetary defects and horoscope flaws.</li><li><strong>Prosperity:</strong> Brings wealth and abundance to the home.</li><li><strong>Protection:</strong> Guards against unexpected troubles and hazards.</li>",
        "gau_disclaimer": "🙏 Request: Your donation will go directly towards cow fodder and care.",
        "gau_donate_btn": "✨ Donate via UPI ✨",
        "gau_badge_info": "🏆 Honor: Enter Transaction ID after donation. A permanent ⭐ Gau Sevak golden badge will be added to your profile!",
        "gau_input_placeholder": "e.g. T2607... or UTR Number",
        "btn_submit": "Submit",
        "gau_success_msg": "🎉 Thank You! A special ⭐ Gau Sevak badge has been added to your profile for your dedication!",
        "jaap_title": "Digital Mantra Chanting",
        "jaap_subtitle": "Complete your daily spiritual practice",
        "jaap_select_label": "Choose your mantra:",
        "mantra_shiv": "Om Namah Shivaya (Lord Shiva)",
        "mantra_gayatri": "Om Bhur Bhuva Svaha (Gayatri Mantra)",
        "mantra_krishna": "Hare Rama Hare Krishna (Lord Vishnu)",
        "mantra_ganesh": "Om Gam Ganapataye Namaha (Lord Ganesha)",
        "jaap_tap_btn": "Tap Here",
        "jaap_reset_btn": "🔄 Reset (0)",
        "jaap_total_text": "Total Malas Today:",
        "jaap_success_msg": "🔔 Victory! Your 1 Mala (108 chants) is completed!",
        
        // Core Feature Titles
        "aarti_main_title": "📖 Aarti & Chalisa",
        "btn_back": "← Back",
        "btn_listen": "🎙️ Listen",
        "vrat_main_title": "📜 Complete Vrat Kathas", 
        "btn_listen_dadi": "🎙️ Listen (Grandma's Voice)",
        "bhajan_main_title": "🎵 Bhajan Lyrics",
        "rashifal_main_title": "🔮 Daily Horoscope", 
        "rashifal_disclaimer": "✨ This forecast is based on general astrological calculations and beliefs.",
        "btn_share_wa": "💬 Share",
        "lucky_color": "🎨 Lucky Color:", 
        "lucky_number": "🔢 Lucky Number:",
        
        // Quiz Section
        "quiz_main_title": "🎯 Dharma Quiz",
        "quiz_welcome_title": "Test Your Knowledge", 
        "quiz_welcome_desc": "Answer interesting questions from Ramayana, Mahabharata, and Vedas to raise your score.",
        "btn_start_quiz": "▶️ Start Quiz", 
        "quiz_q_count": "Question: 1/5",
        "quiz_score": "Score: 0",
        "btn_next_q": "Next Question ➔",
        "quiz_result_title": "Amazing Game!", 
        "quiz_final_score": "Your Score:",
        "btn_restart_quiz": "🔄 Play Again",
        
        // Deities & Live Aarti
        "god_ganesh": "Ganesh Ji", "god_shiv": "Shiv Ji", "god_ram": "Shri Ram", 
        "god_krishna": "Krishna Ji", "god_hanuman": "Hanuman Ji", "god_durga": "Durga Maa", 
        "god_vishnu": "Vishnu Ji", "god_laxmi": "Laxmi Ji", "god_saraswati": "Saraswati", 
        "god_sai": "Sai Baba", "god_shani": "Shani Dev", "god_kali": "Kali Mata", 
        "god_tirupati": "Tirupati Balaji", "god_khatu": "Khatu Shyam", "god_surya": "Surya Dev", 
        "btn_mandir_open": " Digital Temple ",
        "mantra_daily": "Karmanye Vadhikaraste Ma Phaleshu Kadachana.", 
        "mantra_daily_meaning": "Do your duty, without attachment to the fruits.",
        "mantra_source": "- Bhagavad Gita",
        "live_aarti_title": "🔴 Live Aarti & Darshan", 
        "live_mahakal": "Shri Mahakal", "live_kashi": "Kashi Vishwanath", "live_khatu": "Khatu Shyam Ji",
        
        // Ticker & App Intro
        "news_ticker": "✨ 100% Free Digital Devotional Experience! 🛕 Perform digital darshan and puja of famous temples from home | 📖 Listen to all vrat kathas, aarti & chalisa | 🔔 Get daily auspicious timings, panchang & horoscope... completely free! &nbsp;&nbsp;&nbsp;&nbsp;",
        "intro_badge": "✨ Digital Sanatan Platform",
        "intro_title": "Welcome to Bhakti Sewa",
        "intro_desc": "Enjoy divine darshan of famous temples across the country, complete aarti collections, and live devotional updates right from your home.",
        "intro_f1": "🪔 100% Pure Devotion",
        "intro_f2": "⚡ Live Updates",
        "intro_f3": "🗺️ Temple Info",
        
        // Panchang & Editorial
        "panchang_title": "Today's Hindu Panchang",
        "panchang_sub": "Auspicious Muhurat, Tithi, Nakshatra, and Rahukaal",
        "editorial_title": "📜 Holy Temples of India",
        "editorial_desc": "Detailed history, live darshan, and travel guidance",
        "loc_uk": "📍 Uttarakhand",
        "t_kedar": "Shri Kedarnath Jyotirlinga",
        "t_kedar_desc": "Nestled in the Himalayas, this supreme abode of Lord Shiva is one of the 12 Jyotirlingas...",
        "btn_read_more": "Read Full Details ➔",
        "loc_ap": "📍 Andhra Pradesh",
        "t_tiru": "Tirupati Balaji Temple",
        "t_tiru_desc": "Located on the Seshachalam Hills of Chittoor, this grand temple is among the wealthiest shrines...",
        "loc_up": "📍 Uttar Pradesh",
        "t_kashi": "Kashi Vishwanath Dham",
        "t_kashi_desc": "Situated on the banks of the Ganges in Varanasi, a central hub for Shiva devotees...",
        "btn_all_temples": "🌸 View List of All Holy Temples",

        // Knowledge Cards
        "grah_card_title": "Today's Planet Peace Mantra",
        "grah_card_desc": "Special mantra for removing obstacles and pacifying Navgrahas...",
        "vastu_card_title": "Home Temple as per Vastu",
        "vastu_card_desc": "Right direction, importance, 20+ Vastu rules & worship method...",
        "negative_card_title": "Protection from Negative Energies",
        "negative_card_desc": "30 powerful mantras, remedies, do's and don'ts for safety...",
        "pooja_card_title": "Daily Pooja Method & Lamp Rules",
        "pooja_card_desc": "Correct way of morning-evening worship, lamp direction & 20+ rules...",
        "nazar_card_title": "Remedies for Evil Eye & Nazar Dosha",
        "nazar_card_desc": "30 effective tricks & mantras to protect children & home from evil eye...",
        "lakshmi_card_title": "Wealth Increase & Maa Lakshmi Blessings",
        "lakshmi_card_desc": "Treasure direction, debt relief & 30 prosperity rules...",
        "planet_card_title": "Planet Defects Removal & Remedies",
        "planet_card_desc": "30 great remedies to avoid Shani, Rahu, Ketu & Kaal Sarp Dosha...",
        "tulsi_card_title": "Sacred Tulsi Worship & Care Rules",
        "tulsi_card_desc": "When to offer water, circumambulation & 30 prosperity rules...",
        "swapna_card_title": "Dream Interpretation & Meanings",
        "swapna_card_desc": "Signals of seeing God, snake, water or deceased person in dreams...",
        "remedies_card_title": "Effective Home Remedies & Health Tips",
        "remedies_card_desc": "30 home remedies for cold, stomach pain & minor ailments...",
        "chanakya_card_title": "Chanakya's Success & Wealth Sutras",
        "chanakya_card_desc": "30 priceless quotes for success, friendship & saving wealth...",
        "kitchen_card_title": "Kitchen Vastu & Annapurna Rules",
        "kitchen_card_desc": "Correct direction of stove & water, 30 rules for prosperity...",
        "pitru_card_title": "Pitru Blessings, Rituals & Dosha Removal",
        "pitru_card_desc": "Symptoms of Pitru Dosha, remedies, chants, donations & rules...",

        // Support & Footer
        "donate_main_title": "Dharma Sewa & Support",
        "donate_main_desc": "🙏 Dear devotees, to keep this digital temple ad-free, pure, and well-maintained, we need your generous support for server costs and technical upgrades.",
        "donate_f1": "✨ Server Maintenance",
        "donate_f2": "⚡ Fast & Secure",
        "donate_f3": "🌸 Free Service",
        "btn_donate_support": "💳 Support App Maintenance",
        "yt_title": "🎶 Complete Bhajan Evening",
        "yt_subtitle": "Select your favorite bhajan from the list and enjoy",
        "yt_footer": "✨ Bhakti Sewa Music Corner",
        "disc_title": "Holy Notice & Disclaimer",
        "disc_text": "All religious content provided here is based on Sanatan scriptures, Vedas, and traditional beliefs to ease your spiritual journey.",
        
        // Profile & Bottom Navigation
        "tribute_name": "Late Deepak Prakash",
        "tribute_tagline": "\"Immortal in memories, forever present as a blessing\"",
        "prof_title": "My Profile",
        "prof_user": "Dear Devotee",
        "prof_gotra": "Gotra:",
        "prof_set_gotra": "Set ✎",
        "prof_mala_count": "Total Chants",
        "prof_badge_label": "Your Honor",
        "prof_my_bhakti": "My Devotion",
        "prof_favorites": "My Favorites List",
        "prof_zodiac": "My Zodiac",
        "prof_tools": "Settings & Tools",
        "prof_font_size": "Text Size",
        "prof_vrat_alert": "Vrat Reminder Alert",
        "prof_share": "Share App",
        "prof_rate": "Rate Us 5-Stars",
        "nav_home": "Home",
        "nav_bhajan": "Bhajan",
        "nav_videos": "Videos",
        "nav_profile": "Profile",
        "ringtone_title": "🔔 Ringtone List",
        
        // Digital Mandir Controls
        "darshan_main_title": "🙏 Shri Shiv Darshan",
        "darshan_subtitle": "Select content for this holy shrine",
        "d_btn_aarti": "Aarti",
        "d_btn_katha": "Katha",
        "d_btn_ringtone": "Ringtone",
        "d_btn_bhajan": "Bhajan",
        "d_btn_status": "Status",
        "d_btn_wallpaper": "Wallpaper",
        "btn_back_gallery": "✕ Go Back",
        "mandir_ticker_text": "🙏 Welcome to Digital Temple Bhakti Sewa! • Gain virtue through regular darshan, aarti, and shankh sound. • Donate/offer chadawa to support services. 🪔",
        "btn_shankh": "Shankh",
        "btn_thali": "Aarti Thali",
        "btn_bell": "Bell",
        "btn_darshan": "Darshan",
        "btn_chadwa": "Offering",
        "btn_blessing": "Blessing"
    },
    "hi": {
        // App Header & Splash
        "app_title": "Bhakti Sewa - आपका अपना डिजिटल मंदिर",
        "splash_title": "भक्ति सेवा",
        "splash_subtitle": "आपका अपना डिजिटल मंदिर",
        "ticker_text": "🌸 डिजिटल मंदिर में आप सभी भक्तों का हार्दिक स्वागत है! 🛕 घर बैठे प्रसिद्ध मंदिरों के मुफ्त दर्शन, डिजिटल पूजा, आरती और व्रत कथाओं का आनंद लें | 🔔 नए अपडेट्स और रोजाना दिव्य दर्शन के लिए हमें YouTube, Instagram और Facebook पर Follow & Subscribe करके सपोर्ट करें! 🙏 जय श्री राम | ॐ नमः शिवाय | जय माता दी | आपका दिन शुभ और मंगलमय हो! &nbsp;&nbsp;&nbsp;&nbsp;",
        "menu_notif": "नोटिफिकेशन्स",
        "menu_lang": "Language (English)", 
        "menu_share": "ऐप शेयर करें",
        "menu_rate": "हमें रेट करें",
        "menu_theme": "थीम",
        "menu_settings": "सेटिंग्स",
        "menu_contact": "संपर्क करें", 
        "menu_about": "ऐप के बारे में",
        "menu_privacy": "प्राइवेसी पॉलिसी",
        
        // Navigation & Sidebar
        "sidebar_title": "🙏 भक्ति सेवा मेनू",
        "sidebar_gau": "गौ सेवा व दान", 
        "badge_punya": "पुण्य",
        "sidebar_jaap": "डिजिटल मंत्र जाप",
        "sidebar_aarti": "आरती व चालीसा",
        "sidebar_vrat": "व्रत कथाएँ",
        "sidebar_bhajan": "भजन",
        "sidebar_rashifal": "दैनिक राशिफल",
        "sidebar_quiz": "धर्म प्रश्नोत्तरी",
        
        // System Settings & Modals
        "notif_title": "🔔 नोटिफिकेशन सेटिंग्स", 
        "notif_desc": "दैनिक दर्शन, सुबह के मंत्र और त्यौहारों की सूचनाएं प्राप्त करें।",
        "notif_daily": "दैनिक सूचनाएं (Daily Alerts)",
        "btn_save": "सेटिंग्स सेव करें", 
        "update_title": "नया व्रत एवं पावन अपडेट!",
        "update_desc": "भक्ति सेवा ऐप में आज का नया व्रत और विशेष आरती सामग्री जोड़ दी गई है। अभी दर्शन करें! 🙏", 
        "btn_view_now": "अभी देखें",
        "theme_title": "✨ भक्तिमय थीम चुनें",
        "t_saffron": "दिव्य भगवा",
        "t_red": "मंदिर सिंदूरी", 
        "t_gold": "स्वर्ण पीला",
        "t_green": "तुलसी हरा",
        "t_blue": "गंगा नीला",
        "t_purple": "पूजन बैंगनी",
        "t_orange": "चंदन केसरी",
        "t_pink": "कमल गुलाबी",
        "t_white": "शांति श्वेत",
        "t_bhakti": "भक्ति स्वर्ण",
        "settings_title": "⚙️ सेटिंग्स",
        "settings_text_size": "📝 अक्षर का आकार", 
        "btn_small": "छोटा",
        "btn_large": "बड़ा",
        "settings_cache": "🧹 ऐप का कचरा साफ करें",
        "settings_cache_hint": "(अगर ऐप धीमा चले तो इसे दबाएं)", 
        "btn_clear": "साफ़ करें",
        
        // Contact, About & Privacy
        "contact_title": "📞 संपर्क करें",
        "contact_subtitle": "भक्ति सेवा परिवार से जुड़ें और अपने सुझाव साझा करें!", 
        "contact_disclaimer": "🙏 निवेदन: अगर आपके पास कोई नया भजन, व्रत कथा या जानकारी है जिसे आप ऐप में जोड़ना चाहते हैं, या आपको ऐप में कोई तकनीकी समस्या आ रही है, तो बेझिझक ऊपर दिए गए किसी भी माध्यम से हमसे संपर्क करें।",
        "about_title": "भक्ति सेवा",
        "about_subtitle": "डिजिटल मंदिर - Digital Sanctuary of Devotion",
        "about_desc": "🙏 भक्ति सेवा एक पवित्र डिजिटल मंच है, जिसे आपकी दैनिक आध्यात्मिक यात्रा को सरल बनाने के लिए बनाया गया है। हमारा मुख्य उद्देश्य पारंपरिक सनातन संस्कृति और आधुनिक तकनीक को जोड़ना है, जहाँ आपको सभी प्रसिद्ध धामों के दर्शन, दैनिक आरती, और पंचांग की जानकारी एक ही स्थान पर मिल सके।",
        "privacy_title": "प्राइवेसी पॉलिसी",
        "privacy_summary": "🙏 हमारा वादा: भक्ति सेवा ऐप आपका कोई भी निजी डेटा (जैसे नाम, नंबर, लोकेशन) अपने सर्वर पर सेव नहीं करता है। आपका डेटा आपके ही फोन में पूरी तरह सुरक्षित रहता है।",
        
        // Gau Sewa & Mantra Jaap
        "gau_title": "गौ सेवा व अन्नदान",
        "gau_benefits_title": "✨ जीवन में गौ दान के लाभ:",
        "gau_benefits_list": "<li><strong>नवग्रह शांति:</strong> गौ सेवा से कुंडली के दोष और नवग्रह शांत होते हैं।</li><li><strong>सुख-समृद्धि:</strong> घर में बरकत आती है और आर्थिक परेशानियां दूर होती हैं।</li><li><strong>संकट मोचन:</strong> अकाल मृत्यु, पितृ दोष और सभी प्रकार के कष्टों से रक्षा होती है।</li>",
        "gau_disclaimer": "🙏 निवेदन: आपका दान सीधे गौ माता के चारे और सेवा में लगाया जाएगा.",
        "gau_donate_btn": "✨ UPI से दान करें ✨",
        "gau_badge_info": "🏆 सम्मान: दान के बाद नीचे Transaction ID दर्ज करें। आपकी प्रोफाइल पर हमेशा के लिए ⭐ गौ सेवक का गोल्डन बैज लगा दिया जाएगा!",
        "gau_input_placeholder": "जैसे: T2607... या UTR नंबर",
        "btn_submit": "सबमिट करें",
        "gau_success_msg": "🎉 धन्यवाद! गौ माता के प्रति आपके समर्पण के लिए आपकी प्रोफाइल पर ⭐ गौ सेवक का विशेष बैज लगा दिया गया है!",
        "jaap_title": "डिजिटल मंत्र जाप",
        "jaap_subtitle": "अपनी दैनिक साधना पूरी करें",
        "jaap_select_label": "अपना मंत्र चुनें:",
        "mantra_shiv": "ॐ नमः शिवाय (शिव जी)",
        "mantra_gayatri": "ॐ भूर्भुवः स्वः (गायत्री मंत्र)",
        "mantra_krishna": "हरे राम हरे कृष्ण (विष्णु जी)",
        "mantra_ganesh": "ॐ गं गणपतये नमः (गणेश जी)",
        "jaap_tap_btn": "टैप करें",
        "jaap_reset_btn": "🔄 रिसेट (0)",
        "jaap_total_text": "आज की कुल माला:",
        "jaap_success_msg": "🔔 जय हो! आपकी 1 माला (108 जाप) पूरी हो गई है!",
        
        // Core Feature Titles
        "aarti_main_title": "📖 आरती व चालीसा",
        "btn_back": "← वापस",
        "btn_listen": "🎙️ सुनें",
        "vrat_main_title": "📜 संपूर्ण व्रत कथाएँ", 
        "btn_listen_dadi": "🎙️ सुनें (दादी माँ की आवाज़)",
        "bhajan_main_title": "🎵 भजन",
        "rashifal_main_title": "🔮 दैनिक राशिफल", 
        "rashifal_disclaimer": "✨ यह फलादेश सामान्य ज्योतिषीय गणनाओं और मान्यताओं पर आधारित है।",
        "btn_share_wa": "💬 शेयर करें",
        "lucky_color": "🎨 शुभ रंग:", 
        "lucky_number": "🔢 शुभ अंक:",
        
        // Quiz Section
        "quiz_main_title": "🎯 धर्म प्रश्नोत्तरी",
        "quiz_welcome_title": "अपने ज्ञान को परखें", 
        "quiz_welcome_desc": "रामायण, महाभारत और वेदों से जुड़े रोचक सवालों के जवाब दें और अपना स्कोर बढ़ाएं।",
        "btn_start_quiz": "▶️ क्विज़ शुरू करें", 
        "quiz_q_count": "प्रश्न: 1/5",
        "quiz_score": "स्कोर: 0",
        "btn_next_q": "अगला प्रश्न ➔",
        "quiz_result_title": "अद्भुत खेल!", 
        "quiz_final_score": "आपका स्कोर:",
        "btn_restart_quiz": "🔄 फिर से खेलें",
        
        // Deities & Live Aarti
        "god_ganesh": "गणेश जी", "god_shiv": "शिव जी", "god_ram": "श्री राम", 
        "god_krishna": "कृष्ण जी", "god_hanuman": "हनुमान जी", "god_durga": "दुर्गा माँ", 
        "god_vishnu": "विष्णु जी", "god_laxmi": "लक्ष्मी जी", "god_saraswati": "सरस्वती माता", 
        "god_sai": "साईं बाबा", "god_shani": "शनि देव", "god_kali": "काली माता", 
        "god_tirupati": "तिरुपति बालाजी", "god_khatu": "खाटू श्याम", "god_surya": "सूर्य देव", 
        "btn_mandir_open": " डिजिटल मंदिर ",
        "mantra_daily": "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन।", 
        "mantra_daily_meaning": "कर्म करो, फल की चिंता मत करो।",
        "mantra_source": "- श्रीमद्भगवद्गीता",
        "live_aarti_title": "🔴 लाइव आरती व दर्शन", 
        "live_mahakal": "श्री महाकाल", "live_kashi": "काशी विश्वनाथ", "live_khatu": "खाटू श्याम जी",
        
        // Ticker & App Intro
        "news_ticker": "✨ 100% मुफ़्त डिजिटल भक्ति अनुभव! 🛕 घर बैठे प्रसिद्ध मंदिरों के डिजिटल दर्शन और पूजा करें | 📖 सभी व्रत कथाएं, आरती और चालीसा सुनें | 🔔 दैनिक शुभ मुहूर्त, पंचांग व राशिफल प्राप्त करें | 🌸 अपने पसंदीदा मंदिर का संपूर्ण इतिहास पढ़ें... बिल्कुल फ्री! &nbsp;&nbsp;&nbsp;&nbsp;",
        "intro_badge": "✨ डिजिटल सनातन मंच",
        "intro_title": "भक्ति सेवा में आपका स्वागत है",
        "intro_desc": "घर बैठे देश के सभी प्रसिद्ध पवित्र धामों के दिव्य दर्शन, संपूर्ण आरती संग्रह, और लाइव धार्मिक अपडेट्स का आनंद लें। यह ऐप आपकी दैनिक पूजा और आध्यात्मिक यात्रा को सरल और मंगलमय बनाने के लिए समर्पित है।",
        "intro_f1": "🪔 100% शुद्ध भक्ति",
        "intro_f2": "⚡ लाइव अपडेट्स",
        "intro_f3": "🗺️ धामों की जानकारी",
        
        // Panchang & Editorial
        "panchang_title": "आज का हिन्दू पंचांग",
        "panchang_sub": "शुभ मुहूर्त, तिथि, नक्षत्र और राहुकाल",
        "editorial_title": "📜 भारत के पवित्र धाम",
        "editorial_desc": "विस्तृत इतिहास, लाइव दर्शन और यात्रा जानकारी",
        "loc_uk": "📍 उत्तराखंड",
        "t_kedar": "श्री केदारनाथ ज्योतिर्लिंग",
        "t_kedar_desc": "हिमालय की गोद में स्थित भगवान शिव का यह परम पवित्र धाम 12 ज्योतिर्लिंगों में से एक है।...",
        "btn_read_more": "संपूर्ण जानकारी पढ़ें ➔",
        "loc_ap": "📍 आंध्र प्रदेश",
        "t_tiru": "तिरुपति बालाजी मंदिर",
        "t_tiru_desc": "चित्तूर जिले की शेषचलम पहाड़ियों पर स्थित यह भव्य मंदिर दुनिया के सबसे अमीर मंदिरों में गिना जाता है...",
        "loc_up": "📍 उत्तर प्रदेश",
        "t_kashi": "काशी विश्वनाथ धाम",
        "t_kashi_desc": "बाबा विश्वनाथ की नगरी काशी (वाराणसी) में गंगा तट पर स्थित यह मंदिर शिवभक्तों का मुख्य केंद्र है...",
        "btn_all_temples": "🌸 सभी पवित्र धामों की सूची देखें",

        // Knowledge Cards
        "grah_card_title": "आज का ग्रह शांति का मंत्र",
        "grah_card_desc": "समस्त बाधाओं के निवारण और नवग्रह शांति हेतु विशेष मंत्र...",
        "vastu_card_title": "वास्तु के अनुसार घर का मंदिर",
        "vastu_card_desc": "मंदिर की सही दिशा, महत्त्व, 20+ वास्तु नियम व पूजा विधि...",
        "negative_card_title": "नकारात्मक शक्तियों से बचाव के उपाय",
        "negative_card_desc": "सुरक्षा के 30 शक्तिशाली मंत्र, उपाय, क्या करें और क्या न करें...",
        "pooja_card_title": "दैनिक पूजा विधि और दीप प्रज्वलन नियम",
        "pooja_card_desc": "सुबह-शाम पूजा का सही तरीका, दीपक की दिशा व 20+ नियम...",
        "nazar_card_title": "नजर दोष व बुरी नज़र से बचाव के उपाय",
        "nazar_card_desc": "बच्चों और घर को नजर से बचाने के 30 अचूक टोटके व मंत्र...",
        "lakshmi_card_title": "धन वृद्धि व माँ लक्ष्मी कृपा के उपाय",
        "lakshmi_card_desc": "तिजोरी की सही दिशा, कर्ज मुक्ति और बरकत बढ़ाने के 30 नियम...",
        "planet_card_title": "ग्रह दोष निवारण व शांति के उपाय",
        "planet_card_desc": "शनि, राहु, केतु और कालसर्प दोष से बचने के 30 महाउपाय...",
        "tulsi_card_title": "पवित्र तुलसी पूजा और सेवा के नियम",
        "tulsi_card_desc": "तुलसी में जल कब चढ़ाएं, परिक्रमा और बरकत बढ़ाने के 30 नियम...",
        "swapna_card_title": "स्वप्न फल और सपनों का मतलब",
        "swapna_card_desc": "सपने में भगवान, सांप, पानी या मृत व्यक्ति दिखने का क्या है संकेत...",
        "remedies_card_title": "अचूक घरेलू नुस्खे व स्वास्थ्य उपाय",
        "remedies_card_desc": "सर्दी-जुकाम, पेट दर्द और छोटी-मोटी बीमारियों के 30 देसी उपाय...",
        "chanakya_card_title": "आचार्य चाणक्य के सफलता और धन सूत्र",
        "chanakya_card_desc": "जीवन में तरक्की, दोस्ती, और धन बचाने के चाणक्य के 30 अनमोल वचन...",
        "kitchen_card_title": "रसोई घर का वास्तु व अन्नपूर्णा नियम",
        "kitchen_card_desc": "चूल्हा, पानी और गैस की सही दिशा, बरकत बढ़ाने के 30 नियम...",
        "pitru_card_title": "पितृ कृपा, पूजा विधि एवं दोष निवारण",
        "pitru_card_desc": "पितृ दोष के लक्षण, शांति के उपाय, पाठ, दान और आशीर्वाद के नियम...",
        
        // Support & Footer
        "donate_main_title": "धर्म सेवा और सहयोग",
        "donate_main_desc": "🙏 प्रिय धर्मप्रेमी भक्तजनों, सनातन संस्कृति और भक्तिभाव से परिपूर्ण इस पावन डिजिटल मंदिर को बिना किसी विज्ञापन के, पूर्णतः शुद्ध, अबाधित और सर्वसुविधा संपन्न बनाए रखने के लिए हमें आपके प्रेमपूर्ण और उदार सहयोग की अत्यंत आवश्यकता है।",
        "donate_f1": "✨ सर्वर रखरखाव",
        "donate_f2": "⚡ तेज और सुरक्षित",
        "donate_f3": "🌸 निःशुल्क सेवा",
        "btn_donate_support": "💳 ऐप के रखरखाव हेतु सहयोग करें",
        "yt_title": "🎶 संपूर्ण भजन संध्या",
        "yt_subtitle": "सूची से अपनी पसंद का भजन चुनें और आनंद लें",
        "yt_footer": "✨ भक्ति सेवा म्यूज़िक कॉर्नर",
        "disc_title": "पवित्र सूचना एवं डिस्क्लेमर",
        "disc_text": "इस ऐप में प्रदत्त समस्त धार्मिक, पंचांग, आरती एवं कथा सामग्री सनातन ग्रंथों, वेदों तथा लोक-मान्यताओं पर आधारित है। हमारा उद्देश्य केवल आपकी आध्यात्मिक यात्रा को सुगम बनाना है।",
        
        // Profile & Bottom Navigation
        "tribute_name": "स्वर्गीय दीपक प्रकाश",
        "tribute_tagline": "\"स्मृतियों में अमर, आशीर्वाद रूप में सदा साथ\"",
        "prof_title": "मेरी प्रोफाइल",
        "prof_user": "प्रिय भक्त",
        "prof_gotra": "गोत्र:",
        "prof_set_gotra": "सेट करें ✎",
        "prof_mala_count": "कुल माला जाप",
        "prof_badge_label": "आपका सम्मान",
        "prof_my_bhakti": "मेरी भक्ति",
        "prof_favorites": "मेरी फेवरेट लिस्ट",
        "prof_zodiac": "मेरी राशि (Zodiac)",
        "prof_tools": "सेटिंग्स और टूल्स",
        "prof_font_size": "कथा/आरती अक्षर आकार",
        "prof_vrat_alert": "व्रत रिमाइंडर अलर्ट",
        "prof_share": "ऐप शेयर करें",
        "prof_rate": "हमें 5-स्टार दें",
        "nav_home": "होम",
        "nav_bhajan": "भजन",
        "nav_videos": "वीडियोज़",
        "nav_profile": "प्रोफाइल",
        "ringtone_title": "🔔 रिंगटोन सूची",
        
        // Digital Mandir Controls
        "darshan_main_title": "🙏 श्री शिव दर्शन",
        "darshan_subtitle": "इस पावन धाम की समस्त सामग्री चुनें",
        "d_btn_aarti": "आरती",
        "d_btn_katha": "कथा",
        "d_btn_ringtone": "रिंगटोन",
        "d_btn_bhajan": "भजन",
        "d_btn_status": "स्टेटस",
        "d_btn_wallpaper": "वॉलपेपर",
        "btn_back_gallery": "✕ पीछे जाएँ",
        "mandir_ticker_text": "🙏 डिजिटल मंदिर भक्ति सेवा में आपका स्वागत है! • नियमित दर्शन, आरती और शंखध्वनि से पुण्य लाभ प्राप्त करें। • अपनी सेवाएँ जारी रखने के लिए दान/चढ़ावा दें। 🪔",
        "btn_shankh": "शंख",
        "btn_thali": "आरती थाली",
        "btn_bell": "घंटी",
        "btn_darshan": "दर्शन",
        "btn_chadwa": "चढ़ावा",
        "btn_blessing": "आशीर्वाद"
    }
};

// Global Current Language
window.currentLang = localStorage.getItem("app_lang") || "hi";

// Helper function to dynamically map elements that don't have data-i18n in raw HTML
function autoInjectI18nAttributes() {
    const cardMappings = [
        { selector: ".grah-shanti-card[onclick*='GrahShanti']", titleKey: "grah_card_title", descKey: "grah_card_desc" },
        { selector: ".grah-shanti-card[onclick*='VastuMandir']", titleKey: "vastu_card_title", descKey: "vastu_card_desc" },
        { selector: ".grah-shanti-card[onclick*='NegativePower']", titleKey: "negative_card_title", descKey: "negative_card_desc" },
        { selector: ".grah-shanti-card[onclick*='PoojaVidhi']", titleKey: "pooja_card_title", descKey: "pooja_card_desc" },
        { selector: ".grah-shanti-card[onclick*='NazarDosha']", titleKey: "nazar_card_title", descKey: "nazar_card_desc" },
        { selector: ".grah-shanti-card[onclick*='LakshmiVastu']", titleKey: "lakshmi_card_title", descKey: "lakshmi_card_desc" },
        { selector: ".grah-shanti-card[onclick*='PlanetDosha']", titleKey: "planet_card_title", descKey: "planet_card_desc" },
        { selector: ".grah-shanti-card[onclick*='TulsiVastu']", titleKey: "tulsi_card_title", descKey: "tulsi_card_desc" },
        { selector: ".grah-shanti-card[onclick*='SwapnaPhal']", titleKey: "swapna_card_title", descKey: "swapna_card_desc" },
        { selector: ".grah-shanti-card[onclick*='HomeRemedies']", titleKey: "remedies_card_title", descKey: "remedies_card_desc" },
        { selector: ".grah-shanti-card[onclick*='Chanakya']", titleKey: "chanakya_card_title", descKey: "chanakya_card_desc" },
        { selector: ".grah-shanti-card[onclick*='KitchenVastu']", titleKey: "kitchen_card_title", descKey: "kitchen_card_desc" },
        { selector: ".grah-shanti-card[onclick*='PitruVastu']", titleKey: "pitru_card_title", descKey: "pitru_card_desc" }
    ];

    cardMappings.forEach(item => {
        const card = document.querySelector(item.selector);
        if (card) {
            const h3 = card.querySelector("h3");
            const p = card.querySelector("p");
            if (h3 && !h3.hasAttribute("data-i18n")) h3.setAttribute("data-i18n", item.titleKey);
            if (p && !p.hasAttribute("data-i18n")) p.setAttribute("data-i18n", item.descKey);
        }
    });
}

// Master Language Toggle Function
window.toggleLanguage = function() {
    window.currentLang = (window.currentLang === "hi") ? "en" : "hi";
    localStorage.setItem("app_lang", window.currentLang);
    window.applyTranslations(window.currentLang);
};

// Master Apply Translations Engine
window.applyTranslations = function(lang) {
    const dict = i18n[lang];
    if (!dict) return;
    
    document.documentElement.lang = lang;
    
    // Inject data-i18n to cards dynamically before updating
    autoInjectI18nAttributes();

    // 1. Process all elements with data-i18n attribute
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (dict[key]) {
            if (el.tagName === "INPUT" && el.hasAttribute("placeholder")) {
                el.placeholder = dict[key];
            } else {
                el.innerHTML = dict[key];
            }
        }
    });

    // 2. Update Header Language Button Text
    const langBtnSpan = document.querySelector("#langToggleBtn span:last-child");
    if (langBtnSpan && dict["menu_lang"]) {
        langBtnSpan.innerText = dict["menu_lang"];
    }

    // 3. Update Digital Mandir Ticker Text
    const sewaTicker = document.getElementById("sewa");
    if (sewaTicker && dict["mandir_ticker_text"]) {
        sewaTicker.innerText = dict["mandir_ticker_text"];
    }

    // 4. Refresh API/Dynamic data if available
    if (typeof fetchPanchangData === "function") fetchPanchangData();
    if (typeof fetchMantraAndSuvicharData === "function") fetchMantraAndSuvicharData();
};

// Event Listener Delegation (Ensures clicks never fail)
document.addEventListener("click", function(e) {
    const langBtn = e.target.closest("#langToggleBtn");
    if (langBtn) {
        e.preventDefault();
        e.stopPropagation();
        window.toggleLanguage();

        // Close dropdown menu automatically
        const dropdown = document.getElementById("customDropdown");
        if (dropdown) dropdown.classList.remove("show");
    }
});

// Initialize Language on Script Load
document.addEventListener("DOMContentLoaded", () => {
    window.applyTranslations(window.currentLang);
});


    // ==========================================================
    // 🎨 02. THEMES & SPLASH SCREEN LOGIC
    // ==========================================================
    const savedTheme = localStorage.getItem("app_theme") || "divine-saffron";
    document.documentElement.setAttribute("data-theme", savedTheme);

    setTimeout(() => {
        const splashScreen = document.getElementById("splashScreen");
        const appContainer = document.getElementById("appContainer");
        if(splashScreen) splashScreen.classList.add("hidden");
        if(appContainer) appContainer.classList.remove("hidden");
    }, 2000); 
    // ==========================================================
    // 🧭 03. SIDEBAR, DROPDOWN & BOTTOM NAVIGATION
    // ==========================================================
    const sidebar = document.getElementById("sidebar");
    const overlay = document.getElementById("overlay");
    const handleIcon = document.getElementById("handleIcon");
    
    window.toggleSidebar = function() {
        if (sidebar && sidebar.classList.contains("open")) {
            sidebar.classList.remove("open");
            if (overlay) overlay.classList.remove("active");
            if (handleIcon) handleIcon.style.transform = "rotate(0deg)";
            document.body.style.overflow = ""; 
        } else {
            if (sidebar) sidebar.classList.add("open");
            if (overlay) overlay.classList.add("active");
            if (handleIcon) handleIcon.style.transform = "rotate(180deg)";
            document.body.style.overflow = "hidden"; 
        }
    };

    document.getElementById("sidebarHandle")?.addEventListener("click", toggleSidebar);
    document.getElementById("closeSidebarBtn")?.addEventListener("click", toggleSidebar);
    if (overlay) overlay.onclick = toggleSidebar;
    
    const dropdownContent = document.getElementById("customDropdown");
    window.closeDropdownMenu = () => { if (dropdownContent) dropdownContent.classList.remove("show"); };

    document.getElementById("dropdownBtn")?.addEventListener("click", (e) => {
        e.stopPropagation(); 
        if (dropdownContent) dropdownContent.classList.toggle("show");
        if (sidebar && sidebar.classList.contains("open")) toggleSidebar();
    });
    window.addEventListener("click", (e) => { if (!e.target.matches('#dropdownBtn')) closeDropdownMenu(); });

    // Theme Modal & Dark Mode Toggle
    const themeModal = document.getElementById("themeModal");
    document.getElementById("openThemeBtn")?.addEventListener("click", (e) => {
        e.preventDefault();
        if (themeModal) themeModal.classList.remove("hidden");
        closeDropdownMenu();
    });
    document.getElementById("closeThemeModalBtn")?.addEventListener("click", () => {
        if (themeModal) themeModal.classList.add("hidden");
    });
    document.querySelectorAll(".theme-box").forEach(button => {
        button.addEventListener("click", (e) => {
            const newTheme = e.target.getAttribute("data-theme");
            document.documentElement.setAttribute("data-theme", newTheme);
            localStorage.setItem("app_theme", newTheme);
            if (themeModal) themeModal.classList.add("hidden");
        });
    });

    const body = document.body;
    const themeIcon = document.getElementById("themeIcon");
    if (localStorage.getItem("appTheme") === "dark") {
        body.classList.add("dark-theme");
        if(themeIcon) themeIcon.textContent = "☀️"; 
    }
    document.getElementById("themeToggleBtn")?.addEventListener("click", () => {
        body.classList.toggle("dark-theme");
        if (body.classList.contains("dark-theme")) {
            if(themeIcon) themeIcon.textContent = "☀️";
            localStorage.setItem("appTheme", "dark");
        } else {
            if(themeIcon) themeIcon.textContent = "🌙";
            localStorage.setItem("appTheme", "light");
        }
    });

    // Image Loop (Auto Banner Slider)
    const images = document.querySelectorAll(".loop-img");
    if (images.length > 0) {
        let currentIndex = 0;
        setInterval(() => {
            images[currentIndex].classList.remove("active");
            currentIndex = (currentIndex + 1) % images.length;
            images[currentIndex].classList.add("active");
        }, 3000); 
    }


    // ==========================================================
    // ⚙️ 04. SETTINGS, NOTIFICATIONS & SHARE LOGIC
    // ==========================================================
    const notifModal = document.getElementById("notificationModal");
    const notifToggle = document.getElementById("notifToggle");
    document.querySelector(".dropdown-content .dropdown-item:first-child")?.addEventListener("click", (e) => {
        e.preventDefault();
        if (notifModal) notifModal.classList.remove("hidden");
        closeDropdownMenu(); 
        if (notifToggle) notifToggle.checked = localStorage.getItem("bhakti_notifications") === "true";
    });
    document.getElementById("closeNotifModalBtn")?.addEventListener("click", () => notifModal?.classList.add("hidden"));
    
    document.getElementById("saveNotifBtn")?.addEventListener("click", () => {
        const isEnabled = notifToggle ? notifToggle.checked : false;
        localStorage.setItem("bhakti_notifications", isEnabled);
        alert(isEnabled ? (window.currentLang === "en" ? "🔔 Notifications ON!" : "🔔 नोटिफिकेशन्स चालू हो गई हैं!") : (window.currentLang === "en" ? "🔕 Notifications OFF." : "🔕 नोटिफिकेशन्स बंद कर दी गई हैं।"));
        if (notifModal) notifModal.classList.add("hidden");
    });

    const updateAlertModal = document.getElementById("updateAlertModal");
    const latestVartID = "ekadashi_aug_2026"; 
    if (localStorage.getItem("bhakti_notifications") === "true" && localStorage.getItem("seen_latest_vart") !== latestVartID) {
        setTimeout(() => { if (updateAlertModal) updateAlertModal.classList.remove("hidden"); }, 3000);
    }
    document.getElementById("closeUpdateModalBtn")?.addEventListener("click", () => {
        if (updateAlertModal) updateAlertModal.classList.add("hidden");
        localStorage.setItem("seen_latest_vart", latestVartID);
    });
    document.getElementById("viewUpdateBtn")?.addEventListener("click", () => {
        if (updateAlertModal) updateAlertModal.classList.add("hidden");
        localStorage.setItem("seen_latest_vart", latestVartID);
        document.querySelector(".festivals-section")?.scrollIntoView({ behavior: 'smooth' });
    });

    document.getElementById("shareAppBtn")?.addEventListener("click", async (e) => {
        e.preventDefault();
        closeDropdownMenu();
        const shareData = { 
            title: 'Bhakti Sewa', 
            text: window.currentLang === "en" ? '🙏 Download this holy app! 🪔' : '🙏 भक्ति सेवा ऐप डाउनलोड करें! 🪔', 
            url: 'https://play.google.com/store/apps/details?id=com.bhaktisewa.app' 
        };
        try {
            await navigator.share(shareData);
        } catch (err) {
            try {
                await navigator.clipboard.writeText(shareData.text + "\n" + shareData.url);
                alert(window.currentLang === "en" ? "✅ Link copied to clipboard!" : "✅ ऐप का लिंक कॉपी हो गया है!");
            } catch (clipErr) { alert("Link: " + shareData.url); }
        }
    });

    document.getElementById("rateUsBtn")?.addEventListener("click", (e) => {
        e.preventDefault(); closeDropdownMenu();
        window.open(`https://play.google.com/store/apps/details?id=com.bhaktisewa.app`, '_blank');
    });

    const settingsModal = document.getElementById("settingsModal");
    const textSizeNormal = document.getElementById("textSizeNormal");
    const textSizeLarge = document.getElementById("textSizeLarge");
    document.getElementById("openSettingsBtn")?.addEventListener("click", (e) => { e.preventDefault(); settingsModal?.classList.remove("hidden"); closeDropdownMenu(); });
    document.getElementById("closeSettingsModalBtn")?.addEventListener("click", () => settingsModal?.classList.add("hidden"));

    if (textSizeNormal && textSizeLarge) {
        if (localStorage.getItem("appFontSize") === "large") {
            document.body.style.fontSize = "115%";
            textSizeNormal.classList.remove("active");
            textSizeLarge.classList.add("active");
        }
        textSizeNormal.addEventListener("click", () => {
            document.body.style.fontSize = "100%"; localStorage.setItem("appFontSize", "normal");
            textSizeNormal.classList.add("active"); textSizeLarge.classList.remove("active");
        });
        textSizeLarge.addEventListener("click", () => {
            document.body.style.fontSize = "115%"; localStorage.setItem("appFontSize", "large");
            textSizeLarge.classList.add("active"); textSizeNormal.classList.remove("active");
        });
    }

    document.getElementById("clearCacheBtn")?.addEventListener("click", () => {
        const msg = window.currentLang === "en" ? "⚠️ Clear app cache?" : "⚠️ क्या आप ऐप का कैशे साफ करना चाहते हैं?";
        if (confirm(msg)) { localStorage.clear(); alert(window.currentLang === "en" ? "🧹 Cache cleared!" : "🧹 कैशे साफ़ हो गया!"); window.location.reload(); }
    });

    const setupModal = (openId, closeId, modalId) => {
        const modal = document.getElementById(modalId);
        document.getElementById(openId)?.addEventListener("click", (e) => { e.preventDefault(); modal?.classList.remove("hidden"); closeDropdownMenu(); });
        document.getElementById(closeId)?.addEventListener("click", () => modal?.classList.add("hidden"));
    };
    setupModal("openContactBtn", "closeContactModalBtn", "contactModal");
    setupModal("openAboutBtn", "closeAboutModalBtn", "aboutModal");
    setupModal("openPrivacyBtn", "closePrivacyModalBtn", "privacyModal");
    // ==========================================================
    // 🐄 05. GAU SEWA & 📿 MANTRA JAAP LOGIC (VIP PROFILE INTEGRATED)
    // ==========================================================
    
    // --- VIP Profile Stats Update Function ---
    function updateVipProfileStats() {
        const profTotalMala = document.getElementById("profTotalMala");
        const profBadge = document.getElementById("profBadge");
        
        let malas = parseInt(localStorage.getItem("bhakti_total_malas")) || 0;
        if (profTotalMala) profTotalMala.innerText = malas; // प्रोफाइल में माला अपडेट
        
        let isGauSevak = localStorage.getItem("bhakti_gau_badge") === "true";
        
        // सम्मान (Badge) लॉजिक
        if (profBadge) {
            if (isGauSevak) {
                profBadge.innerHTML = "⭐ गौ सेवक";
            } else if (malas >= 21) {
                profBadge.innerHTML = "📿 महायोगी";
            } else if (malas >= 11) {
                profBadge.innerHTML = "✨ परम भक्त";
            } else if (malas > 0) {
                profBadge.innerHTML = "🙏 भक्त";
            } else {
                profBadge.innerHTML = "--";
            }
        }
    }

    // --- Gau Sewa Logic ---
    const gauModal = document.getElementById("gauSewaModal");
    const transInput = document.getElementById("transactionIdInput");
    const gauSuccess = document.getElementById("gauSuccessMsg");
    
    document.getElementById("openGauSewaBtn")?.addEventListener("click", (e) => { 
        e.preventDefault(); 
        if(gauModal) gauModal.classList.remove("hidden"); 
        if(gauSuccess) gauSuccess.classList.add("hidden"); 
        if(transInput) transInput.value = ""; 
        if (typeof closeDropdownMenu === "function") closeDropdownMenu(); 
    });
    
    document.getElementById("closeGauSewaBtn")?.addEventListener("click", () => gauModal?.classList.add("hidden"));
    
    document.getElementById("submitTransIdBtn")?.addEventListener("click", () => {
        if (transInput && transInput.value.trim().length > 5) { 
            localStorage.setItem("bhakti_gau_badge", "true"); 
            if(gauSuccess) gauSuccess.classList.remove("hidden"); 
            transInput.value = ""; 
            applyGoldenBadge();
            updateVipProfileStats(); // प्रोफाइल में तुरंत बैज अपडेट करें
        } else {
            alert(window.currentLang === "en" ? "Please enter a valid Transaction ID!" : "कृपया सही Transaction ID दर्ज करें!");
        }
    });

    function applyGoldenBadge() {
        if (localStorage.getItem("bhakti_gau_badge") === "true") {
            document.querySelectorAll(".user-profile-name").forEach(el => {
                if (!el.innerHTML.includes("⭐")) {
                    el.innerHTML += ` <span class="golden-badge">${window.currentLang === "en" ? "⭐ Gau Sevak" : "⭐ गौ सेवक"}</span>`;
                }
            });
        }
    }
    applyGoldenBadge();

    // --- Mala Jaap Logic ---
    const jaapModal = document.getElementById("jaapModal");
    const currentCountEl = document.getElementById("currentCount");
    const totalMalaEl = document.getElementById("totalMalaCount");
    const jaapSuccessMsg = document.getElementById("jaapSuccessMsg");
    let currentJaapCount = 0; 
    let totalMalasDone = parseInt(localStorage.getItem("bhakti_total_malas")) || 0;
    
    if(totalMalaEl) totalMalaEl.innerText = totalMalasDone;
    updateVipProfileStats(); // लोड होते ही प्रोफाइल में माला दिखाएं

    document.getElementById("openJaapBtn")?.addEventListener("click", (e) => { 
        e.preventDefault(); 
        jaapModal?.classList.remove("hidden"); 
        if (typeof closeDropdownMenu === "function") closeDropdownMenu(); 
    });
    
    document.getElementById("closeJaapBtn")?.addEventListener("click", () => jaapModal?.classList.add("hidden"));
    
    document.getElementById("jaapTapBtn")?.addEventListener("click", () => {
        if (navigator.vibrate) navigator.vibrate(50);
        if(jaapSuccessMsg) jaapSuccessMsg.classList.add("hidden");
        
        currentJaapCount++;
        if (currentCountEl) currentCountEl.innerText = currentJaapCount;
        
        if (currentJaapCount === 108) {
            if (navigator.vibrate) navigator.vibrate([200, 100, 200]);
            if(jaapSuccessMsg) jaapSuccessMsg.classList.remove("hidden");
            
            totalMalasDone++;
            if (totalMalaEl) totalMalaEl.innerText = totalMalasDone;
            localStorage.setItem("bhakti_total_malas", totalMalasDone);
            
            updateVipProfileStats(); // 108 होते ही प्रोफाइल पेज अपडेट कर दो
            
            currentJaapCount = 0;
            setTimeout(() => { if (currentCountEl) currentCountEl.innerText = currentJaapCount; }, 1500); 
        }
    });
    
    document.getElementById("resetJaapBtn")?.addEventListener("click", () => { 
        currentJaapCount = 0; 
        if (currentCountEl) currentCountEl.innerText = currentJaapCount; 
        if(jaapSuccessMsg) jaapSuccessMsg.classList.add("hidden"); 
    });

    // ==========================================================
    // 📖 06. AARTI, VRAT & BHAJAN ENGINE LOGIC (WITH TTS)
    // ==========================================================
    window.stopSpeech = function(btn, defaultText) {
        if (window.speechSynthesis && window.speechSynthesis.speaking) {
            window.speechSynthesis.cancel();
            if(btn) btn.innerHTML = defaultText || (window.currentLang === "en" ? "🎙️ Listen" : "🎙️ सुनें");
        }
    };

    function setupTTS(btnElement, titleElement, contentElement, defaultTextHi = "🎙️ सुनें", defaultTextEn = "🎙️ Listen", speed = 0.80) {
        if (!btnElement) return;
        btnElement.addEventListener("click", () => {
            const currentDefault = window.currentLang === "en" ? defaultTextEn : defaultTextHi;
            if (!('speechSynthesis' in window)) return;
            if (window.speechSynthesis.speaking) { stopSpeech(btnElement, currentDefault); return; }
            const textToSpeak = (titleElement.innerText || "") + "। " + (contentElement.innerText || "");
            if (!textToSpeak.trim()) return;

            const utterance = new SpeechSynthesisUtterance(textToSpeak);
            utterance.lang = 'hi-IN'; utterance.rate = speed; utterance.pitch = 0.85; 
            const hindiVoice = window.speechSynthesis.getVoices().find(v => v.lang === 'hi-IN' || v.lang.includes('hi'));
            if (hindiVoice) utterance.voice = hindiVoice;

            btnElement.innerHTML = window.currentLang === "en" ? "⏹️ Stop" : "⏹️ रोकें";
            window.speechSynthesis.speak(utterance);
            utterance.onend = () => btnElement.innerHTML = currentDefault;
            utterance.onerror = () => btnElement.innerHTML = currentDefault;
        });
    }

    function createListEngine(config) {
        const modal = document.getElementById(config.modalId);
        const listPage = document.getElementById(config.listPageId);
        const readerPage = document.getElementById(config.readerPageId);
        const titleEl = document.getElementById(config.titleId);
        const contentEl = document.getElementById(config.contentId);
        const voiceBtn = document.getElementById(config.voiceBtnId);
        let fontSize = 15;

        document.getElementById(config.openBtnId)?.addEventListener("click", (e) => {
            e.preventDefault(); if(modal) modal.style.display = "flex";
            if (typeof toggleSidebar === "function") toggleSidebar();
            if (typeof closeDropdownMenu === "function") closeDropdownMenu();
            renderList();
        });

        document.getElementById(config.closeBtnId)?.addEventListener("click", () => {
            if(modal) modal.style.display = "none"; stopSpeech(voiceBtn, config.defaultVoiceText);
        });

        document.getElementById(config.backBtnId)?.addEventListener("click", () => {
            stopSpeech(voiceBtn, config.defaultVoiceText);
            if(readerPage) readerPage.style.display = "none"; if(listPage) listPage.style.display = "block";
        });

        document.getElementById(config.fontPlusId)?.addEventListener("click", () => {
            if(fontSize < 25) { fontSize += 2; if(contentEl) contentEl.style.fontSize = fontSize + "px"; }
        });
        document.getElementById(config.fontMinusId)?.addEventListener("click", () => {
            if(fontSize > 12) { fontSize -= 2; if(contentEl) contentEl.style.fontSize = fontSize + "px"; }
        });

        function renderList() {
            const container = document.getElementById(config.listContainerId);
            if (typeof config.data !== 'undefined' && container) {
                container.innerHTML = "";
                config.data.forEach((item) => {
                    const card = document.createElement("div"); card.className = "aarti-card";
                    card.innerHTML = `<div class="aarti-card-icon">${config.icon}</div><div class="aarti-card-content"><h3 class="aarti-card-title">${item.title}</h3><span class="aarti-card-subtitle">${item.god}</span></div><div class="aarti-card-arrow">➔</div>`;
                    card.addEventListener("click", () => {
                        if(listPage) listPage.style.display = "none"; if(readerPage) readerPage.style.display = "block"; readerPage.scrollTop = 0;
                        if(titleEl) titleEl.innerText = item.title; if(contentEl) contentEl.innerHTML = item.content.replace(/\n/g, '<br><br>');
                    });
                    container.appendChild(card);
                });
            }
        }
        setupTTS(voiceBtn, titleEl, contentEl, config.hiVoice, config.enVoice, config.speed || 0.80);
    }

    createListEngine({ modalId: "aartiModal", listPageId: "aartiListPage", readerPageId: "aartiReaderPage", listContainerId: "aartiList", titleId: "readerTitle", contentId: "readerContent", voiceBtnId: "playVoiceBtn", openBtnId: "openAartiBtn", closeBtnId: "closeAartiBtn", backBtnId: "backBtn", fontPlusId: "fontPlus", fontMinusId: "fontMinus", data: typeof aartiData !== 'undefined' ? aartiData : [], icon: "🪔", hiVoice: "🎙️ सुनें", enVoice: "🎙️ Listen" });
    createListEngine({ modalId: "vratModal", listPageId: "vratListPage", readerPageId: "vratReaderPage", listContainerId: "vratList", titleId: "vratReaderTitle", contentId: "vratReaderContent", voiceBtnId: "playVratVoiceBtn", openBtnId: "openVratBtn", closeBtnId: "closeVratBtn", backBtnId: "backVratBtn", fontPlusId: "vratFontPlus", fontMinusId: "vratFontMinus", data: typeof vratData !== 'undefined' ? vratData : [], icon: "📜", hiVoice: "🎙️ सुनें (दादी माँ की आवाज़)", enVoice: "🎙️ Listen (Grandma)" });
    createListEngine({ modalId: "bhajanModal", listPageId: "bhajanListPage", readerPageId: "bhajanReaderPage", listContainerId: "bhajanList", titleId: "bhajanReaderTitle", contentId: "bhajanReaderContent", voiceBtnId: "playBhajanVoiceBtn", openBtnId: "openBhajanBtn", closeBtnId: "closeBhajanBtn", backBtnId: "backBhajanBtn", fontPlusId: "bhajanFontPlus", fontMinusId: "bhajanFontMinus", data: typeof bhajanData !== 'undefined' ? bhajanData : [], icon: "🎵", hiVoice: "🎙️ सुनें", enVoice: "🎙️ Listen", speed: 0.85 });
    // ==========================================================
    // 🔮 07. DAILY RASHIFAL LOGIC
    // ==========================================================
    const rashifalModal = document.getElementById("rashifalModal");
    const rashifalGrid = document.getElementById("rashifalGrid");
    const rashifalListPage = document.getElementById("rashifalListPage");
    const rashifalReaderPage = document.getElementById("rashifalReaderPage");
    const playRashifalVoiceBtn = document.getElementById("playRashifalVoiceBtn");
    let currentRashifalText = ""; 

    function setTodayDate() { return new Date().toLocaleDateString(window.currentLang === "en" ? 'en-IN' : 'hi-IN', { day: 'numeric', month: 'long', year: 'numeric' }); }

    document.getElementById("openRashifalBtn")?.addEventListener("click", (e) => { e.preventDefault(); if(rashifalModal) rashifalModal.style.display = "flex"; toggleSidebar(); loadRashifalGrid(); });
    document.getElementById("closeRashifalBtn")?.addEventListener("click", () => { if(rashifalModal) rashifalModal.style.display = "none"; stopSpeech(playRashifalVoiceBtn, window.currentLang==="en"?"🎙️ Listen":"🎙️ सुनें"); });
    document.getElementById("backRashifalBtn")?.addEventListener("click", () => { stopSpeech(playRashifalVoiceBtn, window.currentLang==="en"?"🎙️ Listen":"🎙️ सुनें"); if(rashifalReaderPage) rashifalReaderPage.style.display = "none"; if(rashifalListPage) rashifalListPage.style.display = "block"; });

    function loadRashifalGrid() {
        if (typeof rashifalData !== 'undefined' && rashifalGrid) {
            rashifalGrid.innerHTML = "";
            rashifalData.forEach((zodiac) => {
                const card = document.createElement("div"); card.className = "zodiac-card";
                card.innerHTML = `<div class="z-icon">${zodiac.icon}</div><h4 class="z-name">${window.currentLang === "en" ? zodiac.engName : zodiac.name}</h4><span class="z-eng">${window.currentLang === "en" ? zodiac.name : zodiac.engName}</span>`;
                card.addEventListener("click", () => openRashifalReader(zodiac));
                rashifalGrid.appendChild(card);
            });
        }
    }

    function openRashifalReader(zodiac) {
        if(rashifalListPage) rashifalListPage.style.display = "none"; if(rashifalReaderPage) rashifalReaderPage.style.display = "block"; rashifalReaderPage.scrollTop = 0;
        const rZodiacIcon = document.getElementById("rZodiacIcon"); if(rZodiacIcon) rZodiacIcon.innerText = zodiac.icon;
        const rZodiacName = document.getElementById("rZodiacName"); if(rZodiacName) rZodiacName.innerText = (window.currentLang === "en" ? zodiac.engName : zodiac.name) + (window.currentLang === "en" ? " Horoscope" : " राशिफल");
        const rTodayDate = document.getElementById("rTodayDate"); if(rTodayDate) rTodayDate.innerText = (window.currentLang === "en" ? "Today: " : "आज का दिन: ") + setTodayDate();
        
        const cTitle = window.currentLang === "en" ? "💼 Career & Wealth" : "💼 करियर और धन";
        const lTitle = window.currentLang === "en" ? "❤️ Love & Family" : "❤️ प्रेम और परिवार";
        const hTitle = window.currentLang === "en" ? "🩺 Health" : "🩺 स्वास्थ्य";
        const rContent = document.getElementById("rashifalReaderContent");
        if(rContent) rContent.innerHTML = `<div class="r-cat-box"><h4 class="r-cat-title">${cTitle}</h4><p class="r-cat-text">${zodiac.career}</p></div><div class="r-cat-box"><h4 class="r-cat-title">${lTitle}</h4><p class="r-cat-text">${zodiac.love}</p></div><div class="r-cat-box"><h4 class="r-cat-title">${hTitle}</h4><p class="r-cat-text">${zodiac.health}</p></div>`;
        const rColor = document.getElementById("rLuckyColor"); if(rColor) rColor.innerText = zodiac.color; 
        const rNumber = document.getElementById("rLuckyNumber"); if(rNumber) rNumber.innerText = zodiac.number;
        currentRashifalText = `*${zodiac.icon} ${zodiac.name} (${setTodayDate()})*\n${cTitle}: ${zodiac.career}\n${lTitle}: ${zodiac.love}\n${hTitle}: ${zodiac.health}\n🙏 Bhakti Sewa App`;
    }

    document.getElementById("shareRashifalBtn")?.addEventListener("click", () => window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(currentRashifalText)}`, '_blank'));

    if (playRashifalVoiceBtn) {
        playRashifalVoiceBtn.addEventListener("click", () => {
            const defText = window.currentLang === "en" ? "🎙️ Listen" : "🎙️ सुनें";
            if (!('speechSynthesis' in window)) return;
            if (window.speechSynthesis.speaking) { stopSpeech(playRashifalVoiceBtn, defText); return; }
            const utterance = new SpeechSynthesisUtterance(currentRashifalText.replace(/[*♈♉♊♋♌♍♎♏♐♑♒\%$#@&!*!*🙏]/g, ''));
            utterance.lang = 'hi-IN'; utterance.rate = 0.85; playRashifalVoiceBtn.innerHTML = "⏹️ Stop";
            window.speechSynthesis.speak(utterance);
            utterance.onend = () => playRashifalVoiceBtn.innerHTML = defText;
        });
    }


    // ==========================================================
    // 🎯 08. DHARMA QUIZ LOGIC
    // ==========================================================
    let score = 0; let currentQIndex = 0; let currentQuestions = [];
    document.getElementById("openQuizBtn")?.addEventListener("click", (e) => { e.preventDefault(); const qm = document.getElementById("quizModal"); if(qm) qm.style.display = "flex"; toggleSidebar(); const qsp = document.getElementById("quizStartPage"); if(qsp) qsp.style.display = "block"; const qpp = document.getElementById("quizPlayPage"); if(qpp) qpp.style.display = "none"; const qrp = document.getElementById("quizResultPage"); if(qrp) qrp.style.display = "none"; });
    document.getElementById("closeQuizBtn")?.addEventListener("click", () => { const qm = document.getElementById("quizModal"); if(qm) qm.style.display = "none"; });
    document.getElementById("startQuizBtn")?.addEventListener("click", () => {
        if(typeof quizData !== 'undefined') {
            currentQuestions = quizData.sort(() => 0.5 - Math.random()).slice(0, 5); score = 0; currentQIndex = 0;
            const qsp = document.getElementById("quizStartPage"); if(qsp) qsp.style.display = "none"; const qpp = document.getElementById("quizPlayPage"); if(qpp) qpp.style.display = "block"; loadQuestion();
        } else alert(window.currentLang === "en" ? "Quiz data error." : "क्विज़ डेटा लोड नहीं हुआ!");
    });

    function loadQuestion() {
        const expBox = document.getElementById("explanationBox"); if(expBox) expBox.style.display = "none"; 
        const nxtBtn = document.getElementById("nextQuestionBtn"); if(nxtBtn) nxtBtn.style.display = "none";
        const optBox = document.getElementById("optionsBox"); if(optBox) optBox.innerHTML = ""; 
        let q = currentQuestions[currentQIndex];
        const qCount = document.getElementById("qCount"); if(qCount) qCount.innerText = `${window.currentLang === "en" ? "Question" : "प्रश्न"}: ${currentQIndex + 1}/5`; 
        const qScore = document.getElementById("qScore"); if(qScore) qScore.innerText = `${window.currentLang === "en" ? "Score" : "स्कोर"}: ${score}`;
        const qText = document.getElementById("questionText"); if(qText) qText.innerText = q.question;
        q.options.forEach((opt, idx) => {
            let btn = document.createElement("button"); btn.className = "opt-btn"; btn.innerText = opt;
            btn.addEventListener("click", () => {
                document.querySelectorAll(".opt-btn").forEach(b => b.classList.add("disabled"));
                if (idx === q.answer) { btn.classList.add("correct"); score++; if(qScore) qScore.innerText = `${window.currentLang === "en" ? "Score" : "स्कोर"}: ${score}`; } 
                else { btn.classList.add("wrong"); document.querySelectorAll(".opt-btn")[q.answer]?.classList.add("correct"); }
                if(expBox) { expBox.innerText = "✨ " + q.explanation; expBox.style.display = "block"; }
                if(nxtBtn) nxtBtn.style.display = "block";
            });
            if(optBox) optBox.appendChild(btn);
        });
    }
    document.getElementById("nextQuestionBtn")?.addEventListener("click", () => { currentQIndex++; currentQIndex < 5 ? loadQuestion() : showResult(); });
    function showResult() {
        const qpp = document.getElementById("quizPlayPage"); if(qpp) qpp.style.display = "none"; 
        const qrp = document.getElementById("quizResultPage"); if(qrp) qrp.style.display = "block";
        const resTxt = document.getElementById("resultText"); if(resTxt) resTxt.innerText = `${window.currentLang === "en" ? "Your Score" : "आपका स्कोर"}: ${score}/5`;
    }
    document.getElementById("restartQuizBtn")?.addEventListener("click", () => document.getElementById("startQuizBtn")?.click());


    // ==========================================================
    // 🙏 09. MASTER DARSHAN MODAL & GOD SCROLL
    // ==========================================================
    const darshanModal = document.getElementById("darshanModal");
    window.currentSelectedGod = ""; 

    document.querySelectorAll(".god-item").forEach(item => {
        item.addEventListener("click", () => {
            document.querySelectorAll(".god-item").forEach(g => g.classList.remove("active"));
            item.classList.add("active"); 
            window.currentSelectedGod = item.getAttribute("data-god");
            const dTitle = document.getElementById("darshanTitle");
            if(dTitle) dTitle.innerText = `🙏 ${window.currentLang==="en"?"Shri":"श्री"} ${window.currentSelectedGod} ${window.currentLang==="en"?"Darshan":"दर्शन"}`;
            if(darshanModal) darshanModal.style.display = "flex";
        });
    });

    document.getElementById("closeDarshanBtn")?.addEventListener("click", () => { if(darshanModal) darshanModal.style.display = "none"; });

    function cleanText(txt) {
        return txt ? txt.toLowerCase().replace(/ji|maa|mata|dev|भगवान|माता|जी/g, "").trim() : "";
    }

    // Smart Match: Aarti
    document.getElementById("btnDarshanAarti")?.addEventListener("click", () => {
        if (typeof aartiData !== 'undefined') {
            if(darshanModal) darshanModal.style.display = "none";
            const selectedGodClean = cleanText(window.currentSelectedGod);
            
            const matchedItem = aartiData.find(i => {
                const itemGod = cleanText(i.god); const itemTitle = cleanText(i.title);
                return itemGod.includes(selectedGodClean) || selectedGodClean.includes(itemGod) || itemTitle.includes(selectedGodClean);
            });

            if (matchedItem) {
                const readerPage = document.getElementById("aartiReaderPage");
                const listPage = document.getElementById("aartiListPage");
                if(listPage) listPage.style.display = "none";
                if(readerPage) { readerPage.style.display = "block"; readerPage.scrollTop = 0; }
                const rTitle = document.getElementById("readerTitle"); if(rTitle) rTitle.innerText = matchedItem.title;
                const rContent = document.getElementById("readerContent"); if(rContent) rContent.innerHTML = matchedItem.content.replace(/\n/g, '<br><br>');
                
                const aartiModal = document.getElementById("aartiModal");
                if(aartiModal) aartiModal.style.display = "flex";
            } else {
                alert(window.currentLang === "en" ? `Sorry, ${window.currentSelectedGod} Aarti is currently not in data file!` : `माफ़ कीजिए, ${window.currentSelectedGod} की आरती अभी डेटा फाइल में नहीं मिली!`);
            }
        } else alert("aarti-data.js loaded failed!");
    });

    // Smart Match: Katha
    document.getElementById("btnDarshanKatha")?.addEventListener("click", () => {
        if (typeof vratData !== 'undefined') {
            if(darshanModal) darshanModal.style.display = "none";
            const selectedGodClean = cleanText(window.currentSelectedGod);
            
            const matchedItem = vratData.find(i => {
                const itemGod = cleanText(i.god); const itemTitle = cleanText(i.title);
                return itemGod.includes(selectedGodClean) || selectedGodClean.includes(itemGod) || itemTitle.includes(selectedGodClean);
            });

            if (matchedItem) {
                const readerPage = document.getElementById("vratReaderPage");
                const listPage = document.getElementById("vratListPage");
                if(listPage) listPage.style.display = "none";
                if(readerPage) { readerPage.style.display = "block"; readerPage.scrollTop = 0; }
                const vrTitle = document.getElementById("vratReaderTitle"); if(vrTitle) vrTitle.innerText = matchedItem.title;
                const vrContent = document.getElementById("vratReaderContent"); if(vrContent) vrContent.innerHTML = matchedItem.content.replace(/\n/g, '<br><br>');
                
                const vratModal = document.getElementById("vratModal");
                if(vratModal) vratModal.style.display = "flex";
            } else {
                alert(window.currentLang === "en" ? `Sorry, ${window.currentSelectedGod} Katha is currently not in data file!` : `माफ़ कीजिए, ${window.currentSelectedGod} की कथा अभी डेटा फाइल में नहीं मिली!`);
            }
        } else alert("vrat-data.js loaded failed!");
    });
    // ==========================================================
    // 🔔 09B. GITHUB LIVE RINGTONE ENGINE
    // ==========================================================
    document.getElementById("btnDarshanRingtone")?.addEventListener("click", (e) => {
        e.preventDefault();
        if(darshanModal) darshanModal.style.display = "none";

        const selectedGod = window.currentSelectedGod ? window.currentSelectedGod.trim() : "";
        const ringtoneModal = document.getElementById("ringtoneModal");
        const container = document.getElementById("ringtoneListContainer");
        const modalTitle = document.getElementById("ringtoneModalTitle");

        if (modalTitle) modalTitle.innerText = `🔔 ${selectedGod} Ringtones`;
        if (ringtoneModal) ringtoneModal.style.display = "flex";
        if (container) container.innerHTML = `<div class="pro-loader-container" style="text-align:center; padding: 20px;"><p>✨ Fetching Ringtones from GitHub...</p></div>`;

        const githubApiUrl = `https://api.github.com/repos/kapilkhandelwall1995-create/bhakti-sewa-assets/contents/ringtone?v=` + new Date().getTime();

        fetch(githubApiUrl)
            .then(res => {
                if (!res.ok) throw new Error("Ringtone folder error");
                return res.json();
            })
            .then(data => {
                if (!container) return;
                container.innerHTML = "";
                let audioFiles = data.filter(f => f.type === "file" && (f.name.match(/\.(mp3|wav|m4a|ogg)$/i) || !f.name.includes(".")));

                if (audioFiles.length > 0) {
                    audioFiles.forEach(file => {
                        const cleanTitle = file.name.replace(/\.(mp3|wav|m4a|ogg)$/i, '').replaceAll('_', ' ').replaceAll('-', ' ');
                        const downloadUrl = file.download_url;

                        const card = document.createElement("div");
                        card.className = "ringtone-item";
                        card.style.cssText = "background: #f8fafc; border: 1px solid #e2e8f0; padding: 12px; margin-bottom: 12px; border-radius: 10px; display: flex; flex-direction: column; gap: 8px;";

                        card.innerHTML = `
                            <div style="display: flex; justify-content: space-between; align-items: center;">
                                <strong class="ringtone-title" style="font-size: 14px; color: #334155;">🔔 ${cleanTitle}</strong>
                                <button class="download-rt-btn" data-url="${downloadUrl}" data-name="${file.name}.mp3" style="background: #166534; color: #fff; border: none; padding: 6px 12px; border-radius: 6px; font-size: 12px; cursor: pointer;">⬇️ Download</button>
                            </div>
                            <audio controls style="width: 100%; height: 36px;" class="single-audio-player">
                                <source src="${downloadUrl}" type="audio/mpeg">
                            </audio>
                        `;
                        container.appendChild(card);
                    });

                    container.querySelectorAll('audio').forEach(player => {
                        player.addEventListener('play', () => {
                            container.querySelectorAll('audio').forEach(otherPlayer => {
                                if (otherPlayer !== player) otherPlayer.pause();
                            });
                        });
                    });

                    container.querySelectorAll('.download-rt-btn').forEach(btn => {
                        btn.addEventListener('click', function() {
                            const dUrl = this.getAttribute('data-url');
                            const dName = this.getAttribute('data-name');
                            this.innerText = "⏳ Downloading...";

                            fetch(dUrl)
                                .then(r => r.blob())
                                .then(blob => {
                                    const url = URL.createObjectURL(blob);
                                    const a = document.createElement("a");
                                    a.href = url; a.download = dName; a.click();
                                    URL.revokeObjectURL(url);
                                    this.innerText = "✅ Saved";
                                    setTimeout(() => this.innerText = "⬇️ Download", 3000);
                                })
                                .catch(() => {
                                    alert(window.currentLang === "en" ? "Download failed!" : "डाउनलोड विफल रहा!");
                                    this.innerText = "⬇️ Download";
                                });
                        });
                    });
                } else {
                    container.innerHTML = `<p style="text-align:center; color:#64748b; padding: 20px;">'ringtone' folder is empty!</p>`;
                }
            })
            .catch(err => {
                console.error("Ringtone Fetch Error:", err);
                if (container) container.innerHTML = `<p style="text-align:center; color:#ef4444; padding: 20px;">Ringtones load failed. Please check internet connection.</p>`;
            });
    });

    document.getElementById("closeRingtoneModal")?.addEventListener("click", () => { 
        const rm = document.getElementById("ringtoneModal"); if(rm) rm.style.display = "none"; 
        document.querySelectorAll('audio').forEach(a => a.pause()); 
    });
    
document.getElementById("btnDarshanBhajan")?.addEventListener("click", () => window.open("https://www.youtube.com/@BhaktiSewa_kapil", "_blank"));
document.getElementById("btnDarshanStatus")?.addEventListener("click", () => window.open("https://www.instagram.com/bhaktisewa_kapil?igsh=MXVwa205aDFrZGY3cQ==", "_blank"));


    // ==========================================================
    // 🖼️ 10. WALLPAPER GALLERY & FULL SCREEN VIEWER (SWIPE)
    // ==========================================================
    window.currentWallpaperList = []; window.currentIndex = 0;
    const godFolderMap = { "गणेश जी": "ganesh", "शिव जी": "shiv", "श्री राम": "ram", "कृष्ण जी": "krishna", "हनुमान जी": "hanuman", "दुर्गा माँ": "durga", "विष्णु जी": "vishnu", "लक्ष्मी जी": "laxmi", "सरस्वती माता": "saraswati", "साईं बाबा": "sai", "शनि देव": "shani", "काली माता": "kali", "तिरुपति बालाजी": "balaji", "खाटू श्याम": "khatu", "सूर्य देव": "surya" };

    document.getElementById("btnDarshanWallpaper")?.addEventListener("click", (e) => {
        e.preventDefault(); if(darshanModal) darshanModal.style.display = "none";
        const folder = godFolderMap[window.currentSelectedGod ? window.currentSelectedGod.trim() : ""];
        const gallery = document.getElementById("wallpaperGalleryContainer");
        const content = document.getElementById("galleryContent");
        if(gallery) { gallery.style.display = "block"; gallery.style.zIndex = "9999999"; }
        
        if (folder && content) {
            content.innerHTML = `<div class="pro-loader-container"><div class="pro-spinner"></div><p class="pro-loader-text">✨ Fetching Wallpapers...</p></div>`;
            fetch(`https://api.github.com/repos/kapilkhandelwall1995-create/bhakti-sewa-assets/contents/${folder}`)
            .then(res => res.json()).then(data => {
                content.innerHTML = ""; window.currentWallpaperList = [];
                data.forEach(f => {
                    if (f.name.match(/\.(jpg|jpeg|png)$/i)) {
                        window.currentWallpaperList.push({ url: f.download_url, name: f.name });
                        let idx = window.currentWallpaperList.length - 1;
                        let card = document.createElement("div"); card.className = "wallpaper-card skeleton";
                        let img = document.createElement("img"); img.src = `https://wsrv.nl/?url=${encodeURIComponent(f.download_url)}&w=300&q=80&output=webp`; img.loading = "lazy";
                        img.onload = () => { card.classList.remove("skeleton"); img.style.opacity = "1"; };
                        img.onclick = () => openFullScreenByData(idx);
                        card.appendChild(img); card.insertAdjacentHTML('beforeend', '<div class="watermark-text">© Bhakti Sewa</div>');
                        content.appendChild(card);
                    }
                });
            }).catch(() => content.innerHTML = "<h3 style='color:red;'>Connection Error!</h3>");
        }
    });

    document.getElementById("closeGalleryBtn")?.addEventListener("click", () => { 
        const wgc = document.getElementById("wallpaperGalleryContainer"); if(wgc) wgc.style.display = "none"; 
        const gc = document.getElementById("galleryContent"); if(gc) gc.innerHTML = ""; 
    });

    const viewer = document.getElementById("fullScreenViewer");
    const viewerImg = document.getElementById("fullScreenImage");
    let currentDownloadUrl = "", currentFileName = "";

    window.openFullScreenByData = function(index) {
        window.currentIndex = index; const item = window.currentWallpaperList[index];
        if(!item) return;
        if(viewerImg) viewerImg.src = item.url; currentDownloadUrl = item.url; currentFileName = item.name;
        if(viewer) { viewer.style.display = "flex"; viewer.style.zIndex = "999999999"; }
        const likeBtn = document.getElementById("viewerLikeBtn"); if(likeBtn) likeBtn.innerHTML = "🤍 Like";
    };

    document.getElementById("closeViewerBtn")?.addEventListener("click", () => { if(viewer) viewer.style.display = "none"; });
    document.getElementById("viewerLikeBtn")?.addEventListener("click", function() { this.innerHTML = this.innerHTML === "🤍 Like" ? "❤️ Liked" : "🤍 Like"; });
    document.getElementById("viewerDownloadBtn")?.addEventListener("click", function() {
        this.innerHTML = "⏳ Wait...";
        fetch(currentDownloadUrl).then(r => r.blob()).then(blob => {
            const url = URL.createObjectURL(blob); const a = document.createElement("a");
            a.href = url; a.download = currentFileName; a.click(); URL.revokeObjectURL(url);
            this.innerHTML = "✅ Downloaded"; setTimeout(() => this.innerHTML = "⬇️ Download", 3000);
        }).catch(() => alert("Download failed!"));
    });

    let tStartX = 0;
    if(viewer) {
        viewer.addEventListener('touchstart', (e) => tStartX = e.changedTouches[0].screenX);
        viewer.addEventListener('touchend', (e) => {
            let tEndX = e.changedTouches[0].screenX;
            if (tEndX < tStartX - 50 && window.currentIndex < window.currentWallpaperList.length - 1) openFullScreenByData(window.currentIndex + 1);
            if (tEndX > tStartX + 50 && window.currentIndex > 0) openFullScreenByData(window.currentIndex - 1);
        });
    }

    // ==========================================================
    // 🗓️ 12. DYNAMIC DATE LIVE PANCHANG & MANTRA (GITHUB CONNECTED)
    // ==========================================================
    const PANCHANG_JSON_URL = "https://raw.githubusercontent.com/kapilkhandelwall1995-create/bhakti-sewa-assets/main/panchang.json";
    const MANTRA_JSON_URL = "https://raw.githubusercontent.com/kapilkhandelwall1995-create/bhakti-sewa-assets/main/mantra.json";

    const panchangBtn = document.getElementById("panchangBtn");
    const pModal = document.getElementById("panchangModal");
    const closePBtn = document.getElementById("closePanchangBtn");

    if (panchangBtn) { 
        panchangBtn.addEventListener("click", () => { 
            if (pModal) { pModal.style.display = "flex"; fetchPanchangData(); } 
        }); 
    }

    if (closePBtn) { 
        closePBtn.addEventListener("click", () => { if (pModal) pModal.style.display = "none"; }); 
    }

    window.addEventListener("click", (event) => { if (event.target === pModal) pModal.style.display = "none"; });

    function updateElementText(id, text) { const el = document.getElementById(id); if (el) el.innerText = text; }

    function getTodayDateKey() {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const day = String(today.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    }

    window.fetchPanchangData = function() {
        const livePanchangUrl = PANCHANG_JSON_URL + "?v=" + new Date().getTime();

        fetch(livePanchangUrl)
            .then(response => { if (!response.ok) throw new Error("GitHub Live Response Error"); return response.json(); })
            .then(fullData => {
                const todayKey = getTodayDateKey();
                let todayPanchang = fullData[todayKey];
                if (!todayPanchang) {
                    const keys = Object.keys(fullData);
                    if (keys.length > 0) todayPanchang = fullData[keys[0]];
                }
                if (todayPanchang) renderPanchangUI(todayPanchang);
            })
            .catch(err => {
                console.warn("Live GitHub fetch failed. Switching to local fallback:", err);
                if (typeof panchangData !== 'undefined') {
                    const todayKey = getTodayDateKey();
                    let localToday = panchangData[todayKey] || panchangData[Object.keys(panchangData)[0]];
                    if (localToday) renderPanchangUI(localToday);
                }
            });
    };

    function renderPanchangUI(data) {
        const isEn = window.currentLang === "en";
        updateElementText("pDate", data.date ? `🗓️ ${data.date}` : (isEn ? "🗓️ 27 July 2026" : "🗓️ 27 जुलाई 2026"));
        updateElementText("pDay", data.day || (isEn ? "Monday" : "सोमवार (Monday)"));
        updateElementText("pVrat", data.festival ? `${data.festival}` : (isEn ? "⭐ Pradosh Vrat" : "⭐ प्रदोष व्रत"));
        updateElementText("pSunrise", data.sunrise || "05:46 AM");
        updateElementText("pSunset", data.sunset || "07:14 PM");
        updateElementText("pTithi", data.tithi || (isEn ? "Dwadashi" : "द्वादशी (Dwadashi)"));
        updateElementText("pNakshatra", data.nakshatra || (isEn ? "Mrigashira" : "मृगशिरा (Mrigashira)"));
        updateElementText("pYog", data.yog || (isEn ? "Vyaghata" : "व्याघात (Vyaghata)"));
        updateElementText("pShubh", data.shubhTime ? `${data.shubhTime} (Abhijit)` : "11:59 AM - 12:53 PM (Abhijit)");
        updateElementText("pRahu", data.rahukaal || "07:30 AM - 09:00 AM");
    }

    window.fetchMantraAndSuvicharData = function() {
        const liveMantraUrl = MANTRA_JSON_URL + "?v=" + new Date().getTime();

        fetch(liveMantraUrl)
            .then(res => { if (!res.ok) throw new Error("Mantra fetch failed"); return res.json(); })
            .then(data => {
                if (data.mantras && data.mantras.length > 0) {
                    const randomMantra = data.mantras[Math.floor(Math.random() * data.mantras.length)];
                    updateElementText("dailyMantraText", randomMantra.text);
                    updateElementText("dailyMantraMeaning", randomMantra.meaning);
                    updateElementText("dailyMantraSource", randomMantra.source || (window.currentLang === "en" ? "- Bhagavad Gita" : "- श्रीमद्भगवद्गीता"));
                }
                if (data.suvichars && data.suvichars.length > 0) {
                    const randomSuvichar = data.suvichars[Math.floor(Math.random() * data.suvichars.length)];
                    updateElementText("dailySuvicharText", randomSuvichar.text);
                    updateElementText("dailySuvicharMeaning", randomSuvichar.meaning || "");
                    updateElementText("dailySuvicharSource", randomSuvichar.source || (window.currentLang === "en" ? "- Today's Thought" : "- आज का विचार"));
                }
            })
            .catch(e => console.error("Error loading Mantra/Suvichar:", e));
    };

    fetchMantraAndSuvicharData();


    // ==========================================================
    // 📰 13. RUNNING TICKER LOGIC
    // ==========================================================
    const track = document.querySelector(".running-text-track");
    if (track) track.innerHTML += track.innerHTML;

}); // 🔚 DOMContentLoaded End

// ==========================================================
// 🛕 14. TEMPLE DETAIL POPUP & ALL TEMPLES MODAL
// ==========================================================
document.addEventListener("DOMContentLoaded", () => {
    const popup = document.getElementById("templePopup");
    const closePopupBtn = document.getElementById("closePopupBtn");

    const viewAllBtn = document.getElementById("viewAllTemplesBtn");
    const allTemplesModal = document.getElementById("allTemplesModal");
    const closeAllTemplesBtn = document.getElementById("closeAllTemplesBtn");
    const templesListContainer = document.getElementById("templesListContainer");

    const popupImage = document.getElementById("popupImage");
    const popupLocation = document.getElementById("popupLocation");
    const popupTitle = document.getElementById("popupTitle");
    const popupHistory = document.getElementById("popupHistory");

    // Read More Triggers
    const readMoreButtons = document.querySelectorAll(".read-more-btn");
    readMoreButtons.forEach(button => {
        button.addEventListener("click", () => {
            const templeKey = button.getAttribute("data-temple");
            if (templeKey && typeof templesData !== "undefined" && templesData[templeKey]) {
                openPopupDirect(templesData[templeKey]);
            }
        });
    });

    // View All Temples Trigger
    if (viewAllBtn) {
        viewAllBtn.addEventListener("click", () => {
            if (templesListContainer) {
                templesListContainer.innerHTML = "";
                if (typeof templesData !== "undefined") {
                    Object.keys(templesData).forEach(key => {
                        const temple = templesData[key];
                        const card = document.createElement("div");
                        card.className = "temple-list-card";
                        card.innerHTML = `
                            <img src="${temple.mainImage}" alt="${temple.name}">
                            <div class="temple-list-info">
                                <h4>${temple.name}</h4>
                                <span>📍 ${temple.location}</span>
                            </div>
                        `;
                        card.addEventListener("click", () => {
                            if (allTemplesModal) {
                                allTemplesModal.classList.remove("active");
                                setTimeout(() => {
                                    allTemplesModal.style.display = "none";
                                }, 300);
                            }
                            openPopupDirect(temple);
                        });
                        templesListContainer.appendChild(card);
                    });
                }
            }

            if (allTemplesModal) {
                allTemplesModal.style.display = "flex";
                setTimeout(() => {
                    allTemplesModal.classList.add("active");
                }, 10);
            }
        });
    }

    if (closeAllTemplesBtn) {
        closeAllTemplesBtn.addEventListener("click", () => {
            if (allTemplesModal) {
                allTemplesModal.classList.remove("active");
                setTimeout(() => {
                    allTemplesModal.style.display = "none";
                }, 300);
            }
        });
    }

    if (closePopupBtn) {
        closePopupBtn.addEventListener("click", () => {
            if (popup) {
                popup.classList.remove("active");
                setTimeout(() => {
                    popup.style.display = "none";
                }, 300);
            }
        });
    }

    window.addEventListener("click", (e) => {
        if (e.target === allTemplesModal) {
            allTemplesModal.classList.remove("active");
            setTimeout(() => {
                allTemplesModal.style.display = "none";
            }, 300);
        }
        if (e.target === popup) {
            popup.classList.remove("active");
            setTimeout(() => {
                popup.style.display = "none";
            }, 300);
        }
    });

    function openPopupDirect(temple) {
        if (popup && temple) {
            if (popupImage) popupImage.src = temple.mainImage;
            if (popupLocation) popupLocation.textContent = `📍 ${temple.location}`;
            if (popupTitle) popupTitle.textContent = temple.name;
            if (popupHistory) popupHistory.textContent = temple.history;

            popup.style.display = "flex";
            setTimeout(() => {
                popup.classList.add("active");
            }, 10);
        }
    }
});


// ==========================================================
// 🎵 15. SPA NAVIGATION & ULTRA PRO MUSIC PLAYER
// ==========================================================
document.addEventListener("DOMContentLoaded", () => {
    
    // SPA NAVIGATION LOGIC
    const navItems = document.querySelectorAll('.nav-item');
    const views = document.querySelectorAll('.view-section');

    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            if (item.getAttribute('target') === '_blank') return;
            
            e.preventDefault();
            const targetId = item.getAttribute('data-target');
            if(!targetId) return;

            navItems.forEach(nav => nav.classList.remove('active'));
            item.classList.add('active');

            views.forEach(view => {
                view.style.display = (view.id === targetId) ? 'block' : 'none';
            });
        });
    });

    // ULTRA PRO MUSIC PLAYER LOGIC
    const bhajanListContainer = document.getElementById('bhajan-list-container');
    const nowPlayingTitle = document.getElementById('pro-now-playing');
    const divineDisc = document.querySelector('.divine-disc-box');
    
    const playBtn = document.getElementById('pro-play-btn');
    const playIcon = document.getElementById('pro-play-icon');
    const nextBtn = document.getElementById('pro-next-btn');
    const prevBtn = document.getElementById('pro-prev-btn');
    const likeBtn = document.getElementById('pro-like-btn');
    const heartIcon = document.getElementById('pro-heart-icon');
    const progressBar = document.getElementById('pro-progress-bar');
    const currentTimeEl = document.getElementById('current-time');
    const totalDurationEl = document.getElementById('total-duration');
    
    const listBtn = document.getElementById('pro-list-btn');
    const playlistSheet = document.getElementById('hidden-playlist-sheet');
    const closePlaylistBtn = document.getElementById('close-playlist-btn');

    let currentAudio = new Audio();
    let isPlaying = false;
    let currentPlaylist = [];
    let currentIndex = 0;

    const svgPlay = `<polygon points="5 3 19 12 5 21 5 3"></polygon>`;
    const svgPause = `<rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect>`;

    const githubUser = 'kapilkhandelwall1995-create';
    const githubRepo = 'bhakti-sewa-assets';
    const folderPath = 'audio';
    const apiUrl = `https://api.github.com/repos/${githubUser}/${githubRepo}/contents/${folderPath}`;

    if (listBtn) listBtn.addEventListener('click', () => playlistSheet.classList.add('open'));
    if (closePlaylistBtn) closePlaylistBtn.addEventListener('click', () => playlistSheet.classList.remove('open'));

    if (likeBtn) {
        likeBtn.addEventListener('click', () => {
            const isLiked = heartIcon.getAttribute('fill') === 'currentColor';
            if (isLiked) {
                heartIcon.setAttribute('fill', 'none');
                heartIcon.setAttribute('stroke', 'currentColor');
                heartIcon.style.color = '#cbd5e1';
            } else {
                heartIcon.setAttribute('fill', 'currentColor');
                heartIcon.setAttribute('stroke', 'none');
                heartIcon.style.color = '#ef4444';
            }
        });
    }

    function formatTime(seconds) {
        if (isNaN(seconds)) return "0:00";
        const minutes = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
    }

    async function loadBhajans() {
        if (!bhajanListContainer) return;
        try {
            const response = await fetch(apiUrl);
            const data = await response.json();
            bhajanListContainer.innerHTML = '';

            currentPlaylist = data.filter(file => file.name.endsWith('.mp3'));
            if(currentPlaylist.length === 0) {
                bhajanListContainer.innerHTML = `<p style="text-align:center;">${window.currentLang === "en" ? "No bhajans found." : "कोई भजन नहीं मिला।"}</p>`;
                return;
            }

            currentPlaylist.forEach((file, index) => {
                const cleanName = file.name.replace('.mp3', '').replaceAll('_', ' ');
                const card = document.createElement('div');
                card.className = 'bhajan-card';
                card.setAttribute('data-index', index);
                card.innerHTML = `
                    <div class="bhajan-card-left">
                        <div class="bhajan-card-icon">🪔</div>
                        <div class="bhajan-card-info">
                            <h4>${cleanName}</h4>
                            <p>${window.currentLang === "en" ? "Bhakti Sewa" : "भक्ति सेवा"}</p>
                        </div>
                    </div>
                `;
                card.addEventListener('click', () => {
                    playSong(index);
                    playlistSheet.classList.remove('open');
                });
                bhajanListContainer.appendChild(card);
            });
            
            if(currentPlaylist.length > 0 && nowPlayingTitle) {
                nowPlayingTitle.innerText = currentPlaylist[0].name.replace('.mp3', '').replaceAll('_', ' ');
            }
        } catch (error) {
            bhajanListContainer.innerHTML = `<p style="text-align:center; color:red;">${window.currentLang === "en" ? "Failed to load bhajans." : "भजन लोड नहीं हो सके।"}</p>`;
        }
    }

    function playSong(index) {
        if (index < 0 || index >= currentPlaylist.length) return;
        currentIndex = index;
        const file = currentPlaylist[index];
        const cleanName = file.name.replace('.mp3', '').replaceAll('_', ' ');

        currentAudio.src = file.download_url;
        currentAudio.play();
        isPlaying = true;
        
        if (nowPlayingTitle) nowPlayingTitle.innerText = cleanName;
        if (playIcon) playIcon.innerHTML = svgPause;
        if (divineDisc) divineDisc.classList.add('playing');
    }

    if (playBtn) {
        playBtn.addEventListener('click', () => {
            if (currentPlaylist.length === 0) return;
            if(!currentAudio.src) playSong(0);
            else if (isPlaying) {
                currentAudio.pause();
                playIcon.innerHTML = svgPlay;
                isPlaying = false;
                if (divineDisc) divineDisc.classList.remove('playing');
            } else {
                currentAudio.play();
                playIcon.innerHTML = svgPause;
                isPlaying = true;
                if (divineDisc) divineDisc.classList.add('playing');
            }
        });
    }

    if (nextBtn) nextBtn.addEventListener('click', () => playSong((currentIndex + 1) % currentPlaylist.length));
    if (prevBtn) prevBtn.addEventListener('click', () => playSong((currentIndex - 1 + currentPlaylist.length) % currentPlaylist.length));

    currentAudio.addEventListener('timeupdate', () => {
        if (currentAudio.duration) {
            const progressPercent = (currentAudio.currentTime / currentAudio.duration) * 100;
            progressBar.value = progressPercent;
            currentTimeEl.innerText = formatTime(currentAudio.currentTime);
            totalDurationEl.innerText = formatTime(currentAudio.duration);
        }
    });

    currentAudio.addEventListener('loadedmetadata', () => {
        if (currentAudio.duration) {
            totalDurationEl.innerText = formatTime(currentAudio.duration);
        }
    });

    if(progressBar) {
        progressBar.addEventListener('input', () => {
            if (currentAudio.duration) {
                const seekTime = (progressBar.value / 100) * currentAudio.duration;
                currentAudio.currentTime = seekTime;
            }
        });
    }

    currentAudio.addEventListener('ended', () => playSong((currentIndex + 1) % currentPlaylist.length));

    loadBhajans();
});


// ==========================================================
// 💳 16. OPTIMIZED & SMOOTH DONATION MODAL (NO-LAG FIX)
// ==========================================================

// 1. Open Modal Function (Fast & Smooth GPU Render)
window.openDonationModal = function() {
    try {
        var modal = document.getElementById('donationModal') || document.querySelector('.donation-modal-overlay');
        
        if (modal) {
            // Reparenting lag khatam: Direct Body par rakhein highest layer ke saath
            if (modal.parentElement !== document.body) {
                document.body.appendChild(modal);
            }

            // GPU Hardware Acceleration Styles
            modal.style.display = 'flex';
            modal.style.position = 'fixed';
            modal.style.top = '0';
            modal.style.left = '0';
            modal.style.width = '100%';
            modal.style.height = '100%';
            modal.style.zIndex = '2147483647'; // Max Layer
            modal.style.willChange = 'opacity, transform'; // Fast GPU Rendering

            // Double RAF pattern for butter-smooth animation without layout freeze
            requestAnimationFrame(function() {
                requestAnimationFrame(function() {
                    modal.classList.add('active');
                });
            });

            document.body.style.overflow = 'hidden';
        } else {
            console.warn("Modal ID 'donationModal' missing in HTML!");
        }
    } catch (err) {
        console.error("Error opening modal:", err);
    }
};

// 2. Close Modal Safe Function
window.closeDonationModal = function() {
    try {
        var modal = document.getElementById('donationModal') || document.querySelector('.donation-modal-overlay');
        if (modal) {
            modal.classList.remove('active');
            
            // Animation complete hone ke baad display hide karein
            setTimeout(function() {
                modal.style.display = 'none';
                modal.style.willChange = 'auto';
                document.body.style.overflow = '';
            }, 200);
        }
    } catch (err) {
        console.error("Error closing modal:", err);
    }
};

// 3. Dynamic Amount Chip Selection (Fast Loop)
window.selectDonationAmount = function(element, amount) {
    try {
        var chips = document.querySelectorAll('.d-chip');
        for (var i = 0; i < chips.length; i++) {
            chips[i].classList.remove('selected');
        }
        
        if (element) {
            element.classList.add('selected');
        }
        
        var upiBtn = document.getElementById('upiPayLink');
        if (upiBtn) {
            upiBtn.href = 'upi://pay?pa=bhaktisewa@upi&pn=BhaktiSewa&am=' + amount + '&cu=INR';
        }
    } catch (err) {
        console.error("Error selecting amount:", err);
    }
};

// 4. Outside Click Overlay Listener
document.addEventListener('click', function(e) {
    var modal = document.getElementById('donationModal');
    if (modal && e.target === modal) {
        window.closeDonationModal();
    }
});


/* ==========================================================
   👤 VIP PROFILE FULL JAVASCRIPT (Image, Name, Gotra, Zodiac, Back Btn, VIP Live Stats & Badge Info)
========================================================== */

document.addEventListener("DOMContentLoaded", () => {
    // --- 1. UI Elements ---
    const userNameDisplay = document.getElementById("userNameDisplay");
    const gotraDisplay = document.getElementById("userGotraDisplay");
    const zodiacDisplay = document.getElementById("userZodiacDisplay");
    
    const gotraBadge = document.getElementById("profGotraBadge");
    const menuZodiac = document.getElementById("menuZodiac");
    const backBtn = document.getElementById("profBackBtn");

    // --- 2. Modal Elements ---
    const vipModal = document.getElementById("vipCustomModal");
    const vipModalTitle = document.getElementById("vipModalTitle");
    const vipModalInput = document.getElementById("vipModalInput");
    const btnCancel = document.getElementById("vipModalCancel");
    const btnSave = document.getElementById("vipModalSave");
    let currentEditType = ""; 

    // --- 3. Image Upload Elements ---
    const avatarBox = document.querySelector(".prof-avatar-box");
    const avatarIcon = document.querySelector(".prof-avatar-icon");
    const avatarImg = document.getElementById("profAvatarImg");
    const imageInput = document.getElementById("profileImageInput");

    // --- 4. लोड होते ही फोन की मेमोरी से डेटा दिखाएँ ---
    const savedName = localStorage.getItem("bhakti_user_name");
    const savedGotra = localStorage.getItem("bhakti_user_gotra");
    const savedZodiac = localStorage.getItem("bhakti_user_zodiac");
    const savedImage = localStorage.getItem("bhakti_user_image");

    if (savedName) userNameDisplay.innerHTML = savedName + ' <span class="name-edit-icon">✎</span>';
    if (savedGotra) gotraDisplay.innerText = savedGotra + " ✎";
    if (savedZodiac) {
        zodiacDisplay.innerText = savedZodiac + " ❯";
        zodiacDisplay.style.color = "var(--text-color)";
    }
    
    // अगर यूज़र ने पहले से फोटो लगाई है, तो 🕉️ छुपाओ और फोटो दिखाओ
    if (savedImage) {
        avatarImg.src = savedImage;
        avatarImg.style.display = "block";
        if(avatarIcon) avatarIcon.style.display = "none";
    }

    // --- 5. 🆕 लाइव माला और VIP बैज अपडेट करने का फंक्शन (Global) ---
    window.updateVipProfileStats = function() {
        const profTotalMala = document.getElementById("profTotalMala");
        const profBadge = document.getElementById("profBadge");
        
        let malas = parseInt(localStorage.getItem("bhakti_total_malas")) || 0;
        if (profTotalMala) profTotalMala.innerText = malas; 
        
        let isGauSevak = localStorage.getItem("bhakti_gau_badge") === "true";
        
        // 🏆 बैज का नया VIP लॉजिक (Silver, Gold, Diamond)
        let badgeName = "--";
        let badgeColor = "var(--text-color)";

        if (malas >= 101) {
            badgeName = "💎 डायमंड";
            badgeColor = "#00d2ff"; // चमकीला नीला
        } else if (malas >= 51) {
            badgeName = "🥇 गोल्डन";
            badgeColor = "#FFD700"; // सुनहरा 
        } else if (malas >= 21) {
            badgeName = "🥈 सिल्वर";
            badgeColor = "#a6a6a6"; // चाँदी जैसा
        } else if (malas > 0) {
            badgeName = "🙏 आरंभिक";
            badgeColor = "var(--primary-color)";
        } else {
            badgeName = "शुरू करें";
            badgeColor = "var(--text-muted)";
        }

        // अगर गौ-सेवा भी की है, तो दोनों बैज दिखाएं! 
        if (isGauSevak) {
            badgeName = (badgeName === "--" || badgeName === "शुरू करें") ? "⭐ गौ सेवक" : badgeName + " | ⭐ गौ सेवक";
        }

        if (profBadge) {
            profBadge.innerHTML = badgeName;
            profBadge.style.color = badgeColor;
            profBadge.style.fontSize = "15px"; 
        }
    };
    
    // ऐप खुलते ही एक बार कॉल करें ताकि सही डेटा दिखे
    window.updateVipProfileStats();

    // --- 6. बैक बटन लॉजिक (Back to Home) ---
    if(backBtn) {
        backBtn.addEventListener("click", () => {
            document.getElementById("profile-view").style.display = "none";
            document.getElementById("home-view").style.display = "block";
            
            document.querySelectorAll(".nav-item").forEach(item => item.classList.remove("active"));
            const navHome = document.getElementById("nav-home");
            if(navHome) navHome.classList.add("active");
            
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // --- 7. प्रोफाइल फोटो अपलोड करने का लॉजिक ---
    if(avatarBox) {
        avatarBox.addEventListener("click", () => imageInput.click());
    }

    if(imageInput) {
        imageInput.addEventListener("change", function() {
            const file = this.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    const base64Img = e.target.result;
                    localStorage.setItem("bhakti_user_image", base64Img); // फोन में हमेशा के लिए सेव
                    avatarImg.src = base64Img;
                    avatarImg.style.display = "block";
                    if(avatarIcon) avatarIcon.style.display = "none";
                };
                reader.readAsDataURL(file);
            }
        });
    }

    // --- 8. VIP Modal खोलने का फंक्शन (Custom Prompt) ---
    function openVipModal(type, title, placeholder) {
        currentEditType = type;
        vipModalTitle.innerText = title;
        vipModalInput.placeholder = placeholder;
        vipModalInput.value = localStorage.getItem("bhakti_user_" + type) || ""; 
        vipModal.classList.add("active");
        setTimeout(() => vipModalInput.focus(), 100); 
    }

    if(btnCancel) {
        btnCancel.addEventListener("click", () => {
            vipModal.classList.remove("active");
        });
    }

    if(btnSave) {
        btnSave.addEventListener("click", () => {
            const newValue = vipModalInput.value.trim();
            if (newValue !== "") {
                localStorage.setItem("bhakti_user_" + currentEditType, newValue); 
                
                if (currentEditType === "name") {
                    userNameDisplay.innerHTML = newValue + ' <span class="name-edit-icon">✎</span>';
                } else if (currentEditType === "gotra") {
                    gotraDisplay.innerText = newValue + " ✎";
                } else if (currentEditType === "zodiac") {
                    zodiacDisplay.innerText = newValue + " ❯";
                    zodiacDisplay.style.color = "var(--text-color)";
                }
                vipModal.classList.remove("active");
            }
        });
    }

    // --- 9. क्लिक इवेंट्स (Modal ओपन करने के लिए) ---
    if(userNameDisplay) {
        userNameDisplay.addEventListener("click", () => {
            openVipModal("name", "अपना नाम दर्ज करें", "जैसे: राहुल कुमार...");
        });
    }
    if(gotraBadge) {
        gotraBadge.addEventListener("click", () => {
            openVipModal("gotra", "अपना गोत्र दर्ज करें", "जैसे: भारद्वाज, कश्यप...");
        });
    }
    if(menuZodiac) {
        menuZodiac.addEventListener("click", () => {
            openVipModal("zodiac", "अपनी राशि दर्ज करें", "जैसे: मेष, वृषभ...");
        });
    }

    // --- 10. 🏆 बैज इन्फो पॉप-अप लॉजिक ---
    const badgeGuideCard = document.getElementById("openBadgeInfo");
    const badgeInfoModal = document.getElementById("badgeInfoModal");
    const closeBadgeInfoBtn = document.getElementById("closeBadgeInfoBtn");

    if(badgeGuideCard && badgeInfoModal) {
        // कार्ड पर क्लिक करने से पॉप-अप खुलेगा
        badgeGuideCard.addEventListener("click", () => {
            badgeInfoModal.classList.add("active");
        });
    }

    if(closeBadgeInfoBtn) {
        // "समझ गया" बटन दबाने से पॉप-अप बंद होगा
        closeBadgeInfoBtn.addEventListener("click", () => {
            badgeInfoModal.classList.remove("active");
        });
    }
});


    // ==========================================================
    // ⚙️ 11. PROFESSIONAL SETTINGS & TOOLS LOGIC (Play Store Level)
    // ==========================================================

    // --- 🟢 VIP Toast Notification Function ---
    function showToast(message, icon = "") {
        const toast = document.getElementById("vipToast");
        if(toast) {
            toast.innerHTML = `${icon} ${message}`;
            toast.classList.add("show");
            setTimeout(() => {
                toast.classList.remove("show");
            }, 3000); // 3 सेकंड बाद अपने आप गायब
        }
    }

    // --- a. ❤️ फेवरेट लिस्ट (Favorites) ---
    const menuFavorites = document.getElementById("menuFavorites");
    if(menuFavorites) {
        menuFavorites.addEventListener("click", () => {
            showToast("फेवरेट लिस्ट जल्द ही आ रही है!", "❤️");
        });
    }
    // --- b. 🔠 कथा/आरती अक्षर आकार (REAL FUNCTIONAL TEXT SIZE CHANGER) ---
    const menuTextSize = document.getElementById("menuTextSize");
    const textSizeDisplay = menuTextSize ? menuTextSize.querySelector(".menu-right") : null;
    const sizes = ["छोटा", "मध्यम", "बड़ा"];
    
    // मेमोरी से पुराना साइज़ निकालें (डिफ़ॉल्ट 1 मतलब 'मध्यम')
    let currentSizeIndex = parseInt(localStorage.getItem("bhakti_text_size_index"));
    if (isNaN(currentSizeIndex)) currentSizeIndex = 1; 

    // ऐप खुलते ही फॉन्ट साइज़ लागू करने का फंक्शन
    function applyGlobalTextSize(index) {
        document.body.classList.remove("font-size-0", "font-size-1", "font-size-2");
        document.body.classList.add("font-size-" + index);
        if (textSizeDisplay) {
            textSizeDisplay.innerHTML = sizes[index] + " ❯";
        }
    }

    // ऐप लोड होते ही तुरंत रन करें ताकि पुराना सेव साइज़ दिख जाए
    applyGlobalTextSize(currentSizeIndex);

    if (menuTextSize) {
        menuTextSize.addEventListener("click", () => {
            // साइज़ आगे बढ़ाएं (0 -> 1 -> 2 -> वापस 0)
            currentSizeIndex = (currentSizeIndex + 1) % sizes.length; 
            localStorage.setItem("bhakti_text_size_index", currentSizeIndex);
            
            // तुरंत स्क्रीन पर पूरे ऐप का साइज़ बदलें
            applyGlobalTextSize(currentSizeIndex);
            
            // साथ में प्रोफेशनल टोस्ट फीडबैक दें
            if (typeof showToast === "function") {
                showToast(`अक्षर का आकार '${sizes[currentSizeIndex]}' कर दिया गया है`, "🔠");
            }
        });
    }

 
    // --- c. 🔔 व्रत रिमाइंडर (Toggle Switch) ---
    const vratAlertToggle = document.getElementById("vratAlertToggle");
    if(vratAlertToggle) {
        const isAlertOn = localStorage.getItem("bhakti_vrat_alert") !== "false"; 
        vratAlertToggle.checked = isAlertOn;

        vratAlertToggle.addEventListener("change", (e) => {
            localStorage.setItem("bhakti_vrat_alert", e.target.checked);
            if(e.target.checked) {
                showToast("व्रत रिमाइंडर अलर्ट चालू हो गया", "🔔");
            } else {
                showToast("व्रत रिमाइंडर अलर्ट बंद कर दिया गया", "🔕");
            }
        });
    }

    // --- d. 🔗 ऐप शेयर करें (Native Share API) ---
    const menuShareApp = document.getElementById("menuShareApp");
    if(menuShareApp) {
        menuShareApp.addEventListener("click", () => {
            if (navigator.share) {
                navigator.share({
                    title: 'भक्ति सेवा ऐप',
                    text: '🙏 घर बैठे डिजिटल दर्शन और माला जाप के लिए भक्ति सेवा ऐप डाउनलोड करें:',
                    url: 'https://play.google.com/store/apps/details?id=com.your.bhaktiapp' 
                }).catch((error) => console.log('Error sharing', error));
            } else {
                // अगर फोन शेयर सपोर्ट नहीं करता, तो लिंक कॉपी कर लें
                navigator.clipboard.writeText('https://play.google.com/store/apps/details?id=com.your.bhaktiapp');
                showToast("ऐप का लिंक कॉपी हो गया!", "🔗");
            }
        });
    }

    // --- e. ⭐ हमें 5-स्टार दें (Professional Rating Modal) ---
    const menuRateApp = document.getElementById("menuRateApp");
    const ratingModal = document.getElementById("ratingModal");
    const closeRatingBtn = document.getElementById("closeRatingBtn");
    const submitRatingBtn = document.getElementById("submitRatingBtn");
    const stars = document.querySelectorAll(".rating-stars .star");
    let selectedRating = 0;

    if(menuRateApp && ratingModal) {
        menuRateApp.addEventListener("click", () => {
            ratingModal.classList.add("active");
        });
    }

    if(closeRatingBtn) {
        closeRatingBtn.addEventListener("click", () => ratingModal.classList.remove("active"));
    }

    // स्टार्स पर क्लिक करने का लॉजिक (Animation)
    stars.forEach(star => {
        star.addEventListener("click", function() {
            selectedRating = this.getAttribute("data-value");
            stars.forEach(s => s.classList.remove("active"));
            
            for(let i = 0; i < selectedRating; i++) {
                stars[i].classList.add("active");
            }
        });
    });

    if(submitRatingBtn) {
        submitRatingBtn.addEventListener("click", () => {
            if(selectedRating === 0) {
                showToast("कृपया कोई रेटिंग चुनें", "⭐");
            } else if (selectedRating >= 4) {
                ratingModal.classList.remove("active");
                showToast("धन्यवाद! Play Store पर भेजा जा रहा है...", "💖");
                // Play store link redirect will come here
            } else {
                ratingModal.classList.remove("active");
                showToast("आपके फीडबैक के लिए धन्यवाद!", "🙏");
            }
        });
    }


    // ==========================================================
    // 🔔 VIP VRAT REMINDER LOGIC (LIVE MODE - Auto Date Check)
    // ==========================================================
    
    // 1. पॉप-अप को बंद करने का लॉजिक (दर्शन करें बटन)
    const vratReminderModal = document.getElementById("vratReminderModal");
    const closeVratReminderBtn = document.getElementById("closeVratReminderBtn");

    if (closeVratReminderBtn && vratReminderModal) {
        closeVratReminderBtn.addEventListener("click", () => {
            vratReminderModal.classList.remove("active");
        });
    }

    // 2. GitHub से लाइव JSON लाने और व्रत चेक करने का मेन फंक्शन
    async function checkUpcomingVrat() {
        // चेक करें कि यूज़र ने सेटिंग में अलर्ट ON रखा है या नहीं
        const isAlertOn = localStorage.getItem("bhakti_vrat_alert") !== "false";
        if (!isAlertOn) return; // अगर सेटिंग बंद है, तो यहीं रुक जाएं

        try {
            // गिटहब से लाइव डेटा लाएं
            const response = await fetch("https://raw.githubusercontent.com/kapilkhandelwall1995-create/bhakti-sewa-assets/refs/heads/main/panchang.json");
            const panchangData = await response.json();

            // ---------------------------------------------------------
            // 🚀 LIVE MODE: असली कल की तारीख ऑटोमैटिक निकालना
            // ---------------------------------------------------------
            const today = new Date();
            const tomorrow = new Date(today);
            tomorrow.setDate(tomorrow.getDate() + 1);

            const year = tomorrow.getFullYear();
            const month = String(tomorrow.getMonth() + 1).padStart(2, '0');
            const day = String(tomorrow.getDate()).padStart(2, '0');
            const tomorrowStr = `${year}-${month}-${day}`; 
            // ---------------------------------------------------------

            let vratName = "";

            // आपकी JSON स्ट्रक्चर के हिसाब से 'festival' चेक करें
            if (panchangData[tomorrowStr] && panchangData[tomorrowStr].festival) {
                vratName = panchangData[tomorrowStr].festival;
            }

            // 3. अगर कल सच में कोई व्रत है (और "कोई प्रमुख व्रत नहीं" नहीं है), तो पॉप-अप दिखाएं
            if (vratName !== "" && vratName !== "कोई प्रमुख व्रत नहीं") {
                const vratNameDisplay = document.getElementById("vratNameDisplay");
                if (vratNameDisplay && vratReminderModal) {
                    vratNameDisplay.innerText = `कल ${vratName} है`;
                    vratReminderModal.classList.add("active");
                }
            }

        } catch (error) {
            console.log("पंचांग डेटा लाने में एरर:", error);
        }
    }

    // 4. ऐप लोड होने के 2 सेकंड बाद बैकग्राउंड में चुपके से चेक करें
    setTimeout(() => {
        checkUpcomingVrat();
    }, 2000);


// ==========================================================
// 🌟 VIP TICKER PRO MESSAGES (Play Store Optimized)
// ==========================================================
const playStoreTickerMsgs = [
    "🙏 गौ सेवा और 'भक्ति सेवा' ऐप के सर्वर को मजबूत बनाने के लिए कृपया अपना सहयोग (Donation) प्रदान करें...",
    "🛕 नीचे क्लिक करके दुनिया भर के सभी प्रसिद्ध और प्राचीन मंदिरों का अद्भुत इतिहास व रहस्य जानें...",
    "🔒 100% सुरक्षित (Secure): 'भक्ति सेवा' ऐप पूरी तरह सुरक्षित है और आपकी निजता (Privacy) हमारी प्राथमिकता है...",
    "✨ सनातन धर्म के इस डिजिटल अभियान को निरंतर चलाने के लिए आप भी अपना अमूल्य योगदान (Donate) दे सकते हैं..."
];

function initProVIPTicker() {
    const tickerEl = document.getElementById("playStoreVIPTicker");
    if (tickerEl) {
        // लिस्ट में से कोई एक रैंडम प्रीमियम मैसेज उठाएगा
        const selectedMsg = playStoreTickerMsgs[Math.floor(Math.random() * playStoreTickerMsgs.length)];
        tickerEl.innerText = selectedMsg;
    }
}

// ऐप लोड होते ही टिकर ऑन हो जाएगा
initProVIPTicker();


// ==========================================================
// 🌟 GRAH SHANTI POPUP CONTROL LOGIC
// ==========================================================
function openGrahShantiPopup() {
    const modal = document.getElementById("grahShantiModal");
    if (modal) {
        modal.classList.add("active");
    }
}

function closeGrahShantiPopup() {
    const modal = document.getElementById("grahShantiModal");
    if (modal) {
        modal.classList.remove("active");
    }
}

// बाहर स्क्रीन पर क्लिक करने पर भी पॉप-अप बंद हो जाएगा
window.addEventListener("click", (e) => {
    const modal = document.getElementById("grahShantiModal");
    if (e.target === modal) {
        closeGrahShantiPopup();
    }
});


// ==========================================================
// 🌟 VASTU MANDIR POPUP CONTROL LOGIC
// ==========================================================
function openVastuMandirPopup() {
    const modal = document.getElementById("vastuMandirModal");
    if (modal) {
        modal.classList.add("active");
    }
}

function closeVastuMandirPopup() {
    const modal = document.getElementById("vastuMandirModal");
    if (modal) {
        modal.classList.remove("active");
    }
}
// ==========================================================
// 🌟 NEGATIVE POWER PROTECTION POPUP CONTROL LOGIC
// ==========================================================
function openNegativePowerPopup() {
    const modal = document.getElementById("negativePowerModal");
    if (modal) {
        modal.classList.add("active");
    }
}

function closeNegativePowerPopup() {
    const modal = document.getElementById("negativePowerModal");
    if (modal) {
        modal.classList.remove("active");
    }
}
// ==========================================================
// 🎛️ DYNAMIC FONT SIZE CHANGER LOGIC
// ==========================================================
let currentFontLevel = 0; // डिफ़ॉल्ट साइज़

function changeFontSize(containerId, direction) {
    const textContainer = document.getElementById(containerId);
    if (!textContainer) return;

    // लेवल को -2 से लेकर +3 तक सीमित रखेंगे ताकि टेक्स्ट बहुत ज्यादा बड़ा या छोटा न हो जाए
    currentFontLevel += direction;
    if (currentFontLevel > 3) currentFontLevel = 3;
    if (currentFontLevel < 0) currentFontLevel = 0;

    // साइज़ के विकल्प (Pixel में)
    const fontSizes = {
        p: ['12.5px', '14px', '15.5px', '17px'],
        h4: ['13px', '14.5px', '16px', '18px'],
        li: ['12px', '13.5px', '15px', '16.5px'],
        mantra: ['14px', '15.5px', '17px', '19px']
    };

    // सभी एलिमेंट्स पर नया फॉंट साइज़ अप्लाई करना
    const paragraphs = textContainer.querySelectorAll('p:not(.sanskrit-mantra)');
    const headings = textContainer.querySelectorAll('h4');
    const listItems = textContainer.querySelectorAll('li');
    const mantras = textContainer.querySelectorAll('.sanskrit-mantra');

    paragraphs.forEach(el => el.style.fontSize = fontSizes.p[currentFontLevel]);
    headings.forEach(el => el.style.fontSize = fontSizes.h4[currentFontLevel]);
    listItems.forEach(el => el.style.fontSize = fontSizes.li[currentFontLevel]);
    mantras.forEach(el => el.style.fontSize = fontSizes.mantra[currentFontLevel]);
}
// ==========================================================
// 🌟 3 NEW POPUPS CONTROL FUNCTIONS
// ==========================================================

// 1. Pooja Vidhi Popup
function openPoojaVidhiPopup() {
    const modal = document.getElementById("poojaVidhiModal");
    if (modal) modal.classList.add("active");
}
function closePoojaVidhiPopup() {
    const modal = document.getElementById("poojaVidhiModal");
    if (modal) modal.classList.remove("active");
}

// 2. Nazar Dosha Popup
function openNazarDoshaPopup() {
    const modal = document.getElementById("nazarDoshaModal");
    if (modal) modal.classList.add("active");
}
function closeNazarDoshaPopup() {
    const modal = document.getElementById("nazarDoshaModal");
    if (modal) modal.classList.remove("active");
}

// 3. Lakshmi Vastu Popup
function openLakshmiVastuPopup() {
    const modal = document.getElementById("lakshmiVastuModal");
    if (modal) modal.classList.add("active");
}
function closeLakshmiVastuPopup() {
    const modal = document.getElementById("lakshmiVastuModal");
    if (modal) modal.classList.remove("active");
}
// ==========================================================
// 🌟 PLANET DOSHA & TULSI POPUP CONTROL FUNCTIONS
// ==========================================================

// 1. Planet Dosha Popup
function openPlanetDoshaPopup() {
    const modal = document.getElementById("planetDoshaModal");
    if (modal) modal.classList.add("active");
}
function closePlanetDoshaPopup() {
    const modal = document.getElementById("planetDoshaModal");
    if (modal) modal.classList.remove("active");
}

// 2. Tulsi Vastu Popup
function openTulsiVastuPopup() {
    const modal = document.getElementById("tulsiVastuModal");
    if (modal) modal.classList.add("active");
}
function closeTulsiVastuPopup() {
    const modal = document.getElementById("tulsiVastuModal");
    if (modal) modal.classList.remove("active");
}
// ==========================================================
// 🌟 SWAPNA PHAL & HOME REMEDIES POPUP CONTROL FUNCTIONS
// ==========================================================

// 1. Swapna Phal Popup
function openSwapnaPhalPopup() {
    const modal = document.getElementById("swapnaPhalModal");
    if (modal) modal.classList.add("active");
}
function closeSwapnaPhalPopup() {
    const modal = document.getElementById("swapnaPhalModal");
    if (modal) modal.classList.remove("active");
}

// 2. Home Remedies Popup
function openHomeRemediesPopup() {
    const modal = document.getElementById("homeRemediesModal");
    if (modal) modal.classList.add("active");
}
function closeHomeRemediesPopup() {
    const modal = document.getElementById("homeRemediesModal");
    if (modal) modal.classList.remove("active");
}
// ==========================================================
// 🌟 CHANAKYA NITI & KITCHEN VASTU POPUP CONTROL FUNCTIONS
// ==========================================================

// 1. Chanakya Niti Popup
function openChanakyaPopup() {
    const modal = document.getElementById("chanakyaModal");
    if (modal) modal.classList.add("active");
}
function closeChanakyaPopup() {
    const modal = document.getElementById("chanakyaModal");
    if (modal) modal.classList.remove("active");
}

// 2. Kitchen Vastu Popup
function openKitchenVastuPopup() {
    const modal = document.getElementById("kitchenVastuModal");
    if (modal) modal.classList.add("active");
}
function closeKitchenVastuPopup() {
    const modal = document.getElementById("kitchenVastuModal");
    if (modal) modal.classList.remove("active");
}
// ==========================================================
// 🌟 PITRU VASTU & DOSHA POPUP CONTROL FUNCTIONS
// ==========================================================

function openPitruVastuPopup() {
    const modal = document.getElementById("pitruVastuModal");
    if (modal) modal.classList.add("active");
}

function closePitruVastuPopup() {
    const modal = document.getElementById("pitruVastuModal");
    if (modal) modal.classList.remove("active");
}


// =================================================================
// 🏛️ BhaktiSewa: Digital Mandir Complete Logic
// =================================================================

document.addEventListener('DOMContentLoaded', () => {

    // -------------------------------------------------------------
    // 1. SELECTORS & DOM ELEMENTS
    // -------------------------------------------------------------
    const openBtn = document.getElementById('openMandirBtn');           
    const mandirOverlay = document.getElementById('mandirOverlay');       
    const closeBtn = document.getElementById('closeMandirBtn');         
    const patLayer = document.getElementById('patLayer');               
    const patGif = document.querySelector('.pat-gif');                  
    const aartiThali = document.getElementById('aartiThaliContainer');  
    const mandirContent = document.querySelector('.mandir-content') || document.body; 
    const godSwiper = document.querySelector('.god-swiper'); // 👈 स्वाइपर को सेलेक्ट किया

    // -------------------------------------------------------------
    // 2. AUDIO ASSETS
    // -------------------------------------------------------------
    const shankhSound = new Audio('assets/sankh.mp3');                  
    const bellSound = new Audio('assets/ganti.mp3');                    
    const aartiSound = new Audio('assets/aarti.mp3');                   
    const darshanSound = new Audio('assets/jay.mp3'); // 🎵 दर्शन का म्यूजिक

    let darshanInterval; 
    let aartiInterval;   
    let wakeLock = null; 

    // -------------------------------------------------------------
    // 🌟 HELPER: SCREEN WAKE LOCK
    // -------------------------------------------------------------
    async function requestWakeLock() {
        try {
            if ('wakeLock' in navigator) {
                wakeLock = await navigator.wakeLock.request('screen');
            }
        } catch (err) {
            console.log('Wake Lock Error:', err);
        }
    }

    function releaseWakeLock() {
        if (wakeLock !== null) {
            wakeLock.release().then(() => wakeLock = null);
        }
    }

    // -------------------------------------------------------------
    // 3. OPEN DIGITAL MANDIR
    // -------------------------------------------------------------
    if (openBtn) {
        openBtn.addEventListener('click', () => {
            requestWakeLock(); 

            mandirOverlay.classList.add('open');
            document.body.classList.add('mandir-open'); 
            patLayer.classList.remove('hidden');
            patGif.style.display = 'block';

            shankhSound.currentTime = 0;
            shankhSound.play().catch(e => console.log('Shankh Auto-Play Alert:', e));

            setTimeout(() => {
                patLayer.classList.add('hidden'); 
                setTimeout(() => {
                    patGif.style.display = 'none'; 
                }, 1000);
            }, 3000);
        });
    }

    // -------------------------------------------------------------
    // 4. CLOSE DIGITAL MANDIR
    // -------------------------------------------------------------
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            releaseWakeLock(); 

            mandirOverlay.classList.remove('open');
            document.body.classList.remove('mandir-open');

            shankhSound.pause();
            shankhSound.currentTime = 0;
            bellSound.pause();
            bellSound.currentTime = 0;

            stopDarshan(); 
            stopAarti();   
        });
    }

    function triggerHaptic() {
        if (navigator.vibrate) {
            navigator.vibrate(35); 
        }
    }

    // -------------------------------------------------------------
    // 🌟 MAGIC PARTICLE GENERATOR FUNCTIONS
    // -------------------------------------------------------------

    // 🌸 1. पुष्पांजलि 
    function createPushpanjali() {
        const emojis = ['🌸', '🌹', '🌺', '🏵️'];
        for (let i = 0; i < 20; i++) {
            setTimeout(() => {
                const petal = document.createElement('div');
                petal.className = 'magic-particle';
                petal.innerText = emojis[Math.floor(Math.random() * emojis.length)];
                
                petal.style.bottom = '20%';
                petal.style.left = (40 + Math.random() * 20) + '%';
                petal.style.fontSize = (10 + Math.random() * 10) + 'px';
                
                const mx = (Math.random() - 0.5) * 200 + 'px';
                const my = -(200 + Math.random() * 150) + 'px';
                const ex = (Math.random() - 0.5) * 150 + 'px';
                const ey = '60px'; 

                petal.style.setProperty('--mx', mx);
                petal.style.setProperty('--my', my);
                petal.style.setProperty('--ex', ex);
                petal.style.setProperty('--ey', ey);

                petal.style.animation = `petalArcAnim ${1.5 + Math.random()}s ease-in-out forwards`;
                mandirContent.appendChild(petal);

                setTimeout(() => petal.remove(), 3000);
            }, i * 100); 
        }
    }

    // 🛑 🌸 आरती रोकें
    function stopAarti() {
        if (aartiThali) aartiThali.classList.add('hidden'); 
        aartiSound.pause();
        aartiSound.currentTime = 0; 
        clearInterval(aartiInterval); 
    }

    // ✨ 2. आशीर्वाद 
    function createAashirwadStars() {
        const emojis = ['✨', '🌟', '⭐']; 
        
        for (let i = 0; i < 40; i++) {
            setTimeout(() => {
                const star = document.createElement('div');
                star.className = 'magic-particle';
                star.innerText = emojis[Math.floor(Math.random() * emojis.length)];
                
                star.style.top = '-5%'; 
                star.style.left = (Math.random() * 100) + '%'; 
                star.style.fontSize = (2 + Math.random() * 4) + 'px'; 
                
                star.style.animation = `starFallAnim ${2 + Math.random() * 3}s linear forwards`;
                mandirContent.appendChild(star);

                setTimeout(() => star.remove(), 5000);
            }, i * 60); 
        }
    }

    // 🛑 🎯 दर्शन रोकने का मास्टर फंक्शन (Zero Lag)
    function stopDarshan() {
        const allGods = document.querySelectorAll('.god-slide');
        allGods.forEach(god => god.classList.remove('darshan-zoom-active'));
        
        darshanSound.pause();
        darshanSound.currentTime = 0;
        clearInterval(darshanInterval);
    }

    // 💡 नया फीचर: अगर दर्शन चालू है और यूजर स्क्रीन स्वाइप करे, तो दर्शन अपने आप बंद हो जाए
    if (godSwiper) {
        godSwiper.addEventListener('scroll', () => {
            if (!darshanSound.paused) {
                stopDarshan();
            }
        });
    }
  
    // -------------------------------------------------------------
    // 6. ACTION BUTTONS CLICK HANDLERS
    // -------------------------------------------------------------

    const shankhBtn = document.getElementById('shankhActionBtn');
    if (shankhBtn) {
        shankhBtn.addEventListener('click', () => {
            triggerHaptic();
            shankhSound.currentTime = 0;
            shankhSound.play().catch(e => console.log(e));
        });
    }

    const aartiBtn = document.getElementById('aartiActionBtn');
    if (aartiBtn) {
        aartiBtn.addEventListener('click', () => {
            triggerHaptic();
            if (aartiSound.paused) {
                if (aartiThali) aartiThali.classList.remove('hidden'); 
                aartiSound.play().catch(e => console.log(e)); 
                createPushpanjali(); 
                aartiInterval = setInterval(createPushpanjali, 5000); 
            } else {
                stopAarti();
            }
        });
    }

    aartiSound.addEventListener('ended', stopAarti);

    const bellBtn = document.getElementById('bellActionBtn');
    if (bellBtn) {
        bellBtn.addEventListener('click', () => {
            triggerHaptic();
            bellSound.currentTime = 0;
            bellSound.play().catch(e => console.log(e));
        });
    }

    // 👀 4. 🎯 दर्शन (SMART DETECTOR LOGIC ADDED - ZERO LAG GLOW)
    const darshanBtn = document.getElementById('darshanActionBtn');
    if (darshanBtn) {
        darshanBtn.addEventListener('click', () => {
            triggerHaptic();
            
            // 🎯 चेक करो कि इस वक्त स्क्रीन के बीच में कौन सी फोटो है
            const slides = document.querySelectorAll('.god-slide');
            if (!godSwiper || slides.length === 0) return;
            
            // स्वाइप की पोज़िशन के हिसाब से इंडेक्स (नंबर) निकालना
            const currentIndex = Math.round(godSwiper.scrollLeft / godSwiper.clientWidth);
            const activeGod = slides[currentIndex]; // 👈 जो फोटो सामने है सिर्फ उसे पकड़ा!

            if (!activeGod) return;

            if (darshanSound.paused) {
                // जो फोटो सामने है, उसे ज़ूम और ग्लो करो (बिना लैग वाले पार्टिकल सिस्टम के साथ)
                activeGod.classList.add('darshan-zoom-active'); 
                darshanSound.play().catch(e => console.log(e));
            } else {
                stopDarshan();
            }
        });
    }

    darshanSound.addEventListener('ended', stopDarshan);

    const chadwaBtn = document.getElementById('chadwaActionBtn');
    if (chadwaBtn) {
        chadwaBtn.addEventListener('click', () => {
            triggerHaptic();
            console.log('चढ़ावा बटन दबाया गया');
        });
    }

    const aashirwaadBtn = document.getElementById('aashirwaadActionBtn');
    if (aashirwaadBtn) {
        aashirwaadBtn.addEventListener('click', () => {
            triggerHaptic();
            createAashirwadStars(); 
        });
    }

});

/* ========================================================= */
/* 🌸 Flower Shower Gravity Physics Engine (Custom Quantity & Sizes) */
/* ========================================================= */

function startFlowerShower(flowerType) {
    const container = document.getElementById('flower-container');
    
    // इमेजेस (pti.png और phool.png)
    const imgsrc = flowerType === 'rose' ? 'assets/pti.png' : 'assets/phool.png';
    
    // साइज़ वाली CSS क्लास चुनना
    const sizeClass = flowerType === 'rose' ? 'rose-size' : 'marigold-size';
    
    // ⚡ नया जादू: फूलों की संख्या (Quantity) अलग-अलग सेट करना
    // अगर गुलाब है तो 60 पंखुड़ियाँ निकलेंगी, गेंदा है तो सिर्फ 15 फूल निकलेंगे
    const totalFlowers = flowerType === 'rose' ? 60 : 15; 

    for (let i = 0; i < totalFlowers; i++) {
        const flower = document.createElement('img');
        flower.src = imgsrc;
        
        flower.className = `falling-flower ${sizeClass}`;
        container.appendChild(flower);

        let x = window.innerWidth / 2;
        let y = window.innerHeight * 0.85; 

        // स्पीड और ऊंचाई की सेटिंग (नेचुरल)
        let vx = (Math.random() - 0.5) * 15; 
        let vy = - (Math.random() * 12 + 15); 
        
        let gravity = 0.5; 
        let rotation = Math.random() * 360;
        let rotationSpeed = (Math.random() - 0.5) * 10;
        let opacity = 1;

        function updatePhysics() {
            vy += gravity; 
            x += vx;
            y += vy;
            rotation += rotationSpeed;

            if (y > window.innerHeight * 0.6) {
                opacity -= 0.015;
            }

            flower.style.transform = `translate(${x - window.innerWidth / 2}px, ${y - window.innerHeight * 0.85}px) rotate(${rotation}deg)`;
            flower.style.opacity = opacity;

            if (y > window.innerHeight + 50 || opacity <= 0) {
                flower.remove();
            } else {
                requestAnimationFrame(updatePhysics);
            }
        }

        requestAnimationFrame(updatePhysics);
    }
}


/* ========================================================= */
/* 🪙 CHADAWA COIN SHOWER & DONATION POPUP LOGIC (FINAL SPA FIX) */
/* ========================================================= */

function startChadawa(event) {
    // 1. कॉइन साउंड प्ले करें
    const coinSound = document.getElementById('coinSound');
    if (coinSound) {
        coinSound.currentTime = 0;
        coinSound.play().catch(e => console.log("Audio play error:", e));
    }

    // 2. जहाँ चढ़ावा बटन है, ठीक वहीं से सिक्के उछाले जाएँगे
    const rect = event.currentTarget.getBoundingClientRect();
    const startX = rect.left + rect.width / 2;
    const startY = rect.top + rect.height / 2;
    
    const totalCoins = 30; // कुल 30 सिक्के गिरेंगे

    for (let i = 0; i < totalCoins; i++) {
        createGoldenCoin(startX, startY);
    }

    // 3. 2.5 सेकंड बाद होम स्क्रीन वाला Donation Modal खोलें
    setTimeout(() => {
        // 🔍 आपके होम वाले पॉप-अप की सही ID और क्लास को टारगेट कर रहे हैं
        let donationModal = document.querySelector('#donationModal') || 
                            document.querySelector('.donation-modal-overlay'); 

        if (donationModal) {
            // ⚡ जादू 1: पॉप-अप को बॉडी के आख़िर में ला रहे हैं ताकि मंदिर के पर्दों के ऊपर दिखे
            document.body.appendChild(donationModal); 
            
            // ⚡ जादू 2: इनलाइन स्टाइल से डिस्प्ले ठीक कर रहे हैं ताकि `display: none` हटे
            donationModal.style.display = "flex"; 
            donationModal.style.zIndex = "2147483646"; 
            
            // ⚡ जादू 3: एक्टिव क्लास जोड़कर स्मूथ ओपन कर रहे हैं
            donationModal.classList.add('active');
            
            console.log("Donation Popup Opened Successfully!");
        } else {
            console.error("⚠️ अरे भाई! #donationModal नहीं मिल रहा है। कृपया HTML चेक करें।");
        }
    }, 2500);
}

function createGoldenCoin(startX, startY) {
    const coin = document.createElement('div');
    coin.className = 'falling-coin';
    
    // सिक्कों को Body में डाल रहे हैं ताकि वो मंदिर के पीछे न छुपें
    document.body.appendChild(coin);

    let x = startX;
    let y = startY;
    
    // 🚀 सिक्के उछलने और नीचे गिरने की स्पीड फिजिक्स
    let vx = (Math.random() - 0.5) * 15; 
    let vy = -(Math.random() * 15 + 22); 
    let gravity = 0.8; 
    let rotationY = 0;

    function animateCoin() {
        vy += gravity; 
        x += vx;
        y += vy;
        rotationY += 20;

        // Fixed Positioning के हिसाब से सिक्के को घुमाते हुए चलाएंगे
        coin.style.transform = `translate(${x}px, ${y}px) rotateY(${rotationY}deg)`;

        // स्क्रीन से नीचे जाने पर DOM से डिलीट कर देंगे ताकि मेमोरी लीक न हो
        if (y > window.innerHeight + 50) {
            coin.remove();
        } else {
            requestAnimationFrame(animateCoin);
        }
    }
    requestAnimationFrame(animateCoin);
}

/* ========================================================= */
/* 4. पेमेंट पूरा होने पर आशीर्वाद दिखाने का कोड             */
/* ========================================================= */
function showChadawaSuccess() {
    // 1. डोनेशन पॉप-अप बंद करें और वापस `display: none` कर दें
    const donationModal = document.querySelector('#donationModal') || document.querySelector('.donation-modal-overlay');
    if(donationModal) {
        donationModal.classList.remove('active');
        donationModal.style.display = "none";
    }
    
    // 2. भगवान का आशीर्वाद मैसेज दिखाएं (इसे भी सबसे ऊपर ला रहे हैं)
    const successOverlay = document.getElementById('chadawaSuccessOverlay');
    if(successOverlay) {
        document.body.appendChild(successOverlay);
        successOverlay.style.zIndex = "2147483647";
        successOverlay.classList.add('show');
        
        // 4 सेकंड बाद आशीर्वाद मैसेज ऑटोमैटिक गायब हो जाएगा
        setTimeout(() => {
            successOverlay.classList.remove('show');
        }, 4000);
    }
}


