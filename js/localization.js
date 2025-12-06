// Market Localization System for Crypque & Mobicryp Presentation
// Supports: Thailand (THB), Philippines (PHP), Europe (EUR), USA (USD)

window.MarketLocalization = {
    // Current market setting
    currentMarket: 'europe',

    // Currency rates (EUR as base)
    currencyRates: {
        europe: { symbol: '€', code: 'EUR', rate: 1, name: 'Euro' },
        thailand: { symbol: '฿', code: 'THB', rate: 38, name: 'Thai Baht' },
        philippines: { symbol: '₱', code: 'PHP', rate: 62, name: 'Philippine Peso' },
        usa: { symbol: '$', code: 'USD', rate: 1.08, name: 'US Dollar' }
    },

    // Translations - Thai with English subtitles
    translations: {
        thailand: {
            // Slide headers
            'WELCOME': { th: 'ยินดีต้อนรับ', en: 'WELCOME' },
            'MY ROLE': { th: 'บทบาทของฉัน', en: 'MY ROLE' },
            'COMPANY BACKGROUND': { th: 'ประวัติบริษัท', en: 'COMPANY BACKGROUND' },
            'FOUNDERS': { th: 'ผู้ก่อตั้ง', en: 'FOUNDERS' },
            'ECOSYSTEM': { th: 'ระบบนิเวศ', en: 'ECOSYSTEM' },
            'INCOME SOURCES': { th: 'แหล่งรายได้', en: 'INCOME SOURCES' },
            'ARBITRAGE': { th: 'อาร์บิทราจ', en: 'ARBITRAGE' },
            'PRICE DIFFERENCES': { th: 'ความแตกต่างของราคา', en: 'PRICE DIFFERENCES' },
            'PROFIT GENERATION': { th: 'การสร้างกำไร', en: 'PROFIT GENERATION' },
            'OTHER REVENUE STREAMS': { th: 'แหล่งรายได้อื่นๆ', en: 'OTHER REVENUE STREAMS' },
            'INVESTOR EARNINGS': { th: 'รายได้นักลงทุน', en: 'INVESTOR EARNINGS' },
            'INVESTMENT CALCULATOR': { th: 'เครื่องคำนวณการลงทุน', en: 'INVESTMENT CALCULATOR' },
            'WEALTH MULTIPLICATION': { th: 'การเพิ่มความมั่งคั่ง', en: 'WEALTH MULTIPLICATION' },
            'INCENTIVE TRIP': { th: 'รางวัลทริป', en: 'INCENTIVE TRIP' },
            'CLOSING WORDS': { th: 'คำปิดท้าย', en: 'CLOSING WORDS' },
            'NEXT STEPS': { th: 'ขั้นตอนต่อไป', en: 'NEXT STEPS' },

            // Main titles
            'Hello everyone!': { th: 'สวัสดีทุกคน!', en: 'Hello everyone!' },
            'Thank you for being here today': { th: 'ขอบคุณที่มาในวันนี้', en: 'Thank you for being here today' },
            'I will tell you today:': { th: 'วันนี้ฉันจะบอกคุณ:', en: 'I will tell you today:' },
            'How to grow money without complex trading': { th: 'วิธีเพิ่มเงินโดยไม่ต้องเทรดที่ซับซ้อน', en: 'How to grow money without complex trading' },
            'Without charts and daily risk': { th: 'ไม่ต้องดูกราฟและความเสี่ยงรายวัน', en: 'Without charts and daily risk' },
            'Simple, clear and understandable approach': { th: 'วิธีการที่เรียบง่าย ชัดเจน และเข้าใจง่าย', en: 'Simple, clear and understandable approach' },
            'Important Note': { th: 'หมายเหตุสำคัญ', en: 'Important Note' },
            'This is not financial advice': { th: 'นี่ไม่ใช่คำแนะนำทางการเงิน', en: 'This is not financial advice' },

            // Role slide
            'My Role Today': { th: 'บทบาทของฉันในวันนี้', en: 'My Role Today' },
            'I Will Give You:': { th: 'ฉันจะให้คุณ:', en: 'I Will Give You:' },
            'What I don\'t do:': { th: 'สิ่งที่ฉันไม่ทำ:', en: 'What I don\'t do:' },
            'Clear understanding of the company': { th: 'ความเข้าใจที่ชัดเจนเกี่ยวกับบริษัท', en: 'Clear understanding of the company' },
            'How they generate revenue': { th: 'วิธีที่พวกเขาสร้างรายได้', en: 'How they generate revenue' },
            'What are the opportunities': { th: 'โอกาสมีอะไรบ้าง', en: 'What are the opportunities' },
            'What are the risks': { th: 'ความเสี่ยงมีอะไรบ้าง', en: 'What are the risks' },
            'How to make your own decision': { th: 'วิธีตัดสินใจด้วยตัวเอง', en: 'How to make your own decision' },
            'I don\'t persuade': { th: 'ฉันไม่ชักชวน', en: 'I don\'t persuade' },
            'I don\'t sell anything': { th: 'ฉันไม่ขายอะไร', en: 'I don\'t sell anything' },
            'I don\'t offer packages': { th: 'ฉันไม่เสนอแพ็คเกจ', en: 'I don\'t offer packages' },
            'I don\'t rush decisions': { th: 'ฉันไม่เร่งตัดสินใจ', en: 'I don\'t rush decisions' },

            // Company background
            'Five Years of Real Business': { th: 'ห้าปีของธุรกิจจริง', en: 'Five Years of Real Business' },
            'The company operates with real offices, employees and activities': { th: 'บริษัทดำเนินงานด้วยสำนักงานจริง พนักงาน และกิจกรรม', en: 'The company operates with real offices, employees and activities' },
            'Years in Operation': { th: 'ปีในการดำเนินงาน', en: 'Years in Operation' },
            'Clients Globally': { th: 'ลูกค้าทั่วโลก', en: 'Clients Globally' },
            'Employees': { th: 'พนักงาน', en: 'Employees' },
            'Real Estate Portfolio': { th: 'พอร์ตอสังหาริมทรัพย์', en: 'Real Estate Portfolio' },

            // Founders
            'THE TEAM BEHIND YOU': { th: 'ทีมงานที่อยู่เบื้องหลัง', en: 'THE TEAM BEHIND YOU' },
            'Experienced leaders dedicated to your success': { th: 'ผู้นำที่มีประสบการณ์อุทิศตนเพื่อความสำเร็จของคุณ', en: 'Experienced leaders dedicated to your success' },

            // Ecosystem
            'CRYPQUE ECOSYSTEM': { th: 'ระบบนิเวศ CRYPQUE', en: 'CRYPQUE ECOSYSTEM' },
            'Diverse Product Family and Services': { th: 'ครอบครัวผลิตภัณฑ์และบริการที่หลากหลาย', en: 'Diverse Product Family and Services' },

            // Income sources
            'Where Does Company Revenue Come From?': { th: 'รายได้บริษัทมาจากไหน?', en: 'Where Does Company Revenue Come From?' },
            'Three Strong Revenue Streams': { th: 'แหล่งรายได้ที่แข็งแกร่งสามแหล่ง', en: 'Three Strong Revenue Streams' },
            'Arbitrage': { th: 'อาร์บิทราจ', en: 'Arbitrage' },
            'Diversification': { th: 'การกระจายความเสี่ยง', en: 'Diversification' },
            'Crypto Research': { th: 'การวิจัยคริปโต', en: 'Crypto Research' },

            // Arbitrage explanation
            'What is Arbitrage?': { th: 'อาร์บิทราจคืออะไร?', en: 'What is Arbitrage?' },
            'Company\'s Main Activity - 50% of Revenue': { th: 'กิจกรรมหลักของบริษัท - 50% ของรายได้', en: 'Company\'s Main Activity - 50% of Revenue' },
            'Arbitrage Means:': { th: 'อาร์บิทราจหมายถึง:', en: 'Arbitrage Means:' },
            'Buying currency/crypto in one place cheaper': { th: 'ซื้อสกุลเงิน/คริปโตในที่หนึ่งราคาถูกกว่า', en: 'Buying currency/crypto in one place cheaper' },
            'and selling in another for more': { th: 'และขายในที่อื่นในราคาที่สูงกว่า', en: 'and selling in another for more' },

            // Price differences
            'USDT Price Differences': { th: 'ความแตกต่างของราคา USDT', en: 'USDT Price Differences' },
            'Illustrative example - price differences between countries': { th: 'ตัวอย่างประกอบ - ความแตกต่างของราคาระหว่างประเทศ', en: 'Illustrative example - price differences between countries' },

            // Profit generation
            'How Is Profit Generated?': { th: 'กำไรสร้างขึ้นอย่างไร?', en: 'How Is Profit Generated?' },
            'Buy in large quantities at lower price': { th: 'ซื้อจำนวนมากในราคาต่ำกว่า', en: 'Buy in large quantities at lower price' },
            'Sell at higher price in another country': { th: 'ขายในราคาที่สูงกว่าในประเทศอื่น', en: 'Sell at higher price in another country' },
            'Earn 0.5-8% difference': { th: 'ได้รับส่วนต่าง 0.5-8%', en: 'Earn 0.5-8% difference' },
            'Repeated every day': { th: 'ทำซ้ำทุกวัน', en: 'Repeated every day' },
            'Average Profit Per Cycle': { th: 'กำไรเฉลี่ยต่อรอบ', en: 'Average Profit Per Cycle' },
            'Transactions Per Month': { th: 'ธุรกรรมต่อเดือน', en: 'Transactions Per Month' },
            'Monthly Returns': { th: 'ผลตอบแทนรายเดือน', en: 'Monthly Returns' },
            'Stable': { th: 'มั่นคง', en: 'Stable' },

            // Other revenue
            'Other Revenue Streams (50%)': { th: 'แหล่งรายได้อื่นๆ (50%)', en: 'Other Revenue Streams (50%)' },
            'Besides arbitrage, there are two more important income sources': { th: 'นอกจากอาร์บิทราจ ยังมีแหล่งรายได้สำคัญอีกสองแหล่ง', en: 'Besides arbitrage, there are two more important income sources' },
            'Crypto Research (20%)': { th: 'การวิจัยคริปโต (20%)', en: 'Crypto Research (20%)' },
            'Diversification (30%)': { th: 'การกระจายความเสี่ยง (30%)', en: 'Diversification (30%)' },

            // Investor earnings
            'How The Investor Earns': { th: 'นักลงทุนได้รับผลตอบแทนอย่างไร', en: 'How The Investor Earns' },
            'Investor puts their money to work': { th: 'นักลงทุนนำเงินไปทำงาน', en: 'Investor puts their money to work' },
            'Company uses for business': { th: 'บริษัทใช้เพื่อธุรกิจ', en: 'Company uses for business' },
            'Profit is generated': { th: 'เกิดกำไร', en: 'Profit is generated' },
            'Investor gets their share': { th: 'นักลงทุนได้รับส่วนแบ่ง', en: 'Investor gets their share' },
            'Max 2.5× return': { th: 'ผลตอบแทนสูงสุด 2.5 เท่า', en: 'Max 2.5× return' },
            'Average Monthly Return': { th: 'ผลตอบแทนเฉลี่ยต่อเดือน', en: 'Average Monthly Return' },
            'Maximum Return': { th: 'ผลตอบแทนสูงสุด', en: 'Maximum Return' },
            'Payout (min $10)': { th: 'จ่าย (ขั้นต่ำ $10)', en: 'Payout (min $10)' },
            'Every day': { th: 'ทุกวัน', en: 'Every day' },
            'Income comes from real business, not from recruiting people': { th: 'รายได้มาจากธุรกิจจริง ไม่ใช่จากการชวนคน', en: 'Income comes from real business, not from recruiting people' },

            // Calculator
            'Total Investment': { th: 'การลงทุนทั้งหมด', en: 'Total Investment' },
            'Hub (contract)': { th: 'Hub (สัญญา)', en: 'Hub (contract)' },
            'Platform access': { th: 'การเข้าถึงแพลตฟอร์ม', en: 'Platform access' },
            'Working capital': { th: 'เงินทุนหมุนเวียน', en: 'Working capital' },
            'This earns returns': { th: 'ได้รับผลตอบแทน', en: 'This earns returns' },
            'TOTAL IN': { th: 'รวมเข้า', en: 'TOTAL IN' },
            'Returns (25 months)': { th: 'ผลตอบแทน (25 เดือน)', en: 'Returns (25 months)' },
            'Gross return': { th: 'ผลตอบแทนรวม', en: 'Gross return' },
            'Withdrawal fee': { th: 'ค่าธรรมเนียมถอน', en: 'Withdrawal fee' },
            'NET RETURN': { th: 'ผลตอบแทนสุทธิ', en: 'NET RETURN' },
            'Net Profit': { th: 'กำไรสุทธิ', en: 'Net Profit' },
            'Return on Investment': { th: 'ผลตอบแทนจากการลงทุน', en: 'Return on Investment' },

            // Morocco trip
            'AFRICA / MOROCCO': { th: 'แอฟริกา / โมร็อกโก', en: 'AFRICA / MOROCCO' },
            'Exclusive Trip With The Founders': { th: 'ทริปพิเศษกับผู้ก่อตั้ง', en: 'Exclusive Trip With The Founders' },
            'Four days with the company founders': { th: 'สี่วันกับผู้ก่อตั้งบริษัท', en: 'Four days with the company founders' },
            'luxury program and Morocco\'s magical atmosphere': { th: 'โปรแกรมหรูและบรรยากาศมหัศจรรย์ของโมร็อกโก', en: 'luxury program and Morocco\'s magical atmosphere' },
            'FREE TRIP FOR INVESTORS': { th: 'ทริปฟรีสำหรับนักลงทุน', en: 'FREE TRIP FOR INVESTORS' },
            'Invest at least': { th: 'ลงทุนอย่างน้อย', en: 'Invest at least' },
            'Qualify for FREE trip!': { th: 'มีสิทธิ์ได้ทริปฟรี!', en: 'Qualify for FREE trip!' },
            'Flight Tickets': { th: 'ตั๋วเครื่องบิน', en: 'Flight Tickets' },
            'Luxury Hotel': { th: 'โรงแรมหรู', en: 'Luxury Hotel' },
            'Founders Present': { th: 'ผู้ก่อตั้งมาร่วม', en: 'Founders Present' },
            'All Included': { th: 'รวมทุกอย่าง', en: 'All Included' },

            // Closing
            'Closing Words': { th: 'คำปิดท้าย', en: 'Closing Words' },
            'If This Resonated': { th: 'ถ้าสนใจ', en: 'If This Resonated' },
            'If Not For You': { th: 'ถ้าไม่ใช่สำหรับคุณ', en: 'If Not For You' },
            'We can continue.': { th: 'เราสามารถดำเนินการต่อได้', en: 'We can continue.' },
            'Let\'s talk details.': { th: 'มาคุยรายละเอียดกัน', en: 'Let\'s talk details.' },
            'Let\'s look at options.': { th: 'มาดูตัวเลือกกัน', en: 'Let\'s look at options.' },
            'Totally okay.': { th: 'ไม่เป็นไร', en: 'Totally okay.' },
            'Thanks for listening.': { th: 'ขอบคุณที่รับฟัง', en: 'Thanks for listening.' },
            'Good luck on your path!': { th: 'ขอให้โชคดี!', en: 'Good luck on your path!' },
            'THANK YOU FOR LISTENING!': { th: 'ขอบคุณที่รับฟัง!', en: 'THANK YOU FOR LISTENING!' },

            // Next steps
            'What Happens Next?': { th: 'ต่อไปเป็นอย่างไร?', en: 'What Happens Next?' },
            'Simple 4-step process to get started': { th: 'ขั้นตอนง่ายๆ 4 ขั้นตอนในการเริ่มต้น', en: 'Simple 4-step process to get started' },
            'Contact': { th: 'ติดต่อ', en: 'Contact' },
            'Get in touch and ask questions': { th: 'ติดต่อและถามคำถาม', en: 'Get in touch and ask questions' },
            'Registration': { th: 'ลงทะเบียน', en: 'Registration' },
            'Simple 5-minute registration': { th: 'ลงทะเบียนง่ายๆ 5 นาที', en: 'Simple 5-minute registration' },
            'Contract & Deposit': { th: 'สัญญาและฝากเงิน', en: 'Contract & Deposit' },
            'Choose HUB amount and activate': { th: 'เลือกจำนวน HUB และเปิดใช้งาน', en: 'Choose HUB amount and activate' },
            'Earnings Begin': { th: 'เริ่มรับรายได้', en: 'Earnings Begin' },
            'Money starts working 24/7': { th: 'เงินเริ่มทำงาน 24/7', en: 'Money starts working 24/7' },
            'Here Today?': { th: 'อยู่ที่นี่วันนี้?', en: 'Here Today?' },
            'Need Time To Think?': { th: 'ต้องการเวลาคิด?', en: 'Need Time To Think?' },
            'Ask all your questions': { th: 'ถามคำถามทั้งหมดของคุณ', en: 'Ask all your questions' },
            'Clarify details': { th: 'ชี้แจงรายละเอียด', en: 'Clarify details' },
            'Get help with registration': { th: 'รับความช่วยเหลือในการลงทะเบียน', en: 'Get help with registration' },
            'Choose suitable package': { th: 'เลือกแพ็คเกจที่เหมาะสม', en: 'Choose suitable package' },
            'Take your time': { th: 'ใช้เวลาของคุณ', en: 'Take your time' },
            'Research more info': { th: 'ค้นหาข้อมูลเพิ่มเติม', en: 'Research more info' },
            'Get in touch later': { th: 'ติดต่อภายหลัง', en: 'Get in touch later' },
            'Info stays available': { th: 'ข้อมูลยังคงมีอยู่', en: 'Info stays available' },
            'Questions? Let\'s talk now or later!': { th: 'มีคำถาม? มาคุยกันตอนนี้หรือทีหลัง!', en: 'Questions? Let\'s talk now or later!' }
        },

        // Philippines uses English primarily
        philippines: {},

        // Europe uses English
        europe: {},

        // USA uses English
        usa: {}
    },

    // Initialize the localization system
    init: function() {
        const savedMarket = localStorage.getItem('selectedMarket');
        if (savedMarket) {
            this.currentMarket = savedMarket;
        }
        this.updateCurrencyDisplay();
    },

    // Set market and update display
    setMarket: function(market) {
        this.currentMarket = market;
        localStorage.setItem('selectedMarket', market);
        this.updateCurrencyDisplay();
        this.updateTranslations();

        // Update calculator if exists
        if (typeof window.updateCalculator === 'function') {
            window.updateCalculator();
        }
    },

    // Convert EUR to local currency
    convertFromEUR: function(eurAmount) {
        const rate = this.currencyRates[this.currentMarket];
        return Math.round(eurAmount * rate.rate);
    },

    // Convert USD to local currency (via EUR)
    convertFromUSD: function(usdAmount) {
        // First convert USD to EUR (USD * 0.92 ≈ EUR)
        const eurAmount = usdAmount * 0.92;
        return this.convertFromEUR(eurAmount);
    },

    // Format currency
    formatCurrency: function(amount, fromCurrency = 'EUR') {
        const rate = this.currencyRates[this.currentMarket];
        let localAmount;

        if (fromCurrency === 'USD') {
            localAmount = this.convertFromUSD(amount);
        } else {
            localAmount = this.convertFromEUR(amount);
        }

        return rate.symbol + localAmount.toLocaleString();
    },

    // Get translation with dual display for Thai
    getTranslation: function(key) {
        if (this.currentMarket === 'thailand' && this.translations.thailand[key]) {
            const trans = this.translations.thailand[key];
            return {
                primary: trans.th,
                secondary: trans.en,
                isDual: true
            };
        }
        return {
            primary: key,
            secondary: null,
            isDual: false
        };
    },

    // Create dual-language HTML
    createDualText: function(key, primarySize = '1em', secondarySize = '0.7em') {
        const trans = this.getTranslation(key);
        if (trans.isDual) {
            return `<span style="display: block; font-size: ${primarySize};">${trans.primary}</span>
                    <span style="display: block; font-size: ${secondarySize}; opacity: 0.7; font-style: italic;">${trans.secondary}</span>`;
        }
        return key;
    },

    // Update all currency displays on the page
    updateCurrencyDisplay: function() {
        const rate = this.currencyRates[this.currentMarket];

        // Update currency indicators if they exist
        const currencyIndicators = document.querySelectorAll('.currency-indicator');
        currencyIndicators.forEach(el => {
            el.textContent = rate.code;
        });

        // Update currency symbols
        const currencySymbols = document.querySelectorAll('.currency-symbol');
        currencySymbols.forEach(el => {
            el.textContent = rate.symbol;
        });
    },

    // Update all translations on the page
    updateTranslations: function() {
        if (this.currentMarket !== 'thailand') {
            // Reset to English for non-Thai markets
            document.querySelectorAll('[data-translate]').forEach(el => {
                const key = el.getAttribute('data-translate');
                el.innerHTML = key;
            });
            return;
        }

        // Apply Thai translations with dual display
        document.querySelectorAll('[data-translate]').forEach(el => {
            const key = el.getAttribute('data-translate');
            const primarySize = el.getAttribute('data-primary-size') || '1em';
            const secondarySize = el.getAttribute('data-secondary-size') || '0.7em';
            el.innerHTML = this.createDualText(key, primarySize, secondarySize);
        });
    },

    // Get current currency info
    getCurrencyInfo: function() {
        return this.currencyRates[this.currentMarket];
    }
};

// Initialize on load
document.addEventListener('DOMContentLoaded', function() {
    window.MarketLocalization.init();
});
