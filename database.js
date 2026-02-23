const DB = {
    age: [
        {en: "18-year-old teen", zh: "18歲青春期"},
        {en: "early-20s young adult", zh: "20出頭年輕"},
        {en: "late-20s", zh: "近30歲輕熟"},
        {en: "mature 30s", zh: "30多歲成熟"},
        {en: "elegant 40s", zh: "40歲優雅中年"},
        {en: "middle-aged 50s", zh: "50歲沉穩中年"},
        {en: "elderly with wrinkled skin", zh: "歷經滄桑的老年"},
        {en: "ageless ethereal", zh: "年齡不詳的空靈"},
        {en: "immortal vampire vibe", zh: "不老吸血鬼氣質"},
        {en: "childlike innocent", zh: "充滿童真的稚氣"}
    ],
    ethnicity: [
        {en: "Asian", zh: "亞洲血統"},
        {en: "East Asian", zh: "東亞面孔"},
        {en: "Southeast Asian", zh: "東南亞風情"},
        {en: "Caucasian", zh: "歐美白人"},
        {en: "Nordic", zh: "北歐精靈系"},
        {en: "Mediterranean", zh: "地中海陽光系"},
        {en: "Hispanic/Latino", zh: "拉丁裔/熱情"},
        {en: "Black/African", zh: "非裔/黑人"},
        {en: "Mixed-race exotic", zh: "異國混血兒"},
        {en: "Middle Eastern", zh: "中東神秘風情"},
        {en: "Native American", zh: "美洲原住民"},
        {en: "Polynesian", zh: "玻里尼西亞海島系"}
    ],
    f_face: [
        {en: "sweet woman with delicate features, obsidian hair", zh: "甜美女孩，精緻五官，黑長髮"},
        {en: "sophisticated woman, elegant oval face", zh: "高冷御姐，優雅鵝蛋臉"},
        {en: "pure-lust style girl, dewy finish skin", zh: "純慾風少女，水亮肌膚"},
        {en: "doll-like face, porcelain skin, large eyes", zh: "洋娃娃精緻臉，白瓷肌"},
        {en: "cyberpunk styling, neon highlights", zh: "賽博龐克妝容，霓虹挑染"},
        {en: "freckled sun-kissed face, natural beauty", zh: "雀斑陽光臉頰，自然美"},
        {en: "sharp cheekbones, high fashion model look", zh: "高顴骨，頂級超模臉"},
        {en: "fox-eyes, seductive and sharp", zh: "狐狸眼，勾魂且銳利"},
        {en: "melancholic round face, teary eyes", zh: "憂鬱圓臉，淚眼汪汪"},
        {en: "ethereal elf features, pointed ears", zh: "空靈精靈五官，尖耳"},
        {en: "gothic dark makeup, pale skin", zh: "哥德暗黑妝容，蒼白肌膚"},
        {en: "gyaru style makeup, bright hair", zh: "日系辣妹妝容，亮色髮"},
        {en: "traditional geisha makeup", zh: "傳統藝伎妝容"},
        {en: "warrior scars, dirt on face", zh: "戰士傷疤，臉帶泥污"},
        {en: "angelic glowing face, halo effect", zh: "天使般發光臉龐，自帶光環"}
    ],
    m_face: [
        {en: "handsome young man, sharp jawline", zh: "帥氣年輕男性，下顎線清晰"},
        {en: "rugged man with light stubble, intense gaze", zh: "粗獷男性，帶有性感鬍渣"},
        {en: "k-pop idol style male, soft attractive features", zh: "K-pop 偶像風，五官俊美"},
        {en: "mature gentleman, sophisticated and calm", zh: "成熟紳士，氣質沉穩"},
        {en: "bad boy vibe, piercing eyes, messy hair", zh: "壞男孩氣質，銳利眼神，凌亂髮型"},
        {en: "scholarly look, wire-rimmed glasses", zh: "書卷氣息，戴金屬細框眼鏡"},
        {en: "androgynous beauty, delicate features", zh: "雌雄莫辨的中性美，五官精緻"},
        {en: "scarred veteran, eye patch, grizzled", zh: "傷疤老兵，戴眼罩，飽經風霜"},
        {en: "noble aristocrat, haughty expression", zh: "貴族公子，高傲冷漠的神情"},
        {en: "surfer boy, sun-bleached hair", zh: "衝浪男孩，陽光漂白的頭髮"},
        {en: "cyber-augmented face, metallic implants", zh: "賽博改造臉，金屬植入物"},
        {en: "monk with shaved head, peaceful aura", zh: "光頭僧侶，平靜祥和的氣場"},
        {en: "vampire lord, pale, crimson eyes", zh: "吸血鬼領主，蒼白，血紅雙眼"},
        {en: "street thug, facial tattoos", zh: "街頭混混，臉部刺青"},
        {en: "yakuza boss, stern and terrifying", zh: "黑幫老大，嚴厲且令人恐懼"}
    ],
    f_body: [
        {en: "slender build, prominent full bust (heavy), narrow waist", zh: "極限 S 曲線，豐滿上圍，細腰"},
        {en: "tall athletic build, long slender legs", zh: "高挑運動型，修長美腿"},
        {en: "petite and dainty, soft natural curves", zh: "嬌小玲瓏，自然柔軟曲線"},
        {en: "curvy hourglass figure, wide hips", zh: "豐滿沙漏型，寬闊臀部"},
        {en: "lean model build, graceful posture", zh: "修長模特身形，優雅儀態"},
        {en: "muscular amazon, defined biceps", zh: "肌肉女戰士，二頭肌明顯"},
        {en: "chubby soft body, approachable", zh: "微胖柔軟身形，具親和力"},
        {en: "ballet dancer physique, extremely flexible", zh: "芭蕾舞者體態，極度柔軟"},
        {en: "voluptuous pear shape, thick thighs", zh: "豐腴梨形身材，蜜大腿"},
        {en: "waif-like fragile frame, collarbones visible", zh: "骨感易碎體型，鎖骨明顯"}
    ],
    m_body: [
        {en: "lean athletic build, visible abs, toned", zh: "精瘦運動型，腹肌清晰"},
        {en: "muscular bodybuilder physique, broad chest", zh: "健美肌肉型，寬闊胸肌"},
        {en: "slim boyish frame, slender", zh: "纖瘦少年體型，修長"},
        {en: "tall and broad shoulders, imposing figure", zh: "高大寬肩，極具壓迫感的身形"},
        {en: "dad bod, slightly soft midsection", zh: "老爹身材，腹部微軟"},
        {en: "swimmer's v-taper, wide lats", zh: "游泳選手倒三角，背闊肌寬"},
        {en: "shredded martial artist, low body fat", zh: "武術家身形，極低體脂拉絲"},
        {en: "lanky and tall, long limbs", zh: "瘦高修長，四肢特別長"},
        {en: "heavyweight powerlifter, massive mass", zh: "重量級力量舉身材，巨石般"},
        {en: "average everyday build", zh: "普通路人勻稱身材"}
    ],
    f_outfit: [
        {en: "white knit backless sweater", zh: "白色針織露背毛衣"},
        {en: "high-slit silk cheongsam (Qipao)", zh: "高開衩絲綢旗袍"},
        {en: "stylish lace lingerie set", zh: "時尚蕾絲內衣"},
        {en: "oversized white shirt, no pants", zh: "超大號男友白襯衫"},
        {en: "classic Japanese sailor uniform", zh: "經典日本水手服"},
        {en: "elegant evening gown", zh: "優雅晚禮服"},
        {en: "micro bikini, string style", zh: "極小比基尼綁帶"},
        {en: "gothic lolita dress, dark lace", zh: "哥德蘿莉塔洋裝"},
        {en: "cyberpunk techwear, glowing straps", zh: "賽博龐克機能服，發光綁帶"},
        {en: "professional office suit, pencil skirt", zh: "OL職場西裝配鉛筆裙"},
        {en: "bohemian floral sundress", zh: "波西米亞碎花夏日洋裝"},
        {en: "tight latex catsuit", zh: "緊身乳膠貓女裝"},
        {en: "traditional shrine maiden outfit", zh: "傳統日式巫女服"},
        {en: "heavy knight armor, battle worn", zh: "重裝騎士鎧甲，戰損版"},
        {en: "casual hoodie and yoga pants", zh: "休閒連帽衫與瑜珈褲"}
    ],
    m_outfit: [
        {en: "tailored black suit, unbuttoned collar", zh: "剪裁合身黑西裝，領口微開"},
        {en: "casual oversized streetwear", zh: "休閒寬鬆街頭服飾"},
        {en: "tight gym tank top and sweatpants", zh: "緊身健身背心與運動褲"},
        {en: "plain white t-shirt and vintage jeans", zh: "純白T恤配復古牛仔褲"},
        {en: "cyberpunk techwear jacket", zh: "賽博龐克機能外套"},
        {en: "traditional Japanese Yukata open at chest", zh: "傳統日式浴衣，胸口微敞"},
        {en: "leather biker jacket, ripped jeans", zh: "重機皮衣，破洞牛仔褲"},
        {en: "military tactical gear, body armor", zh: "軍事戰術裝備，防彈衣"},
        {en: "tuxedo with bowtie, james bond style", zh: "燕尾服與領結，龐德特務風"},
        {en: "medieval rogue cloak, leather armor", zh: "中世紀盜賊斗篷，皮甲"},
        {en: "doctor's white coat, stethoscope", zh: "醫生白袍，掛著聽診器"},
        {en: "swimming trunks, bare chest", zh: "游泳短褲，赤裸上身"},
        {en: "construction worker overalls, dirty", zh: "建築工人吊帶褲，沾滿油污"},
        {en: "wizard robes, glowing runes", zh: "巫師長袍，發光符文"},
        {en: "hip-hop style, gold chains, baggy pants", zh: "嘻哈風格，金項鍊，垮褲"}
    ],
    pose: [
        {en: "standing confidently, looking at camera", zh: "自信站立，直視鏡頭"},
        {en: "leaning against a wall, relaxed", zh: "隨性地靠在牆上"},
        {en: "sitting elegantly, legs crossed", zh: "優雅坐姿，雙腿交叉"},
        {en: "walking towards camera, motion blur", zh: "迎面走來，帶有動態感"},
        {en: "looking back over shoulder", zh: "微微回眸，眼神深邃"},
        {en: "squatting on heels, casual", zh: "帥氣地蹲著，展現隨性"},
        {en: "lying on back, looking up", zh: "平躺姿態，仰望鏡頭"},
        {en: "fixing hair with both hands", zh: "雙手整理頭髮，露出頸部"},
        {en: "holding a cup, looking thoughtfully", zh: "手持杯子，呈現沈思"},
        {en: "jumping mid-air, dynamic action", zh: "半空中跳躍，高動態"},
        {en: "hands in pockets, leaning back", zh: "雙手插口袋，微後仰"},
        {en: "kneeling down, pleading look", zh: "雙膝跪地，懇求的姿態"},
        {en: "stretching arms, yawning", zh: "伸懶腰打哈欠"},
        {en: "dancing gracefully", zh: "優雅地跳舞"},
        {en: "drawing a weapon, combat stance", zh: "拔出武器，戰鬥準備姿態"},
        {en: "covering face with one hand", zh: "單手遮住半張臉"},
        {en: "adjusting glasses, smart vibe", zh: "推眼鏡，展現知性"},
        {en: "pointing directly at the viewer", zh: "手指直指著觀看者"},
        {en: "hugging knees, curled up", zh: "蜷縮身體，抱著膝蓋"},
        {en: "running away, looking back in fear", zh: "向後奔跑並驚恐回頭"}
    ],
    exp: [
        {en: "gentle smile, soft eye contact", zh: "柔和微笑"},
        {en: "serious cold gaze, intimidating", zh: "高冷嚴肅"},
        {en: "playful wink, mischievous", zh: "俏皮眨眼"},
        {en: "melancholic looking away", zh: "憂鬱遠眺"},
        {en: "seductive bedroom eyes", zh: "充滿誘惑的眼神"},
        {en: "laughing out loud, pure joy", zh: "開懷大笑，純粹的喜悅"},
        {en: "pouting slightly, cute angry", zh: "微微嘟嘴，可愛的生氣"},
        {en: "surprised expression, wide eyes", zh: "驚訝睜大雙眼"},
        {en: "crying softly, tears on cheek", zh: "默默流淚，臉頰帶淚"},
        {en: "roaring in anger, fierce", zh: "憤怒咆哮，兇狠"},
        {en: "smirking arrogantly", zh: "高傲的冷笑"},
        {en: "bored and indifferent", zh: "無聊且漠不關心"},
        {en: "exhausted, heavy breathing", zh: "精疲力竭，大口喘氣"},
        {en: "deep in thought, focused", zh: "眉頭深鎖，專注思考"},
        {en: "blushing deeply, embarrassed", zh: "滿臉通紅，極度害羞"}
    ],
    // --- Phase 1: 保留原本的場景、光影、相機 (將在 Phase 2 大幅擴充) ---
    scene: [
        {en: "luxury marble bathroom, steam haze", zh: "奢華大理石浴室水氣繚繞"}, {en: "Taipei Ximending at night, neon signs", zh: "台北西門町霓虹夜景"},
        {en: "misty forest, god rays, mossy floor", zh: "晨霧森林與耶穌光"}, {en: "messy bedroom, white sheets, morning", zh: "清晨慵懶的白色臥室"},
        {en: "tropical beach, golden sunset", zh: "熱帶海灘夕陽餘暉"}, {en: "cyberpunk street, dense signage", zh: "賽博龐克霓虹街頭"}
    ],
    light: [
        {en: "Tyndall effect (God rays), cinematic", zh: "丁達爾效應(耶穌光)"}, {en: "Rembrandt lighting, dramatic side light", zh: "倫勃朗戲劇化側光"},
        {en: "Soft neon lighting, teal and orange", zh: "柔和城市霓虹(青橙調)"}, {en: "Dappled sunlight through leaves", zh: "樹蔭斑駁光影"},
        {en: "Strobe lighting, high fashion", zh: "棚拍專業閃光燈"}
    ],
    camera: [
        {en: "Sony A1, 85mm f/1.2 GM, sharp focus", zh: "Sony A1 (85mm GM)"}, {en: "Leica M11, 35mm Summilux, grainy", zh: "Leica M11 (35mm底片感)"},
        {en: "Hasselblad X2D, medium format detail", zh: "哈蘇中片幅 (極致細節)"}, {en: "GoPro wide view, action cam style", zh: "GoPro 運動廣角"}
    ]
};
// --- Phase 2: 大幅擴充全局場景、光影與相機 ---

DB.scene = [
    // 🌇 日間/戶外場景
    {en: "sunny balcony, laundry drying, dappled light", zh: "[日間] 陽光陽台，晾曬衣物的生活感"},
    {en: "school corridor, cherry blossoms outside, morning", zh: "[日間] 校園走廊，窗外櫻花漫天"},
    {en: "school rooftop, city view, blue sky, midday", zh: "[日間] 高校屋頂天台，俯瞰城市景觀"},
    {en: "tropical beach, clear blue water, bright sun", zh: "[日間] 熱帶海灘，清澈海水與烈日"},
    {en: "sunflower field, endless yellow, bright day", zh: "[日間] 陽光燦爛的無盡向日葵花海"},
    {en: "bustling Tokyo street crossing, daytime, crowds", zh: "[日間] 繁忙的東京十字路口，人潮洶湧"},
    {en: "snowy mountain peak, bright reflection", zh: "[日間] 白雪皚皚的山頂，強烈反光"},
    {en: "quiet European cafe outdoor seating, morning", zh: "[日間] 寧靜的歐洲露天咖啡座"},
    {en: "abandoned amusement park, overgrown, bright sky", zh: "[日間] 廢棄遊樂園，雜草叢生"},
    {en: "luxury yacht deck, ocean breeze, noon", zh: "[日間] 豪華遊艇甲板，海風吹拂"},
    
    // 🌅 黃昏/暮光場景
    {en: "nostalgic classroom, desks, sunset light", zh: "[黃昏] 懷舊教室，課桌椅，夕陽斜射"},
    {en: "tropical beach, golden sunset, palm tree silhouette", zh: "[黃昏] 熱帶海灘，金黃夕陽餘暉"},
    {en: "city skyline from a skyscraper window, golden hour", zh: "[黃昏] 摩天大樓窗外的城市天際線"},
    {en: "abandoned church, golden god rays through stained glass", zh: "[黃昏] 廢棄教堂，夕陽透過彩繪玻璃"},
    {en: "train window view, passing countryside, sunset", zh: "[黃昏] 火車窗景，飛馳的鄉間夕陽"},
    {en: "rooftop parking lot, warm evening glow", zh: "[黃昏] 屋頂停車場，溫暖的傍晚微光"},
    
    // 🌃 夜間/霓虹/暗黑場景
    {en: "Taipei Ximending at night, neon signs, wet street", zh: "[夜間] 台北西門町夜景，霓虹與微濕街道"},
    {en: "cyberpunk street, dense signage, holographic ads", zh: "[夜間] 賽博龐克街頭，全息投影廣告"},
    {en: "subway station platform, empty, fluorescent lights", zh: "[夜間] 空曠的捷運月台，冷色調螢光燈"},
    {en: "late night convenience store, glowing from inside", zh: "[夜間] 深夜便利商店門口，內部透出明亮光線"},
    {en: "dark alleyway, single flickering street lamp", zh: "[夜間] 黑暗小巷，唯一閃爍的路燈"},
    {en: "high-end nightclub, velvet VIP booth, dim lights", zh: "[夜間] 高級夜店，絲絨 VIP 包廂，昏暗燈光"},
    {en: "camping under the milky way, bonfire", zh: "[夜間] 星空銀河下的露營地，篝火燃燒"},
    
    // 🏠 室內/私密空間
    {en: "luxury marble bathroom, bathtub, steam haze", zh: "[室內] 奢華大理石浴室，浴缸水氣繚繞"},
    {en: "messy bedroom, white sheets, morning light", zh: "[室內] 剛睡醒的慵懶臥室，白色床單"},
    {en: "classic European mansion, velvet curtains, library", zh: "[室內] 古典歐式豪宅圖書館，絲絨窗簾"},
    {en: "traditional tea house, wooden floor, zen garden", zh: "[室內] 日式禪意茶室，榻榻米與庭院"},
    {en: "minimalist photo studio, seamless grey backdrop", zh: "[室內] 極簡攝影棚，無縫純灰背景"},
    {en: "industrial warehouse, concrete floor, chains", zh: "[室內] 工業風廢墟倉庫，水泥地與鐵鍊"},
    {en: "modern gym, mirrors, bright highlights", zh: "[室內] 活力現代健身房，滿面鏡子"},
    
    // 🌌 奇幻/超現實場景 (非真實)
    {en: "floating islands in the sky, waterfalls pouring into abyss", zh: "[奇幻] 天空中的浮島，瀑布流入深淵"},
    {en: "underwater ruined city, glowing jellyfish, deep blue", zh: "[奇幻] 水下沉沒城市，發光水母，深邃湛藍"},
    {en: "crystal cavern, giant glowing amethysts, magical", zh: "[奇幻] 水晶洞穴，巨大的發光紫水晶"},
    {en: "cybernetic matrix space, digital grid lines, green code", zh: "[奇幻] 賽博矩陣空間，數位網格，綠色代碼"},
    {en: "ethereal cloud palace, white marble, golden accents", zh: "[奇幻] 空靈雲端宮殿，白大理石與黃金點綴"},
    {en: "surreal mirror dimension, endless reflections", zh: "[奇幻] 超現實鏡面維度，無盡的倒影"},
    {en: "apocalyptic wasteland, red sky, shattered moon", zh: "[奇幻] 末日廢土，血紅天空，破碎的月亮"},
    {en: "dreamscape with giant floating clocks, Dali style", zh: "[奇幻] 達利風格夢境，巨大的漂浮時鐘"},
    {en: "neon enchanted forest, bio-luminescent plants", zh: "[奇幻] 霓虹魔法森林，生物發光植物"},
    {en: "stairway to the stars, galaxy background, cosmic dust", zh: "[奇幻] 通往繁星的階梯，銀河背景與宇宙塵埃"}
];

DB.light = [
    {en: "Tyndall effect (God rays), cinematic volumetric light", zh: "耶穌光 (丁達爾效應)，電影級體積光"},
    {en: "Rembrandt lighting, dramatic side light, deep contrast", zh: "倫勃朗式照明，戲劇化側光與深邃對比"},
    {en: "Soft neon lighting, teal and orange cinematic grade", zh: "柔和城市霓虹，青橙電影調色"},
    {en: "Dappled sunlight through leaves, soft bokeh", zh: "樹蔭斑駁光影，柔和散景"},
    {en: "Strobe lighting, high fashion, sharp shadows", zh: "棚拍專業閃光燈，銳利時尚陰影"},
    {en: "Golden hour backlight, warm lens flare", zh: "日落金黃逆光，溫暖鏡頭光暈"},
    {en: "Direct camera flash, hard raw magazine style", zh: "相機直射閃光燈，硬核雜誌感"},
    {en: "Moonlight, cold blue tones, deep dark shadows", zh: "銀色月光，冷藍調性，深邃陰影"},
    {en: "Rainbow prism light refraction, spectral colors", zh: "彩虹稜鏡折射，光譜幻彩色澤"},
    {en: "Cinematic low key, mysterious dark ambiance", zh: "電影感暗調，充滿神秘的黑暗氛圍"},
    {en: "Cyberpunk pink and cyan neon backlight rim light", zh: "賽博龐克粉藍霓虹逆光 (邊緣光)"},
    {en: "Candlelight glow, warm, intimate, flickering", zh: "溫馨柔燭光，溫暖且閃爍"},
    {en: "Stage spotlight, dramatic top-down illumination", zh: "舞台聚光燈，戲劇化的頂部照明"},
    {en: "Overhead hard light, edgy fashion look", zh: "頂部硬光，尖銳前衛的時尚感"},
    {en: "Sunset silhouettes against orange sky", zh: "夕陽大剪影，強烈背光"},
    {en: "Underwater shimmering light, caustic refractions", zh: "水下粼粼波光，波動的折射光斑"},
    {en: "Morning fog diffusion, soft white shadowless", zh: "晨霧擴散光，柔和且無明顯陰影"},
    {en: "Volumetric steam light, dewy atmosphere", zh: "蒸氣體積光，濕潤的水汽氛圍"},
    {en: "Glitch light effect, chromatic aberration", zh: "數位故障光效，色差邊緣"},
    {en: "Golden sparkles, magical floating bokeh dust", zh: "夢幻金粉光，漂浮的魔法散景塵埃"}
];

DB.camera = [
    {en: "Sony A1, 85mm f/1.2 GM, sharp eyes, creamy bokeh", zh: "Sony A1 旗艦機，85mm GM 鏡頭 (人像之王)"},
    {en: "Leica M11, 35mm Summilux, grainy film look", zh: "Leica M11，35mm 帶底片顆粒 (人文紀實)"},
    {en: "Canon R5, 50mm f/1.2, rich colors", zh: "Canon R5，50mm (標準視角奶油散景)"},
    {en: "Hasselblad X2D, medium format, extreme detail", zh: "哈蘇中片幅，極致像素細節 (商業級)"},
    {en: "Close-up macro lens, catching every skin pore", zh: "微距特寫鏡頭，捕捉極致毛孔細節"},
    {en: "Anamorphic lens, cinematic wide aspect ratio", zh: "變形寬銀幕鏡頭，電影寬屏感"},
    {en: "Fisheye lens, distorted perspective, dramatic", zh: "魚眼短焦鏡頭，誇張的透視扭曲"},
    {en: "Disposable camera, 90s retro look, flash", zh: "復古即可拍相機，90年代閃光燈質感"},
    {en: "Polaroid film style, vintage faded colors, border", zh: "拍立得風格，帶有褪色復古色調"},
    {en: "GoPro ultra-wide view, action cam style", zh: "GoPro 超廣角，運動相機第一人稱視角"},
    {en: "Drone aerial shot, top-down perspective", zh: "無人機空拍，由上往下的上帝視角"},
    {en: "Security CCTV camera footage, lo-fi", zh: "監視器畫面視角，低畫質真實感"},
    {en: "200mm telephoto lens, compressed background", zh: "200mm 長焦大砲，極度壓縮背景空間"},
    {en: "Infrared thermal camera, heat signatures", zh: "紅外線熱像儀視角，熱能顯影風格"},
    {en: "Microscopic electron microscope view", zh: "電子顯微鏡視角，細胞級別的超微觀"}
];

// 如果是在瀏覽器環境中引入，掛載到 window，方便 HTML 調用
if (typeof window !== 'undefined') {
    window.DB = DB;
}
