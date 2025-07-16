// Data untuk bab dan kontennya
const chaptersData = [
    {
        id: 'bab-1',
        title: 'Bab 1: Memahami Investasi',
        category: 'fundamental',
        summary: 'Pelajari dasar-dasar investasi, mengapa penting, dan perbedaan dengan spekulasi.',
        content: `
            <div class="content-card" id="apa-itu-investasi">
                <h3>Apa Itu Investasi?</h3>
                <p>Investasi adalah kegiatan menanamkan modal pada suatu aset dengan harapan memperoleh keuntungan di masa depan. Berbeda dengan menabung yang hanya menyimpan uang, investasi membuat uang Anda "bekerja" untuk menghasilkan lebih banyak uang.</p>
                <p><strong>Perbedaan Utama dengan Menabung:</strong> Menabung adalah menyimpan uang di tempat aman (bank) dengan tujuan menjaga likuiditas dan keamanan, namun seringkali nilai uang tergerus inflasi. Investasi, di sisi lain, bertujuan untuk mengembangkan nilai uang Anda melebihi tingkat inflasi, meskipun dengan tingkat risiko yang bervariasi.</p>
            </div>
            <div class="content-card" id="mengapa-harus-investasi">
                <h3>Mengapa Harus Investasi?</h3>
                <p>Inflasi adalah musuh terbesar uang Anda. Jika inflasi 5% per tahun, uang Rp 100.000 hari ini hanya akan bernilai Rp 95.000 setahun kemudian dalam hal daya beli. Investasi membantu melindungi dan mengembangkan nilai uang Anda.</p>
                <p><strong>Dampak Inflasi:</strong> Inflasi secara konstan mengurangi daya beli uang Anda. Tanpa investasi, kekayaan Anda akan menyusut seiring waktu. Investasi yang memberikan pengembalian di atas inflasi (real return) adalah kunci untuk pertumbuhan kekayaan jangka panjang.</p>
                <p><strong>Mencapai Tujuan Keuangan:</strong> Investasi adalah alat yang ampuh untuk mencapai tujuan keuangan besar seperti dana pensiun, pendidikan anak, pembelian rumah, atau kebebasan finansial.</p>
            </div>
            <div class="content-card" id="konsep-dasar-investasi">
                <h3>Konsep Dasar Investasi</h3>
                <p><strong>Risk and Return:</strong> Semakin tinggi potensi keuntungan, semakin tinggi risikonya. Ini adalah hukum universal investasi yang tidak bisa dihindari. Investor harus memahami bahwa tidak ada "makan siang gratis" dalam investasi; potensi imbal hasil yang lebih tinggi selalu datang dengan risiko yang lebih besar.</p>
                <p><strong>Time Value of Money:</strong> Uang yang Anda miliki hari ini lebih berharga daripada uang yang sama di masa depan. Karena itu, investasi sedini mungkin sangat penting. Ini karena uang yang diinvestasikan hari ini memiliki lebih banyak waktu untuk tumbuh melalui bunga berbunga.</p>
                <p><strong>Compound Interest (Bunga Berbunga):</strong> Bunga berbunga adalah kekuatan terbesar dalam investasi. Jika Anda investasi Rp 1 juta dengan return 12% per tahun, dalam 20 tahun akan menjadi sekitar Rp 9,6 juta. Ini adalah proses di mana bunga yang Anda peroleh juga mulai menghasilkan bunga, menciptakan efek bola salju pada investasi Anda.</p>
                <p><strong>Diversifikasi:</strong> Jangan menaruh semua telur dalam satu keranjang. Diversifikasi adalah strategi untuk mengurangi risiko dengan menyebarkan investasi Anda ke berbagai jenis aset, sektor, atau wilayah geografis.</p>
            </div>
            <div class="content-card" id="perbedaan-investasi-spekulasi-judi">
                <h3>Perbedaan Investasi, Spekulasi, dan Judi</h3>
                <p>Penting untuk membedakan ketiga aktivitas ini:</p>
                <ul>
                    <li><strong>Investasi:</strong> Berdasarkan analisis mendalam (fundamental dan/atau teknikal), dengan horizon waktu jangka panjang (bertahun-tahun), dan bertujuan untuk pertumbuhan modal yang stabil. Contoh: membeli saham perusahaan yang solid, membeli obligasi pemerintah.</li>
                    <li><strong>Spekulasi:</strong> Berdasarkan perkiraan pergerakan harga jangka pendek (minggu, bulan), seringkali dengan analisis yang kurang mendalam atau lebih didasarkan pada sentimen pasar. Risikonya lebih tinggi dari investasi, tetapi juga dengan potensi keuntungan lebih cepat. Contoh: trading saham harian, trading forex.</li>
                    <li><strong>Judi:</strong> Berdasarkan keberuntungan murni, tanpa analisis rasional atau ekspektasi pengembalian positif jangka panjang. Risikonya sangat tinggi, seringkali melibatkan hilangnya seluruh modal. Contoh: lotere, kasino.</li>
                </ul>
            </div>
        `,
        subtopics: [
            { id: 'apa-itu-investasi', title: 'Apa Itu Investasi?' },
            { id: 'mengapa-harus-investasi', title: 'Mengapa Harus Investasi?' },
            { id: 'konsep-dasar-investasi', title: 'Konsep Dasar Investasi' },
            { id: 'perbedaan-investasi-spekulasi-judi', title: 'Perbedaan Investasi, Spekulasi, dan Judi' }
        ]
    },
    {
        id: 'bab-2',
        title: 'Bab 2: Mindset dan Persiapan Mental Investor',
        category: 'mindset',
        summary: 'Kunci sukses investasi terletak pada pola pikir dan pengelolaan emosi yang tepat.',
        content: `
            <div class="content-card" id="mindset-investor-sukses">
                <h3>Mindset Investor Sukses</h3>
                <p>Investor sukses memiliki pola pikir jangka panjang. Mereka tidak terburu-buru mencari keuntungan cepat, tetapi fokus pada pertumbuhan konsisten. Warren Buffett tidak menjadi kaya dalam semalam, tetapi melalui investasi konsisten selama puluhan tahun.</p>
                <p><strong>Fokus pada Nilai Intrinsik:</strong> Investor sukses membeli aset di bawah nilai intrinsiknya dan bersabar menunggu nilai pasar mencerminkannya. Mereka melihat fluktuasi pasar sebagai peluang, bukan ancaman.</p>
                <p><strong>Belajar dari Kesalahan:</strong> Setiap kerugian adalah pelajaran. Investor sukses menganalisis kesalahan mereka dan menyesuaikan strategi, bukan menyerah.</p>
            </div>
            <div class="content-card" id="mengelola-emosi">
                <h3>Mengelola Emosi</h3>
                <p>Fear and Greed adalah dua emosi terbesar yang menghancurkan investor. Ketika pasar turun, ketakutan membuat investor menjual rugi. Ketika pasar naik, keserakahan membuat investor membeli di harga puncak.</p>
                <p>Solusi: Buat rencana investasi yang jelas dan patuhi rencana tersebut. Jangan biarkan emosi mengambil alih keputusan investasi Anda.</p>
                <p><strong>Bias Perilaku Umum:</strong></p>
                <ul>
                    <li><strong>Anchoring Bias:</strong> Terlalu terpaku pada harga beli awal atau harga historis.</li>
                    <li><strong>Confirmation Bias:</strong> Hanya mencari informasi yang mendukung keyakinan awal Anda.</li>
                    <li><strong>Herd Mentality:</strong> Mengikuti keramaian tanpa analisis sendiri.</li>
                    <li><strong>Loss Aversion:</strong> Rasa sakit kehilangan lebih besar daripada kesenangan mendapatkan, menyebabkan keputusan irasional.</li>
                </ul>
                <p>Mengidentifikasi bias ini adalah langkah pertama untuk mengelolanya.</p>
            </div>
            <div class="content-card" id="disiplin-dan-konsistensi">
                <h3>Disiplin dan Konsistensi</h3>
                <p>Investasi rutin setiap bulan lebih baik daripada investasi besar sekali dalam setahun. Ini disebut Dollar Cost Averaging (DCA) - Anda membeli lebih banyak unit ketika harga turun dan lebih sedikit ketika harga naik. DCA mengurangi risiko timing pasar dan membangun kebiasaan investasi yang sehat.</p>
                <p><strong>Otomatisasi Investasi:</strong> Atur transfer otomatis dari rekening gaji Anda ke rekening investasi setiap bulan untuk memastikan konsistensi.</p>
            </div>
            <div class="content-card" id="sabar-dan-realistis">
                <h3>Sabar dan Realistis</h3>
                <p>Pasar saham naik rata-rata 10-12% per tahun dalam jangka panjang, tetapi dalam jangka pendek bisa sangat volatil. Jangan berharap menjadi kaya dalam hitungan bulan. Investasi adalah maraton, bukan sprint.</p>
                <p><strong>Ekspektasi Realistis:</strong> Pahami bahwa ada periode pasar yang lesu atau bahkan menurun. Ini adalah bagian normal dari siklus pasar. Pertumbuhan kekayaan yang signifikan membutuhkan waktu dan kesabaran.</p>
            </div>
        `,
        subtopics: [
            { id: 'mindset-investor-sukses', title: 'Mindset Investor Sukses' },
            { id: 'mengelola-emosi', title: 'Mengelola Emosi' },
            { id: 'disiplin-dan-konsistensi', title: 'Disiplin dan Konsistensi' },
            { id: 'sabar-dan-realistis', title: 'Sabar dan Realistis' }
        ]
    },
    {
        id: 'bab-3',
        title: 'Bab 3: Profil Risiko dan Tujuan Investasi',
        category: 'strategy',
        summary: 'Pahami toleransi risiko Anda dan tetapkan tujuan investasi yang SMART.',
        content: `
            <div class="content-card" id="mengenal-profil-risiko">
                <h3>Mengenal Profil Risiko Anda</h3>
                <p>Profil risiko adalah tingkat kenyamanan Anda terhadap fluktuasi nilai investasi. Mengenali profil risiko sangat krusial untuk memilih instrumen investasi yang tepat.</p>
                <ul>
                    <li><strong>Konservatif:</strong> Tidak suka risiko, lebih memilih return stabil meski kecil. Prioritas utama adalah keamanan modal. Cocok untuk tujuan jangka pendek atau dana darurat.</li>
                    <li><strong>Moderat:</strong> Bersedia menerima risiko sedang untuk return yang lebih baik. Mampu menoleransi fluktuasi jangka pendek demi potensi pertumbuhan jangka menengah.</li>
                    <li><strong>Agresif:</strong> Siap mengambil risiko tinggi untuk potensi return maksimal. Mampu menoleransi fluktuasi besar dan bahkan kerugian jangka pendek, dengan fokus pada pertumbuhan modal jangka panjang. Cocok untuk investor muda dengan horizon waktu panjang.</li>
                </ul>
            </div>
            <div class="content-card" id="faktor-penentu-profil-risiko">
                <h3>Faktor Penentu Profil Risiko</h3>
                <p>Beberapa faktor yang memengaruhi profil risiko Anda:</p>
                <ul>
                    <li><strong>Usia:</strong> Semakin muda, semakin bisa mengambil risiko karena punya waktu pemulihan lebih lama dari potensi kerugian. "Rule of 100": Persentase alokasi saham = 100 - usia Anda.</li>
                    <li><strong>Penghasilan:</strong> Semakin stabil dan besar penghasilan, semakin bisa mengambil risiko karena memiliki kemampuan untuk menutupi kerugian atau menambah investasi saat pasar turun.</li>
                    <li><strong>Tanggungan:</strong> Semakin banyak tanggungan (anak, orang tua), semakin konservatif karena kebutuhan finansial yang lebih mendesak dan kurangnya fleksibilitas.</li>
                    <li><strong>Tujuan Investasi:</strong> Tujuan jangka pendek (misal: beli mobil 1 tahun lagi) membutuhkan investasi konservatif. Tujuan jangka panjang (misal: pensiun 20 tahun lagi) memungkinkan investasi yang lebih agresif.</li>
                    <li><strong>Pengetahuan Investasi:</strong> Semakin paham tentang pasar dan instrumen, semakin nyaman dengan risiko yang terukur.</li>
                </ul>
            </div>
            <div class="content-card" id="menetapkan-tujuan-investasi">
                <h3>Menetapkan Tujuan Investasi</h3>
                <p>Tujuan investasi harus SMART (Specific, Measurable, Achievable, Relevant, Time-bound):</p>
                <ul>
                    <li><strong>Specific:</strong> Jelas dan spesifik (misal: "dana pensiun", bukan hanya "kaya").</li>
                    <li><strong>Measurable:</strong> Bisa diukur (misal: "Rp 500 juta", bukan "banyak uang").</li>
                    <li><strong>Achievable:</strong> Dapat dicapai dengan sumber daya dan waktu yang ada.</li>
                    <li><strong>Relevant:</strong> Sesuai dengan kebutuhan dan nilai-nilai pribadi Anda.</li>
                    <li><strong>Time-bound:</strong> Punya batas waktu yang jelas (misal: "dalam 20 tahun").</li>
                </ul>
                <p>Contoh: "Saya ingin mengumpulkan Rp 500 juta untuk dana pensiun dalam 20 tahun dengan investasi Rp 1 juta per bulan."</p>
            </div>
            <div class="content-card" id="alokasi-berdasarkan-tujuan">
                <h3>Alokasi Berdasarkan Tujuan</h3>
                <p>Pilihan instrumen investasi harus selaras dengan tujuan dan horizon waktu Anda:</p>
                <ul>
                    <li><strong>Tujuan Jangka Pendek (1-3 tahun):</strong> Prioritaskan keamanan dan likuiditas. Cocok untuk Deposito, Obligasi jangka pendek, Reksa Dana Pasar Uang.</li>
                    <li><strong>Tujuan Jangka Menengah (3-10 tahun):</strong> Keseimbangan antara pertumbuhan dan keamanan. Cocok untuk Reksa Dana Campuran, Obligasi, beberapa Saham blue-chip.</li>
                    <li><strong>Tujuan Jangka Panjang (>10 tahun):</strong> Fokus pada pertumbuhan maksimal. Cocok untuk Saham, Reksa Dana Saham, Properti (jika modal besar).</li>
                </ul>
            </div>
        `,
        subtopics: [
            { id: 'mengenal-profil-risiko', title: 'Mengenal Profil Risiko Anda' },
            { id: 'faktor-penentu-profil-risiko', title: 'Faktor Penentu Profil Risiko' },
            { id: 'menetapkan-tujuan-investasi', title: 'Menetapkan Tujuan Investasi' },
            { id: 'alokasi-berdasarkan-tujuan', title: 'Alokasi Berdasarkan Tujuan' }
        ]
    },
    {
        id: 'bab-4',
        title: 'Bab 4: Jenis-Jenis Investasi',
        category: 'jenis',
        summary: 'Kenali berbagai instrumen investasi mulai dari deposito hingga cryptocurrency.',
        content: `
            <div class="content-card" id="deposito">
                <h3>Deposito</h3>
                <p>Menyimpan uang di bank untuk jangka waktu tertentu dengan bunga tetap.</p>
                <p><strong>Keuntungan:</strong> Aman (dijamin LPS hingga batas tertentu), return pasti, likuiditas tinggi (setelah jatuh tempo).</p>
                <p><strong>Kekurangan:</strong> Return rendah (sering kalah inflasi), tidak ada potensi capital gain.</p>
                <p><strong>Cocok untuk:</strong> Dana darurat, tujuan jangka pendek (kurang dari 1 tahun), atau bagian konservatif dari portofolio.</p>
            </div>
            <div class="content-card" id="obligasi">
                <h3>Obligasi</h3>
                <p>Surat utang yang diterbitkan pemerintah atau perusahaan. Anda sebagai pembeli obligasi adalah pemberi pinjaman.</p>
                <h4>Jenis Obligasi:</h4>
                <ul>
                    <li><strong>Obligasi Pemerintah:</strong> ORI, Sukuk, SBR - paling aman karena dijamin negara.</li>
                    <li><strong>Obligasi Korporasi:</strong> Diterbitkan perusahaan, return lebih tinggi tapi risiko gagal bayar lebih besar (tergantung rating perusahaan).</li>
                </ul>
                <p><strong>Keuntungan:</strong> Return lebih tinggi dari deposito, relatif aman (terutama pemerintah), pendapatan bunga reguler.</p>
                <p><strong>Kekurangan:</strong> Risiko gagal bayar (untuk obligasi korporasi), harga bisa fluktuatif jika dijual sebelum jatuh tempo (terutama jika suku bunga naik).</p>
                <p><strong>Cocok untuk:</strong> Tujuan jangka menengah, diversifikasi portofolio, investor moderat.</p>
            </div>
            <div class="content-card" id="saham">
                <h3>Saham</h3>
                <p>Bukti kepemilikan sebagian kecil dari suatu perusahaan. Investor mendapatkan keuntungan dari dividen dan/atau capital gain.</p>
                <p><strong>Keuntungan:</strong> Potensi return sangat tinggi dalam jangka panjang, likuiditas tinggi (mudah diperjualbelikan), hak suara dalam RUPS (untuk porsi besar).</p>
                <p><strong>Kekurangan:</strong> Risiko tinggi (harga sangat volatil), butuh analisis mendalam, potensi kerugian modal.</p>
                <p><strong>Cocok untuk:</strong> Tujuan jangka panjang, investor agresif, pertumbuhan modal.</p>
            </div>
            <div class="content-card" id="reksa-dana">
                <h3>Reksa Dana</h3>
                <p>Wadah yang menghimpun dana dari banyak investor untuk diinvestasikan pada portofolio efek (saham, obligasi, pasar uang) yang dikelola oleh Manajer Investasi profesional.</p>
                <h4>Jenis Reksa Dana:</h4>
                <ul>
                    <li><strong>Pasar Uang:</strong> Investasi di deposito dan obligasi jangka pendek. Risiko sangat rendah.</li>
                    <li><strong>Pendapatan Tetap:</strong> Minimal 80% di obligasi. Risiko rendah-menengah.</li>
                    <li><strong>Campuran:</strong> Kombinasi saham dan obligasi. Risiko menengah.</li>
                    <li><strong>Saham:</strong> Minimal 80% di saham. Risiko tinggi.</li>
                </ul>
                <p><strong>Keuntungan:</strong> Diversifikasi instan, dikelola profesional, modal awal kecil, likuiditas cukup tinggi.</p>
                <p><strong>Kekurangan:</strong> Ada biaya pengelolaan, tidak bisa memilih aset secara spesifik, kinerja tergantung Manajer Investasi.</p>
                <p><strong>Cocok untuk:</strong> Pemula, investor dengan modal terbatas, diversifikasi mudah.</p>
            </div>
            <div class="content-card" id="emas">
                <h3>Emas</h3>
                <p>Logam mulia yang sering dianggap sebagai 'safe haven asset' karena nilainya cenderung stabil atau meningkat saat ekonomi tidak pasti.</p>
                <p><strong>Keuntungan:</strong> Lindung nilai terhadap inflasi, cenderung stabil saat krisis, mudah dicairkan.</p>
                <p><strong>Kekurangan:</strong> Tidak menghasilkan bunga atau dividen (yield), ada biaya penyimpanan (fisik) atau spread harga (digital/ETF).</p>
                <p><strong>Cocok untuk:</strong> Diversifikasi, lindung nilai, tujuan jangka panjang.</p>
            </div>
            <div class="content-card" id="properti">
                <h3>Properti</h3>
                <p>Investasi pada aset fisik seperti tanah, rumah, apartemen, atau bangunan komersial.</p>
                <p><strong>Keuntungan:</strong> Aset riil (berwujud), potensi capital gain tinggi, potensi pendapatan sewa (rental yield), lindung nilai inflasi.</p>
                <p><strong>Kekurangan:</strong> Butuh modal sangat besar, likuiditas rendah (sulit dijual cepat), ada biaya perawatan dan pajak, risiko kerusakan.</p>
                <p><strong>Cocok untuk:</strong> Tujuan jangka sangat panjang, diversifikasi, investor dengan modal besar.</p>
            </div>
            <div class="content-card" id="cryptocurrency">
                <h3>Cryptocurrency</h3>
                <p>Aset digital yang menggunakan kriptografi untuk keamanan dan beroperasi di jaringan terdesentralisasi (blockchain).</p>
                <p><strong>Keuntungan:</strong> Potensi return sangat tinggi (jika beruntung), teknologi masa depan, inovatif.</p>
                <p><strong>Kekurangan:</strong> Volatilitas ekstrem (harga bisa anjlok drastis), belum ada regulasi jelas di banyak negara, risiko keamanan (peretasan dompet), kompleksitas teknologi.</p>
                <p><strong>Cocok untuk:</strong> Investor yang sangat agresif, siap kehilangan seluruh modal dan memahami teknologi di baliknya.</p>
            </div>
        `,
        subtopics: [
            { id: 'deposito', title: 'Deposito' },
            { id: 'obligasi', title: 'Obligasi' },
            { id: 'saham', title: 'Saham' },
            { id: 'reksa-dana', title: 'Reksa Dana' },
            { id: 'emas', title: 'Emas' },
            { id: 'properti', title: 'Properti' },
            { id: 'cryptocurrency', title: 'Cryptocurrency' }
        ]
    },
    {
        id: 'bab-5',
        title: 'Bab 5: Analisis Fundamental vs Teknikal',
        category: 'fundamental',
        summary: 'Pelajari dua pendekatan utama dalam menganalisis pasar dan saham.',
        content: `
            <div class="content-card" id="analisis-fundamental">
                <h3>Analisis Fundamental</h3>
                <p>Analisis fundamental mempelajari kondisi keuangan, manajemen, dan prospek bisnis perusahaan untuk menentukan nilai intrinsik saham. Tujuannya adalah menemukan perusahaan yang harganya di bawah nilai sebenarnya (undervalued) untuk investasi jangka panjang.</p>
                <h4>Komponen Analisis Fundamental:</h4>
                <ul>
                    <li><strong>Analisis Ekonomi:</strong> Mempelajari kondisi makroekonomi (PDB, suku bunga, inflasi, kebijakan pemerintah) yang memengaruhi seluruh pasar.</li>
                    <li><strong>Analisis Industri:</strong> Menilai prospek pertumbuhan industri, tingkat kompetisi, regulasi, dan posisi perusahaan dalam industrinya.</li>
                    <li><strong>Analisis Perusahaan:
                        <p>Mengkaji laporan keuangan (laba rugi, neraca, arus kas), kualitas manajemen, model bisnis, keunggulan kompetitif (moat), dan prospek pertumbuhan perusahaan.</p>
                    </li>
                </ul>
                <h4>Rasio Penting (Contoh):</h4>
                <ul>
                    <li><strong>PER (Price Earning Ratio):</strong> Harga saham dibagi laba per saham. Menunjukkan berapa kali investor bersedia membayar untuk setiap rupiah laba. PER rendah bisa berarti undervalued, tapi juga ada masalah.</li>
                    <li><strong>PBV (Price to Book Value):
                    ):</strong> Harga saham dibagi nilai buku per saham. Membandingkan harga pasar dengan nilai aset bersih perusahaan. PBV < 1 bisa jadi undervalued.</li>
                    <li><strong>ROE (Return on Equity):</strong> Laba bersih dibagi ekuitas. Mengukur efisiensi perusahaan dalam menghasilkan laba dari modal pemegang saham. ROE tinggi umumnya baik.</li>
                    <li><strong>DER (Debt to Equity Ratio):</strong> Total utang dibagi ekuitas. Mengukur seberapa besar perusahaan didanai oleh utang dibandingkan modal sendiri. DER tinggi menunjukkan risiko lebih besar.</li>
                </ul>
            </div>
            <div class="content-card" id="analisis-teknikal">
                <h3>Analisis Teknikal</h3>
                <p>Analisis teknikal mempelajari pergerakan harga historis dan volume perdagangan untuk memprediksi arah harga di masa depan. Berasumsi bahwa semua informasi relevan sudah tercermin dalam harga dan bahwa sejarah cenderung berulang.</p>
                <h4>Konsep Dasar:</h4>
                <ul>
                    <li><strong>Trend:</strong> Harga bergerak dalam trend (naik/uptrend, turun/downtrend, sideways/konsolidasi). Mengikuti trend adalah prinsip utama.</li>
                    <li><strong>Support dan Resistance:</strong> Level harga yang sulit ditembus. Support adalah level di mana tekanan beli cenderung menghentikan penurunan harga. Resistance adalah level di mana tekanan jual cenderung menghentikan kenaikan harga.</li>
                    <li><strong>Volume:</strong> Konfirmasi kekuatan pergerakan harga. Kenaikan harga dengan volume tinggi menunjukkan kekuatan, sebaliknya volume rendah bisa berarti lemah.</li>
                    <li><strong>Pola Harga:</strong> Formasi spesifik pada grafik harga (misal: Head and Shoulders, Double Top/Bottom) yang mengindikasikan pembalikan atau kelanjutan trend.</li>
                </ul>
                <h4>Indikator Teknikal (Contoh):</h4>
                <ul>
                    <li><strong>Moving Average (MA):</strong> Rata-rata harga dalam periode tertentu (misal: MA 50, MA 200). Digunakan untuk mengidentifikasi trend dan level support/resistance dinamis.</li>
                    <li><strong>RSI (Relative Strength Index):</strong> Mengukur kecepatan dan perubahan pergerakan harga. Menunjukkan kondisi overbought (terlalu banyak dibeli, potensi turun) atau oversold (terlalu banyak dijual, potensi naik).</li>
                    <li><strong>MACD (Moving Average Convergence Divergence):
                    ):</strong> Mendeteksi perubahan trend, momentum, dan sinyal beli/jual berdasarkan hubungan dua moving average.</li>
                    <li><strong>Bollinger Bands:</strong> Mengukur volatilitas pasar dan membantu mengidentifikasi kondisi overbought/oversold.</li>
                </ul>
            </div>
            <div class="content-card" id="kapan-menggunakan-analisis">
                <h3>Kapan Menggunakan Analisis Fundamental vs Teknikal?</h3>
                <ul>
                    <li><strong>Fundamental:</strong> Lebih cocok untuk investasi jangka panjang, memilih saham berkualitas, dan memahami nilai intrinsik perusahaan. Ini adalah pendekatan "apa yang harus dibeli".</li>
                    <li><strong>Teknikal:</strong> Lebih cocok untuk trading jangka pendek, menentukan timing entry (masuk) dan exit (keluar) pasar, serta mengidentifikasi pola harga. Ini adalah pendekatan "kapan harus membeli/menjual".</li>
                </ul>
                <p>Banyak investor profesional menggunakan kombinasi keduanya: fundamental untuk memilih perusahaan yang baik, dan teknikal untuk menentukan waktu terbaik untuk masuk atau keluar dari posisi.</p>
            </div>
        `,
        subtopics: [
            { id: 'analisis-fundamental', title: 'Analisis Fundamental' },
            { id: 'analisis-teknikal', title: 'Analisis Teknikal' },
            { id: 'kapan-menggunakan-analisis', title: 'Kapan Menggunakan Analisis Fundamental vs Teknikal?' }
        ]
    },
    {
        id: 'bab-6',
        title: 'Bab 6: Strategi Portofolio Berdasarkan Usia',
        category: 'strategy',
        summary: 'Sesuaikan alokasi aset Anda dengan tahapan hidup untuk hasil optimal.',
        content: `
            <div class="content-card" id="strategi-remaja">
                <h3>Remaja (15-20 tahun)</h3>
                <p>Karakteristik: Punya waktu sangat panjang untuk investasi, toleransi risiko tinggi karena waktu pemulihan yang lama, modal terbatas.</p>
                <p>Alokasi Ideal: Fokus pada pertumbuhan agresif.</p>
                <ul>
                    <li>80% Reksa Dana Saham / Saham Individual: Potensi pertumbuhan maksimal.</li>
                    <li>20% Emas: Sebagai diversifikasi dan lindung nilai inflasi.</li>
                </ul>
                <p>Strategi: Investasi rutin bulanan (Dollar Cost Averaging), fokus pada pertumbuhan jangka panjang, mulai belajar investasi saham individual.</p>
            </div>
            <div class="content-card" id="strategi-dewasa-muda">
                <h3>Dewasa Muda (20-30 tahun)</h3>
                <p>Karakteristik: Mulai berkarir dengan penghasilan meningkat, belum punya tanggungan besar, masih punya waktu investasi yang panjang.</p>
                <p>Alokasi Ideal: Agresif-Moderat, membangun fondasi kekayaan.</p>
                <ul>
                    <li>60% Reksa Dana Saham / Saham Individual: Tetap fokus pada pertumbuhan modal.</li>
                    <li>20% Obligasi: Mulai diversifikasi untuk stabilitas dan pendapatan.</li>
                    <li>15% Properti (melalui REITs/dana properti jika modal terbatas) / Emas: Diversifikasi aset riil.</li>
                    <li>5% Cryptocurrency (opsional, jika sangat paham dan siap risiko tinggi).</li>
                </ul>
                <p>Strategi: Maksimalkan kontribusi, bangun portofolio saham yang terdiversifikasi, mulai diversifikasi ke aset lain.</p>
            </div>
            <div class="content-card" id="strategi-dewasa">
                <h3>Dewasa (30-40 tahun)</h3>
                <p>Karakteristik: Penghasilan puncak, mulai punya tanggungan keluarga dan tujuan finansial yang lebih konkret (rumah, pendidikan anak), perlu keseimbangan antara pertumbuhan dan keamanan.</p>
                <p>Alokasi Ideal: Moderat-Agresif, menyeimbangkan pertumbuhan dan stabilitas.</p>
                <ul>
                    <li>50% Saham / Reksa Dana Saham: Tetap mencari pertumbuhan.</li>
                    <li>30% Obligasi: Meningkatkan porsi keamanan.</li>
                    <li>15% Properti: Membangun aset riil yang stabil.</li>
                    <li>5% Emas / Aset Alternatif: Diversifikasi tambahan.</li>
                </ul>
                <p>Strategi: Seimbangkan pertumbuhan dan keamanan, mulai investasi properti, pertimbangkan asuransi jiwa/kesehatan.</p>
            </div>
            <div class="content-card" id="strategi-pra-pensiun">
                <h3>Pra-Pensiun (40-55 tahun)</h3>
                <p>Karakteristik: Mulai lebih konservatif, fokus pada preservasi kekayaan yang telah dibangun, mengurangi risiko karena waktu untuk pemulihan semakin pendek.</p>
                <p>Alokasi Ideal: Moderat-Konservatif, menjaga modal dan mulai fokus pada pendapatan.</p>
                <ul>
                    <li>40% Saham / Reksa Dana Saham: Porsi saham dikurangi.</li>
                    <li>40% Obligasi: Porsi obligasi ditingkatkan untuk stabilitas dan pendapatan.</li>
                    <li>15% Properti: Aset stabil dan berpotensi menghasilkan pendapatan sewa.</li>
                    <li>5% Emas: Sebagai pelindung nilai.</li>
                </ul>
                <p>Strategi: Mulai mengurangi risiko, fokus pada aset yang menghasilkan pendapatan (income generating assets) seperti obligasi dan properti sewa.</p>
            </div>
            <div class="content-card" id="strategi-pensiun">
                <h3>Pensiun (55+ tahun)</h3>
                <p>Karakteristik: Prioritas utama adalah keamanan modal dan penghasilan tetap untuk memenuhi kebutuhan hidup, toleransi risiko sangat rendah.</p>
                <p>Alokasi Ideal: Konservatif, fokus pada proteksi modal dan pendapatan stabil.</p>
                <ul>
                    <li>30% Saham (Fokus Dividen) / Reksa Dana Saham: Untuk menjaga daya beli dan sedikit pertumbuhan.</li>
                    <li>50% Obligasi: Sumber pendapatan tetap yang paling stabil dan aman.</li>
                    <li>15% Properti: Aset stabil dengan potensi pendapatan sewa.</li>
                    <li>5% Emas: Untuk perlindungan nilai jangka panjang.</li>
                </ul>
                <p>Strategi: Prioritas capital preservation, fokus pada dividend yield dan pendapatan bunga, hindari investasi berisiko tinggi.</p>
            </div>
        `,
        subtopics: [
            { id: 'strategi-remaja', title: 'Remaja (15-20 tahun)' },
            { id: 'strategi-dewasa-muda', title: 'Dewasa Muda (20-30 tahun)' },
            { id: 'strategi-dewasa', title: 'Dewasa (30-40 tahun)' },
            { id: 'strategi-pra-pensiun', title: 'Pra-Pensiun (40-55 tahun)' },
            { id: 'strategi-pensiun', title: 'Pensiun (55+ tahun)' }
        ]
    },
    {
        id: 'bab-7',
        title: 'Bab 7: Manajemen Risiko dan Diversifikasi',
        category: 'strategy',
        summary: 'Lindungi investasi Anda dengan diversifikasi dan strategi manajemen risiko.',
        content: `
            <div class="content-card" id="prinsip-diversifikasi">
                <h3>Prinsip Diversifikasi</h3>
                <p>"Don't put all your eggs in one basket" - Jangan menaruh semua telur dalam satu keranjang. Diversifikasi adalah cara terbaik mengurangi risiko tanpa mengurangi return secara signifikan. Ini adalah fondasi manajemen risiko yang membantu melindungi portofolio Anda dari kinerja buruk satu aset atau sektor tertentu.</p>
                <p><strong>Manfaat Diversifikasi:</strong> Mengurangi volatilitas portofolio, meningkatkan potensi return jangka panjang dengan mengurangi dampak kerugian besar dari satu investasi, dan menjaga stabilitas psikologis investor.</p>
            </div>
            <div class="content-card" id="jenis-diversifikasi">
                <h3>Jenis Diversifikasi</h3>
                <p>Diversifikasi dapat dilakukan dalam berbagai dimensi:</p>
                <ul>
                    <li><strong>Diversifikasi Aset:</strong> Menyebarkan investasi ke berbagai kelas aset seperti saham, obligasi, emas, dan properti. Setiap aset bereaksi berbeda terhadap kondisi ekonomi, sehingga saat satu turun, yang lain mungkin naik atau stabil.</li>
                    <li><strong>Diversifikasi Sektor:</strong> Berinvestasi di berbagai sektor ekonomi (misal: perbankan, konsumer, teknologi, infrastruktur). Kinerja satu sektor bisa berbeda jauh dari sektor lain.</li>
                    <li><strong>Diversifikasi Geografis:</strong> Berinvestasi di pasar domestik dan internasional. Mengurangi risiko negara dan memanfaatkan peluang pertumbuhan di berbagai wilayah dunia.</li>
                    <li><strong>Diversifikasi Waktu (Dollar Cost Averaging):</strong> Menginvestasikan jumlah tetap secara rutin. Mengurangi risiko timing karena Anda membeli di berbagai titik harga, baik saat harga tinggi maupun rendah.</li>
                    <li><strong>Diversifikasi Ukuran Kapitalisasi:</strong> Berinvestasi di saham perusahaan besar (blue-chip), menengah (mid-cap), dan kecil (small-cap) untuk menyeimbangkan stabilitas dan potensi pertumbuhan agresif.</li>
                </ul>
            </div>
            <div class="content-card" id="manajemen-risiko">
                <h3>Manajemen Risiko</h3>
                <p>Manajemen risiko adalah proses identifikasi, penilaian, dan pengendalian risiko investasi untuk meminimalkan dampak negatif terhadap portofolio Anda.</p>
                <ul>
                    <li><strong>Stop Loss:</strong> Batasi kerugian maksimal pada setiap investasi. Ini adalah perintah otomatis untuk menjual aset jika harganya turun ke level tertentu, mencegah kerugian lebih lanjut.</li>
                    <li><strong>Position Sizing:</strong> Jangan investasi lebih dari 5-10% portofolio pada satu saham atau aset tunggal. Ini membatasi dampak jika satu investasi mengalami kerugian besar.</li>
                    <li><strong>Rebalancing:</strong> Sesuaikan alokasi aset secara berkala (misal: setiap 6-12 bulan) untuk mengembalikan portofolio ke alokasi target awal Anda. Ini memaksa Anda untuk "menjual tinggi" (aset yang tumbuh melebihi target) dan "membeli rendah" (aset yang tertinggal).</li>
                    <li><strong>Dana Darurat:</strong> Pastikan Anda memiliki dana darurat yang cukup (3-6 bulan pengeluaran) di instrumen likuid sebelum berinvestasi. Ini mencegah Anda terpaksa menjual investasi saat pasar turun untuk kebutuhan mendesak.</li>
                </ul>
            </div>
            <div class="content-card" id="risiko-yang-harus-dipahami">
                <h3>Risiko yang Harus Dipahami</h3>
                <p>Setiap investasi memiliki risiko. Memahami risiko-risiko ini membantu Anda membuat keputusan yang lebih baik:</p>
                <ul>
                    <li><strong>Risiko Pasar (Systematic Risk):</strong> Risiko bahwa seluruh pasar akan turun karena faktor ekonomi makro (misal: resesi, kenaikan suku bunga). Tidak dapat dihindari melalui diversifikasi.</li>
                    <li><strong>Risiko Kredit (Credit Risk):</strong> Risiko bahwa penerbit obligasi (pemerintah atau perusahaan) akan gagal membayar utangnya. Lebih tinggi pada obligasi korporasi dengan rating rendah.</li>
                    <li><strong>Risiko Likuiditas (Liquidity Risk):</strong> Risiko bahwa aset sulit dijual dengan cepat tanpa memengaruhi harganya secara signifikan. Properti seringkali memiliki risiko likuiditas tinggi.</li>
                    <li><strong>Risiko Inflasi (Purchasing Power Risk):</strong> Risiko bahwa inflasi akan mengikis daya beli pengembalian investasi Anda. Jika inflasi 5% dan investasi Anda menghasilkan 4%, Anda sebenarnya rugi daya beli.</li>
                    <li><strong>Risiko Mata Uang (Currency Risk):</strong> Fluktuasi nilai tukar mata uang asing dapat memengaruhi nilai investasi internasional Anda.</li>
                    <li><strong>Risiko Suku Bunga (Interest Rate Risk):</strong> Perubahan suku bunga dapat memengaruhi harga obligasi. Kenaikan suku bunga umumnya menurunkan harga obligasi yang sudah ada.</li>
                </ul>
            </div>
        `,
        subtopics: [
            { id: 'prinsip-diversifikasi', title: 'Prinsip Diversifikasi' },
            { id: 'jenis-diversifikasi', title: 'Jenis Diversifikasi' },
            { id: 'manajemen-risiko', title: 'Manajemen Risiko' },
            { id: 'risiko-yang-harus-dipahami', title: 'Risiko yang Harus Dipahami' }
        ]
    },
    {
        id: 'bab-8',
        title: 'Bab 8: Timing dan Strategi Entry-Exit',
        category: 'strategy',
        summary: 'Pelajari kapan waktu terbaik untuk masuk dan keluar dari pasar investasi.',
        content: `
            <div class="content-card" id="konsep-market-timing">
                <h3>Konsep Market Timing</h3>
                <p>Market timing adalah usaha untuk memprediksi kapan harus masuk dan keluar pasar pada titik harga optimal. Walaupun menarik, penelitian menunjukkan bahwa "time in the market" (berapa lama Anda berinvestasi) lebih penting daripada "timing the market" (kapan Anda masuk/keluar).</p>
                <p>Mencoba menebak puncak dan lembah pasar sangat sulit, bahkan bagi para profesional. Seringkali, investor yang mencoba market timing justru kehilangan potensi keuntungan karena melewatkan hari-hari terbaik pasar.</p>
            </div>
            <div class="content-card" id="strategi-entry">
                <h3>Strategi Entry (Masuk Pasar)</h3>
                <p>Memilih kapan dan bagaimana memulai investasi:</p>
                <ul>
                    <li><strong>Dollar Cost Averaging (DCA):</strong> Investasi jumlah tetap secara rutin (misal: Rp 1 juta setiap bulan) tanpa memperhatikan harga aset. Mengurangi risiko timing karena Anda membeli lebih banyak unit ketika harga turun dan lebih sedikit ketika harga naik. Cocok untuk investor pemula dan jangka panjang.</li>
                    <li><strong>Value Averaging:</strong> Strategi yang lebih kompleks di mana Anda menyesuaikan jumlah investasi berdasarkan kinerja portofolio. Anda investasi lebih banyak ketika portofolio kurang perform dan lebih sedikit (atau bahkan menjual) ketika portofolio melebihi target. Berpotensi return lebih baik dari DCA, tetapi lebih aktif.</li>
                    <li><strong>Lump Sum:</strong> Menginvestasikan sekaligus dalam jumlah besar. Secara statistik, lump sum seringkali mengungguli DCA dalam jangka panjang di pasar yang cenderung naik, tetapi risikonya lebih tinggi jika pasar langsung turun setelah Anda masuk. Cocok jika Anda yakin market akan naik atau memiliki dana besar yang siap diinvestasikan.</li>
                </ul>
            </div>
            <div class="content-card" id="strategi-exit">
                <h3>Strategi Exit (Keluar Pasar)</h3>
                <p>Menentukan kapan dan bagaimana menjual investasi Anda:</p>
                <ul>
                    <li><strong>Target Profit:</strong> Tentukan target keuntungan sejak awal (misal: jual jika saham naik 20%). Ambil profit secara bertahap (misal: jual 25% setiap kali target tercapai) untuk menghindari keserakahan dan mengunci keuntungan.</li>
                    <li><strong>Stop Loss:</strong> Batasi kerugian maksimal. Ini adalah perintah otomatis untuk menjual aset jika harganya turun ke level tertentu (misal: jual jika saham turun 10% dari harga beli). Disiplin memotong loss sangat penting untuk capital preservation (melindungi modal).</li>
                    <li><strong>Rebalancing:</strong> Jual aset yang overweight (porsinya melebihi target) dan beli aset yang underweight (porsinya di bawah target) untuk maintain alokasi portofolio target Anda. Ini secara otomatis memaksa Anda menjual tinggi dan membeli rendah.</li>
                    <li><strong>Perubahan Fundamental:</strong> Jual jika fundamental perusahaan memburuk secara signifikan, terlepas dari pergerakan harga.</li>
                    <li><strong>Tujuan Tercapai:</strong> Jual investasi Anda ketika tujuan keuangan Anda (misal: dana pensiun, uang muka rumah) sudah tercapai.</li>
                </ul>
            </div>
            <div class="content-card" id="indikator-timing">
                <h3>Indikator Timing</h3>
                <p>Meskipun market timing sulit, beberapa indikator dapat memberikan gambaran tentang kondisi pasar:</p>
                <ul>
                    <li><strong>Market Valuation:</strong> Rasio seperti PER pasar (rata-rata PER saham di indeks) atau PBV pasar dapat menunjukkan apakah pasar secara keseluruhan undervalued atau overvalued.</li>
                    <li><strong>Sentiment Indicator:</strong> Mengukur sentimen investor (misal: Fear & Greed Index). Sentimen ekstrem (terlalu takut atau terlalu serakah) seringkali mendahului pembalikan pasar.</li>
                    <li><strong>Technical Indicator:</strong> Moving Average, RSI, MACD, dan pola grafik dapat memberikan sinyal jangka pendek untuk entry/exit.</li>
                    <li><strong>Fundamental Indicator:</strong> Data ekonomi (PDB, inflasi, tingkat pengangguran), laporan pendapatan perusahaan, dan kebijakan bank sentral dapat memengaruhi arah pasar jangka panjang.</li>
                </ul>
            </div>
        `,
        subtopics: [
            { id: 'konsep-market-timing', title: 'Konsep Market Timing' },
            { id: 'strategi-entry', title: 'Strategi Entry' },
            { id: 'strategi-exit', title: 'Strategi Exit' },
            { id: 'indikator-timing', title: 'Indikator Timing' }
        ]
    },
    {
        id: 'bab-9',
        title: 'Bab 9: Evaluasi dan Rebalancing Portofolio',
        category: 'strategy',
        summary: 'Jaga portofolio Anda tetap optimal dengan evaluasi dan penyesuaian berkala.',
        content: `
            <div class="content-card" id="mengukur-kinerja-portfolio">
                <h3>Mengukur Kinerja Portofolio</h3>
                <p>Penting untuk secara rutin mengevaluasi kinerja portofolio Anda untuk memastikan Anda berada di jalur yang benar menuju tujuan keuangan.</p>
                <ul>
                    <li><strong>Absolute Return:</strong> Berapa persen keuntungan atau kerugian yang Anda peroleh dalam periode tertentu. Contoh: Jika investasi Rp 10 juta menjadi Rp 11 juta dalam setahun, absolute return adalah 10%.</li>
                    <li><strong>Relative Return:</strong> Membandingkan kinerja portofolio Anda dengan benchmark yang relevan. Contoh: Jika portofolio saham Anda naik 15% sementara IHSG naik 10%, Anda outperform benchmark.</li>
                    <li><strong>Risk-Adjusted Return:</strong> Mengukur pengembalian yang Anda peroleh per unit risiko yang diambil. Sharpe Ratio adalah salah satu metrik populer. Portofolio dengan return tinggi tetapi risiko sangat tinggi mungkin tidak seefisien portofolio dengan return sedikit lebih rendah tetapi risiko jauh lebih rendah.</li>
                </ul>
            </div>
            <div class="content-card" id="benchmark-yang-tepat">
                <h3>Benchmark yang Tepat</h3>
                <p>Memilih benchmark yang sesuai sangat penting untuk evaluasi yang akurat:</p>
                <ul>
                    <li><strong>Portofolio Saham:</strong> Bandingkan dengan IHSG (Indeks Harga Saham Gabungan) atau indeks saham lain yang relevan (misal: IDX30 untuk saham blue-chip).</li>
                    <li><strong>Portofolio Obligasi:</strong> Bandingkan dengan indeks obligasi pemerintah (misal: Indeks Obligasi Pemerintah Indonesia) atau indeks obligasi korporasi.</li>
                    <li><strong>Portofolio Campuran:</strong> Bandingkan dengan indeks campuran yang sesuai dengan alokasi aset Anda (misal: 60% IHSG + 40% Indeks Obligasi).</li>
                </ul>
            </div>
            <div class="content-card" id="rebalancing-portfolio">
                <h3>Rebalancing Portofolio</h3>
                <p>Rebalancing adalah proses menyesuaikan alokasi aset dalam portofolio Anda kembali ke target awal. Ini adalah strategi manajemen risiko yang disiplin.</p>
                <h4>Kapan Rebalancing:</h4>
                <ul>
                    <li><strong>Secara berkala:</strong> Setiap 6-12 bulan adalah frekuensi yang umum. Ini membuat Anda disiplin dan tidak terlalu sering bereaksi terhadap fluktuasi jangka pendek.</li>
                    <li><strong>Ketika alokasi menyimpang:</strong> Jika porsi aset tertentu menyimpang lebih dari 5% dari target awal (misal: saham target 60%, tapi sudah jadi 70%), saatnya rebalancing.</li>
                    <li><strong>Ketika ada perubahan profil risiko/tujuan:</strong> Jika usia Anda bertambah atau tujuan investasi berubah, alokasi target Anda mungkin perlu disesuaikan, dan diikuti dengan rebalancing.</li>
                </ul>
                <h4>Cara Rebalancing:</h4>
                <ul>
                    <li><strong>Jual aset yang overweight:</strong> Jual sebagian aset yang kinerjanya bagus dan porsinya melebihi target.</li>
                    <li><strong>Beli aset yang underweight:</strong> Gunakan hasil penjualan atau dana baru untuk membeli aset yang kinerjanya tertinggal dan porsinya di bawah target. Ini adalah strategi "jual tinggi, beli rendah" yang otomatis.</li>
                    <li><strong>Pertimbangkan tax implication:</strong> Di beberapa negara, penjualan aset bisa memicu pajak capital gain. Pertimbangkan ini saat rebalancing.</li>
                </ul>
            </div>
            <div class="content-card" id="evaluasi-berkala">
                <h3>Evaluasi Berkala</h3>
                <p>Frekuensi evaluasi dapat bervariasi, tetapi konsistensi adalah kuncinya:</p>
                <ul>
                    <li><strong>Monthly Review:</strong> Cek kinerja secara singkat. Tidak perlu action kecuali ada perubahan pasar yang sangat ekstrem. Fokus pada berita penting.</li>
                    <li><strong>Quarterly Review:</strong> Evaluasi alokasi aset. Lakukan minor adjustment jika ada penyimpangan kecil.</li>
                    <li><strong>Annual Review:</strong> Review strategi investasi secara keseluruhan. Lakukan major rebalancing jika diperlukan. Tinjau kembali tujuan keuangan dan profil risiko Anda.</li>
                </ul>
            </div>
            <div class="content-card" id="red-flags-portfolio">
                <h3>Red Flags Portofolio (Tanda Bahaya)</h3>
                <p>Waspadai tanda-tanda ini yang mungkin menunjukkan masalah dalam portofolio Anda:</p>
                <ul>
                    <li><strong>Terkonsentrasi pada satu aset/sektor:</strong> Risiko tinggi jika aset/sektor tersebut anjlok.</li>
                    <li><strong>Konsisten underperform benchmark:</strong> Jika portofolio Anda terus-menerus lebih buruk dari benchmark yang relevan, mungkin ada yang salah dengan strategi atau pilihan investasi Anda.</li>
                    <li><strong>Volatilitas terlalu tinggi untuk profil risiko:</strong> Jika Anda sering merasa cemas atau panik karena fluktuasi nilai, portofolio Anda mungkin terlalu agresif.</li>
                    <li><strong>Tidak sesuai dengan tujuan investasi:</strong> Jika alokasi aset Anda tidak lagi mendukung tujuan keuangan atau horizon waktu Anda.</li>
                    <li><strong>Biaya investasi terlalu tinggi:</strong> Biaya yang tinggi dapat mengikis return Anda secara signifikan dalam jangka panjang.</li>
                </ul>
            </div>
        `,
        subtopics: [
            { id: 'mengukur-kinerja-portfolio', title: 'Mengukur Kinerja Portofolio' },
            { id: 'benchmark-yang-tepat', title: 'Benchmark yang Tepat' },
            { id: 'rebalancing-portfolio', title: 'Rebalancing Portofolio' },
            { id: 'evaluasi-berkala', title: 'Evaluasi Berkala' },
            { id: 'red-flags-portfolio', title: 'Red Flags Portofolio' }
        ]
    },
    {
        id: 'bab-10',
        title: 'Bab 10: Kesalahan Umum dan Cara Menghindarinya',
        category: 'mindset',
        summary: 'Hindari jebakan umum yang sering dilakukan investor pemula maupun berpengalaman.',
        content: `
            <div class="content-card" id="kesalahan-mindset">
                <h3>Kesalahan Mindset</h3>
                <ul>
                    <li><strong>Mengejar Hot Tips:</strong> Investasi berdasarkan rumors, rekomendasi yang tidak jelas, atau "pom-pom" dari media sosial. Solusi: Lakukan riset sendiri (DYOR - Do Your Own Research), jangan ikut-ikutan.</li>
                    <li><strong>FOMO (Fear of Missing Out):</strong> Membeli di puncak karena takut ketinggalan kereta saat pasar sedang euforia. Solusi: Stick to your plan, investasi rutin (DCA), dan bersabar.</li>
                    <li><strong>Panic Selling:</strong> Jual rugi ketika pasar turun drastis karena ketakutan. Solusi: Pahami bahwa volatilitas adalah normal, fokus pada jangka panjang, dan jangan biarkan emosi menguasai.</li>
                    <li><strong>Overconfidence:</strong> Merasa bisa memprediksi pasar atau memilih saham terbaik secara konsisten. Solusi: Tetap rendah hati, pasar tidak dapat diprediksi, dan diversifikasi adalah teman terbaik Anda.</li>
                </ul>
            </div>
            <div class="content-card" id="kesalahan-teknis">
                <h3>Kesalahan Teknis</h3>
                <ul>
                    <li><strong>Tidak Diversifikasi:</strong> Menaruh semua uang di satu saham atau satu jenis aset/sektor. Ini adalah resep untuk bencana. Solusi: Sebarkan risiko Anda ke berbagai aset, sektor, dan wilayah geografis.</li>
                    <li><strong>Overleveraging:</strong> Menggunakan utang (pinjaman, margin trading) secara berlebihan untuk investasi. Ini memperbesar potensi keuntungan dan kerugian. Solusi: Hanya investasikan apa yang Anda mampu untuk kehilangan, hindari utang untuk investasi.</li>
                    <li><strong>Tidak Punya Emergency Fund:</strong> Menginvestasikan semua uang tanpa memiliki dana darurat yang memadai. Solusi: Siapkan dana darurat 6-12 bulan pengeluaran di instrumen yang sangat likuid (deposito, reksa dana pasar uang) sebelum memulai investasi.</li>
                    <li><strong>Mengabaikan Biaya:</strong> Tidak memperhatikan biaya transaksi, biaya pengelolaan reksa dana, atau pajak. Biaya-biaya ini dapat mengikis return Anda secara signifikan dalam jangka panjang. Solusi: Pilih investasi dengan biaya rendah.</li>
                </ul>
            </div>
            <div class="content-card" id="kesalahan-strategi">
                <h3>Kesalahan Strategi</h3>
                <ul>
                    <li><strong>Tidak Punya Rencana:</strong> Investasi tanpa tujuan yang jelas, tanpa target, dan tanpa pemahaman profil risiko. Solusi: Tetapkan tujuan SMART yang jelas dan buat rencana investasi yang terperinci.</li>
                    <li><strong>Terlalu Sering Trading (Over-trading):</strong> Terlalu sering membeli dan menjual aset dalam upaya mengejar keuntungan cepat. Ini seringkali mengurangi return karena biaya transaksi dan keputusan emosional. Solusi: Fokus pada strategi "buy and hold" untuk jangka panjang, atau jika ingin trading, batasi dan disiplinkan diri.</li>
                    <li><strong>Mengabaikan Rebalancing:</strong> Membiarkan alokasi aset menyimpang jauh dari target awal. Solusi: Evaluasi dan rebalancing portofolio secara berkala untuk menjaga profil risiko dan mengunci keuntungan.</li>
                    <li><strong>Tidak Belajar:</strong> Berinvestasi tanpa mau terus belajar dan memperbarui pengetahuan. Pasar terus berubah. Solusi: Edukasi berkelanjutan adalah kunci.</li>
                </ul>
            </div>
            <div class="content-card" id="kesalahan-psikologis">
                <h3>Kesalahan Psikologis</h3>
                <ul>
                    <li><strong>Confirmation Bias:</strong> Hanya mencari informasi yang mendukung keyakinan atau posisi investasi Anda, dan mengabaikan informasi yang bertentangan. Solusi: Cari beragam perspektif dan pertimbangkan argumen yang berlawanan.</li>
                    <li><strong>Analysis Paralysis:</strong> Terlalu banyak analisis dan riset hingga tidak pernah mengambil tindakan. Solusi: "Done is better than perfect." Mulai kecil, belajar dari pengalaman.</li>
                    <li><strong>Recency Bias:
                    ):</strong> Memberi bobot lebih besar pada kejadian atau informasi terbaru, dan berasumsi tren baru-baru ini akan terus berlanjut.</li>
                </ul>
            </div>
            <div class="content-card" id="cara-menghindari-kesalahan">
                <h3>Cara Menghindari Kesalahan</h3>
                <ul>
                    <li><strong>Edukasi Berkelanjutan:</strong> Terus belajar tentang investasi, ekonomi, dan pasar.</li>
                    <li><strong>Start Small:</strong> Mulai dengan jumlah kecil untuk membangun pengalaman dan kepercayaan diri.</li>
                    <li><strong>Diversifikasi:</strong> Jangan taruh semua telur dalam satu keranjang.</li>
                    <li><strong>Long-term Perspective:</strong> Fokus pada tujuan jangka panjang, abaikan fluktuasi jangka pendek.</li>
                    <li><strong>Regular Review:</strong> Evaluasi portofolio secara berkala (tahunan) dan rebalancing.</li>
                    <li><strong>Professional Help:</strong> Konsultasi dengan perencana keuangan profesional jika perlu, terutama untuk situasi yang kompleks.</li>
                    <li><strong>Buat Rencana dan Patuhi:</strong> Rencana yang solid adalah benteng terbaik melawan emosi.</li>
                </ul>
            </div>
        `,
        subtopics: [
            { id: 'kesalahan-mindset', title: 'Kesalahan Mindset' },
            { id: 'kesalahan-teknis', title: 'Kesalahan Teknis' },
            { id: 'kesalahan-strategi', title: 'Kesalahan Strategi' },
            { id: 'kesalahan-psikologis', title: 'Kesalahan Psikologis' },
            { id: 'cara-menghindari-kesalahan', title: 'Cara Menghindari Kesalahan' }
        ]
    },
    {
        id: 'bab-11',
        title: 'Bab 11: Investasi Properti Lanjutan',
        category: 'jenis',
        summary: 'Mendalami seluk-beluk investasi properti, dari residensial hingga komersial.',
        content: `
            <div class="content-card" id="jenis-properti">
                <h3>Jenis-Jenis Properti untuk Investasi</h3>
                <ul>
                    <li><strong>Properti Residensial:</strong> Rumah tapak, apartemen, kondominium. Umumnya untuk disewakan atau dijual kembali setelah apresiasi.</li>
                    <li><strong>Properti Komersial:</strong> Ruko, kantor, gudang, pusat perbelanjaan. Potensi pendapatan sewa lebih tinggi, namun juga butuh modal lebih besar dan manajemen lebih kompleks.</li>
                    <li><strong>Tanah Kosong:</strong> Investasi jangka sangat panjang, mengandalkan kenaikan harga tanah. Tidak ada pendapatan pasif.</li>
                    <li><strong>REITs (Real Estate Investment Trusts):</strong> Investasi properti secara tidak langsung melalui saham perusahaan yang memiliki dan mengelola properti. Lebih likuid dan modal lebih kecil.</li>
                </ul>
            </div>
            <div class="content-card" id="strategi-properti">
                <h3>Strategi Investasi Properti</h3>
                <ul>
                    <li><strong>Buy and Hold (Sewa):</strong> Beli properti dan sewakan untuk mendapatkan pendapatan pasif (rental yield) dan apresiasi nilai jangka panjang.</li>
                    <li><strong>Flipping:</strong> Beli properti di bawah harga pasar, renovasi, lalu jual kembali dengan cepat untuk keuntungan (capital gain). Membutuhkan keahlian renovasi dan pemahaman pasar yang baik.</li>
                    <li><strong>Pengembangan Properti:</strong> Membeli tanah kosong dan membangun properti di atasnya untuk dijual. Risiko dan modal sangat besar, tetapi potensi keuntungan juga tinggi.</li>
                    <li><strong>Crowdfunding Properti:</strong> Berinvestasi bersama banyak orang dalam proyek properti dengan modal yang relatif kecil.</li>
                </ul>
            </div>
            <div class="content-card" id="faktor-pertimbangan-properti">
                <h3>Faktor Penting dalam Investasi Properti</h3>
                <ul>
                    <li><strong>Lokasi:</strong> "Location, location, location" adalah kunci. Aksesibilitas, fasilitas umum, dan rencana pengembangan daerah sangat memengaruhi nilai properti.</li>
                    <li><strong>Kondisi Properti:</strong> Perhatikan kondisi fisik bangunan, usia, dan kebutuhan renovasi.</li>
                    <li><strong>Regulasi dan Pajak:</strong> Pahami peraturan zonasi, IMB, PBB, BPHTB, dan pajak penghasilan sewa.</li>
                    <li><strong>Likuiditas:</strong> Properti adalah aset tidak likuid. Proses penjualan bisa memakan waktu lama.</li>
                    <li><strong>Biaya Tambahan:</strong> Biaya notaris, agen, perawatan, asuransi, dan pajak harus diperhitungkan.</li>
                </ul>
            </div>
        `,
        subtopics: [
            { id: 'jenis-properti', title: 'Jenis-Jenis Properti untuk Investasi' },
            { id: 'strategi-properti', title: 'Strategi Investasi Properti' },
            { id: 'faktor-pertimbangan-properti', title: 'Faktor Penting dalam Investasi Properti' }
        ]
    },
    {
        id: 'bab-12',
        title: 'Bab 12: Investasi Alternatif',
        category: 'jenis',
        summary: 'Mengenal pilihan investasi di luar instrumen tradisional.',
        content: `
            <div class="content-card" id="p2p-lending">
                <h3>P2P Lending (Peer-to-Peer Lending)</h3>
                <p>Menyediakan pinjaman langsung kepada individu atau bisnis kecil melalui platform online, tanpa melalui bank tradisional.</p>
                <p><strong>Keuntungan:</strong> Potensi return lebih tinggi dari deposito/obligasi, diversifikasi portofolio, modal awal kecil.</p>
                <p><strong>Kekurangan:</strong> Risiko gagal bayar tinggi (tidak dijamin LPS), likuiditas rendah, butuh analisis kredit peminjam.</p>
                <p><strong>Cocok untuk:</strong> Investor yang berani mengambil risiko lebih tinggi untuk return yang lebih besar.</p>
            </div>
            <div class="content-card" id="startup-equity-crowdfunding">
                <h3>Startup & Equity Crowdfunding</h3>
                <p>Berinvestasi pada perusahaan rintisan (startup) yang belum go public, seringkali melalui platform equity crowdfunding.</p>
                <p><strong>Keuntungan:</strong> Potensi return sangat tinggi jika startup sukses besar (unicorn), bagian dari inovasi.</p>
                <p><strong>Kekurangan:</strong> Risiko sangat tinggi (banyak startup gagal), likuiditas sangat rendah (sulit dijual), butuh analisis bisnis yang mendalam.</p>
                <p><strong>Cocok untuk:
                ):</strong> Investor super agresif yang siap kehilangan seluruh modal dan memiliki pemahaman mendalam tentang bisnis startup.</p>
            </div>
            <div class="content-card" id="barang-koleksi">
                <h3>Barang Koleksi (Seni, Wine, Mobil Klasik)</h3>
                <p>Investasi pada aset fisik yang nilainya diharapkan meningkat seiring waktu karena kelangkaan, sejarah, atau permintaan kolektor.</p>
                <p><strong>Keuntungan:</strong> Potensi apresiasi tinggi, kepuasan pribadi, lindung nilai inflasi.</p>
                <p><strong>Kekurangan:</strong> Sangat tidak likuid, butuh pengetahuan dan keahlian khusus, biaya perawatan dan penyimpanan, risiko kerusakan/pemalsuan, tidak menghasilkan pendapatan pasif.</p>
                <p><strong>Cocok untuk:</strong> Investor dengan modal besar, pengetahuan khusus, dan horizon waktu sangat panjang.</p>
            </div>
            <div class="content-card" id="komoditas">
                <h3>Komoditas (Minyak, Gas, Pertanian)</h3>
                <p>Investasi pada bahan mentah atau produk dasar, seringkali melalui ETF komoditas atau futures contract.</p>
                <p><strong>Keuntungan:</strong> Diversifikasi, lindung nilai inflasi, potensi keuntungan dari fluktuasi harga.</p>
                <p><strong>Kekurangan:</strong> Volatilitas tinggi, dipengaruhi faktor geopolitik dan cuaca, butuh pemahaman pasar futures yang kompleks.</p>
                <p><strong>Cocok untuk:</strong> Investor berpengalaman yang mencari diversifikasi dan siap dengan volatilitas.</p>
            </div>
        `,
        subtopics: [
            { id: 'p2p-lending', title: 'P2P Lending' },
            { id: 'startup-equity-crowdfunding', title: 'Startup & Equity Crowdfunding' },
            { id: 'barang-koleksi', title: 'Barang Koleksi' },
            { id: 'komoditas', title: 'Komoditas' }
        ]
    },
    {
        id: 'bab-13',
        title: 'Bab 13: Aspek Pajak dalam Investasi',
        category: 'fundamental',
        summary: 'Memahami kewajiban pajak atas keuntungan investasi Anda.',
        content: `
            <div class="content-card" id="pajak-capital-gain">
                <h3>Pajak Capital Gain</h3>
                <p>Capital gain adalah keuntungan yang Anda peroleh dari penjualan aset investasi (misalnya saham, properti, reksa dana) dengan harga yang lebih tinggi dari harga pembelian. Di Indonesia, pajak atas capital gain bervariasi tergantung jenis aset:</p>
                <ul>
                    <li><strong>Saham:</strong> Pajak final 0,1% dari nilai transaksi penjualan (tidak peduli untung atau rugi). Dividen dikenakan PPh final 10% bagi wajib pajak orang pribadi dalam negeri.</li>
                    <li><strong>Obligasi:</strong> Bunga obligasi dan capital gain dari penjualan obligasi dikenakan PPh final 10%.</li>
                    <li><strong>Reksa Dana:</strong> Keuntungan reksa dana (capital gain) tidak dikenakan pajak karena reksa dana bukan objek pajak. Investor hanya dikenakan pajak saat mencairkan dana dari reksa dana jika ada keuntungan, dan ini biasanya sudah dipotong oleh Manajer Investasi.</li>
                    <li><strong>Properti:</strong> Penjualan properti dikenakan PPh final 2,5% dari nilai bruto pengalihan hak atas tanah/bangunan bagi penjual. Pembeli dikenakan BPHTB (Bea Perolehan Hak atas Tanah dan Bangunan) sebesar 5%.</li>
                </ul>
            </div>
            <div class="content-card" id="pajak-penghasilan-dividen">
                <h3>Pajak Penghasilan Dividen dan Bunga</h3>
                <p>Selain capital gain, pendapatan dari dividen dan bunga juga dikenakan pajak:</p>
                <ul>
                    <li><strong>Dividen Saham:</strong> Bagi investor individu dalam negeri, dividen dikenakan PPh final 10%. Namun, ada ketentuan pengecualian jika dividen diinvestasikan kembali di dalam negeri sesuai peraturan terbaru (UU Cipta Kerja dan turunannya).</li>
                    <li><strong>Bunga Obligasi:</strong> Dikenakan PPh final 10%.</li>
                    <li><strong>Bunga Deposito:</strong> Dikenakan PPh final 20% untuk bunga deposito di atas Rp 7,5 juta.</li>
                </ul>
            </div>
            <div class="content-card" id="pentingnya-perencanaan-pajak">
                <h3>Pentingnya Perencanaan Pajak</h3>
                <p>Memahami aspek pajak adalah bagian penting dari strategi investasi. Perencanaan pajak yang baik dapat membantu mengoptimalkan return bersih Anda.</p>
                <ul>
                    <li><strong>Manfaatkan Insentif Pajak:</strong> Beberapa instrumen investasi atau skema investasi mungkin memiliki insentif pajak (misal: pengecualian pajak dividen jika diinvestasikan kembali).</li>
                    <li><strong>Lapor Pajak dengan Benar:</strong> Pastikan Anda melaporkan semua penghasilan investasi Anda dalam SPT Tahunan sesuai ketentuan yang berlaku.</li>
                    <li><strong>Konsultasi dengan Ahli:</strong> Jika portofolio Anda kompleks atau Anda tidak yakin, konsultasikan dengan konsultan pajak atau perencana keuangan profesional.</li>
                </ul>
            </div>
        `,
        subtopics: [
            { id: 'pajak-capital-gain', title: 'Pajak Capital Gain' },
            { id: 'pajak-penghasilan-dividen', title: 'Pajak Penghasilan Dividen dan Bunga' },
            { id: 'pentingnya-perencanaan-pajak', title: 'Pentingnya Perencanaan Pajak' }
        ]
    },
    {
        id: 'bab-14',
        title: 'Bab 14: Psikologi Pasar dan Behavioral Finance',
        category: 'mindset',
        summary: 'Bagaimana emosi dan bias kognitif memengaruhi keputusan investasi.',
        content: `
            <div class="content-card" id="emosi-dan-investasi">
                <h3>Emosi dan Pengambilan Keputusan Investasi</h3>
                <p>Manusia adalah makhluk emosional, dan emosi seringkali menjadi musuh terbesar investor. Fear (ketakutan) dan Greed (keserakahan) adalah dua emosi dominan yang mendorong keputusan irasional.</p>
                <ul>
                    <li><strong>Fear:</strong> Mendorong penjualan panik saat pasar jatuh, mengunci kerugian.</li>
                    <li><strong>Greed:</strong> Mendorong pembelian di harga puncak saat pasar euforia, mengejar keuntungan yang sudah lewat.</li>
                </ul>
                <p>Disiplin dan rencana investasi yang jelas adalah benteng terbaik melawan emosi ini.</p>
            </div>
            <div class="content-card" id="bias-kognitif-investor">
                <h3>Bias Kognitif Umum pada Investor</h3>
                <p>Behavioral finance mempelajari bagaimana psikologi memengaruhi perilaku investor. Beberapa bias umum meliputi:</p>
                <ul>
                    <li><strong>Confirmation Bias:</strong> Cenderung mencari, menafsirkan, dan mengingat informasi yang mendukung keyakinan awal kita sendiri. Investor mungkin hanya membaca berita yang mendukung saham yang mereka miliki.</li>
                    <li><strong>Anchoring Bias:</strong> Terlalu mengandalkan informasi pertama yang diterima (jangkar) saat membuat keputusan. Misalnya, terlalu terpaku pada harga beli awal saham.</li>
                    <li><strong>Herd Mentality (Efek Ikut-ikutan):</strong> Kecenderungan untuk mengikuti tindakan atau perilaku kelompok yang lebih besar, terlepas dari analisis rasional. Ini sering terjadi saat ada "bubble" atau "crash" pasar.</li>
                    <li><strong>Loss Aversion:</strong> Rasa sakit kehilangan uang lebih kuat daripada kesenangan mendapatkan uang dalam jumlah yang sama. Ini bisa menyebabkan investor menahan saham yang merugi terlalu lama.</li>
                    <li><strong>Overconfidence Bias:</strong> Keyakinan berlebihan pada kemampuan diri sendiri, seringkali menyebabkan pengambilan risiko yang tidak perlu atau trading berlebihan.</li>
                    <li><strong>Recency Bias:
                    ):</strong> Memberi bobot lebih besar pada kejadian atau informasi terbaru, dan berasumsi tren baru-baru ini akan terus berlanjut.</li>
                </ul>
            </div>
            <div class="content-card" id="mengatasi-bias">
                <h3>Mengatasi Bias Perilaku</h3>
                <p>Mengidentifikasi bias adalah langkah pertama. Berikut cara mengatasinya:</p>
                <ul>
                    <li><strong>Buat Rencana Investasi Tertulis:</strong> Tetapkan tujuan, alokasi aset, dan strategi exit/entry di awal. Patuhi rencana ini.</li>
                    <li><strong>Diversifikasi:</strong> Mengurangi dampak keputusan buruk pada satu aset.</li>
                    <li><strong>Dollar Cost Averaging (DCA):</strong> Otomatisasi investasi mengurangi godaan untuk market timing.</li>
                    <li><strong>Rebalancing Portofolio:</strong> Memaksa Anda untuk menjual aset yang berkinerja baik dan membeli aset yang tertinggal, melawan keserakahan dan ketakutan.</li>
                    <li><strong>Edukasi Berkelanjutan:</strong> Pahami cara kerja pasar dan psikologi manusia.</li>
                    <li><strong>Cari Perspektif Berbeda:</strong> Jangan hanya membaca berita yang mendukung pandangan Anda.</li>
                </ul>
            </div>
        `,
        subtopics: [
            { id: 'emosi-dan-investasi', title: 'Emosi dan Pengambilan Keputusan Investasi' },
            { id: 'bias-kognitif-investor', title: 'Bias Kognitif Umum pada Investor' },
            { id: 'mengatasi-bias', title: 'Mengatasi Bias Perilaku' }
        ]
    },
    {
        id: 'bab-15',
        title: 'Bab 15: Investasi Berkelanjutan (ESG)',
        category: 'strategy',
        summary: 'Mengenal investasi yang mempertimbangkan faktor Lingkungan, Sosial, dan Tata Kelola.',
        content: `
            <div class="content-card" id="apa-itu-esg">
                <h3>Apa Itu Investasi ESG?</h3>
                <p>Investasi ESG (Environmental, Social, and Governance) adalah pendekatan investasi yang mempertimbangkan faktor-faktor lingkungan, sosial, dan tata kelola perusahaan di samping analisis keuangan tradisional. Tujuannya adalah untuk berinvestasi pada perusahaan yang tidak hanya menguntungkan secara finansial, tetapi juga bertanggung jawab secara etis dan berkelanjutan.</p>
                <ul>
                    <li><strong>Environmental (Lingkungan):</strong> Dampak perusahaan terhadap lingkungan (emisi karbon, pengelolaan limbah, penggunaan sumber daya terbarukan).</li>
                    <li><strong>Social (Sosial):</strong> Hubungan perusahaan dengan karyawan, pelanggan, pemasok, dan komunitas (hak asasi manusia, kondisi kerja, keragaman, keamanan produk).</li>
                    <li><strong>Governance (Tata Kelola):</strong> Kepemimpinan perusahaan, gaji eksekutif, audit, hak pemegang saham, dan transparansi.</li>
                </ul>
            </div>
            <div class="content-card" id="mengapa-esg">
                <h3>Mengapa Investasi ESG Penting?</h3>
                <ul>
                    <li><strong>Return Jangka Panjang:</strong> Banyak penelitian menunjukkan bahwa perusahaan dengan praktik ESG yang baik cenderung memiliki kinerja keuangan yang lebih stabil dan kuat dalam jangka panjang.</li>
                    <li><strong>Manajemen Risiko:</strong> Perusahaan dengan ESG yang buruk mungkin menghadapi risiko regulasi, reputasi, dan operasional yang lebih tinggi.</li>
                    <li><strong>Dampak Positif:</strong> Investor dapat menyelaraskan nilai-nilai pribadi mereka dengan investasi mereka, berkontribusi pada dunia yang lebih baik.</li>
                    <li><strong>Permintaan Pasar:</strong> Semakin banyak investor institusional dan individu yang beralih ke investasi ESG, mendorong pertumbuhan pasar ini.</li>
                </ul>
            </div>
            <div class="content-card" id="cara-berinvestasi-esg">
                <h3>Cara Berinvestasi dalam ESG</h3>
                <ul>
                    <li><strong>Reksa Dana ESG/ETF ESG:</strong> Cara termudah untuk mendapatkan eksposur ke portofolio perusahaan yang telah disaring berdasarkan kriteria ESG.</li>
                    <li><strong>Saham Individual:</strong> Lakukan riset mendalam pada perusahaan yang Anda yakini memiliki praktik ESG yang kuat. Periksa laporan keberlanjutan mereka.</li>
                    <li><strong>Green Bonds/Social Bonds:</strong> Obligasi yang diterbitkan untuk mendanai proyek-proyek dengan dampak lingkungan atau sosial positif.</li>
                </ul>
            </div>
        `,
        subtopics: [
            { id: 'apa-itu-esg', title: 'Apa Itu Investasi ESG?' },
            { id: 'mengapa-esg', title: 'Mengapa Investasi ESG Penting?' },
            { id: 'cara-berinvestasi-esg', title: 'Cara Berinvestasi dalam ESG' }
        ]
    },
    {
        id: 'bab-16',
        title: 'Bab 16: Membangun Kekayaan Jangka Panjang',
        category: 'strategy',
        summary: 'Strategi komprehensif untuk pertumbuhan kekayaan yang berkelanjutan.',
        content: `
            <div class="content-card" id="kekuatan-compound-interest">
                <h3>Kekuatan Bunga Berbunga (Compound Interest)</h3>
                <p>Albert Einstein pernah berkata, "Compound interest is the eighth wonder of the world. He who understands it, earns it; he who doesn't, pays it." Mulai investasi sedini mungkin adalah kunci untuk memaksimalkan efek bunga berbunga. Bahkan jumlah kecil yang diinvestasikan secara teratur dapat tumbuh menjadi jumlah yang signifikan seiring waktu.</p>
                <p><strong>Contoh:</strong> Jika Anda menginvestasikan Rp 1 juta setiap bulan dengan rata-rata return 10% per tahun, dalam 30 tahun Anda bisa memiliki lebih dari Rp 2,2 miliar. Jika Anda menunda 10 tahun, hasilnya bisa jauh lebih kecil.</p>
            </div>
            <div class="content-card" id="investasi-rutin-dca">
                <h3>Investasi Rutin (Dollar Cost Averaging - DCA)</h3>
                <p>DCA adalah strategi di mana Anda menginvestasikan jumlah uang tetap secara rutin (misal: bulanan) terlepas dari fluktuasi harga pasar. Ini menghilangkan kebutuhan untuk market timing dan secara otomatis membuat Anda membeli lebih banyak unit saat harga rendah dan lebih sedikit saat harga tinggi.</p>
                <p><strong>Manfaat DCA:</strong> Mengurangi risiko volatilitas, membangun kebiasaan investasi yang disiplin, dan mengurangi stres emosional akibat fluktuasi pasar.</p>
            </div>
            <div class="content-card" id="diversifikasi-efektif">
                <h3>Diversifikasi yang Efektif</h3>
                <p>Diversifikasi bukan hanya tentang memiliki banyak aset, tetapi memiliki aset yang tidak berkorelasi satu sama lain. Ketika satu aset turun, aset lain mungkin naik atau stabil. Ini mengurangi risiko keseluruhan portofolio tanpa mengorbankan potensi return secara signifikan.</p>
                <p><strong>Contoh:</strong> Kombinasi saham, obligasi, emas, dan properti dapat menciptakan portofolio yang lebih stabil daripada hanya berinvestasi pada satu jenis aset.</p>
            </div>
            <div class="content-card" id="reinvestasi-keuntungan">
                <h3>Reinvestasi Keuntungan</h3>
                <p>Untuk memaksimalkan bunga berbunga, reinvestasikan dividen, bunga, atau capital gain yang Anda peroleh. Dengan demikian, uang Anda akan terus bekerja dan menghasilkan lebih banyak uang.</p>
            </div>
            <div class="content-card" id="hidup-di-bawah-kemampuan">
                <h3>Hidup di Bawah Kemampuan dan Menabung Lebih Banyak</h3>
                <p>Fondasi dari pembangunan kekayaan adalah kemampuan untuk menabung dan berinvestasi. Dengan mengendalikan pengeluaran dan hidup di bawah kemampuan, Anda dapat mengalokasikan lebih banyak dana untuk investasi, yang akan mempercepat pertumbuhan kekayaan Anda.</p>
            </div>
        `,
        subtopics: [
            { id: 'kekuatan-compound-interest', title: 'Kekuatan Bunga Berbunga (Compound Interest)' },
            { id: 'investasi-rutin-dca', title: 'Investasi Rutin (Dollar Cost Averaging - DCA)' },
            { id: 'diversifikasi-efektif', title: 'Diversifikasi yang Efektif' },
            { id: 'reinvestasi-keuntungan', title: 'Reinvestasi Keuntungan' },
            { id: 'hidup-di-bawah-kemampuan', title: 'Hidup di Bawah Kemampuan dan Menabung Lebih Banyak' }
        ]
    },
    {
        id: 'bab-17',
        title: 'Bab 17: Warren Buffett: Filosofi Investasi Nilai',
        category: 'tokoh',
        summary: 'Pelajari prinsip-prinsip investasi dari "Oracle of Omaha".',
        content: `
            <div class="content-card" id="siapa-warren-buffett">
                <h3>Siapa Warren Buffett?</h3>
                <p>Warren Buffett adalah salah satu investor paling sukses sepanjang masa, dikenal sebagai "Oracle of Omaha". Kekayaannya dibangun melalui investasi jangka panjang pada perusahaan-perusahaan berkualitas tinggi yang undervalued. Ia adalah CEO Berkshire Hathaway dan seorang filantropis terkemuka.</p>
            </div>
            <div class="content-card" id="prinsip-investasi-buffett">
                <h3>Prinsip-Prinsip Investasi Warren Buffett</h3>
                <ul>
                    <li><strong>Investasi Nilai (Value Investing):</strong> Beli saham perusahaan yang diperdagangkan di bawah nilai intrinsiknya. Cari "dollar for 50 cents".</li>
                    <li><strong>Fokus pada Bisnis, Bukan Saham:</strong> Anggap membeli saham sebagai membeli sebagian kecil dari bisnis. Pahami model bisnis perusahaan secara mendalam.</li>
                    <li><strong>Lingkaran Kompetensi (Circle of Competence):</strong> Hanya berinvestasi pada bisnis yang Anda pahami dengan baik. Jangan berinvestasi di luar area keahlian Anda.</li>
                    <li><strong>Parit Ekonomi (Economic Moat):</strong> Cari perusahaan dengan keunggulan kompetitif yang berkelanjutan (seperti merek kuat, biaya rendah, paten, efek jaringan) yang melindunginya dari persaingan.</li>
                    <li><strong>Margin of Safety:</strong> Beli saham dengan diskon signifikan dari nilai intrinsiknya untuk melindungi modal Anda dari kesalahan penilaian atau kejadian tak terduga.</li>
                    <li><strong>Jangka Panjang:</strong> "Our favorite holding period is forever." Fokus pada pertumbuhan jangka panjang, abaikan fluktuasi pasar jangka pendek.</li>
                    <li><strong>Manajemen yang Kompeten dan Berintegritas:</strong> Investasi pada perusahaan yang dikelola oleh tim yang jujur, cakap, dan berorientasi pada pemegang saham.</li>
                </ul>
            </div>
            <div class="content-card" id="kutipan-buffett">
                <h3>Kutipan Terkenal Warren Buffett</h3>
                <blockquote>
                    <p>"Harga adalah apa yang Anda bayar. Nilai adalah apa yang Anda dapatkan."</p>
                    <p>"Jadilah takut ketika orang lain serakah, dan serakah ketika orang lain takut."</p>
                    <p>"Aturan Nomor 1: Jangan pernah kehilangan uang. Aturan Nomor 2: Jangan pernah melupakan aturan Nomor 1."</p>
                    <p>"Lebih baik membeli perusahaan yang luar biasa dengan harga yang wajar daripada perusahaan yang wajar dengan harga yang luar biasa."</p>
                </blockquote>
            </div>
        `,
        subtopics: [
            { id: 'siapa-warren-buffett', title: 'Siapa Warren Buffett?' },
            { id: 'prinsip-investasi-buffett', title: 'Prinsip-Prinsip Investasi Warren Buffett' },
            { id: 'kutipan-buffett', title: 'Kutipan Terkenal Warren Buffett' }
        ]
    },
    {
        id: 'bab-18',
        title: 'Bab 18: Benjamin Graham: Bapak Investasi Nilai',
        category: 'tokoh',
        summary: 'Pahami dasar-dasar investasi nilai dari mentor Warren Buffett.',
        content: `
            <div class="content-card" id="siapa-benjamin-graham">
                <h3>Siapa Benjamin Graham?</h3>
                <p>Benjamin Graham adalah seorang ekonom dan investor profesional Amerika yang secara luas dianggap sebagai "Bapak Investasi Nilai". Karyanya, terutama buku "The Intelligent Investor" dan "Security Analysis", menjadi fondasi bagi banyak investor sukses, termasuk Warren Buffett.</p>
            </div>
            <div class="content-card" id="prinsip-investasi-graham">
                <h3>Prinsip-Prinsip Investasi Benjamin Graham</h3>
                <ul>
                    <li><strong>Investasi vs. Spekulasi:</strong> Graham dengan tegas membedakan antara investasi (analisis mendalam, margin of safety, tujuan jangka panjang) dan spekulasi (mencari keuntungan cepat, tanpa analisis fundamental).</li>
                    <li><strong>Margin of Safety:</strong> Konsep inti Graham. Beli saham dengan harga yang jauh di bawah nilai intrinsiknya. Ini memberikan "bantalan" terhadap kesalahan penilaian atau peristiwa pasar yang tidak menguntungkan.</li>
                    <li><strong>Mr. Market:</strong> Graham memperkenalkan alegori "Mr. Market" untuk menggambarkan volatilitas pasar. Mr. Market adalah mitra bisnis Anda yang menawarkan untuk membeli atau menjual saham Anda setiap hari dengan harga yang berbeda-beda, terkadang sangat optimis, terkadang sangat pesimis. Investor cerdas harus memanfaatkan kegilaan Mr. Market, bukan mengikutinya.</li>
                    <li><strong>Analisis Fundamental:</strong> Fokus pada laporan keuangan, aset, pendapatan, dan prospek perusahaan, bukan pada sentimen pasar atau pergerakan harga jangka pendek.</li>
                    <li><strong>Investor Defensif vs. Agresif:</strong>
                        <ul>
                            <li><strong>Investor Defensif:</strong> Mencari keamanan modal dan menghindari upaya yang tidak perlu. Fokus pada perusahaan besar, stabil, dengan rekam jejak dividen yang panjang.</li>
                            <li><strong>Investor Agresif:</strong> Bersedia meluangkan waktu dan usaha untuk mencari peluang di saham yang kurang populer atau berisiko lebih tinggi.</li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div class="content-card" id="kutipan-graham">
                <h3>Kutipan Terkenal Benjamin Graham</h3>
                <blockquote>
                    <p>"Investor cerdas adalah realis yang menjual kepada para optimis dan membeli dari para pesimis."</p>
                    <p>"Operasi investasi adalah salah satu yang, setelah analisis menyeluruh, menjanjikan keamanan pokok dan pengembalian yang memuaskan. Operasi yang tidak memenuhi persyaratan ini adalah spekulatif."</p>
                    <p>"Kunci keberhasilan investasi adalah manajemen emosi, bukan manajemen uang."</p>
                </blockquote>
            </div>
        `,
        subtopics: [
            { id: 'siapa-benjamin-graham', title: 'Siapa Benjamin Graham?' },
            { id: 'prinsip-investasi-graham', title: 'Prinsip-Prinsip Investasi Benjamin Graham' },
            { id: 'kutipan-graham', title: 'Kutipan Terkenal Benjamin Graham' }
        ]
    },
    {
        id: 'bab-19',
        title: 'Bab 19: Peter Lynch: Investasi pada Apa yang Anda Tahu',
        category: 'tokoh',
        summary: 'Pelajari pendekatan "investing in what you know" dari manajer reksa dana legendaris.',
        content: `
            <div class="content-card" id="siapa-peter-lynch">
                <h3>Siapa Peter Lynch?</h3>
                <p>Peter Lynch adalah salah satu manajer reksa dana paling sukses dalam sejarah. Ia mengelola Fidelity Magellan Fund dari tahun 1977 hingga 1990, menghasilkan rata-rata pengembalian tahunan 29,2% dan mengalahkan S&P 500 dalam 11 dari 13 tahun. Filosofinya menekankan pada investasi pada perusahaan yang produk atau layanannya dikenal baik oleh investor.</p>
            </div>
            <div class="content-card" id="prinsip-investasi-lynch">
                <h3>Prinsip-Prinsip Investasi Peter Lynch</h3>
                <ul>
                    <li><strong>Investasi pada Apa yang Anda Tahu (Invest in What You Know):</strong> Manfaatkan pengetahuan Anda sebagai konsumen atau profesional. Jika Anda menyukai produk suatu perusahaan, teliti perusahaan tersebut sebagai investasi potensial.</li>
                    <li><strong>Cari "Tenbaggers":</strong> Saham yang nilainya bisa naik sepuluh kali lipat atau lebih. Ini membutuhkan kesabaran dan kemampuan untuk mengidentifikasi perusahaan dengan potensi pertumbuhan besar.</li>
                    <li><strong>Pahami Cerita Perusahaan:</strong> Jangan hanya melihat angka. Pahami model bisnis perusahaan, keunggulan kompetitif, rencana ekspansi, dan mengapa perusahaan itu sukses atau berpotensi sukses.</li>
                    <li><strong>Perhatikan Perusahaan yang Memiliki "Niche" atau Keunggulan Kompetitif:</strong> Perusahaan dengan produk unik, merek kuat, atau posisi pasar yang dominan cenderung lebih stabil.</li>
                    <li><strong>Hindari "Hot Stocks" dan "Fads":</strong> Jangan mengejar saham yang sedang populer atau tren sesaat. Fokus pada nilai fundamental jangka panjang.</li>
                    <li><strong>Perusahaan "Stalwart" dan "Fast Growers":</strong> Lynch mengklasifikasikan perusahaan ke dalam beberapa kategori, termasuk "stalwart" (perusahaan besar, pertumbuhan lambat tapi stabil) dan "fast growers" (perusahaan kecil-menengah dengan pertumbuhan cepat).</li>
                    <li><strong>Pentingnya Riset:</strong> Meskipun ia menekankan pada "apa yang Anda tahu", Lynch juga menekankan pentingnya riset mendalam sebelum berinvestasi.</li>
                </ul>
            </div>
            <div class="content-card" id="kutipan-lynch">
                <h3>Kutipan Terkenal Peter Lynch</h3>
                <blockquote>
                    <p>"Jangan pernah berinvestasi pada perusahaan yang bisnisnya tidak bisa Anda pahami."</p>
                    <p>"Di balik setiap saham adalah sebuah perusahaan. Cari tahu apa yang mereka lakukan."</p>
                    <p>"Lebih banyak uang telah hilang karena investor mempersiapkan puncak atau memprediksi resesi daripada uang yang hilang dalam resesi itu sendiri."</p>
                    <p>"Kunci untuk menghasilkan uang di saham adalah tidak takut."</p>
                </blockquote>
            </div>
        `,
        subtopics: [
            { id: 'siapa-peter-lynch', title: 'Siapa Peter Lynch?' },
            { id: 'prinsip-investasi-lynch', title: 'Prinsip-Prinsip Investasi Peter Lynch' },
            { id: 'kutipan-lynch', title: 'Kutipan Terkenal Peter Lynch' }
        ]
    },
    {
        id: 'bab-20',
        title: 'Bab 20: Ray Dalio: Prinsip Diversifikasi dan All Weather Portfolio',
        category: 'tokoh',
        summary: 'Mempelajari pendekatan investasi berbasis prinsip dan diversifikasi dari pendiri Bridgewater Associates.',
        content: `
            <div class="content-card" id="siapa-ray-dalio">
                <h3>Siapa Ray Dalio?</h3>
                <p>Ray Dalio adalah pendiri Bridgewater Associates, salah satu hedge fund terbesar dan paling sukses di dunia. Ia dikenal karena filosofi investasi berbasis prinsip dan pendekatan "All Weather Portfolio" yang dirancang untuk berkinerja baik di berbagai kondisi ekonomi.</p>
            </div>
            <div class="content-card" id="prinsip-investasi-dalio">
                <h3>Prinsip-Prinsip Investasi Ray Dalio</h3>
                <ul>
                    <li><strong>Prinsip (Principles):</strong> Dalio percaya bahwa kesuksesan datang dari mengidentifikasi dan mengikuti prinsip-prinsip universal yang terbukti benar dari waktu ke waktu. Ini berlaku untuk hidup dan investasi.</li>
                    <li><strong>Diversifikasi adalah Kunci:</strong> Dalio adalah penganut kuat diversifikasi. Ia berpendapat bahwa diversifikasi yang tepat dapat mengurangi risiko portofolio secara signifikan tanpa mengurangi return.</li>
                    <li><strong>All Weather Portfolio:</strong> Ini adalah strategi portofolio yang dirancang untuk berkinerja baik di semua kondisi ekonomi (inflasi naik/turun, pertumbuhan naik/turun). Ini dicapai dengan menyeimbangkan aset yang berkinerja baik dalam kondisi berbeda.
                        <h4>Komponen Umum All Weather Portfolio (Contoh):</h4>
                        <ul>
                            <li><strong>30% Saham:</strong> Berkinerja baik dalam periode pertumbuhan ekonomi.</li>
                            <li><strong>40% Obligasi Jangka Panjang:</strong> Berkinerja baik dalam periode deflasi atau pertumbuhan rendah.</li>
                            <li><strong>15% Obligasi Jangka Menengah:</strong> Memberikan stabilitas dan pendapatan.</li>
                            <li><strong>7.5% Emas:</strong> Melindungi terhadap inflasi dan ketidakpastian.</li>
                            <li><strong>7.5% Komoditas:</strong> Melindungi terhadap inflasi.</li>
                        </ul>
                        <p>Ide utamanya adalah tidak mencoba memprediksi masa depan, tetapi membangun portofolio yang tangguh terhadap berbagai skenario.</p>
                    </li>
                    <li><strong>Risk Parity:</strong> Alih-alih mengalokasikan modal secara merata, Dalio mengalokasikan risiko secara merata. Ini berarti mengalokasikan lebih banyak modal ke aset yang kurang volatil (misal: obligasi) untuk mencapai tingkat risiko yang sama dengan aset yang lebih volatil (misal: saham).</li>
                    <li><strong>Belajar dari Sejarah:</strong> Dalio sangat menekankan pentingnya mempelajari sejarah ekonomi dan pasar untuk memahami pola dan siklus.</li>
                </ul>
            </div>
            <div class="content-card" id="kutipan-dalio">
                <h3>Kutipan Terkenal Ray Dalio</h3>
                <blockquote>
                    <p>"Prinsip-prinsip adalah cara untuk menghadapi kenyataan secara efektif."</p>
                    <p>"Sakit + Refleksi = Kemajuan."</p>
                    <p>"Diversifikasi adalah hal yang paling penting untuk dilakukan dengan benar dalam investasi."</p>
                    <p>"Jika Anda tidak cemas, Anda tidak berinvestasi cukup."</p>
                </blockquote>
            </div>
        `,
        subtopics: [
            { id: 'siapa-ray-dalio', title: 'Siapa Ray Dalio?' },
            { id: 'prinsip-investasi-dalio', title: 'Prinsip-Prinsip Investasi Ray Dalio?' },
            { id: 'kutipan-dalio', title: 'Kutipan Terkenal Ray Dalio' }
        ]
    },
    // --- BAB BARU DIMULAI DI SINI ---
    {
        id: 'bab-21',
        title: 'Bab 21: Perencanaan Keuangan Komprehensif',
        category: 'strategy',
        summary: 'Integrasi investasi dengan tujuan hidup, asuransi, pajak, dan warisan untuk mencapai kebebasan finansial.',
        content: `
            <div class="content-card" id="pentingnya-perencanaan-keuangan">
                <h3>Pentingnya Perencanaan Keuangan Holistik</h3>
                <p>Perencanaan keuangan bukan hanya tentang investasi, tetapi tentang menyelaraskan seluruh aspek keuangan Anda dengan tujuan hidup. Ini mencakup pengelolaan pendapatan, pengeluaran, utang, investasi, asuransi, pajak, dan perencanaan warisan.</p>
                <p>Tanpa rencana yang komprehensif, investasi Anda mungkin tidak efisien atau bahkan bertentangan dengan tujuan jangka panjang Anda. Sebuah rencana yang baik bertindak sebagai peta jalan finansial Anda.</p>
            </div>
            <div class="content-card" id="komponen-perencanaan-keuangan">
                <h3>Komponen Utama Perencanaan Keuangan</h3>
                <ul>
                    <li><strong>Pengelolaan Arus Kas:</strong> Memantau pendapatan dan pengeluaran untuk memastikan Anda memiliki surplus yang dapat diinvestasikan. Membuat anggaran dan mengontrol pengeluaran yang tidak perlu.</li>
                    <li><strong>Dana Darurat:</strong> Membangun dana darurat yang cukup (3-12 bulan pengeluaran) di instrumen likuid sebelum memulai investasi berisiko. Ini adalah jaring pengaman finansial Anda.</li>
                    <li><strong>Pengelolaan Utang:</strong> Mengidentifikasi dan melunasi utang "buruk" (utang konsumtif dengan bunga tinggi) secepat mungkin. Memanfaatkan utang "baik" (misalnya KPR) secara strategis.</li>
                    <li><strong>Investasi:</strong> Mengalokasikan aset sesuai profil risiko dan tujuan keuangan Anda (jangka pendek, menengah, panjang).</li>
                    <li><strong>Asuransi:</strong> Melindungi diri dan keluarga dari risiko tak terduga (kesehatan, jiwa, aset). Asuransi adalah fondasi perlindungan finansial.</li>
                    <li><strong>Perencanaan Pajak:</strong> Meminimalkan kewajiban pajak secara legal melalui strategi investasi dan pemanfaatan insentif pajak.</li>
                    <li><strong>Perencanaan Pensiun:</strong> Membangun dana yang cukup untuk masa pensiun agar dapat mempertahankan gaya hidup yang diinginkan.</li>
                    <li><strong>Perencanaan Warisan:</strong> Memastikan aset Anda didistribusikan sesuai keinginan Anda setelah meninggal dunia, melalui surat wasiat atau instrumen hukum lainnya.</li>
                </ul>
            </div>
            <div class="content-card" id="langkah-menyusun-rencana">
                <h3>Langkah Menyusun Rencana Keuangan</h3>
                <ol>
                    <li><strong>Tetapkan Tujuan Keuangan:</strong> Spesifik, terukur, dapat dicapai, relevan, dan terikat waktu (SMART). Contoh: dana pensiun Rp 5 M dalam 25 tahun, DP rumah Rp 500 juta dalam 5 tahun.</li>
                    <li><strong>Analisis Kondisi Keuangan Saat Ini:</strong> Hitung kekayaan bersih (aset dikurangi liabilitas), periksa arus kas bulanan, dan evaluasi portofolio investasi yang ada.</li>
                    <li><strong>Identifikasi Pilihan dan Strategi:</strong> Tentukan instrumen investasi yang sesuai, jenis asuransi yang dibutuhkan, dan strategi pengelolaan utang.</li>
                    <li><strong>Implementasikan Rencana:</strong> Mulai menabung, berinvestasi, membeli asuransi, dan melunasi utang sesuai rencana. Konsistensi adalah kunci.</li>
                    <li><strong>Monitor dan Revisi:</strong> Tinjau rencana Anda secara berkala (setidaknya setahun sekali) atau setiap kali ada perubahan signifikan dalam hidup (pernikahan, kelahiran anak, perubahan pekerjaan) untuk memastikan tetap relevan.</li>
                </ol>
            </div>
        `,
        subtopics: [
            { id: 'pentingnya-perencanaan-keuangan', title: 'Pentingnya Perencanaan Keuangan Holistik' },
            { id: 'komponen-perencanaan-keuangan', title: 'Komponen Utama Perencanaan Keuangan' },
            { id: 'langkah-menyusun-rencana', title: 'Langkah Menyusun Rencana Keuangan' }
        ]
    },
    {
        id: 'bab-22',
        title: 'Bab 22: Investasi Internasional dan Pasar Global',
        category: 'jenis',
        summary: 'Manfaat, risiko, dan cara berinvestasi di pasar keuangan global untuk diversifikasi maksimal.',
        content: `
            <div class="content-card" id="mengapa-investasi-internasional">
                <h3>Mengapa Berinvestasi di Pasar Internasional?</h3>
                <p>Investasi di pasar global menawarkan diversifikasi yang tidak bisa didapatkan hanya dengan berinvestasi di pasar domestik. Ini memungkinkan Anda untuk:</p>
                <ul>
                    <li><strong>Diversifikasi Risiko Negara:</strong> Mengurangi ketergantungan pada kinerja ekonomi satu negara. Jika ekonomi domestik lesu, pasar internasional mungkin berkinerja baik.</li>
                    <li><strong>Akses ke Peluang Pertumbuhan:</strong> Berinvestasi di perusahaan atau sektor yang tidak tersedia atau kurang berkembang di pasar domestik. Misalnya, raksasa teknologi global atau pasar negara berkembang.</li>
                    <li><strong>Diversifikasi Mata Uang:</strong> Melindungi daya beli dari fluktuasi nilai tukar mata uang domestik.</li>
                    <li><strong>Potensi Return Lebih Tinggi:</strong> Beberapa pasar atau aset di luar negeri mungkin menawarkan potensi pengembalian yang lebih tinggi pada periode tertentu.</li>
                </ul>
            </div>
            <div class="content-card" id="risiko-investasi-internasional">
                <h3>Risiko Investasi Internasional</h3>
                <p>Meskipun ada manfaatnya, investasi internasional juga datang dengan risiko tambahan:</p>
                <ul>
                    <li><strong>Risiko Mata Uang (Currency Risk):</strong> Fluktuasi nilai tukar dapat mengikis keuntungan investasi Anda atau memperbesar kerugian.</li>
                    <li><strong>Risiko Politik dan Ekonomi:</strong> Ketidakstabilan politik, perubahan regulasi, atau masalah ekonomi di negara lain dapat memengaruhi investasi Anda.</li>
                    <li><strong>Risiko Likuiditas:</strong> Beberapa pasar asing mungkin kurang likuid dibandingkan pasar domestik.</li>
                    <li><strong>Perbedaan Regulasi dan Pajak:</strong> Memahami peraturan pajak dan hukum di negara lain bisa kompleks.</li>
                    <li><strong>Kurangnya Informasi:</strong> Mungkin lebih sulit mendapatkan informasi yang komprehensif dan tepat waktu tentang perusahaan asing.</li>
                </ul>
            </div>
            <div class="content-card" id="cara-investasi-internasional">
                <h3>Cara Berinvestasi di Pasar Internasional</h3>
                <p>Ada beberapa cara untuk mendapatkan eksposur ke pasar global:</p>
                <ul>
                    <li><strong>Reksa Dana Global/Internasional:</strong> Cara termudah bagi investor individu. Manajer investasi profesional mengelola portofolio aset global.</li>
                    <li><strong>ETF (Exchange Traded Funds) Global/Internasional:</strong> Mirip dengan reksa dana tetapi diperdagangkan di bursa saham. Menawarkan diversifikasi instan ke berbagai pasar atau sektor global.</li>
                    <li><strong>Saham Individual Asing:</strong> Membeli saham perusahaan asing secara langsung melalui broker yang menyediakan akses ke pasar internasional. Membutuhkan riset mendalam.</li>
                    <li><strong>ADR (American Depositary Receipts):</strong> Sertifikat yang mewakili saham perusahaan asing yang diperdagangkan di bursa AS, memudahkan investasi bagi investor AS.</li>
                    <li><strong>Obligasi Internasional:</strong> Membeli obligasi yang diterbitkan oleh pemerintah atau perusahaan asing.</li>
                </ul>
                <p>Penting untuk memulai dengan riset yang cermat dan mungkin berkonsultasi dengan penasihat keuangan yang memiliki keahlian dalam investasi internasional.</p>
            </div>
        `,
        subtopics: [
            { id: 'mengapa-investasi-internasional', title: 'Mengapa Berinvestasi di Pasar Internasional?' },
            { id: 'risiko-investasi-internasional', title: 'Risiko Investasi Internasional' },
            { id: 'cara-investasi-internasional', title: 'Cara Berinvestasi di Pasar Internasional' }
        ]
    },
    {
        id: 'bab-23',
        title: 'Bab 23: Membangun Portofolio Pendapatan Pasif',
        category: 'strategy',
        summary: 'Strategi dan instrumen untuk menciptakan arus kas reguler dari investasi Anda.',
        content: `
            <div class="content-card" id="apa-itu-pendapatan-pasif">
                <h3>Apa Itu Pendapatan Pasif dari Investasi?</h3>
                <p>Pendapatan pasif adalah penghasilan yang diperoleh secara teratur dengan sedikit atau tanpa usaha aktif setelah investasi awal dilakukan. Dalam konteks investasi, ini berarti memilih aset yang secara konsisten menghasilkan arus kas, seperti dividen, bunga, atau pendapatan sewa.</p>
                <p>Membangun portofolio pendapatan pasif adalah tujuan banyak investor untuk mencapai kebebasan finansial, di mana pendapatan pasif dapat menutupi biaya hidup.</p>
            </div>
            <div class="content-card" id="instrumen-pendapatan-pasif">
                <h3>Instrumen untuk Portofolio Pendapatan Pasif</h3>
                <ul>
                    <li><strong>Saham Dividen:</strong> Saham perusahaan yang secara rutin membayar sebagian keuntungannya kepada pemegang saham dalam bentuk dividen. Cari perusahaan dengan rekam jejak dividen yang stabil dan bertumbuh (Dividend Aristocrats/Kings).</li>
                    <li><strong>Obligasi:</strong> Memberikan pembayaran bunga (kupon) secara teratur. Obligasi pemerintah umumnya lebih aman, sementara obligasi korporasi menawarkan yield lebih tinggi dengan risiko lebih besar.</li>
                    <li><strong>Reksa Dana Pendapatan Tetap/Obligasi:</strong> Menginvestasikan dana pada obligasi yang dikelola oleh Manajer Investasi, memberikan pendapatan bunga yang didistribusikan secara berkala.</li>
                    <li><strong>REITs (Real Estate Investment Trusts):</strong> Perusahaan yang memiliki, mengoperasikan, atau membiayai properti yang menghasilkan pendapatan. REITs wajib mendistribusikan sebagian besar pendapatannya sebagai dividen kepada pemegang saham.</li>
                    <li><strong>Properti Sewa:</strong> Membeli properti (rumah, apartemen, ruko) dan menyewakannya untuk mendapatkan pendapatan sewa bulanan atau tahunan. Membutuhkan modal besar dan manajemen aktif (atau menggunakan jasa properti manajemen).</li>
                    <li><strong>P2P Lending:</strong> Mendanai pinjaman kepada individu atau bisnis kecil melalui platform online. Investor menerima pembayaran bunga secara berkala. Risiko gagal bayar perlu diperhatikan.</li>
                    <li><strong>Instrumen Pasar Uang:</strong> Deposito, Reksa Dana Pasar Uang. Meskipun return rendah, sangat likuid dan memberikan pendapatan bunga.</li>
                </ul>
            </div>
            <div class="content-card" id="strategi-membangun-portofolio-pasif">
                <h3>Strategi Membangun Portofolio Pendapatan Pasif</h3>
                <ol>
                    <li><strong>Tetapkan Tujuan Pendapatan:</strong> Berapa banyak pendapatan pasif yang Anda butuhkan per bulan/tahun?</li>
                    <li><strong>Pilih Instrumen yang Sesuai:</strong> Sesuaikan dengan profil risiko, horizon waktu, dan tujuan pendapatan Anda.</li>
                    <li><strong>Diversifikasi:</strong> Jangan hanya mengandalkan satu jenis aset pendapatan pasif. Kombinasikan saham dividen, obligasi, dan properti untuk mengurangi risiko.</li>
                    <li><strong>Reinvestasi (Awal):</strong> Pada tahap awal, reinvestasikan pendapatan pasif Anda untuk memanfaatkan kekuatan bunga berbunga dan mempercepat pertumbuhan portofolio.</li>
                    <li><strong>Monitor dan Rebalance:</strong> Pantau kinerja aset Anda dan sesuaikan alokasi secara berkala untuk menjaga tujuan pendapatan dan profil risiko.</li>
                    <li><strong>Fokus Jangka Panjang:</strong> Membangun portofolio pendapatan pasif yang signifikan membutuhkan waktu dan kesabaran.</li>
                </ol>
            </div>
        `,
        subtopics: [
            { id: 'apa-itu-pendapatan-pasif', title: 'Apa Itu Pendapatan Pasif dari Investasi?' },
            { id: 'instrumen-pendapatan-pasif', title: 'Instrumen untuk Portofolio Pendapatan Pasif' },
            { id: 'strategi-membangun-portofolio-pasif', title: 'Strategi Membangun Portofolio Pendapatan Pasif' }
        ]
    },
    {
        id: 'bab-24',
        title: 'Bab 24: Membaca Laporan Keuangan Perusahaan',
        category: 'fundamental',
        summary: 'Panduan memahami Neraca, Laporan Laba Rugi, dan Laporan Arus Kas untuk analisis fundamental.',
        content: `
            <div class="content-card" id="pentingnya-laporan-keuangan">
                <h3>Pentingnya Membaca Laporan Keuangan</h3>
                <p>Laporan keuangan adalah "kartu skor" sebuah perusahaan. Bagi investor fundamental, kemampuan membaca dan memahami laporan keuangan adalah keterampilan krusial untuk menilai kesehatan finansial, kinerja, dan potensi pertumbuhan perusahaan. Ini membantu Anda membuat keputusan investasi yang terinformasi, bukan berdasarkan spekulasi.</p>
            </div>
            <div class="content-card" id="neraca">
                <h3>Neraca (Balance Sheet)</h3>
                <p>Neraca memberikan gambaran posisi keuangan perusahaan pada satu titik waktu tertentu. Ini seperti "foto" aset, liabilitas, dan ekuitas perusahaan.</p>
                <p><strong>Aset = Liabilitas + Ekuitas</strong></p>
                <ul>
                    <li><strong>Aset:</strong> Apa yang dimiliki perusahaan (kas, piutang, inventaris, properti, pabrik, peralatan). Dibagi menjadi aset lancar (mudah diubah jadi kas) dan aset tidak lancar.</li>
                    <li><strong>Liabilitas:</strong> Apa yang perusahaan utang kepada pihak lain (utang usaha, utang bank, obligasi). Dibagi menjadi liabilitas jangka pendek dan jangka panjang.</li>
                    <li><strong>Ekuitas:</strong> Klaim pemilik atas aset perusahaan setelah dikurangi liabilitas (modal disetor, laba ditahan).</li>
                </ul>
                <p><strong>Apa yang dicari:</strong> Pertumbuhan aset yang sehat, rasio utang yang terkendali, dan ekuitas yang bertumbuh.</p>
            </div>
            <div class="content-card" id="laporan-laba-rugi">
                <h3>Laporan Laba Rugi (Income Statement)</h3>
                <p>Laporan laba rugi menunjukkan kinerja keuangan perusahaan selama periode waktu tertentu (misalnya, kuartal atau tahun). Ini seperti "video" pendapatan dan biaya perusahaan.</p>
                <p><strong>Pendapatan - Beban = Laba Bersih</strong></p>
                <ul>
                    <li><strong>Pendapatan (Revenue):</strong> Total penjualan barang atau jasa.</li>
                    <li><strong>Harga Pokok Penjualan (COGS):</strong> Biaya langsung untuk memproduksi barang/jasa yang dijual.</li>
                    <li><strong>Laba Kotor (Gross Profit):</strong> Pendapatan dikurangi COGS.</li>
                    <li><strong>Beban Operasional:</strong> Biaya yang terkait dengan operasional bisnis (gaji, sewa, pemasaran).</li>
                    <li><strong>Laba Operasi (Operating Income):</strong> Laba kotor dikurangi beban operasional.</li>
                    <li><strong>Beban Bunga dan Pajak:</strong> Biaya bunga atas utang dan pajak penghasilan.</li>
                    <li><strong>Laba Bersih (Net Income):</strong> Laba akhir yang tersedia bagi pemegang saham setelah semua beban dikurangi.</li>
                </ul>
                <p><strong>Apa yang dicari:</strong> Pertumbuhan pendapatan yang konsisten, margin laba yang sehat, dan laba bersih yang stabil atau meningkat.</p>
            </div>
            <div class="content-card" id="laporan-arus-kas">
                <h3>Laporan Arus Kas (Cash Flow Statement)</h3>
                <p>Laporan arus kas menunjukkan bagaimana kas dihasilkan dan digunakan oleh perusahaan selama periode waktu tertentu. Ini adalah laporan yang paling "jujur" karena sulit dimanipulasi.</p>
                <ul>
                    <li><strong>Arus Kas dari Operasi (CFO):</strong> Kas yang dihasilkan dari kegiatan bisnis inti perusahaan. Ini adalah indikator terpenting kesehatan operasional.</li>
                    <li><strong>Arus Kas dari Investasi (CFI):</strong> Kas yang digunakan atau dihasilkan dari pembelian/penjualan aset jangka panjang (misalnya, properti, pabrik, peralatan).</li>
                    <li><strong>Arus Kas dari Pendanaan (CFF):</strong> Kas yang digunakan atau dihasilkan dari aktivitas utang dan ekuitas (misalnya, penerbitan/pelunasan utang, penerbitan/pembelian kembali saham, pembayaran dividen).</li>
                </ul>
                <p><strong>Apa yang dicari:</strong> CFO yang positif dan bertumbuh, CFI negatif (perusahaan berinvestasi untuk masa depan), dan CFF yang menunjukkan pengelolaan modal yang bijak.</p>
            </div>
            <div class="content-card" id="rasio-keuangan-penting">
                <h3>Rasio Keuangan Penting (Ringkasan)</h3>
                <ul>
                    <li><strong>Rasio Likuiditas:</strong> Current Ratio, Quick Ratio (kemampuan membayar utang jangka pendek).</li>
                    <li><strong>Rasio Solvabilitas:</strong> Debt to Equity Ratio (DER), Debt to Asset Ratio (kemampuan membayar utang jangka panjang).</li>
                    <li><strong>Rasio Profitabilitas:</strong> Gross Profit Margin, Net Profit Margin, ROA, ROE (efisiensi menghasilkan laba).</li>
                    <li><strong>Rasio Valuasi:</strong> PER, PBV (seberapa mahal saham dibandingkan laba/nilai buku).</li>
                </ul>
            </div>
        `,
        subtopics: [
            { id: 'pentingnya-laporan-keuangan', title: 'Pentingnya Membaca Laporan Keuangan' },
            { id: 'neraca', title: 'Neraca (Balance Sheet)' },
            { id: 'laporan-laba-rugi', title: 'Laporan Laba Rugi (Income Statement)' },
            { id: 'laporan-arus-kas', title: 'Laporan Arus Kas (Cash Flow Statement)' },
            { id: 'rasio-keuangan-penting', title: 'Rasio Keuangan Penting (Ringkasan)' }
        ]
    },
    {
        id: 'bab-25',
        title: 'Bab 25: Etika dan Tanggung Jawab Investor',
        category: 'mindset',
        summary: 'Memahami dampak sosial dan etika dalam keputusan investasi Anda, serta menghindari penipuan.',
        content: `
            <div class="content-card" id="investasi-beretika">
                <h3>Investasi Beretika dan Berdampak Sosial</h3>
                <p>Sebagai investor, keputusan Anda tidak hanya memengaruhi keuangan pribadi tetapi juga memiliki dampak yang lebih luas pada masyarakat dan lingkungan. Investasi beretika berarti mempertimbangkan faktor-faktor moral dan sosial di samping keuntungan finansial.</p>
                <p>Ini melampaui ESG dengan mempertimbangkan nilai-nilai pribadi Anda. Apakah Anda ingin berinvestasi pada perusahaan yang terlibat dalam industri tertentu (misalnya, tembakau, senjata, perjudian) atau yang memiliki catatan buruk dalam hak asasi manusia atau praktik tenaga kerja?</p>
            </div>
            <div class="content-card" id="menghindari-penipuan-investasi">
                <h3>Menghindari Penipuan Investasi</h3>
                <p>Pasar investasi seringkali menjadi target penipuan. Penting untuk selalu waspada terhadap tanda-tanda penipuan:</p>
                <ul>
                    <li><strong>Janji Keuntungan Tidak Realistis:</strong> "Garansi keuntungan tinggi tanpa risiko" adalah tanda bahaya terbesar. Ingat, high return = high risk.</li>
                    <li><strong>Tekanan untuk Cepat Berinvestasi:</strong> Skema penipuan seringkali mendesak Anda untuk segera mengambil keputusan tanpa waktu untuk riset.</li>
                    <li><strong>Skema Piramida/Ponzi:</strong> Skema di mana keuntungan investor lama dibayar oleh uang dari investor baru, bukan dari kegiatan bisnis yang sah.</li>
                    <li><strong>Kurangnya Transparansi:</strong> Informasi perusahaan atau produk investasi yang tidak jelas, tidak ada izin resmi, atau sulit diverifikasi.</li>
                    <li><strong>Promosi dari Sumber Tidak Kredibel:</strong> Hati-hati dengan rekomendasi dari media sosial atau individu tanpa lisensi.</li>
                </ul>
                <p><strong>Cara Melindungi Diri:</strong> Selalu lakukan riset mendalam (DYOR), verifikasi legalitas perusahaan/produk ke OJK atau regulator terkait, dan jangan pernah investasi pada sesuatu yang tidak Anda pahami.</p>
            </div>
            <div class="content-card" id="peran-investor-aktif">
                <h3>Peran Investor Aktif dan Bertanggung Jawab</h3>
                <p>Menjadi investor yang bertanggung jawab berarti:</p>
                <ul>
                    <li><strong>Edukasi Diri:</strong> Terus belajar tentang pasar, instrumen, dan risiko.</li>
                    <li><strong>Berinvestasi Sesuai Nilai:</strong> Memilih investasi yang selaras dengan keyakinan pribadi Anda.</li>
                    <li><strong>Berpartisipasi (jika memungkinkan):</strong> Menggunakan hak suara sebagai pemegang saham untuk mendorong praktik perusahaan yang lebih baik.</li>
                    <li><strong>Mendukung Regulasi yang Baik:</strong> Memahami dan mendukung upaya regulator untuk menciptakan pasar yang adil dan transparan.</li>
                    <li><strong>Berbagi Pengetahuan:</strong> Membantu orang lain memahami investasi yang sehat dan menghindari jebakan.</li>
                </ul>
                <p>Investasi adalah perjalanan jangka panjang yang membutuhkan tidak hanya kecerdasan finansial tetapi juga integritas dan kesadaran akan dampak yang lebih luas.</p>
            </div>
        `,
        subtopics: [
            { id: 'investasi-beretika', title: 'Investasi Beretika dan Berdampak Sosial' },
            { id: 'menghindari-penipuan-investasi', title: 'Menghindari Penipuan Investasi' },
            { id: 'peran-investor-aktif', title: 'Peran Investor Aktif dan Bertanggung Jawab' }
        ]
    },
    {
        id: 'penutup',
        title: 'Penutup',
        category: 'summary',
        summary: 'Ringkasan dan pesan kunci untuk perjalanan investasi Anda.',
        content: `
            <div class="content-card" id="investasi-maraton">
                <h3>Investasi adalah Maraton, Bukan Sprint</h3>
                <p>Investasi adalah maraton, bukan sprint. Kesuksesan investasi bukan ditentukan oleh seberapa cepat Anda kaya, tetapi seberapa konsisten Anda dalam menjalankan strategi investasi yang tepat.</p>
                <p>Ingatlah bahwa setiap investor memiliki situasi dan tujuan yang berbeda. Tidak ada strategi investasi yang cocok untuk semua orang. Yang terpenting adalah memahami diri sendiri, menetapkan tujuan yang jelas, dan disiplin dalam menjalankan rencana investasi.</p>
                <p>Mulailah investasi sedini mungkin, meski dengan jumlah kecil. Kekuatan compound interest akan bekerja untuk Anda dalam jangka panjang. Seperti kata pepatah, "The best time to plant a tree was 20 years ago. The second best time is now."</p>
                <p>Tetap belajar, tetap disiplin, dan tetap fokus pada tujuan jangka panjang. Investasi yang sukses adalah hasil dari pengetahuan, kesabaran, dan konsistensi.</p>
                <p>"Rule No. 1: Never lose money. Rule No. 2: Never forget rule No. 1."</p>
                <p class="text-right">- Warren Buffett</p>
                <p class="text-right">By Erdyon.</p>
            </div>
        `,
        subtopics: [
            { id: 'investasi-maraton', title: 'Investasi adalah Maraton, Bukan Sprint' }
        ]
    }
];

// Data Glosarium (Tidak Berubah, hanya ditambahkan untuk kelengkapan)
const glossaryData = [
    { term: 'Aset', definition: 'Sumber daya ekonomi yang dimiliki atau dikendalikan oleh entitas sebagai hasil dari transaksi atau kejadian masa lalu dan diharapkan akan memberikan manfaat ekonomi di masa depan.' },
    { term: 'Anchoring Bias', definition: 'Kecenderungan untuk terlalu mengandalkan informasi pertama yang diterima (jangkar) saat membuat keputusan.' },
    { term: 'All Weather Portfolio', definition: 'Strategi portofolio yang dirancang oleh Ray Dalio untuk berkinerja baik di semua kondisi ekonomi (inflasi naik/turun, pertumbuhan naik/turun) dengan menyeimbangkan aset yang berkinerja baik dalam kondisi berbeda.' },
    { term: 'Capital Gain', definition: 'Keuntungan yang diperoleh dari penjualan aset investasi (seperti saham atau properti) dengan harga yang lebih tinggi dari harga pembelian.' },
    { term: 'Compound Interest (Bunga Berbunga)', definition: 'Bunga yang dihitung berdasarkan jumlah pokok awal dan semua bunga yang terakumulasi dari periode sebelumnya. Ini adalah konsep kunci dalam pertumbuhan investasi jangka panjang.' },
    { term: 'Confirmation Bias', definition: 'Kecenderungan untuk mencari, menafsirkan, dan mengingat informasi yang mendukung keyakinan awal kita sendiri.' },
    { term: 'Cryptocurrency', definition: 'Aset digital yang menggunakan kriptografi untuk keamanan dan beroperasi di jaringan terdesentralisasi (blockchain).' },
    { term: 'Diversifikasi', definition: 'Strategi investasi yang mengurangi risiko dengan menyebarkan investasi ke berbagai aset, industri, atau lokasi geografis, daripada menaruh semua investasi pada satu jenis aset.' },
    { term: 'Dividen', definition: 'Pembagian sebagian keuntungan perusahaan kepada pemegang sahamnya, biasanya dibayarkan secara tunai atau dalam bentuk saham tambahan.' },
    { term: 'Dollar Cost Averaging (DCA)', definition: 'Strategi investasi di mana investor menginvestasikan jumlah uang tetap secara rutin pada interval waktu yang teratur, tanpa memperhatikan harga aset. Ini membantu mengurangi risiko volatilitas harga.' },
    { term: 'Ekuitas', definition: 'Nilai sisa aset setelah dikurangi liabilitas. Dalam konteks saham, ini adalah klaim pemegang saham atas aset perusahaan.' },
    { term: 'Economic Moat', definition: 'Keunggulan kompetitif yang berkelanjutan yang dimiliki suatu perusahaan yang melindunginya dari persaingan, seperti merek kuat, biaya rendah, paten, atau efek jaringan.' },
    { term: 'ESG (Environmental, Social, Governance)', definition: 'Pendekatan investasi yang mempertimbangkan faktor-faktor lingkungan, sosial, dan tata kelola perusahaan di samping analisis keuangan tradisional.' },
    { term: 'FOMO (Fear of Missing Out)', definition: 'Kecemasan yang dirasakan ketika seseorang merasa melewatkan pengalaman positif atau peluang yang dinikmati orang lain.' },
    { term: 'Herd Mentality', definition: 'Kecenderungan untuk mengikuti tindakan atau perilaku kelompok yang lebih besar, terlepas dari analisis rasional.' },
    { term: 'IHSG (Indeks Harga Saham Gabungan)', definition: 'Indeks pasar saham utama di Indonesia yang mengukur kinerja semua saham yang tercatat di Bursa Efek Indonesia.' },
    { term: 'Inflasi', definition: 'Kenaikan umum tingkat harga barang dan jasa dalam suatu perekonomian selama periode waktu tertentu, yang mengakibatkan penurunan daya beli mata uang.' },
    { term: 'Investasi Nilai (Value Investing)', definition: 'Strategi investasi yang melibatkan pembelian sekuritas yang diperdagangkan di bawah nilai intrinsiknya, berdasarkan analisis fundamental.' },
    { term: 'Likuiditas', definition: 'Seberapa mudah suatu aset dapat diubah menjadi uang tunai tanpa memengaruhi harganya secara signifikan.' },
    { term: 'Loss Aversion', definition: 'Rasa sakit kehilangan uang lebih kuat daripada kesenangan mendapatkan uang dalam jumlah yang sama.' },
    { term: 'Margin of Safety', definition: 'Prinsip investasi yang melibatkan pembelian aset dengan diskon signifikan dari nilai intrinsiknya untuk melindungi modal dari kesalahan penilaian atau kejadian tak terduga.' },
    { term: 'Market Timing', definition: 'Usaha untuk memprediksi kapan harus masuk dan keluar pasar pada titik harga optimal untuk memaksimalkan keuntungan.' },
    { term: 'Obligasi', definition: 'Surat utang yang diterbitkan oleh pemerintah atau perusahaan untuk meminjam uang dari investor. Investor menerima pembayaran bunga secara berkala dan pengembalian pokok pada saat jatuh tempo.' },
    { term: 'Overconfidence Bias', definition: 'Keyakinan berlebihan pada kemampuan diri sendiri, seringkali menyebabkan pengambilan risiko yang tidak perlu atau trading berlebihan.' },
    { term: 'P2P Lending (Peer-to-Peer Lending)', definition: 'Model pembiayaan di mana individu meminjam dan meminjamkan uang satu sama lain tanpa menggunakan lembaga keuangan tradisional sebagai perantara.' },
    { term: 'Portofolio', definition: 'Kumpulan semua investasi yang dimiliki oleh seorang individu atau institusi.' },
    { term: 'Properti', definition: 'Investasi pada aset fisik seperti tanah, rumah, apartemen, atau bangunan komersial.' },
    { term: 'Recency Bias', definition: 'Kecenderungan untuk memberi bobot lebih besar pada kejadian atau informasi terbaru, dan berasumsi tren baru-baru ini akan terus berlanjut.' },
    { term: 'Reksa Dana', definition: 'Wadah yang menghimpun dana dari banyak investor untuk kemudian diinvestasikan secara kolektif ke dalam berbagai instrumen investasi seperti saham, obligasi, atau pasar uang, yang dikelola oleh Manajer Investasi profesional.' },
    { term: 'Return (Pengembalian)', definition: 'Keuntungan atau kerugian yang dihasilkan dari investasi, biasanya dinyatakan sebagai persentase dari jumlah investasi awal.' },
    { term: 'Risiko', definition: 'Potensi kerugian atau ketidakpastian dalam investasi. Semakin tinggi potensi keuntungan, semakin tinggi pula risikonya.' },
    { term: 'Risk Parity', definition: 'Strategi alokasi aset yang berfokus pada alokasi risiko secara merata di antara berbagai kelas aset, bukan hanya modal.' },
    { term: 'Saham', definition: 'Bukti kepemilikan sebagian kecil dari suatu perusahaan. Pemegang saham memiliki klaim atas aset dan pendapatan perusahaan.' },
    { term: 'Spekulasi', definition: 'Tindakan melakukan transaksi keuangan yang memiliki risiko signifikan, dengan harapan keuntungan yang substansial dari fluktuasi harga jangka pendek, seringkali tanpa analisis fundamental yang mendalam.' },
    { term: 'Stop Loss', definition: 'Perintah yang ditempatkan dengan broker untuk menjual aset ketika mencapai harga tertentu, untuk membatasi kerugian potensial investor.' },
    { term: 'Sunk Cost Fallacy', definition: 'Kecenderungan untuk terus berinvestasi pada sesuatu yang merugi karena sudah banyak uang yang dikeluarkan, daripada memotong kerugian.' },
    { term: 'Time Value of Money', definition: 'Konsep bahwa uang yang tersedia saat ini lebih berharga daripada jumlah uang yang sama di masa depan karena potensi pendapatannya.' },
    { term: 'Volatilitas', definition: 'Tingkat perubahan harga suatu aset dalam periode waktu tertentu. Volatilitas tinggi berarti harga aset dapat berubah secara drastis dalam waktu singkat.' }
].sort((a, b) => a.term.localeCompare(b.term)); // Urutkan secara alfabetis

// Variabel global untuk elemen DOM
const favicon = document.getElementById('favicon');
const loadingOverlay = document.getElementById('loading-overlay');
const progressBar = document.getElementById('progress-bar');
const homePage = document.getElementById('home-page');
const chapterPage = document.getElementById('chapter-page');
const timelineNavigation = document.getElementById('timeline-navigation');
const timelineLine = document.getElementById('timeline-line'); // Reference to the timeline line
const searchInput = document.getElementById('search-input');
const autocompleteResults = document.getElementById('autocomplete-results');
const clearSearchBtn = document.getElementById('clear-search-btn'); // New: Clear search button for main search
const sidebarSearchInput = document.getElementById('sidebar-search-input');
const sidebarAutocompleteResults = document.getElementById('sidebar-autocomplete-results');
const clearSidebarSearchBtn = document.getElementById('clear-sidebar-search-btn'); // New: Clear search button for sidebar search
const currentChapterTitle = document.getElementById('current-chapter-title');
const estimatedReadingTime = document.getElementById('estimated-reading-time');
const chapterContentDiv = document.getElementById('chapter-content');
const chapterContentLoadingSpinner = chapterContentDiv.querySelector('.chapter-content-loading');
const prevChapterBtn = document.getElementById('prev-chapter-btn');
const nextChapterBtn = document.getElementById('next-chapter-btn');
const chapterAccordionList = document.getElementById('chapter-accordion-list');
const mainFab = document.getElementById('main-fab');
const fabMenu = document.getElementById('fab-menu');
const fabMenuItems = document.querySelectorAll('.fab-menu-item');
const readingModeToggle = document.getElementById('reading-mode-toggle');
const categoryTabs = document.querySelector('.category-tabs');
const tabButtons = document.querySelectorAll('.tab-button');
const breadcrumbChapterTitle = document.getElementById('breadcrumb-chapter-title');
const breadcrumbSubtopicSeparator = document.getElementById('breadcrumb-subtopic-separator');
const breadcrumbSubtopicTitle = document.getElementById('breadcrumb-subtopic-title');
const toastNotification = document.getElementById('toast-notification');
const toastMessage = document.getElementById('toast-message');
const toastIcon = document.querySelector('#toast-notification .toast-icon');
const toastCloseBtn = document.querySelector('#toast-notification .toast-close-btn');
const bookmarkModal = document.getElementById('bookmark-modal');
const bookmarkList = document.getElementById('bookmark-list');
const noBookmarksMessage = document.getElementById('no-bookmarks-message');
const bookmarkModalCloseBtn = document.querySelector('#bookmark-modal .modal-close-btn');
const backToHomeBtn = document.getElementById('back-to-home-btn');

// Elemen baru untuk pembaruan
const fontSizeIncreaseBtn = document.getElementById('font-size-increase');
const fontSizeDecreaseBtn = document.getElementById('font-size-decrease');
const readingListModal = document.getElementById('reading-list-modal');
const readingListItems = document.getElementById('reading-list-items');
const noReadingListMessage = document.getElementById('no-reading-list-message');
const readingListModalCloseBtn = document.querySelector('#reading-list-modal .modal-close-btn');
const glossaryModal = document.getElementById('glossary-modal');
const glossaryList = document.getElementById('glossary-list');
const glossaryModalCloseBtn = document.querySelector('#glossary-modal .modal-close-btn');

// Elemen baru untuk Hamburger Menu
const hamburgerMenuBtn = document.querySelector('.hamburger-menu-btn');
const sidebar = document.querySelector('.sidebar');
const sidebarContentWrapper = document.querySelector('.sidebar-content-wrapper');

// Elemen baru untuk Quiz Section
const quizSection = document.getElementById('quiz-section');
const startQuizBtn = document.getElementById('start-quiz-btn');


let currentChapterIndex = -1;
let chapterSections = []; // Untuk menyimpan bagian konten untuk pelacakan gulir
const BOOKMARKS_KEY = 'investmentGuideBookmarks';
const READING_LIST_KEY = 'investmentGuideReadingList';
const FONT_SIZE_KEY = 'investmentGuideFontSize';
const READING_MODE_KEY = 'investmentGuideReadingMode'; // Kunci untuk menyimpan status mode baca

let currentFontSize = parseFloat(getLocalStorageItem(FONT_SIZE_KEY) || '16'); // Ukuran font dasar dalam px
const FONT_SIZE_STEP = 2;
const MIN_FONT_SIZE = 12;
const MAX_FONT_SIZE = 24;

// --- Fungsi Utilitas ---
function hasLocalStorage() {
    try {
        const test = '__localStorage_test__';
        localStorage.setItem(test, test);
        localStorage.removeItem(test);
        return true;
    } catch (e) {
        console.warn("Penyimpanan lokal tidak tersedia atau penuh. Fitur persistensi data mungkin tidak berfungsi.");
        return false;
    }
}

function getLocalStorageItem(key) {
    if (!hasLocalStorage()) return null;
    try {
        return localStorage.getItem(key);
    } catch (e) {
        console.error(`Error mendapatkan item '${key}' dari localStorage:`, e);
        return null;
    }
}

function setLocalStorageItem(key, value) {
    if (!hasLocalStorage()) return;
    try {
        localStorage.setItem(key, value);
    } catch (e) {
        console.error(`Error mengatur item '${key}' ke localStorage:`, e);
        showToast('Gagal menyimpan data. Penyimpanan lokal mungkin penuh.', 'error');
    }
}

function removeLocalStorageItem(key) {
    if (!hasLocalStorage()) return;
    try {
        localStorage.removeItem(key);
    } catch (e) {
        console.error(`Error menghapus item '${key}' dari localStorage:`, e);
    }
}

/**
 * Menampilkan notifikasi toast dengan pesan, tipe, dan durasi yang dapat disesuaikan.
 * @param {string} message Pesan yang akan ditampilkan.
 * @param {'success'|'error'|'info'|'warning'} type Tipe notifikasi untuk ikon dan warna.
 * @param {number} duration Durasi notifikasi ditampilkan dalam milidetik.
 */
function showToast(message, type = 'info', duration = 3000) {
    // Hapus semua kelas tipe sebelumnya
    toastNotification.classList.remove('success', 'error', 'info', 'warning');
    // Tambahkan kelas tipe yang baru
    toastNotification.classList.add(type);

    toastMessage.textContent = message;
    toastIcon.innerHTML = ''; // Bersihkan ikon sebelumnya

    let iconClass = '';
    switch (type) {
        case 'success':
            iconClass = 'fas fa-check-circle';
            break;
        case 'error':
            iconClass = 'fas fa-times-circle';
            break;
        case 'warning':
            iconClass = 'fas fa-exclamation-triangle';
            break;
        case 'info':
        default:
            iconClass = 'fas fa-info-circle';
            break;
    }
    const iconElement = document.createElement('i');
    iconElement.classList.add(...iconClass.split(' '));
    toastIcon.appendChild(iconElement);

    toastNotification.classList.add('show');

    // Atur timeout untuk menyembunyikan notifikasi secara otomatis
    let timeoutId;
    const hideToast = () => {
        toastNotification.classList.remove('show');
        clearTimeout(timeoutId); // Pastikan timeout dihapus jika ditutup secara manual
    };

    // Tambahkan event listener untuk tombol tutup
    toastCloseBtn.onclick = hideToast;

    timeoutId = setTimeout(hideToast, duration);
}


function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        if (page.id === pageId) {
            page.classList.add('active');
        } else {
            page.classList.remove('active');
        }
    });
    // Gulir ke atas saat mengganti halaman
    window.scrollTo(0, 0);
    updateProgressBar(); // Reset bilah kemajuan
    // Pastikan menu FAB tertutup saat mengganti halaman
    fabMenu.classList.remove('active');
    mainFab.querySelector('i').classList.add('fa-bars');
    mainFab.querySelector('i').classList.remove('fa-times');

    // Tutup sidebar hamburger jika sedang aktif (hanya berlaku untuk mobile/tablet)
    if (sidebar.classList.contains('active')) {
        toggleHamburgerMenu();
    }

    // Perbarui favicon berdasarkan halaman
    if (pageId === 'chapter-page') {
        favicon.href = 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>📖</text></svg>'; // Ikon buku terbuka
        // Tampilkan reading controls di halaman chapter, tetapi hanya jika bukan reading mode
        // Visibilitas reading controls diatur oleh CSS di reading-mode, jadi di sini hanya untuk mode normal
        document.querySelector('.reading-controls').style.display = 'flex';
    } else {
        favicon.href = 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>📈</text></svg>'; // Ikon grafik
        // Sembunyikan reading controls di halaman lain
        document.querySelector('.reading-controls').style.display = 'none';
    }

    // Terapkan mode baca jika aktif dan di halaman bab
    // Ini harus dipanggil SETELAH showPage mengatur kelas 'active'
    const isReadingModeStored = getLocalStorageItem(READING_MODE_KEY) === 'true';
    if (isReadingModeStored && pageId === 'chapter-page') {
        document.body.classList.add('reading-mode');
        // Perbaikan: Gunakan ikon `fa-book-open` untuk "Mode Normal"
        readingModeToggle.innerHTML = '<i class="fas fa-book-open"></i> Mode Normal'; // Ubah teks tombol
        readingModeToggle.setAttribute('aria-label', 'Nonaktifkan mode baca');
    } else {
        document.body.classList.remove('reading-mode');
        // Perbaikan: Gunakan ikon `fa-book-reader` untuk "Mode Baca"
        readingModeToggle.innerHTML = '<i class="fas fa-book-reader"></i> Mode Baca'; // Kembalikan teks tombol
        readingModeToggle.setAttribute('aria-label', 'Aktifkan mode baca gelap');
    }
}

function updateProgressBar() {
    // Progress bar hanya aktif di halaman chapter dan jika tidak dalam reading-mode
    if (chapterPage.classList.contains('active') && !document.body.classList.contains('reading-mode')) {
        const totalHeight = document.documentElement.scrollHeight;
        const clientHeight = document.documentElement.clientHeight;
        const scrolled = document.documentElement.scrollTop;

        // Hitung tinggi konten yang bisa digulir
        const scrollableHeight = totalHeight - clientHeight;

        let progress = 0;
        if (scrollableHeight > 0) {
            progress = (scrolled / scrollableHeight) * 100;
        }

        progressBar.style.width = `${Math.max(0, Math.min(100, progress))}%`; // Pastikan antara 0-100
        progressBar.style.display = 'block';
        progressBar.setAttribute('aria-valuenow', Math.round(progress));
    } else {
        progressBar.style.width = '0%';
        progressBar.style.display = 'none';
        progressBar.setAttribute('aria-valuenow', 0);
    }
}


function openModal(modalElement) {
    // Tutup modal yang sedang terbuka
    document.querySelectorAll('.modal-overlay.show').forEach(modal => modal.classList.remove('show'));
    modalElement.classList.add('show');
    // Tambahkan kelas untuk mencegah gulir body saat modal terbuka
    document.body.classList.add('modal-open');
}

function closeModal(modalElement) {
    modalElement.classList.remove('show');
    // Hapus kelas untuk mengizinkan gulir body
    document.body.classList.remove('modal-open');
}

/**
 * Renders the timeline items based on the provided chapters.
 * Also updates the position and height of the timeline line dynamically.
 * @param {Array} chaptersToRender The array of chapter data to display in the timeline.
 */
function renderTimeline(chaptersToRender) {
    // Clear existing timeline items, but keep the timeline line element
    const timelineLine = timelineNavigation.querySelector('#timeline-line');
    timelineNavigation.innerHTML = '';
    if (timelineLine) {
        timelineNavigation.appendChild(timelineLine);
    }

    const lastViewedChapterId = getLocalStorageItem('lastViewedChapter');

    chaptersToRender.forEach((chapter, index) => {
        const item = document.createElement('div');
        item.classList.add('timeline-item');
        item.setAttribute('data-chapter-id', chapter.id);

        const dot = document.createElement('div');
        dot.classList.add('timeline-dot');
        dot.setAttribute('data-chapter-id', chapter.id);
        const chapterTitleForDot = chapter.title.startsWith(`Bab ${index + 1}: `) ? chapter.title.substring(`Bab ${index + 1}: `.length) : chapter.title;
        dot.setAttribute('aria-label', `Bab ${index + 1}: ${chapterTitleForDot}`);
        if (chapter.id === lastViewedChapterId) {
            dot.classList.add('active');
        }

        const content = document.createElement('div');
        content.classList.add('timeline-content');
        const chapterTitleForContent = chapter.title.startsWith(`Bab ${index + 1}: `) ? chapter.title.substring(`Bab ${index + 1}: `.length) : chapter.title;
        content.innerHTML = `
            <h3>${chapter.title}</h3>
            <p>${chapter.summary}</p>
        `;

        content.addEventListener('click', () => {
            loadChapter(chapter.id);
        });
        dot.addEventListener('click', () => {
            loadChapter(chapter.id);
        });

        item.appendChild(dot);
        item.appendChild(content);
        timelineNavigation.appendChild(item);
    });

    // Observe timeline items for scroll animation
    document.querySelectorAll('.timeline-item').forEach(item => {
        timelineItemObserver.observe(item);
    });

    // Update timeline line position and height after rendering items
    updateTimelineLinePosition();
}

/**
 * Dynamically updates the position and height of the timeline line.
 * The line starts at the center of the first dot and ends at the center of the last dot.
 */
function updateTimelineLinePosition() {
    const timelineItems = timelineNavigation.querySelectorAll('.timeline-item');
    if (timelineItems.length > 0) {
        const firstItem = timelineItems[0];
        const lastItem = timelineItems[timelineItems.length - 1];

        // Get the position of the first dot relative to #timeline-navigation
        const firstDot = firstItem.querySelector('.timeline-dot');
        const firstDotRect = firstDot.getBoundingClientRect();
        const timelineNavRect = timelineNavigation.getBoundingClientRect();

        const topOffset = (firstDotRect.top + firstDotRect.height / 2) - timelineNavRect.top;

        // Get the position of the last dot relative to #timeline-navigation
        const lastDot = lastItem.querySelector('.timeline-dot');
        const lastDotRect = lastDot.getBoundingClientRect();

        const bottomOffset = (lastDotRect.top + lastDotRect.height / 2) - timelineNavRect.top;

        // Set the line's top and height
        timelineLine.style.top = `${topOffset}px`;
        timelineLine.style.height = `${bottomOffset - topOffset}px`;
        timelineLine.style.display = 'block'; // Ensure it's visible
    } else {
        timelineLine.style.display = 'none'; // Hide if no timeline items
    }
}


/**
 * Filters chapters by category and re-renders the timeline.
 * @param {string} category The category to filter by ('all', 'fundamental', etc.).
 * @returns {Array} The filtered list of chapters.
 */
function filterChaptersByCategory(category) {
    tabButtons.forEach(button => {
        if (button.getAttribute('data-category') === category) {
            button.classList.add('active');
            button.setAttribute('aria-selected', 'true');
        } else {
            button.classList.remove('active');
            button.setAttribute('aria-selected', 'false');
        }
    });

    const filtered = category === 'all'
        ? chaptersData
        : chaptersData.filter(chapter => chapter.category === category);
    renderTimeline(filtered); // Render hasil filter ke timeline
    return filtered; // Kembalikan hasil filter untuk pelengkapan otomatis
}

/**
 * Filters chapters based on a search query and ranks them by relevance.
 * @param {string} query The search query string.
 * @returns {Array} A sorted array of chapters with relevance scores.
 */
function filterChapters(query) {
    const lowerCaseQuery = query.toLowerCase();
    if (!lowerCaseQuery) {
        return chaptersData; // If query is empty, return all chapters
    }

    const scoredResults = [];

    chaptersData.forEach(chapter => {
        let score = 0;
        const chapterTitleLower = chapter.title.toLowerCase();
        const chapterSummaryLower = chapter.summary.toLowerCase();
        const chapterContentLower = chapter.content ? chapter.content.toLowerCase() : '';

        // Prioritize matches in title
        if (chapterTitleLower.includes(lowerCaseQuery)) {
            score += 100; // High score for title match
            // Add more score for exact match or start of string match
            if (chapterTitleLower === lowerCaseQuery) score += 50;
            if (chapterTitleLower.startsWith(lowerCaseQuery)) score += 30;
        }

        // Score for matches in summary
        if (chapterSummaryLower.includes(lowerCaseQuery)) {
            score += 50; // Medium score for summary match
        }

        // Score for matches in content (less priority)
        if (chapterContentLower.includes(lowerCaseQuery)) {
            score += 10; // Low score for content match
        }

        // If any subtopic title matches, add a score
        chapter.subtopics.forEach(subtopic => {
            const subtopicTitleLower = subtopic.title.toLowerCase();
            if (subtopicTitleLower.includes(lowerCaseQuery)) {
                score += 70; // Good score for subtopic title match
                if (subtopicTitleLower === lowerCaseQuery) score += 40;
                if (subtopicTitleLower.startsWith(lowerCaseQuery)) score += 20;
            }
        });

        if (score > 0) {
            scoredResults.push({ ...chapter, score: score });
        }
    });

    // Sort results by score in descending order
    scoredResults.sort((a, b) => b.score - a.score);

    renderTimeline(scoredResults); // Render hasil filter ke timeline
    return scoredResults; // Kembalikan hasil filter untuk pelengkapan otomatis
}

let currentAutocompleteIndex = -1;
function showAutocomplete(inputElement, resultsElement, filteredResults, isChapterPage = false) {
    resultsElement.innerHTML = '';
    currentAutocompleteIndex = -1; // Reset indeks untuk hasil baru
    if (filteredResults.length > 0 && inputElement.value.length > 0) {
        resultsElement.style.display = 'block';
        // Use the already scored and sorted filteredResults directly
        filteredResults.slice(0, 5).forEach((item, index) => { // Tampilkan 5 hasil teratas
            const div = document.createElement('div');
            // Menampilkan judul tanpa "Bab X:" jika ada
            const displayTitle = item.title.replace(/^Bab \d+: /, '');
            div.textContent = displayTitle;
            div.setAttribute('role', 'option');
            div.setAttribute('id', `${inputElement.id}-autocomplete-option-${index}`); // ID unik untuk ARIA
            div.setAttribute('tabindex', '-1'); // Buat dapat difokuskan tetapi tidak dalam urutan tab
            div.setAttribute('data-id', item.id); // Simpan ID bab/subtopik
            div.setAttribute('data-type', item.subtopicId ? 'subtopic' : 'chapter'); // Bedakan jenis
            if (item.chapterId) div.setAttribute('data-chapter-id', item.chapterId); // Untuk subtopik

            div.addEventListener('click', () => {
                inputElement.value = displayTitle; // Isi input dengan judul yang bersih
                resultsElement.style.display = 'none';
                // Hide the clear button after selecting an autocomplete result
                const clearBtn = inputElement.nextElementSibling; // Assuming clear button is next sibling
                if (clearBtn && clearBtn.classList.contains('clear-search-btn')) {
                    clearBtn.style.display = 'none';
                }
                if (item.subtopicId) {
                    loadChapter(item.chapterId, item.id); // Muat subtopik spesifik
                } else {
                    loadChapter(item.id); // Muat bab secara langsung
                }
            });
            resultsElement.appendChild(div);
        });
    } else {
        resultsElement.style.display = 'none';
    }
}

function navigateAutocomplete(inputElement, resultsElement, direction) {
    const items = resultsElement.querySelectorAll('[role="option"]');
    if (items.length === 0) return;

    if (currentAutocompleteIndex !== -1) {
        items[currentAutocompleteIndex].classList.remove('selected');
    }

    currentAutocompleteIndex += direction;
    if (currentAutocompleteIndex >= items.length) {
        currentAutocompleteIndex = 0;
    } else if (currentAutocompleteIndex < 0) {
        currentAutocompleteIndex = items.length - 1;
    }

    items[currentAutocompleteIndex].classList.add('selected');
    inputElement.setAttribute('aria-activedescendant', items[currentAutocompleteIndex].id);
    items[currentAutocompleteIndex].scrollIntoView({ block: 'nearest' });
}

// --- Fungsi Halaman Bab ---
function calculateReadingTime(text) {
    const wordsPerMinute = 200; // Kecepatan membaca rata-rata
    const parser = new DOMParser();
    const doc = parser.parseFromString(text, 'text/html');
    const plainText = doc.body.textContent || "";
    const wordCount = plainText.split(/\s+/).filter(word => word.length > 0).length;
    const minutes = Math.ceil(wordCount / wordsPerMinute);
    return `${minutes} menit baca`;
}

function updateBreadcrumb(chapterTitle, subtopicTitle = null) {
    // Menghilangkan "Bab X:" dari judul bab di breadcrumb jika ada
    const cleanChapterTitle = chapterTitle.replace(/^Bab \d+: /, '');
    breadcrumbChapterTitle.textContent = cleanChapterTitle;
    if (subtopicTitle) {
        breadcrumbSubtopicSeparator.style.display = 'inline';
        breadcrumbSubtopicTitle.textContent = subtopicTitle;
        breadcrumbSubtopicTitle.style.display = 'inline';
    } else {
        breadcrumbSubtopicSeparator.style.display = 'none';
        breadcrumbSubtopicTitle.style.display = 'none';
    }
}

// Fungsi untuk menambah/menghapus bookmark dan memperbarui UI
function toggleBookmark(chapterId, subtopicId, chapterTitle, subtopicTitle, buttonElement) {
    let bookmarks = getBookmarks();
    const isBookmarked = bookmarks.some(b => b.chapterId === chapterId && b.subtopicId === subtopicId);

    if (isBookmarked) {
        // Hapus bookmark
        bookmarks = bookmarks.filter(b => !(b.chapterId === chapterId && b.subtopicId === subtopicId));
        saveBookmarks(bookmarks);
        showToast('Bookmark dihapus.', 'info');
        // Perbarui UI tombol di halaman bab (jika ada)
        if (buttonElement) {
            buttonElement.innerHTML = '<i class="far fa-bookmark" aria-hidden="true"></i> Bookmark'; // Ikon kosong
            buttonElement.classList.remove('bookmarked');
            buttonElement.setAttribute('aria-label', 'Tambahkan bookmark');
        }
        // Perbarui UI di sidebar (TOC)
        const sidebarLink = chapterAccordionList.querySelector(`a[data-chapter-id="${chapterId}"][data-subtopic-id="${subtopicId}"]`);
        if (sidebarLink) {
            sidebarLink.classList.remove('bookmarked');
            const icon = sidebarLink.querySelector('.bookmark-icon');
            if (icon) icon.remove();
        }
    } else {
        // Tambahkan bookmark
        bookmarks.push({ chapterId, subtopicId, chapterTitle, subtopicTitle });
        saveBookmarks(bookmarks);
        showToast('Bookmark ditambahkan!', 'success');
        // Perbarui UI tombol di halaman bab (jika ada)
        if (buttonElement) {
            buttonElement.innerHTML = '<i class="fas fa-bookmark" aria-hidden="true"></i> Bookmark'; // Ikon terisi
            buttonElement.classList.add('bookmarked');
            buttonElement.setAttribute('aria-label', 'Hapus bookmark');
        }
        // Perbarui UI di sidebar (TOC)
        const sidebarLink = chapterAccordionList.querySelector(`a[data-chapter-id="${chapterId}"][data-subtopic-id="${subtopicId}"]`);
        if (sidebarLink && !sidebarLink.classList.contains('bookmarked')) { // Hanya tambahkan jika belum ada
            sidebarLink.classList.add('bookmarked');
            const iconElement = document.createElement('i');
            iconElement.classList.add('fas', 'fa-bookmark', 'bookmark-icon');
            iconElement.setAttribute('aria-hidden', 'true');
            sidebarLink.appendChild(iconElement);
        }
    }
    // Selalu render ulang akordeon sidebar untuk mencerminkan perubahan bookmark
    // Ini mungkin tidak diperlukan jika pembaruan UI dilakukan secara langsung di atas,
    // tetapi bisa menjadi fallback yang aman jika ada kasus tepi yang terlewat.
    // Untuk performa, lebih baik update langsung elemen yang relevan.
    // renderChapterAccordion(chaptersData[currentChapterIndex]?.id); // Dikomentari untuk menghindari render ulang penuh
    // Juga render ulang modal bookmark jika sedang terbuka
    if (bookmarkModal.classList.contains('show')) {
        renderBookmarkList();
    }
}


function loadChapter(chapterId, subtopicId = null) {
    const chapter = chaptersData.find(c => c.id === chapterId);
    if (!chapter) {
        console.error('Bab tidak ditemukan:', chapterId);
        showToast('Bab tidak ditemukan.', 'error');
        return;
    }

    // Tampilkan spinner loading
    chapterContentDiv.innerHTML = ''; // Bersihkan konten
    chapterContentLoadingSpinner.style.display = 'flex'; // Tampilkan spinner

    currentChapterIndex = chaptersData.indexOf(chapter);

    // Simulasikan penundaan loading untuk visibilitas spinner
    setTimeout(() => {
        chapterContentLoadingSpinner.style.display = 'none'; // Sembunyikan spinner

        // Set judul bab tanpa duplikasi "Bab X:"
        currentChapterTitle.textContent = chapter.title; // chapter.title sudah dalam format "Bab X: Judul"
        estimatedReadingTime.textContent = calculateReadingTime(chapter.content);
        chapterContentDiv.innerHTML = chapter.content;

        // Tambahkan tombol bookmark dan bagikan ke kartu konten
        chapterContentDiv.querySelectorAll('.content-card').forEach(card => {
            const cardSubtopicId = card.id;
            const currentChapter = chaptersData[currentChapterIndex];
            const subtopic = currentChapter.subtopics.find(s => s.id === cardSubtopicId);

            if (subtopic) {
                const actionsContainer = document.createElement('div');
                actionsContainer.classList.add('card-actions'); // Container baru untuk tombol aksi

                // Tombol Bookmark
                const bookmarkBtn = document.createElement('button');
                bookmarkBtn.classList.add('bookmark-section-btn');
                const isBookmarked = getBookmarks().some(b => b.chapterId === currentChapter.id && b.subtopicId === subtopic.id);
                bookmarkBtn.innerHTML = isBookmarked
                    ? '<i class="fas fa-bookmark" aria-hidden="true"></i> Bookmark'
                    : '<i class="far fa-bookmark" aria-hidden="true"></i> Bookmark'; // far = regular (outline), fas = solid
                if (isBookmarked) bookmarkBtn.classList.add('bookmarked'); // Tambahkan kelas bookmarked
                bookmarkBtn.setAttribute('aria-label', isBookmarked ? 'Hapus bookmark' : 'Tambahkan bookmark');
                bookmarkBtn.addEventListener('click', () => {
                    toggleBookmark(currentChapter.id, subtopic.id, currentChapter.title, subtopic.title, bookmarkBtn);
                });
                actionsContainer.appendChild(bookmarkBtn);

                // Tombol Bagikan
                const shareBtn = document.createElement('button');
                shareBtn.classList.add('share-section-btn');
                shareBtn.innerHTML = '<i class="fas fa-share-alt" aria-hidden="true"></i> Bagikan';
                shareBtn.setAttribute('aria-label', `Bagikan bagian ${card.querySelector('h3')?.textContent || ''}`);
                shareBtn.addEventListener('click', async () => {
                    const sectionUrl = window.location.origin + window.location.pathname + `#${currentChapter.id}/${card.id}`;
                    try {
                        // Gunakan execCommand untuk kompatibilitas iframe yang lebih luas
                        const tempInput = document.createElement('textarea');
                        tempInput.value = sectionUrl;
                        document.body.appendChild(tempInput);
                        tempInput.select();
                        document.execCommand('copy');
                        document.body.removeChild(tempInput);

                        showToast('Tautan bagian disalin!', 'success');
                        shareBtn.classList.add('copied');
                        const originalIcon = shareBtn.innerHTML;
                        shareBtn.innerHTML = '<i class="fas fa-check" aria-hidden="true"></i> Disalin!';
                        setTimeout(() => {
                            shareBtn.classList.remove('copied');
                            shareBtn.innerHTML = originalIcon;
                        }, 1500); // Kembali setelah 1.5 detik

                    } catch (err) {
                        console.error('Gagal menyalin tautan:', err);
                        showToast('Gagal menyalin tautan. Silakan salin manual.', 'error');
                    }
                });
                actionsContainer.appendChild(shareBtn);

                card.appendChild(actionsContainer); // Tambahkan container aksi ke kartu
            }
        });

        // Perbarui tombol navigasi
        prevChapterBtn.disabled = currentChapterIndex === 0;
        nextChapterBtn.disabled = currentChapterIndex === chaptersData.length - 1;

        // Render akordeon sidebar dan aktifkan bab saat ini
        renderChapterAccordion(chapter.id);

        // Siapkan Intersection Observer untuk bagian konten
        setupSectionObserver();

        // Perbarui breadcrumb
        updateBreadcrumb(chapter.title);

        showPage('chapter-page'); // Panggil showPage setelah konten dimuat

        // Simpan bab terakhir yang dilihat
        setLocalStorageItem('lastViewedChapter', chapter.id);

        // Gulir ke subtopik tertentu jika disediakan
        if (subtopicId) {
            setTimeout(() => { // Beri waktu agar konten dirender
                const targetElement = document.getElementById(subtopicId);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                    // Perbarui breadcrumb untuk pemuatan subtopik awal
                    const subtopic = chapter.subtopics.find(s => s.id === subtopicId);
                    if (subtopic) {
                        updateBreadcrumb(chapter.title, subtopic.title);
                    }
                }
            }, 100);
        }
    }, 300); // Simulasikan penundaan jaringan untuk memuat konten
}

function navigateChapter(direction) {
    let newIndex = currentChapterIndex + direction;
    if (newIndex >= 0 && newIndex < chaptersData.length) {
        loadChapter(chaptersData[newIndex].id);
    }
}

function renderChapterAccordion(activeChapterId) {
    chapterAccordionList.innerHTML = ''; // Hapus yang sebelumnya
    const bookmarks = getBookmarks(); // Dapatkan bookmark saat ini
    const readingList = getReadingList(); // Dapatkan daftar bacaan saat ini

    chaptersData.forEach(chapter => {
        const accordionItem = document.createElement('li');
        accordionItem.classList.add('accordion-item');

        const header = document.createElement('div');
        header.classList.add('accordion-header');
        header.setAttribute('role', 'button');
        header.setAttribute('aria-expanded', 'false');
        header.setAttribute('aria-controls', `accordion-content-${chapter.id}`);
        // Menampilkan judul bab tanpa duplikasi "Bab X:" di header akordeon
        const chapterTitleForHeader = chapter.title.replace(/^Bab \d+: /, '');
        header.innerHTML = `
            <h4>${chapter.title}</h4>
            <i class="fas fa-chevron-right icon" aria-hidden="true"></i>
        `;
        accordionItem.appendChild(header);

        const content = document.createElement('div');
        content.classList.add('accordion-content');
        content.id = `accordion-content-${chapter.id}`;
        content.setAttribute('role', 'region');
        content.setAttribute('aria-labelledby', `accordion-header-${chapter.id}`);
        const ul = document.createElement('ul');
        chapter.subtopics.forEach(sub => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = `#`;
            a.textContent = sub.title;
            a.setAttribute('data-chapter-id', chapter.id);
            a.setAttribute('data-subtopic-id', sub.id);
            a.setAttribute('aria-label', `Lihat sub-topik ${sub.title} di ${chapter.title}`);

            // Lingkaran Kemajuan Membaca
            const progressCircle = document.createElement('span');
            progressCircle.classList.add('reading-progress-circle');
            const progressFill = document.createElement('span');
            progressFill.classList.add('fill');
            progressCircle.appendChild(progressFill);
            a.prepend(progressCircle); // Tambahkan lingkaran sebelum teks

            // Tambahkan ikon bookmark jika di-bookmark
            if (bookmarks.some(b => b.chapterId === chapter.id && b.subtopicId === sub.id)) {
                a.classList.add('bookmarked');
                const iconElement = document.createElement('i');
                iconElement.classList.add('fas', 'fa-bookmark', 'bookmark-icon');
                iconElement.setAttribute('aria-hidden', 'true');
                a.appendChild(iconElement);
            }
            // Tambahkan ikon daftar bacaan jika ada di daftar bacaan
            if (readingList.some(r => r.chapterId === chapter.id && r.subtopicId === sub.id)) {
                a.classList.add('in-reading-list');
                // Anda dapat menambahkan ikon yang berbeda di sini jika diinginkan, misal: <i class="fas fa-list-alt"></i>
            }


            a.addEventListener('click', (e) => {
                e.preventDefault();
                const targetElement = document.getElementById(sub.id);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                    updateBreadcrumb(chapter.title, sub.title); // Perbarui breadcrumb untuk subtopik
                }
                // Tutup akordeon jika di seluler
                if (window.innerWidth <= 1024) {
                    // Tidak perlu menutup akordeon di sini, karena sidebar akan tertutup
                    // header.classList.remove('active');
                    // content.style.maxHeight = '0';
                    // header.setAttribute('aria-expanded', 'false');
                    // Tutup sidebar hamburger setelah klik subtopik di mobile/tablet
                    if (sidebar.classList.contains('active')) {
                        toggleHamburgerMenu();
                    }
                }
            });
            li.appendChild(a);
            ul.appendChild(li);
        });
        content.appendChild(ul);
        accordionItem.appendChild(content);

        // Buka bab saat ini secara default
        if (chapter.id === activeChapterId) {
            header.classList.add('active');
            content.style.maxHeight = content.scrollHeight + 'px';
            header.setAttribute('aria-expanded', 'true');
        }

        header.addEventListener('click', () => {
            // Tutup semua akordeon lain sebelum membuka yang baru
            chapterAccordionList.querySelectorAll('.accordion-header.active').forEach(h => {
                if (h !== header) {
                    h.classList.remove('active');
                    h.setAttribute('aria-expanded', 'false');
                    h.nextElementSibling.style.maxHeight = '0';
                }
            });

            header.classList.toggle('active');
            if (header.classList.contains('active')) {
                content.style.maxHeight = content.scrollHeight + 'px';
                header.setAttribute('aria-expanded', 'true');
            } else {
                content.style.maxHeight = '0';
                header.setAttribute('aria-expanded', 'false');
            }
        });

        chapterAccordionList.appendChild(accordionItem);
    });
}

// --- Pelacakan Gulir dan Penyorotan ---
let contentSectionObserver; // Observer untuk penyorotan TOC sidebar dan lingkaran kemajuan
let timelineItemObserver; // Observer untuk animasi item timeline halaman utama

function setupSectionObserver() {
    chapterSections = Array.from(chapterContentDiv.querySelectorAll('.content-card'));
    if (contentSectionObserver) {
        contentSectionObserver.disconnect(); // Putuskan observer sebelumnya jika ada
    }

    contentSectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const id = entry.target.id;
            const sidebarLink = chapterAccordionList.querySelector(`a[href="#${id}"]`);

            if (sidebarLink) {
                const progressFill = sidebarLink.querySelector('.reading-progress-circle .fill');
                if (progressFill) {
                    progressFill.style.height = `${Math.round(entry.intersectionRatio * 100)}%`;
                }

                if (entry.isIntersecting && entry.intersectionRatio >= 0.5) { // Sorot saat 50% terlihat
                    // Hapus aktif dari semua tautan lain di subtopik bab saat ini
                    const currentChapterSubtopics = chapterAccordionList.querySelectorAll(`a[data-chapter-id="${sidebarLink.getAttribute('data-chapter-id')}"]`);
                    currentChapterSubtopics.forEach(link => link.classList.remove('active'));

                    sidebarLink.classList.add('active');
                    // Perbarui breadcrumb untuk subtopik aktif
                    const chapterId = sidebarLink.getAttribute('data-chapter-id');
                    // Bersihkan teks dari ikon/lingkaran untuk breadcrumb
                    const subtopicTitle = sidebarLink.textContent.trim().replace(/<i[^>]*>.*?<\/i>/g, '').replace(/[\s\S]*?(?=\S)/, ''); // Hapus ikon dan spasi awal
                    const currentChapter = chaptersData.find(c => c.id === chapterId);
                    if (currentChapter) {
                        updateBreadcrumb(currentChapter.title, subtopicTitle);
                    }
                }
            }
        });
    }, { rootMargin: '0px 0px -50% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] }); // Ambang batas lebih banyak untuk lingkaran kemajuan yang lebih halus

    chapterSections.forEach(section => {
        sectionFadeInObserver.observe(section); // Pastikan observer fade-in juga mengamati
        contentSectionObserver.observe(section);
    });
}

// Observer untuk animasi pudar masuk bagian yang dipicu gulir
const sectionFadeInObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            sectionFadeInObserver.unobserve(entry.target); // Berhenti mengamati setelah terlihat
        }
    });
}, { threshold: 0.1 }); // Picu saat 10% bagian terlihat

// Variabel untuk melacak titik yang sedang berpotongan
let intersectingDots = [];

// Observer untuk item timeline di halaman utama (pudar masuk dan titik aktif)
timelineItemObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const dot = entry.target.querySelector('.timeline-dot');
        if (!dot) return;

        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible'); // Untuk animasi pudar masuk
            // Tambahkan atau perbarui titik yang berpotongan dalam array pelacakan kita
            const existingIndex = intersectingDots.findIndex(item => item.dot === dot);
            if (existingIndex > -1) {
                intersectingDots[existingIndex].ratio = entry.intersectionRatio;
            } else {
                intersectingDots.push({ dot: dot, ratio: entry.intersectionRatio });
            }
        } else {
            // Hapus dari array pelacakan jika tidak lagi berpotongan sama sekali
            intersectingDots = intersectingDots.filter(item => item.dot !== dot);
            // Hapus kelas 'active' segera jika tidak lagi berpotongan
            dot.classList.remove('active');
        }
    });

    // Urutkan berdasarkan rasio perpotongan (tertinggi terlebih dahulu)
    intersectingDots.sort((a, b) => b.ratio - a.ratio);

    // Nonaktifkan semua titik aktif saat ini
    // Ini harus dilakukan pada semua dot di timelineNavigation, bukan hanya yang sedang diamati
    timelineNavigation.querySelectorAll('.timeline-dot.active').forEach(d => d.classList.remove('active'));

    // Aktifkan titik dengan rasio perpotongan tertinggi, jika ada
    if (intersectingDots.length > 0) {
        // Hanya aktifkan jika rasio di atas ambang batas tertentu untuk menghindari aktivasi item yang hampir tidak terlihat
        // Ambang batas yang lebih rendah (misal 0.2) memungkinkan titik tetap aktif lebih lama saat digulir
        if (intersectingDots[0].ratio > 0.2) {
            intersectingDots[0].dot.classList.add('active');
        }
    }
}, { threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1] }); // Lebih banyak ambang batas untuk pelacakan yang lebih halus


// --- Sistem Bookmark ---
function getBookmarks() {
    const bookmarksJson = getLocalStorageItem(BOOKMARKS_KEY);
    return bookmarksJson ? JSON.parse(bookmarksJson) : [];
}

function saveBookmarks(bookmarks) {
    setLocalStorageItem(BOOKMARKS_KEY, JSON.stringify(bookmarks));
}

function removeBookmark(chapterId, subtopicId) {
    let bookmarks = getBookmarks();
    const initialLength = bookmarks.length;
    bookmarks = bookmarks.filter(b => !(b.chapterId === chapterId && b.subtopicId === subtopicId));

    if (bookmarks.length < initialLength) { // Hanya jika bookmark benar-benar dihapus
        saveBookmarks(bookmarks);
        showToast('Bookmark dihapus.', 'info');

        // Perbarui tampilan di sidebar (TOC)
        const sidebarLink = chapterAccordionList.querySelector(`a[data-chapter-id="${chapterId}"][data-subtopic-id="${subtopicId}"]`);
        if (sidebarLink) {
            sidebarLink.classList.remove('bookmarked');
            const icon = sidebarLink.querySelector('.bookmark-icon');
            if (icon) icon.remove(); // Hapus elemen ikon
        }

        // Perbarui tampilan tombol bookmark di halaman chapter (jika sedang aktif)
        const currentChapterContentCard = document.getElementById(subtopicId);
        if (currentChapterContentCard && chapterPage.classList.contains('active')) {
            const bookmarkBtn = currentChapterContentCard.querySelector('.bookmark-section-btn');
            if (bookmarkBtn) {
                bookmarkBtn.innerHTML = '<i class="far fa-bookmark" aria-hidden="true"></i> Bookmark'; // Ubah ikon menjadi outline
                bookmarkBtn.classList.remove('bookmarked');
                bookmarkBtn.setAttribute('aria-label', 'Tambahkan bookmark');
            }
        }
    } else {
        showToast('Bookmark tidak ditemukan.', 'warning');
    }
    renderBookmarkList(); // Render ulang daftar modal
}


function renderBookmarkList() {
    const bookmarks = getBookmarks();
    bookmarkList.innerHTML = '';
    if (bookmarks.length === 0) {
        noBookmarksMessage.style.display = 'block';
    } else {
        noBookmarksMessage.style.display = 'none';
        bookmarks.forEach(bookmark => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = `#`; // Tidak ada tautan hash langsung, ditangani oleh JS
            a.textContent = `${bookmark.chapterTitle} - ${bookmark.subtopicTitle}`;
            a.setAttribute('aria-label', `Lihat bookmark: ${bookmark.subtopicTitle} di ${bookmark.chapterTitle}`);
            a.addEventListener('click', (e) => {
                e.preventDefault();
                loadChapter(bookmark.chapterId, bookmark.subtopicId);
                closeModal(bookmarkModal); // Tutup modal
            });

            const removeBtn = document.createElement('button');
            removeBtn.classList.add('remove-btn');
            removeBtn.innerHTML = '<i class="fas fa-trash" aria-hidden="true"></i>';
            removeBtn.setAttribute('aria-label', `Hapus bookmark ${bookmark.subtopicTitle}`);
            removeBtn.addEventListener('click', () => {
                removeBookmark(bookmark.chapterId, bookmark.subtopicId);
            });

            li.appendChild(a);
            li.appendChild(removeBtn);
            bookmarkList.appendChild(li);
        });
    }
}

// --- Sistem Daftar Bacaan ---
function getReadingList() {
    const readingListJson = getLocalStorageItem(READING_LIST_KEY);
    return readingListJson ? JSON.parse(readingListJson) : [];
}

function saveReadingList(list) {
    setLocalStorageItem(READING_LIST_KEY, JSON.stringify(list));
}

function addChapterToReadingList(chapterId, chapterTitle) {
    const readingList = getReadingList();
    const exists = readingList.some(item => item.chapterId === chapterId);
    if (!exists) {
        readingList.push({ chapterId, chapterTitle });
        saveReadingList(readingList);
        showToast(`"${chapterTitle}" ditambahkan ke daftar bacaan.`, 'success');
    } else {
        showToast(`"${chapterTitle}" sudah ada di daftar bacaan.`, 'info');
    }
}

function removeChapterFromReadingList(chapterId) {
    let readingList = getReadingList();
    readingList = readingList.filter(item => item.chapterId !== chapterId);
    saveReadingList(readingList);
    showToast('Bab dihapus dari daftar bacaan.', 'info');
    renderReadingList(); // Render ulang daftar modal
}

function renderReadingList() {
    const list = getReadingList();
    readingListItems.innerHTML = '';
    if (list.length === 0) {
        noReadingListMessage.style.display = 'block';
    } else {
        noReadingListMessage.style.display = 'none';
        list.forEach(item => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = `#`;
            a.textContent = item.chapterTitle;
            a.setAttribute('aria-label', `Lihat bab: ${item.chapterTitle}`);
            a.addEventListener('click', (e) => {
                e.preventDefault();
                loadChapter(item.chapterId);
                closeModal(readingListModal);
            });

            const removeBtn = document.createElement('button');
            removeBtn.classList.add('remove-btn');
            removeBtn.innerHTML = '<i class="fas fa-trash" aria-hidden="true"></i>';
            removeBtn.setAttribute('aria-label', `Hapus ${item.chapterTitle} dari daftar bacaan`);
            removeBtn.addEventListener('click', () => {
                removeChapterFromReadingList(item.chapterId);
            });

            li.appendChild(a);
            li.appendChild(removeBtn);
            readingListItems.appendChild(li);
        });
    }
}

// --- Sistem Glosarium ---
function renderGlossary() {
    glossaryList.innerHTML = '';
    if (glossaryData.length === 0) {
        document.getElementById('no-glossary-message').style.display = 'block';
    } else {
        document.getElementById('no-glossary-message').style.display = 'none';
        glossaryData.forEach(item => {
            const dt = document.createElement('dt');
            dt.textContent = item.term;
            const dd = document.createElement('dd');
            dd.textContent = item.definition;
            glossaryList.appendChild(dt);
            glossaryList.appendChild(dd);
        });
    }
}

// --- Logika Hamburger Menu ---
function toggleHamburgerMenu() {
    sidebar.classList.toggle('active');
    const isSidebarActive = sidebar.classList.contains('active');
    hamburgerMenuBtn.querySelector('i').classList.toggle('fa-bars', !isSidebarActive);
    hamburgerMenuBtn.querySelector('i').classList.toggle('fa-times', isSidebarActive);
    hamburgerMenuBtn.setAttribute('aria-expanded', isSidebarActive);

    // Mencegah gulir body saat sidebar terbuka di mobile
    if (window.innerWidth <= 1024) { // Hanya terapkan di mobile/tablet
        if (isSidebarActive) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = ''; // Kembalikan default
        }
    }
}

// --- Pendengar Acara ---
window.addEventListener('load', () => {
    loadingOverlay.style.opacity = '0';
    setTimeout(() => {
        loadingOverlay.style.display = 'none';
    }, 500); // Durasi pudar keluar

    // Terapkan ukuran font yang disimpan
    document.documentElement.style.setProperty('--body-font-size', `${currentFontSize}px`);

    // Terapkan mode baca yang disimpan saat memuat halaman
    const isReadingModeStored = getLocalStorageItem(READING_MODE_KEY) === 'true';
    if (isReadingModeStored) {
        // Jangan langsung menambahkan 'reading-mode' ke body di sini.
        // showPage akan menanganinya jika halaman yang dimuat adalah 'chapter-page'.
        // Cukup perbarui teks tombol jika mode baca disimpan.
        readingModeToggle.innerHTML = '<i class="fas fa-book-open"></i> Mode Normal';
        readingModeToggle.setAttribute('aria-label', 'Nonaktifkan mode baca');
    } else {
        readingModeToggle.innerHTML = '<i class="fas fa-book-reader"></i> Mode Baca';
        readingModeToggle.setAttribute('aria-label', 'Aktifkan mode baca gelap');
    }

    renderTimeline(chaptersData); // Render awal semua bab di timeline
    filterChaptersByCategory('all'); // Atur tab awal ke "Semua"

    // Periksa apakah ada ID bab di hash URL
    if (window.location.hash) {
        const hashParts = window.location.hash.substring(1).split('/');
        const chapterIdFromHash = hashParts[0];
        const subtopicIdFromHash = hashParts[1] || null;

        const chapterExists = chaptersData.some(c => c.id === chapterIdFromHash);
        if (chapterExists) {
            loadChapter(chapterIdFromHash, subtopicIdFromHash);
        } else {
            showPage('home-page'); // Jika hash tidak valid, tampilkan halaman utama
        }
    } else {
        showPage('home-page'); // Tampilkan halaman utama secara default jika tidak ada hash
    }

    // Amati bagian untuk animasi gulir (termasuk quiz-section yang baru)
    document.querySelectorAll('section').forEach(section => {
        sectionFadeInObserver.observe(section);
    });

    // Atur visibilitas sidebar berdasarkan ukuran layar saat dimuat
    // Memastikan sidebar tersembunyi dengan benar di mobile saat load
    if (window.innerWidth > 1024) { // Desktop
        sidebar.style.transform = 'translateX(0)';
        hamburgerMenuBtn.style.display = 'none';
        // Pastikan sidebar tidak memiliki kelas 'active' di desktop
        sidebar.classList.remove('active');
    } else { // Mobile/Tablet
        sidebar.style.transform = 'translateX(-100%)';
        hamburgerMenuBtn.style.display = 'flex';
        // Pastikan body overflow diatur jika sidebar aktif saat load di mobile
        if (sidebar.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        }
    }

    // Initial check for clear buttons visibility on load
    toggleClearButtonVisibility(searchInput, clearSearchBtn);
    toggleClearButtonVisibility(sidebarSearchInput, clearSidebarSearchBtn);
});

// Debounce function untuk event resize
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        // Sesuaikan sidebar berdasarkan perubahan ukuran layar
        if (window.innerWidth > 1024) { // Desktop
            sidebar.style.transform = 'translateX(0)';
            hamburgerMenuBtn.style.display = 'none';
            document.body.style.overflow = ''; // Pastikan gulir diaktifkan
            sidebar.classList.remove('active'); // Pastikan kelas aktif dihapus jika beralih ke desktop
            hamburgerMenuBtn.querySelector('i').classList.add('fa-bars');
            hamburgerMenuBtn.querySelector('i').classList.remove('fa-times');
            hamburgerMenuBtn.setAttribute('aria-expanded', 'false');
        } else { // Mobile/Tablet
            sidebar.style.transform = 'translateX(-100%)'; // Sembunyikan sidebar
            hamburgerMenuBtn.style.display = 'flex';
            // Hanya atur overflow jika sidebar aktif
            if (sidebar.classList.contains('active')) {
                 document.body.style.overflow = 'hidden';
            }
        }
        updateProgressBar();
        updateTimelineLinePosition(); // Update timeline line on resize
    }, 250); // Debounce 250ms
});

window.addEventListener('scroll', () => {
    updateProgressBar();
});

// Helper function to toggle clear button visibility
function toggleClearButtonVisibility(inputElement, clearButtonElement) {
    if (inputElement.value.length > 0) {
        clearButtonElement.style.display = 'block';
    } else {
        clearButtonElement.style.display = 'none';
    }
}

// Input Pencarian di Halaman Utama
searchInput.addEventListener('input', (e) => {
    const query = e.target.value;
    toggleClearButtonVisibility(searchInput, clearSearchBtn); // Show/hide clear button
    // Call the improved filterChapters function
    const filtered = filterChapters(query);
    showAutocomplete(searchInput, autocompleteResults, filtered);
});

// Event listener for clearing the main search input
clearSearchBtn.addEventListener('click', () => {
    searchInput.value = '';
    filterChapters(''); // Clear filter and re-render all chapters
    autocompleteResults.style.display = 'none'; // Hide autocomplete results
    clearSearchBtn.style.display = 'none'; // Hide the clear button itself
    searchInput.focus(); // Keep focus on the input
});


searchInput.addEventListener('focus', () => {
    const query = searchInput.value;
    toggleClearButtonVisibility(searchInput, clearSearchBtn); // Show clear button on focus if text exists
    // Call the improved filterChapters function
    const filtered = filterChapters(query);
    showAutocomplete(searchInput, autocompleteResults, filtered);
});

searchInput.addEventListener('blur', (e) => {
    // Periksa apakah target terkait blur adalah elemen autocomplete itu sendiri atau turunannya
    // Atau jika target terkait blur adalah tombol clear search itu sendiri
    if (!autocompleteResults.contains(e.relatedTarget) && e.relatedTarget !== clearSearchBtn) {
        setTimeout(() => { // Penundaan untuk memungkinkan klik pada item pelengkapan otomatis
            autocompleteResults.style.display = 'none';
            // Hide clear button if input is empty after blur and it's not the clear button itself
            if (searchInput.value === '') {
                clearSearchBtn.style.display = 'none';
            }
        }, 100);
    }
});

// Navigasi keyboard untuk pelengkapan otomatis pencarian Halaman Utama
searchInput.addEventListener('keydown', (e) => {
    if (autocompleteResults.style.display === 'block') {
        if (e.key === 'ArrowDown') {
            e.preventDefault();
            navigateAutocomplete(searchInput, autocompleteResults, 1);
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            navigateAutocomplete(searchInput, autocompleteResults, -1);
        } else if (e.key === 'Enter') {
            e.preventDefault();
            if (currentAutocompleteIndex !== -1) {
                autocompleteResults.children[currentAutocompleteIndex].click();
            } else {
                // If no item is selected, perform a regular search (e.g., load the first result or just render the filtered ones)
                // Use the improved filterChapters function
                const filtered = filterChapters(searchInput.value);
                if (filtered.length > 0) {
                    loadChapter(filtered[0].id);
                }
            }
        }
    }
});


// Input Pencarian di Sidebar (Halaman Bab)
sidebarSearchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    toggleClearButtonVisibility(sidebarSearchInput, clearSidebarSearchBtn); // Show/hide clear button
    const currentChapter = chaptersData[currentChapterIndex];
    if (!currentChapter) return;

    // Filter subtopics within the current chapter based on the improved algorithm
    const filteredSubtopics = currentChapter.subtopics.map(sub => {
        let score = 0;
        const subtopicTitleLower = sub.title.toLowerCase();
        const chapterContentLower = chapterContentDiv.textContent.toLowerCase(); // Search within the entire chapter content

        if (subtopicTitleLower.includes(query)) {
            score += 100; // High score for subtopic title match
            if (subtopicTitleLower === query) score += 50;
            if (subtopicTitleLower.startsWith(query)) score += 30;
        }
        // Also check for matches in the full chapter content for subtopics, but with lower score
        // This is a simplification; ideally, you'd parse content per subtopic if content was structured that way.
        if (chapterContentLower.includes(query)) {
            score += 10;
        }

        return { ...sub, chapterId: currentChapter.id, score: score };
    }).filter(item => item.score > 0);

    // Sort by score
    filteredSubtopics.sort((a, b) => b.score - a.score);

    showAutocomplete(sidebarSearchInput, sidebarAutocompleteResults, filteredSubtopics, true);
});

// Event listener for clearing the sidebar search input
clearSidebarSearchBtn.addEventListener('click', () => {
    sidebarSearchInput.value = '';
    // Re-render accordion with all subtopics for the current chapter
    if (chaptersData[currentChapterIndex]) {
        renderChapterAccordion(chaptersData[currentChapterIndex].id);
    }
    sidebarAutocompleteResults.style.display = 'none'; // Hide autocomplete results
    clearSidebarSearchBtn.style.display = 'none'; // Hide the clear button itself
    sidebarSearchInput.focus(); // Keep focus on the input
});


sidebarSearchInput.addEventListener('focus', () => {
    const query = sidebarSearchInput.value.toLowerCase();
    toggleClearButtonVisibility(sidebarSearchInput, clearSidebarSearchBtn); // Show clear button on focus if text exists
    const currentChapter = chaptersData[currentChapterIndex];
    if (!currentChapter) return;
    
    // Filter subtopics within the current chapter based on the improved algorithm
    const filteredSubtopics = currentChapter.subtopics.map(sub => {
        let score = 0;
        const subtopicTitleLower = sub.title.toLowerCase();
        const chapterContentLower = chapterContentDiv.textContent.toLowerCase(); // Search within the entire chapter content

        if (subtopicTitleLower.includes(query)) {
            score += 100; // High score for subtopic title match
            if (subtopicTitleLower === query) score += 50;
            if (subtopicTitleLower.startsWith(query)) score += 30;
        }
        if (chapterContentLower.includes(query)) {
            score += 10;
        }

        return { ...sub, chapterId: currentChapter.id, score: score };
    }).filter(item => item.score > 0);

    // Sort by score
    filteredSubtopics.sort((a, b) => b.score - a.score);

    showAutocomplete(sidebarSearchInput, sidebarAutocompleteResults, filteredSubtopics, true);
});

sidebarSearchInput.addEventListener('blur', (e) => {
    // Periksa apakah target terkait blur adalah elemen autocomplete itu sendiri atau turunannya
    // Atau jika target terkait blur adalah tombol clear search itu sendiri
    if (!sidebarAutocompleteResults.contains(e.relatedTarget) && e.relatedTarget !== clearSidebarSearchBtn) {
        setTimeout(() => {
            sidebarAutocompleteResults.style.display = 'none';
            // Hide clear button if input is empty after blur and it's not the clear button itself
            if (sidebarSearchInput.value === '') {
                clearSidebarSearchBtn.style.display = 'none';
            }
        }, 100);
    }
});

// Navigasi keyboard untuk pelengkapan otomatis pencarian Sidebar
sidebarSearchInput.addEventListener('keydown', (e) => {
    if (sidebarAutocompleteResults.style.display === 'block') {
        if (e.key === 'ArrowDown') {
            e.preventDefault();
            navigateAutocomplete(sidebarSearchInput, sidebarAutocompleteResults, 1);
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            navigateAutocomplete(sidebarSearchInput, sidebarAutocompleteResults, -1);
        } else if (e.key === 'Enter') {
            e.preventDefault();
            if (currentAutocompleteIndex !== -1) {
                sidebarAutocompleteResults.children[currentAutocompleteIndex].click();
            } else {
                // Jika tidak ada item yang dipilih, lakukan pencarian biasa (misal: muat hasil pertama atau hanya render yang difilter)
                const currentChapter = chaptersData[currentChapterIndex];
                if (currentChapter) {
                    const query = sidebarSearchInput.value.toLowerCase();
                    const filteredSubtopics = currentChapter.subtopics.map(sub => {
                        let score = 0;
                        const subtopicTitleLower = sub.title.toLowerCase();
                        const chapterContentLower = chapterContentDiv.textContent.toLowerCase();

                        if (subtopicTitleLower.includes(query)) {
                            score += 100;
                        }
                        if (chapterContentLower.includes(query)) {
                            score += 10;
                        }
                        return { ...sub, chapterId: currentChapter.id, score: score };
                    }).filter(item => item.score > 0);
                    filteredSubtopics.sort((a, b) => b.score - a.score);

                    if (filteredSubtopics.length > 0) {
                        loadChapter(currentChapter.id, filteredSubtopics[0].id);
                    }
                }
            }
        }
    }
});


// Tombol Navigasi Bab
prevChapterBtn.addEventListener('click', () => navigateChapter(-1));
nextChapterBtn.addEventListener('click', () => navigateChapter(1));

// Tombol Kembali ke Halaman Utama
backToHomeBtn.addEventListener('click', () => showPage('home-page'));

// Toggle FAB
mainFab.addEventListener('click', () => {
    fabMenu.classList.toggle('active');
    mainFab.querySelector('i').classList.toggle('fa-bars');
    mainFab.querySelector('i').classList.toggle('fa-times'); // Ubah ikon menjadi 'X'
    mainFab.setAttribute('aria-expanded', fabMenu.classList.contains('active'));
});

// Aksi Item Menu FAB
fabMenuItems.forEach(item => {
    item.addEventListener('click', () => {
        const action = item.getAttribute('data-action');
        fabMenu.classList.remove('active'); // Tutup menu setelah klik
        mainFab.querySelector('i').classList.add('fa-bars');
        mainFab.querySelector('i').classList.remove('fa-times');
        mainFab.setAttribute('aria-expanded', 'false');

        // Tutup semua modal terlebih dahulu
        document.querySelectorAll('.modal-overlay.show').forEach(modal => closeModal(modal));

        switch (action) {
            case 'home':
                showPage('home-page');
                break;
            case 'chapters':
                showPage('home-page'); // Pergi ke halaman utama untuk melihat daftar bab
                document.getElementById('chapters-overview').scrollIntoView({ behavior: 'smooth' });
                break;
            case 'search':
                if (homePage.classList.contains('active')) {
                    searchInput.focus();
                } else {
                    sidebarSearchInput.focus();
                }
                break;
            case 'bookmark':
                renderBookmarkList();
                openModal(bookmarkModal);
                break;
            case 'reading-list':
                renderReadingList();
                openModal(readingListModal);
                break;
            case 'glossary':
                renderGlossary();
                openModal(glossaryModal); // Buka modal glosarium
                break;
        }
    });
});

// Toggle Mode Baca (Hanya Mode Gelap)
readingModeToggle.addEventListener('click', () => {
    const isReadingModeActive = document.body.classList.toggle('reading-mode');
    setLocalStorageItem(READING_MODE_KEY, isReadingModeActive.toString());

    if (isReadingModeActive) {
        // Perbaikan: Gunakan ikon `fa-book-open` untuk "Mode Normal"
        readingModeToggle.innerHTML = '<i class="fas fa-book-open"></i> Mode Normal';
        readingModeToggle.setAttribute('aria-label', 'Nonaktifkan mode baca');
        showToast('Mode Baca telah diaktifkan.', 'info');
    } else {
        // Perbaikan: Gunakan ikon `fa-book-reader` untuk "Mode Baca"
        readingModeToggle.innerHTML = '<i class="fas fa-book-reader"></i> Mode Baca';
        readingModeToggle.setAttribute('aria-label', 'Aktifkan mode baca gelap');
        showToast('Mode Baca telah dinonaktifkan.', 'info');
    }
    // Perbarui progress bar visibility setelah toggle mode baca
    updateProgressBar();
});

// Penyesuai Ukuran Font
fontSizeIncreaseBtn.addEventListener('click', () => {
    if (currentFontSize < MAX_FONT_SIZE) {
        currentFontSize += FONT_SIZE_STEP;
        document.documentElement.style.setProperty('--body-font-size', `${currentFontSize}px`);
        setLocalStorageItem(FONT_SIZE_KEY, currentFontSize.toString());
        showToast(`Ukuran font diperbesar menjadi ${currentFontSize}px.`, 'info', 1500);
    } else {
        showToast('Ukuran font maksimal tercapai.', 'warning');
    }
});

fontSizeDecreaseBtn.addEventListener('click', () => {
    if (currentFontSize > MIN_FONT_SIZE) {
        currentFontSize -= FONT_SIZE_STEP;
        document.documentElement.style.setProperty('--body-font-size', `${currentFontSize}px`);
        setLocalStorageItem(FONT_SIZE_KEY, currentFontSize.toString());
        showToast(`Ukuran font diperkecil menjadi ${currentFontSize}px.`, 'info', 1500);
    } else {
        showToast('Ukuran font minimal tercapai.', 'warning');
    }
});

// Pendengar Tab Kategori
categoryTabs.addEventListener('click', (e) => {
    if (e.target.classList.contains('tab-button')) {
        const category = e.target.getAttribute('data-category');
        filterChaptersByCategory(category);
    }
});

// Tombol Tutup Modal
document.querySelectorAll('.modal-overlay .modal-close-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        closeModal(e.target.closest('.modal-overlay'));
    });
});

// Tutup modal saat mengklik di luar
document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            closeModal(overlay);
        }
    });
});

// Pintasan keyboard untuk pencarian (Ctrl + K)
document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.key === 'k') {
        e.preventDefault(); // Mencegah perilaku default Ctrl+K browser
        if (homePage.classList.contains('active')) {
            searchInput.focus();
        } else if (chapterPage.classList.contains('active')) {
            sidebarSearchInput.focus();
        }
    }
});

// Tambahkan menu konteks untuk menambahkan bab ke daftar bacaan di timeline halaman utama
timelineNavigation.addEventListener('contextmenu', (e) => {
    const target = e.target.closest('.timeline-item');
    if (target) {
        e.preventDefault();
        const chapterId = target.getAttribute('data-chapter-id');
        const chapter = chaptersData.find(c => c.id === chapterId);
        if (chapter) {
            addChapterToReadingList(chapter.id, chapter.title);
        }
    }
});

// Pendengar untuk tombol hamburger menu
hamburgerMenuBtn.addEventListener('click', toggleHamburgerMenu);

// Pendengar untuk menutup sidebar saat mengklik di luar sidebar (overlay)
sidebar.addEventListener('click', (e) => {
    // Jika klik terjadi di luar sidebar-content-wrapper (yaitu, di area overlay)
    // Pastikan klik pada tombol hamburger itu sendiri tidak menutup sidebar
    if (window.innerWidth <= 1024 && sidebar.classList.contains('active') && !sidebarContentWrapper.contains(e.target) && e.target !== hamburgerMenuBtn && !hamburgerMenuBtn.contains(e.target)) {
        toggleHamburgerMenu();
    }
});

// Event listener untuk tombol "Mulai Quiz Sekarang!"
startQuizBtn.addEventListener('click', () => {
    // Untuk saat ini, kita hanya akan mengarahkan ke halaman quiz.html
    // Anda dapat mengganti ini dengan logika lain di masa mendatang
    window.location.href = 'quiz.html';
});
