// ==================== BUSLOOT MAIN SCRIPT (PITY SYSTEM + CSGO STYLE) ====================

// ---------- STICKER DATABASE ----------
const STICKERS_DB = {
  common: [
    { id: "ve_thang_xanh", name: "🟢 Vé tháng xanh", desc: "Một tấm vé, vạn chuyến đi – giảm kẹt xe, tăng niềm vui.", icon: "🟢", title: "Vé tháng" },
    { id: "the_sinh_vien", name: "🎫 Thẻ sinh viên", desc: "Vừa qua cổng soát vé, vừa ghi điểm “công dân xanh”.", icon: "🎫", title: "Thẻ SV" },
    { id: "banh_quy_sang", name: "🍪 Bánh quy sáng", desc: "Năng lượng nhanh – gọn – lành, không vụn bánh rơi ra ghế.", icon: "🍪", title: "Bánh quy" },
    { id: "nhanh_bac_ha", name: "🌿 Nhánh bạc hà", desc: "Hương thơm thanh mát, át cả mùi điều hòa cũ kỹ.", icon: "🌿", title: "Bạc hà" },
    { id: "may_man_nho", name: "🍀 May mắn nhỏ", desc: "Nhặt được trên ghế chờ – có thể là điềm báo một ngày suôn sẻ.", icon: "🍀", title: "May mắn" },
    { id: "mam_xanh", name: "🌱 Mầm xanh", desc: "Hành trình nào cũng bắt đầu từ những điều bé nhỏ.", icon: "🌱", title: "Mầm" },
    { id: "o_banh_mi", name: "🍞 Ổ bánh mì", desc: "Bữa sáng “quốc dân” cho hành khách vội giờ cao điểm.", icon: "🍞", title: "Bánh mì" },
    { id: "ca_phe_phin", name: "☕ Cà phê phin", desc: "Tỉnh táo để không ngủ quên trạm – đậm chất phố.", icon: "☕", title: "Cà phê" },
    { id: "qua_tao_xanh", name: "🍎 Quả táo xanh", desc: "Ăn một quả, đi thêm ba chặng.", icon: "🍎", title: "Táo xanh" },
    { id: "ly_chanh_leo", name: "🍋 Ly chanh leo", desc: "Chua chua ngọt ngọt, đúng điệu hè Hà Nội.", icon: "🍋", title: "Chanh leo" },
    { id: "banh_mi_kep", name: "🥪 Bánh mì kẹp", desc: "Bữa trưa tinh gọn, không sợ rớt đồ khi xe phanh gấp.", icon: "🥪", title: "Bánh kẹp" },
    { id: "banh_vong", name: "🍩 Bánh vòng", desc: "Vòng tròn may mắn – nhai vui tai, quên mệt.", icon: "🍩", title: "Bánh vòng" },
    { id: "hu_mat_ong", name: "🍯 Hũ mật ong", desc: "Ngọt như tấm lòng người Hà Nội nhường ghế cho cụ già.", icon: "🍯", title: "Mật ong" },
    { id: "mieng_dua_hau", name: "🍉 Miếng dưa hấu", desc: "Đỏ lòng, mát dạ – giải nhiệt sau cơn nắng 40°C.", icon: "🍉", title: "Dưa hấu" },
    { id: "qua_quyt_vang", name: "🍊 Quả quýt vàng", desc: "Tặng bạn cùng ghế để phá băng… và cùng ăn.", icon: "🍊", title: "Quýt" },
    { id: "qua_le_thom", name: "🍐 Quả lê thơm", desc: "Thơm dịu, gợi nhớ mùa thu Hà Nội không khói bụi.", icon: "🍐", title: "Quả lê" },
    { id: "kiwi_xanh", name: "🥝 Trái kiwi xanh", desc: "Nhỏ nhưng “có võ” – giàu vitamin, ít calo.", icon: "🥝", title: "Kiwi" },
    { id: "doi_cherry", name: "🍒 Đôi cherry", desc: "Ghép cặp hoàn hảo – như đôi bạn cùng chuyến.", icon: "🍒", title: "Cherry" },
    { id: "banh_vong_me", name: "🥯 Bánh vòng mè", desc: "Bánh rán tuổi thơ, nay xuất hiện trên xe buýt.", icon: "🥯", title: "Vòng mè" },
    { id: "hop_sua_tuoi", name: "🧃 Hộp sữa tươi", desc: "Uống hết nhớ bỏ vỏ vào thùng rác nhé!", icon: "🧃", title: "Sữa" },
    { id: "goi_lac_rang", name: "🥜 Gói lạc rang", desc: "Nhấm nháp giòn tan, đừng để rơi vãi xuống sàn.", icon: "🥜", title: "Lạc rang" },
    { id: "qua_chuoi_vang", name: "🍌 Quả chuối vàng", desc: "Dễ ăn, dễ mang, năng lượng bền vững.", icon: "🍌", title: "Chuối" }
  ],
  uncommon: [
    { id: "quet_the_thong_minh", name: "📱 Quẹt thẻ thông minh", desc: "“Bíp” một cái – thanh toán xong, khỏi lục ví.", icon: "📱", title: "Quẹt thẻ" },
    { id: "tai_nghe_khong_day", name: "🎧 Tai nghe không dây", desc: "Cách ly ồn ào, chìm đắm trong thế giới riêng.", icon: "🎧", title: "Tai nghe" },
    { id: "ba_lo_xanh", name: "🎒 Ba lô xanh", desc: "Đồng hành từ giảng đường đến bến xe, bền bỉ như sinh viên.", icon: "🎒", title: "Ba lô" },
    { id: "mu_luoi_trai", name: "🧢 Mũ lưỡi trai", desc: "Che nắng chuẩn, tạo dáng “chất” cho hành khách.", icon: "🧢", title: "Mũ" },
    { id: "kinh_ram_hn", name: "🕶️ Kính râm HN", desc: "Nhìn phố phường qua lăng kính xanh – ngầu và bảo vệ mắt.", icon: "🕶️", title: "Kính râm" },
    { id: "pin_du_phong", name: "🔋 Pin dự phòng", desc: "“Sạc” tinh thần lẫn điện thoại, không sợ hết pin giữa đường.", icon: "🔋", title: "Pin" },
    { id: "chia_khoa_nha", name: "🔑 Chìa khóa nhà", desc: "Nhắc bạn rằng cuối ngày vẫn có một mái ấm chờ.", icon: "🔑", title: "Chìa khóa" },
    { id: "so_tay_hanh_trinh", name: "📘 Sổ tay hành trình", desc: "Ghi lại những câu chuyện thú vị trên từng tuyến bus.", icon: "📘", title: "Sổ tay" },
    { id: "but_bi_xanh", name: "🖊️ Bút bi xanh", desc: "Viết tiếp ước mơ, ngay cả khi xe hơi xóc.", icon: "🖊️", title: "Bút bi" },
    { id: "kep_giay_tai_che", name: "📎 Kẹp giấy tái chế", desc: "Gọn gàng, xanh – giữ mọi thứ ngăn nắp như lịch trình xe.", icon: "📎", title: "Kẹp giấy" },
    { id: "ghim_cai_ao", name: "🧷 Ghim cài áo", desc: "Phụ kiện nhỏ xinh, gắn kết phong cách sinh viên.", icon: "🧷", title: "Ghim" },
    { id: "gau_bong_nho", name: "🧸 Gấu bông nhỏ", desc: "Người bạn trẻ em bỏ quên – giờ là linh vật của tuyến.", icon: "🧸", title: "Gấu bông" },
    { id: "cuong_ve_cu", name: "🎟️ Cuống vé cũ", desc: "Lưu giữ kỷ niệm một lần lỡ chuyến… và bài học đúng giờ.", icon: "🎟️", title: "Cuống vé" },
    { id: "anh_pho_co", name: "📷 Ảnh phố cổ", desc: "Khoảnh khắc Hà Nội nhẹ nhàng, không filter.", icon: "📷", title: "Ảnh phố" },
    { id: "dong_ho_bam_gio", name: "⌚ Đồng hồ bấm giờ", desc: "Đếm ngược thời gian đến trạm – đừng để lỡ hẹn!", icon: "⌚", title: "Đồng hồ" },
    { id: "dia_nhac_xanh", name: "💿 Đĩa nhạc xanh", desc: "Playlist “chill” dành riêng cho dân nghiền bus.", icon: "💿", title: "Đĩa nhạc" }
  ],
  rare: [
    { id: "rong_thang_long", name: "🐉 Rồng bay Thăng Long", desc: "Bay trên bầu trời không khói bụi – tượng đài giao thông xanh.", icon: "🐉", title: "Rồng Thăng Long" },
    { id: "xe_buyt_dem", name: "🌙 Xe buýt đêm", desc: "Lặng lẽ lướt qua phố vắng, như một câu thơ không vần.", icon: "🌙", title: "Xe đêm" },
    { id: "vuong_mien_xanh", name: "👑 Vương miện xanh", desc: "Đội lên đầu hành khách “vip” – đi bus đều như cơm bữa.", icon: "👑", title: "Vương miện" },
    { id: "ten_lua_metro", name: "🚀 Tên lửa metro", desc: "Lao vun vút – tương lai giao thông không tắc đường.", icon: "🚀", title: "Tên lửa" },
    { id: "khien_go", name: "🛡️ Khiên gỗ", desc: "Chắn khói bụi, bảo vệ lá phổi thành phố.", icon: "🛡️", title: "Khiên" },
    { id: "set_xanh", name: "⚡ Sét xanh", desc: "Nguồn năng lượng tái tạo thắp sáng mọi chặng.", icon: "⚡", title: "Sét" },
    { id: "ngon_lua_xanh", name: "🔥 Ngọn lửa xanh", desc: "Cháy mãi đam mê đi bus, không ngại nắng mưa.", icon: "🔥", title: "Ngọn lửa" },
    { id: "ngoi_sao", name: "🌟 Ngôi sao dẫn đường", desc: "Luôn chỉ lối về nhà, dù bạn xuống trạm nào.", icon: "🌟", title: "Ngôi sao" },
    { id: "la_ban_hn", name: "🧭 La bàn Hà Nội", desc: "Xoay đâu cũng thấy một tuyến bus – không lo lạc.", icon: "🧭", title: "La bàn" },
    { id: "mat_phong_thuy", name: "🧿 Mắt phong thủy", desc: "Canh giữ bình an, xua tan rủi ro trên đường.", icon: "🧿", title: "Mắt phong thủy" },
    { id: "chia_khoa_cong_thanh", name: "🗝️ Chìa khóa cổng thành", desc: "Mở ra 36 phố phường bằng một tấm vé tháng.", icon: "🗝️", title: "Chìa khóa" },
    { id: "hoa_sua", name: "🏵️ Hoa sữa mùa thu", desc: "Hương thơm gây “nghiện” nhẹ, nhưng vẫn dễ chịu.", icon: "🏵️", title: "Hoa sữa" }
  ],
  epic: [
    { id: "cup_xanh_thanh_pho", name: "🏆 Cúp xanh thành phố", desc: "Giải thưởng cho “cao thủ” chưa bao giờ bỏ chuyến.", icon: "🏆", title: "Cúp" },
    { id: "phuong_hoang_lua_xanh", name: "🔥 Phượng hoàng lửa xanh", desc: "Hồi sinh từ năng lượng mặt trời – rực rỡ và bất tử.", icon: "🔥", title: "Phượng hoàng" },
    { id: "hiep_si_xanh", name: "🛡️ Hiệp sĩ xanh", desc: "Chiến đấu vì không khí trong lành – không cần áo giáp.", icon: "🛡️", title: "Hiệp sĩ" },
    { id: "rong_xanh_co_loa", name: "🐲 Rồng xanh Cổ Loa", desc: "Thức tỉnh huyền thoại, phun hơi mát thay vì khói.", icon: "🐲", title: "Rồng Cổ Loa" },
    { id: "cau_vong_sau_mua", name: "🌈 Cầu vồng sau mưa", desc: "Xuất hiện sau cơn mưa rào, báo hiệu trời quang.", icon: "🌈", title: "Cầu vồng" },
    { id: "huan_chuong_xanh", name: "🎖️ Huân chương xanh", desc: "Đeo lên ngực áo – tự hào là “chiến binh” bus 30 ngày.", icon: "🎖️", title: "Huân chương" },
    { id: "bong_den_nang_luong", name: "💡 Bóng đèn năng lượng", desc: "Ý tưởng sáng bừng, soi đường cho giao thông bền vững.", icon: "💡", title: "Bóng đèn" },
    { id: "phao_hoa_xanh", name: "🎆 Pháo hoa xanh", desc: "Nổ bung sắc màu, chúc mừng một chặng đường mới.", icon: "🎆", title: "Pháo hoa" },
    { id: "dai_ngan_ha_bus", name: "💫 Dải ngân hà bus", desc: "Hệ thống tuyến xe lấp lánh, đẹp như trời sao.", icon: "💫", title: "Dải ngân hà" },
    { id: "ve_tinh_xanh", name: "🛰️ Vệ tinh xanh", desc: "Quan sát thành phố từ trên cao – không thấy tắc đường.", icon: "🛰️", title: "Vệ tinh" }
  ],
  legendary: [
    { id: "vua_xe_buyt_hn", name: "👑 Vua xe buýt Hà Nội", desc: "Cai trị mọi tuyến đường, không ngán ngại giờ cao điểm.", icon: "👑", title: "Vua bus" },
    { id: "long_mach_giao_thong", name: "🐉 Long mạch giao thông", desc: "Dòng chảy linh thiêng kết nối mọi miền không tắc nghẽn.", icon: "🐉", title: "Long mạch" },
    { id: "thien_ma_xanh", name: "🦄 Thiên mã xanh", desc: "Ngựa thần chạy bằng năng lượng mặt trời – tốc độ và thuần khiết.", icon: "🦄", title: "Thiên mã" },
    { id: "co_cu_do_sao_vang", name: "🚩 Cờ đỏ sao vàng", desc: "Bay trên mỗi chuyến bus, nhắc nhở lòng tự hào dân tộc.", icon: "🚩", title: "Cờ" },
    { id: "duoc_xanh", name: "🎇 Đuốc xanh", desc: "Ngọn đuốc dẫn lối, truyền cảm hứng sống xanh.", icon: "🎇", title: "Đuốc" },
    { id: "guom_than", name: "🗡️ Gươm thần", desc: "Sắc bén như ý chí bảo vệ môi trường của người trẻ.", icon: "🗡️", title: "Gươm" }
  ],
  mythic: [
    { id: "tinh_tu_hn", name: "🌟 Tinh tú Hà Nội", desc: "Ánh sáng vĩnh cửu, soi đường cho mọi chuyến xe đêm.", icon: "🌟", title: "Tinh tú" },
    { id: "anh_sang_xanh", name: "✨ Ánh sáng xanh", desc: "Tinh hoa năng lượng sạch – đẹp đến mức khó tin.", icon: "✨", title: "Ánh sáng" },
    { id: "am_duong", name: "☯️ Âm dương giao hòa", desc: "Cân bằng giữa phát triển và thiên nhiên – như xe buýt và cây xanh.", icon: "☯️", title: "Âm dương" }
  ],
  secret: [
    { id: "so_tay_co", name: "📕 Sổ tay cổ", desc: "Bí kíp đi bus “bá đạo” – ghi chép từ thời bao cấp.", icon: "📕", title: "Sổ tay cổ" },
    { id: "cuon_giay_rong", name: "📜 Cuộn giấy rồng", desc: "Sắc phong của vua Lý: “Ngươi hãy đi bus, đừng đi xe máy”.", icon: "📜", title: "Cuộn giấy" }
  ],
  impossible: [
    { id: "xuong_rong_huyen_thoai", name: "💀 Xương rồng huyền thoại", desc: "Sinh vật tối thượng – canh giữ những tuyến bus… không bao giờ tắc.", icon: "💀", title: "Xương rồng" }
  ]
};

const BASE_RARITY_CONFIG = [
  { name: "common", chance: 55, display: "COMMON", color: "#6c757d", glow: "none" },
  { name: "uncommon", chance: 25, display: "UNCOMMON", color: "#28a745", glow: "none" },
  { name: "rare", chance: 12, display: "RARE", color: "#007bff", glow: "0 0 10px #007bff" },
  { name: "epic", chance: 5, display: "EPIC", color: "#9b59b6", glow: "0 0 15px #9b59b6" },
  { name: "legendary", chance: 2, display: "LEGENDARY", color: "#f39c12", glow: "0 0 20px #f39c12" },
  { name: "mythic", chance: 0.8, display: "MYTHIC", color: "#e84393", glow: "0 0 25px #e84393" },
  { name: "secret", chance: 0.19, display: "SECRET", color: "#f1c40f", glow: "0 0 30px #f1c40f" }
];

const IMPOSSIBLE_CONFIG = {
  name: "impossible",
  chance: 0.001,
  display: "✦ IMPOSSIBLE ✦",
  color: "#ff0066",
  glow: "0 0 40px #ff0066, 0 0 60px #ff0066"
};

// ---------- GLOBAL STATE ----------
let currentUser = null;
let users = JSON.parse(localStorage.getItem("busloot_users")) || {};
let inventory = {};
let rideCount = 0;
let streak = 0;
let rideInProgress = false;
let rideTimer = null;
let availableOpens = 0;
let consecutiveOpensWithoutImpossible = 0;
let pityRateActive = false;

// Tạo user demo
if (Object.keys(users).length === 0) {
  users["123"] = {
    password: "123",
    school: "FTU",
    inventory: {},
    rideCount: 5,
    streak: 5,
    availableOpens: 3,
    consecutiveOpensWithoutImpossible: 0
  };
  users["admin"] = {
    password: "admin",
    school: "HUST",
    inventory: {},
    rideCount: 3,
    streak: 3,
    availableOpens: 2,
    consecutiveOpensWithoutImpossible: 0
  };
  localStorage.setItem("busloot_users", JSON.stringify(users));
}

function showToast(message, duration = 3000) {
  const toast = document.getElementById("toast");
  if (!toast) return;
  toast.textContent = message;
  toast.classList.remove("hidden");
  setTimeout(() => {
    if (toast) toast.classList.add("hidden");
  }, duration);
}

function rollRarity() {
  if (pityRateActive) {
    const isImpossible = Math.random() * 100 < 50;
    if (isImpossible) {
      consecutiveOpensWithoutImpossible = 0;
      pityRateActive = false;
      return "impossible";
    } else {
      consecutiveOpensWithoutImpossible++;
      if (consecutiveOpensWithoutImpossible >= 10) {
        pityRateActive = true;
      }
      return rollNormalRarity();
    }
  }
  
  const rand = Math.random() * 100;
  if (rand < IMPOSSIBLE_CONFIG.chance) {
    consecutiveOpensWithoutImpossible = 0;
    pityRateActive = false;
    return "impossible";
  }
  
  let cumulative = 0;
  for (const rarity of BASE_RARITY_CONFIG) {
    cumulative += rarity.chance;
    if (rand < cumulative) {
      consecutiveOpensWithoutImpossible++;
      if (consecutiveOpensWithoutImpossible >= 10) {
        pityRateActive = true;
        showToast("⚠️ PITY SYSTEM ACTIVATED! Lần sau 50% ra IMPOSSIBLE! ⚠️", 3000);
      }
      return rarity.name;
    }
  }
  
  consecutiveOpensWithoutImpossible++;
  if (consecutiveOpensWithoutImpossible >= 10) {
    pityRateActive = true;
    showToast("⚠️ PITY SYSTEM ACTIVATED! Lần sau 50% ra IMPOSSIBLE! ⚠️", 3000);
  }
  return "common";
}

function rollNormalRarity() {
  const rand = Math.random() * 100;
  let cumulative = 0;
  for (const rarity of BASE_RARITY_CONFIG) {
    cumulative += rarity.chance;
    if (rand < cumulative) return rarity.name;
  }
  return "common";
}

function getRandomSticker(rarity) {
  const stickers = STICKERS_DB[rarity];
  if (!stickers || stickers.length === 0) {
    return { id: "unknown", name: "❓ Bí ẩn", desc: "???", icon: "❓", title: "???", rarity: rarity };
  }
  const sticker = stickers[Math.floor(Math.random() * stickers.length)];
  return { ...sticker, rarity: rarity };
}

function getRarityConfig(rarity) {
  if (rarity === "impossible") return IMPOSSIBLE_CONFIG;
  return BASE_RARITY_CONFIG.find(r => r.name === rarity);
}

function saveData() {
  if (currentUser && users[currentUser]) {
    users[currentUser].inventory = inventory;
    users[currentUser].rideCount = rideCount;
    users[currentUser].streak = streak;
    users[currentUser].availableOpens = availableOpens;
    users[currentUser].consecutiveOpensWithoutImpossible = consecutiveOpensWithoutImpossible;
    localStorage.setItem("busloot_users", JSON.stringify(users));
  }
}

function loadUserData(username) {
  const userData = users[username];
  if (userData) {
    inventory = userData.inventory || {};
    rideCount = userData.rideCount || 0;
    streak = userData.streak || 0;
    availableOpens = userData.availableOpens || 0;
    consecutiveOpensWithoutImpossible = userData.consecutiveOpensWithoutImpossible || 0;
    pityRateActive = false;
  } else {
    inventory = {};
    rideCount = 0;
    streak = 0;
    availableOpens = 0;
    consecutiveOpensWithoutImpossible = 0;
    pityRateActive = false;
  }
  updateUI();
}

function updateUI() {
  const rideCountElem = document.getElementById("rideCount");
  const streakValueElem = document.getElementById("streakValue");
  const bonusCounterElem = document.getElementById("bonusCounter");
  const userLabelElem = document.getElementById("userLabel");
  const openButton = document.getElementById("openButton");
  const startRideButton = document.getElementById("startRideButton");
  const availableOpensElem = document.getElementById("availableOpens");
  const pityCounterElem = document.getElementById("pityCounter");
  const toggleAuthButton = document.getElementById("toggleAuthButton");
  const profilePanel = document.getElementById("profilePanel");
  
  if (rideCountElem) rideCountElem.textContent = rideCount;
  if (streakValueElem) streakValueElem.textContent = `${streak} trips`;
  if (bonusCounterElem) {
    const remainingBonus = 3 - (rideCount % 3);
    bonusCounterElem.textContent = remainingBonus > 0 ? remainingBonus : 3;
  }
  if (availableOpensElem) availableOpensElem.textContent = availableOpens;
  
  if (pityCounterElem) {
    const remainingForPity = Math.max(0, 10 - consecutiveOpensWithoutImpossible);
    if (pityRateActive) {
      pityCounterElem.innerHTML = `🎯 PITY ACTIVE! Next: 50% IMPOSSIBLE!`;
      pityCounterElem.style.color = "#ff0066";
    } else {
      pityCounterElem.innerHTML = `⚡ ${remainingForPity} rolls until 50% IMPOSSIBLE ⚡`;
      pityCounterElem.style.color = "#f5af19";
    }
  }
  
  if (currentUser && users[currentUser]) {
    if (userLabelElem) userLabelElem.innerHTML = `👤 ${currentUser} • ${users[currentUser].school || "Unknown"}`;
    if (toggleAuthButton) {
      toggleAuthButton.textContent = "Đăng xuất";
      toggleAuthButton.onclick = logout;
    }
    if (openButton) openButton.disabled = !(availableOpens > 0);
    if (startRideButton) startRideButton.disabled = rideInProgress;
    if (profilePanel) {
      profilePanel.style.display = "block";
      loadUserProfile();
    }
  } else {
    if (userLabelElem) userLabelElem.innerHTML = "Chưa đăng nhập";
    if (toggleAuthButton) {
      toggleAuthButton.textContent = "Đăng nhập / Đăng ký";
      toggleAuthButton.onclick = showAuthModal;
    }
    if (openButton) openButton.disabled = true;
    if (startRideButton) startRideButton.disabled = true;
    if (profilePanel) profilePanel.style.display = "none";
  }
  
  updateInventoryDisplay();
  updateTradeSelect();
  updateLeaderboard();
  updateCollectionSummary();
}

function addStickerToInventory(sticker, rarity) {
  const key = `${rarity}_${sticker.id}`;
  if (!inventory[key]) {
    inventory[key] = { ...sticker, rarity, count: 0 };
  }
  inventory[key].count++;
  saveData();
  updateUI();
}

function updateInventoryDisplay() {
  const grid = document.getElementById("inventoryGrid");
  if (!grid) return;
  grid.innerHTML = "";
  
  // Sort stickers by rarity (rarest first)
  const rarityOrder = ["impossible", "secret", "mythic", "legendary", "epic", "rare", "uncommon", "common"];
  const stickers = Object.values(inventory).sort((a, b) => {
    const aIndex = rarityOrder.indexOf(a.rarity);
    const bIndex = rarityOrder.indexOf(b.rarity);
    return aIndex - bIndex;
  });
  
  if (stickers.length === 0) {
    grid.innerHTML = '<div style="grid-column: 1/-1; text-align: center; opacity: 0.5;">Chưa có sticker nào!</div>';
    return;
  }
  
  stickers.forEach(sticker => {
    const tile = document.createElement("div");
    tile.className = "inventory-tile";
    tile.innerHTML = `
      <div class="tile-badge ${sticker.rarity}"></div>
      <div class="tile-art">${sticker.icon}</div>
      <div class="tile-name">${sticker.name}</div>
      <div class="tile-count">x${sticker.count}</div>
    `;
    grid.appendChild(tile);
  });
}

function updateCollectionSummary() {
  const totalStickers = Object.keys(STICKERS_DB).reduce((sum, rarity) => sum + STICKERS_DB[rarity].length, 0);
  const collectedStickers = Object.keys(inventory).length;
  const percentage = totalStickers > 0 ? Math.round((collectedStickers / totalStickers) * 100) : 0;
  const summaryElem = document.getElementById("collectionSummary");
  if (summaryElem) summaryElem.textContent = `${collectedStickers} stickers • ${percentage}%`;
}

function updateTradeSelect() {
  const select = document.getElementById("tradeSelect");
  if (!select) return;
  select.innerHTML = '<option value="">Chọn sticker để trade</option>';
  Object.entries(inventory).forEach(([key, sticker]) => {
    const option = document.createElement("option");
    option.value = key;
    option.textContent = `${sticker.icon} ${sticker.name} x${sticker.count} - ${sticker.rarity}`;
    select.appendChild(option);
  });
}

function updateLeaderboard() {
  const leaderboardList = document.getElementById("leaderboardList");
  if (!leaderboardList) return;
  const sortedUsers = Object.entries(users).map(([username, data]) => ({
    username,
    score: Object.values(data.inventory || {}).reduce((sum, s) => sum + s.count, 0),
    school: data.school || "Unknown"
  })).sort((a, b) => b.score - a.score).slice(0, 10);
  
  if (sortedUsers.length === 0) {
    leaderboardList.innerHTML = '<div style="text-align: center; opacity: 0.5;">Chưa có người chơi</div>';
    return;
  }
  leaderboardList.innerHTML = sortedUsers.map((user, idx) => `
    <div class="leaderboard-item">
      <span class="leaderboard-rank">#${idx + 1}</span>
      <span class="leaderboard-name">${user.username} (${user.school})</span>
      <span class="leaderboard-score">${user.score} stickers</span>
    </div>
  `).join("");
}

function playSound() {
  try {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    oscillator.frequency.value = 880;
    gainNode.gain.value = 0.15;
    oscillator.start();
    gainNode.gain.exponentialRampToValueAtTime(0.00001, audioCtx.currentTime + 0.5);
    oscillator.stop(audioCtx.currentTime + 0.5);
    audioCtx.resume();
  } catch(e) {}
}

function playExplosionSound() {
  try {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    
    // Create explosion sound with multiple frequencies
    for (let i = 0; i < 5; i++) {
      setTimeout(() => {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        
        osc.frequency.value = 100 + Math.random() * 200;
        gain.gain.value = 0.3;
        
        osc.start();
        gain.gain.exponentialRampToValueAtTime(0.00001, audioCtx.currentTime + 0.3);
        osc.stop(audioCtx.currentTime + 0.3);
      }, i * 150);
    }
    audioCtx.resume();
  } catch(e) {}
}

function createIntenseFireworks() {
  // Left side fireworks
  for (let i = 0; i < 15; i++) {
    setTimeout(() => {
      for (let j = 0; j < 4; j++) {
        createFirework(50 + Math.random() * 150, 100 + Math.random() * (window.innerHeight - 200));
      }
    }, i * 100);
  }
  
  // Right side fireworks
  for (let i = 0; i < 15; i++) {
    setTimeout(() => {
      for (let j = 0; j < 4; j++) {
        createFirework(window.innerWidth - 50 - Math.random() * 150, 100 + Math.random() * (window.innerHeight - 200));
      }
    }, i * 100);
  }
  
  // Center fireworks
  for (let i = 0; i < 20; i++) {
    setTimeout(() => {
      createFirework(window.innerWidth / 2 + (Math.random() - 0.5) * 300, window.innerHeight / 2 + (Math.random() - 0.5) * 200);
    }, i * 80);
  }
}

function createFirework(x, y) {
  const colors = ['#ff0000', '#ff0066', '#ff00ff', '#ffaa00', '#ffff00', '#00ff00', '#00ffff'];
  for (let i = 0; i < 30; i++) {
    const particle = document.createElement('div');
    particle.style.position = 'fixed';
    particle.style.width = '6px';
    particle.style.height = '6px';
    particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    particle.style.left = x + 'px';
    particle.style.top = y + 'px';
    particle.style.pointerEvents = 'none';
    particle.style.zIndex = '10000';
    particle.style.borderRadius = '50%';
    document.body.appendChild(particle);
    const angle = Math.random() * Math.PI * 2;
    const velocity = 100 + Math.random() * 150;
    const vx = Math.cos(angle) * velocity;
    const vy = Math.sin(angle) * velocity - 100;
    particle.animate([
      { transform: 'translate(0, 0) scale(1)', opacity: 1 },
      { transform: `translate(${vx}px, ${vy}px) scale(0)`, opacity: 0 }
    ], { duration: 1000, easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)' }).onfinish = () => particle.remove();
  }
}

function createSideFireworks() {
  for (let i = 0; i < 6; i++) {
    setTimeout(() => createFirework(100 + Math.random() * 200, 100 + Math.random() * (window.innerHeight - 200)), i * 150);
    setTimeout(() => createFirework(window.innerWidth - 100 - Math.random() * 200, 100 + Math.random() * (window.innerHeight - 200)), i * 150);
  }
  for (let i = 0; i < 10; i++) {
    setTimeout(() => createFirework(window.innerWidth / 2 + (Math.random() - 0.5) * 200, window.innerHeight / 2 + (Math.random() - 0.5) * 150), i * 100);
  }
}

function createConfetti() {
  const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#ff0066'];
  for (let i = 0; i < 100; i++) {
    const confetti = document.createElement('div');
    confetti.style.position = 'fixed';
    confetti.style.width = '10px';
    confetti.style.height = '10px';
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.left = Math.random() * window.innerWidth + 'px';
    confetti.style.top = '-10px';
    confetti.style.pointerEvents = 'none';
    confetti.style.zIndex = '9999';
    confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
    document.body.appendChild(confetti);
    confetti.animate([
      { transform: 'translateY(0) rotate(0deg)', opacity: 1 },
      { transform: `translateY(${window.innerHeight + 10}px) rotate(${Math.random() * 360}deg)`, opacity: 0 }
    ], { duration: 1500 }).onfinish = () => confetti.remove();
  }
}

async function openCapsule() {
  if (!currentUser) {
    showToast("Vui lòng đăng nhập!");
    return;
  }
  if (availableOpens <= 0) {
    showToast("Bạn chưa có lượt mở!");
    return;
  }
  
  const openBtn = document.getElementById("openButton");
  const lootSlot = document.getElementById("lootSlot");
  if (!openBtn || !lootSlot) return;
  
  openBtn.disabled = true;
  const lootPanel = document.querySelector(".loot-panel");
  if (lootPanel) lootPanel.classList.add("csgo-spin");
  
  lootSlot.innerHTML = `<div style="text-align:center;"><div style="font-size:70px;animation:csgoRotate 0.5s linear infinite;">🎲</div><p style="margin-top:16px;font-weight:bold;">🌀 ROLLING... 🌀</p><p style="font-size:12px;">${pityRateActive ? '⭐ PITY ACTIVE! 50% IMPOSSIBLE! ⭐' : `💀 ${Math.max(0, 10 - consecutiveOpensWithoutImpossible)} rolls to pity 💀`}</p></div>`;
  
  await new Promise(resolve => setTimeout(resolve, 1800));
  
  const rarity = rollRarity();
  const sticker = getRandomSticker(rarity);
  const rarityConfig = getRarityConfig(rarity);
  const isImpossible = rarity === "impossible";
  
  availableOpens--;
  addStickerToInventory(sticker, rarity);
  
  if (isImpossible) {
    playExplosionSound();
    createIntenseFireworks();
  } else {
    playSound();
  }
  
  if (lootPanel) lootPanel.classList.remove("csgo-spin");
  createConfetti();
  
  if (rarityConfig) {
    const originalBg = document.body.style.background;
    document.body.style.transition = "background 0.3s";
    document.body.style.background = rarityConfig.color;
    setTimeout(() => document.body.style.background = originalBg, 500);
  }
  
  const titleHtml = isImpossible ? `
    <div style="margin:20px 0;">
      <div style="font-size:24px;font-weight:bold;color:#ff0066;text-shadow:0 0 20px #ff0066;animation:pulse 0.5s ease infinite;">✦ CHÚC MỪNG! ✦</div>
      <div style="font-size:18px;color:#ffaa00;">Bạn đã sở hữu vật phẩm HIẾM nhất!</div>
      <div style="font-size:28px;font-weight:800;margin-top:12px;background:linear-gradient(45deg,#ff0066,#ffaa00,#ff0066);-webkit-background-clip:text;background-clip:text;color:transparent;">${sticker.title || "HUYỀN THOẠI"}</div>
    </div>
  ` : '';
  
  lootSlot.innerHTML = `
    <div style="text-align:center;animation:csgoReveal 0.8s ease;">
      <div style="font-size:100px;margin-bottom:12px;filter:drop-shadow(${rarityConfig?.glow || 'none'});animation:csgoItemDrop 0.5s ease;">${sticker.icon}</div>
      <div style="font-size:28px;font-weight:800;margin-bottom:8px;color:${rarityConfig?.color || '#fff'};">${sticker.name}</div>
      <div style="display:inline-block;padding:8px 24px;border-radius:40px;font-size:16px;font-weight:bold;background:${rarityConfig?.color || '#666'};color:white;">${rarityConfig?.display || rarity}</div>
      <div style="font-size:14px;margin-top:16px;">✨ ${sticker.desc} ✨</div>
      ${titleHtml}
    </div>
  `;
  
  openBtn.disabled = false;
  showToast(isImpossible ? `💀 ${sticker.title}! Nhận: ${sticker.name} (IMPOSSIBLE)! 💀` : `🎉 Nhận: ${sticker.name} (${rarityConfig?.display})!`);
  saveData();
}

function startRide() {
    if (!currentUser) { showToast("Đăng nhập!"); return; }
    if (rideInProgress) { showToast("Đang trên xe xanh!"); return; }

    let route = document.getElementById("busRouteSelect").options[document.getElementById("busRouteSelect").selectedIndex]?.text.split(" - ")[0] || "Tuyến 32";
    let point = document.getElementById("pickupPointSelect").value;

    rideInProgress = true;
    let btn = document.getElementById("startRideButton");
    let openBtn = document.getElementById("openButton");
    let statusDiv = document.getElementById("rideStatus");

    btn.disabled = true;
    openBtn.disabled = true;
    statusDiv.style.display = "block";

    let count = 5;
    // Hiển thị ngay giây đầu tiên
    statusDiv.innerHTML = `🚌 Đang di chuyển trên ${route} - Đón tại ${point}... ⏳ ${count} giây ⏳`;

    let interval = setInterval(() => {
        if (rideInProgress) {
            playTick(); // Âm thanh tíc tắc mỗi giây
            count--;
            if (count >= 0) {
                statusDiv.innerHTML = `🚌 Đang di chuyển trên ${route} - Đón tại ${point}... ⏳ ${count} giây ⏳`;
            }
            if (count < 0) {
                clearInterval(interval);
            }
        } else {
            clearInterval(interval);
        }
    }, 1000);

    if (rideTimer) clearTimeout(rideTimer);
    rideTimer = setTimeout(() => {
        if (rideInProgress) {
            rideInProgress = false;
            rideCount++;
            availableOpens++;
            saveData();
            updateUI();
            statusDiv.innerHTML = `✅ Đã đến ${point}! +1 lượt roll ✅`;
            showToast(`🎁 +1 lượt roll! Tổng: ${rideCount} chuyến`);
            btn.disabled = false;
            openBtn.disabled = false;
            // Tự động ẩn trạng thái sau 3 giây
            setTimeout(() => {
                if (statusDiv.innerHTML.includes("Đã đến")) {
                    statusDiv.style.display = "none";
                }
            }, 3000);
        }
        clearInterval(interval);
    }, 5000);
}

function showAuthModal() {
  const modal = document.getElementById("authModal");
  if (modal) modal.classList.remove("hidden");
}

function hideAuthModal() {
  const modal = document.getElementById("authModal");
  if (modal) modal.classList.add("hidden");
}

function handleLogin(e) {
  e.preventDefault();
  const username = document.getElementById("loginUsername").value.trim();
  const password = document.getElementById("loginPassword").value;
  const authMessage = document.getElementById("authMessage");
  if (!username || !password) {
    if (authMessage) authMessage.textContent = "Nhập đầy đủ!";
    return;
  }
  if (!users[username] || users[username].password !== password) {
    if (authMessage) authMessage.textContent = "Sai tên hoặc mật khẩu!";
    return;
  }
  currentUser = username;
  loadUserData(username);
  hideAuthModal();
  showToast(`Chào mừng ${username}!`);
}

function handleSignup(e) {
  e.preventDefault();
  const username = document.getElementById("signupUsername").value.trim();
  const password = document.getElementById("signupPassword").value;
  const confirm = document.getElementById("signupConfirm").value;
  const school = document.getElementById("signupSchool").value;
  const authMessage = document.getElementById("authMessageSignup");
  if (!username || !password) {
    if (authMessage) authMessage.textContent = "Nhập đầy đủ!";
    return;
  }
  if (password !== confirm) {
    if (authMessage) authMessage.textContent = "Mật khẩu không khớp!";
    return;
  }
  if (users[username]) {
    if (authMessage) authMessage.textContent = "Tên đã tồn tại!";
    return;
  }
  users[username] = { password, school, inventory: {}, rideCount: 0, streak: 0, availableOpens: 0, consecutiveOpensWithoutImpossible: 0 };
  currentUser = username;
  loadUserData(username);
  hideAuthModal();
  showToast(`Đăng ký thành công!`);
}

// User profile data
function saveUserProfile() {
  if (!currentUser) return;
  
  const profile = {
    avatar: document.getElementById("avatarDisplay")?.innerHTML.split('font-size:80px;text-align:center;line-height:1;">')[1]?.split('</div>')[0] || "🚌",
    nickname: document.getElementById("nicknameInput")?.value || "",
    dob: document.getElementById("dobInput")?.value || "",
    bio: document.getElementById("bioInput")?.value || "",
    wallpaper: document.getElementById("wallpaperSelect")?.value || "default",
    stickerTheme: document.getElementById("stickerThemeSelect")?.value || "default"
  };
  
  if (users[currentUser]) {
    users[currentUser].profile = profile;
    localStorage.setItem("busloot_users", JSON.stringify(users));
    showToast("✅ Lưu hồ sơ thành công!");
  }
}

function loadUserProfile() {
  if (!currentUser || !users[currentUser]?.profile) return;
  
  const profile = users[currentUser].profile;
  
  // Load avatar
  if (profile.avatar) {
    const display = document.getElementById("avatarDisplay");
    if (display) display.innerHTML = `<div style="font-size:80px;text-align:center;line-height:1;">${profile.avatar}</div>`;
  }
  
  // Load profile info
  if (document.getElementById("nicknameInput")) document.getElementById("nicknameInput").value = profile.nickname || "";
  if (document.getElementById("dobInput")) document.getElementById("dobInput").value = profile.dob || "";
  if (document.getElementById("bioInput")) document.getElementById("bioInput").value = profile.bio || "";
  if (document.getElementById("wallpaperSelect")) document.getElementById("wallpaperSelect").value = profile.wallpaper || "default";
  if (document.getElementById("stickerThemeSelect")) document.getElementById("stickerThemeSelect").value = profile.stickerTheme || "default";
  
  applyWallpaper(profile.wallpaper || "default");
}

function applyWallpaper(theme) {
  let gradient = "radial-gradient(circle at top, rgba(76, 175, 80, 0.16), transparent 24%), linear-gradient(180deg, #051409 0%, #030a05 100%)";
  
  switch(theme) {
    case "dark":
      gradient = "radial-gradient(circle at top, rgba(100, 100, 100, 0.16), transparent 24%), linear-gradient(180deg, #1a1a1a 0%, #0a0a0a 100%)";
      break;
    case "nature":
      gradient = "radial-gradient(circle at top, rgba(100, 150, 100, 0.16), transparent 24%), linear-gradient(180deg, #0d1f0d 0%, #050a05 100%)";
      break;
    case "neon":
      gradient = "radial-gradient(circle at top, rgba(0, 255, 136, 0.16), transparent 24%), linear-gradient(180deg, #001a0f 0%, #000d05 100%)";
      break;
  }
  
  document.body.style.background = gradient;
}

function logout() {
  currentUser = null;
  inventory = {};
  rideCount = 0;
  streak = 0;
  availableOpens = 0;
  consecutiveOpensWithoutImpossible = 0;
  pityRateActive = false;
  updateUI();
  showToast("Đã đăng xuất!");
}

function proposeTrade() {
  const selectedKey = document.getElementById("tradeSelect").value;
  if (!selectedKey) { showToast("Chọn sticker để trade!"); return; }
  const sticker = inventory[selectedKey];
  if (!sticker || sticker.count < 2) { showToast("Cần ít nhất 2 sticker!"); return; }
  const rarityOrder = ["common", "uncommon", "rare", "epic", "legendary", "mythic", "secret", "impossible"];
  const currentIdx = rarityOrder.indexOf(sticker.rarity);
  const targetRarity = rarityOrder[Math.min(currentIdx + 1, rarityOrder.length - 1)];
  if (targetRarity === sticker.rarity) { showToast("Đã ở cấp cao nhất!"); return; }
  const tradeOffer = document.getElementById("tradeOffer");
  if (!tradeOffer) return;
  tradeOffer.innerHTML = `
    <div style="text-align:center;">
      <p>${sticker.icon} ${sticker.name} x2 → 1 ${targetRarity.toUpperCase()}</p>
      <button id="acceptTradeBtn" class="primary">Chấp nhận</button>
      <button id="cancelTradeBtn" class="secondary">Hủy</button>
    </div>
  `;
  document.getElementById("acceptTradeBtn").onclick = () => {
    if (inventory[selectedKey] && inventory[selectedKey].count >= 2) {
      inventory[selectedKey].count -= 2;
      if (inventory[selectedKey].count === 0) delete inventory[selectedKey];
      const newSticker = getRandomSticker(targetRarity);
      addStickerToInventory(newSticker, targetRarity);
      saveData();
      updateUI();
      showToast(`Trade thành công! Nhận: ${newSticker.name}`);
      tradeOffer.innerHTML = '<div class="trade-empty">Trade hoàn tất!</div>';
    }
  };
  document.getElementById("cancelTradeBtn").onclick = () => {
    tradeOffer.innerHTML = '<div class="trade-empty">Đã hủy trade.</div>';
  };
}

function shareGame() {
  if (navigator.share) {
    navigator.share({ title: "BusLoot", text: "Tham gia BusLoot - PITY SYSTEM!", url: window.location.href });
  } else {
    navigator.clipboard.writeText(window.location.href);
    showToast("Đã copy link!");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const statsRow = document.querySelector(".stats-row");
  if (statsRow) {
    if (!document.getElementById("availableOpens")) {
      const newCard = document.createElement("div");
      newCard.className = "stat-card";
      newCard.innerHTML = `<span class="stat-label">🎁 Lượt mở</span><strong id="availableOpens">0</strong>`;
      statsRow.appendChild(newCard);
    }
    if (!document.getElementById("pityCounter")) {
      const pityCard = document.createElement("div");
      pityCard.className = "stat-card";
      pityCard.style.background = "rgba(255,0,102,0.2)";
      pityCard.innerHTML = `<span class="stat-label">⚡ PITY</span><strong id="pityCounter" style="font-size:12px;">0 rolls</strong>`;
      statsRow.appendChild(pityCard);
    }
  }
  
  document.getElementById("toggleAuthButton").addEventListener("click", showAuthModal);
  document.getElementById("closeAuthButton").addEventListener("click", hideAuthModal);
  document.getElementById("loginForm").addEventListener("submit", handleLogin);
  document.getElementById("signupForm").addEventListener("submit", handleSignup);
  
  document.getElementById("authLoginTab").addEventListener("click", () => {
    document.getElementById("authLoginTab").classList.add("active");
    document.getElementById("authSignupTab").classList.remove("active");
    document.getElementById("loginForm").classList.remove("hidden");
    document.getElementById("signupForm").classList.add("hidden");
  });
  document.getElementById("authSignupTab").addEventListener("click", () => {
    document.getElementById("authSignupTab").classList.add("active");
    document.getElementById("authLoginTab").classList.remove("active");
    document.getElementById("signupForm").classList.remove("hidden");
    document.getElementById("loginForm").classList.add("hidden");
  });
  
  document.getElementById("openButton").addEventListener("click", openCapsule);
  document.getElementById("startRideButton").addEventListener("click", startRide);
  document.getElementById("inventoryButton").addEventListener("click", () => document.getElementById("inventoryPanel").scrollIntoView({ behavior: "smooth" }));
  document.getElementById("shareButton").addEventListener("click", shareGame);
  document.getElementById("tradeButton").addEventListener("click", proposeTrade);
  
  // Profile customization events
  document.getElementById("saveProfileBtn").addEventListener("click", saveUserProfile);
  
  // Avatar preset buttons
  document.querySelectorAll(".avatar-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const avatar = btn.dataset.avatar;
      document.getElementById("avatarDisplay").innerHTML = `<div style="font-size:80px;text-align:center;line-height:1;">${avatar}</div>`;
      document.querySelectorAll(".avatar-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
    });
  });
  
  // Avatar upload
  document.getElementById("uploadAvatarBtn").addEventListener("click", () => {
    document.getElementById("avatarUpload").click();
  });
  
  document.getElementById("avatarUpload").addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        document.getElementById("avatarDisplay").innerHTML = `<img src="${event.target.result}" style="width:100%;height:100%;object-fit:cover;border-radius:24px;">`;
      };
      reader.readAsDataURL(file);
    }
  });
  
  // Wallpaper selection
  document.getElementById("wallpaperSelect").addEventListener("change", (e) => {
    applyWallpaper(e.target.value);
  });
  
  const checkBtn = document.getElementById("checkLocationButton");
  const scanBtn = document.getElementById("scanButton");
  if (checkBtn) checkBtn.style.display = "none";
  if (scanBtn) scanBtn.style.display = "none";
  
  const profilePanel = document.getElementById("profilePanel");
  if (profilePanel) profilePanel.style.display = "none";
  
  const locStatus = document.getElementById("locationStatus");
  if (locStatus) locStatus.innerHTML = "🎮 PITY: 10 lần không IMPOSSIBLE → 50%!";
  const rideStatus = document.getElementById("rideStatus");
  if (rideStatus) rideStatus.innerHTML = "✨ Nhấn 'Bắt đầu' chờ 5 giây nhận lượt mở! ✨";
  
  updateUI();
  
  const style = document.createElement("style");
  style.textContent = `
    @keyframes csgoRotate { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
    @keyframes csgoSpin { 0% { transform: perspective(500px) rotateY(0deg); } 100% { transform: perspective(500px) rotateY(360deg); } }
    @keyframes csgoReveal { 0% { opacity: 0; transform: scale(0.3) rotateY(90deg); } 100% { opacity: 1; transform: scale(1) rotateY(0deg); } }
    @keyframes csgoItemDrop { 0% { transform: translateY(-100px) rotate(-30deg); opacity: 0; } 100% { transform: translateY(0) rotate(0deg); opacity: 1; } }
    @keyframes pulse { 0%,100% { transform: scale(1); } 50% { transform: scale(1.1); } }
    .csgo-spin { animation: csgoSpin 0.8s ease; transform-style: preserve-3d; }
  `;
  document.head.appendChild(style);
});