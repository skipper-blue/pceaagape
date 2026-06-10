const SITE = {
  name: 'PCEA Agape Narok Town Church',
  short: 'PCEA Agape',
  tagline: 'Faith • Love • Hope',
  phone: '+254 720 232 592',
  altPhone: '+254 720 822 020',
  email: 'info@pceaagapenarok.org',
  location: 'Narok Town, Narok County, Kenya',
  mapQuery: 'PCEA Narok Town Church Narok Kenya',
  youtube: 'https://www.youtube.com/@pceaagapechurchnarok5355',
  facebook: 'https://www.facebook.com/p/PCEA-Narok-Town-Church-100066473657890/',
  whatsapp: 'https://wa.me/254720232592',
  logo: 'assets/images/pcea-logo.png'
};

const IMAGES = {
  hero: [
    {src:'https://images.unsplash.com/photo-1490730141103-6cac27aaab94?auto=format&fit=crop&w=1600&q=85', title:'A House of Love in Narok Town', text:'Worship, fellowship, discipleship, and community service.'},
    {src:'https://images.unsplash.com/photo-1507692049790-de58290a4334?auto=format&fit=crop&w=1600&q=85', title:'Worship Together', text:'A simple, warm, and welcoming church family.'},
    {src:'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1600&q=85', title:'Youth & Family Fellowship', text:'Helping every generation grow in faith, love, and hope.'},
    {src:'https://img.youtube.com/vi/mBEFIJa9msc/maxresdefault.jpg', title:'Agape Choir Ministry', text:'Real ministry moments from PCEA Narok Town Church choir.'}
  ],
  gallery: [
    {cat:'worship',src:'https://images.unsplash.com/photo-1507692049790-de58290a4334?auto=format&fit=crop&w=1200&q=85',title:'Sunday Worship'},
    {cat:'members',src:'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=85',title:'Members Fellowship'},
    {cat:'youth',src:'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1200&q=85',title:'Youth Fellowship'},
    {cat:'choir',src:'https://img.youtube.com/vi/mBEFIJa9msc/maxresdefault.jpg',title:'Agape Choir'},
    {cat:'choir',src:'https://img.youtube.com/vi/xYjIK3UFRuM/maxresdefault.jpg',title:'Choir Ministry Video'},
    {cat:'children',src:'https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&w=1200&q=85',title:'Children Ministry'},
    {cat:'outreach',src:'https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=1200&q=85',title:'Community Outreach'},
    {cat:'bible',src:'https://images.unsplash.com/photo-1504052434569-70ad5836ab65?auto=format&fit=crop&w=1200&q=85',title:'Bible Study'},
    {cat:'women',src:'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=85',title:'Woman’s Guild'},
    {cat:'men',src:'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=85',title:'PCMF Fellowship'}
  ]
};

const MINISTRIES = [
  {slug:'youth', name:'Youth Ministry', icon:'🚀', image:'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1200&q=85', leader:'Youth Patron', meets:'Sundays after service', desc:'A vibrant space for young people to grow spiritually, build friendships, serve, and use their gifts for Christ.', activities:['Youth fellowship','Bible study','Talent development','Mission outreach','Mentorship sessions']},
  {slug:'womans-guild', name:'Woman’s Guild', icon:'🌸', image:'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=85', leader:'Woman’s Guild Chair', meets:'Weekly fellowship', desc:'A ministry nurturing women in prayer, fellowship, family care, mentoring, and compassionate service.', activities:['Prayer fellowship','Family support','Mentorship','Community care','Church service']},
  {slug:'pcmf', name:'Presbyterian Church Men Fellowship', icon:'🛡️', image:'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=85', leader:'PCMF Chair', meets:'Monthly meeting', desc:'Men walking together in faith, leadership, responsibility, family strengthening, and mission.', activities:['Men fellowship','Leadership training','Family support','Discipleship','Community projects']},
  {slug:'choir', name:'Agape Choir', icon:'🎶', image:'https://img.youtube.com/vi/mBEFIJa9msc/maxresdefault.jpg', leader:'Choir Director', meets:'Saturday rehearsals', desc:'A worship ministry leading the church in praise through songs, hymns, recordings, and live ministry.', activities:['Choir practice','Sunday worship','Music recording','Vocal training','Special events']},
  {slug:'children', name:'Children Ministry', icon:'✨', image:'https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&w=1200&q=85', leader:'Children Coordinator', meets:'Sunday school hours', desc:'Helping children know Jesus through simple Bible lessons, worship, care, and creative learning.', activities:['Sunday school','Bible stories','Creative activities','Children worship','Parent support']},
  {slug:'mission', name:'Mission & Outreach', icon:'🤝', image:'https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=1200&q=85', leader:'Mission Coordinator', meets:'Scheduled outreach days', desc:'Serving Narok and beyond through evangelism, compassion, prayer, visitation, and community action.', activities:['Community outreach','Hospital visitation','Evangelism','Prayer walks','Support programs']},
  {slug:'bible-study', name:'Bible Study & Discipleship', icon:'📖', image:'https://images.unsplash.com/photo-1504052434569-70ad5836ab65?auto=format&fit=crop&w=1200&q=85', leader:'Discipleship Team', meets:'Midweek and Sunday sessions', desc:'A learning ministry helping members understand scripture, grow spiritually, and live faithfully.', activities:['Bible study','New believers class','Discipleship groups','Catechism support','Teaching sessions']}
];

const EVENTS = [
  {slug:'sunday-worship', date:'2026-06-14', time:'9:00 AM - 12:30 PM', title:'Sunday Worship Service', venue:'Main Sanctuary', cat:'Worship', desc:'Join the church family for prayer, worship, scripture, choir ministry, and the sermon.'},
  {slug:'youth-sunday', date:'2026-06-21', time:'2:00 PM - 5:00 PM', title:'Youth Fellowship Sunday', venue:'Church Hall', cat:'Youth', desc:'A youth-focused afternoon with worship, mentorship, Bible discussion, and talents.'},
  {slug:'prayer-meeting', date:'2026-06-25', time:'5:30 PM - 7:00 PM', title:'Midweek Prayer Meeting', venue:'Main Sanctuary', cat:'Prayer', desc:'A focused time of prayer, encouragement, testimonies, and spiritual renewal.'},
  {slug:'choir-ministry', date:'2026-06-28', time:'10:00 AM - 12:30 PM', title:'Agape Choir Ministry Sabbath', venue:'Main Sanctuary', cat:'Music', desc:'A special worship service led by the Agape Choir and praise team.'},
  {slug:'community-outreach', date:'2026-07-05', time:'8:30 AM - 3:00 PM', title:'Narok Community Outreach', venue:'Narok Town', cat:'Outreach', desc:'Community service, visitation, prayer, and support for families around Narok Town.'}
];

const POSTS = [
  {slug:'faith-love-hope', title:'Faith, Love and Hope in Everyday Christian Living', date:'June 2026', image:'https://images.unsplash.com/photo-1490730141103-6cac27aaab94?auto=format&fit=crop&w=1200&q=85', cat:'Devotional', excerpt:'A simple encouragement for families, youth, and members to live the Gospel daily.', body:'Faith, love, and hope are not only words on a church emblem. They are daily practices that shape our homes, our work, our relationships, and our service. At PCEA Agape Narok Town Church, we believe that every member can be a light in the community by living faithfully, loving generously, and hoping confidently in Christ.'},
  {slug:'youth-service', title:'Why Youth Ministry Matters in the Church Today', date:'June 2026', image:'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1200&q=85', cat:'Youth', excerpt:'Helping young people serve, lead, worship, and grow in purpose.', body:'Youth ministry gives young people a place to belong, serve, and discover their God-given purpose. A strong youth ministry makes the whole church stronger because it builds future leaders, families, worshippers, and servants.'},
  {slug:'power-of-prayer', title:'The Power of Prayer in a Growing Church Family', date:'June 2026', image:'https://images.unsplash.com/photo-1504052434569-70ad5836ab65?auto=format&fit=crop&w=1200&q=85', cat:'Prayer', excerpt:'Prayer helps the church remain spiritually connected and mission-focused.', body:'Prayer is the heart of church life. Through prayer, families are strengthened, burdens are shared, and the church remains connected to God. Every ministry, event, and outreach should be covered in prayer.'}
];

