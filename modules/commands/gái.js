module.exports.config = {
  name: "gái",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Thắng",
  description: "Random ảnh girl",
  commandCategory: "random-img",
  usages: "gái",
  cooldowns: 2,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
    
};

module.exports.run = async({api,event,args,Users,Threads,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
    var link = [
"https://i.imgur.com/2SKrp2u.jpg",
"https://i.imgur.com/eQScoB2.jpg",
"https://i.imgur.com/sPTDj7J.jpg",
"https://i.imgur.com/eKO5bbW.jpg",
"https://i.imgur.com/OPoAuZz.jpg",
"https://i.imgur.com/e8Hs2LK.jpg",
"https://i.imgur.com/JB9Ma7r.jpg",
"https://i.imgur.com/skZasjw.jpg",
"https://i.imgur.com/uzlkEbQ.jpg",
"https://i.imgur.com/BlCpMpt.jpg",
"https://i.imgur.com/shE7rqH.jpg",
"https://i.imgur.com/9pcXEs7.jpg",
"https://i.imgur.com/lE0ryZt.jpg",
"https://i.imgur.com/87tIKH3.jpg",
"https://i.imgur.com/ISLIYWY.jpg",
"https://i.imgur.com/MWzaNIp.jpg",
"https://i.imgur.com/phQvE2O.jpg",
"https://i.imgur.com/rWn34JA.jpg",
"https://i.imgur.com/EazwRhR.jpg",
"https://i.imgur.com/KDMhunJ.jpg",
"https://i.imgur.com/08RUzA6.jpg",
"https://i.imgur.com/kpFhb0p.jpg",
"https://i.imgur.com/Ap5k1pG.jpg",
"https://i.imgur.com/hPqyBrA.jpg",
"https://i.imgur.com/giLgkEc.jpg",
"https://i.imgur.com/zEUHhI8.jpg",
"https://i.imgur.com/WJLKBbf.jpg",
"https://i.imgur.com/7Whaezd.jpg",
"https://i.imgur.com/8w3EYPR.jpg",
"https://i.imgur.com/47dMIkP.jpg",
"https://i.imgur.com/47dMIkP.jpg",
"https://i.imgur.com/tDfrVtL.jpg",
"https://i.imgur.com/gPKlKVv.jpg",
"https://i.imgur.com/nLrLI5a.jpg",
"https://i.imgur.com/n8tr6RJ.jpg",
"https://i.imgur.com/jqDdNZy.jpg",
"https://i.imgur.com/pC2aXuC.jpg",
"https://i.imgur.com/YP28MO8.jpg",
"https://i.imgur.com/KFwCJys.jpg",
"https://i.imgur.com/KnRGveR.jpg",
"https://i.imgur.com/ArLIBjf.jpg",
"https://i.imgur.com/ZQSFJZP.jpg",
"https://i.imgur.com/8j6zktC.jpg",
"https://i.imgur.com/Lp1unUj.jpg",
"https://i.imgur.com/4391tTY.jpg",
"https://i.imgur.com/KoJVTEi.jpg",
"https://i.imgur.com/uBVzoLu.jpg",
"https://i.imgur.com/HZOBVcd.jpg",
"https://i.imgur.com/MoozhQ4.jpg",
"https://i.imgur.com/Vtx8zyF.jpg",
"https://i.imgur.com/eLdLRuz.jpg",
"https://i.imgur.com/D7SErWN.jpg",
"https://i.imgur.com/JqkPa3w.jpg",
"https://i.imgur.com/eg0oN3w.jpg",
"https://i.imgur.com/Y92A06z.jpg",
"https://i.imgur.com/t1nXKRE.jpg",
"https://i.imgur.com/G4ZkJgb.jpg",
"https://i.imgur.com/KDrZUTI.jpg",
"https://i.imgur.com/BIGAkv6.jpg",
"https://i.imgur.com/9evwBdF.jpg",
"https://i.imgur.com/jzd9SOz.jpg",
"https://i.imgur.com/ZP8Rt6X.jpg",
"https://i.imgur.com/0mrUsLk.jpg",
"https://i.imgur.com/CaaGAlS.jpg",
"https://i.imgur.com/z30eQR7.jpg",
"https://i.imgur.com/8cv9Qhb.jpg",
"https://i.imgur.com/myWiaZq.jpg",
"https://i.imgur.com/gpFOq8u.jpg",
"https://i.imgur.com/8djscvM.jpg",
"https://i.imgur.com/oQhh1At.jpg",
"https://i.imgur.com/UUTCTH8.jpg",
"https://i.imgur.com/IBfQmpC.jpg",
"https://i.imgur.com/ZYBotms.jpg",
"https://i.imgur.com/PKXpOLt.jpg",
"https://i.imgur.com/A1A8yrW.jpg",
"https://i.imgur.com/Fbmn8pJ.jpg",
"https://i.imgur.com/zR59pVu.jpg",
"https://i.imgur.com/COqwBC1.jpg",
"https://i.imgur.com/7dmEDUP.jpg",
"https://i.imgur.com/H3AvmJf.jpg",
"https://i.imgur.com/fbjek1n.jpg",
"https://i.imgur.com/EWIwuLd.jpg",
"https://i.imgur.com/q5p2TVA.jpg",
"https://i.imgur.com/r6xzEhh.jpg",
"https://i.imgur.com/00HWAhf.jpg",
"https://i.imgur.com/NMLh07O.jpg",
"https://i.imgur.com/6jwc14e.jpg",
"https://i.imgur.com/c42FSxG.jpg",
"https://i.imgur.com/Bphtid4.jpg",
"https://i.imgur.com/KHcANF2.jpg",
"https://i.imgur.com/KjaAyqN.jpg",
"https://i.imgur.com/P6ZeoXS.jpg",
"https://i.imgur.com/j8W5TFs.jpg",
"https://i.imgur.com/WoBjRsy.jpg",
"https://i.imgur.com/X7Eqe5i.jpg",
"https://i.imgur.com/329IoXX.jpg",
"https://i.imgur.com/uEraREX.jpg",
"https://i.imgur.com/XuLiXEn.jpg",
"https://i.imgur.com/pK6Vnp7.jpg",
"https://i.imgur.com/PePdM8G.jpg",
"https://i.imgur.com/P6TpAy9.jpg",
"https://i.imgur.com/LOqlDKp.jpg",
"https://i.imgur.com/hrWNkBI.jpg",
"https://i.imgur.com/dF0xt3s.jpg",
"https://i.imgur.com/pZxDzpG.jpg",
"https://i.imgur.com/xGTYbOn.jpg",
"https://i.imgur.com/egb8dxR.jpg",
"https://i.imgur.com/zvSZRzy.jpg",
"https://i.imgur.com/Ryu6QWZ.jpg",
"https://i.imgur.com/BRosV3A.jpg",
"https://i.imgur.com/zWm8WwA.jpg",
"https://i.imgur.com/c1jWpDB.jpg",
"https://i.imgur.com/UE8usdY.jpg",
     ];
     var callback = () => api.sendMessage({body:`Ngắm Gái Ít Thôi -.-: ${link.length}`,attachment: fs.createReadStream(__dirname + "/cache/1.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.jpg"));  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/1.jpg")).on("close",() => callback());
   };