let jsonData = {
    USA : [
		"AAL",
		"AAPL",
		"AIG",
		"AMZN",
		"BA",
		"C",
		"CVX",
		"DIS",
		"F",
		"FB",
		"FDX",
		"GE",
		"GS",
		"HD",
		"HPQ",
		"IBM",
		"INTC",
		"JNJ",
		"JPM",
		"KO",
		"MA",
		"MCD",
		"MMM",
		"MRK",
		"MSFT",
		"NET",
		"NFLX",
		"NKE",
		"A",
		"NVDA",
		"WKHS",
		"ORCL",
		"PEP",
		"PG",
		"T",
		"TSLA",
		"UAL",
		"UNH",
		"V",
		"VZ",
		"WFC",
		"WMT",
		"XOM",
		"IWM",
		"QQQ",
		"DLPN",
		"FNKO",
		"GLD",
		"GOOGL",
		"H",
		"ING",
		"MAR",
		"MAT",
		"NDAQ",
		"PLBY",
		"SCHD",
		"TKAT",
		"USO",
		"VEA",
		"VOO"
	],
	EUROPE : ["ADS",
		"AF",
		"AI",
		"AIR",
		"ALV",
		"BAS",
		"BATS",
		"BAYN",
		"BMW",
		"BN",
		"BNP",
		"CS",
		"DGE",
		"EDF",
		"GLEN",
		"GSK",
		"IBE",
		"LHA",
		"MBG",
		"MC",
		"NESN",
		"NOVN",
		"OR",
		"RIO",
		"ROG",
		"SAP",
		"SHEL",
		"SIE",
		"ULVR",
		"VOD",
	],
	RUSSIA : [
		"ALRS",
		"CHMF",
		"GAZP",
		"GMKN",
		"HYDR",
		"IRAO",
		"LKOH",
		"MAGN",
		"MGNT",
		"MOEX",
		"MTSS",
		"NLMK",
		"NVTK",
		"PLZL",
		"ROSN",
		"RTKM",
		"SBER",
		"SBERP",
		"SIBN",
		"SNGS",
		"SNGSP",
		"TATN",
	],
	ARABIC: [
		"4020 - العقارية",
		"4090 - طيبة",
		"4100 - مكة",
		"4150 - التعمير",
		"4220 - إعمار",
		"4230 - البحر الأحمر",
		"4250 - جبل عمر",
		"4300 - دار الأركان",
		"4310 - مدينة المعرفة",
		"4320 - الأندلس",
		"4321 - المراكز",
		"4322 - رتال",
		"2050 - مجموعة صافولا",
		"2100 - وفرة",
		"2270 - سدافكو",
		"2280 - المراعي",
		"2281 - تنمية",
		"2282 - نقي",
		"6001 - حلواني إخوان",
		"6010 - نادك",
		"6020 - جاكو",
		"6040 - تبوك الزراعية",
		"6050 - الأسماك",
		"6060 - الشرقية للتنمية",
		"6070 - الجوف",
		"6090 - جازادكو",
		"2070 - الدوائية",
		"7010 - اس تي سي",
		"7020 - إتحاد إتصالات",
		"7030 - زين السعودية",
		"7040 - عذيب للإتصالات",
		"1111 - مجموعة تداول",
		"2120 - متطورة",
		"4080 - عسير",
		"4081 - النايفات",
		"4130 - الباحة",
		"4280 - المملكة",
		"4070 - تهامة",
		"4071 - العربية",
		"4210 - الأبحاث والإعلام",
		"1010 - الرياض",
		"1020 - الجزيرة",
		"1030 - الإستثمار",
		"1050 - السعودي الفرنسي",
		"1060 - ساب",
		"1080 - العربي",
		"1120 - الراجحي",
		"1140 - البلاد",
		"1150 - الإنماء",
		"1180 -الأهلي",
		"1182 - أملاك",
		"1183 -  سهل",
		"8010 - التعاونية",
		"8012 - جزيرة تكافل",
		"8020 - ملاذ للتأمين",
		"8030 - ميدغلف للتأمين",
		"8040 - أليانز إس إف",
		"8050 - سلامة",
		"8060 - ولاء",
		"8070 - الدرع العربي",
		"8100 - سايكو",
		"8120 - إتحاد الخليج الأهلية",
		"8150 - أسيج",
		"8160 - التأمين العربية",
		"8170 - الاتحاد",
		"8180 - الصقر للتأمين",
		"8190 - المتحدة للتأمين",
		"8200 - الإعادة السعودية",
		"8210 - بوبا العربية",
		"8230 - تكافل الراجحي",
		"8240 - تْشب",
		"8250 - جي آي جي",
		"8260 - الخليجية العامة",
		"8270 - بروج للتأمين",
		"8280 - العالمية",
		"8300 - الوطنية",
		"8310 - أمانة للتأمين",
		"8311 - عناية",
		"8312 - الإنماء طوكيو م",
		"7200 - ام آي اس",
		"7201 - بحر العرب",
		"7202 - سلوشنز",
		"7203 - علم",
		"1810 - سيرا",
		"1820 - مجموعة الحكير",
		"1830 - وقت اللياقة",
		"4010 -دور",
		"4164 - النهدي",
		"4170 - شمس",
		"4290 - الخليج للتدريب",
		"4291 - الوطنية للتعليم",
		"4292 - عطاء",
		"6002 - هرفي للأغذية",
		"6012 - ريدان",
		"6013 - التطويرية الغذائية",
		"1831 - مهارة",
		"1832 - صدر",
		"4270 - طباعة وتغليف",
		"6004 - التموين",
		"2140 - أيان",
		"2230 - الكيميائية",
		"4002 - المواساة",
		"4004 - دله الصحية",
		"4005 - رعاية",
		"4007 - الحمادي",
		"4009 - السعودي الألماني الصحية",
		"4013 - سليمان الحبيب",
		"4014 - دار المعدات",
		"1212 - أسترا الصناعية",
		"1302 - بوان",
		"1303 - الصناعات الكهربائية",
		"2040 - الخزف السعودي",
		"2110 - الكابلات",
		"2160 - أميانتيت",
		"2320 - البابطين",
		"2360 - الفخارية",
		"2370 - مسك",
		"4140 - صادرات",
		"4141 - العمران",
		"1213 - نسيج",
		"2130 - صدق",
		"2340 - العبداللطيف",
		"4011 - لازوردي",
		"4012 - الأصيل",
		"4180 - مجموعة فتيحي",
		"2030 - المصافي",
		"2222 - أرامكو السعودية",
		"2380 - بترو رابغ",
		"2381 - الحفر العربية",
		"4030 - البحري",
		"4200 - الدريس",
		"2080 - الغاز",
		"2081 - الخريف",
		"2082 - أكوا باور",
		"5110 - كهرباء السعودية",
		"1201 - تكوين",
		"1202 - مبكو",
		"1210 - بي سي آي",
		"1211 - معادن",
		"1301 - أسلاك",
		"1304 - اليمامة للحديد",
		"1320 - أنابيب السعودية",
		"1321 - أنابيب الشرق",
		"1322 - أماك",
		"2001 - كيمانول",
		"2010 - سابك",
		"2020 -سابك للمغذيات الزراعية",
		"2060 - التصنيع",
		"2090 - جبسكو",
		"2150 - زجاج",
		"2170 - اللجين",
		"2180 - فيبكو",
		"2200 - أنابيب",
		"2210 - نماء للكيماويات",
		"2220 - معدنية",
		"2240 - الزامل للصناعة",
		"2250 - المجموعة السعودية",
		"2290 - ينساب",
		"2300 - صناعة الورق",
		"2310 - سبكيم العالمية",
		"2330 - المتقدمة",
		"2350 - كيان السعودية",
		"3001 - أسمنت حائل",
		"3002 - أسمنت نجران",
		"3003 - أسمنت المدينة",
		"3004 - أسمنت الشمالية",
		"3005 - أسمنت ام القرى",
		"3007 - الواحة",
		"3008 - الكثيري",
		"3010 - أسمنت العربية",
		"3020 -أسمنت اليمامة",
		"3030 -أسمنت السعودية",
		"3040 -أسمنت القصيم",
		"3050 -أسمنت الجنوب",
		"3060 -أسمنت ينبع",
		"3080 - أسمنت الشرقية",
		"3090 -أسمنت تبوك",
		"3091 -أسمنت الجوف",
		"2190 - سيسكو",
		"4031 - الخدمات الأرضية",
		"4040 -سابتكو",
		"4110 - باتك",
		"4260 - بدجت السعودية",
		"4261 - ذيب",
		"4001 - أسواق ع العثيم",
		"4006 - أسواق المزرعة",
		"4061 - أنعام القابضة",
		"4160 - ثمار",
		"4161 - بن داود",
		"4163 - الدواء",
		"4162 - المنجم",
		"1214 - شاكر",
		"4003 - إكسترا",
		"4008 - ساكو",
		"4050 - ساسكو",
		"4051 - باعظيم",
		"4190 - جرير",
		"4191 - أبو معطي",
		"4240 - الحكير",
		"9510 - الوطنية للبناء والتسويق",
		"9511 - سمو",
		"9512 - أسمنت الرياض",
		"9513 - حديد وطني",
		"9514 - الناقول",
		"9515 / فش فاش",
		"9516 - غاز",
		"9517 - موبي",
		"9518 - المركز الكندي الطبي",
		"9519 - بنان",
		"9520 - برغرايززر",
		"9521 - إنماء الروابي",
		"9522 - الحاسوب",
		"9523 - جروب فايف",
		"9524 - آيكتك",
		"9525 - الوسائل الصناعية",
		"9526 - جاهز",
		"9527 - ألف ميم ياء",
		"9528 - جاز",
		"9529 - رؤوم",
		"9530 - طبية",
		"9531 - العبيكان للزجاج",
		"9532 - مياه الجوف",
		"9533 - المركز الآلي",
		"9534 - عزم",
		"9535 - لدن",
		"9536 - فاديكو",
		"أمواج  - 9537",
		"2315 - صكوك صدارة",
		"4035 - صكوك البحري",
		"5014 - صكوك ساتورب",
		"5114 - صكوك كهرباء السعودية 4",
		"5127 - أداة دين متغير/ 10-1005",
		"5211 - أداة دين متغير/ 7-1001",
		"5213 - أداة دين متغير/ 10-1002",
		"5214 - أداة دين متغير/ 10-1003",
		"5216 - أداة دين متغير/ 10-1004",
		"5218 - أداة دين متغير/ 10-1005",
		"5219 - أداة دين متغير/ 10-1006",
		"5220 - أداة دين متغير/ 10-1006",
		"5221 - أداة دين متغير/ 10-1007",
		"5222 - أداة دين متغير/ 10-1008",
		"5224 - أداة دين ثابت/ 7-1001",
		"5225 - أداة دين ثابت/ 10-1001",
		"5227 - أداة دين ثابت/ 7-1002",
		"5228 - أداة دين ثابت/ 10-1002",
		"5230 - أداة دين ثابت/ 7-1003",
		"5231 - أداة دين ثابت/ 10-1003",
		"5233 - أداة دين ثابت/ 7-1004",
		"5234 - أداة دين ثابت/ 10-1004",
		"5236 - أداة دين ثابت/ 7-1005",
		"5237 - أداة دين ثابت/ 10-1005",
		"5239 - أداة دين ثابت/ 7-1006",
		"5240 - أداة دين ثابت/ 10-1006",
		"5242 - أداة دين ثابت/ 7-1008",
		"5243 - صكوك السعودية 5-07-2017",
		"5244 - صكوك السعودية 7-07-2017",
		"5246 - صكوك السعودية 5-08-2017",
		"5247 - صكوك السعودية 7-08-2017",
		"5248 - صكوك السعودية 10-08-2017",
		"5249 - صكوك السعودية 5-09-2017",
		"5250 - صكوك السعودية 7-09-2017",
		"5251 - صكوك السعودية 10-09-2017",
		"5252 - صكوك السعودية 5-10-2017",
		"5253 - صكوك السعودية 7-10-2017",
		"5262 - صكوك السعودية 5-01-2018",
		"5264 - صكوك السعودية 10-01-2018",
		"5265 - صكوك السعودية 5-04-2018",
		"5266 - صكوك السعودية 7-04-2018",
		"5267 - صكوك السعودية 10-04-2018",
		"5268 - صكوك السعودية 5-07-2018",
		"5270 - صكوك السعودية 10-07-2018",
		"5271 - صكوك السعودية 5-10-2018",
		"5272 - صكوك السعودية 7-10-2018",
		"5273 - صكوك السعودية 10-10-2018",
		"5274 -صكوك السعودية 10-01-2019",
		"5277 - صكوك السعودية 12-02-2019",
		"5279 -صكوك السعودية 15-03-2019",
		"5280 - صكوك السعودية 30-04-2019",
		"5281 - صكوك السعودية 05-10-2019",
		"5282 - صكوك السعودية 10-10-2019",
		"5283 - صكوك السعودية 07-01-2020",
		"5284 - صكوك السعودية 15-02-2020",
		"5285 -صكوك السعودية 30-03-2020",
		"5300 -صكوك السعودية 04-07-2020",
		"5301 - صكوك السعودية 08-07-2020",
		"5302 - صكوك السعودية 12-07-2020",
		"5303 - صكوك السعودية 15-07-2020",
		"5306 - صكوك السعودية 2021-01-07",
		"5308 - صكوك السعودية 2021-01-12",
		"5309 - صكوك السعودية 2021-03-10",
		"5311 - صكوك السعودية 10-06-2021",
		"5312 - صكوك السعودية 08-08-2021",
		"5313 - صكوك السعودية 15-08-2021",
		"5314 - صكوك السعودية 07-11-2021",
		"5315 - صكوك السعودية 10-11-2021",
		"5316 - صكوك السعودية 12-11-2021",
		"5318 - صكوك السعودية 08-01-2022",
		"5319 - صكوك السعودية 12-01-2022",
		"4330 - الرياض ريت",
		"4331 - الاجزيرة ريت",
		"4332 - جدوى ريت الحرمين",
		"4333 - تعليم ريت",
		"4334 - المعذر ريت",
		"4335 - مشارك ريت",
		"4336 - ملكية عقارات الخليج ريت",
		"4337 - سيكو السعودية ريت",
		"4338 - الأهلي ريت 1",
		"4339 - دراية ريت",
		"4340 - الراجحي ريت",
		"4342 - جدوى ريت السعودية",
		"4344 - سدكو كابتال ريت",
		"4345 - الإنماء ريت للتجزئة",
		"4346 - ميفك ريت",
		"4347 - بنيان ريت",
		"4348 - الخبير ريت",
		"4700 - الخبير للدخل المتنوع",
		"4701 - الخبير للنمو و الدخل",
		"9400 - يقين 30",
		"9401 - يقين للبتروكيماويات",
		"9402 - مؤشر إتش إس بي سي أم تي",
		"9403 - صكوك البلاد",
		"9404 - صكوك الإنماء",
		"9405 - البلاد للذهب",
		"9406 - صندوق البلاد MSCI",
		"NOMUC - مؤشر السوق الموازي",
		"TASI -  المؤشر العام",
		"TBNI - مؤشر البنوك",
		"TCGI- مؤشر السلع",
		"TCPI - مؤشر الخدمات",
		"TCSI - مؤشر الخدمات الاستهلاكية",
		"TDAI - مؤشر السلع طويلة الاجل",
		"TDFI - مؤشر الاستثمار",
		"TENI - مؤشر الطاقة",
		"TFBI - مؤشر انتاج الاغدية",
		"TFSI- مؤشر تجزئة الاغدية",
		"THEI - مؤشر الرعاية الصحية",
		"TISI - مؤشر التأمين",
		"TMDI - مؤشر اعلام",
		"TMTI - مؤشر المواد الأساسية",
		"TPBI - مؤشر الادوية",
		"TRLI - مؤشر تجزئة السلع الكمالي",
		"TRMI - مؤشر إدارة و تطوير العقا",
		"TRTI - مؤشر الصناديق العقارية",
		"TSSI - مؤشر التطبيقات و الخدمات",
		"TTNI - مؤشر النقل",
		"TTSI - مؤشر الاتصالات",
		"TUTI - مؤشر المرافق العامة",
		"TPBI",
		"ICE1045_I:NOMUC",
		"ICE1045_B:2315",
		"9541",
		"9541 - اكاديمية التعلم",
		"9542",
		"9542 - كير الدولية",
		"9542 - KEIR",
		"9541 - ACADEMY OF LEARNING",
		"9544",
		"9543 - نت وركرس",
		"9544 - الرعاية المستقبلية",
		"9543 - Saudi Networkers",
		"9544 - Future Care",
		"6014",
		"6014 - الامار",
		"6014 - Alamar",
		"2282",
		"9543",
		"9547",
		"9545 - الدولية",
		"9546 - نبع",
		"9547 - رواسي",
		"9545 - ALDAWLIAH",
		"9547 - Rawasi",
		"9545",
		"9546",
		"9546 - Naba",
		"9548",
		"9548 - ابيكو",
		"9548 - APICO",
		"9549",
		"9549 - البابطين الغذائية",
		"9549 - ALBABTAIN FOOD",
		"9550",
		"9550 - شور العالمية",
		"9550 - Sure Global",
	],
	ASIA: [
		"CITIC",
		"CKHutchison",
		"CNOOC",
		"Canon",
		"ChinaMobile",
		"HKBankChina",
		"HSBC",
		"Henderson",
		"Honda",
		"Ind&ComBank",
		"JpnTobacco",
		"KDDI",
		"Keyence",
		"Lenovo",
		"Makita",
		"MitsubisUFJ",
		"Mitsui",
		"Mizuho",
		"Nissan",
		"PICC",
		"SHK",
		"Seven&I",
		"ShenhuaEnrg",
		"Softbank",
		"Sony",
		"Sumitomo",
		"Tencent",
		"Toshiba",
		"Toyota",
	]
}

export default jsonData;
