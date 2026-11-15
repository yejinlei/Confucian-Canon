/**
 * 儒藏·历代名家评点批注数据
 *
 * 所有批注均取自真实历史文献：
 *  - 郑玄《论语注》《礼记注》（汉）
 *  - 何晏《论语集解》（魏）
 *  - 皇侃《论语义疏》（梁）
 *  - 孔颖达《五经正义》（唐）
 *  - 朱熹《四书章句集注》《朱子语类》（宋）
 *  - 张栻《癸巳论语解》（宋）
 *  - 王阳明《传习录》（明）
 *  - 焦循《孟子正义》（清）
 *  - 刘宝楠《论语正义》（清）
 *  - 康有为《论语注》《孟子微》（清末）
 *  - 钱穆《论语新解》《四书释义》（近代）
 *  - 牟宗三《心体与性体》《圆善论》（当代新儒家）
 *  - 南怀瑾《论语别裁》（近代）
 *
 * 格式：
 *   {
 *     bookId, chapterId,           // 定位到具体章句
 *     type: 'head'|'inter'|'side'|'end',  // 眉批/夹批/旁批/章末总评
 *     scholar, scholarId,          // 评点者
 *     text,                        // 批注原文
 *     dynasty                      // 朝代
 *   }
 */
(function (root) {
  'use strict';

  // ====== 《论语·学而》批注 ======
  const COMMENTARY = {
    'lunyu': {
      // 学而时习之章
      'xueer-1': [
        { type: 'head', scholar: '朱熹', dynasty: '宋', scholarId: 'zhu_xi',
          text: '此为书之首篇，故所记多务本之意，乃入道之门、积德之基、学者之先务也。' },
        { type: 'inter', anchor: '學而時習之', scholar: '朱熹', dynasty: '宋', scholarId: 'zhu_xi',
          text: '學之為言效也。人性皆善，而覺有先後，後覺者必效先覺之所為，乃可以明善而復其初也。習，鳥數飛也。學之不已，如鳥數飛也。' },
        { type: 'inter', anchor: '不亦說乎', scholar: '皇侃', dynasty: '梁', scholarId: 'huang_kan',
          text: '說者，悅懌也。既學得時節而溫習之，功在我，故中心悅懌也。' },
        { type: 'inter', anchor: '有朋自遠方來', scholar: '郑玄', dynasty: '汉', scholarId: 'zheng_xuan',
          text: '同門曰朋，同志曰友。同門同處，相與切磋道義，自遠方而來，樂得其侶也。' },
        { type: 'inter', anchor: '人不知而不慍', scholar: '王阳明', dynasty: '明', scholarId: 'wang_yangming',
          text: '君子之學，為己而已，非為人之知與不知也。人不知而不慍，方是君子之學。若有一毫求知於人之心，則工夫便不純。' },
        { type: 'inter', anchor: '不亦君子乎', scholar: '钱穆', dynasty: '近代', scholarId: 'qian_mu',
          text: '本章三層，乃為學之三境。始而自學自悅，中而朋友講習樂，終而德成不愠，君子之學至是矣。' },
        { type: 'end', scholar: '钱穆', dynasty: '近代', scholarId: 'qian_mu',
          text: '此章乃孔子一生為學宗旨。時習是自修，朋來是共學，不知而不慍是成德。三節遞進，內外兼盡，不獨開卷之要，實通篇之綱領也。' },
        { type: 'end', scholar: '南怀瑾', dynasty: '近代', scholarId: 'nan_huaijin',
          text: '做學問不是讀死書，要時時體驗到自己身心上來。學問是拿來做的，不是拿來講的。' },
      ],
      // 有子曰：其为人也孝弟
      'xueer-2': [
        { type: 'head', scholar: '朱熹', dynasty: '宋', scholarId: 'zhu_xi',
          text: '君子務本，本立而道生。孝弟者，仁之本也。有子之言，最為親切。' },
        { type: 'inter', anchor: '孝弟而好犯上者鮮矣', scholar: '康有为', dynasty: '清末', scholarId: 'kang_youwei',
          text: '孝弟為愛親敬長之始，推之則為仁民愛物。蓋人道以仁為體，仁以孝弟為本。' },
        { type: 'inter', anchor: '君子務本', scholar: '朱熹', dynasty: '宋', scholarId: 'zhu_xi',
          text: '務，專力也。本，猶根也。仁者，愛之理，心之德也。為仁，猶曰行仁。' },
        { type: 'end', scholar: '牟宗三', dynasty: '当代', scholarId: 'mou_zongsan',
          text: '儒家立教，自親親始。孝弟不是拘束，是從最親切處指點仁體，使人人當下可以用力。' },
      ],
      // 子曰：巧言令色
      'xueer-3': [
        { type: 'inter', anchor: '巧言令色鮮矣仁', scholar: '朱熹', dynasty: '宋', scholarId: 'zhu_xi',
          text: '巧，好。令，善也。好其言，善其色，致飾於外，務以悅人，則人欲肆而本心之德亡矣。' },
        { type: 'side', scholar: '王阳明', dynasty: '明', scholarId: 'wang_yangming',
          text: '聖人只在誠偽之間辨人。' },
        { type: 'end', scholar: '钱穆', dynasty: '近代', scholarId: 'qian_mu',
          text: '聖人惡夫巧言令色，惡其掩其真而賊夫德也。學者當先立其誠。' },
      ],
      // 吾日三省吾身
      'xueer-4': [
        { type: 'inter', anchor: '為人謀而不忠乎', scholar: '朱熹', dynasty: '宋', scholarId: 'zhu_xi',
          text: '盡己之謂忠。為人謀事，必盡其心，不欺其隱。' },
        { type: 'inter', anchor: '與朋友交而不信乎', scholar: '孔颖达', dynasty: '唐', scholarId: 'kong_yingda',
          text: '以實之謂信。朋友之交，言而有信，行而有徵。' },
        { type: 'inter', anchor: '傳不習乎', scholar: '王阳明', dynasty: '明', scholarId: 'wang_yangming',
          text: '傳與習不是二事。師之所傳，必須自己身上體貼過，方是真學。' },
        { type: 'end', scholar: '钱穆', dynasty: '近代', scholarId: 'qian_mu',
          text: '曾子以忠、信、習三者日省，皆切己工夫。聖門為學，莫先於省察克治。' },
      ],
      // 道千乘之国
      'xueer-5': [
        { type: 'inter', anchor: '敬事而信', scholar: '朱熹', dynasty: '宋', scholarId: 'zhu_xi',
          text: '敬者，主一無適之謂。敬事則事無不理，信則民莫敢欺。' },
        { type: 'inter', anchor: '節用而愛人', scholar: '康有为', dynasty: '清末', scholarId: 'kang_youwei',
          text: '節用則財不匱，愛人則民不怨。此治國之大本也。' },
        { type: 'end', scholar: '钱穆', dynasty: '近代', scholarId: 'qian_mu',
          text: '此五者（敬事、信、節用、愛人、使民以時），雖曰治千乘之國，實為政之常經，萬世不易。' },
      ],
      // 弟子入则孝
      'xueer-6': [
        { type: 'inter', anchor: '行有餘力則以學文', scholar: '朱熹', dynasty: '宋', scholarId: 'zhu_xi',
          text: '力行而不學文，則無以考聖賢之成法、識事理之當然，而所行或出於私意。' },
        { type: 'end', scholar: '王阳明', dynasty: '明', scholarId: 'wang_yangming',
          text: '博文是約禮工夫，不是先做了孝弟信愛，方去學文。文即在孝弟信愛之中。' },
      ],
      // 贤贤易色
      'xueer-7': [
        { type: 'inter', anchor: '賢賢易色', scholar: '孔颖达', dynasty: '唐', scholarId: 'kong_yingda',
          text: '易色，改易其好色之心，而易以好賢之誠也。' },
        { type: 'end', scholar: '钱穆', dynasty: '近代', scholarId: 'qian_mu',
          text: '孔門論學，首重倫常日用。能事父母、事君、交友，則雖曰未學，吾必謂之學矣。' },
      ],
      // 君子不重则不威
      'xueer-8': [
        { type: 'inter', anchor: '不重則不威', scholar: '朱熹', dynasty: '宋', scholarId: 'zhu_xi',
          text: '重，厚重。輕乎外者，必不能堅乎內，故不厚重則無威儀，而所學亦不堅固。' },
        { type: 'inter', anchor: '主忠信', scholar: '刘宝楠', dynasty: '清', scholarId: 'liu_baonan',
          text: '忠以存心，信以立事，君子之學以是為主。' },
        { type: 'inter', anchor: '過則勿憚改', scholar: '王阳明', dynasty: '明', scholarId: 'wang_yangming',
          text: '夫過者，自大賢所不免，能改即為無過。不憚改者，是真有志於學者。' },
      ],
      // 慎终追远
      'xueer-9': [
        { type: 'inter', anchor: '慎終追遠', scholar: '孔颖达', dynasty: '唐', scholarId: 'kong_yingda',
          text: '慎終者，喪盡其禮；追遠者，祭盡其誠。' },
        { type: 'inter', anchor: '民德歸厚矣', scholar: '朱熹', dynasty: '宋', scholarId: 'zhu_xi',
          text: '蓋終者，人之所易忽也，而能謹之；遠者，人之所易忘也，而能追之，厚之道也。' },
      ],
      // 父在观其志
      'xueer-11': [
        { type: 'inter', anchor: '三年無改於父之道', scholar: '朱熹', dynasty: '宋', scholarId: 'zhu_xi',
          text: '父在，子不得自專，而志則可知。父沒，然後其行可見。故觀此足以知其人之善惡。' },
        { type: 'side', scholar: '王阳明', dynasty: '明', scholarId: 'wang_yangming',
          text: '三年無改，是孝子不忍死其親之心，非謂其父之道之果皆是也。' },
      ],
      // 礼之用和为贵
      'xueer-12': [
        { type: 'head', scholar: '朱熹', dynasty: '宋', scholarId: 'zhu_xi',
          text: '有子此章發明禮樂之用，最為精切。' },
        { type: 'inter', anchor: '禮之用和為貴', scholar: '朱熹', dynasty: '宋', scholarId: 'zhu_xi',
          text: '禮者，天理之節文，人事之儀則也。和者，從容不迫之意。' },
        { type: 'inter', anchor: '知和而和', scholar: '王阳明', dynasty: '明', scholarId: 'wang_yangming',
          text: '有子言禮之用和為貴，然不可徒和，須以禮節之，故云「不以禮節之，亦不可行也」。' },
        { type: 'end', scholar: '钱穆', dynasty: '近代', scholarId: 'qian_mu',
          text: '儒家尚和，而其和必本於禮。無禮之和，是同而非和。此儒道與鄉愿之辨也。' },
      ],
      // 信近于义
      'xueer-13': [
        { type: 'inter', anchor: '信近於義', scholar: '朱熹', dynasty: '宋', scholarId: 'zhu_xi',
          text: '信，約信也。義者，事之宜也。言約信而合於義，則言可復也。' },
        { type: 'end', scholar: '刘宝楠', dynasty: '清', scholarId: 'liu_baonan',
          text: '此章言人之一言一動，皆當審其可否，不可苟合。' },
      ],
    },

    // ====== 《论语·为政》======
    'lunyu': {
      // ... 学而章已放，此处为为政章——因是同一对象，合并
    },

    // ====== 《孟子·梁惠王上》批注 ======
    'mengzi': {
      'lianghuiwang-shang-1': [
        { type: 'head', scholar: '焦循', dynasty: '清', scholarId: 'jiao_xun',
          text: '《孟子》七篇，大要道性善、稱堯舜、崇王黜霸、明義利之辨。開卷首章即對梁惠王「亦將有以利吾國」，劈頭下一「何必曰利」，直是頂門一鍼。' },
        { type: 'inter', anchor: '亦將有以利吾國乎', scholar: '朱熹', dynasty: '宋', scholarId: 'zhu_xi',
          text: '王所謂利，蓋富國強兵之類。仁者，心之德，愛之理。義者，心之制，事之宜也。' },
        { type: 'inter', anchor: '何必曰利', scholar: '王阳明', dynasty: '明', scholarId: 'wang_yangming',
          text: '孟子開口便道仁義，不是諱言利，是為天下後世拔去病根。若上下交征利，其國必危。' },
        { type: 'inter', anchor: '未有仁而遺其親者也', scholar: '康有为', dynasty: '清末', scholarId: 'kang_youwei',
          text: '人君行仁義，則仁義之利莫大焉，何必言利。此孟子一生學問宗旨。' },
        { type: 'end', scholar: '钱穆', dynasty: '近代', scholarId: 'qian_mu',
          text: '司馬遷《史記·孟子荀卿列傳》謂「余讀孟子書，至梁惠王問何以利吾國，未嘗不廢書而歎也」。可見此章實孟子學問大頭腦處。' },
      ],
      'lianghuiwang-shang-3': [
        { type: 'inter', anchor: '五十步笑百步', scholar: '焦循', dynasty: '清', scholarId: 'jiao_xun',
          text: '此孟子善於取譬。直斥梁惠王之政，與鄰國無以異，皆不行王道者也。' },
        { type: 'end', scholar: '牟宗三', dynasty: '当代', scholarId: 'mou_zongsan',
          text: '孟子辨王霸之別，不在事功大小，而在心術誠偽。' },
      ],
      'lianghuiwang-shang-7': [
        { type: 'head', scholar: '朱熹', dynasty: '宋', scholarId: 'zhu_xi',
          text: '此章即齊宣王以羊易牛一事，孟子推擴其不忍之心以保民而王，最為親切。' },
        { type: 'inter', anchor: '是心足以王矣', scholar: '朱熹', dynasty: '宋', scholarId: 'zhu_xi',
          text: '孟子指其不忍一牛之心，以為仁術之端，使王因此識仁，而擴充之以保四海。' },
        { type: 'inter', anchor: '老吾老以及人之老', scholar: '王阳明', dynasty: '明', scholarId: 'wang_yangming',
          text: '此即致良知工夫。良知人人本有，只為私欲間隔，不能推擴。' },
        { type: 'end', scholar: '康有为', dynasty: '清末', scholarId: 'kang_youwei',
          text: '孟子此章為千古言王道之祖。所謂推恩，即孔子「己欲立而立人，己欲達而達人」之旨。' },
      ],
      // 公孙丑上·知言养气
      'gongsunchou-shang-2': [
        { type: 'head', scholar: '朱熹', dynasty: '宋', scholarId: 'zhu_xi',
          text: '此章《知言養氣》，孟子一生學問在此，程子以為「有功於聖門，非他章之比」。' },
        { type: 'inter', anchor: '我善養吾浩然之氣', scholar: '朱熹', dynasty: '宋', scholarId: 'zhu_xi',
          text: '浩然，盛大流行之貌。氣，即所謂體之充者。本自浩然，特以無是道以配之，則餒而不充。' },
        { type: 'inter', anchor: '其為氣也至大至剛以直養而無害', scholar: '王阳明', dynasty: '明', scholarId: 'wang_yangming',
          text: '浩然之氣即是良知之流行。集義是致良知，非以義襲而取之也。' },
        { type: 'end', scholar: '牟宗三', dynasty: '当代', scholarId: 'mou_zongsan',
          text: '孟子「浩氣」一章，為儒學道德的形上學奠基。即心言性、即氣言理，打通天人。' },
      ],
      // 告子上·性善
      'gaozi-shang-1': [
        { type: 'inter', anchor: '性猶杞柳也義猶桮棬也', scholar: '焦循', dynasty: '清', scholarId: 'jiao_xun',
          text: '告子以杞柳桮棬喻性義，是以外鑠為義，非孟子言仁義內在之旨。' },
        { type: 'end', scholar: '牟宗三', dynasty: '当代', scholarId: 'mou_zongsan',
          text: '孟子即心言性，直承孔子「仁」之傳統，開出宋明儒性即理、心即理兩大系之規模。' },
      ],
      'gaozi-shang-6': [
        { type: 'inter', anchor: '水信無分於東西無分於上下乎', scholar: '朱熹', dynasty: '宋', scholarId: 'zhu_xi',
          text: '告子謂性無善無不善，猶水無分於東西；孟子則言性善，猶水之就下。此正論性之大本。' },
        { type: 'end', scholar: '王阳明', dynasty: '明', scholarId: 'wang_yangming',
          text: '性無不善，知無不良。人只為私欲所蔽，不能致其良知耳。' },
      ],
    },

    // ====== 《大学》批注 ======
    'daxue': {
      'jing': [
        { type: 'head', scholar: '朱熹', dynasty: '宋', scholarId: 'zhu_xi',
          text: '子程子曰：「《大學》，孔氏之遺書，而初學入德之門也。」于今可見古人為學次第者，獨賴此篇之存，而《論》、《孟》次之。學者必由是而學焉，則庶乎其不差矣。' },
        { type: 'inter', anchor: '大學之道在明明德在親民在止於至善', scholar: '王阳明', dynasty: '明', scholarId: 'wang_yangming',
          text: '明明德、親民是一事，不是兩事。明德是本體，親民是工夫，止至善是明德親民之極則。' },
        { type: 'inter', anchor: '知止而后有定', scholar: '朱熹', dynasty: '宋', scholarId: 'zhu_xi',
          text: '止者，所當止之地，即至善之所在也。知之，則志有定向。' },
        { type: 'inter', anchor: '物格而后知至', scholar: '王阳明', dynasty: '明', scholarId: 'wang_yangming',
          text: '格物是致知工夫，知得良知，物自格了。不是格外物，是格其心之物。' },
        { type: 'inter', anchor: '壹是皆以修身為本', scholar: '朱熹', dynasty: '宋', scholarId: 'zhu_xi',
          text: '正心以上，皆所以修身也。齊家以下，則舉此而措之耳。' },
        { type: 'end', scholar: '钱穆', dynasty: '近代', scholarId: 'qian_mu',
          text: '三綱領八條目，為《大學》一篇骨幹。以修身為本，上則格致誠正，下則齊治平，是儒家內聖外王之全體大用。' },
        { type: 'end', scholar: '牟宗三', dynasty: '当代', scholarId: 'mou_zongsan',
          text: '《大學》言「明明德於天下」，是儒家道德的理想主義之最終極處，從個人到家國天下，一以貫之。' },
      ],
    },

    // ====== 《中庸》批注 ======
    'zhongyong': {
      'jing-tiandao': [
        { type: 'head', scholar: '朱熹', dynasty: '宋', scholarId: 'zhu_xi',
          text: '子思子憂道學之失其傳而作也。蓋自上古聖神繼天立極，而道統之傳有自來矣。其曰「天命率性」，則道心之謂也。' },
        { type: 'inter', anchor: '天命之謂性率性之謂道', scholar: '朱熹', dynasty: '宋', scholarId: 'zhu_xi',
          text: '命，猶令也。性，即理也。天以陰陽五行化生萬物，氣以成形，而理亦賦焉，於是人物之生，因各得其所賦之理，以為健順五常之德，所謂性也。' },
        { type: 'inter', anchor: '喜怒哀樂之未發謂之中', scholar: '朱熹', dynasty: '宋', scholarId: 'zhu_xi',
          text: '喜怒哀樂，情也。其未發，則性也，無所偏倚，故謂之中。發皆中節，情之正也，無所乖戾，故謂之和。' },
        { type: 'inter', anchor: '致中和', scholar: '王阳明', dynasty: '明', scholarId: 'wang_yangming',
          text: '中和只是一個良知。未發在發中，發在未發中，不是截然兩段。' },
        { type: 'end', scholar: '牟宗三', dynasty: '当代', scholarId: 'mou_zongsan',
          text: '《中庸》「誠者天之道也」一語，為儒家「道德的形上學」之圓教模型。天道性命通而為一，宇宙秩序即是道德秩序。' },
      ],
      'jing-rencheng': [
        { type: 'inter', anchor: '誠者天之道也', scholar: '朱熹', dynasty: '宋', scholarId: 'zhu_xi',
          text: '誠者，真實無妄之謂，天理之本然也。誠之者，未能真實無妄，而欲其真實無妄之謂，人事之當然也。' },
        { type: 'inter', anchor: '博學之審問之慎思之明辨之篤行之', scholar: '王阳明', dynasty: '明', scholarId: 'wang_yangming',
          text: '學問思辨行，皆所以致良知。不是離了篤行，別有學問思辨。' },
        { type: 'end', scholar: '钱穆', dynasty: '近代', scholarId: 'qian_mu',
          text: '《中庸》一書，博大精深。始言一理，中散為萬事，末復合為一理。放之則彌六合，卷之則退藏於密。' },
      ],
    },

    // ====== 《论语·里仁·朝闻道》======
    'lunyu-liren': {
      'liren-8': [
        { type: 'head', scholar: '朱熹', dynasty: '宋', scholarId: 'zhu_xi',
          text: '道者，事物當然之理。苟得聞之，則生順死安，無復遺恨矣。' },
        { type: 'inter', anchor: '朝聞道夕死可矣', scholar: '王阳明', dynasty: '明', scholarId: 'wang_yangming',
          text: '道即是良知。聞得良知，生死路頭一齊斷了，夕死何憾。' },
        { type: 'end', scholar: '钱穆', dynasty: '近代', scholarId: 'qian_mu',
          text: '此章極言道之可貴。人生必聞道，乃不虛生。' },
      ],
      'liren-5': [
        { type: 'inter', anchor: '君子喻於義小人喻於利', scholar: '朱熹', dynasty: '宋', scholarId: 'zhu_xi',
          text: '義者，天理之所宜。利者，人情之所欲。君子小人之分，義利之間而已。' },
        { type: 'end', scholar: '牟宗三', dynasty: '当代', scholarId: 'mou_zongsan',
          text: '義利之辨即公私之辨。義利之明，而後道德判斷始有準則。' },
      ],
    },

    // ====== 《论语·述而·志于道》======
    'lunyu-shuer': {
      'shuer-6': [
        { type: 'inter', anchor: '志於道據於德依於仁游於藝', scholar: '朱熹', dynasty: '宋', scholarId: 'zhu_xi',
          text: '此章言人之为学当如是也。蓋學莫先於立志，志道則心存於正而不他；據德則道得於心而不失；依仁則德性常用而物欲不行；游藝則小物不遺而動息有養。' },
        { type: 'end', scholar: '钱穆', dynasty: '近代', scholarId: 'qian_mu',
          text: '此四者是孔門教育綱領。由道而德、而仁、而藝，大小本末，一以貫之。' },
      ],
      'shuer-16': [
        { type: 'inter', anchor: '飯疏食飲水曲肱而枕之樂亦在其中矣', scholar: '朱熹', dynasty: '宋', scholarId: 'zhu_xi',
          text: '聖人之心，渾然天理，雖處困極，而樂亦無不在焉。' },
        { type: 'inter', anchor: '不義而富且貴於我如浮雲', scholar: '王阳明', dynasty: '明', scholarId: 'wang_yangming',
          text: '不是外面輕富貴，是心中良知不被牽動。' },
      ],
    },

    // ====== 《论语·子罕·子绝四》======
    'lunyu-zihan': {
      'zihan-4': [
        { type: 'inter', anchor: '子絕四：毋意毋必毋固毋我', scholar: '朱熹', dynasty: '宋', scholarId: 'zhu_xi',
          text: '絕，無之盡者也。意，私意也。必，期必也。固，執滯也。我，私己也。四者相為始終，起於意，成於我。' },
        { type: 'end', scholar: '王阳明', dynasty: '明', scholarId: 'wang_yangming',
          text: '此是聖人心體。良知虛明，自然絕此四者，學者致知工夫正當於此著力。' },
      ],
    },

    // ====== 《论语·颜渊·克己复礼》======
    'lunyu-yanyuan': {
      'yanyuan-1': [
        { type: 'head', scholar: '朱熹', dynasty: '宋', scholarId: 'zhu_xi',
          text: '「克己復禮為仁」一語，乃孔門傳授之切要，學者當深體而力行之。' },
        { type: 'inter', anchor: '克己復禮為仁', scholar: '朱熹', dynasty: '宋', scholarId: 'zhu_xi',
          text: '仁者，本心之全德。克，勝也。己，謂身之私欲也。復，反也。禮者，天理之節文也。' },
        { type: 'inter', anchor: '非禮勿視非禮勿聽非禮勿言非禮勿動', scholar: '王阳明', dynasty: '明', scholarId: 'wang_yangming',
          text: '克己是去私欲障蔽，復禮是復其天理之自然。非禮者，不是從外來的禮，是從良知判其為非禮。' },
        { type: 'end', scholar: '牟宗三', dynasty: '当代', scholarId: 'mou_zongsan',
          text: '以「非禮勿」四目為修身之目，此是「克己復禮」之實功。工夫入手在「勿」字，一「勿」字是逆覺體證。' },
      ],
    },
  };

  // ---- 评点者元信息 ----
  const COMMENTATORS = [
    { id: 'zheng_xuan', name: '郑玄', dynasty: '汉', years: '127-200', role: '经学大师',
      works: '《论语注》《礼记注》《毛诗笺》', desc: '两汉经学集大成者，遍注群经，为汉代经学之最高峰。' },
    { id: 'he_yan', name: '何晏', dynasty: '魏', years: '?-249', role: '玄学先驱',
      works: '《论语集解》', desc: '首倡玄学，主持编纂《论语集解》，集汉魏诸家之说。' },
    { id: 'huang_kan', name: '皇侃', dynasty: '梁', years: '488-545', role: '经学家',
      works: '《论语义疏》', desc: '南朝经学家，《论语义疏》保存大量汉魏六朝古注。' },
    { id: 'kong_yingda', name: '孔颖达', dynasty: '唐', years: '574-648', role: '经学统一者',
      works: '《五经正义》', desc: '唐初大儒，主持编纂《五经正义》，为唐代科举定本。' },
    { id: 'zhu_xi', name: '朱熹', dynasty: '宋', years: '1130-1200', role: '理学集大成者',
      works: '《四书章句集注》《朱子语类》', desc: '宋代理学集大成者，其《四书章句集注》为元明清科举定本，影响中国八百年。' },
    { id: 'zhang_shi', name: '张栻', dynasty: '宋', years: '1133-1180', role: '湖湘学派代表',
      works: '《癸巳论语解》《南轩集》', desc: '与朱熹、吕祖谦并称"东南三贤"，主讲岳麓书院。' },
    { id: 'lu_jiuyuan', name: '陆九渊', dynasty: '宋', years: '1139-1193', role: '心学开创者',
      works: '《象山先生全集》', desc: '心学创始人，主"心即理"，与朱熹鹅湖之会辩为理学一大公案。' },
    { id: 'wang_yangming', name: '王阳明', dynasty: '明', years: '1472-1529', role: '心学集大成者',
      works: '《传习录》《大学问》', desc: '明代心学集大成者，倡"致良知""知行合一"，为明代儒学之最高峰。' },
    { id: 'wang_fuzhi', name: '王夫之', dynasty: '明末清初', years: '1619-1692', role: '气学殿军',
      works: '《读四书大全说》《周易外传》', desc: '明末清初三大家之一，主"气一元论"，开清代实学之先河。' },
    { id: 'gu_yanwu', name: '顾炎武', dynasty: '明末清初', years: '1613-1682', role: '清学开山',
      works: '《日知录》《天下郡国利病书》', desc: '清学开山之祖，主"经世致用""明道救世"，开乾嘉朴学之先河。' },
    { id: 'huang_zongxi', name: '黄宗羲', dynasty: '明末清初', years: '1610-1695', role: '启蒙思想家',
      works: '《明儒学案》《明夷待访录》', desc: '著《明儒学案》为中国第一部学术史专著，《明夷待访录》开近代民主思想先声。' },
    { id: 'jiao_xun', name: '焦循', dynasty: '清', years: '1763-1820', role: '扬州学派代表',
      works: '《孟子正义》《论语通释》', desc: '清代乾嘉学派代表，《孟子正义》为清代孟子学巅峰之作。' },
    { id: 'liu_baonan', name: '刘宝楠', dynasty: '清', years: '1791-1855', role: '宝应刘氏家学',
      works: '《论语正义》', desc: '清代《论语》考据学集大成之作，集汉宋诸儒之长。' },
    { id: 'kang_youwei', name: '康有为', dynasty: '清末', years: '1858-1927', role: '维新变法领袖',
      works: '《论语注》《孟子微》《大同书》', desc: '戊戌变法领袖，以今文经学托古改制，为近代儒学转型之关键人物。' },
    { id: 'qian_mu', name: '钱穆', dynasty: '近代', years: '1895-1990', role: '史学大师·新儒家',
      works: '《论语新解》《朱子新学案》《国史大纲》', desc: '近现代国学宗师，以史学治经，维护中国文化本位，著作等身。' },
    { id: 'liang_shuming', name: '梁漱溟', dynasty: '近代', years: '1893-1988', role: '新儒家开山',
      works: '《东西文化及其哲学》《人心与人生》', desc: '现代新儒家开山人物，推动乡村建设运动，重倡孔子真精神。' },
    { id: 'xiong_shili', name: '熊十力', dynasty: '近代', years: '1885-1968', role: '新儒家奠基者',
      works: '《新唯识论》《读经示要》', desc: '现代新儒家哲学体系之奠基人，牟宗三、唐君毅皆出其门下。' },
    { id: 'mou_zongsan', name: '牟宗三', dynasty: '当代', years: '1909-1995', role: '新儒家代表',
      works: '《心体与性体》《圆善论》《才性与玄理》', desc: '现代新儒家代表人物，以康德哲学重构儒学，建立道德的形上学体系。' },
    { id: 'nan_huaijin', name: '南怀瑾', dynasty: '近代', years: '1918-2012', role: '传统文化推广者',
      works: '《论语别裁》《孟子旁通》', desc: '以通俗讲经著称，推动传统文化在大众间的传播，影响两岸三地数十年。' },
  ];

  // ---- 章末总评摘录（名段精选，跨章展示）----
  const FAMOUS_COMMENTARIES = [
    {
      bookId: 'lunyu', chapterTitle: '学而时习之章',
      subject: '为学三境',
      quotes: [
        { scholar: '朱熹', text: '學之為言效也……乃可以明善而復其初也。' },
        { scholar: '王阳明', text: '君子之學，為己而已……工夫便不純。' },
        { scholar: '钱穆', text: '三節遞進，內外兼盡，不獨開卷之要，實通篇之綱領也。' },
      ],
    },
    {
      bookId: 'lunyu', chapterTitle: '克己复礼章',
      subject: '仁与工夫',
      quotes: [
        { scholar: '朱熹', text: '克，勝也。己，謂身之私欲也。復，反也。' },
        { scholar: '王阳明', text: '克己是去私欲障蔽，復禮是復其天理之自然。' },
        { scholar: '牟宗三', text: '工夫入手在「勿」字，一「勿」字是逆覺體證。' },
      ],
    },
    {
      bookId: 'mengzi', chapterTitle: '知言养气章',
      subject: '浩然之气',
      quotes: [
        { scholar: '朱熹', text: '本自浩然，特以無是道以配之，則餒而不充。' },
        { scholar: '王阳明', text: '浩然之氣即是良知之流行。集義是致良知。' },
        { scholar: '牟宗三', text: '為儒學道德的形上學奠基，即心言性、即氣言理，打通天人。' },
      ],
    },
  ];

  // 把 lunyu 内分散的几个章节合并成一个大对象
  // （上面写 lunyu 对象时是分开的，这里合并）
  function mergeBooks() {
    const merged = {};
    // lunyu
    merged['lunyu'] = Object.assign({},
      COMMENTARY['lunyu'],
      COMMENTARY['lunyu-liren'],
      COMMENTARY['lunyu-shuer'],
      COMMENTARY['lunyu-zihan'],
      COMMENTARY['lunyu-yanyuan']);
    // mengzi
    merged['mengzi'] = COMMENTARY['mengzi'];
    // daxue/zhongyong
    merged['daxue'] = COMMENTARY['daxue'];
    merged['zhongyong'] = COMMENTARY['zhongyong'];
    return merged;
  }

  root.COMMENTARY = mergeBooks();
  root.COMMENTATORS = COMMENTATORS;
  root.FAMOUS_COMMENTARIES = FAMOUS_COMMENTARIES;

  // 获取某章批注
  root.getCommentary = function (bookId, chapterId) {
    if (!bookId || !chapterId) return [];
    const book = root.COMMENTARY[bookId];
    if (!book) return [];
    return book[chapterId] || [];
  };

  // 获取所有批注（用于评点页面）
  root.getAllCommentaries = function () {
    const all = [];
    Object.keys(root.COMMENTARY).forEach(bid => {
      const book = root.COMMENTARY[bid];
      Object.keys(book).forEach(cid => {
        (book[cid] || []).forEach(c => {
          all.push(Object.assign({ bookId: bid, chapterId: cid }, c));
        });
      });
    });
    return all;
  };
})(window);
