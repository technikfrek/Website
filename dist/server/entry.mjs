globalThis.process = {
	argv: [],
	env: Deno.env.toObject(),
};

// dist/server/chunks/astro.0557ac89.mjs
function Mime$1() {
  this._types = /* @__PURE__ */ Object.create(null);
  this._extensions = /* @__PURE__ */ Object.create(null);
  for (let i = 0; i < arguments.length; i++) {
    this.define(arguments[i]);
  }
  this.define = this.define.bind(this);
  this.getType = this.getType.bind(this);
  this.getExtension = this.getExtension.bind(this);
}
Mime$1.prototype.define = function(typeMap, force) {
  for (let type in typeMap) {
    let extensions = typeMap[type].map(function(t) {
      return t.toLowerCase();
    });
    type = type.toLowerCase();
    for (let i = 0; i < extensions.length; i++) {
      const ext = extensions[i];
      if (ext[0] === "*") {
        continue;
      }
      if (!force && ext in this._types) {
        throw new Error(
          'Attempt to change mapping for "' + ext + '" extension from "' + this._types[ext] + '" to "' + type + '". Pass `force=true` to allow this, otherwise remove "' + ext + '" from the list of extensions for "' + type + '".'
        );
      }
      this._types[ext] = type;
    }
    if (force || !this._extensions[type]) {
      const ext = extensions[0];
      this._extensions[type] = ext[0] !== "*" ? ext : ext.substr(1);
    }
  }
};
Mime$1.prototype.getType = function(path) {
  path = String(path);
  let last = path.replace(/^.*[/\\]/, "").toLowerCase();
  let ext = last.replace(/^.*\./, "").toLowerCase();
  let hasPath = last.length < path.length;
  let hasDot = ext.length < last.length - 1;
  return (hasDot || !hasPath) && this._types[ext] || null;
};
Mime$1.prototype.getExtension = function(type) {
  type = /^\s*([^;\s]*)/.test(type) && RegExp.$1;
  return type && this._extensions[type.toLowerCase()] || null;
};
var Mime_1 = Mime$1;
var standard = { "application/andrew-inset": ["ez"], "application/applixware": ["aw"], "application/atom+xml": ["atom"], "application/atomcat+xml": ["atomcat"], "application/atomdeleted+xml": ["atomdeleted"], "application/atomsvc+xml": ["atomsvc"], "application/atsc-dwd+xml": ["dwd"], "application/atsc-held+xml": ["held"], "application/atsc-rsat+xml": ["rsat"], "application/bdoc": ["bdoc"], "application/calendar+xml": ["xcs"], "application/ccxml+xml": ["ccxml"], "application/cdfx+xml": ["cdfx"], "application/cdmi-capability": ["cdmia"], "application/cdmi-container": ["cdmic"], "application/cdmi-domain": ["cdmid"], "application/cdmi-object": ["cdmio"], "application/cdmi-queue": ["cdmiq"], "application/cu-seeme": ["cu"], "application/dash+xml": ["mpd"], "application/davmount+xml": ["davmount"], "application/docbook+xml": ["dbk"], "application/dssc+der": ["dssc"], "application/dssc+xml": ["xdssc"], "application/ecmascript": ["es", "ecma"], "application/emma+xml": ["emma"], "application/emotionml+xml": ["emotionml"], "application/epub+zip": ["epub"], "application/exi": ["exi"], "application/express": ["exp"], "application/fdt+xml": ["fdt"], "application/font-tdpfr": ["pfr"], "application/geo+json": ["geojson"], "application/gml+xml": ["gml"], "application/gpx+xml": ["gpx"], "application/gxf": ["gxf"], "application/gzip": ["gz"], "application/hjson": ["hjson"], "application/hyperstudio": ["stk"], "application/inkml+xml": ["ink", "inkml"], "application/ipfix": ["ipfix"], "application/its+xml": ["its"], "application/java-archive": ["jar", "war", "ear"], "application/java-serialized-object": ["ser"], "application/java-vm": ["class"], "application/javascript": ["js", "mjs"], "application/json": ["json", "map"], "application/json5": ["json5"], "application/jsonml+json": ["jsonml"], "application/ld+json": ["jsonld"], "application/lgr+xml": ["lgr"], "application/lost+xml": ["lostxml"], "application/mac-binhex40": ["hqx"], "application/mac-compactpro": ["cpt"], "application/mads+xml": ["mads"], "application/manifest+json": ["webmanifest"], "application/marc": ["mrc"], "application/marcxml+xml": ["mrcx"], "application/mathematica": ["ma", "nb", "mb"], "application/mathml+xml": ["mathml"], "application/mbox": ["mbox"], "application/mediaservercontrol+xml": ["mscml"], "application/metalink+xml": ["metalink"], "application/metalink4+xml": ["meta4"], "application/mets+xml": ["mets"], "application/mmt-aei+xml": ["maei"], "application/mmt-usd+xml": ["musd"], "application/mods+xml": ["mods"], "application/mp21": ["m21", "mp21"], "application/mp4": ["mp4s", "m4p"], "application/msword": ["doc", "dot"], "application/mxf": ["mxf"], "application/n-quads": ["nq"], "application/n-triples": ["nt"], "application/node": ["cjs"], "application/octet-stream": ["bin", "dms", "lrf", "mar", "so", "dist", "distz", "pkg", "bpk", "dump", "elc", "deploy", "exe", "dll", "deb", "dmg", "iso", "img", "msi", "msp", "msm", "buffer"], "application/oda": ["oda"], "application/oebps-package+xml": ["opf"], "application/ogg": ["ogx"], "application/omdoc+xml": ["omdoc"], "application/onenote": ["onetoc", "onetoc2", "onetmp", "onepkg"], "application/oxps": ["oxps"], "application/p2p-overlay+xml": ["relo"], "application/patch-ops-error+xml": ["xer"], "application/pdf": ["pdf"], "application/pgp-encrypted": ["pgp"], "application/pgp-signature": ["asc", "sig"], "application/pics-rules": ["prf"], "application/pkcs10": ["p10"], "application/pkcs7-mime": ["p7m", "p7c"], "application/pkcs7-signature": ["p7s"], "application/pkcs8": ["p8"], "application/pkix-attr-cert": ["ac"], "application/pkix-cert": ["cer"], "application/pkix-crl": ["crl"], "application/pkix-pkipath": ["pkipath"], "application/pkixcmp": ["pki"], "application/pls+xml": ["pls"], "application/postscript": ["ai", "eps", "ps"], "application/provenance+xml": ["provx"], "application/pskc+xml": ["pskcxml"], "application/raml+yaml": ["raml"], "application/rdf+xml": ["rdf", "owl"], "application/reginfo+xml": ["rif"], "application/relax-ng-compact-syntax": ["rnc"], "application/resource-lists+xml": ["rl"], "application/resource-lists-diff+xml": ["rld"], "application/rls-services+xml": ["rs"], "application/route-apd+xml": ["rapd"], "application/route-s-tsid+xml": ["sls"], "application/route-usd+xml": ["rusd"], "application/rpki-ghostbusters": ["gbr"], "application/rpki-manifest": ["mft"], "application/rpki-roa": ["roa"], "application/rsd+xml": ["rsd"], "application/rss+xml": ["rss"], "application/rtf": ["rtf"], "application/sbml+xml": ["sbml"], "application/scvp-cv-request": ["scq"], "application/scvp-cv-response": ["scs"], "application/scvp-vp-request": ["spq"], "application/scvp-vp-response": ["spp"], "application/sdp": ["sdp"], "application/senml+xml": ["senmlx"], "application/sensml+xml": ["sensmlx"], "application/set-payment-initiation": ["setpay"], "application/set-registration-initiation": ["setreg"], "application/shf+xml": ["shf"], "application/sieve": ["siv", "sieve"], "application/smil+xml": ["smi", "smil"], "application/sparql-query": ["rq"], "application/sparql-results+xml": ["srx"], "application/srgs": ["gram"], "application/srgs+xml": ["grxml"], "application/sru+xml": ["sru"], "application/ssdl+xml": ["ssdl"], "application/ssml+xml": ["ssml"], "application/swid+xml": ["swidtag"], "application/tei+xml": ["tei", "teicorpus"], "application/thraud+xml": ["tfi"], "application/timestamped-data": ["tsd"], "application/toml": ["toml"], "application/trig": ["trig"], "application/ttml+xml": ["ttml"], "application/ubjson": ["ubj"], "application/urc-ressheet+xml": ["rsheet"], "application/urc-targetdesc+xml": ["td"], "application/voicexml+xml": ["vxml"], "application/wasm": ["wasm"], "application/widget": ["wgt"], "application/winhlp": ["hlp"], "application/wsdl+xml": ["wsdl"], "application/wspolicy+xml": ["wspolicy"], "application/xaml+xml": ["xaml"], "application/xcap-att+xml": ["xav"], "application/xcap-caps+xml": ["xca"], "application/xcap-diff+xml": ["xdf"], "application/xcap-el+xml": ["xel"], "application/xcap-ns+xml": ["xns"], "application/xenc+xml": ["xenc"], "application/xhtml+xml": ["xhtml", "xht"], "application/xliff+xml": ["xlf"], "application/xml": ["xml", "xsl", "xsd", "rng"], "application/xml-dtd": ["dtd"], "application/xop+xml": ["xop"], "application/xproc+xml": ["xpl"], "application/xslt+xml": ["*xsl", "xslt"], "application/xspf+xml": ["xspf"], "application/xv+xml": ["mxml", "xhvml", "xvml", "xvm"], "application/yang": ["yang"], "application/yin+xml": ["yin"], "application/zip": ["zip"], "audio/3gpp": ["*3gpp"], "audio/adpcm": ["adp"], "audio/amr": ["amr"], "audio/basic": ["au", "snd"], "audio/midi": ["mid", "midi", "kar", "rmi"], "audio/mobile-xmf": ["mxmf"], "audio/mp3": ["*mp3"], "audio/mp4": ["m4a", "mp4a"], "audio/mpeg": ["mpga", "mp2", "mp2a", "mp3", "m2a", "m3a"], "audio/ogg": ["oga", "ogg", "spx", "opus"], "audio/s3m": ["s3m"], "audio/silk": ["sil"], "audio/wav": ["wav"], "audio/wave": ["*wav"], "audio/webm": ["weba"], "audio/xm": ["xm"], "font/collection": ["ttc"], "font/otf": ["otf"], "font/ttf": ["ttf"], "font/woff": ["woff"], "font/woff2": ["woff2"], "image/aces": ["exr"], "image/apng": ["apng"], "image/avif": ["avif"], "image/bmp": ["bmp"], "image/cgm": ["cgm"], "image/dicom-rle": ["drle"], "image/emf": ["emf"], "image/fits": ["fits"], "image/g3fax": ["g3"], "image/gif": ["gif"], "image/heic": ["heic"], "image/heic-sequence": ["heics"], "image/heif": ["heif"], "image/heif-sequence": ["heifs"], "image/hej2k": ["hej2"], "image/hsj2": ["hsj2"], "image/ief": ["ief"], "image/jls": ["jls"], "image/jp2": ["jp2", "jpg2"], "image/jpeg": ["jpeg", "jpg", "jpe"], "image/jph": ["jph"], "image/jphc": ["jhc"], "image/jpm": ["jpm"], "image/jpx": ["jpx", "jpf"], "image/jxr": ["jxr"], "image/jxra": ["jxra"], "image/jxrs": ["jxrs"], "image/jxs": ["jxs"], "image/jxsc": ["jxsc"], "image/jxsi": ["jxsi"], "image/jxss": ["jxss"], "image/ktx": ["ktx"], "image/ktx2": ["ktx2"], "image/png": ["png"], "image/sgi": ["sgi"], "image/svg+xml": ["svg", "svgz"], "image/t38": ["t38"], "image/tiff": ["tif", "tiff"], "image/tiff-fx": ["tfx"], "image/webp": ["webp"], "image/wmf": ["wmf"], "message/disposition-notification": ["disposition-notification"], "message/global": ["u8msg"], "message/global-delivery-status": ["u8dsn"], "message/global-disposition-notification": ["u8mdn"], "message/global-headers": ["u8hdr"], "message/rfc822": ["eml", "mime"], "model/3mf": ["3mf"], "model/gltf+json": ["gltf"], "model/gltf-binary": ["glb"], "model/iges": ["igs", "iges"], "model/mesh": ["msh", "mesh", "silo"], "model/mtl": ["mtl"], "model/obj": ["obj"], "model/step+xml": ["stpx"], "model/step+zip": ["stpz"], "model/step-xml+zip": ["stpxz"], "model/stl": ["stl"], "model/vrml": ["wrl", "vrml"], "model/x3d+binary": ["*x3db", "x3dbz"], "model/x3d+fastinfoset": ["x3db"], "model/x3d+vrml": ["*x3dv", "x3dvz"], "model/x3d+xml": ["x3d", "x3dz"], "model/x3d-vrml": ["x3dv"], "text/cache-manifest": ["appcache", "manifest"], "text/calendar": ["ics", "ifb"], "text/coffeescript": ["coffee", "litcoffee"], "text/css": ["css"], "text/csv": ["csv"], "text/html": ["html", "htm", "shtml"], "text/jade": ["jade"], "text/jsx": ["jsx"], "text/less": ["less"], "text/markdown": ["markdown", "md"], "text/mathml": ["mml"], "text/mdx": ["mdx"], "text/n3": ["n3"], "text/plain": ["txt", "text", "conf", "def", "list", "log", "in", "ini"], "text/richtext": ["rtx"], "text/rtf": ["*rtf"], "text/sgml": ["sgml", "sgm"], "text/shex": ["shex"], "text/slim": ["slim", "slm"], "text/spdx": ["spdx"], "text/stylus": ["stylus", "styl"], "text/tab-separated-values": ["tsv"], "text/troff": ["t", "tr", "roff", "man", "me", "ms"], "text/turtle": ["ttl"], "text/uri-list": ["uri", "uris", "urls"], "text/vcard": ["vcard"], "text/vtt": ["vtt"], "text/xml": ["*xml"], "text/yaml": ["yaml", "yml"], "video/3gpp": ["3gp", "3gpp"], "video/3gpp2": ["3g2"], "video/h261": ["h261"], "video/h263": ["h263"], "video/h264": ["h264"], "video/iso.segment": ["m4s"], "video/jpeg": ["jpgv"], "video/jpm": ["*jpm", "jpgm"], "video/mj2": ["mj2", "mjp2"], "video/mp2t": ["ts"], "video/mp4": ["mp4", "mp4v", "mpg4"], "video/mpeg": ["mpeg", "mpg", "mpe", "m1v", "m2v"], "video/ogg": ["ogv"], "video/quicktime": ["qt", "mov"], "video/webm": ["webm"] };
var other = { "application/prs.cww": ["cww"], "application/vnd.1000minds.decision-model+xml": ["1km"], "application/vnd.3gpp.pic-bw-large": ["plb"], "application/vnd.3gpp.pic-bw-small": ["psb"], "application/vnd.3gpp.pic-bw-var": ["pvb"], "application/vnd.3gpp2.tcap": ["tcap"], "application/vnd.3m.post-it-notes": ["pwn"], "application/vnd.accpac.simply.aso": ["aso"], "application/vnd.accpac.simply.imp": ["imp"], "application/vnd.acucobol": ["acu"], "application/vnd.acucorp": ["atc", "acutc"], "application/vnd.adobe.air-application-installer-package+zip": ["air"], "application/vnd.adobe.formscentral.fcdt": ["fcdt"], "application/vnd.adobe.fxp": ["fxp", "fxpl"], "application/vnd.adobe.xdp+xml": ["xdp"], "application/vnd.adobe.xfdf": ["xfdf"], "application/vnd.ahead.space": ["ahead"], "application/vnd.airzip.filesecure.azf": ["azf"], "application/vnd.airzip.filesecure.azs": ["azs"], "application/vnd.amazon.ebook": ["azw"], "application/vnd.americandynamics.acc": ["acc"], "application/vnd.amiga.ami": ["ami"], "application/vnd.android.package-archive": ["apk"], "application/vnd.anser-web-certificate-issue-initiation": ["cii"], "application/vnd.anser-web-funds-transfer-initiation": ["fti"], "application/vnd.antix.game-component": ["atx"], "application/vnd.apple.installer+xml": ["mpkg"], "application/vnd.apple.keynote": ["key"], "application/vnd.apple.mpegurl": ["m3u8"], "application/vnd.apple.numbers": ["numbers"], "application/vnd.apple.pages": ["pages"], "application/vnd.apple.pkpass": ["pkpass"], "application/vnd.aristanetworks.swi": ["swi"], "application/vnd.astraea-software.iota": ["iota"], "application/vnd.audiograph": ["aep"], "application/vnd.balsamiq.bmml+xml": ["bmml"], "application/vnd.blueice.multipass": ["mpm"], "application/vnd.bmi": ["bmi"], "application/vnd.businessobjects": ["rep"], "application/vnd.chemdraw+xml": ["cdxml"], "application/vnd.chipnuts.karaoke-mmd": ["mmd"], "application/vnd.cinderella": ["cdy"], "application/vnd.citationstyles.style+xml": ["csl"], "application/vnd.claymore": ["cla"], "application/vnd.cloanto.rp9": ["rp9"], "application/vnd.clonk.c4group": ["c4g", "c4d", "c4f", "c4p", "c4u"], "application/vnd.cluetrust.cartomobile-config": ["c11amc"], "application/vnd.cluetrust.cartomobile-config-pkg": ["c11amz"], "application/vnd.commonspace": ["csp"], "application/vnd.contact.cmsg": ["cdbcmsg"], "application/vnd.cosmocaller": ["cmc"], "application/vnd.crick.clicker": ["clkx"], "application/vnd.crick.clicker.keyboard": ["clkk"], "application/vnd.crick.clicker.palette": ["clkp"], "application/vnd.crick.clicker.template": ["clkt"], "application/vnd.crick.clicker.wordbank": ["clkw"], "application/vnd.criticaltools.wbs+xml": ["wbs"], "application/vnd.ctc-posml": ["pml"], "application/vnd.cups-ppd": ["ppd"], "application/vnd.curl.car": ["car"], "application/vnd.curl.pcurl": ["pcurl"], "application/vnd.dart": ["dart"], "application/vnd.data-vision.rdz": ["rdz"], "application/vnd.dbf": ["dbf"], "application/vnd.dece.data": ["uvf", "uvvf", "uvd", "uvvd"], "application/vnd.dece.ttml+xml": ["uvt", "uvvt"], "application/vnd.dece.unspecified": ["uvx", "uvvx"], "application/vnd.dece.zip": ["uvz", "uvvz"], "application/vnd.denovo.fcselayout-link": ["fe_launch"], "application/vnd.dna": ["dna"], "application/vnd.dolby.mlp": ["mlp"], "application/vnd.dpgraph": ["dpg"], "application/vnd.dreamfactory": ["dfac"], "application/vnd.ds-keypoint": ["kpxx"], "application/vnd.dvb.ait": ["ait"], "application/vnd.dvb.service": ["svc"], "application/vnd.dynageo": ["geo"], "application/vnd.ecowin.chart": ["mag"], "application/vnd.enliven": ["nml"], "application/vnd.epson.esf": ["esf"], "application/vnd.epson.msf": ["msf"], "application/vnd.epson.quickanime": ["qam"], "application/vnd.epson.salt": ["slt"], "application/vnd.epson.ssf": ["ssf"], "application/vnd.eszigno3+xml": ["es3", "et3"], "application/vnd.ezpix-album": ["ez2"], "application/vnd.ezpix-package": ["ez3"], "application/vnd.fdf": ["fdf"], "application/vnd.fdsn.mseed": ["mseed"], "application/vnd.fdsn.seed": ["seed", "dataless"], "application/vnd.flographit": ["gph"], "application/vnd.fluxtime.clip": ["ftc"], "application/vnd.framemaker": ["fm", "frame", "maker", "book"], "application/vnd.frogans.fnc": ["fnc"], "application/vnd.frogans.ltf": ["ltf"], "application/vnd.fsc.weblaunch": ["fsc"], "application/vnd.fujitsu.oasys": ["oas"], "application/vnd.fujitsu.oasys2": ["oa2"], "application/vnd.fujitsu.oasys3": ["oa3"], "application/vnd.fujitsu.oasysgp": ["fg5"], "application/vnd.fujitsu.oasysprs": ["bh2"], "application/vnd.fujixerox.ddd": ["ddd"], "application/vnd.fujixerox.docuworks": ["xdw"], "application/vnd.fujixerox.docuworks.binder": ["xbd"], "application/vnd.fuzzysheet": ["fzs"], "application/vnd.genomatix.tuxedo": ["txd"], "application/vnd.geogebra.file": ["ggb"], "application/vnd.geogebra.tool": ["ggt"], "application/vnd.geometry-explorer": ["gex", "gre"], "application/vnd.geonext": ["gxt"], "application/vnd.geoplan": ["g2w"], "application/vnd.geospace": ["g3w"], "application/vnd.gmx": ["gmx"], "application/vnd.google-apps.document": ["gdoc"], "application/vnd.google-apps.presentation": ["gslides"], "application/vnd.google-apps.spreadsheet": ["gsheet"], "application/vnd.google-earth.kml+xml": ["kml"], "application/vnd.google-earth.kmz": ["kmz"], "application/vnd.grafeq": ["gqf", "gqs"], "application/vnd.groove-account": ["gac"], "application/vnd.groove-help": ["ghf"], "application/vnd.groove-identity-message": ["gim"], "application/vnd.groove-injector": ["grv"], "application/vnd.groove-tool-message": ["gtm"], "application/vnd.groove-tool-template": ["tpl"], "application/vnd.groove-vcard": ["vcg"], "application/vnd.hal+xml": ["hal"], "application/vnd.handheld-entertainment+xml": ["zmm"], "application/vnd.hbci": ["hbci"], "application/vnd.hhe.lesson-player": ["les"], "application/vnd.hp-hpgl": ["hpgl"], "application/vnd.hp-hpid": ["hpid"], "application/vnd.hp-hps": ["hps"], "application/vnd.hp-jlyt": ["jlt"], "application/vnd.hp-pcl": ["pcl"], "application/vnd.hp-pclxl": ["pclxl"], "application/vnd.hydrostatix.sof-data": ["sfd-hdstx"], "application/vnd.ibm.minipay": ["mpy"], "application/vnd.ibm.modcap": ["afp", "listafp", "list3820"], "application/vnd.ibm.rights-management": ["irm"], "application/vnd.ibm.secure-container": ["sc"], "application/vnd.iccprofile": ["icc", "icm"], "application/vnd.igloader": ["igl"], "application/vnd.immervision-ivp": ["ivp"], "application/vnd.immervision-ivu": ["ivu"], "application/vnd.insors.igm": ["igm"], "application/vnd.intercon.formnet": ["xpw", "xpx"], "application/vnd.intergeo": ["i2g"], "application/vnd.intu.qbo": ["qbo"], "application/vnd.intu.qfx": ["qfx"], "application/vnd.ipunplugged.rcprofile": ["rcprofile"], "application/vnd.irepository.package+xml": ["irp"], "application/vnd.is-xpr": ["xpr"], "application/vnd.isac.fcs": ["fcs"], "application/vnd.jam": ["jam"], "application/vnd.jcp.javame.midlet-rms": ["rms"], "application/vnd.jisp": ["jisp"], "application/vnd.joost.joda-archive": ["joda"], "application/vnd.kahootz": ["ktz", "ktr"], "application/vnd.kde.karbon": ["karbon"], "application/vnd.kde.kchart": ["chrt"], "application/vnd.kde.kformula": ["kfo"], "application/vnd.kde.kivio": ["flw"], "application/vnd.kde.kontour": ["kon"], "application/vnd.kde.kpresenter": ["kpr", "kpt"], "application/vnd.kde.kspread": ["ksp"], "application/vnd.kde.kword": ["kwd", "kwt"], "application/vnd.kenameaapp": ["htke"], "application/vnd.kidspiration": ["kia"], "application/vnd.kinar": ["kne", "knp"], "application/vnd.koan": ["skp", "skd", "skt", "skm"], "application/vnd.kodak-descriptor": ["sse"], "application/vnd.las.las+xml": ["lasxml"], "application/vnd.llamagraphics.life-balance.desktop": ["lbd"], "application/vnd.llamagraphics.life-balance.exchange+xml": ["lbe"], "application/vnd.lotus-1-2-3": ["123"], "application/vnd.lotus-approach": ["apr"], "application/vnd.lotus-freelance": ["pre"], "application/vnd.lotus-notes": ["nsf"], "application/vnd.lotus-organizer": ["org"], "application/vnd.lotus-screencam": ["scm"], "application/vnd.lotus-wordpro": ["lwp"], "application/vnd.macports.portpkg": ["portpkg"], "application/vnd.mapbox-vector-tile": ["mvt"], "application/vnd.mcd": ["mcd"], "application/vnd.medcalcdata": ["mc1"], "application/vnd.mediastation.cdkey": ["cdkey"], "application/vnd.mfer": ["mwf"], "application/vnd.mfmp": ["mfm"], "application/vnd.micrografx.flo": ["flo"], "application/vnd.micrografx.igx": ["igx"], "application/vnd.mif": ["mif"], "application/vnd.mobius.daf": ["daf"], "application/vnd.mobius.dis": ["dis"], "application/vnd.mobius.mbk": ["mbk"], "application/vnd.mobius.mqy": ["mqy"], "application/vnd.mobius.msl": ["msl"], "application/vnd.mobius.plc": ["plc"], "application/vnd.mobius.txf": ["txf"], "application/vnd.mophun.application": ["mpn"], "application/vnd.mophun.certificate": ["mpc"], "application/vnd.mozilla.xul+xml": ["xul"], "application/vnd.ms-artgalry": ["cil"], "application/vnd.ms-cab-compressed": ["cab"], "application/vnd.ms-excel": ["xls", "xlm", "xla", "xlc", "xlt", "xlw"], "application/vnd.ms-excel.addin.macroenabled.12": ["xlam"], "application/vnd.ms-excel.sheet.binary.macroenabled.12": ["xlsb"], "application/vnd.ms-excel.sheet.macroenabled.12": ["xlsm"], "application/vnd.ms-excel.template.macroenabled.12": ["xltm"], "application/vnd.ms-fontobject": ["eot"], "application/vnd.ms-htmlhelp": ["chm"], "application/vnd.ms-ims": ["ims"], "application/vnd.ms-lrm": ["lrm"], "application/vnd.ms-officetheme": ["thmx"], "application/vnd.ms-outlook": ["msg"], "application/vnd.ms-pki.seccat": ["cat"], "application/vnd.ms-pki.stl": ["*stl"], "application/vnd.ms-powerpoint": ["ppt", "pps", "pot"], "application/vnd.ms-powerpoint.addin.macroenabled.12": ["ppam"], "application/vnd.ms-powerpoint.presentation.macroenabled.12": ["pptm"], "application/vnd.ms-powerpoint.slide.macroenabled.12": ["sldm"], "application/vnd.ms-powerpoint.slideshow.macroenabled.12": ["ppsm"], "application/vnd.ms-powerpoint.template.macroenabled.12": ["potm"], "application/vnd.ms-project": ["mpp", "mpt"], "application/vnd.ms-word.document.macroenabled.12": ["docm"], "application/vnd.ms-word.template.macroenabled.12": ["dotm"], "application/vnd.ms-works": ["wps", "wks", "wcm", "wdb"], "application/vnd.ms-wpl": ["wpl"], "application/vnd.ms-xpsdocument": ["xps"], "application/vnd.mseq": ["mseq"], "application/vnd.musician": ["mus"], "application/vnd.muvee.style": ["msty"], "application/vnd.mynfc": ["taglet"], "application/vnd.neurolanguage.nlu": ["nlu"], "application/vnd.nitf": ["ntf", "nitf"], "application/vnd.noblenet-directory": ["nnd"], "application/vnd.noblenet-sealer": ["nns"], "application/vnd.noblenet-web": ["nnw"], "application/vnd.nokia.n-gage.ac+xml": ["*ac"], "application/vnd.nokia.n-gage.data": ["ngdat"], "application/vnd.nokia.n-gage.symbian.install": ["n-gage"], "application/vnd.nokia.radio-preset": ["rpst"], "application/vnd.nokia.radio-presets": ["rpss"], "application/vnd.novadigm.edm": ["edm"], "application/vnd.novadigm.edx": ["edx"], "application/vnd.novadigm.ext": ["ext"], "application/vnd.oasis.opendocument.chart": ["odc"], "application/vnd.oasis.opendocument.chart-template": ["otc"], "application/vnd.oasis.opendocument.database": ["odb"], "application/vnd.oasis.opendocument.formula": ["odf"], "application/vnd.oasis.opendocument.formula-template": ["odft"], "application/vnd.oasis.opendocument.graphics": ["odg"], "application/vnd.oasis.opendocument.graphics-template": ["otg"], "application/vnd.oasis.opendocument.image": ["odi"], "application/vnd.oasis.opendocument.image-template": ["oti"], "application/vnd.oasis.opendocument.presentation": ["odp"], "application/vnd.oasis.opendocument.presentation-template": ["otp"], "application/vnd.oasis.opendocument.spreadsheet": ["ods"], "application/vnd.oasis.opendocument.spreadsheet-template": ["ots"], "application/vnd.oasis.opendocument.text": ["odt"], "application/vnd.oasis.opendocument.text-master": ["odm"], "application/vnd.oasis.opendocument.text-template": ["ott"], "application/vnd.oasis.opendocument.text-web": ["oth"], "application/vnd.olpc-sugar": ["xo"], "application/vnd.oma.dd2+xml": ["dd2"], "application/vnd.openblox.game+xml": ["obgx"], "application/vnd.openofficeorg.extension": ["oxt"], "application/vnd.openstreetmap.data+xml": ["osm"], "application/vnd.openxmlformats-officedocument.presentationml.presentation": ["pptx"], "application/vnd.openxmlformats-officedocument.presentationml.slide": ["sldx"], "application/vnd.openxmlformats-officedocument.presentationml.slideshow": ["ppsx"], "application/vnd.openxmlformats-officedocument.presentationml.template": ["potx"], "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": ["xlsx"], "application/vnd.openxmlformats-officedocument.spreadsheetml.template": ["xltx"], "application/vnd.openxmlformats-officedocument.wordprocessingml.document": ["docx"], "application/vnd.openxmlformats-officedocument.wordprocessingml.template": ["dotx"], "application/vnd.osgeo.mapguide.package": ["mgp"], "application/vnd.osgi.dp": ["dp"], "application/vnd.osgi.subsystem": ["esa"], "application/vnd.palm": ["pdb", "pqa", "oprc"], "application/vnd.pawaafile": ["paw"], "application/vnd.pg.format": ["str"], "application/vnd.pg.osasli": ["ei6"], "application/vnd.picsel": ["efif"], "application/vnd.pmi.widget": ["wg"], "application/vnd.pocketlearn": ["plf"], "application/vnd.powerbuilder6": ["pbd"], "application/vnd.previewsystems.box": ["box"], "application/vnd.proteus.magazine": ["mgz"], "application/vnd.publishare-delta-tree": ["qps"], "application/vnd.pvi.ptid1": ["ptid"], "application/vnd.quark.quarkxpress": ["qxd", "qxt", "qwd", "qwt", "qxl", "qxb"], "application/vnd.rar": ["rar"], "application/vnd.realvnc.bed": ["bed"], "application/vnd.recordare.musicxml": ["mxl"], "application/vnd.recordare.musicxml+xml": ["musicxml"], "application/vnd.rig.cryptonote": ["cryptonote"], "application/vnd.rim.cod": ["cod"], "application/vnd.rn-realmedia": ["rm"], "application/vnd.rn-realmedia-vbr": ["rmvb"], "application/vnd.route66.link66+xml": ["link66"], "application/vnd.sailingtracker.track": ["st"], "application/vnd.seemail": ["see"], "application/vnd.sema": ["sema"], "application/vnd.semd": ["semd"], "application/vnd.semf": ["semf"], "application/vnd.shana.informed.formdata": ["ifm"], "application/vnd.shana.informed.formtemplate": ["itp"], "application/vnd.shana.informed.interchange": ["iif"], "application/vnd.shana.informed.package": ["ipk"], "application/vnd.simtech-mindmapper": ["twd", "twds"], "application/vnd.smaf": ["mmf"], "application/vnd.smart.teacher": ["teacher"], "application/vnd.software602.filler.form+xml": ["fo"], "application/vnd.solent.sdkm+xml": ["sdkm", "sdkd"], "application/vnd.spotfire.dxp": ["dxp"], "application/vnd.spotfire.sfs": ["sfs"], "application/vnd.stardivision.calc": ["sdc"], "application/vnd.stardivision.draw": ["sda"], "application/vnd.stardivision.impress": ["sdd"], "application/vnd.stardivision.math": ["smf"], "application/vnd.stardivision.writer": ["sdw", "vor"], "application/vnd.stardivision.writer-global": ["sgl"], "application/vnd.stepmania.package": ["smzip"], "application/vnd.stepmania.stepchart": ["sm"], "application/vnd.sun.wadl+xml": ["wadl"], "application/vnd.sun.xml.calc": ["sxc"], "application/vnd.sun.xml.calc.template": ["stc"], "application/vnd.sun.xml.draw": ["sxd"], "application/vnd.sun.xml.draw.template": ["std"], "application/vnd.sun.xml.impress": ["sxi"], "application/vnd.sun.xml.impress.template": ["sti"], "application/vnd.sun.xml.math": ["sxm"], "application/vnd.sun.xml.writer": ["sxw"], "application/vnd.sun.xml.writer.global": ["sxg"], "application/vnd.sun.xml.writer.template": ["stw"], "application/vnd.sus-calendar": ["sus", "susp"], "application/vnd.svd": ["svd"], "application/vnd.symbian.install": ["sis", "sisx"], "application/vnd.syncml+xml": ["xsm"], "application/vnd.syncml.dm+wbxml": ["bdm"], "application/vnd.syncml.dm+xml": ["xdm"], "application/vnd.syncml.dmddf+xml": ["ddf"], "application/vnd.tao.intent-module-archive": ["tao"], "application/vnd.tcpdump.pcap": ["pcap", "cap", "dmp"], "application/vnd.tmobile-livetv": ["tmo"], "application/vnd.trid.tpt": ["tpt"], "application/vnd.triscape.mxs": ["mxs"], "application/vnd.trueapp": ["tra"], "application/vnd.ufdl": ["ufd", "ufdl"], "application/vnd.uiq.theme": ["utz"], "application/vnd.umajin": ["umj"], "application/vnd.unity": ["unityweb"], "application/vnd.uoml+xml": ["uoml"], "application/vnd.vcx": ["vcx"], "application/vnd.visio": ["vsd", "vst", "vss", "vsw"], "application/vnd.visionary": ["vis"], "application/vnd.vsf": ["vsf"], "application/vnd.wap.wbxml": ["wbxml"], "application/vnd.wap.wmlc": ["wmlc"], "application/vnd.wap.wmlscriptc": ["wmlsc"], "application/vnd.webturbo": ["wtb"], "application/vnd.wolfram.player": ["nbp"], "application/vnd.wordperfect": ["wpd"], "application/vnd.wqd": ["wqd"], "application/vnd.wt.stf": ["stf"], "application/vnd.xara": ["xar"], "application/vnd.xfdl": ["xfdl"], "application/vnd.yamaha.hv-dic": ["hvd"], "application/vnd.yamaha.hv-script": ["hvs"], "application/vnd.yamaha.hv-voice": ["hvp"], "application/vnd.yamaha.openscoreformat": ["osf"], "application/vnd.yamaha.openscoreformat.osfpvg+xml": ["osfpvg"], "application/vnd.yamaha.smaf-audio": ["saf"], "application/vnd.yamaha.smaf-phrase": ["spf"], "application/vnd.yellowriver-custom-menu": ["cmp"], "application/vnd.zul": ["zir", "zirz"], "application/vnd.zzazz.deck+xml": ["zaz"], "application/x-7z-compressed": ["7z"], "application/x-abiword": ["abw"], "application/x-ace-compressed": ["ace"], "application/x-apple-diskimage": ["*dmg"], "application/x-arj": ["arj"], "application/x-authorware-bin": ["aab", "x32", "u32", "vox"], "application/x-authorware-map": ["aam"], "application/x-authorware-seg": ["aas"], "application/x-bcpio": ["bcpio"], "application/x-bdoc": ["*bdoc"], "application/x-bittorrent": ["torrent"], "application/x-blorb": ["blb", "blorb"], "application/x-bzip": ["bz"], "application/x-bzip2": ["bz2", "boz"], "application/x-cbr": ["cbr", "cba", "cbt", "cbz", "cb7"], "application/x-cdlink": ["vcd"], "application/x-cfs-compressed": ["cfs"], "application/x-chat": ["chat"], "application/x-chess-pgn": ["pgn"], "application/x-chrome-extension": ["crx"], "application/x-cocoa": ["cco"], "application/x-conference": ["nsc"], "application/x-cpio": ["cpio"], "application/x-csh": ["csh"], "application/x-debian-package": ["*deb", "udeb"], "application/x-dgc-compressed": ["dgc"], "application/x-director": ["dir", "dcr", "dxr", "cst", "cct", "cxt", "w3d", "fgd", "swa"], "application/x-doom": ["wad"], "application/x-dtbncx+xml": ["ncx"], "application/x-dtbook+xml": ["dtb"], "application/x-dtbresource+xml": ["res"], "application/x-dvi": ["dvi"], "application/x-envoy": ["evy"], "application/x-eva": ["eva"], "application/x-font-bdf": ["bdf"], "application/x-font-ghostscript": ["gsf"], "application/x-font-linux-psf": ["psf"], "application/x-font-pcf": ["pcf"], "application/x-font-snf": ["snf"], "application/x-font-type1": ["pfa", "pfb", "pfm", "afm"], "application/x-freearc": ["arc"], "application/x-futuresplash": ["spl"], "application/x-gca-compressed": ["gca"], "application/x-glulx": ["ulx"], "application/x-gnumeric": ["gnumeric"], "application/x-gramps-xml": ["gramps"], "application/x-gtar": ["gtar"], "application/x-hdf": ["hdf"], "application/x-httpd-php": ["php"], "application/x-install-instructions": ["install"], "application/x-iso9660-image": ["*iso"], "application/x-iwork-keynote-sffkey": ["*key"], "application/x-iwork-numbers-sffnumbers": ["*numbers"], "application/x-iwork-pages-sffpages": ["*pages"], "application/x-java-archive-diff": ["jardiff"], "application/x-java-jnlp-file": ["jnlp"], "application/x-keepass2": ["kdbx"], "application/x-latex": ["latex"], "application/x-lua-bytecode": ["luac"], "application/x-lzh-compressed": ["lzh", "lha"], "application/x-makeself": ["run"], "application/x-mie": ["mie"], "application/x-mobipocket-ebook": ["prc", "mobi"], "application/x-ms-application": ["application"], "application/x-ms-shortcut": ["lnk"], "application/x-ms-wmd": ["wmd"], "application/x-ms-wmz": ["wmz"], "application/x-ms-xbap": ["xbap"], "application/x-msaccess": ["mdb"], "application/x-msbinder": ["obd"], "application/x-mscardfile": ["crd"], "application/x-msclip": ["clp"], "application/x-msdos-program": ["*exe"], "application/x-msdownload": ["*exe", "*dll", "com", "bat", "*msi"], "application/x-msmediaview": ["mvb", "m13", "m14"], "application/x-msmetafile": ["*wmf", "*wmz", "*emf", "emz"], "application/x-msmoney": ["mny"], "application/x-mspublisher": ["pub"], "application/x-msschedule": ["scd"], "application/x-msterminal": ["trm"], "application/x-mswrite": ["wri"], "application/x-netcdf": ["nc", "cdf"], "application/x-ns-proxy-autoconfig": ["pac"], "application/x-nzb": ["nzb"], "application/x-perl": ["pl", "pm"], "application/x-pilot": ["*prc", "*pdb"], "application/x-pkcs12": ["p12", "pfx"], "application/x-pkcs7-certificates": ["p7b", "spc"], "application/x-pkcs7-certreqresp": ["p7r"], "application/x-rar-compressed": ["*rar"], "application/x-redhat-package-manager": ["rpm"], "application/x-research-info-systems": ["ris"], "application/x-sea": ["sea"], "application/x-sh": ["sh"], "application/x-shar": ["shar"], "application/x-shockwave-flash": ["swf"], "application/x-silverlight-app": ["xap"], "application/x-sql": ["sql"], "application/x-stuffit": ["sit"], "application/x-stuffitx": ["sitx"], "application/x-subrip": ["srt"], "application/x-sv4cpio": ["sv4cpio"], "application/x-sv4crc": ["sv4crc"], "application/x-t3vm-image": ["t3"], "application/x-tads": ["gam"], "application/x-tar": ["tar"], "application/x-tcl": ["tcl", "tk"], "application/x-tex": ["tex"], "application/x-tex-tfm": ["tfm"], "application/x-texinfo": ["texinfo", "texi"], "application/x-tgif": ["*obj"], "application/x-ustar": ["ustar"], "application/x-virtualbox-hdd": ["hdd"], "application/x-virtualbox-ova": ["ova"], "application/x-virtualbox-ovf": ["ovf"], "application/x-virtualbox-vbox": ["vbox"], "application/x-virtualbox-vbox-extpack": ["vbox-extpack"], "application/x-virtualbox-vdi": ["vdi"], "application/x-virtualbox-vhd": ["vhd"], "application/x-virtualbox-vmdk": ["vmdk"], "application/x-wais-source": ["src"], "application/x-web-app-manifest+json": ["webapp"], "application/x-x509-ca-cert": ["der", "crt", "pem"], "application/x-xfig": ["fig"], "application/x-xliff+xml": ["*xlf"], "application/x-xpinstall": ["xpi"], "application/x-xz": ["xz"], "application/x-zmachine": ["z1", "z2", "z3", "z4", "z5", "z6", "z7", "z8"], "audio/vnd.dece.audio": ["uva", "uvva"], "audio/vnd.digital-winds": ["eol"], "audio/vnd.dra": ["dra"], "audio/vnd.dts": ["dts"], "audio/vnd.dts.hd": ["dtshd"], "audio/vnd.lucent.voice": ["lvp"], "audio/vnd.ms-playready.media.pya": ["pya"], "audio/vnd.nuera.ecelp4800": ["ecelp4800"], "audio/vnd.nuera.ecelp7470": ["ecelp7470"], "audio/vnd.nuera.ecelp9600": ["ecelp9600"], "audio/vnd.rip": ["rip"], "audio/x-aac": ["aac"], "audio/x-aiff": ["aif", "aiff", "aifc"], "audio/x-caf": ["caf"], "audio/x-flac": ["flac"], "audio/x-m4a": ["*m4a"], "audio/x-matroska": ["mka"], "audio/x-mpegurl": ["m3u"], "audio/x-ms-wax": ["wax"], "audio/x-ms-wma": ["wma"], "audio/x-pn-realaudio": ["ram", "ra"], "audio/x-pn-realaudio-plugin": ["rmp"], "audio/x-realaudio": ["*ra"], "audio/x-wav": ["*wav"], "chemical/x-cdx": ["cdx"], "chemical/x-cif": ["cif"], "chemical/x-cmdf": ["cmdf"], "chemical/x-cml": ["cml"], "chemical/x-csml": ["csml"], "chemical/x-xyz": ["xyz"], "image/prs.btif": ["btif"], "image/prs.pti": ["pti"], "image/vnd.adobe.photoshop": ["psd"], "image/vnd.airzip.accelerator.azv": ["azv"], "image/vnd.dece.graphic": ["uvi", "uvvi", "uvg", "uvvg"], "image/vnd.djvu": ["djvu", "djv"], "image/vnd.dvb.subtitle": ["*sub"], "image/vnd.dwg": ["dwg"], "image/vnd.dxf": ["dxf"], "image/vnd.fastbidsheet": ["fbs"], "image/vnd.fpx": ["fpx"], "image/vnd.fst": ["fst"], "image/vnd.fujixerox.edmics-mmr": ["mmr"], "image/vnd.fujixerox.edmics-rlc": ["rlc"], "image/vnd.microsoft.icon": ["ico"], "image/vnd.ms-dds": ["dds"], "image/vnd.ms-modi": ["mdi"], "image/vnd.ms-photo": ["wdp"], "image/vnd.net-fpx": ["npx"], "image/vnd.pco.b16": ["b16"], "image/vnd.tencent.tap": ["tap"], "image/vnd.valve.source.texture": ["vtf"], "image/vnd.wap.wbmp": ["wbmp"], "image/vnd.xiff": ["xif"], "image/vnd.zbrush.pcx": ["pcx"], "image/x-3ds": ["3ds"], "image/x-cmu-raster": ["ras"], "image/x-cmx": ["cmx"], "image/x-freehand": ["fh", "fhc", "fh4", "fh5", "fh7"], "image/x-icon": ["*ico"], "image/x-jng": ["jng"], "image/x-mrsid-image": ["sid"], "image/x-ms-bmp": ["*bmp"], "image/x-pcx": ["*pcx"], "image/x-pict": ["pic", "pct"], "image/x-portable-anymap": ["pnm"], "image/x-portable-bitmap": ["pbm"], "image/x-portable-graymap": ["pgm"], "image/x-portable-pixmap": ["ppm"], "image/x-rgb": ["rgb"], "image/x-tga": ["tga"], "image/x-xbitmap": ["xbm"], "image/x-xpixmap": ["xpm"], "image/x-xwindowdump": ["xwd"], "message/vnd.wfa.wsc": ["wsc"], "model/vnd.collada+xml": ["dae"], "model/vnd.dwf": ["dwf"], "model/vnd.gdl": ["gdl"], "model/vnd.gtw": ["gtw"], "model/vnd.mts": ["mts"], "model/vnd.opengex": ["ogex"], "model/vnd.parasolid.transmit.binary": ["x_b"], "model/vnd.parasolid.transmit.text": ["x_t"], "model/vnd.sap.vds": ["vds"], "model/vnd.usdz+zip": ["usdz"], "model/vnd.valve.source.compiled-map": ["bsp"], "model/vnd.vtu": ["vtu"], "text/prs.lines.tag": ["dsc"], "text/vnd.curl": ["curl"], "text/vnd.curl.dcurl": ["dcurl"], "text/vnd.curl.mcurl": ["mcurl"], "text/vnd.curl.scurl": ["scurl"], "text/vnd.dvb.subtitle": ["sub"], "text/vnd.fly": ["fly"], "text/vnd.fmi.flexstor": ["flx"], "text/vnd.graphviz": ["gv"], "text/vnd.in3d.3dml": ["3dml"], "text/vnd.in3d.spot": ["spot"], "text/vnd.sun.j2me.app-descriptor": ["jad"], "text/vnd.wap.wml": ["wml"], "text/vnd.wap.wmlscript": ["wmls"], "text/x-asm": ["s", "asm"], "text/x-c": ["c", "cc", "cxx", "cpp", "h", "hh", "dic"], "text/x-component": ["htc"], "text/x-fortran": ["f", "for", "f77", "f90"], "text/x-handlebars-template": ["hbs"], "text/x-java-source": ["java"], "text/x-lua": ["lua"], "text/x-markdown": ["mkd"], "text/x-nfo": ["nfo"], "text/x-opml": ["opml"], "text/x-org": ["*org"], "text/x-pascal": ["p", "pas"], "text/x-processing": ["pde"], "text/x-sass": ["sass"], "text/x-scss": ["scss"], "text/x-setext": ["etx"], "text/x-sfv": ["sfv"], "text/x-suse-ymp": ["ymp"], "text/x-uuencode": ["uu"], "text/x-vcalendar": ["vcs"], "text/x-vcard": ["vcf"], "video/vnd.dece.hd": ["uvh", "uvvh"], "video/vnd.dece.mobile": ["uvm", "uvvm"], "video/vnd.dece.pd": ["uvp", "uvvp"], "video/vnd.dece.sd": ["uvs", "uvvs"], "video/vnd.dece.video": ["uvv", "uvvv"], "video/vnd.dvb.file": ["dvb"], "video/vnd.fvt": ["fvt"], "video/vnd.mpegurl": ["mxu", "m4u"], "video/vnd.ms-playready.media.pyv": ["pyv"], "video/vnd.uvvu.mp4": ["uvu", "uvvu"], "video/vnd.vivo": ["viv"], "video/x-f4v": ["f4v"], "video/x-fli": ["fli"], "video/x-flv": ["flv"], "video/x-m4v": ["m4v"], "video/x-matroska": ["mkv", "mk3d", "mks"], "video/x-mng": ["mng"], "video/x-ms-asf": ["asf", "asx"], "video/x-ms-vob": ["vob"], "video/x-ms-wm": ["wm"], "video/x-ms-wmv": ["wmv"], "video/x-ms-wmx": ["wmx"], "video/x-ms-wvx": ["wvx"], "video/x-msvideo": ["avi"], "video/x-sgi-movie": ["movie"], "video/x-smv": ["smv"], "x-conference/x-cooltalk": ["ice"] };
var Mime = Mime_1;
var mime = new Mime(standard, other);
var parse_1 = parse$1;
var serialize_1 = serialize;
var __toString = Object.prototype.toString;
var fieldContentRegExp = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
function parse$1(str, options) {
  if (typeof str !== "string") {
    throw new TypeError("argument str must be a string");
  }
  var obj = {};
  var opt = options || {};
  var dec = opt.decode || decode;
  var index = 0;
  while (index < str.length) {
    var eqIdx = str.indexOf("=", index);
    if (eqIdx === -1) {
      break;
    }
    var endIdx = str.indexOf(";", index);
    if (endIdx === -1) {
      endIdx = str.length;
    } else if (endIdx < eqIdx) {
      index = str.lastIndexOf(";", eqIdx - 1) + 1;
      continue;
    }
    var key = str.slice(index, eqIdx).trim();
    if (void 0 === obj[key]) {
      var val = str.slice(eqIdx + 1, endIdx).trim();
      if (val.charCodeAt(0) === 34) {
        val = val.slice(1, -1);
      }
      obj[key] = tryDecode(val, dec);
    }
    index = endIdx + 1;
  }
  return obj;
}
function serialize(name, val, options) {
  var opt = options || {};
  var enc = opt.encode || encode;
  if (typeof enc !== "function") {
    throw new TypeError("option encode is invalid");
  }
  if (!fieldContentRegExp.test(name)) {
    throw new TypeError("argument name is invalid");
  }
  var value = enc(val);
  if (value && !fieldContentRegExp.test(value)) {
    throw new TypeError("argument val is invalid");
  }
  var str = name + "=" + value;
  if (null != opt.maxAge) {
    var maxAge = opt.maxAge - 0;
    if (isNaN(maxAge) || !isFinite(maxAge)) {
      throw new TypeError("option maxAge is invalid");
    }
    str += "; Max-Age=" + Math.floor(maxAge);
  }
  if (opt.domain) {
    if (!fieldContentRegExp.test(opt.domain)) {
      throw new TypeError("option domain is invalid");
    }
    str += "; Domain=" + opt.domain;
  }
  if (opt.path) {
    if (!fieldContentRegExp.test(opt.path)) {
      throw new TypeError("option path is invalid");
    }
    str += "; Path=" + opt.path;
  }
  if (opt.expires) {
    var expires = opt.expires;
    if (!isDate(expires) || isNaN(expires.valueOf())) {
      throw new TypeError("option expires is invalid");
    }
    str += "; Expires=" + expires.toUTCString();
  }
  if (opt.httpOnly) {
    str += "; HttpOnly";
  }
  if (opt.secure) {
    str += "; Secure";
  }
  if (opt.priority) {
    var priority = typeof opt.priority === "string" ? opt.priority.toLowerCase() : opt.priority;
    switch (priority) {
      case "low":
        str += "; Priority=Low";
        break;
      case "medium":
        str += "; Priority=Medium";
        break;
      case "high":
        str += "; Priority=High";
        break;
      default:
        throw new TypeError("option priority is invalid");
    }
  }
  if (opt.sameSite) {
    var sameSite = typeof opt.sameSite === "string" ? opt.sameSite.toLowerCase() : opt.sameSite;
    switch (sameSite) {
      case true:
        str += "; SameSite=Strict";
        break;
      case "lax":
        str += "; SameSite=Lax";
        break;
      case "strict":
        str += "; SameSite=Strict";
        break;
      case "none":
        str += "; SameSite=None";
        break;
      default:
        throw new TypeError("option sameSite is invalid");
    }
  }
  return str;
}
function decode(str) {
  return str.indexOf("%") !== -1 ? decodeURIComponent(str) : str;
}
function encode(val) {
  return encodeURIComponent(val);
}
function isDate(val) {
  return __toString.call(val) === "[object Date]" || val instanceof Date;
}
function tryDecode(str, decode2) {
  try {
    return decode2(str);
  } catch (e) {
    return str;
  }
}
var __accessCheck$3 = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet$3 = (obj, member, getter) => {
  __accessCheck$3(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd$3 = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet$3 = (obj, member, value, setter) => {
  __accessCheck$3(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};
var __privateMethod$1 = (obj, member, method) => {
  __accessCheck$3(obj, member, "access private method");
  return method;
};
var _request;
var _requestValues;
var _outgoing;
var _ensureParsed;
var ensureParsed_fn;
var _ensureOutgoingMap;
var ensureOutgoingMap_fn;
var _parse;
var parse_fn;
var DELETED_EXPIRATION = new Date(0);
var DELETED_VALUE = "deleted";
var AstroCookie = class {
  constructor(value) {
    this.value = value;
  }
  json() {
    if (this.value === void 0) {
      throw new Error(`Cannot convert undefined to an object.`);
    }
    return JSON.parse(this.value);
  }
  number() {
    return Number(this.value);
  }
  boolean() {
    if (this.value === "false")
      return false;
    if (this.value === "0")
      return false;
    return Boolean(this.value);
  }
};
var AstroCookies = class {
  constructor(request) {
    __privateAdd$3(this, _ensureParsed);
    __privateAdd$3(this, _ensureOutgoingMap);
    __privateAdd$3(this, _parse);
    __privateAdd$3(this, _request, void 0);
    __privateAdd$3(this, _requestValues, void 0);
    __privateAdd$3(this, _outgoing, void 0);
    __privateSet$3(this, _request, request);
    __privateSet$3(this, _requestValues, null);
    __privateSet$3(this, _outgoing, null);
  }
  delete(key, options) {
    const serializeOptions = {
      expires: DELETED_EXPIRATION
    };
    if (options == null ? void 0 : options.domain) {
      serializeOptions.domain = options.domain;
    }
    if (options == null ? void 0 : options.path) {
      serializeOptions.path = options.path;
    }
    __privateMethod$1(this, _ensureOutgoingMap, ensureOutgoingMap_fn).call(this).set(key, [
      DELETED_VALUE,
      serialize_1(key, DELETED_VALUE, serializeOptions),
      false
    ]);
  }
  get(key) {
    if (__privateGet$3(this, _outgoing) !== null && __privateGet$3(this, _outgoing).has(key)) {
      let [serializedValue, , isSetValue] = __privateGet$3(this, _outgoing).get(key);
      if (isSetValue) {
        return new AstroCookie(serializedValue);
      } else {
        return new AstroCookie(void 0);
      }
    }
    const values = __privateMethod$1(this, _ensureParsed, ensureParsed_fn).call(this);
    const value = values[key];
    return new AstroCookie(value);
  }
  has(key) {
    if (__privateGet$3(this, _outgoing) !== null && __privateGet$3(this, _outgoing).has(key)) {
      let [, , isSetValue] = __privateGet$3(this, _outgoing).get(key);
      return isSetValue;
    }
    const values = __privateMethod$1(this, _ensureParsed, ensureParsed_fn).call(this);
    return !!values[key];
  }
  set(key, value, options) {
    let serializedValue;
    if (typeof value === "string") {
      serializedValue = value;
    } else {
      let toStringValue = value.toString();
      if (toStringValue === Object.prototype.toString.call(value)) {
        serializedValue = JSON.stringify(value);
      } else {
        serializedValue = toStringValue;
      }
    }
    const serializeOptions = {};
    if (options) {
      Object.assign(serializeOptions, options);
    }
    __privateMethod$1(this, _ensureOutgoingMap, ensureOutgoingMap_fn).call(this).set(key, [
      serializedValue,
      serialize_1(key, serializedValue, serializeOptions),
      true
    ]);
  }
  *headers() {
    if (__privateGet$3(this, _outgoing) == null)
      return;
    for (const [, value] of __privateGet$3(this, _outgoing)) {
      yield value[1];
    }
  }
};
_request = /* @__PURE__ */ new WeakMap();
_requestValues = /* @__PURE__ */ new WeakMap();
_outgoing = /* @__PURE__ */ new WeakMap();
_ensureParsed = /* @__PURE__ */ new WeakSet();
ensureParsed_fn = function() {
  if (!__privateGet$3(this, _requestValues)) {
    __privateMethod$1(this, _parse, parse_fn).call(this);
  }
  if (!__privateGet$3(this, _requestValues)) {
    __privateSet$3(this, _requestValues, {});
  }
  return __privateGet$3(this, _requestValues);
};
_ensureOutgoingMap = /* @__PURE__ */ new WeakSet();
ensureOutgoingMap_fn = function() {
  if (!__privateGet$3(this, _outgoing)) {
    __privateSet$3(this, _outgoing, /* @__PURE__ */ new Map());
  }
  return __privateGet$3(this, _outgoing);
};
_parse = /* @__PURE__ */ new WeakSet();
parse_fn = function() {
  const raw = __privateGet$3(this, _request).headers.get("cookie");
  if (!raw) {
    return;
  }
  __privateSet$3(this, _requestValues, parse_1(raw));
};
var astroCookiesSymbol = Symbol.for("astro.cookies");
function attachToResponse(response, cookies) {
  Reflect.set(response, astroCookiesSymbol, cookies);
}
function getFromResponse(response) {
  let cookies = Reflect.get(response, astroCookiesSymbol);
  if (cookies != null) {
    return cookies;
  } else {
    return void 0;
  }
}
function* getSetCookiesFromResponse(response) {
  const cookies = getFromResponse(response);
  if (!cookies) {
    return;
  }
  for (const headerValue of cookies.headers()) {
    yield headerValue;
  }
}
var defineErrors = (errs) => errs;
var AstroErrorData = defineErrors({
  UnknownCompilerError: {
    title: "Unknown compiler error.",
    code: 1e3,
    hint: "This is almost always a problem with the Astro compiler, not your code. Please open an issue at https://astro.build/issues/compiler."
  },
  StaticRedirectNotAvailable: {
    title: "`Astro.redirect` is not available in static mode.",
    code: 3001,
    message: "Redirects are only available when using `output: 'server'`. Update your Astro config if you need SSR features.",
    hint: "See https://docs.astro.build/en/guides/server-side-rendering/#enabling-ssr-in-your-project for more information on how to enable SSR."
  },
  ClientAddressNotAvailable: {
    title: "`Astro.clientAddress` is not available in current adapter.",
    code: 3002,
    message: (adapterName) => `\`Astro.clientAddress\` is not available in the \`${adapterName}\` adapter. File an issue with the adapter to add support.`
  },
  StaticClientAddressNotAvailable: {
    title: "`Astro.clientAddress` is not available in static mode.",
    code: 3003,
    message: "`Astro.clientAddress` is only available when using `output: 'server'`. Update your Astro config if you need SSR features.",
    hint: "See https://docs.astro.build/en/guides/server-side-rendering/#enabling-ssr-in-your-project for more information on how to enable SSR."
  },
  NoMatchingStaticPathFound: {
    title: "No static path found for requested path.",
    code: 3004,
    message: (pathName) => `A \`getStaticPaths()\` route pattern was matched, but no matching static path was found for requested path \`${pathName}\`.`,
    hint: (possibleRoutes) => `Possible dynamic routes being matched: ${possibleRoutes.join(", ")}.`
  },
  OnlyResponseCanBeReturned: {
    title: "Invalid type returned by Astro page.",
    code: 3005,
    message: (route, returnedValue) => `Route \`${route ? route : ""}\` returned a \`${returnedValue}\`. Only a [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response) can be returned from Astro files.`,
    hint: "See https://docs.astro.build/en/guides/server-side-rendering/#response for more information."
  },
  MissingMediaQueryDirective: {
    title: "Missing value for `client:media` directive.",
    code: 3006,
    message: 'Media query not provided for `client:media` directive. A media query similar to `client:media="(max-width: 600px)"` must be provided'
  },
  NoMatchingRenderer: {
    title: "No matching renderer found.",
    code: 3007,
    message: (componentName, componentExtension, plural, validRenderersCount) => `Unable to render \`${componentName}\`.

${validRenderersCount > 0 ? `There ${plural ? "are." : "is."} ${validRenderersCount} renderer${plural ? "s." : ""} configured in your \`astro.config.mjs\` file,
but ${plural ? "none were." : "it was not."} able to server-side render \`${componentName}\`.` : `No valid renderer was found ${componentExtension ? `for the \`.${componentExtension}\` file extension.` : `for this file extension.`}`}`,
    hint: (probableRenderers) => `Did you mean to enable the ${probableRenderers} integration?

See https://docs.astro.build/en/core-concepts/framework-components/ for more information on how to install and configure integrations.`
  },
  NoClientEntrypoint: {
    title: "No client entrypoint specified in renderer.",
    code: 3008,
    message: (componentName, clientDirective, rendererName) => `\`${componentName}\` component has a \`client:${clientDirective}\` directive, but no client entrypoint was provided by \`${rendererName}\`.`,
    hint: "See https://docs.astro.build/en/reference/integrations-reference/#addrenderer-option for more information on how to configure your renderer."
  },
  NoClientOnlyHint: {
    title: "Missing hint on client:only directive.",
    code: 3009,
    message: (componentName) => `Unable to render \`${componentName}\`. When using the \`client:only\` hydration strategy, Astro needs a hint to use the correct renderer.`,
    hint: (probableRenderers) => `Did you mean to pass \`client:only="${probableRenderers}"\`? See https://docs.astro.build/en/reference/directives-reference/#clientonly for more information on client:only`
  },
  InvalidGetStaticPathParam: {
    title: "Invalid value returned by a `getStaticPaths` path.",
    code: 3010,
    message: (paramType) => `Invalid params given to \`getStaticPaths\` path. Expected an \`object\`, got \`${paramType}\``,
    hint: "See https://docs.astro.build/en/reference/api-reference/#getstaticpaths for more information on getStaticPaths."
  },
  InvalidGetStaticPathsReturn: {
    title: "Invalid value returned by getStaticPaths.",
    code: 3011,
    message: (returnType) => `Invalid type returned by \`getStaticPaths\`. Expected an \`array\`, got \`${returnType}\``,
    hint: "See https://docs.astro.build/en/reference/api-reference/#getstaticpaths for more information on getStaticPaths."
  },
  GetStaticPathsRemovedRSSHelper: {
    title: "getStaticPaths RSS helper is not available anymore.",
    code: 3012,
    message: "The RSS helper has been removed from `getStaticPaths`. Try the new @astrojs/rss package instead.",
    hint: "See https://docs.astro.build/en/guides/rss/ for more information."
  },
  GetStaticPathsExpectedParams: {
    title: "Missing params property on `getStaticPaths` route.",
    code: 3013,
    message: "Missing or empty required `params` property on `getStaticPaths` route.",
    hint: "See https://docs.astro.build/en/reference/api-reference/#getstaticpaths for more information on getStaticPaths."
  },
  GetStaticPathsInvalidRouteParam: {
    title: "Invalid value for `getStaticPaths` route parameter.",
    code: 3014,
    message: (key, value, valueType) => `Invalid getStaticPaths route parameter for \`${key}\`. Expected undefined, a string or a number, received \`${valueType}\` (\`${value}\`)`,
    hint: "See https://docs.astro.build/en/reference/api-reference/#getstaticpaths for more information on getStaticPaths."
  },
  GetStaticPathsRequired: {
    title: "`getStaticPaths()` function required for dynamic routes.",
    code: 3015,
    message: "`getStaticPaths()` function is required for dynamic routes. Make sure that you `export` a `getStaticPaths` function from your dynamic route.",
    hint: `See https://docs.astro.build/en/core-concepts/routing/#dynamic-routes for more information on dynamic routes.

Alternatively, set \`output: "server"\` in your Astro config file to switch to a non-static server build. This error can also occur if using \`export const prerender = true;\`.
See https://docs.astro.build/en/guides/server-side-rendering/ for more information on non-static rendering.`
  },
  ReservedSlotName: {
    title: "Invalid slot name.",
    code: 3016,
    message: (slotName2) => `Unable to create a slot named \`${slotName2}\`. \`${slotName2}\` is a reserved slot name. Please update the name of this slot.`
  },
  NoAdapterInstalled: {
    title: "Cannot use Server-side Rendering without an adapter.",
    code: 3017,
    message: `Cannot use \`output: 'server'\` without an adapter. Please install and configure the appropriate server adapter for your final deployment.`,
    hint: "See https://docs.astro.build/en/guides/server-side-rendering/ for more information."
  },
  NoMatchingImport: {
    title: "No import found for component.",
    code: 3018,
    message: (componentName) => `Could not render \`${componentName}\`. No matching import has been found for \`${componentName}\`.`,
    hint: "Please make sure the component is properly imported."
  },
  InvalidPrerenderExport: {
    title: "Invalid prerender export.",
    code: 3019,
    message: (prefix, suffix) => {
      let msg = `A \`prerender\` export has been detected, but its value cannot be statically analyzed.`;
      if (prefix !== "const")
        msg += `
Expected \`const\` declaration but got \`${prefix}\`.`;
      if (suffix !== "true")
        msg += `
Expected \`true\` value but got \`${suffix}\`.`;
      return msg;
    },
    hint: "Mutable values declared at runtime are not supported. Please make sure to use exactly `export const prerender = true`."
  },
  InvalidComponentArgs: {
    title: "Invalid component arguments.",
    code: 3020,
    message: (name) => `Invalid arguments passed to${name ? ` <${name}>` : ""} component.`,
    hint: "Astro components cannot be rendered directly via function call, such as `Component()` or `{items.map(Component)}`."
  },
  PageNumberParamNotFound: {
    title: "Page number param not found.",
    code: 3021,
    message: (paramName) => `[paginate()] page number param \`${paramName}\` not found in your filepath.`,
    hint: "Rename your file to `[page].astro` or `[...page].astro`."
  },
  UnknownViteError: {
    title: "Unknown Vite Error.",
    code: 4e3
  },
  FailedToLoadModuleSSR: {
    title: "Could not import file.",
    code: 4001,
    message: (importName) => `Could not import \`${importName}\`.`,
    hint: "This is often caused by a typo in the import path. Please make sure the file exists."
  },
  InvalidGlob: {
    title: "Invalid glob pattern.",
    code: 4002,
    message: (globPattern) => `Invalid glob pattern: \`${globPattern}\`. Glob patterns must start with './', '../' or '/'.`,
    hint: "See https://docs.astro.build/en/guides/imports/#glob-patterns for more information on supported glob patterns."
  },
  UnknownCSSError: {
    title: "Unknown CSS Error.",
    code: 5e3
  },
  CSSSyntaxError: {
    title: "CSS Syntax Error.",
    code: 5001
  },
  UnknownMarkdownError: {
    title: "Unknown Markdown Error.",
    code: 6e3
  },
  MarkdownFrontmatterParseError: {
    title: "Failed to parse Markdown frontmatter.",
    code: 6001
  },
  InvalidFrontmatterInjectionError: {
    title: "Invalid frontmatter injection.",
    code: 6003,
    message: 'A remark or rehype plugin attempted to inject invalid frontmatter. Ensure "astro.frontmatter" is set to a valid JSON object that is not `null` or `undefined`.',
    hint: "See the frontmatter injection docs https://docs.astro.build/en/guides/markdown-content/#modifying-frontmatter-programmatically for more information."
  },
  MdxIntegrationMissingError: {
    title: "MDX integration missing.",
    code: 6004,
    message: (file) => `Unable to render ${file}. Ensure that the \`@astrojs/mdx\` integration is installed.`,
    hint: "See the MDX integration docs for installation and usage instructions: https://docs.astro.build/en/guides/integrations-guide/mdx/"
  },
  UnknownConfigError: {
    title: "Unknown configuration error.",
    code: 7e3
  },
  ConfigNotFound: {
    title: "Specified configuration file not found.",
    code: 7001,
    message: (configFile) => `Unable to resolve \`--config "${configFile}"\`. Does the file exist?`
  },
  ConfigLegacyKey: {
    title: "Legacy configuration detected.",
    code: 7002,
    message: (legacyConfigKey) => `Legacy configuration detected: \`${legacyConfigKey}\`.`,
    hint: "Please update your configuration to the new format.\nSee https://astro.build/config for more information."
  },
  UnknownCLIError: {
    title: "Unknown CLI Error.",
    code: 8e3
  },
  GenerateContentTypesError: {
    title: "Failed to generate content types.",
    code: 8001,
    message: "`astro sync` command failed to generate content collection types.",
    hint: "Check your `src/content/config.*` file for typos."
  },
  UnknownContentCollectionError: {
    title: "Unknown Content Collection Error.",
    code: 9e3
  },
  InvalidContentEntryFrontmatterError: {
    title: "Content entry frontmatter does not match schema.",
    code: 9001,
    message: (collection, entryId, error2) => {
      return [
        `${String(collection)} \u2192 ${String(entryId)} frontmatter does not match collection schema.`,
        ...error2.errors.map((zodError) => zodError.message)
      ].join("\n");
    },
    hint: "See https://docs.astro.build/en/guides/content-collections/ for more information on content schemas."
  },
  InvalidContentEntrySlugError: {
    title: "Invalid content entry slug.",
    code: 9002,
    message: (collection, entryId) => {
      return `${String(collection)} \u2192 ${String(
        entryId
      )} has an invalid slug. \`slug\` must be a string.`;
    },
    hint: "See https://docs.astro.build/en/guides/content-collections/ for more on the `slug` field."
  },
  ContentSchemaContainsSlugError: {
    title: "Content Schema should not contain `slug`.",
    code: 9003,
    message: (collection) => {
      return `A content collection schema should not contain \`slug\` since it is reserved for slug generation. Remove this from your ${collection} collection schema.`;
    },
    hint: "See https://docs.astro.build/en/guides/content-collections/ for more on the `slug` field."
  },
  UnknownError: {
    title: "Unknown Error.",
    code: 99999
  }
});
function normalizeLF(code) {
  return code.replace(/\r\n|\r(?!\n)|\n/g, "\n");
}
function getErrorDataByCode(code) {
  const entry = Object.entries(AstroErrorData).find((data) => data[1].code === code);
  if (entry) {
    return {
      name: entry[0],
      data: entry[1]
    };
  }
}
function codeFrame(src, loc) {
  if (!loc || loc.line === void 0 || loc.column === void 0) {
    return "";
  }
  const lines = normalizeLF(src).split("\n").map((ln) => ln.replace(/\t/g, "  "));
  const visibleLines = [];
  for (let n = -2; n <= 2; n++) {
    if (lines[loc.line + n])
      visibleLines.push(loc.line + n);
  }
  let gutterWidth = 0;
  for (const lineNo of visibleLines) {
    let w = `> ${lineNo}`;
    if (w.length > gutterWidth)
      gutterWidth = w.length;
  }
  let output = "";
  for (const lineNo of visibleLines) {
    const isFocusedLine = lineNo === loc.line - 1;
    output += isFocusedLine ? "> " : "  ";
    output += `${lineNo + 1} | ${lines[lineNo]}
`;
    if (isFocusedLine)
      output += `${Array.from({ length: gutterWidth }).join(" ")}  | ${Array.from({
        length: loc.column
      }).join(" ")}^
`;
  }
  return output;
}
var AstroError = class extends Error {
  constructor(props, ...params) {
    var _a3;
    super(...params);
    this.type = "AstroError";
    const { code, name, title, message, stack, location, hint, frame } = props;
    this.errorCode = code;
    if (name && name !== "Error") {
      this.name = name;
    } else {
      this.name = ((_a3 = getErrorDataByCode(this.errorCode)) == null ? void 0 : _a3.name) ?? "UnknownError";
    }
    this.title = title;
    if (message)
      this.message = message;
    this.stack = stack ? stack : this.stack;
    this.loc = location;
    this.hint = hint;
    this.frame = frame;
  }
  setErrorCode(errorCode) {
    this.errorCode = errorCode;
  }
  setLocation(location) {
    this.loc = location;
  }
  setName(name) {
    this.name = name;
  }
  setMessage(message) {
    this.message = message;
  }
  setHint(hint) {
    this.hint = hint;
  }
  setFrame(source, location) {
    this.frame = codeFrame(source, location);
  }
  static is(err) {
    return err.type === "AstroError";
  }
};
function validateArgs(args) {
  if (args.length !== 3)
    return false;
  if (!args[0] || typeof args[0] !== "object")
    return false;
  return true;
}
function baseCreateComponent(cb, moduleId) {
  var _a3;
  const name = ((_a3 = moduleId == null ? void 0 : moduleId.split("/").pop()) == null ? void 0 : _a3.replace(".astro", "")) ?? "";
  const fn = (...args) => {
    if (!validateArgs(args)) {
      throw new AstroError({
        ...AstroErrorData.InvalidComponentArgs,
        message: AstroErrorData.InvalidComponentArgs.message(name)
      });
    }
    return cb(...args);
  };
  Object.defineProperty(fn, "name", { value: name, writable: false });
  fn.isAstroComponentFactory = true;
  fn.moduleId = moduleId;
  return fn;
}
function createComponentWithOptions(opts) {
  const cb = baseCreateComponent(opts.factory, opts.moduleId);
  cb.propagation = opts.propagation;
  return cb;
}
function createComponent(arg1, moduleId) {
  if (typeof arg1 === "function") {
    return baseCreateComponent(arg1, moduleId);
  } else {
    return createComponentWithOptions(arg1);
  }
}
var ASTRO_VERSION = "2.0.14";
function createAstroGlobFn() {
  const globHandler = (importMetaGlobResult, globValue) => {
    let allEntries = [...Object.values(importMetaGlobResult)];
    if (allEntries.length === 0) {
      throw new Error(`Astro.glob(${JSON.stringify(globValue())}) - no matches found.`);
    }
    return Promise.all(allEntries.map((fn) => fn()));
  };
  return globHandler;
}
function createAstro(site) {
  return {
    site: site ? new URL(site) : void 0,
    generator: `Astro v${ASTRO_VERSION}`,
    glob: createAstroGlobFn()
  };
}
function getHandlerFromModule(mod, method) {
  if (mod[method]) {
    return mod[method];
  }
  if (method === "delete" && mod["del"]) {
    return mod["del"];
  }
  if (mod["all"]) {
    return mod["all"];
  }
  return void 0;
}
async function renderEndpoint(mod, context, ssr) {
  var _a3;
  const { request, params } = context;
  const chosenMethod = (_a3 = request.method) == null ? void 0 : _a3.toLowerCase();
  const handler = getHandlerFromModule(mod, chosenMethod);
  if (!ssr && ssr === false && chosenMethod && chosenMethod !== "get") {
    console.warn(`
${chosenMethod} requests are not available when building a static site. Update your config to output: 'server' to handle ${chosenMethod} requests.`);
  }
  if (!handler || typeof handler !== "function") {
    let response = new Response(null, {
      status: 404,
      headers: {
        "X-Astro-Response": "Not-Found"
      }
    });
    return response;
  }
  if (handler.length > 1) {
    console.warn(`
API routes with 2 arguments have been deprecated. Instead they take a single argument in the form of:

export function get({ params, request }) {
	//...
}

Update your code to remove this warning.`);
  }
  const proxy = new Proxy(context, {
    get(target, prop) {
      if (prop in target) {
        return Reflect.get(target, prop);
      } else if (prop in params) {
        console.warn(`
API routes no longer pass params as the first argument. Instead an object containing a params property is provided in the form of:

export function get({ params }) {
	// ...
}

Update your code to remove this warning.`);
        return Reflect.get(params, prop);
      } else {
        return void 0;
      }
    }
  });
  return handler.call(mod, proxy, request);
}
var { replace } = "";
var ca = /[&<>'"]/g;
var esca = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  "'": "&#39;",
  '"': "&quot;"
};
var pe = (m) => esca[m];
var escape = (es) => replace.call(es, ca, pe);
function serializeListValue(value) {
  const hash = {};
  push(value);
  return Object.keys(hash).join(" ");
  function push(item) {
    if (item && typeof item.forEach === "function")
      item.forEach(push);
    else if (item === Object(item))
      Object.keys(item).forEach((name) => {
        if (item[name])
          push(name);
      });
    else {
      item = item === false || item == null ? "" : String(item).trim();
      if (item) {
        item.split(/\s+/).forEach((name) => {
          hash[name] = true;
        });
      }
    }
  }
}
function isPromise(value) {
  return !!value && typeof value === "object" && typeof value.then === "function";
}
async function* streamAsyncIterator(stream) {
  const reader = stream.getReader();
  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done)
        return;
      yield value;
    }
  } finally {
    reader.releaseLock();
  }
}
var escapeHTML = escape;
var HTMLBytes = class extends Uint8Array {
};
Object.defineProperty(HTMLBytes.prototype, Symbol.toStringTag, {
  get() {
    return "HTMLBytes";
  }
});
var HTMLString = class extends String {
  get [Symbol.toStringTag]() {
    return "HTMLString";
  }
};
var markHTMLString = (value) => {
  if (value instanceof HTMLString) {
    return value;
  }
  if (typeof value === "string") {
    return new HTMLString(value);
  }
  return value;
};
function isHTMLString(value) {
  return Object.prototype.toString.call(value) === "[object HTMLString]";
}
function markHTMLBytes(bytes) {
  return new HTMLBytes(bytes);
}
function hasGetReader(obj) {
  return typeof obj.getReader === "function";
}
async function* unescapeChunksAsync(iterable) {
  if (hasGetReader(iterable)) {
    for await (const chunk of streamAsyncIterator(iterable)) {
      yield unescapeHTML(chunk);
    }
  } else {
    for await (const chunk of iterable) {
      yield unescapeHTML(chunk);
    }
  }
}
function* unescapeChunks(iterable) {
  for (const chunk of iterable) {
    yield unescapeHTML(chunk);
  }
}
function unescapeHTML(str) {
  if (!!str && typeof str === "object") {
    if (str instanceof Uint8Array) {
      return markHTMLBytes(str);
    } else if (str instanceof Response && str.body) {
      const body = str.body;
      return unescapeChunksAsync(body);
    } else if (typeof str.then === "function") {
      return Promise.resolve(str).then((value) => {
        return unescapeHTML(value);
      });
    } else if (Symbol.iterator in str) {
      return unescapeChunks(str);
    } else if (Symbol.asyncIterator in str || hasGetReader(str)) {
      return unescapeChunksAsync(str);
    }
  }
  return markHTMLString(str);
}
var AstroJSX = "astro:jsx";
var Empty = Symbol("empty");
var toSlotName = (slotAttr) => slotAttr;
function isVNode(vnode) {
  return vnode && typeof vnode === "object" && vnode[AstroJSX];
}
function transformSlots(vnode) {
  if (typeof vnode.type === "string")
    return vnode;
  const slots = {};
  if (isVNode(vnode.props.children)) {
    const child = vnode.props.children;
    if (!isVNode(child))
      return;
    if (!("slot" in child.props))
      return;
    const name = toSlotName(child.props.slot);
    slots[name] = [child];
    slots[name]["$$slot"] = true;
    delete child.props.slot;
    delete vnode.props.children;
  }
  if (Array.isArray(vnode.props.children)) {
    vnode.props.children = vnode.props.children.map((child) => {
      if (!isVNode(child))
        return child;
      if (!("slot" in child.props))
        return child;
      const name = toSlotName(child.props.slot);
      if (Array.isArray(slots[name])) {
        slots[name].push(child);
      } else {
        slots[name] = [child];
        slots[name]["$$slot"] = true;
      }
      delete child.props.slot;
      return Empty;
    }).filter((v) => v !== Empty);
  }
  Object.assign(vnode.props, slots);
}
function markRawChildren(child) {
  if (typeof child === "string")
    return markHTMLString(child);
  if (Array.isArray(child))
    return child.map((c) => markRawChildren(c));
  return child;
}
function transformSetDirectives(vnode) {
  if (!("set:html" in vnode.props || "set:text" in vnode.props))
    return;
  if ("set:html" in vnode.props) {
    const children = markRawChildren(vnode.props["set:html"]);
    delete vnode.props["set:html"];
    Object.assign(vnode.props, { children });
    return;
  }
  if ("set:text" in vnode.props) {
    const children = vnode.props["set:text"];
    delete vnode.props["set:text"];
    Object.assign(vnode.props, { children });
    return;
  }
}
function createVNode(type, props) {
  const vnode = {
    [Renderer]: "astro:jsx",
    [AstroJSX]: true,
    type,
    props: props ?? {}
  };
  transformSetDirectives(vnode);
  transformSlots(vnode);
  return vnode;
}
var idle_prebuilt_default = `(self.Astro=self.Astro||{}).idle=t=>{const e=async()=>{await(await t())()};"requestIdleCallback"in window?window.requestIdleCallback(e):setTimeout(e,200)},window.dispatchEvent(new Event("astro:idle"));`;
var load_prebuilt_default = `(self.Astro=self.Astro||{}).load=a=>{(async()=>await(await a())())()},window.dispatchEvent(new Event("astro:load"));`;
var media_prebuilt_default = `(self.Astro=self.Astro||{}).media=(s,a)=>{const t=async()=>{await(await s())()};if(a.value){const e=matchMedia(a.value);e.matches?t():e.addEventListener("change",t,{once:!0})}},window.dispatchEvent(new Event("astro:media"));`;
var only_prebuilt_default = `(self.Astro=self.Astro||{}).only=t=>{(async()=>await(await t())())()},window.dispatchEvent(new Event("astro:only"));`;
var visible_prebuilt_default = `(self.Astro=self.Astro||{}).visible=(s,c,n)=>{const r=async()=>{await(await s())()};let i=new IntersectionObserver(e=>{for(const t of e)if(!!t.isIntersecting){i.disconnect(),r();break}});for(let e=0;e<n.children.length;e++){const t=n.children[e];i.observe(t)}},window.dispatchEvent(new Event("astro:visible"));`;
var astro_island_prebuilt_default = `var l;{const c={0:t=>t,1:t=>JSON.parse(t,o),2:t=>new RegExp(t),3:t=>new Date(t),4:t=>new Map(JSON.parse(t,o)),5:t=>new Set(JSON.parse(t,o)),6:t=>BigInt(t),7:t=>new URL(t),8:t=>new Uint8Array(JSON.parse(t)),9:t=>new Uint16Array(JSON.parse(t)),10:t=>new Uint32Array(JSON.parse(t))},o=(t,s)=>{if(t===""||!Array.isArray(s))return s;const[e,n]=s;return e in c?c[e](n):void 0};customElements.get("astro-island")||customElements.define("astro-island",(l=class extends HTMLElement{constructor(){super(...arguments);this.hydrate=()=>{if(!this.hydrator||this.parentElement&&this.parentElement.closest("astro-island[ssr]"))return;const s=this.querySelectorAll("astro-slot"),e={},n=this.querySelectorAll("template[data-astro-template]");for(const r of n){const i=r.closest(this.tagName);!i||!i.isSameNode(this)||(e[r.getAttribute("data-astro-template")||"default"]=r.innerHTML,r.remove())}for(const r of s){const i=r.closest(this.tagName);!i||!i.isSameNode(this)||(e[r.getAttribute("name")||"default"]=r.innerHTML)}const a=this.hasAttribute("props")?JSON.parse(this.getAttribute("props"),o):{};this.hydrator(this)(this.Component,a,e,{client:this.getAttribute("client")}),this.removeAttribute("ssr"),window.removeEventListener("astro:hydrate",this.hydrate),window.dispatchEvent(new CustomEvent("astro:hydrate"))}}connectedCallback(){!this.hasAttribute("await-children")||this.firstChild?this.childrenConnectedCallback():new MutationObserver((s,e)=>{e.disconnect(),this.childrenConnectedCallback()}).observe(this,{childList:!0})}async childrenConnectedCallback(){window.addEventListener("astro:hydrate",this.hydrate);let s=this.getAttribute("before-hydration-url");s&&await import(s),this.start()}start(){const s=JSON.parse(this.getAttribute("opts")),e=this.getAttribute("client");if(Astro[e]===void 0){window.addEventListener(\`astro:\${e}\`,()=>this.start(),{once:!0});return}Astro[e](async()=>{const n=this.getAttribute("renderer-url"),[a,{default:r}]=await Promise.all([import(this.getAttribute("component-url")),n?import(n):()=>()=>{}]),i=this.getAttribute("component-export")||"default";if(!i.includes("."))this.Component=a[i];else{this.Component=a;for(const d of i.split("."))this.Component=this.Component[d]}return this.hydrator=r,this.hydrate},s,this)}attributeChangedCallback(){this.hydrator&&this.hydrate()}},l.observedAttributes=["props"],l))}`;
function determineIfNeedsHydrationScript(result) {
  if (result._metadata.hasHydrationScript) {
    return false;
  }
  return result._metadata.hasHydrationScript = true;
}
var hydrationScripts = {
  idle: idle_prebuilt_default,
  load: load_prebuilt_default,
  only: only_prebuilt_default,
  media: media_prebuilt_default,
  visible: visible_prebuilt_default
};
function determinesIfNeedsDirectiveScript(result, directive) {
  if (result._metadata.hasDirectives.has(directive)) {
    return false;
  }
  result._metadata.hasDirectives.add(directive);
  return true;
}
function getDirectiveScriptText(directive) {
  if (!(directive in hydrationScripts)) {
    throw new Error(`Unknown directive: ${directive}`);
  }
  const directiveScriptText = hydrationScripts[directive];
  return directiveScriptText;
}
function getPrescripts(type, directive) {
  switch (type) {
    case "both":
      return `<style>astro-island,astro-slot{display:contents}</style><script>${getDirectiveScriptText(directive) + astro_island_prebuilt_default}<\/script>`;
    case "directive":
      return `<script>${getDirectiveScriptText(directive)}<\/script>`;
  }
  return "";
}
var voidElementNames = /^(area|base|br|col|command|embed|hr|img|input|keygen|link|meta|param|source|track|wbr)$/i;
var htmlBooleanAttributes = /^(allowfullscreen|async|autofocus|autoplay|controls|default|defer|disabled|disablepictureinpicture|disableremoteplayback|formnovalidate|hidden|loop|nomodule|novalidate|open|playsinline|readonly|required|reversed|scoped|seamless|itemscope)$/i;
var htmlEnumAttributes = /^(contenteditable|draggable|spellcheck|value)$/i;
var svgEnumAttributes = /^(autoReverse|externalResourcesRequired|focusable|preserveAlpha)$/i;
var STATIC_DIRECTIVES = /* @__PURE__ */ new Set(["set:html", "set:text"]);
var toIdent = (k) => k.trim().replace(/(?:(?!^)\b\w|\s+|[^\w]+)/g, (match, index) => {
  if (/[^\w]|\s/.test(match))
    return "";
  return index === 0 ? match : match.toUpperCase();
});
var toAttributeString = (value, shouldEscape = true) => shouldEscape ? String(value).replace(/&/g, "&#38;").replace(/"/g, "&#34;") : value;
var kebab = (k) => k.toLowerCase() === k ? k : k.replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`);
var toStyleString = (obj) => Object.entries(obj).map(([k, v]) => {
  if (k[0] !== "-" && k[1] !== "-")
    return `${kebab(k)}:${v}`;
  if (kebab(k) !== k)
    return `${kebab(k)}:var(${k});${k}:${v}`;
  return `${k}:${v}`;
}).join(";");
function defineScriptVars(vars) {
  let output = "";
  for (const [key, value] of Object.entries(vars)) {
    output += `const ${toIdent(key)} = ${JSON.stringify(value)};
`;
  }
  return markHTMLString(output);
}
function formatList(values) {
  if (values.length === 1) {
    return values[0];
  }
  return `${values.slice(0, -1).join(", ")} or ${values[values.length - 1]}`;
}
function addAttribute(value, key, shouldEscape = true) {
  if (value == null) {
    return "";
  }
  if (value === false) {
    if (htmlEnumAttributes.test(key) || svgEnumAttributes.test(key)) {
      return markHTMLString(` ${key}="false"`);
    }
    return "";
  }
  if (STATIC_DIRECTIVES.has(key)) {
    console.warn(`[astro] The "${key}" directive cannot be applied dynamically at runtime. It will not be rendered as an attribute.

Make sure to use the static attribute syntax (\`${key}={value}\`) instead of the dynamic spread syntax (\`{...{ "${key}": value }}\`).`);
    return "";
  }
  if (key === "class:list") {
    const listValue = toAttributeString(serializeListValue(value), shouldEscape);
    if (listValue === "") {
      return "";
    }
    return markHTMLString(` ${key.slice(0, -5)}="${listValue}"`);
  }
  if (key === "style" && !(value instanceof HTMLString) && typeof value === "object") {
    return markHTMLString(` ${key}="${toAttributeString(toStyleString(value), shouldEscape)}"`);
  }
  if (key === "className") {
    return markHTMLString(` class="${toAttributeString(value, shouldEscape)}"`);
  }
  if (value === true && (key.startsWith("data-") || htmlBooleanAttributes.test(key))) {
    return markHTMLString(` ${key}`);
  } else {
    return markHTMLString(` ${key}="${toAttributeString(value, shouldEscape)}"`);
  }
}
function internalSpreadAttributes(values, shouldEscape = true) {
  let output = "";
  for (const [key, value] of Object.entries(values)) {
    output += addAttribute(value, key, shouldEscape);
  }
  return markHTMLString(output);
}
function renderElement$1(name, { props: _props, children = "" }, shouldEscape = true) {
  const { lang: _, "data-astro-id": astroId, "define:vars": defineVars, ...props } = _props;
  if (defineVars) {
    if (name === "style") {
      delete props["is:global"];
      delete props["is:scoped"];
    }
    if (name === "script") {
      delete props.hoist;
      children = defineScriptVars(defineVars) + "\n" + children;
    }
  }
  if ((children == null || children == "") && voidElementNames.test(name)) {
    return `<${name}${internalSpreadAttributes(props, shouldEscape)} />`;
  }
  return `<${name}${internalSpreadAttributes(props, shouldEscape)}>${children}</${name}>`;
}
var uniqueElements = (item, index, all) => {
  const props = JSON.stringify(item.props);
  const children = item.children;
  return index === all.findIndex((i) => JSON.stringify(i.props) === props && i.children == children);
};
function renderAllHeadContent(result) {
  result._metadata.hasRenderedHead = true;
  const styles = Array.from(result.styles).filter(uniqueElements).map((style) => renderElement$1("style", style));
  result.styles.clear();
  const scripts = Array.from(result.scripts).filter(uniqueElements).map((script, i) => {
    return renderElement$1("script", script, false);
  });
  const links = Array.from(result.links).filter(uniqueElements).map((link) => renderElement$1("link", link, false));
  let content = links.join("\n") + styles.join("\n") + scripts.join("\n");
  if (result.extraHead.length > 0) {
    for (const part of result.extraHead) {
      content += part;
    }
  }
  return markHTMLString(content);
}
function* renderHead(result) {
  yield { type: "head", result };
}
function* maybeRenderHead(result) {
  if (result._metadata.hasRenderedHead) {
    return;
  }
  yield { type: "maybe-head", result, scope: result.scope };
}
var ScopeFlags = {
  Astro: 1 << 0,
  JSX: 1 << 1,
  Slot: 1 << 2,
  HeadBuffer: 1 << 3,
  RenderSlot: 1 << 4
};
function addScopeFlag(result, flag) {
  result.scope |= flag;
}
function hasScopeFlag(result, flag) {
  return (result.scope & flag) === flag;
}
function createScopedResult(result, flag) {
  const scopedResult = Object.create(result, {
    scope: {
      writable: true,
      value: result.scope
    }
  });
  if (flag != null) {
    addScopeFlag(scopedResult, flag);
  }
  return scopedResult;
}
var headAndContentSym = Symbol.for("astro.headAndContent");
function isHeadAndContent(obj) {
  return typeof obj === "object" && !!obj[headAndContentSym];
}
var _a$1;
var renderTemplateResultSym = Symbol.for("astro.renderTemplateResult");
var RenderTemplateResult = class {
  constructor(htmlParts, expressions) {
    this[_a$1] = true;
    this.htmlParts = htmlParts;
    this.error = void 0;
    this.expressions = expressions.map((expression) => {
      if (isPromise(expression)) {
        return Promise.resolve(expression).catch((err) => {
          if (!this.error) {
            this.error = err;
            throw err;
          }
        });
      }
      return expression;
    });
  }
  async *[(_a$1 = renderTemplateResultSym, Symbol.asyncIterator)]() {
    const { htmlParts, expressions } = this;
    for (let i = 0; i < htmlParts.length; i++) {
      const html = htmlParts[i];
      const expression = expressions[i];
      yield markHTMLString(html);
      yield* renderChild(expression);
    }
  }
};
function isRenderTemplateResult(obj) {
  return typeof obj === "object" && !!obj[renderTemplateResultSym];
}
async function* renderAstroTemplateResult(component) {
  for await (const value of component) {
    if (value || value === 0) {
      for await (const chunk of renderChild(value)) {
        switch (chunk.type) {
          case "directive": {
            yield chunk;
            break;
          }
          default: {
            yield markHTMLString(chunk);
            break;
          }
        }
      }
    }
  }
}
function renderTemplate(htmlParts, ...expressions) {
  return new RenderTemplateResult(htmlParts, expressions);
}
function isAstroComponentFactory(obj) {
  return obj == null ? false : obj.isAstroComponentFactory === true;
}
async function renderToString(result, componentFactory, props, children) {
  const scoped = createScopedResult(result, ScopeFlags.Astro);
  const factoryResult = await componentFactory(scoped, props, children);
  if (factoryResult instanceof Response) {
    const response = factoryResult;
    throw response;
  }
  let parts = new HTMLParts();
  const templateResult = isHeadAndContent(factoryResult) ? factoryResult.content : factoryResult;
  for await (const chunk of renderAstroTemplateResult(templateResult)) {
    parts.append(chunk, result);
  }
  return parts.toString();
}
function isAPropagatingComponent(result, factory) {
  let hint = factory.propagation || "none";
  if (factory.moduleId && result.propagation.has(factory.moduleId) && hint === "none") {
    hint = result.propagation.get(factory.moduleId);
  }
  return hint === "in-tree" || hint === "self";
}
var PROP_TYPE = {
  Value: 0,
  JSON: 1,
  RegExp: 2,
  Date: 3,
  Map: 4,
  Set: 5,
  BigInt: 6,
  URL: 7,
  Uint8Array: 8,
  Uint16Array: 9,
  Uint32Array: 10
};
function serializeArray(value, metadata = {}, parents = /* @__PURE__ */ new WeakSet()) {
  if (parents.has(value)) {
    throw new Error(`Cyclic reference detected while serializing props for <${metadata.displayName} client:${metadata.hydrate}>!

Cyclic references cannot be safely serialized for client-side usage. Please remove the cyclic reference.`);
  }
  parents.add(value);
  const serialized = value.map((v) => {
    return convertToSerializedForm(v, metadata, parents);
  });
  parents.delete(value);
  return serialized;
}
function serializeObject(value, metadata = {}, parents = /* @__PURE__ */ new WeakSet()) {
  if (parents.has(value)) {
    throw new Error(`Cyclic reference detected while serializing props for <${metadata.displayName} client:${metadata.hydrate}>!

Cyclic references cannot be safely serialized for client-side usage. Please remove the cyclic reference.`);
  }
  parents.add(value);
  const serialized = Object.fromEntries(
    Object.entries(value).map(([k, v]) => {
      return [k, convertToSerializedForm(v, metadata, parents)];
    })
  );
  parents.delete(value);
  return serialized;
}
function convertToSerializedForm(value, metadata = {}, parents = /* @__PURE__ */ new WeakSet()) {
  const tag = Object.prototype.toString.call(value);
  switch (tag) {
    case "[object Date]": {
      return [PROP_TYPE.Date, value.toISOString()];
    }
    case "[object RegExp]": {
      return [PROP_TYPE.RegExp, value.source];
    }
    case "[object Map]": {
      return [
        PROP_TYPE.Map,
        JSON.stringify(serializeArray(Array.from(value), metadata, parents))
      ];
    }
    case "[object Set]": {
      return [
        PROP_TYPE.Set,
        JSON.stringify(serializeArray(Array.from(value), metadata, parents))
      ];
    }
    case "[object BigInt]": {
      return [PROP_TYPE.BigInt, value.toString()];
    }
    case "[object URL]": {
      return [PROP_TYPE.URL, value.toString()];
    }
    case "[object Array]": {
      return [PROP_TYPE.JSON, JSON.stringify(serializeArray(value, metadata, parents))];
    }
    case "[object Uint8Array]": {
      return [PROP_TYPE.Uint8Array, JSON.stringify(Array.from(value))];
    }
    case "[object Uint16Array]": {
      return [PROP_TYPE.Uint16Array, JSON.stringify(Array.from(value))];
    }
    case "[object Uint32Array]": {
      return [PROP_TYPE.Uint32Array, JSON.stringify(Array.from(value))];
    }
    default: {
      if (value !== null && typeof value === "object") {
        return [PROP_TYPE.Value, serializeObject(value, metadata, parents)];
      } else {
        return [PROP_TYPE.Value, value];
      }
    }
  }
}
function serializeProps(props, metadata) {
  const serialized = JSON.stringify(serializeObject(props, metadata));
  return serialized;
}
var HydrationDirectivesRaw = ["load", "idle", "media", "visible", "only"];
var HydrationDirectives = new Set(HydrationDirectivesRaw);
var HydrationDirectiveProps = new Set(HydrationDirectivesRaw.map((n) => `client:${n}`));
function extractDirectives(displayName, inputProps) {
  let extracted = {
    isPage: false,
    hydration: null,
    props: {}
  };
  for (const [key, value] of Object.entries(inputProps)) {
    if (key.startsWith("server:")) {
      if (key === "server:root") {
        extracted.isPage = true;
      }
    }
    if (key.startsWith("client:")) {
      if (!extracted.hydration) {
        extracted.hydration = {
          directive: "",
          value: "",
          componentUrl: "",
          componentExport: { value: "" }
        };
      }
      switch (key) {
        case "client:component-path": {
          extracted.hydration.componentUrl = value;
          break;
        }
        case "client:component-export": {
          extracted.hydration.componentExport.value = value;
          break;
        }
        case "client:component-hydration": {
          break;
        }
        case "client:display-name": {
          break;
        }
        default: {
          extracted.hydration.directive = key.split(":")[1];
          extracted.hydration.value = value;
          if (!HydrationDirectives.has(extracted.hydration.directive)) {
            throw new Error(
              `Error: invalid hydration directive "${key}". Supported hydration methods: ${Array.from(
                HydrationDirectiveProps
              ).join(", ")}`
            );
          }
          if (extracted.hydration.directive === "media" && typeof extracted.hydration.value !== "string") {
            throw new AstroError(AstroErrorData.MissingMediaQueryDirective);
          }
          break;
        }
      }
    } else if (key === "class:list") {
      if (value) {
        extracted.props[key.slice(0, -5)] = serializeListValue(value);
      }
    } else {
      extracted.props[key] = value;
    }
  }
  for (const sym of Object.getOwnPropertySymbols(inputProps)) {
    extracted.props[sym] = inputProps[sym];
  }
  return extracted;
}
async function generateHydrateScript(scriptOptions, metadata) {
  const { renderer, result, astroId, props, attrs } = scriptOptions;
  const { hydrate, componentUrl, componentExport } = metadata;
  if (!componentExport.value) {
    throw new Error(
      `Unable to resolve a valid export for "${metadata.displayName}"! Please open an issue at https://astro.build/issues!`
    );
  }
  const island = {
    children: "",
    props: {
      uid: astroId
    }
  };
  if (attrs) {
    for (const [key, value] of Object.entries(attrs)) {
      island.props[key] = escapeHTML(value);
    }
  }
  island.props["component-url"] = await result.resolve(decodeURI(componentUrl));
  if (renderer.clientEntrypoint) {
    island.props["component-export"] = componentExport.value;
    island.props["renderer-url"] = await result.resolve(decodeURI(renderer.clientEntrypoint));
    island.props["props"] = escapeHTML(serializeProps(props, metadata));
  }
  island.props["ssr"] = "";
  island.props["client"] = hydrate;
  let beforeHydrationUrl = await result.resolve("astro:scripts/before-hydration.js");
  if (beforeHydrationUrl.length) {
    island.props["before-hydration-url"] = beforeHydrationUrl;
  }
  island.props["opts"] = escapeHTML(
    JSON.stringify({
      name: metadata.displayName,
      value: metadata.hydrateArgs || ""
    })
  );
  return island;
}
var _a;
var astroComponentInstanceSym = Symbol.for("astro.componentInstance");
var AstroComponentInstance = class {
  constructor(result, props, slots, factory) {
    this[_a] = true;
    this.result = result;
    this.props = props;
    this.factory = factory;
    this.slotValues = {};
    const scoped = createScopedResult(result, ScopeFlags.Slot);
    for (const name in slots) {
      const value = slots[name](scoped);
      this.slotValues[name] = () => value;
    }
  }
  async init(result) {
    this.returnValue = this.factory(result, this.props, this.slotValues);
    return this.returnValue;
  }
  async *render() {
    if (this.returnValue === void 0) {
      await this.init(this.result);
    }
    let value = this.returnValue;
    if (isPromise(value)) {
      value = await value;
    }
    if (isHeadAndContent(value)) {
      yield* value.content;
    } else {
      yield* renderChild(value);
    }
  }
};
_a = astroComponentInstanceSym;
function validateComponentProps(props, displayName) {
  if (props != null) {
    for (const prop of Object.keys(props)) {
      if (HydrationDirectiveProps.has(prop)) {
        console.warn(
          `You are attempting to render <${displayName} ${prop} />, but ${displayName} is an Astro component. Astro components do not render in the client and should not have a hydration directive. Please use a framework component for client rendering.`
        );
      }
    }
  }
}
function createAstroComponentInstance(result, displayName, factory, props, slots = {}) {
  validateComponentProps(props, displayName);
  const instance = new AstroComponentInstance(result, props, slots, factory);
  if (isAPropagatingComponent(result, factory) && !result.propagators.has(factory)) {
    result.propagators.set(factory, instance);
  }
  return instance;
}
function isAstroComponentInstance(obj) {
  return typeof obj === "object" && !!obj[astroComponentInstanceSym];
}
async function* renderChild(child) {
  child = await child;
  if (child instanceof SlotString) {
    if (child.instructions) {
      yield* child.instructions;
    }
    yield child;
  } else if (isHTMLString(child)) {
    yield child;
  } else if (Array.isArray(child)) {
    for (const value of child) {
      yield markHTMLString(await renderChild(value));
    }
  } else if (typeof child === "function") {
    yield* renderChild(child());
  } else if (typeof child === "string") {
    yield markHTMLString(escapeHTML(child));
  } else if (!child && child !== 0)
    ;
  else if (isRenderTemplateResult(child)) {
    yield* renderAstroTemplateResult(child);
  } else if (isAstroComponentInstance(child)) {
    yield* child.render();
  } else if (ArrayBuffer.isView(child)) {
    yield child;
  } else if (typeof child === "object" && (Symbol.asyncIterator in child || Symbol.iterator in child)) {
    yield* child;
  } else {
    yield child;
  }
}
var slotString = Symbol.for("astro:slot-string");
var SlotString = class extends HTMLString {
  constructor(content, instructions) {
    super(content);
    this.instructions = instructions;
    this[slotString] = true;
  }
};
function isSlotString(str) {
  return !!str[slotString];
}
async function renderSlot(result, slotted, fallback) {
  if (slotted) {
    const scoped = createScopedResult(result, ScopeFlags.Slot);
    let iterator = renderChild(typeof slotted === "function" ? slotted(scoped) : slotted);
    let content = "";
    let instructions = null;
    for await (const chunk of iterator) {
      if (typeof chunk.type === "string") {
        if (instructions === null) {
          instructions = [];
        }
        instructions.push(chunk);
      } else {
        content += chunk;
      }
    }
    return markHTMLString(new SlotString(content, instructions));
  }
  if (fallback) {
    return renderSlot(result, fallback);
  }
  return "";
}
async function renderSlots(result, slots = {}) {
  let slotInstructions = null;
  let children = {};
  if (slots) {
    await Promise.all(
      Object.entries(slots).map(
        ([key, value]) => renderSlot(result, value).then((output) => {
          if (output.instructions) {
            if (slotInstructions === null) {
              slotInstructions = [];
            }
            slotInstructions.push(...output.instructions);
          }
          children[key] = output;
        })
      )
    );
  }
  return { slotInstructions, children };
}
var Fragment = Symbol.for("astro:fragment");
var Renderer = Symbol.for("astro:renderer");
var encoder = new TextEncoder();
var decoder = new TextDecoder();
function stringifyChunk(result, chunk) {
  if (typeof chunk.type === "string") {
    const instruction = chunk;
    switch (instruction.type) {
      case "directive": {
        const { hydration } = instruction;
        let needsHydrationScript = hydration && determineIfNeedsHydrationScript(result);
        let needsDirectiveScript = hydration && determinesIfNeedsDirectiveScript(result, hydration.directive);
        let prescriptType = needsHydrationScript ? "both" : needsDirectiveScript ? "directive" : null;
        if (prescriptType) {
          let prescripts = getPrescripts(prescriptType, hydration.directive);
          return markHTMLString(prescripts);
        } else {
          return "";
        }
      }
      case "head": {
        if (result._metadata.hasRenderedHead) {
          return "";
        }
        return renderAllHeadContent(result);
      }
      case "maybe-head": {
        if (result._metadata.hasRenderedHead) {
          return "";
        }
        const scope = instruction.scope;
        switch (scope) {
          case ScopeFlags.JSX | ScopeFlags.Slot | ScopeFlags.Astro:
          case ScopeFlags.JSX | ScopeFlags.Astro | ScopeFlags.HeadBuffer:
          case ScopeFlags.JSX | ScopeFlags.Slot | ScopeFlags.Astro | ScopeFlags.HeadBuffer: {
            return "";
          }
          case ScopeFlags.JSX | ScopeFlags.Astro: {
            if (hasScopeFlag(result, ScopeFlags.JSX)) {
              return "";
            }
            break;
          }
          case ScopeFlags.Slot:
          case ScopeFlags.Slot | ScopeFlags.HeadBuffer: {
            if (hasScopeFlag(result, ScopeFlags.RenderSlot)) {
              return "";
            }
            break;
          }
          case ScopeFlags.HeadBuffer: {
            if (hasScopeFlag(result, ScopeFlags.JSX | ScopeFlags.HeadBuffer)) {
              return "";
            }
            break;
          }
          case ScopeFlags.RenderSlot | ScopeFlags.Astro:
          case ScopeFlags.RenderSlot | ScopeFlags.Astro | ScopeFlags.JSX:
          case ScopeFlags.RenderSlot | ScopeFlags.Astro | ScopeFlags.JSX | ScopeFlags.HeadBuffer: {
            return "";
          }
        }
        return renderAllHeadContent(result);
      }
    }
  } else {
    if (isSlotString(chunk)) {
      let out = "";
      const c = chunk;
      if (c.instructions) {
        for (const instr of c.instructions) {
          out += stringifyChunk(result, instr);
        }
      }
      out += chunk.toString();
      return out;
    }
    return chunk.toString();
  }
}
var HTMLParts = class {
  constructor() {
    this.parts = "";
  }
  append(part, result) {
    if (ArrayBuffer.isView(part)) {
      this.parts += decoder.decode(part);
    } else {
      this.parts += stringifyChunk(result, part);
    }
  }
  toString() {
    return this.parts;
  }
  toArrayBuffer() {
    return encoder.encode(this.parts);
  }
};
function chunkToByteArray(result, chunk) {
  if (chunk instanceof Uint8Array) {
    return chunk;
  }
  let stringified = stringifyChunk(result, chunk);
  return encoder.encode(stringified.toString());
}
var ClientOnlyPlaceholder = "astro-client-only";
var Skip = class {
  constructor(vnode) {
    this.vnode = vnode;
    this.count = 0;
  }
  increment() {
    this.count++;
  }
  haveNoTried() {
    return this.count === 0;
  }
  isCompleted() {
    return this.count > 2;
  }
};
Skip.symbol = Symbol("astro:jsx:skip");
var originalConsoleError;
var consoleFilterRefs = 0;
async function renderJSX(result, vnode) {
  switch (true) {
    case vnode instanceof HTMLString:
      if (vnode.toString().trim() === "") {
        return "";
      }
      return vnode;
    case typeof vnode === "string":
      return markHTMLString(escapeHTML(vnode));
    case typeof vnode === "function":
      return vnode;
    case (!vnode && vnode !== 0):
      return "";
    case Array.isArray(vnode):
      return markHTMLString(
        (await Promise.all(vnode.map((v) => renderJSX(result, v)))).join("")
      );
  }
  let skip;
  if (vnode.props) {
    if (vnode.props[Skip.symbol]) {
      skip = vnode.props[Skip.symbol];
    } else {
      skip = new Skip(vnode);
    }
  } else {
    skip = new Skip(vnode);
  }
  return renderJSXVNode(result, vnode, skip);
}
async function renderJSXVNode(result, vnode, skip) {
  if (isVNode(vnode)) {
    switch (true) {
      case !vnode.type: {
        throw new Error(`Unable to render ${result._metadata.pathname} because it contains an undefined Component!
Did you forget to import the component or is it possible there is a typo?`);
      }
      case vnode.type === Symbol.for("astro:fragment"):
        return renderJSX(result, vnode.props.children);
      case vnode.type.isAstroComponentFactory: {
        let props = {};
        let slots = {};
        for (const [key, value] of Object.entries(vnode.props ?? {})) {
          if (key === "children" || value && typeof value === "object" && value["$$slot"]) {
            slots[key === "children" ? "default" : key] = () => renderJSX(result, value);
          } else {
            props[key] = value;
          }
        }
        const scoped = createScopedResult(result, ScopeFlags.JSX);
        const html = markHTMLString(await renderToString(scoped, vnode.type, props, slots));
        return html;
      }
      case (!vnode.type && vnode.type !== 0):
        return "";
      case (typeof vnode.type === "string" && vnode.type !== ClientOnlyPlaceholder):
        return markHTMLString(await renderElement(result, vnode.type, vnode.props ?? {}));
    }
    if (vnode.type) {
      let extractSlots2 = function(child) {
        if (Array.isArray(child)) {
          return child.map((c) => extractSlots2(c));
        }
        if (!isVNode(child)) {
          _slots2.default.push(child);
          return;
        }
        if ("slot" in child.props) {
          _slots2[child.props.slot] = [..._slots2[child.props.slot] ?? [], child];
          delete child.props.slot;
          return;
        }
        _slots2.default.push(child);
      };
      if (typeof vnode.type === "function" && vnode.type["astro:renderer"]) {
        skip.increment();
      }
      if (typeof vnode.type === "function" && vnode.props["server:root"]) {
        const output2 = await vnode.type(vnode.props ?? {});
        return await renderJSX(result, output2);
      }
      if (typeof vnode.type === "function") {
        if (skip.haveNoTried() || skip.isCompleted()) {
          useConsoleFilter();
          try {
            const output2 = await vnode.type(vnode.props ?? {});
            let renderResult;
            if (output2 && output2[AstroJSX]) {
              renderResult = await renderJSXVNode(result, output2, skip);
              return renderResult;
            } else if (!output2) {
              renderResult = await renderJSXVNode(result, output2, skip);
              return renderResult;
            }
          } catch (e) {
            if (skip.isCompleted()) {
              throw e;
            }
            skip.increment();
          } finally {
            finishUsingConsoleFilter();
          }
        } else {
          skip.increment();
        }
      }
      const { children = null, ...props } = vnode.props ?? {};
      const _slots2 = {
        default: []
      };
      extractSlots2(children);
      for (const [key, value] of Object.entries(props)) {
        if (value["$$slot"]) {
          _slots2[key] = value;
          delete props[key];
        }
      }
      const slotPromises = [];
      const slots = {};
      for (const [key, value] of Object.entries(_slots2)) {
        slotPromises.push(
          renderJSX(result, value).then((output2) => {
            if (output2.toString().trim().length === 0)
              return;
            slots[key] = () => output2;
          })
        );
      }
      await Promise.all(slotPromises);
      props[Skip.symbol] = skip;
      let output;
      if (vnode.type === ClientOnlyPlaceholder && vnode.props["client:only"]) {
        output = await renderComponentToIterable(
          result,
          vnode.props["client:display-name"] ?? "",
          null,
          props,
          slots
        );
      } else {
        output = await renderComponentToIterable(
          result,
          typeof vnode.type === "function" ? vnode.type.name : vnode.type,
          vnode.type,
          props,
          slots
        );
      }
      if (typeof output !== "string" && Symbol.asyncIterator in output) {
        let parts = new HTMLParts();
        for await (const chunk of output) {
          parts.append(chunk, result);
        }
        return markHTMLString(parts.toString());
      } else {
        return markHTMLString(output);
      }
    }
  }
  return markHTMLString(`${vnode}`);
}
async function renderElement(result, tag, { children, ...props }) {
  return markHTMLString(
    `<${tag}${spreadAttributes(props)}${markHTMLString(
      (children == null || children == "") && voidElementNames.test(tag) ? `/>` : `>${children == null ? "" : await renderJSX(result, children)}</${tag}>`
    )}`
  );
}
function useConsoleFilter() {
  consoleFilterRefs++;
  if (!originalConsoleError) {
    originalConsoleError = console.error;
    try {
      console.error = filteredConsoleError;
    } catch (error2) {
    }
  }
}
function finishUsingConsoleFilter() {
  consoleFilterRefs--;
}
function filteredConsoleError(msg, ...rest) {
  if (consoleFilterRefs > 0 && typeof msg === "string") {
    const isKnownReactHookError = msg.includes("Warning: Invalid hook call.") && msg.includes("https://reactjs.org/link/invalid-hook-call");
    if (isKnownReactHookError)
      return;
  }
  originalConsoleError(msg, ...rest);
}
var dictionary = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXY";
var binary = dictionary.length;
function bitwise(str) {
  let hash = 0;
  if (str.length === 0)
    return hash;
  for (let i = 0; i < str.length; i++) {
    const ch = str.charCodeAt(i);
    hash = (hash << 5) - hash + ch;
    hash = hash & hash;
  }
  return hash;
}
function shorthash(text) {
  let num;
  let result = "";
  let integer = bitwise(text);
  const sign = integer < 0 ? "Z" : "";
  integer = Math.abs(integer);
  while (integer >= binary) {
    num = integer % binary;
    integer = Math.floor(integer / binary);
    result = dictionary[num] + result;
  }
  if (integer > 0) {
    result = dictionary[integer] + result;
  }
  return sign + result;
}
function componentIsHTMLElement(Component) {
  return typeof HTMLElement !== "undefined" && HTMLElement.isPrototypeOf(Component);
}
async function renderHTMLElement(result, constructor, props, slots) {
  const name = getHTMLElementName(constructor);
  let attrHTML = "";
  for (const attr in props) {
    attrHTML += ` ${attr}="${toAttributeString(await props[attr])}"`;
  }
  return markHTMLString(
    `<${name}${attrHTML}>${await renderSlot(result, slots == null ? void 0 : slots.default)}</${name}>`
  );
}
function getHTMLElementName(constructor) {
  const definedName = customElements.getName(constructor);
  if (definedName)
    return definedName;
  const assignedName = constructor.name.replace(/^HTML|Element$/g, "").replace(/[A-Z]/g, "-$&").toLowerCase().replace(/^-/, "html-");
  return assignedName;
}
var rendererAliases = /* @__PURE__ */ new Map([["solid", "solid-js"]]);
function guessRenderers(componentUrl) {
  const extname = componentUrl == null ? void 0 : componentUrl.split(".").pop();
  switch (extname) {
    case "svelte":
      return ["@astrojs/svelte"];
    case "vue":
      return ["@astrojs/vue"];
    case "jsx":
    case "tsx":
      return ["@astrojs/react", "@astrojs/preact", "@astrojs/solid-js", "@astrojs/vue (jsx)"];
    default:
      return [
        "@astrojs/react",
        "@astrojs/preact",
        "@astrojs/solid-js",
        "@astrojs/vue",
        "@astrojs/svelte",
        "@astrojs/lit"
      ];
  }
}
function isFragmentComponent(Component) {
  return Component === Fragment;
}
function isHTMLComponent(Component) {
  return Component && typeof Component === "object" && Component["astro:html"];
}
async function renderFrameworkComponent(result, displayName, Component, _props, slots = {}) {
  var _a3, _b;
  if (!Component && !_props["client:only"]) {
    throw new Error(
      `Unable to render ${displayName} because it is ${Component}!
Did you forget to import the component or is it possible there is a typo?`
    );
  }
  const { renderers: renderers2 } = result._metadata;
  const metadata = { displayName };
  const { hydration, isPage, props } = extractDirectives(displayName, _props);
  let html = "";
  let attrs = void 0;
  if (hydration) {
    metadata.hydrate = hydration.directive;
    metadata.hydrateArgs = hydration.value;
    metadata.componentExport = hydration.componentExport;
    metadata.componentUrl = hydration.componentUrl;
  }
  const probableRendererNames = guessRenderers(metadata.componentUrl);
  const validRenderers = renderers2.filter((r) => r.name !== "astro:jsx");
  const { children, slotInstructions } = await renderSlots(result, slots);
  let renderer;
  if (metadata.hydrate !== "only") {
    let isTagged = false;
    try {
      isTagged = Component && Component[Renderer];
    } catch {
    }
    if (isTagged) {
      const rendererName = Component[Renderer];
      renderer = renderers2.find(({ name }) => name === rendererName);
    }
    if (!renderer) {
      let error2;
      for (const r of renderers2) {
        try {
          if (await r.ssr.check.call({ result }, Component, props, children)) {
            renderer = r;
            break;
          }
        } catch (e) {
          error2 ?? (error2 = e);
        }
      }
      if (!renderer && error2) {
        throw error2;
      }
    }
    if (!renderer && typeof HTMLElement === "function" && componentIsHTMLElement(Component)) {
      const output = renderHTMLElement(result, Component, _props, slots);
      return output;
    }
  } else {
    if (metadata.hydrateArgs) {
      const passedName = metadata.hydrateArgs;
      const rendererName = rendererAliases.has(passedName) ? rendererAliases.get(passedName) : passedName;
      renderer = renderers2.find(
        ({ name }) => name === `@astrojs/${rendererName}` || name === rendererName
      );
    }
    if (!renderer && validRenderers.length === 1) {
      renderer = validRenderers[0];
    }
    if (!renderer) {
      const extname = (_a3 = metadata.componentUrl) == null ? void 0 : _a3.split(".").pop();
      renderer = renderers2.filter(
        ({ name }) => name === `@astrojs/${extname}` || name === extname
      )[0];
    }
  }
  if (!renderer) {
    if (metadata.hydrate === "only") {
      throw new AstroError({
        ...AstroErrorData.NoClientOnlyHint,
        message: AstroErrorData.NoClientOnlyHint.message(metadata.displayName),
        hint: AstroErrorData.NoClientOnlyHint.hint(
          probableRendererNames.map((r) => r.replace("@astrojs/", "")).join("|")
        )
      });
    } else if (typeof Component !== "string") {
      const matchingRenderers = validRenderers.filter(
        (r) => probableRendererNames.includes(r.name)
      );
      const plural = validRenderers.length > 1;
      if (matchingRenderers.length === 0) {
        throw new AstroError({
          ...AstroErrorData.NoMatchingRenderer,
          message: AstroErrorData.NoMatchingRenderer.message(
            metadata.displayName,
            (_b = metadata == null ? void 0 : metadata.componentUrl) == null ? void 0 : _b.split(".").pop(),
            plural,
            validRenderers.length
          ),
          hint: AstroErrorData.NoMatchingRenderer.hint(
            formatList(probableRendererNames.map((r) => "`" + r + "`"))
          )
        });
      } else if (matchingRenderers.length === 1) {
        renderer = matchingRenderers[0];
        ({ html, attrs } = await renderer.ssr.renderToStaticMarkup.call(
          { result },
          Component,
          props,
          children,
          metadata
        ));
      } else {
        throw new Error(`Unable to render ${metadata.displayName}!

This component likely uses ${formatList(probableRendererNames)},
but Astro encountered an error during server-side rendering.

Please ensure that ${metadata.displayName}:
1. Does not unconditionally access browser-specific globals like \`window\` or \`document\`.
   If this is unavoidable, use the \`client:only\` hydration directive.
2. Does not conditionally return \`null\` or \`undefined\` when rendered on the server.

If you're still stuck, please open an issue on GitHub or join us at https://astro.build/chat.`);
      }
    }
  } else {
    if (metadata.hydrate === "only") {
      html = await renderSlot(result, slots == null ? void 0 : slots.fallback);
    } else {
      ({ html, attrs } = await renderer.ssr.renderToStaticMarkup.call(
        { result },
        Component,
        props,
        children,
        metadata
      ));
    }
  }
  if (renderer && !renderer.clientEntrypoint && renderer.name !== "@astrojs/lit" && metadata.hydrate) {
    throw new AstroError({
      ...AstroErrorData.NoClientEntrypoint,
      message: AstroErrorData.NoClientEntrypoint.message(
        displayName,
        metadata.hydrate,
        renderer.name
      )
    });
  }
  if (!html && typeof Component === "string") {
    const Tag = sanitizeElementName(Component);
    const childSlots = Object.values(children).join("");
    const iterable = renderAstroTemplateResult(
      await renderTemplate`<${Tag}${internalSpreadAttributes(props)}${markHTMLString(
        childSlots === "" && voidElementNames.test(Tag) ? `/>` : `>${childSlots}</${Tag}>`
      )}`
    );
    html = "";
    for await (const chunk of iterable) {
      html += chunk;
    }
  }
  if (!hydration) {
    return async function* () {
      if (slotInstructions) {
        yield* slotInstructions;
      }
      if (isPage || (renderer == null ? void 0 : renderer.name) === "astro:jsx") {
        yield html;
      } else if (html && html.length > 0) {
        yield markHTMLString(html.replace(/\<\/?astro-slot\>/g, ""));
      } else {
        yield "";
      }
    }();
  }
  const astroId = shorthash(
    `<!--${metadata.componentExport.value}:${metadata.componentUrl}-->
${html}
${serializeProps(
      props,
      metadata
    )}`
  );
  const island = await generateHydrateScript(
    { renderer, result, astroId, props, attrs },
    metadata
  );
  let unrenderedSlots = [];
  if (html) {
    if (Object.keys(children).length > 0) {
      for (const key of Object.keys(children)) {
        if (!html.includes(key === "default" ? `<astro-slot>` : `<astro-slot name="${key}">`)) {
          unrenderedSlots.push(key);
        }
      }
    }
  } else {
    unrenderedSlots = Object.keys(children);
  }
  const template = unrenderedSlots.length > 0 ? unrenderedSlots.map(
    (key) => `<template data-astro-template${key !== "default" ? `="${key}"` : ""}>${children[key]}</template>`
  ).join("") : "";
  island.children = `${html ?? ""}${template}`;
  if (island.children) {
    island.props["await-children"] = "";
  }
  async function* renderAll() {
    if (slotInstructions) {
      yield* slotInstructions;
    }
    yield { type: "directive", hydration, result };
    yield markHTMLString(renderElement$1("astro-island", island, false));
  }
  return renderAll();
}
function sanitizeElementName(tag) {
  const unsafe = /[&<>'"\s]+/g;
  if (!unsafe.test(tag))
    return tag;
  return tag.trim().split(unsafe)[0].trim();
}
async function renderFragmentComponent(result, slots = {}) {
  const children = await renderSlot(result, slots == null ? void 0 : slots.default);
  if (children == null) {
    return children;
  }
  return markHTMLString(children);
}
async function renderHTMLComponent(result, Component, _props, slots = {}) {
  const { slotInstructions, children } = await renderSlots(result, slots);
  const html = Component.render({ slots: children });
  const hydrationHtml = slotInstructions ? slotInstructions.map((instr) => stringifyChunk(result, instr)).join("") : "";
  return markHTMLString(hydrationHtml + html);
}
function renderComponent(result, displayName, Component, props, slots = {}) {
  if (isPromise(Component)) {
    return Promise.resolve(Component).then((Unwrapped) => {
      return renderComponent(result, displayName, Unwrapped, props, slots);
    });
  }
  if (isFragmentComponent(Component)) {
    return renderFragmentComponent(result, slots);
  }
  if (isHTMLComponent(Component)) {
    return renderHTMLComponent(result, Component, props, slots);
  }
  if (isAstroComponentFactory(Component)) {
    return createAstroComponentInstance(result, displayName, Component, props, slots);
  }
  return renderFrameworkComponent(result, displayName, Component, props, slots);
}
function renderComponentToIterable(result, displayName, Component, props, slots = {}) {
  const renderResult = renderComponent(result, displayName, Component, props, slots);
  if (isAstroComponentInstance(renderResult)) {
    return renderResult.render();
  }
  return renderResult;
}
var __accessCheck$2 = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet$2 = (obj, member, getter) => {
  __accessCheck$2(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd$2 = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet$2 = (obj, member, value, setter) => {
  __accessCheck$2(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};
var isNodeJS = typeof process === "object" && Object.prototype.toString.call(process) === "[object process]";
var StreamingCompatibleResponse;
function createResponseClass() {
  var _isStream, _body, _a3;
  StreamingCompatibleResponse = (_a3 = class extends Response {
    constructor(body, init2) {
      let isStream = body instanceof ReadableStream;
      super(isStream ? null : body, init2);
      __privateAdd$2(this, _isStream, void 0);
      __privateAdd$2(this, _body, void 0);
      __privateSet$2(this, _isStream, isStream);
      __privateSet$2(this, _body, body);
    }
    get body() {
      return __privateGet$2(this, _body);
    }
    async text() {
      if (__privateGet$2(this, _isStream) && isNodeJS) {
        let decoder2 = new TextDecoder();
        let body = __privateGet$2(this, _body);
        let out = "";
        for await (let chunk of streamAsyncIterator(body)) {
          out += decoder2.decode(chunk);
        }
        return out;
      }
      return super.text();
    }
    async arrayBuffer() {
      if (__privateGet$2(this, _isStream) && isNodeJS) {
        let body = __privateGet$2(this, _body);
        let chunks = [];
        let len = 0;
        for await (let chunk of streamAsyncIterator(body)) {
          chunks.push(chunk);
          len += chunk.length;
        }
        let ab = new Uint8Array(len);
        let offset = 0;
        for (const chunk of chunks) {
          ab.set(chunk, offset);
          offset += chunk.length;
        }
        return ab;
      }
      return super.arrayBuffer();
    }
  }, _isStream = /* @__PURE__ */ new WeakMap(), _body = /* @__PURE__ */ new WeakMap(), _a3);
  return StreamingCompatibleResponse;
}
var createResponse = isNodeJS ? (body, init2) => {
  if (typeof body === "string" || ArrayBuffer.isView(body)) {
    return new Response(body, init2);
  }
  if (typeof StreamingCompatibleResponse === "undefined") {
    return new (createResponseClass())(body, init2);
  }
  return new StreamingCompatibleResponse(body, init2);
} : (body, init2) => new Response(body, init2);
var needsHeadRenderingSymbol = Symbol.for("astro.needsHeadRendering");
function nonAstroPageNeedsHeadInjection(pageComponent) {
  return needsHeadRenderingSymbol in pageComponent && !!pageComponent[needsHeadRenderingSymbol];
}
async function iterableToHTMLBytes(result, iterable, onDocTypeInjection) {
  const parts = new HTMLParts();
  let i = 0;
  for await (const chunk of iterable) {
    if (isHTMLString(chunk)) {
      if (i === 0) {
        i++;
        if (!/<!doctype html/i.test(String(chunk))) {
          parts.append("<!DOCTYPE html>\n", result);
          if (onDocTypeInjection) {
            await onDocTypeInjection(parts);
          }
        }
      }
    }
    parts.append(chunk, result);
  }
  return parts.toArrayBuffer();
}
async function bufferHeadContent(result) {
  const iterator = result.propagators.values();
  const scoped = createScopedResult(result, ScopeFlags.HeadBuffer);
  while (true) {
    const { value, done } = iterator.next();
    if (done) {
      break;
    }
    const returnValue = await value.init(scoped);
    if (isHeadAndContent(returnValue)) {
      result.extraHead.push(returnValue.head);
    }
  }
}
async function renderPage$1(result, componentFactory, props, children, streaming, route) {
  if (!isAstroComponentFactory(componentFactory)) {
    const pageProps = { ...props ?? {}, "server:root": true };
    let output;
    try {
      const renderResult = await renderComponent(
        result,
        componentFactory.name,
        componentFactory,
        pageProps,
        null
      );
      if (isAstroComponentInstance(renderResult)) {
        output = renderResult.render();
      } else {
        output = renderResult;
      }
    } catch (e) {
      if (AstroError.is(e) && !e.loc) {
        e.setLocation({
          file: route == null ? void 0 : route.component
        });
      }
      throw e;
    }
    const bytes = await iterableToHTMLBytes(result, output, async (parts) => {
      if (nonAstroPageNeedsHeadInjection(componentFactory)) {
        for await (let chunk of maybeRenderHead(result)) {
          parts.append(chunk, result);
        }
      }
    });
    return new Response(bytes, {
      headers: new Headers([
        ["Content-Type", "text/html; charset=utf-8"],
        ["Content-Length", bytes.byteLength.toString()]
      ])
    });
  }
  const factoryReturnValue = await componentFactory(result, props, children);
  const factoryIsHeadAndContent = isHeadAndContent(factoryReturnValue);
  if (isRenderTemplateResult(factoryReturnValue) || factoryIsHeadAndContent) {
    await bufferHeadContent(result);
    const templateResult = factoryIsHeadAndContent ? factoryReturnValue.content : factoryReturnValue;
    let iterable = renderAstroTemplateResult(templateResult);
    let init2 = result.response;
    let headers = new Headers(init2.headers);
    let body;
    if (streaming) {
      body = new ReadableStream({
        start(controller) {
          async function read() {
            let i = 0;
            try {
              for await (const chunk of iterable) {
                if (isHTMLString(chunk)) {
                  if (i === 0) {
                    if (!/<!doctype html/i.test(String(chunk))) {
                      controller.enqueue(encoder.encode("<!DOCTYPE html>\n"));
                    }
                  }
                }
                const bytes = chunkToByteArray(result, chunk);
                controller.enqueue(bytes);
                i++;
              }
              controller.close();
            } catch (e) {
              if (AstroError.is(e) && !e.loc) {
                e.setLocation({
                  file: route == null ? void 0 : route.component
                });
              }
              controller.error(e);
            }
          }
          read();
        }
      });
    } else {
      body = await iterableToHTMLBytes(result, iterable);
      headers.set("Content-Length", body.byteLength.toString());
    }
    let response = createResponse(body, { ...init2, headers });
    return response;
  }
  if (!(factoryReturnValue instanceof Response)) {
    throw new AstroError({
      ...AstroErrorData.OnlyResponseCanBeReturned,
      message: AstroErrorData.OnlyResponseCanBeReturned.message(
        route == null ? void 0 : route.route,
        typeof factoryReturnValue
      ),
      location: {
        file: route == null ? void 0 : route.component
      }
    });
  }
  return factoryReturnValue;
}
function spreadAttributes(values, _name, { class: scopedClassName } = {}) {
  let output = "";
  if (scopedClassName) {
    if (typeof values.class !== "undefined") {
      values.class += ` ${scopedClassName}`;
    } else if (typeof values["class:list"] !== "undefined") {
      values["class:list"] = [values["class:list"], scopedClassName];
    } else {
      values.class = scopedClassName;
    }
  }
  for (const [key, value] of Object.entries(values)) {
    output += addAttribute(value, key, true);
  }
  return markHTMLString(output);
}
var FORCE_COLOR;
var NODE_DISABLE_COLORS;
var NO_COLOR;
var TERM;
var isTTY = true;
if (typeof process !== "undefined") {
  ({ FORCE_COLOR, NODE_DISABLE_COLORS, NO_COLOR, TERM } = process.env || {});
  isTTY = process.stdout && process.stdout.isTTY;
}
var $ = {
  enabled: !NODE_DISABLE_COLORS && NO_COLOR == null && TERM !== "dumb" && (FORCE_COLOR != null && FORCE_COLOR !== "0" || isTTY)
};
function init(x, y) {
  let rgx = new RegExp(`\\x1b\\[${y}m`, "g");
  let open = `\x1B[${x}m`, close = `\x1B[${y}m`;
  return function(txt) {
    if (!$.enabled || txt == null)
      return txt;
    return open + (!!~("" + txt).indexOf(close) ? txt.replace(rgx, close + open) : txt) + close;
  };
}
var reset = init(0, 0);
var bold = init(1, 22);
var dim = init(2, 22);
var red = init(31, 39);
var yellow = init(33, 39);
var cyan = init(36, 39);
var eastasianwidthExports = {};
var eastasianwidth = {
  get exports() {
    return eastasianwidthExports;
  },
  set exports(v) {
    eastasianwidthExports = v;
  }
};
(function(module) {
  var eaw = {};
  {
    module.exports = eaw;
  }
  eaw.eastAsianWidth = function(character) {
    var x = character.charCodeAt(0);
    var y = character.length == 2 ? character.charCodeAt(1) : 0;
    var codePoint = x;
    if (55296 <= x && x <= 56319 && (56320 <= y && y <= 57343)) {
      x &= 1023;
      y &= 1023;
      codePoint = x << 10 | y;
      codePoint += 65536;
    }
    if (12288 == codePoint || 65281 <= codePoint && codePoint <= 65376 || 65504 <= codePoint && codePoint <= 65510) {
      return "F";
    }
    if (8361 == codePoint || 65377 <= codePoint && codePoint <= 65470 || 65474 <= codePoint && codePoint <= 65479 || 65482 <= codePoint && codePoint <= 65487 || 65490 <= codePoint && codePoint <= 65495 || 65498 <= codePoint && codePoint <= 65500 || 65512 <= codePoint && codePoint <= 65518) {
      return "H";
    }
    if (4352 <= codePoint && codePoint <= 4447 || 4515 <= codePoint && codePoint <= 4519 || 4602 <= codePoint && codePoint <= 4607 || 9001 <= codePoint && codePoint <= 9002 || 11904 <= codePoint && codePoint <= 11929 || 11931 <= codePoint && codePoint <= 12019 || 12032 <= codePoint && codePoint <= 12245 || 12272 <= codePoint && codePoint <= 12283 || 12289 <= codePoint && codePoint <= 12350 || 12353 <= codePoint && codePoint <= 12438 || 12441 <= codePoint && codePoint <= 12543 || 12549 <= codePoint && codePoint <= 12589 || 12593 <= codePoint && codePoint <= 12686 || 12688 <= codePoint && codePoint <= 12730 || 12736 <= codePoint && codePoint <= 12771 || 12784 <= codePoint && codePoint <= 12830 || 12832 <= codePoint && codePoint <= 12871 || 12880 <= codePoint && codePoint <= 13054 || 13056 <= codePoint && codePoint <= 19903 || 19968 <= codePoint && codePoint <= 42124 || 42128 <= codePoint && codePoint <= 42182 || 43360 <= codePoint && codePoint <= 43388 || 44032 <= codePoint && codePoint <= 55203 || 55216 <= codePoint && codePoint <= 55238 || 55243 <= codePoint && codePoint <= 55291 || 63744 <= codePoint && codePoint <= 64255 || 65040 <= codePoint && codePoint <= 65049 || 65072 <= codePoint && codePoint <= 65106 || 65108 <= codePoint && codePoint <= 65126 || 65128 <= codePoint && codePoint <= 65131 || 110592 <= codePoint && codePoint <= 110593 || 127488 <= codePoint && codePoint <= 127490 || 127504 <= codePoint && codePoint <= 127546 || 127552 <= codePoint && codePoint <= 127560 || 127568 <= codePoint && codePoint <= 127569 || 131072 <= codePoint && codePoint <= 194367 || 177984 <= codePoint && codePoint <= 196605 || 196608 <= codePoint && codePoint <= 262141) {
      return "W";
    }
    if (32 <= codePoint && codePoint <= 126 || 162 <= codePoint && codePoint <= 163 || 165 <= codePoint && codePoint <= 166 || 172 == codePoint || 175 == codePoint || 10214 <= codePoint && codePoint <= 10221 || 10629 <= codePoint && codePoint <= 10630) {
      return "Na";
    }
    if (161 == codePoint || 164 == codePoint || 167 <= codePoint && codePoint <= 168 || 170 == codePoint || 173 <= codePoint && codePoint <= 174 || 176 <= codePoint && codePoint <= 180 || 182 <= codePoint && codePoint <= 186 || 188 <= codePoint && codePoint <= 191 || 198 == codePoint || 208 == codePoint || 215 <= codePoint && codePoint <= 216 || 222 <= codePoint && codePoint <= 225 || 230 == codePoint || 232 <= codePoint && codePoint <= 234 || 236 <= codePoint && codePoint <= 237 || 240 == codePoint || 242 <= codePoint && codePoint <= 243 || 247 <= codePoint && codePoint <= 250 || 252 == codePoint || 254 == codePoint || 257 == codePoint || 273 == codePoint || 275 == codePoint || 283 == codePoint || 294 <= codePoint && codePoint <= 295 || 299 == codePoint || 305 <= codePoint && codePoint <= 307 || 312 == codePoint || 319 <= codePoint && codePoint <= 322 || 324 == codePoint || 328 <= codePoint && codePoint <= 331 || 333 == codePoint || 338 <= codePoint && codePoint <= 339 || 358 <= codePoint && codePoint <= 359 || 363 == codePoint || 462 == codePoint || 464 == codePoint || 466 == codePoint || 468 == codePoint || 470 == codePoint || 472 == codePoint || 474 == codePoint || 476 == codePoint || 593 == codePoint || 609 == codePoint || 708 == codePoint || 711 == codePoint || 713 <= codePoint && codePoint <= 715 || 717 == codePoint || 720 == codePoint || 728 <= codePoint && codePoint <= 731 || 733 == codePoint || 735 == codePoint || 768 <= codePoint && codePoint <= 879 || 913 <= codePoint && codePoint <= 929 || 931 <= codePoint && codePoint <= 937 || 945 <= codePoint && codePoint <= 961 || 963 <= codePoint && codePoint <= 969 || 1025 == codePoint || 1040 <= codePoint && codePoint <= 1103 || 1105 == codePoint || 8208 == codePoint || 8211 <= codePoint && codePoint <= 8214 || 8216 <= codePoint && codePoint <= 8217 || 8220 <= codePoint && codePoint <= 8221 || 8224 <= codePoint && codePoint <= 8226 || 8228 <= codePoint && codePoint <= 8231 || 8240 == codePoint || 8242 <= codePoint && codePoint <= 8243 || 8245 == codePoint || 8251 == codePoint || 8254 == codePoint || 8308 == codePoint || 8319 == codePoint || 8321 <= codePoint && codePoint <= 8324 || 8364 == codePoint || 8451 == codePoint || 8453 == codePoint || 8457 == codePoint || 8467 == codePoint || 8470 == codePoint || 8481 <= codePoint && codePoint <= 8482 || 8486 == codePoint || 8491 == codePoint || 8531 <= codePoint && codePoint <= 8532 || 8539 <= codePoint && codePoint <= 8542 || 8544 <= codePoint && codePoint <= 8555 || 8560 <= codePoint && codePoint <= 8569 || 8585 == codePoint || 8592 <= codePoint && codePoint <= 8601 || 8632 <= codePoint && codePoint <= 8633 || 8658 == codePoint || 8660 == codePoint || 8679 == codePoint || 8704 == codePoint || 8706 <= codePoint && codePoint <= 8707 || 8711 <= codePoint && codePoint <= 8712 || 8715 == codePoint || 8719 == codePoint || 8721 == codePoint || 8725 == codePoint || 8730 == codePoint || 8733 <= codePoint && codePoint <= 8736 || 8739 == codePoint || 8741 == codePoint || 8743 <= codePoint && codePoint <= 8748 || 8750 == codePoint || 8756 <= codePoint && codePoint <= 8759 || 8764 <= codePoint && codePoint <= 8765 || 8776 == codePoint || 8780 == codePoint || 8786 == codePoint || 8800 <= codePoint && codePoint <= 8801 || 8804 <= codePoint && codePoint <= 8807 || 8810 <= codePoint && codePoint <= 8811 || 8814 <= codePoint && codePoint <= 8815 || 8834 <= codePoint && codePoint <= 8835 || 8838 <= codePoint && codePoint <= 8839 || 8853 == codePoint || 8857 == codePoint || 8869 == codePoint || 8895 == codePoint || 8978 == codePoint || 9312 <= codePoint && codePoint <= 9449 || 9451 <= codePoint && codePoint <= 9547 || 9552 <= codePoint && codePoint <= 9587 || 9600 <= codePoint && codePoint <= 9615 || 9618 <= codePoint && codePoint <= 9621 || 9632 <= codePoint && codePoint <= 9633 || 9635 <= codePoint && codePoint <= 9641 || 9650 <= codePoint && codePoint <= 9651 || 9654 <= codePoint && codePoint <= 9655 || 9660 <= codePoint && codePoint <= 9661 || 9664 <= codePoint && codePoint <= 9665 || 9670 <= codePoint && codePoint <= 9672 || 9675 == codePoint || 9678 <= codePoint && codePoint <= 9681 || 9698 <= codePoint && codePoint <= 9701 || 9711 == codePoint || 9733 <= codePoint && codePoint <= 9734 || 9737 == codePoint || 9742 <= codePoint && codePoint <= 9743 || 9748 <= codePoint && codePoint <= 9749 || 9756 == codePoint || 9758 == codePoint || 9792 == codePoint || 9794 == codePoint || 9824 <= codePoint && codePoint <= 9825 || 9827 <= codePoint && codePoint <= 9829 || 9831 <= codePoint && codePoint <= 9834 || 9836 <= codePoint && codePoint <= 9837 || 9839 == codePoint || 9886 <= codePoint && codePoint <= 9887 || 9918 <= codePoint && codePoint <= 9919 || 9924 <= codePoint && codePoint <= 9933 || 9935 <= codePoint && codePoint <= 9953 || 9955 == codePoint || 9960 <= codePoint && codePoint <= 9983 || 10045 == codePoint || 10071 == codePoint || 10102 <= codePoint && codePoint <= 10111 || 11093 <= codePoint && codePoint <= 11097 || 12872 <= codePoint && codePoint <= 12879 || 57344 <= codePoint && codePoint <= 63743 || 65024 <= codePoint && codePoint <= 65039 || 65533 == codePoint || 127232 <= codePoint && codePoint <= 127242 || 127248 <= codePoint && codePoint <= 127277 || 127280 <= codePoint && codePoint <= 127337 || 127344 <= codePoint && codePoint <= 127386 || 917760 <= codePoint && codePoint <= 917999 || 983040 <= codePoint && codePoint <= 1048573 || 1048576 <= codePoint && codePoint <= 1114109) {
      return "A";
    }
    return "N";
  };
  eaw.characterLength = function(character) {
    var code = this.eastAsianWidth(character);
    if (code == "F" || code == "W" || code == "A") {
      return 2;
    } else {
      return 1;
    }
  };
  function stringToArray(string) {
    return string.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]|[^\uD800-\uDFFF]/g) || [];
  }
  eaw.length = function(string) {
    var characters = stringToArray(string);
    var len = 0;
    for (var i = 0; i < characters.length; i++) {
      len = len + this.characterLength(characters[i]);
    }
    return len;
  };
  eaw.slice = function(text, start2, end) {
    textLen = eaw.length(text);
    start2 = start2 ? start2 : 0;
    end = end ? end : 1;
    if (start2 < 0) {
      start2 = textLen + start2;
    }
    if (end < 0) {
      end = textLen + end;
    }
    var result = "";
    var eawLen = 0;
    var chars = stringToArray(text);
    for (var i = 0; i < chars.length; i++) {
      var char = chars[i];
      var charLen = eaw.length(char);
      if (eawLen >= start2 - (charLen == 2 ? 1 : 0)) {
        if (eawLen + charLen <= end) {
          result += char;
        } else {
          break;
        }
      }
      eawLen += charLen;
    }
    return result;
  };
})(eastasianwidth);
var dateTimeFormat = new Intl.DateTimeFormat([], {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit"
});
var levels = {
  debug: 20,
  info: 30,
  warn: 40,
  error: 50,
  silent: 90
};
function log(opts, level, type, message) {
  const logLevel = opts.level;
  const dest = opts.dest;
  const event = {
    type,
    level,
    message
  };
  if (levels[logLevel] > levels[level]) {
    return;
  }
  dest.write(event);
}
function warn(opts, type, message) {
  return log(opts, "warn", type, message);
}
function error(opts, type, message) {
  return log(opts, "error", type, message);
}
function debug(...args) {
  if ("_astroGlobalDebug" in globalThis) {
    globalThis._astroGlobalDebug(...args);
  }
}
if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose"))
      ;
    else if (proc.argv.includes("--silent"))
      ;
    else
      ;
  }
}
var VALID_PARAM_TYPES = ["string", "number", "undefined"];
function validateGetStaticPathsParameter([key, value], route) {
  if (!VALID_PARAM_TYPES.includes(typeof value)) {
    throw new AstroError({
      ...AstroErrorData.GetStaticPathsInvalidRouteParam,
      message: AstroErrorData.GetStaticPathsInvalidRouteParam.message(key, value, typeof value),
      location: {
        file: route
      }
    });
  }
}
function validateDynamicRouteModule(mod, {
  ssr,
  logging,
  route
}) {
  if (ssr && mod.getStaticPaths && !mod.prerender) {
    warn(logging, "getStaticPaths", 'getStaticPaths() is ignored when "output: server" is set.');
  }
  if ((!ssr || mod.prerender) && !mod.getStaticPaths) {
    throw new AstroError({
      ...AstroErrorData.GetStaticPathsRequired,
      location: { file: route.component }
    });
  }
}
function validateGetStaticPathsResult(result, logging, route) {
  if (!Array.isArray(result)) {
    throw new AstroError({
      ...AstroErrorData.InvalidGetStaticPathsReturn,
      message: AstroErrorData.InvalidGetStaticPathsReturn.message(typeof result),
      location: {
        file: route.component
      }
    });
  }
  result.forEach((pathObject) => {
    if (pathObject.params === void 0 || pathObject.params === null || pathObject.params && Object.keys(pathObject.params).length === 0) {
      throw new AstroError({
        ...AstroErrorData.GetStaticPathsExpectedParams,
        location: {
          file: route.component
        }
      });
    }
    if (typeof pathObject.params !== "object") {
      throw new AstroError({
        ...AstroErrorData.InvalidGetStaticPathParam,
        message: AstroErrorData.InvalidGetStaticPathParam.message(typeof pathObject.params),
        location: {
          file: route.component
        }
      });
    }
    for (const [key, val] of Object.entries(pathObject.params)) {
      if (!(typeof val === "undefined" || typeof val === "string" || typeof val === "number")) {
        warn(
          logging,
          "getStaticPaths",
          `invalid path param: ${key}. A string, number or undefined value was expected, but got \`${JSON.stringify(
            val
          )}\`.`
        );
      }
      if (typeof val === "string" && val === "") {
        warn(
          logging,
          "getStaticPaths",
          `invalid path param: ${key}. \`undefined\` expected for an optional param, but got empty string.`
        );
      }
    }
  });
}
function getParams(array) {
  const fn = (match) => {
    const params = {};
    array.forEach((key, i) => {
      if (key.startsWith("...")) {
        params[key.slice(3)] = match[i + 1] ? decodeURIComponent(match[i + 1]) : void 0;
      } else {
        params[key] = decodeURIComponent(match[i + 1]);
      }
    });
    return params;
  };
  return fn;
}
function stringifyParams(params, routeComponent) {
  const validatedParams = Object.entries(params).reduce((acc, next) => {
    validateGetStaticPathsParameter(next, routeComponent);
    const [key, value] = next;
    acc[key] = value == null ? void 0 : value.toString();
    return acc;
  }, {});
  return JSON.stringify(validatedParams, Object.keys(params).sort());
}
var __accessCheck$1 = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet$1 = (obj, member, getter) => {
  __accessCheck$1(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd$1 = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet$1 = (obj, member, value, setter) => {
  __accessCheck$1(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};
var _result;
var _slots;
var _loggingOpts;
var clientAddressSymbol$1 = Symbol.for("astro.clientAddress");
function onlyAvailableInSSR(name) {
  return function _onlyAvailableInSSR() {
    switch (name) {
      case "Astro.redirect":
        throw new AstroError(AstroErrorData.StaticRedirectNotAvailable);
    }
  };
}
function getFunctionExpression(slot) {
  var _a3;
  if (!slot)
    return;
  if (((_a3 = slot.expressions) == null ? void 0 : _a3.length) !== 1)
    return;
  return slot.expressions[0];
}
var Slots = class {
  constructor(result, slots, logging) {
    __privateAdd$1(this, _result, void 0);
    __privateAdd$1(this, _slots, void 0);
    __privateAdd$1(this, _loggingOpts, void 0);
    __privateSet$1(this, _result, result);
    __privateSet$1(this, _slots, slots);
    __privateSet$1(this, _loggingOpts, logging);
    if (slots) {
      for (const key of Object.keys(slots)) {
        if (this[key] !== void 0) {
          throw new AstroError({
            ...AstroErrorData.ReservedSlotName,
            message: AstroErrorData.ReservedSlotName.message(key)
          });
        }
        Object.defineProperty(this, key, {
          get() {
            return true;
          },
          enumerable: true
        });
      }
    }
  }
  has(name) {
    if (!__privateGet$1(this, _slots))
      return false;
    return Boolean(__privateGet$1(this, _slots)[name]);
  }
  async render(name, args = []) {
    if (!__privateGet$1(this, _slots) || !this.has(name))
      return;
    const scoped = createScopedResult(__privateGet$1(this, _result), ScopeFlags.RenderSlot);
    if (!Array.isArray(args)) {
      warn(
        __privateGet$1(this, _loggingOpts),
        "Astro.slots.render",
        `Expected second parameter to be an array, received a ${typeof args}. If you're trying to pass an array as a single argument and getting unexpected results, make sure you're passing your array as a item of an array. Ex: Astro.slots.render('default', [["Hello", "World"]])`
      );
    } else if (args.length > 0) {
      const slotValue = __privateGet$1(this, _slots)[name];
      const component = typeof slotValue === "function" ? await slotValue(scoped) : await slotValue;
      const expression = getFunctionExpression(component);
      if (expression) {
        const slot = () => expression(...args);
        return await renderSlot(scoped, slot).then((res) => res != null ? String(res) : res);
      }
      if (typeof component === "function") {
        return await renderJSX(scoped, component(...args)).then(
          (res) => res != null ? String(res) : res
        );
      }
    }
    const content = await renderSlot(scoped, __privateGet$1(this, _slots)[name]);
    const outHTML = stringifyChunk(scoped, content);
    return outHTML;
  }
};
_result = /* @__PURE__ */ new WeakMap();
_slots = /* @__PURE__ */ new WeakMap();
_loggingOpts = /* @__PURE__ */ new WeakMap();
var renderMarkdown = null;
function createResult(args) {
  const { markdown, params, pathname, renderers: renderers2, request, resolve } = args;
  const url = new URL(request.url);
  const headers = new Headers();
  headers.set("Content-Type", "text/html");
  const response = {
    status: args.status,
    statusText: "OK",
    headers
  };
  Object.defineProperty(response, "headers", {
    value: response.headers,
    enumerable: true,
    writable: false
  });
  let cookies = void 0;
  const result = {
    styles: args.styles ?? /* @__PURE__ */ new Set(),
    scripts: args.scripts ?? /* @__PURE__ */ new Set(),
    links: args.links ?? /* @__PURE__ */ new Set(),
    propagation: args.propagation ?? /* @__PURE__ */ new Map(),
    propagators: /* @__PURE__ */ new Map(),
    extraHead: [],
    scope: 0,
    cookies,
    createAstro(astroGlobal, props, slots) {
      const astroSlots = new Slots(result, slots, args.logging);
      const Astro = {
        __proto__: astroGlobal,
        get clientAddress() {
          if (!(clientAddressSymbol$1 in request)) {
            if (args.adapterName) {
              throw new AstroError({
                ...AstroErrorData.ClientAddressNotAvailable,
                message: AstroErrorData.ClientAddressNotAvailable.message(args.adapterName)
              });
            } else {
              throw new AstroError(AstroErrorData.StaticClientAddressNotAvailable);
            }
          }
          return Reflect.get(request, clientAddressSymbol$1);
        },
        get cookies() {
          if (cookies) {
            return cookies;
          }
          cookies = new AstroCookies(request);
          result.cookies = cookies;
          return cookies;
        },
        params,
        props,
        request,
        url,
        redirect: args.ssr ? (path, status) => {
          return new Response(null, {
            status: status || 302,
            headers: {
              Location: path
            }
          });
        } : onlyAvailableInSSR("Astro.redirect"),
        response,
        slots: astroSlots
      };
      Object.defineProperty(Astro, "__renderMarkdown", {
        enumerable: false,
        writable: false,
        value: async function(content, opts) {
          if (typeof Deno !== "undefined") {
            throw new Error("Markdown is not supported in Deno SSR");
          }
          if (!renderMarkdown) {
            let astroRemark = "@astrojs/";
            astroRemark += "markdown-remark";
            renderMarkdown = (await import(astroRemark)).renderMarkdown;
          }
          const { code } = await renderMarkdown(content, { ...markdown, ...opts ?? {} });
          return code;
        }
      });
      return Astro;
    },
    resolve,
    _metadata: {
      renderers: renderers2,
      pathname,
      hasHydrationScript: false,
      hasRenderedHead: false,
      hasDirectives: /* @__PURE__ */ new Set()
    },
    response
  };
  return result;
}
function generatePaginateFunction(routeMatch) {
  return function paginateUtility(data, args = {}) {
    let { pageSize: _pageSize, params: _params, props: _props } = args;
    const pageSize = _pageSize || 10;
    const paramName = "page";
    const additionalParams = _params || {};
    const additionalProps = _props || {};
    let includesFirstPageNumber;
    if (routeMatch.params.includes(`...${paramName}`)) {
      includesFirstPageNumber = false;
    } else if (routeMatch.params.includes(`${paramName}`)) {
      includesFirstPageNumber = true;
    } else {
      throw new AstroError({
        ...AstroErrorData.PageNumberParamNotFound,
        message: AstroErrorData.PageNumberParamNotFound.message(paramName)
      });
    }
    const lastPage = Math.max(1, Math.ceil(data.length / pageSize));
    const result = [...Array(lastPage).keys()].map((num) => {
      const pageNum = num + 1;
      const start2 = pageSize === Infinity ? 0 : (pageNum - 1) * pageSize;
      const end = Math.min(start2 + pageSize, data.length);
      const params = {
        ...additionalParams,
        [paramName]: includesFirstPageNumber || pageNum > 1 ? String(pageNum) : void 0
      };
      return {
        params,
        props: {
          ...additionalProps,
          page: {
            data: data.slice(start2, end),
            start: start2,
            end: end - 1,
            size: pageSize,
            total: data.length,
            currentPage: pageNum,
            lastPage,
            url: {
              current: routeMatch.generate({ ...params }),
              next: pageNum === lastPage ? void 0 : routeMatch.generate({ ...params, page: String(pageNum + 1) }),
              prev: pageNum === 1 ? void 0 : routeMatch.generate({
                ...params,
                page: !includesFirstPageNumber && pageNum - 1 === 1 ? "" : String(pageNum - 1)
              })
            }
          }
        }
      };
    });
    return result;
  };
}
async function callGetStaticPaths({
  isValidate,
  logging,
  mod,
  route,
  ssr
}) {
  validateDynamicRouteModule(mod, { ssr, logging, route });
  if (ssr && !mod.prerender) {
    return { staticPaths: Object.assign([], { keyed: /* @__PURE__ */ new Map() }) };
  }
  if (!mod.getStaticPaths) {
    throw new Error("Unexpected Error.");
  }
  let staticPaths = [];
  staticPaths = await mod.getStaticPaths({
    paginate: generatePaginateFunction(route),
    rss() {
      throw new AstroError(AstroErrorData.GetStaticPathsRemovedRSSHelper);
    }
  });
  if (Array.isArray(staticPaths)) {
    staticPaths = staticPaths.flat();
  }
  if (isValidate) {
    validateGetStaticPathsResult(staticPaths, logging, route);
  }
  const keyedStaticPaths = staticPaths;
  keyedStaticPaths.keyed = /* @__PURE__ */ new Map();
  for (const sp of keyedStaticPaths) {
    const paramsKey = stringifyParams(sp.params, route.component);
    keyedStaticPaths.keyed.set(paramsKey, sp);
  }
  return {
    staticPaths: keyedStaticPaths
  };
}
var RouteCache = class {
  constructor(logging, mode = "production") {
    this.cache = {};
    this.logging = logging;
    this.mode = mode;
  }
  clearAll() {
    this.cache = {};
  }
  set(route, entry) {
    if (this.mode === "production" && this.cache[route.component]) {
      warn(
        this.logging,
        "routeCache",
        `Internal Warning: route cache overwritten. (${route.component})`
      );
    }
    this.cache[route.component] = entry;
  }
  get(route) {
    return this.cache[route.component];
  }
};
function findPathItemByKey(staticPaths, params, route) {
  const paramsKey = stringifyParams(params, route.component);
  const matchedStaticPath = staticPaths.keyed.get(paramsKey);
  if (matchedStaticPath) {
    return matchedStaticPath;
  }
  debug("findPathItemByKey", `Unexpected cache miss looking for ${paramsKey}`);
}
var GetParamsAndPropsError = /* @__PURE__ */ ((GetParamsAndPropsError2) => {
  GetParamsAndPropsError2[GetParamsAndPropsError2["NoMatchingStaticPath"] = 0] = "NoMatchingStaticPath";
  return GetParamsAndPropsError2;
})(GetParamsAndPropsError || {});
async function getParamsAndProps(opts) {
  const { logging, mod, route, routeCache, pathname, ssr } = opts;
  let params = {};
  let pageProps;
  if (route && !route.pathname) {
    if (route.params.length) {
      const paramsMatch = route.pattern.exec(pathname);
      if (paramsMatch) {
        params = getParams(route.params)(paramsMatch);
      }
    }
    let routeCacheEntry = routeCache.get(route);
    if (!routeCacheEntry) {
      routeCacheEntry = await callGetStaticPaths({ mod, route, isValidate: true, logging, ssr });
      routeCache.set(route, routeCacheEntry);
    }
    const matchedStaticPath = findPathItemByKey(routeCacheEntry.staticPaths, params, route);
    if (!matchedStaticPath && (ssr ? mod.prerender : true)) {
      return 0;
    }
    pageProps = (matchedStaticPath == null ? void 0 : matchedStaticPath.props) ? { ...matchedStaticPath.props } : {};
  } else {
    pageProps = {};
  }
  return [params, pageProps];
}
async function renderPage(mod, ctx, env) {
  var _a3, _b;
  const paramsAndPropsRes = await getParamsAndProps({
    logging: env.logging,
    mod,
    route: ctx.route,
    routeCache: env.routeCache,
    pathname: ctx.pathname,
    ssr: env.ssr
  });
  if (paramsAndPropsRes === 0) {
    throw new AstroError({
      ...AstroErrorData.NoMatchingStaticPathFound,
      message: AstroErrorData.NoMatchingStaticPathFound.message(ctx.pathname),
      hint: ((_a3 = ctx.route) == null ? void 0 : _a3.component) ? AstroErrorData.NoMatchingStaticPathFound.hint([(_b = ctx.route) == null ? void 0 : _b.component]) : ""
    });
  }
  const [params, pageProps] = paramsAndPropsRes;
  const Component = mod.default;
  if (!Component)
    throw new Error(`Expected an exported Astro component but received typeof ${typeof Component}`);
  const result = createResult({
    adapterName: env.adapterName,
    links: ctx.links,
    styles: ctx.styles,
    logging: env.logging,
    markdown: env.markdown,
    mode: env.mode,
    origin: ctx.origin,
    params,
    props: pageProps,
    pathname: ctx.pathname,
    propagation: ctx.propagation,
    resolve: env.resolve,
    renderers: env.renderers,
    request: ctx.request,
    site: env.site,
    scripts: ctx.scripts,
    ssr: env.ssr,
    status: ctx.status ?? 200
  });
  if (typeof mod.components === "object") {
    Object.assign(pageProps, { components: mod.components });
  }
  const response = await renderPage$1(
    result,
    Component,
    pageProps,
    null,
    env.streaming,
    ctx.route
  );
  if (result.cookies) {
    attachToResponse(response, result.cookies);
  }
  return response;
}
var clientAddressSymbol = Symbol.for("astro.clientAddress");
function createAPIContext({
  request,
  params,
  site,
  props,
  adapterName
}) {
  return {
    cookies: new AstroCookies(request),
    request,
    params,
    site: site ? new URL(site) : void 0,
    generator: `Astro v${ASTRO_VERSION}`,
    props,
    redirect(path, status) {
      return new Response(null, {
        status: status || 302,
        headers: {
          Location: path
        }
      });
    },
    url: new URL(request.url),
    get clientAddress() {
      if (!(clientAddressSymbol in request)) {
        if (adapterName) {
          throw new AstroError({
            ...AstroErrorData.ClientAddressNotAvailable,
            message: AstroErrorData.ClientAddressNotAvailable.message(adapterName)
          });
        } else {
          throw new AstroError(AstroErrorData.StaticClientAddressNotAvailable);
        }
      }
      return Reflect.get(request, clientAddressSymbol);
    }
  };
}
async function call(mod, env, ctx) {
  var _a3, _b;
  const paramsAndPropsResp = await getParamsAndProps({
    mod,
    route: ctx.route,
    routeCache: env.routeCache,
    pathname: ctx.pathname,
    logging: env.logging,
    ssr: env.ssr
  });
  if (paramsAndPropsResp === GetParamsAndPropsError.NoMatchingStaticPath) {
    throw new AstroError({
      ...AstroErrorData.NoMatchingStaticPathFound,
      message: AstroErrorData.NoMatchingStaticPathFound.message(ctx.pathname),
      hint: ((_a3 = ctx.route) == null ? void 0 : _a3.component) ? AstroErrorData.NoMatchingStaticPathFound.hint([(_b = ctx.route) == null ? void 0 : _b.component]) : ""
    });
  }
  const [params, props] = paramsAndPropsResp;
  const context = createAPIContext({
    request: ctx.request,
    params,
    props,
    site: env.site,
    adapterName: env.adapterName
  });
  const response = await renderEndpoint(mod, context, env.ssr);
  if (response instanceof Response) {
    attachToResponse(response, context.cookies);
    return {
      type: "response",
      response
    };
  }
  return {
    type: "simple",
    body: response.body,
    encoding: response.encoding,
    cookies: context.cookies
  };
}
var lastMessage;
var lastMessageCount = 1;
var consoleLogDestination = {
  write(event) {
    let dest = console.error;
    if (levels[event.level] < levels["error"]) {
      dest = console.log;
    }
    function getPrefix() {
      let prefix = "";
      let type = event.type;
      if (type) {
        prefix += dim(dateTimeFormat.format(new Date()) + " ");
        if (event.level === "info") {
          type = bold(cyan(`[${type}]`));
        } else if (event.level === "warn") {
          type = bold(yellow(`[${type}]`));
        } else if (event.level === "error") {
          type = bold(red(`[${type}]`));
        }
        prefix += `${type} `;
      }
      return reset(prefix);
    }
    let message = event.message;
    if (message === lastMessage) {
      lastMessageCount++;
      message = `${message} ${yellow(`(x${lastMessageCount})`)}`;
    } else {
      lastMessage = message;
      lastMessageCount = 1;
    }
    const outMessage = getPrefix() + message;
    dest(outMessage);
    return true;
  }
};
function appendForwardSlash(path) {
  return path.endsWith("/") ? path : path + "/";
}
function prependForwardSlash(path) {
  return path[0] === "/" ? path : "/" + path;
}
function removeTrailingForwardSlash(path) {
  return path.endsWith("/") ? path.slice(0, path.length - 1) : path;
}
function removeLeadingForwardSlash(path) {
  return path.startsWith("/") ? path.substring(1) : path;
}
function trimSlashes(path) {
  return path.replace(/^\/|\/$/g, "");
}
function isString(path) {
  return typeof path === "string" || path instanceof String;
}
function joinPaths(...paths) {
  return paths.filter(isString).map(trimSlashes).join("/");
}
function createRenderContext(options) {
  const request = options.request;
  const url = new URL(request.url);
  const origin = options.origin ?? url.origin;
  const pathname = options.pathname ?? url.pathname;
  return {
    ...options,
    origin,
    pathname,
    url
  };
}
function createEnvironment(options) {
  return options;
}
function slash(path) {
  const isExtendedLengthPath = /^\\\\\?\\/.test(path);
  const hasNonAscii = /[^\u0000-\u0080]+/.test(path);
  if (isExtendedLengthPath || hasNonAscii) {
    return path;
  }
  return path.replace(/\\/g, "/");
}
function getRootPath(base) {
  return appendForwardSlash(new URL(base || "/", "http://localhost/").pathname);
}
function joinToRoot(href, base) {
  const rootPath = getRootPath(base);
  const normalizedHref = slash(href);
  return appendForwardSlash(rootPath) + removeLeadingForwardSlash(normalizedHref);
}
function createLinkStylesheetElement(href, base) {
  return {
    props: {
      rel: "stylesheet",
      href: joinToRoot(href, base)
    },
    children: ""
  };
}
function createLinkStylesheetElementSet(hrefs, base) {
  return new Set(hrefs.map((href) => createLinkStylesheetElement(href, base)));
}
function createModuleScriptElement(script, base) {
  if (script.type === "external") {
    return createModuleScriptElementWithSrc(script.value, base);
  } else {
    return {
      props: {
        type: "module"
      },
      children: script.value
    };
  }
}
function createModuleScriptElementWithSrc(src, site) {
  return {
    props: {
      type: "module",
      src: joinToRoot(src, site)
    },
    children: ""
  };
}
function matchRoute(pathname, manifest) {
  return manifest.routes.find((route) => route.pattern.test(decodeURI(pathname)));
}
function matchAssets(route, assets) {
  for (const asset of assets) {
    if (!asset.endsWith(".html"))
      continue;
    if (route.pattern.test(asset)) {
      return asset;
    }
    if (route.pattern.test(asset.replace(/index\.html$/, ""))) {
      return asset;
    }
  }
}
function lexer(str) {
  var tokens = [];
  var i = 0;
  while (i < str.length) {
    var char = str[i];
    if (char === "*" || char === "+" || char === "?") {
      tokens.push({ type: "MODIFIER", index: i, value: str[i++] });
      continue;
    }
    if (char === "\\") {
      tokens.push({ type: "ESCAPED_CHAR", index: i++, value: str[i++] });
      continue;
    }
    if (char === "{") {
      tokens.push({ type: "OPEN", index: i, value: str[i++] });
      continue;
    }
    if (char === "}") {
      tokens.push({ type: "CLOSE", index: i, value: str[i++] });
      continue;
    }
    if (char === ":") {
      var name = "";
      var j = i + 1;
      while (j < str.length) {
        var code = str.charCodeAt(j);
        if (code >= 48 && code <= 57 || code >= 65 && code <= 90 || code >= 97 && code <= 122 || code === 95) {
          name += str[j++];
          continue;
        }
        break;
      }
      if (!name)
        throw new TypeError("Missing parameter name at ".concat(i));
      tokens.push({ type: "NAME", index: i, value: name });
      i = j;
      continue;
    }
    if (char === "(") {
      var count = 1;
      var pattern = "";
      var j = i + 1;
      if (str[j] === "?") {
        throw new TypeError('Pattern cannot start with "?" at '.concat(j));
      }
      while (j < str.length) {
        if (str[j] === "\\") {
          pattern += str[j++] + str[j++];
          continue;
        }
        if (str[j] === ")") {
          count--;
          if (count === 0) {
            j++;
            break;
          }
        } else if (str[j] === "(") {
          count++;
          if (str[j + 1] !== "?") {
            throw new TypeError("Capturing groups are not allowed at ".concat(j));
          }
        }
        pattern += str[j++];
      }
      if (count)
        throw new TypeError("Unbalanced pattern at ".concat(i));
      if (!pattern)
        throw new TypeError("Missing pattern at ".concat(i));
      tokens.push({ type: "PATTERN", index: i, value: pattern });
      i = j;
      continue;
    }
    tokens.push({ type: "CHAR", index: i, value: str[i++] });
  }
  tokens.push({ type: "END", index: i, value: "" });
  return tokens;
}
function parse(str, options) {
  if (options === void 0) {
    options = {};
  }
  var tokens = lexer(str);
  var _a3 = options.prefixes, prefixes = _a3 === void 0 ? "./" : _a3;
  var defaultPattern = "[^".concat(escapeString(options.delimiter || "/#?"), "]+?");
  var result = [];
  var key = 0;
  var i = 0;
  var path = "";
  var tryConsume = function(type) {
    if (i < tokens.length && tokens[i].type === type)
      return tokens[i++].value;
  };
  var mustConsume = function(type) {
    var value2 = tryConsume(type);
    if (value2 !== void 0)
      return value2;
    var _a4 = tokens[i], nextType = _a4.type, index = _a4.index;
    throw new TypeError("Unexpected ".concat(nextType, " at ").concat(index, ", expected ").concat(type));
  };
  var consumeText = function() {
    var result2 = "";
    var value2;
    while (value2 = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR")) {
      result2 += value2;
    }
    return result2;
  };
  while (i < tokens.length) {
    var char = tryConsume("CHAR");
    var name = tryConsume("NAME");
    var pattern = tryConsume("PATTERN");
    if (name || pattern) {
      var prefix = char || "";
      if (prefixes.indexOf(prefix) === -1) {
        path += prefix;
        prefix = "";
      }
      if (path) {
        result.push(path);
        path = "";
      }
      result.push({
        name: name || key++,
        prefix,
        suffix: "",
        pattern: pattern || defaultPattern,
        modifier: tryConsume("MODIFIER") || ""
      });
      continue;
    }
    var value = char || tryConsume("ESCAPED_CHAR");
    if (value) {
      path += value;
      continue;
    }
    if (path) {
      result.push(path);
      path = "";
    }
    var open = tryConsume("OPEN");
    if (open) {
      var prefix = consumeText();
      var name_1 = tryConsume("NAME") || "";
      var pattern_1 = tryConsume("PATTERN") || "";
      var suffix = consumeText();
      mustConsume("CLOSE");
      result.push({
        name: name_1 || (pattern_1 ? key++ : ""),
        pattern: name_1 && !pattern_1 ? defaultPattern : pattern_1,
        prefix,
        suffix,
        modifier: tryConsume("MODIFIER") || ""
      });
      continue;
    }
    mustConsume("END");
  }
  return result;
}
function compile(str, options) {
  return tokensToFunction(parse(str, options), options);
}
function tokensToFunction(tokens, options) {
  if (options === void 0) {
    options = {};
  }
  var reFlags = flags(options);
  var _a3 = options.encode, encode2 = _a3 === void 0 ? function(x) {
    return x;
  } : _a3, _b = options.validate, validate = _b === void 0 ? true : _b;
  var matches = tokens.map(function(token) {
    if (typeof token === "object") {
      return new RegExp("^(?:".concat(token.pattern, ")$"), reFlags);
    }
  });
  return function(data) {
    var path = "";
    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i];
      if (typeof token === "string") {
        path += token;
        continue;
      }
      var value = data ? data[token.name] : void 0;
      var optional = token.modifier === "?" || token.modifier === "*";
      var repeat = token.modifier === "*" || token.modifier === "+";
      if (Array.isArray(value)) {
        if (!repeat) {
          throw new TypeError('Expected "'.concat(token.name, '" to not repeat, but got an array'));
        }
        if (value.length === 0) {
          if (optional)
            continue;
          throw new TypeError('Expected "'.concat(token.name, '" to not be empty'));
        }
        for (var j = 0; j < value.length; j++) {
          var segment = encode2(value[j], token);
          if (validate && !matches[i].test(segment)) {
            throw new TypeError('Expected all "'.concat(token.name, '" to match "').concat(token.pattern, '", but got "').concat(segment, '"'));
          }
          path += token.prefix + segment + token.suffix;
        }
        continue;
      }
      if (typeof value === "string" || typeof value === "number") {
        var segment = encode2(String(value), token);
        if (validate && !matches[i].test(segment)) {
          throw new TypeError('Expected "'.concat(token.name, '" to match "').concat(token.pattern, '", but got "').concat(segment, '"'));
        }
        path += token.prefix + segment + token.suffix;
        continue;
      }
      if (optional)
        continue;
      var typeOfMessage = repeat ? "an array" : "a string";
      throw new TypeError('Expected "'.concat(token.name, '" to be ').concat(typeOfMessage));
    }
    return path;
  };
}
function escapeString(str) {
  return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
function flags(options) {
  return options && options.sensitive ? "" : "i";
}
function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return toPath;
}
function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments
  };
}
function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const propagation = new Map(serializedManifest.propagation);
  return {
    ...serializedManifest,
    assets,
    propagation,
    routes
  };
}
var __accessCheck = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet = (obj, member, getter) => {
  __accessCheck(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet = (obj, member, value, setter) => {
  __accessCheck(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};
var __privateMethod = (obj, member, method) => {
  __accessCheck(obj, member, "access private method");
  return method;
};
var _env;
var _manifest;
var _manifestData;
var _routeDataToRouteInfo;
var _encoder;
var _logging;
var _base;
var _baseWithoutTrailingSlash;
var _renderPage;
var renderPage_fn;
var _callEndpoint;
var callEndpoint_fn;
var App = class {
  constructor(manifest, streaming = true) {
    __privateAdd(this, _renderPage);
    __privateAdd(this, _callEndpoint);
    __privateAdd(this, _env, void 0);
    __privateAdd(this, _manifest, void 0);
    __privateAdd(this, _manifestData, void 0);
    __privateAdd(this, _routeDataToRouteInfo, void 0);
    __privateAdd(this, _encoder, new TextEncoder());
    __privateAdd(this, _logging, {
      dest: consoleLogDestination,
      level: "info"
    });
    __privateAdd(this, _base, void 0);
    __privateAdd(this, _baseWithoutTrailingSlash, void 0);
    __privateSet(this, _manifest, manifest);
    __privateSet(this, _manifestData, {
      routes: manifest.routes.map((route) => route.routeData)
    });
    __privateSet(this, _routeDataToRouteInfo, new Map(manifest.routes.map((route) => [route.routeData, route])));
    __privateSet(this, _env, createEnvironment({
      adapterName: manifest.adapterName,
      logging: __privateGet(this, _logging),
      markdown: manifest.markdown,
      mode: "production",
      renderers: manifest.renderers,
      async resolve(specifier) {
        if (!(specifier in manifest.entryModules)) {
          throw new Error(`Unable to resolve [${specifier}]`);
        }
        const bundlePath = manifest.entryModules[specifier];
        switch (true) {
          case bundlePath.startsWith("data:"):
          case bundlePath.length === 0: {
            return bundlePath;
          }
          default: {
            return prependForwardSlash(joinPaths(manifest.base, bundlePath));
          }
        }
      },
      routeCache: new RouteCache(__privateGet(this, _logging)),
      site: __privateGet(this, _manifest).site,
      ssr: true,
      streaming
    }));
    __privateSet(this, _base, __privateGet(this, _manifest).base || "/");
    __privateSet(this, _baseWithoutTrailingSlash, removeTrailingForwardSlash(__privateGet(this, _base)));
  }
  removeBase(pathname) {
    if (pathname.startsWith(__privateGet(this, _base))) {
      return pathname.slice(__privateGet(this, _baseWithoutTrailingSlash).length + 1);
    }
    return pathname;
  }
  match(request, { matchNotFound = false } = {}) {
    const url = new URL(request.url);
    if (__privateGet(this, _manifest).assets.has(url.pathname)) {
      return void 0;
    }
    let pathname = "/" + this.removeBase(url.pathname);
    let routeData = matchRoute(pathname, __privateGet(this, _manifestData));
    if (routeData) {
      const asset = matchAssets(routeData, __privateGet(this, _manifest).assets);
      if (asset)
        return void 0;
      return routeData;
    } else if (matchNotFound) {
      return matchRoute("/404", __privateGet(this, _manifestData));
    } else {
      return void 0;
    }
  }
  async render(request, routeData) {
    let defaultStatus = 200;
    if (!routeData) {
      routeData = this.match(request);
      if (!routeData) {
        defaultStatus = 404;
        routeData = this.match(request, { matchNotFound: true });
      }
      if (!routeData) {
        return new Response(null, {
          status: 404,
          statusText: "Not found"
        });
      }
    }
    if (routeData.route === "/404") {
      defaultStatus = 404;
    }
    let mod = __privateGet(this, _manifest).pageMap.get(routeData.component);
    if (routeData.type === "page") {
      let response = await __privateMethod(this, _renderPage, renderPage_fn).call(this, request, routeData, mod, defaultStatus);
      if (response.status === 500) {
        const fiveHundredRouteData = matchRoute("/500", __privateGet(this, _manifestData));
        if (fiveHundredRouteData) {
          mod = __privateGet(this, _manifest).pageMap.get(fiveHundredRouteData.component);
          try {
            let fiveHundredResponse = await __privateMethod(this, _renderPage, renderPage_fn).call(this, request, fiveHundredRouteData, mod, 500);
            return fiveHundredResponse;
          } catch {
          }
        }
      }
      return response;
    } else if (routeData.type === "endpoint") {
      return __privateMethod(this, _callEndpoint, callEndpoint_fn).call(this, request, routeData, mod, defaultStatus);
    } else {
      throw new Error(`Unsupported route type [${routeData.type}].`);
    }
  }
  setCookieHeaders(response) {
    return getSetCookiesFromResponse(response);
  }
};
_env = /* @__PURE__ */ new WeakMap();
_manifest = /* @__PURE__ */ new WeakMap();
_manifestData = /* @__PURE__ */ new WeakMap();
_routeDataToRouteInfo = /* @__PURE__ */ new WeakMap();
_encoder = /* @__PURE__ */ new WeakMap();
_logging = /* @__PURE__ */ new WeakMap();
_base = /* @__PURE__ */ new WeakMap();
_baseWithoutTrailingSlash = /* @__PURE__ */ new WeakMap();
_renderPage = /* @__PURE__ */ new WeakSet();
renderPage_fn = async function(request, routeData, mod, status = 200) {
  const url = new URL(request.url);
  const pathname = "/" + this.removeBase(url.pathname);
  const info = __privateGet(this, _routeDataToRouteInfo).get(routeData);
  const links = createLinkStylesheetElementSet(info.links);
  let scripts = /* @__PURE__ */ new Set();
  for (const script of info.scripts) {
    if ("stage" in script) {
      if (script.stage === "head-inline") {
        scripts.add({
          props: {},
          children: script.children
        });
      }
    } else {
      scripts.add(createModuleScriptElement(script));
    }
  }
  try {
    const ctx = createRenderContext({
      request,
      origin: url.origin,
      pathname,
      propagation: __privateGet(this, _manifest).propagation,
      scripts,
      links,
      route: routeData,
      status
    });
    const response = await renderPage(mod, ctx, __privateGet(this, _env));
    return response;
  } catch (err) {
    error(__privateGet(this, _logging), "ssr", err.stack || err.message || String(err));
    return new Response(null, {
      status: 500,
      statusText: "Internal server error"
    });
  }
};
_callEndpoint = /* @__PURE__ */ new WeakSet();
callEndpoint_fn = async function(request, routeData, mod, status = 200) {
  const url = new URL(request.url);
  const pathname = "/" + this.removeBase(url.pathname);
  const handler = mod;
  const ctx = createRenderContext({
    request,
    origin: url.origin,
    pathname,
    route: routeData,
    status
  });
  const result = await call(handler, __privateGet(this, _env), ctx);
  if (result.type === "response") {
    if (result.response.headers.get("X-Astro-Response") === "Not-Found") {
      const fourOhFourRequest = new Request(new URL("/404", request.url));
      const fourOhFourRouteData = this.match(fourOhFourRequest);
      if (fourOhFourRouteData) {
        return this.render(fourOhFourRequest, fourOhFourRouteData);
      }
    }
    return result.response;
  } else {
    const body = result.body;
    const headers = new Headers();
    const mimeType = mime.getType(url.pathname);
    if (mimeType) {
      headers.set("Content-Type", `${mimeType};charset=utf-8`);
    } else {
      headers.set("Content-Type", "text/plain;charset=utf-8");
    }
    const bytes = __privateGet(this, _encoder).encode(body);
    headers.set("Content-Length", bytes.byteLength.toString());
    const response = new Response(bytes, {
      status: 200,
      headers
    });
    attachToResponse(response, result.cookies);
    return response;
  }
};
var slotName = (str) => str.trim().replace(/[-_]([a-z])/g, (_, w) => w.toUpperCase());
async function check(Component, props, { default: children = null, ...slotted } = {}) {
  if (typeof Component !== "function")
    return false;
  const slots = {};
  for (const [key, value] of Object.entries(slotted)) {
    const name = slotName(key);
    slots[name] = value;
  }
  try {
    const result = await Component({ ...props, ...slots, children });
    return result[AstroJSX];
  } catch (e) {
  }
  return false;
}
async function renderToStaticMarkup(Component, props = {}, { default: children = null, ...slotted } = {}) {
  const slots = {};
  for (const [key, value] of Object.entries(slotted)) {
    const name = slotName(key);
    slots[name] = value;
  }
  const { result } = this;
  const html = await renderJSX(result, createVNode(Component, { ...props, ...slots, children }));
  return { html };
}
var server_default = {
  check,
  renderToStaticMarkup
};

// node_modules/@astrojs/deno/dist/__deno_imports.js
import { Server } from "https://deno.land/std@0.177.0/http/server.ts";
import { serveFile } from "https://deno.land/std@0.177.0/http/file_server.ts";
import { fromFileUrl } from "https://deno.land/std@0.177.0/path/mod.ts";

// dist/server/chunks/pages/all.14c7573f.mjs
var $$Astro$k = createAstro();
var $$AstroFooter = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$k, $$props, $$slots);
  Astro2.self = $$AstroFooter;
  let currentYear = new Date().getFullYear();
  return renderTemplate`${maybeRenderHead($$result)}<footer class="astro-IKADBBCB">
	<div class="footerWrapper astro-IKADBBCB">
		<div class="footerContainer footerContainerLogo astro-IKADBBCB">
            <h3 class="astro-IKADBBCB">© ${currentYear}</h3>
            <img src="assets/images/logowhite.svg" class="astro-IKADBBCB">
        </div>
		<div class="footerContainer footerContainerNav astro-IKADBBCB">
            <h4 class="astro-IKADBBCB"><a href="#dienstleistungen" class="astro-IKADBBCB">Dienstleistungen</a></h4>
            <h4 class="astro-IKADBBCB"><a href="#referenzen" class="astro-IKADBBCB">Referenzen</a></h4>
            <h4 class="astro-IKADBBCB"><a href="#zertifizierungen" class="astro-IKADBBCB">Zertifizierungen</a></h4>
            <h4 class="astro-IKADBBCB"><a href="#kontakt" class="astro-IKADBBCB">Kontakt</a></h4>
        </div>
		<div class="footerContainer astro-IKADBBCB"></div>
	</div>
</footer>`;
}, "D:/Arbeitt/KundenUndProjekte/Torge/pits/website/src/components/astroFooter.astro");
var $$Astro$j = createAstro();
var $$AstroNavbar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$j, $$props, $$slots);
  Astro2.self = $$AstroNavbar;
  return renderTemplate`${maybeRenderHead($$result)}<nav class="astro-Z3YDR7OK">
	<div class="logo-container astro-Z3YDR7OK">
		<a class="logoWrapper astro-Z3YDR7OK" href="/">
		<img src="/assets/images/logo.svg" class="astro-Z3YDR7OK">
		</a>
	</div>
	<div class="desktop-menu astro-Z3YDR7OK">
		<ul class="astro-Z3YDR7OK">
			<li magic-hover magic-hover__square class="astro-Z3YDR7OK"><a href="#Dienstleistungen" class="astro-Z3YDR7OK">Dienstleistungen</a></li>
			<li magic-hover magic-hover__square class="astro-Z3YDR7OK"><a href="#Referenzen" class="astro-Z3YDR7OK">Referenzen</a></li>
			<li magic-hover magic-hover__square class="astro-Z3YDR7OK"><a href="#Zertifizierungen" class="astro-Z3YDR7OK">Zertifizierungen</a></li>
			<li magic-hover magic-hover__square class="astro-Z3YDR7OK"><a href="#Kontakt" class="astro-Z3YDR7OK">Kontakt</a></li>
			<li magic-hover magic-hover__square id="toolbutton" class="astro-Z3YDR7OK"><a class="popupLink astro-Z3YDR7OK" data-popup="#popup-tools" href="#popup-tools">Werkzeuge</a></li>
		</ul>
	</div>
	<div class="mobile-menu-burger astro-Z3YDR7OK"></div>
</nav>`;
}, "D:/Arbeitt/KundenUndProjekte/Torge/pits/website/src/components/astroNavbar.astro");
var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(raw || cooked.slice()) }));
var _a$12;
var $$Astro$i = createAstro();
var $$AstroCursor = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$i, $$props, $$slots);
  Astro2.self = $$AstroCursor;
  return renderTemplate(_a$12 || (_a$12 = __template$1(['<!-- Magic Cursor --><!-- <script is:inline src="./assets/scripts/cursor.js"><\/script> -->'])));
}, "D:/Arbeitt/KundenUndProjekte/Torge/pits/website/src/components/global/astroCursor.astro");
var $$Astro$h = createAstro();
var $$AstroCallAndNavigation = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$h, $$props, $$slots);
  Astro2.self = $$AstroCallAndNavigation;
  return renderTemplate`
`;
}, "D:/Arbeitt/KundenUndProjekte/Torge/pits/website/src/components/global/astroCallAndNavigation.astro");
var $$Astro$g = createAstro();
var $$AstroGlobal = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$g, $$props, $$slots);
  Astro2.self = $$AstroGlobal;
  return renderTemplate`<!-- Magic Cursor -->${renderComponent($$result, "MagicCursor", $$AstroCursor, {})}

<!-- Call & Naviation -->
${renderComponent($$result, "CallAndNav", $$AstroCallAndNavigation, {})}`;
}, "D:/Arbeitt/KundenUndProjekte/Torge/pits/website/src/components/astroGlobal.astro");
var $$Astro$f = createAstro();
var $$AstroPopup = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$AstroPopup;
  const { title, popupID, debug: debug2 } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<div${addAttribute("popup popup__closer debug__" + debug2 + " astro-NATMJ44V", "class")}${addAttribute(popupID, "id")}${addAttribute("#" + popupID, "data-popup-close")}>
	<div class="popup__content astro-NATMJ44V">
		<div class="popup__header astro-NATMJ44V">
			<div class="popup__close-wrapper astro-NATMJ44V">
				<button class="popup__close neuInside astro-NATMJ44V"${addAttribute("#" + popupID, "data-popup-close")}>
					<img class="popup__close-icon astro-NATMJ44V" src="assets/images/close.png">
				</button>
			</div>
			<h2 class="popup__title astro-NATMJ44V">${title}</h2>
			<div class="popup__body astro-NATMJ44V">
				${renderSlot($$result, $$slots["default"])}
			</div>
		</div>
	</div>
	<!-- <div class="popup__background popup__closer" data-popup-close={"#" + popupID}></div> -->
</div>`;
}, "D:/Arbeitt/KundenUndProjekte/Torge/pits/website/src/components/subcomponents/astroPopup.astro");
var $$Astro$e = createAstro();
var $$AstroPopups = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$AstroPopups;
  return renderTemplate`<!-- Toolbox -->${renderComponent($$result, "Popup", $$AstroPopup, { "title": "Werkzeuge & Bewertungen", "debug": "false", "popupID": "popup-tools", "class": "astro-XEHCWWPH" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead($$result2)}<div class="toolbox__section astro-XEHCWWPH">
        <a href="#" class="astro-XEHCWWPH">
            <h3 class="astro-XEHCWWPH">Helpdesk Ticket erstellen</h3>
        </a>
	</div><div class="toolbox__section astro-XEHCWWPH">
		<a href="https://mobile.pcvisit.de/v1/hosted/jumplink?func=download&productrole=guestSetup&gateway=lb3.pcvisit.de&companyid=7504171874" class="astro-XEHCWWPH">
			<h3 class="astro-XEHCWWPH">PCVISIT Kundenmodul herunterladen</h3>
		</a>
	</div><div class="toolbox__section astro-XEHCWWPH">
		<a href="https://www.provenexpert.com/petersen-it-services/?utm_source=Widget&utm_medium=Widget&utm_campaign=Widget" class="astro-XEHCWWPH">
			<h3 class="astro-XEHCWWPH">Kundenbewertung abgeben ❤</h3>
		</a>
	</div>` })}

<!-- Service Popups -->

${renderComponent($$result, "Popup", $$AstroPopup, { "title": "Zertifizierte Datenl\xF6schung", "debug": "false", "popupID": "popup-0", "class": "astro-XEHCWWPH" }, { "default": ($$result2) => renderTemplate`<div class="astro-XEHCWWPH">
		<p class="astro-XEHCWWPH">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod nunc in nisl</p>
	</div>` })}

${renderComponent($$result, "Popup", $$AstroPopup, { "title": "L\xF6sung f\xFCr Sicherheitssoftware", "debug": "false", "popupID": "popup-1", "class": "astro-XEHCWWPH" }, { "default": ($$result2) => renderTemplate`<div class="astro-XEHCWWPH">
		<p class="astro-XEHCWWPH">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod nunc in nisl</p>
	</div>` })}

${renderComponent($$result, "Popup", $$AstroPopup, { "title": "Email-Security", "debug": "false", "popupID": "popup-2", "class": "astro-XEHCWWPH" }, { "default": ($$result2) => renderTemplate`<div class="astro-XEHCWWPH">
		<p class="astro-XEHCWWPH">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod nunc in nisl</p>
	</div>` })}

${renderComponent($$result, "Popup", $$AstroPopup, { "title": "Domain & DNS", "debug": "false", "popupID": "popup-3", "class": "astro-XEHCWWPH" }, { "default": ($$result2) => renderTemplate`<div class="astro-XEHCWWPH">
		<p class="astro-XEHCWWPH">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod nunc in nisl</p>
	</div>` })}

${renderComponent($$result, "Popup", $$AstroPopup, { "title": "Webhosting", "debug": "false", "popupID": "popup-4", "class": "astro-XEHCWWPH" }, { "default": ($$result2) => renderTemplate`<div class="astro-XEHCWWPH">
		<p class="astro-XEHCWWPH">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod nunc in nisl</p>
	</div>` })}

${renderComponent($$result, "Popup", $$AstroPopup, { "title": "Firewalll\xF6sungen", "debug": "false", "popupID": "popup-5", "class": "astro-XEHCWWPH" }, { "default": ($$result2) => renderTemplate`<div class="astro-XEHCWWPH">
		<p class="astro-XEHCWWPH">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod nunc in nisl</p>
	</div>` })}

${renderComponent($$result, "Popup", $$AstroPopup, { "title": "Internetanschl\xFCsse", "debug": "false", "popupID": "popup-6", "class": "astro-XEHCWWPH" }, { "default": ($$result2) => renderTemplate`<div class="astro-XEHCWWPH">
		<p class="astro-XEHCWWPH">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod nunc in nisl</p>
	</div>` })}

${renderComponent($$result, "Popup", $$AstroPopup, { "title": "Hardware & Peripheripherie", "debug": "false", "popupID": "popup-7", "class": "astro-XEHCWWPH" }, { "default": ($$result2) => renderTemplate`<div class="astro-XEHCWWPH">
		<p class="astro-XEHCWWPH">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod nunc in nisl</p>
	</div>` })}

${renderComponent($$result, "Popup", $$AstroPopup, { "title": "Terra-Gaming", "debug": "false", "popupID": "popup-8", "class": "astro-XEHCWWPH" }, { "default": ($$result2) => renderTemplate`<div class="astro-XEHCWWPH">
		<p class="astro-XEHCWWPH">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod nunc in nisl</p>
	</div>` })}

${renderComponent($$result, "Popup", $$AstroPopup, { "title": "Wortmann Telecom", "debug": "false", "popupID": "popup-9", "class": "astro-XEHCWWPH" }, { "default": ($$result2) => renderTemplate`<div class="astro-XEHCWWPH">
		<p class="astro-XEHCWWPH">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod nunc in nisl</p>
	</div>` })}

${renderComponent($$result, "Popup", $$AstroPopup, { "title": "ecoDMS Dokumentenmanagement", "debug": "false", "popupID": "popup-10", "class": "astro-XEHCWWPH" }, { "default": ($$result2) => renderTemplate`<div class="astro-XEHCWWPH">
		<p class="astro-XEHCWWPH">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod nunc in nisl</p>
	</div>` })}

${renderComponent($$result, "Popup", $$AstroPopup, { "title": "Telefoniel\xF6sungen", "debug": "false", "popupID": "popup-11", "class": "astro-XEHCWWPH" }, { "default": ($$result2) => renderTemplate`<div class="astro-XEHCWWPH">
		<p class="astro-XEHCWWPH">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod nunc in nisl</p>
	</div>` })}

${renderComponent($$result, "Popup", $$AstroPopup, { "title": "Netzwerkl\xF6sungen", "debug": "false", "popupID": "popup-12", "class": "astro-XEHCWWPH" }, { "default": ($$result2) => renderTemplate`<div class="astro-XEHCWWPH">
		<p class="astro-XEHCWWPH">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod nunc in nisl</p>
	</div>` })}

${renderComponent($$result, "Popup", $$AstroPopup, { "title": "Microsoft Office 365 L\xF6sungen", "debug": "false", "popupID": "popup-13", "class": "astro-XEHCWWPH" }, { "default": ($$result2) => renderTemplate`<div class="astro-XEHCWWPH">
		<p class="astro-XEHCWWPH">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod nunc in nisl</p>
	</div>` })}

${renderComponent($$result, "Popup", $$AstroPopup, { "title": "Kommunikationsl\xF6sungen", "debug": "false", "popupID": "popup-14", "class": "astro-XEHCWWPH" }, { "default": ($$result2) => renderTemplate`<div class="astro-XEHCWWPH">
		<p class="astro-XEHCWWPH">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod nunc in nisl</p>
	</div>` })}`;
}, "D:/Arbeitt/KundenUndProjekte/Torge/pits/website/src/components/astroPopups.astro");
var $$Astro$d = createAstro();
var $$AstroPreloader = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$AstroPreloader;
  return renderTemplate`${maybeRenderHead($$result)}<div id="preloader" class="preloader-container astro-N6EWI5YW">
	<div id="preloader-ring" class="loader-ring astro-N6EWI5YW">
		<div class="loader-ring-light astro-N6EWI5YW"></div>
		<div class="loader-ring-track astro-N6EWI5YW"></div>
	</div>
</div>`;
}, "D:/Arbeitt/KundenUndProjekte/Torge/pits/website/src/components/global/astroPreloader.astro");
var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a2;
var $$Astro$c = createAstro();
var $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate(_a2 || (_a2 = __template(['<html lang="de" class="astro-SCKKX6R4">\n	<head>\n		<meta charset="UTF-8">\n		<meta name="viewport" content="width=device-width">\n		<link rel="icon" type="image/svg+xml" href="/favicon.svg">\n		<meta name="generator"', ">\n		<title>", ' - Petersen IT Services</title>\n		<link rel="stylesheet" href="/assets/styles/fonts.css">\n		<link rel="stylesheet" href="/assets/styles/style.css">\n	', '</head>\n	<body class="smooth-scroll astro-SCKKX6R4">\n		<div id="scroll-container" class="astro-SCKKX6R4">\n			', "\n			", "\n			", "\n			", "\n		</div>\n		", "\n		", '\n	<script src="/assets/scripts/framework.js"><\/script>\n	<script src="/assets/scripts/script.js"><\/script>\n</body>\n</html>'])), addAttribute(Astro2.generator, "content"), title, renderHead($$result), renderComponent($$result, "Navbar", $$AstroNavbar, { "class": "astro-SCKKX6R4" }), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$AstroFooter, { "client:idle": true, "client:component-hydration": "idle", "client:component-path": "D:/Arbeitt/KundenUndProjekte/Torge/pits/website/src/components/astroFooter.astro", "client:component-export": "default", "class": "astro-SCKKX6R4" }), renderComponent($$result, "Global", $$AstroGlobal, { "class": "astro-SCKKX6R4" }), renderComponent($$result, "Preloader", $$AstroPreloader, { "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/Arbeitt/KundenUndProjekte/Torge/pits/website/src/components/global/astroPreloader.astro", "client:component-export": "default", "class": "astro-SCKKX6R4" }), renderComponent($$result, "Popups", $$AstroPopups, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "D:/Arbeitt/KundenUndProjekte/Torge/pits/website/src/components/astroPopups.astro", "client:component-export": "default", "class": "astro-SCKKX6R4" }));
}, "D:/Arbeitt/KundenUndProjekte/Torge/pits/website/src/layouts/Layout.astro");
var $$Astro$b = createAstro();
var $$AstroHeader = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$AstroHeader;
  const { title, subtitle, image } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<div class="headerContainer astro-6ZX7WMPJ">
	<div class="header astro-6ZX7WMPJ">
		<h1 class="astro-6ZX7WMPJ">${title}</h1>
		<h4 class="astro-6ZX7WMPJ">${subtitle}</h4>
	</div>
	<div class="headerImage astro-6ZX7WMPJ">
		<canvas id="headerCanvas" class="astro-6ZX7WMPJ"></canvas>
	</div>
</div>
<div class="blob1 blur astro-6ZX7WMPJ"></div>
<div class="blob2 blur astro-6ZX7WMPJ"></div>
<div class="blob3 blur astro-6ZX7WMPJ"></div>
<!-- <div class="blob4 blur"></div> -->`;
}, "D:/Arbeitt/KundenUndProjekte/Torge/pits/website/src/components/astroHeader.astro");
var $$Astro$a = createAstro();
var $$AstroAbout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$AstroAbout;
  const { title, name, position, description, image, signature, ID } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<section class="AboutSection astro-PWD4TRD5"${addAttribute(ID, "id")}>
	<div class="aboutWrapper astro-PWD4TRD5">
		<div class="aboutContainer imageContainer astro-PWD4TRD5">
			<img${addAttribute(image, "src")} alt="image" class="astro-PWD4TRD5">
		</div>
		<div class="aboutContainer astro-PWD4TRD5">
			<!-- <h2>{title}</h2> -->
			<h3 class="astro-PWD4TRD5">${name}</h3>
			<h4 class="astro-PWD4TRD5">${position}</h4>
			<p class="astro-PWD4TRD5">${description}</p>
			<img class="signature astro-PWD4TRD5"${addAttribute(signature, "src")}>
		</div>
	</div>
	<div class="blob1 blur astro-PWD4TRD5"></div>
	<div class="blob2 blur astro-PWD4TRD5"></div>
	<div class="blob3 blur astro-PWD4TRD5"></div>
	<div class="blob4 blur astro-PWD4TRD5"></div>
</section>`;
}, "D:/Arbeitt/KundenUndProjekte/Torge/pits/website/src/components/astroAbout.astro");
var $$Astro$9 = createAstro();
var $$AstroService = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$AstroService;
  const {
    title,
    subtitle,
    shorttext,
    image,
    popup,
    popupID,
    providerNames,
    providerLinks,
    providerImages
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<div class="neomorphic card astro-SQF5V2H6">
	<h2 class="pl astro-SQF5V2H6">${title}</h2>
	<p class="pl astro-SQF5V2H6">${subtitle}</p>
</div>
<div class="Service m-calc horizontal-item astro-SQF5V2H6">
	<a class="popupLink astro-SQF5V2H6"${addAttribute("#" + popupID, "data-popup")}${addAttribute("#" + popupID, "href")}>
		<!-- <div class="top-bar"></div> -->
		<div class="header astro-SQF5V2H6">
			<!-- <h3 class="pl">{title}</h3> -->
			<p class="pl astro-SQF5V2H6">${shorttext}</p>
		</div>
		<div class="pl headerImage astro-SQF5V2H6">
			<img${addAttribute(image, "src")} class="astro-SQF5V2H6">
		</div>
		<button${addAttribute("pl btn__primary popup" + popup + " astro-SQF5V2H6", "class")}${addAttribute("#" + popupID, "data-popup")} role="button">Mehr Informationen</button>
	</a>
	<div class="providers astro-SQF5V2H6">
		${providerNames.map((name, index) => renderTemplate`<div class="providerContainer astro-SQF5V2H6">
					<div class="providerWrapper astro-SQF5V2H6">
						<div class="provider astro-SQF5V2H6">
							<a target="_blank"${addAttribute(providerLinks[index], "href")} class="astro-SQF5V2H6">
								<img${addAttribute(providerImages[index], "src")} class="astro-SQF5V2H6">
								<p class="astro-SQF5V2H6">${name}</p>
							</a>
						</div>
					</div>
				</div>`)}
	</div>
</div>`;
}, "D:/Arbeitt/KundenUndProjekte/Torge/pits/website/src/components/subcomponents/astroService.astro");
var $$Astro$8 = createAstro();
var $$AstroServices = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$AstroServices;
  const { title, subtitle, ID } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<section class="horizontal astro-O566EWV5"${addAttribute(ID, "id")}>
	<div class="pin-wrap astro-O566EWV5" id="pinThis-0">
		<div class="animation-wrap to-left astro-O566EWV5" id="animateThis-0">
			${renderComponent($$result, "Service", $$AstroService, { "title": "Zertifizierte Datenl\xF6schung", "subtitle": "Lorem ipsum dolor sit amet.", "shorttext": "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam. ", "popup": true, "popupID": "popup-0", "providerNames": ["Bitwarden", "AVM", "Nextcloud"], "providerLinks": [
    "https://bitwarden.com/de-DE/",
    "https://avm.de/",
    "https://nextcloud.com/de/"
  ], "providerImages": [
    "https://upload.wikimedia.org/wikipedia/commons/0/03/Bitwarden_Logo.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/AVM-Logo.png/800px-AVM-Logo.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Nextcloud_Logo.svg/141px-Nextcloud_Logo.svg.png"
  ], "class": "astro-O566EWV5" })}
			${renderComponent($$result, "Service", $$AstroService, { "title": "L\xF6sung f\xFCr Sicherheitssoftware", "subtitle": "Lorem ipsum dolor sit amet.", "shorttext": "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam. ", "popup": true, "popupID": "popup-1", "providerNames": ["Bitwarden", "AVM", "Nextcloud"], "providerLinks": [
    "https://bitwarden.com/de-DE/",
    "https://avm.de/",
    "https://nextcloud.com/de/"
  ], "providerImages": [
    "https://upload.wikimedia.org/wikipedia/commons/0/03/Bitwarden_Logo.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/AVM-Logo.png/800px-AVM-Logo.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Nextcloud_Logo.svg/141px-Nextcloud_Logo.svg.png"
  ], "class": "astro-O566EWV5" })}
			${renderComponent($$result, "Service", $$AstroService, { "title": "Email-Security", "subtitle": "Lorem ipsum dolor sit amet.", "shorttext": "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam. ", "popup": true, "popupID": "popup-2", "providerNames": ["Bitwarden", "AVM", "Nextcloud"], "providerLinks": [
    "https://bitwarden.com/de-DE/",
    "https://avm.de/",
    "https://nextcloud.com/de/"
  ], "providerImages": [
    "https://upload.wikimedia.org/wikipedia/commons/0/03/Bitwarden_Logo.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/AVM-Logo.png/800px-AVM-Logo.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Nextcloud_Logo.svg/141px-Nextcloud_Logo.svg.png"
  ], "class": "astro-O566EWV5" })}
			${renderComponent($$result, "Service", $$AstroService, { "title": "Domain & DNS", "subtitle": "Lorem ipsum dolor sit amet.", "shorttext": "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam. ", "popup": true, "popupID": "popup-3", "providerNames": ["Bitwarden", "AVM", "Nextcloud"], "providerLinks": [
    "https://bitwarden.com/de-DE/",
    "https://avm.de/",
    "https://nextcloud.com/de/"
  ], "providerImages": [
    "https://upload.wikimedia.org/wikipedia/commons/0/03/Bitwarden_Logo.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/AVM-Logo.png/800px-AVM-Logo.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Nextcloud_Logo.svg/141px-Nextcloud_Logo.svg.png"
  ], "class": "astro-O566EWV5" })}
			${renderComponent($$result, "Service", $$AstroService, { "title": "Webhosting", "subtitle": "Lorem ipsum dolor sit amet.", "shorttext": "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam. ", "popup": true, "popupID": "popup-4", "providerNames": ["Bitwarden", "AVM", "Nextcloud"], "providerLinks": [
    "https://bitwarden.com/de-DE/",
    "https://avm.de/",
    "https://nextcloud.com/de/"
  ], "providerImages": [
    "https://upload.wikimedia.org/wikipedia/commons/0/03/Bitwarden_Logo.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/AVM-Logo.png/800px-AVM-Logo.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Nextcloud_Logo.svg/141px-Nextcloud_Logo.svg.png"
  ], "class": "astro-O566EWV5" })}
			${renderComponent($$result, "Service", $$AstroService, { "title": "Firewalll\xF6sungen", "subtitle": "Lorem ipsum dolor sit amet.", "shorttext": "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam. ", "popup": true, "popupID": "popup-5", "providerNames": ["Bitwarden", "AVM", "Nextcloud"], "providerLinks": [
    "https://bitwarden.com/de-DE/",
    "https://avm.de/",
    "https://nextcloud.com/de/"
  ], "providerImages": [
    "https://upload.wikimedia.org/wikipedia/commons/0/03/Bitwarden_Logo.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/AVM-Logo.png/800px-AVM-Logo.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Nextcloud_Logo.svg/141px-Nextcloud_Logo.svg.png"
  ], "class": "astro-O566EWV5" })}
			${renderComponent($$result, "Service", $$AstroService, { "title": "Internetanschl\xFCsse", "subtitle": "Lorem ipsum dolor sit amet.", "shorttext": "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam. ", "popup": true, "popupID": "popup-6", "providerNames": ["Bitwarden", "AVM", "Nextcloud"], "providerLinks": [
    "https://bitwarden.com/de-DE/",
    "https://avm.de/",
    "https://nextcloud.com/de/"
  ], "providerImages": [
    "https://upload.wikimedia.org/wikipedia/commons/0/03/Bitwarden_Logo.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/AVM-Logo.png/800px-AVM-Logo.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Nextcloud_Logo.svg/141px-Nextcloud_Logo.svg.png"
  ], "class": "astro-O566EWV5" })}
			${renderComponent($$result, "Service", $$AstroService, { "title": "Hardware & Peripheripherie", "subtitle": "Lorem ipsum dolor sit amet.", "shorttext": "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam. ", "popup": true, "popupID": "popup-7", "providerNames": ["Bitwarden", "AVM", "Nextcloud"], "providerLinks": [
    "https://bitwarden.com/de-DE/",
    "https://avm.de/",
    "https://nextcloud.com/de/"
  ], "providerImages": [
    "https://upload.wikimedia.org/wikipedia/commons/0/03/Bitwarden_Logo.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/AVM-Logo.png/800px-AVM-Logo.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Nextcloud_Logo.svg/141px-Nextcloud_Logo.svg.png"
  ], "class": "astro-O566EWV5" })}
			${renderComponent($$result, "Service", $$AstroService, { "title": "Terra-Gaming", "subtitle": "Lorem ipsum dolor sit amet.", "shorttext": "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam. ", "popup": true, "popupID": "popup-8", "providerNames": ["Bitwarden", "AVM", "Nextcloud"], "providerLinks": [
    "https://bitwarden.com/de-DE/",
    "https://avm.de/",
    "https://nextcloud.com/de/"
  ], "providerImages": [
    "https://upload.wikimedia.org/wikipedia/commons/0/03/Bitwarden_Logo.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/AVM-Logo.png/800px-AVM-Logo.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Nextcloud_Logo.svg/141px-Nextcloud_Logo.svg.png"
  ], "class": "astro-O566EWV5" })}
			${renderComponent($$result, "Service", $$AstroService, { "title": "Wortmann Telecom", "subtitle": "Lorem ipsum dolor sit amet.", "shorttext": "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam. ", "popup": true, "popupID": "popup-9", "providerNames": ["Bitwarden", "AVM", "Nextcloud"], "providerLinks": [
    "https://bitwarden.com/de-DE/",
    "https://avm.de/",
    "https://nextcloud.com/de/"
  ], "providerImages": [
    "https://upload.wikimedia.org/wikipedia/commons/0/03/Bitwarden_Logo.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/AVM-Logo.png/800px-AVM-Logo.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Nextcloud_Logo.svg/141px-Nextcloud_Logo.svg.png"
  ], "class": "astro-O566EWV5" })}
			${renderComponent($$result, "Service", $$AstroService, { "title": "ecoDMS Dokumentenmanagement", "subtitle": "Lorem ipsum dolor sit amet.", "shorttext": "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam. ", "popup": true, "popupID": "popup-10", "providerNames": ["Bitwarden", "AVM", "Nextcloud"], "providerLinks": [
    "https://bitwarden.com/de-DE/",
    "https://avm.de/",
    "https://nextcloud.com/de/"
  ], "providerImages": [
    "https://upload.wikimedia.org/wikipedia/commons/0/03/Bitwarden_Logo.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/AVM-Logo.png/800px-AVM-Logo.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Nextcloud_Logo.svg/141px-Nextcloud_Logo.svg.png"
  ], "class": "astro-O566EWV5" })}
			${renderComponent($$result, "Service", $$AstroService, { "title": "Telefoniel\xF6sungen", "subtitle": "Lorem ipsum dolor sit amet.", "shorttext": "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam. ", "popup": true, "popupID": "popup-11", "providerNames": ["Bitwarden", "AVM", "Nextcloud"], "providerLinks": [
    "https://bitwarden.com/de-DE/",
    "https://avm.de/",
    "https://nextcloud.com/de/"
  ], "providerImages": [
    "https://upload.wikimedia.org/wikipedia/commons/0/03/Bitwarden_Logo.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/AVM-Logo.png/800px-AVM-Logo.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Nextcloud_Logo.svg/141px-Nextcloud_Logo.svg.png"
  ], "class": "astro-O566EWV5" })}
			${renderComponent($$result, "Service", $$AstroService, { "title": "Netzwerkl\xF6sungen", "subtitle": "Lorem ipsum dolor sit amet.", "shorttext": "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam. ", "popup": true, "popupID": "popup-12", "providerNames": ["Bitwarden", "AVM", "Nextcloud"], "providerLinks": [
    "https://bitwarden.com/de-DE/",
    "https://avm.de/",
    "https://nextcloud.com/de/"
  ], "providerImages": [
    "https://upload.wikimedia.org/wikipedia/commons/0/03/Bitwarden_Logo.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/AVM-Logo.png/800px-AVM-Logo.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Nextcloud_Logo.svg/141px-Nextcloud_Logo.svg.png"
  ], "class": "astro-O566EWV5" })}
			${renderComponent($$result, "Service", $$AstroService, { "title": "Microsoft Office 365 L\xF6sungen", "subtitle": "Lorem ipsum dolor sit amet.", "shorttext": "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam. ", "popup": true, "popupID": "popup-13", "providerNames": ["Bitwarden", "AVM", "Nextcloud"], "providerLinks": [
    "https://bitwarden.com/de-DE/",
    "https://avm.de/",
    "https://nextcloud.com/de/"
  ], "providerImages": [
    "https://upload.wikimedia.org/wikipedia/commons/0/03/Bitwarden_Logo.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/AVM-Logo.png/800px-AVM-Logo.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Nextcloud_Logo.svg/141px-Nextcloud_Logo.svg.png"
  ], "class": "astro-O566EWV5" })}
			${renderComponent($$result, "Service", $$AstroService, { "title": "Kommunikationsl\xF6sungen", "subtitle": "Lorem ipsum dolor sit amet.", "shorttext": "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam. ", "popup": true, "popupID": "popup-14", "providerNames": ["Bitwarden", "AVM", "Nextcloud"], "providerLinks": [
    "https://bitwarden.com/de-DE/",
    "https://avm.de/",
    "https://nextcloud.com/de/"
  ], "providerImages": [
    "https://upload.wikimedia.org/wikipedia/commons/0/03/Bitwarden_Logo.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/AVM-Logo.png/800px-AVM-Logo.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Nextcloud_Logo.svg/141px-Nextcloud_Logo.svg.png"
  ], "class": "astro-O566EWV5" })}
			
			<div class="blob1 blur astro-O566EWV5"></div>
			<div class="blob2 blur astro-O566EWV5"></div>
			<div class="blob3 blur astro-O566EWV5"></div>
			<div class="blob4 blur astro-O566EWV5"></div>
			<div class="blob5 blur astro-O566EWV5"></div>
			<div class="blob6 blur astro-O566EWV5"></div>
			<div class="blob7 blur astro-O566EWV5"></div>
			<div class="blob8 blur astro-O566EWV5"></div>
			<div class="blob9 blur astro-O566EWV5"></div>
			<div class="blob10 blur astro-O566EWV5"></div>
			<div class="blob11 blur astro-O566EWV5"></div>
			<div class="blob12 blur astro-O566EWV5"></div>
			<div class="blob13 blur astro-O566EWV5"></div>
			<div class="blob14 blur astro-O566EWV5"></div>
			<div class="blob15 blur astro-O566EWV5"></div>
			<div class="blob16 blur astro-O566EWV5"></div>
			<div class="blob17 blur astro-O566EWV5"></div>
			<div class="blob18 blur astro-O566EWV5"></div>
		</div>
	</div>
</section>`;
}, "D:/Arbeitt/KundenUndProjekte/Torge/pits/website/src/components/astroServices.astro");
var $$Astro$7 = createAstro();
var $$AstroCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$AstroCard;
  const { title, subtitle, image, url, popup, popupID } = Astro2.props;
  return renderTemplate`<!-- <div class="neomorphic card">
	<h2 class="pl">{title}</h2>
	<p class="pl">{subtitle}</p>
</div> -->${maybeRenderHead($$result)}<div class="Card astro-62OIX7EP">
	<a class="popupLink astro-62OIX7EP"${addAttribute("#" + popupID, "data-popup")}${addAttribute("#" + popupID, "href")}>
		<!-- <div class="top-bar"></div> -->
		<div class="header astro-62OIX7EP">
			<h2 class="pl astro-62OIX7EP">${title}</h2>
			<p class="pl astro-62OIX7EP">${subtitle}</p>
		</div>
		<div class="pl headerImage astro-62OIX7EP">
			<img${addAttribute(image, "src")} class="astro-62OIX7EP">
		</div>
		<button${addAttribute("pl btn__primary popup" + popup + " astro-62OIX7EP", "class")}${addAttribute("#" + popupID, "data-popup")} role="button">Mehr Informationen</button>
	</a>
</div>`;
}, "D:/Arbeitt/KundenUndProjekte/Torge/pits/website/src/components/subcomponents/astroCard.astro");
var $$Astro$6 = createAstro();
var $$AstroPortfolio = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$AstroPortfolio;
  const { title, subtitle, ID } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<section class="portfolioSection astro-G6UNTRMT"${addAttribute(ID, "id")}>
	<h2 class="astro-G6UNTRMT">Referenzen</h2>
	<div class="portfolioWrapper astro-G6UNTRMT">
		<div class="container astro-G6UNTRMT">
			${renderComponent($$result, "Card", $$AstroCard, { "title": "Referenz 1", "subtitle": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", "image": "", "url": "", "popup": "", "popupID": "", "class": "astro-G6UNTRMT" })}
			${renderComponent($$result, "Card", $$AstroCard, { "title": "Referenz 2", "subtitle": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", "image": "", "url": "", "popup": "", "popupID": "", "class": "astro-G6UNTRMT" })}
		</div>
	</div>
	<h2 class="astro-G6UNTRMT">Sponsoring</h2>
	<div class="portfolioWrapper astro-G6UNTRMT">
		<div class="container astro-G6UNTRMT">
			${renderComponent($$result, "Card", $$AstroCard, { "title": "Sponsoring 1", "subtitle": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", "image": "", "url": "", "popup": "", "popupID": "", "class": "astro-G6UNTRMT" })}
			${renderComponent($$result, "Card", $$AstroCard, { "title": "Sponsoring 2", "subtitle": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", "image": "", "url": "", "popup": "", "popupID": "", "class": "astro-G6UNTRMT" })}
		</div>
	</div>
	<h2 class="astro-G6UNTRMT">Zertifizierungen</h2>
	<div class="portfolioWrapper astro-G6UNTRMT">
		<div class="container astro-G6UNTRMT">
			${renderComponent($$result, "Card", $$AstroCard, { "title": "Zertifikat 1", "subtitle": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", "image": "", "url": "", "popup": "", "popupID": "", "class": "astro-G6UNTRMT" })}
			${renderComponent($$result, "Card", $$AstroCard, { "title": "Zertifikat 2", "subtitle": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", "image": "", "url": "", "popup": "", "popupID": "", "class": "astro-G6UNTRMT" })}
		</div>
	</div>
	<div class="blob1 blur astro-G6UNTRMT"></div>
	<div class="blob2 blur astro-G6UNTRMT"></div>
	<div class="blob3 blur astro-G6UNTRMT"></div>
	<div class="blob4 blur astro-G6UNTRMT"></div>
</section>`;
}, "D:/Arbeitt/KundenUndProjekte/Torge/pits/website/src/components/astroPortfolio.astro");
var $$Astro$5 = createAstro();
var $$AstroContact = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$AstroContact;
  const {
    title,
    subtitle,
    ID,
    companyName,
    street,
    city,
    country,
    contactMail,
    contactHelpdesk,
    contactPhone,
    contactPhoneBeautiful,
    contactFax,
    contactFaxBeautiful,
    contactWhatsApp,
    contactWhatsAppBeautiful,
    facebook,
    instagram,
    twitter,
    linkedin,
    xing,
    whatsapp
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<section class="contactSection astro-3Z5ODEP4"${addAttribute(ID, "id")}>
	<h2 class="astro-3Z5ODEP4">${title}</h2>
	<div class="contactWrapper astro-3Z5ODEP4">
		<div class="container neuInsideNH astro-3Z5ODEP4">
			<h3 class="astro-3Z5ODEP4">${companyName}</h3>
			<div class="miniSection astro-3Z5ODEP4">
				<h4 class="astro-3Z5ODEP4">${subtitle}</h4>
				<p class="astro-3Z5ODEP4">${street}</p>
				<p class="astro-3Z5ODEP4">${city}</p>
				<p class="astro-3Z5ODEP4">${country}</p>
			</div>
			<h3 style="margin-top: 30px" class="astro-3Z5ODEP4">Kontakt</h3>
			<div class="miniSection contactMiniSection astro-3Z5ODEP4">
				<h4 class="astro-3Z5ODEP4">Mail: <a${addAttribute("mailto:" + contactMail, "href")} class="astro-3Z5ODEP4">${contactMail}</a></h4>
				<h4 class="astro-3Z5ODEP4">Helpdesk: <a${addAttribute("mailto:" + contactHelpdesk, "href")} class="astro-3Z5ODEP4">${contactHelpdesk}</a></h4>
				<h4 class="astro-3Z5ODEP4">Telefon: <a${addAttribute("tel:" + contactPhone, "href")} class="astro-3Z5ODEP4">${contactPhoneBeautiful}</a></h4>
				<h4 class="astro-3Z5ODEP4">Fax: <a${addAttribute("tel:" + contactFax, "href")} class="astro-3Z5ODEP4">${contactFaxBeautiful}</a></h4>
				<h4 class="astro-3Z5ODEP4">WhatsApp: <a${addAttribute("tel:" + contactWhatsApp, "href")} class="astro-3Z5ODEP4">${contactWhatsAppBeautiful}</a></h4>
			</div>
			<h3 style="margin-top: 30px;" class="astro-3Z5ODEP4">Socials</h3>
			<div class="miniSection socialWrapper astro-3Z5ODEP4">
				<a target="_blank"${addAttribute(facebook, "href")} class="socialIcon neuOutside astro-3Z5ODEP4">
					<img src="assets/images/socials/facebook.svg" class="astro-3Z5ODEP4">
				</a>
				<a target="_blank"${addAttribute(instagram, "href")} class="socialIcon neuOutside astro-3Z5ODEP4">
					<img src="assets/images/socials/insta.svg" class="astro-3Z5ODEP4">
				</a>
				<a target="_blank"${addAttribute(twitter, "href")} class="socialIcon neuOutside astro-3Z5ODEP4">
					<img src="assets/images/socials/twitter.svg" class="astro-3Z5ODEP4">
				</a>
				<a target="_blank"${addAttribute(linkedin, "href")} class="socialIcon neuOutside astro-3Z5ODEP4">
					<img src="assets/images/socials/linkedin.svg" class="astro-3Z5ODEP4">
				</a>
				<a target="_blank"${addAttribute(xing, "href")} class="socialIcon neuOutside astro-3Z5ODEP4">
					<img src="assets/images/socials/xing.svg" class="astro-3Z5ODEP4">
				</a>
				<a target="_blank"${addAttribute(whatsapp, "href")} class="socialIcon neuOutside astro-3Z5ODEP4">
					<img src="assets/images/socials/whatsapp.svg" class="astro-3Z5ODEP4">
				</a>
			</div>
		</div>
	</div>
	<div class="circle1 astro-3Z5ODEP4"></div>
	<div class="circle2 astro-3Z5ODEP4"></div>
	<div class="blob1 blur astro-3Z5ODEP4"></div>
	<div class="blob2 blur astro-3Z5ODEP4"></div>
	<div class="blob3 blur astro-3Z5ODEP4"></div>
	<div class="blob4 blur astro-3Z5ODEP4"></div>
</section>`;
}, "D:/Arbeitt/KundenUndProjekte/Torge/pits/website/src/components/astroContact.astro");
var $$Astro$4 = createAstro();
var $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Home", "class": "astro-J7PV25F6" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Header", $$AstroHeader, { "title": "IT-Dienst vom Fach", "subtitle": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", "image": "/assets/images/header.jpg", "class": "astro-J7PV25F6" })}${renderComponent($$result2, "About", $$AstroAbout, { "title": "\xDCber mich", "name": "Torge Petersen", "position": "IT-Fachmann und Netzwerktechniker", "description": "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et", "image": "/assets/images/torge.png", "signature": "/assets/images/signature.png", "ID": "about", "class": "astro-J7PV25F6" })}${renderComponent($$result2, "Services", $$AstroServices, { "title": "Services", "subtitle": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", "ID": "Dienstleistungen", "class": "astro-J7PV25F6" })}${renderComponent($$result2, "Portfolio", $$AstroPortfolio, { "title": "Portfolio", "subtitle": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", "ID": "Portfolio", "class": "astro-J7PV25F6" })}${renderComponent($$result2, "Contact", $$AstroContact, { "title": "Kontakt", "subtitle": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", "ID": "Kontakt", "companyName": "Petersen IT Services", "street": "Kirchweg 11a", "city": "25794 Pahlen", "country": "Deutschland", "contactMail": "info@petersen-it-services.de", "contactHelpdesk": "helpdesk@petersen-it-services.de", "contactPhone": "048039929796", "contactPhoneBeautiful": "+49 (0) 4803 9929796", "contactFax": "048039929793", "contactFaxBeautiful": "+49 (0) 4803 9929793", "contactWhatsApp": "015792486141", "contactWhatsAppBeautiful": "+49 1579 2486141", "facebook": "https://www.facebook.com/petersenitservices", "instagram": "https://www.instagram.com/petersenitservices/", "twitter": "https://twitter.com/it_petersen", "linkedin": "https://www.linkedin.com/company/petersen-it-services/", "xing": "https://www.xing.com/pages/petersen-it-services", "whatsapp": "https://wa.me/message/W46JHBPZ326ZG1", "class": "astro-J7PV25F6" })}` })}`;
}, "D:/Arbeitt/KundenUndProjekte/Torge/pits/website/src/pages/index.astro");
var $$file$4 = "D:/Arbeitt/KundenUndProjekte/Torge/pits/website/src/pages/index.astro";
var $$url$4 = "";
var _page0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file$4,
  url: $$url$4
}, Symbol.toStringTag, { value: "Module" }));
var $$Astro$3 = createAstro();
var $$Datenschutz = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Datenschutz;
  let regex = /<body>([\s\S]*?)<\/footer>/gm;
  let source = await fetch("https://itrk.legal/ynp.8U.sRr.html").then((response) => response.text()).then((text) => text.match(regex)[0]).then(
    (text) => text.replace(/<body>/gm, "").replace(/<\/footer>/gm, "").replace(/<a href="https:\/\/itrk\.legal\/ynp\.2J\.sRr\.html\?imp=1"\>Impressum<\/a>/gm, "")
  );
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Datenschutz", "class": "astro-7I3OIE76" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead($$result2)}<div class="DatenschutzWrapper astro-7I3OIE76">
		<div class="container astro-7I3OIE76">${unescapeHTML(source)}</div>
	</div>` })}`;
}, "D:/Arbeitt/KundenUndProjekte/Torge/pits/website/src/pages/datenschutz.astro");
var $$file$3 = "D:/Arbeitt/KundenUndProjekte/Torge/pits/website/src/pages/datenschutz.astro";
var $$url$3 = "/datenschutz";
var _page1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$Datenschutz,
  file: $$file$3,
  url: $$url$3
}, Symbol.toStringTag, { value: "Module" }));
var $$Astro$2 = createAstro();
var $$Impressum = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Impressum;
  let regex = /<body>([\s\S]*?)<\/footer>/gm;
  let source = await fetch("https://itrk.legal/ynp.2J.sRr.html?imp=1").then((response) => response.text()).then((text) => text.match(regex)[0]).then(
    (text) => text.replace(/<body>/gm, "").replace(/<\/footer>/gm, "").replace(/https:\/\/www\.it-recht-kanzlei\.de\/gfx\/Logos\/logo-fairness-160\.png/gm, "/assets/images/external/logo-fairness-160.png")
  );
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Impressum", "class": "astro-7DPR4QCZ" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead($$result2)}<div class="impressumWrapper astro-7DPR4QCZ">
		<h1 class="astro-7DPR4QCZ">Impressum & Haftungsausschluss</h1>
		<div class="impressumContainer astro-7DPR4QCZ">
			<div class="container astro-7DPR4QCZ">${unescapeHTML(source)}</div>
		</div>
	</div>` })}`;
}, "D:/Arbeitt/KundenUndProjekte/Torge/pits/website/src/pages/impressum.astro");
var $$file$2 = "D:/Arbeitt/KundenUndProjekte/Torge/pits/website/src/pages/impressum.astro";
var $$url$2 = "/impressum";
var _page2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$Impressum,
  file: $$file$2,
  url: $$url$2
}, Symbol.toStringTag, { value: "Module" }));
var $$Astro$1 = createAstro();
var $$Widerruf = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Widerruf;
  let regex = /<body>([\s\S]*?)<\/footer>/gm;
  let source = await fetch("https://itrk.legal/ynp.2J.sRr.html").then((response) => response.text()).then((text) => text.match(regex)[0]).then(
    (text) => text.replace(/<body>/gm, "").replace(/<\/footer>/gm, "").replace(/<a href="https:\/\/itrk\.legal\/ynp\.2J\.sRr\.html\?imp=1"\>Impressum<\/a>/gm, "")
  );
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Widerruf", "class": "astro-P7BKB3CI" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead($$result2)}<div class="widerrufWrapper astro-P7BKB3CI">
		<div class="container astro-P7BKB3CI">${unescapeHTML(source)}</div>
	</div>` })}`;
}, "D:/Arbeitt/KundenUndProjekte/Torge/pits/website/src/pages/widerruf.astro");
var $$file$1 = "D:/Arbeitt/KundenUndProjekte/Torge/pits/website/src/pages/widerruf.astro";
var $$url$1 = "/widerruf";
var _page3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$Widerruf,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: "Module" }));
var $$Astro = createAstro();
var $$Agb = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Agb;
  let regex = /<body>([\s\S]*?)<\/footer>/gm;
  let source = await fetch("https://itrk.legal/ynp.36.sRr.html").then((response) => response.text()).then((text) => text.match(regex)[0]).then(
    (text) => text.replace(/<body>/gm, "").replace(/<\/footer>/gm, "").replace(/<a href="https:\/\/itrk\.legal\/ynp\.2J\.sRr\.html\?imp=1"\>Impressum<\/a>/gm, "")
  );
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "AGB", "class": "astro-JFHYJJMS" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead($$result2)}<div class="AGBWrapper astro-JFHYJJMS">
		<div class="container astro-JFHYJJMS">${unescapeHTML(source)}</div>
	</div>` })}`;
}, "D:/Arbeitt/KundenUndProjekte/Torge/pits/website/src/pages/agb.astro");
var $$file = "D:/Arbeitt/KundenUndProjekte/Torge/pits/website/src/pages/agb.astro";
var $$url = "/agb";
var _page4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$Agb,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));

// dist/server/entry.mjs
var _server = void 0;
var _startPromise = void 0;
async function* getPrerenderedFiles(clientRoot) {
  for await (const ent of Deno.readDir(clientRoot)) {
    if (ent.isDirectory) {
      yield* getPrerenderedFiles(new URL(`./${ent.name}/`, clientRoot));
    } else if (ent.name.endsWith(".html")) {
      yield new URL(`./${ent.name}`, clientRoot);
    }
  }
}
function start$1(manifest, options) {
  if (options.start === false) {
    return;
  }
  const clientRoot = new URL("../client/", import.meta.url);
  const app = new App(manifest);
  const handler = async (request, connInfo) => {
    var _a3;
    if (app.match(request)) {
      let ip = (_a3 = connInfo == null ? void 0 : connInfo.remoteAddr) == null ? void 0 : _a3.hostname;
      Reflect.set(request, Symbol.for("astro.clientAddress"), ip);
      const response = await app.render(request);
      if (app.setCookieHeaders) {
        for (const setCookieHeader of app.setCookieHeaders(response)) {
          response.headers.append("Set-Cookie", setCookieHeader);
        }
      }
      return response;
    }
    const url = new URL(request.url);
    const localPath = new URL("./" + app.removeBase(url.pathname), clientRoot);
    let fileResp = await serveFile(request, fromFileUrl(localPath));
    if (fileResp.status == 404) {
      let fallback;
      for await (const file of getPrerenderedFiles(clientRoot)) {
        const pathname = file.pathname.replace(/\/(index)?\.html$/, "");
        if (localPath.pathname.endsWith(pathname)) {
          fallback = file;
          break;
        }
      }
      if (fallback) {
        fileResp = await serveFile(request, fromFileUrl(fallback));
      }
    }
    if (fileResp.status == 404) {
      const response = await app.render(request);
      if (app.setCookieHeaders) {
        for (const setCookieHeader of app.setCookieHeaders(response)) {
          response.headers.append("Set-Cookie", setCookieHeader);
        }
      }
      return response;
    } else {
      return fileResp;
    }
  };
  const port = options.port ?? 8085;
  _server = new Server({
    port,
    hostname: options.hostname ?? "0.0.0.0",
    handler
  });
  _startPromise = Promise.resolve(_server.listenAndServe());
  console.error(`Server running on port ${port}`);
}
function createExports(manifest, options) {
  const app = new App(manifest);
  return {
    async stop() {
      if (_server) {
        _server.close();
        _server = void 0;
      }
      await Promise.resolve(_startPromise);
    },
    running() {
      return _server !== void 0;
    },
    async start() {
      return start$1(manifest, options);
    },
    async handle(request) {
      return app.render(request);
    }
  };
}
var adapter = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  createExports,
  start: start$1
}, Symbol.toStringTag, { value: "Module" }));
var pageMap = /* @__PURE__ */ new Map([["src/pages/index.astro", _page0], ["src/pages/datenschutz.astro", _page1], ["src/pages/impressum.astro", _page2], ["src/pages/widerruf.astro", _page3], ["src/pages/agb.astro", _page4]]);
var renderers = [Object.assign({ "name": "astro:jsx", "serverEntrypoint": "astro/jsx/server.js", "jsxImportSource": "astro" }, { ssr: server_default })];
var _manifest2 = Object.assign(deserializeManifest({ "adapterName": "@astrojs/deno", "routes": [{ "file": "", "links": ["_astro/agb.e890848b.css", "_astro/index.4fa191d6.css"], "scripts": [{ "type": "external", "value": "_astro/hoisted.e6b84484.js" }], "routeData": { "route": "/", "type": "page", "pattern": "^\\/$", "segments": [], "params": [], "component": "src/pages/index.astro", "pathname": "/", "_meta": { "trailingSlash": "ignore" } } }, { "file": "", "links": ["_astro/datenschutz.eefddf79.css", "_astro/agb.e890848b.css"], "scripts": [{ "type": "external", "value": "_astro/hoisted.653841d3.js" }], "routeData": { "route": "/datenschutz", "type": "page", "pattern": "^\\/datenschutz\\/?$", "segments": [[{ "content": "datenschutz", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/datenschutz.astro", "pathname": "/datenschutz", "_meta": { "trailingSlash": "ignore" } } }, { "file": "", "links": ["_astro/impressum.b6c8c04d.css", "_astro/agb.e890848b.css"], "scripts": [{ "type": "external", "value": "_astro/hoisted.653841d3.js" }], "routeData": { "route": "/impressum", "type": "page", "pattern": "^\\/impressum\\/?$", "segments": [[{ "content": "impressum", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/impressum.astro", "pathname": "/impressum", "_meta": { "trailingSlash": "ignore" } } }, { "file": "", "links": ["_astro/widerruf.c87b4488.css", "_astro/agb.e890848b.css"], "scripts": [{ "type": "external", "value": "_astro/hoisted.653841d3.js" }], "routeData": { "route": "/widerruf", "type": "page", "pattern": "^\\/widerruf\\/?$", "segments": [[{ "content": "widerruf", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/widerruf.astro", "pathname": "/widerruf", "_meta": { "trailingSlash": "ignore" } } }, { "file": "", "links": ["_astro/agb.def80bca.css", "_astro/agb.e890848b.css"], "scripts": [{ "type": "external", "value": "_astro/hoisted.653841d3.js" }], "routeData": { "route": "/agb", "type": "page", "pattern": "^\\/agb\\/?$", "segments": [[{ "content": "agb", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/agb.astro", "pathname": "/agb", "_meta": { "trailingSlash": "ignore" } } }], "base": "/", "markdown": { "drafts": false, "syntaxHighlight": "shiki", "shikiConfig": { "langs": [], "theme": "github-dark", "wrap": false }, "remarkPlugins": [], "rehypePlugins": [], "remarkRehype": {}, "gfm": true, "smartypants": true, "contentDir": "file:///D:/Arbeitt/KundenUndProjekte/Torge/pits/website/src/content/" }, "pageMap": null, "propagation": [["D:/Arbeitt/KundenUndProjekte/Torge/pits/website/src/components/astroFooter.astro", "in-tree"], ["D:/Arbeitt/KundenUndProjekte/Torge/pits/website/src/components/astroNavbar.astro", "in-tree"], ["D:/Arbeitt/KundenUndProjekte/Torge/pits/website/src/components/global/astroCursor.astro", "in-tree"], ["D:/Arbeitt/KundenUndProjekte/Torge/pits/website/src/components/global/astroCallAndNavigation.astro", "in-tree"], ["D:/Arbeitt/KundenUndProjekte/Torge/pits/website/src/components/astroGlobal.astro", "in-tree"], ["D:/Arbeitt/KundenUndProjekte/Torge/pits/website/src/components/subcomponents/astroPopup.astro", "in-tree"], ["D:/Arbeitt/KundenUndProjekte/Torge/pits/website/src/components/astroPopups.astro", "in-tree"], ["D:/Arbeitt/KundenUndProjekte/Torge/pits/website/src/components/global/astroPreloader.astro", "in-tree"], ["D:/Arbeitt/KundenUndProjekte/Torge/pits/website/src/layouts/Layout.astro", "in-tree"], ["D:/Arbeitt/KundenUndProjekte/Torge/pits/website/src/components/astroHeader.astro", "in-tree"], ["D:/Arbeitt/KundenUndProjekte/Torge/pits/website/src/components/astroAbout.astro", "in-tree"], ["D:/Arbeitt/KundenUndProjekte/Torge/pits/website/src/components/subcomponents/astroService.astro", "in-tree"], ["D:/Arbeitt/KundenUndProjekte/Torge/pits/website/src/components/astroServices.astro", "in-tree"], ["D:/Arbeitt/KundenUndProjekte/Torge/pits/website/src/components/subcomponents/astroCard.astro", "in-tree"], ["D:/Arbeitt/KundenUndProjekte/Torge/pits/website/src/components/astroPortfolio.astro", "in-tree"], ["D:/Arbeitt/KundenUndProjekte/Torge/pits/website/src/components/astroContact.astro", "in-tree"], ["D:/Arbeitt/KundenUndProjekte/Torge/pits/website/src/pages/index.astro", "in-tree"], ["D:/Arbeitt/KundenUndProjekte/Torge/pits/website/src/pages/datenschutz.astro", "in-tree"], ["D:/Arbeitt/KundenUndProjekte/Torge/pits/website/src/pages/impressum.astro", "in-tree"], ["D:/Arbeitt/KundenUndProjekte/Torge/pits/website/src/pages/widerruf.astro", "in-tree"], ["D:/Arbeitt/KundenUndProjekte/Torge/pits/website/src/pages/agb.astro", "in-tree"], ["D:/Arbeitt/KundenUndProjekte/Torge/pits/website/src/pages/agb.astro?astro&type=style&index=0&lang.css", "in-tree"], ["D:/Arbeitt/KundenUndProjekte/Torge/pits/website/src/pages/datenschutz.astro?astro&type=style&index=0&lang.css", "in-tree"], ["D:/Arbeitt/KundenUndProjekte/Torge/pits/website/src/pages/impressum.astro?astro&type=style&index=0&lang.css", "in-tree"], ["D:/Arbeitt/KundenUndProjekte/Torge/pits/website/src/pages/index.astro?astro&type=style&index=0&lang.css", "in-tree"], ["D:/Arbeitt/KundenUndProjekte/Torge/pits/website/src/pages/widerruf.astro?astro&type=style&index=0&lang.css", "in-tree"]], "renderers": [], "entryModules": { "\0@astrojs-ssr-virtual-entry": "_@astrojs-ssr-virtual-entry.mjs", "/astro/hoisted.js?q=1": "_astro/hoisted.653841d3.js", "D:/Arbeitt/KundenUndProjekte/Torge/pits/website/src/components/global/astroPreloader.astro": "_astro/astroPreloader.3e26530b.js", "D:/Arbeitt/KundenUndProjekte/Torge/pits/website/src/components/astroFooter.astro": "_astro/astroFooter.58809f69.js", "D:/Arbeitt/KundenUndProjekte/Torge/pits/website/src/components/astroPopups.astro": "_astro/astroPopups.0d073217.js", "D:/Arbeitt/KundenUndProjekte/Torge/pits/website/node_modules/@splinetool/runtime/build/boolean.js": "_astro/boolean.9d58d081.js", "D:/Arbeitt/KundenUndProjekte/Torge/pits/website/node_modules/@splinetool/runtime/build/process.js": "_astro/process.92a1d41a.js", "D:/Arbeitt/KundenUndProjekte/Torge/pits/website/node_modules/@splinetool/runtime/build/opentype.js": "_astro/opentype.b9a672c1.js", "D:/Arbeitt/KundenUndProjekte/Torge/pits/website/node_modules/@splinetool/runtime/build/physics.js": "_astro/physics.18863788.js", "/astro/hoisted.js?q=0": "_astro/hoisted.e6b84484.js", "astro:scripts/before-hydration.js": "" }, "assets": ["/_astro/agb.e890848b.css", "/_astro/agb.def80bca.css", "/_astro/datenschutz.eefddf79.css", "/_astro/impressum.b6c8c04d.css", "/_astro/index.4fa191d6.css", "/_astro/widerruf.c87b4488.css", "/favicon.svg", "/_astro/astroCallAndNavigation.astro_astro_type_script_index_0_lang.b9061a5b.js", "/_astro/astroFooter.58809f69.js", "/_astro/astroPopups.0d073217.js", "/_astro/astroPreloader.3e26530b.js", "/_astro/boolean.9d58d081.js", "/_astro/hoisted.653841d3.js", "/_astro/hoisted.e6b84484.js", "/_astro/opentype.b9a672c1.js", "/_astro/physics.18863788.js", "/_astro/process.92a1d41a.js", "/_astro/response.fed73383.js", "/assets/images/close.png", "/assets/images/header.jpg", "/assets/images/logo.svg", "/assets/images/logowhite.svg", "/assets/images/mail.png", "/assets/images/mask1.svg", "/assets/images/phone-call.png", "/assets/images/phone.png", "/assets/images/preloader.json", "/assets/images/signature.png", "/assets/images/torge.png", "/assets/scripts/framework.js", "/assets/scripts/OrbitControls.js", "/assets/scripts/script.js", "/assets/scripts/spline.js", "/assets/scripts/three.modules.js", "/assets/scripts/threeD.js", "/assets/styles/fonts.css", "/assets/styles/style.css", "/assets/images/external/logo-fairness-160.png", "/assets/images/socials/facebook.svg", "/assets/images/socials/insta.svg", "/assets/images/socials/linkedin.svg", "/assets/images/socials/twitter.svg", "/assets/images/socials/whatsapp.svg", "/assets/images/socials/xing.svg"] }), {
  pageMap,
  renderers
});
var _args = {};
var _exports = createExports(_manifest2, _args);
var stop = _exports["stop"];
var handle = _exports["handle"];
var start = _exports["start"];
var running = _exports["running"];
var _start = "start";
if (_start in adapter) {
  adapter[_start](_manifest2, _args);
}
export {
  handle,
  pageMap,
  renderers,
  running,
  start,
  stop
};
/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */
/**
 * shortdash - https://github.com/bibig/node-shorthash
 *
 * @license
 *
 * (The MIT License)
 *
 * Copyright (c) 2013 Bibig <bibig@me.com>
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */
