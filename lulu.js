const DomParser = require('dom-parser');
const parser = new DomParser();

const markers = [];

function LatLng(lat,lng) {
    return [lng,lat];
}

function infobox(o) {
    let dom = parser.parseFromString(o.content);
    let info = dom.getElementsByClassName('lulu-infobox');
    let nodes = info[0].childNodes;
    let textArr = nodes
        .map(n => n.textContent)
        .filter(n => n.length)
        .filter(n => n !== 'contact');

    return textArr;
}

function push(o) {
    markers.push({
        latlng: o.position,
        type: o.type,
        store: o.infobox[0],
        address: o.infobox[1],
    })
}

function foo(){};

push({

    position: LatLng(38.9164752, -77.0319752),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/washington/logancircle">14th Street</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">1925 14th Street Northwest' +
            "<br>Washington, District of Columbia, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:2025184075">(202) 518-4075</a>' +
            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: '14th Street'
});





push({

    position: LatLng(40.0187817, -105.2564546),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/boulder/boulder">29th St</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">1805 29th Street' +
            "<br>Boulder, Colorado, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:3034494309">(303) 449-4309</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: '29th St'
});





push({

    position: LatLng(51.0293377, -114.0715027),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/ca/calgary/4thstreet">4th St SW</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">1708 4 Street Southwest' +
            "<br>Calgary, Alberta, Canada" +
            '</p>' +
            '<br>' +
            '<a href="tel:4032075858">(403) 207-5858</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: '4th St SW'
});





push({

    position: LatLng(61.21708100000001, -149.8885111),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/anchorage/5th-avenue-mall">5th Avenue Mall</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">320 West 5th Avenue' + '<br/>Unit D20A ' +
            "<br>Anchorage, Alaska, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:9072740003">(907) 274-0003</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: '5th Avenue Mall'
});





push({

    position: LatLng(40.7655864, -73.9633547),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/new-york/66thstreet">66th and 3rd</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">1127 3rd Avenue' +
            "<br>New York, New York, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:2127555019">(212) 755-5019</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: '66th and 3rd'
});





push({

    position: LatLng(30.27203699999999, -97.75460830000002),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/austin/6thandlamar">6th and Lamar</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">1016 West 6th Street' +
            "<br>Austin, Texas, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:5124742659">(512) 474-2659</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: '6th and Lamar'
});





push({

    position: LatLng(40.781595, -73.981689),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/new-york/75thandbroadway">75th & Broadway</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">2139 Broadway' +
            "<br>New York, New York, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:2123625294">(212) 362-5294</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: '75th & Broadway'
});





push({

    position: LatLng(41.899593, -87.624308),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/chicago/michiganavenue">900 N Michigan Ave</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">L3-03' + '<br/>900 North Michigan Ave' +
            "<br>Chicago, Illinois, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:3129515923">(312) 951-5923</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: '900 N Michigan Ave'
});





push({

    position: LatLng(35.1041884, -106.566809),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/albuquerque/abquptown">ABQ Uptown</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">2260 Q Street Northeast' + '<br/>3C' +
            "<br>Albuquerque, New Mexico, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:5058840728">(505) 884-0728</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'ABQ Uptown'
});





push({

    position: LatLng(50.6541749, -120.3710535),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/ca/kamloops/aberdeen-mall">Aberdeen Mall</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">1320 Trans-Canada Highway' + '<br/>Suite 117A' +
            "<br>Kamloops, British Columbia, Canada" +
            '</p>' +
            '<br>' +
            '<a href="tel:2503721560">(250) 372-1560</a>' +
            '<h2>Come check out our new store! We\'re so excited to meet you!</h2>' +
            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Aberdeen Mall'
});





push({

    position: LatLng(30.42285, -91.1548107),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/baton-rouge/acadian-village">Acadian Village</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">3535 Perkins Road' +
            "<br>Baton Rouge, Louisiana, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:2253793283">(225) 379-3283</a>' +
            '<h2>#lululemonBR</h2>' +
            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Acadian Village'
});





push({

    position: LatLng(21.2912881, -157.8429647),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/honolulu/alamoanacenter">Ala Moana Ctr.</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">1450 Ala Moana Boulevard' +
            "<br>Honolulu, Hawaii, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:8089467220">(808) 946-7220</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Ala Moana Ctr.'
});





push({

    position: LatLng(-37.841001, 144.9538918),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/au/melbourne/albert-park-popup">Albert park Popup</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">194 Bridport Street' + '<br/>Albert Park' +
            "<br>Melbourne, Victoria, Australia" +
            '</p>' +
            '<br>' +
            '<a href="tel:96962342">96962342</a>' +
            '<h2>Now Open </h2>' +
            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Albert park Popup'
});





push({

    position: LatLng(45.2464709, -93.66656520000001),
    
    type: 'outlet',
    icon: '/etc/designs/shop/clientlibs/img/icons/outlets-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/albertville/albertville">Albertville Outlet</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">6415 Labeaux Avenue NE' + '<br/>Unit B270' +
            "<br>Albertville, Minnesota, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:7634970240">(763) 497-0240</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Albertville Outlet'
});





push({

    position: LatLng(47.8307483, -122.2709024),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/lynnwood/alderwood">Alderwood Mall</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">3000 184th Street Southwest' + '<br/>Unit 934' +
            "<br>Lynnwood, Washington, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:4256701344">(425) 670-1344</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Alderwood Mall'
});





push({

    position: LatLng(34.1444653, -118.255656),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/glendale/glendale">Americana</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">529 Americana Way' +
            "<br>Glendale, California, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:8182413251">(818) 241-3251</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Americana'
});





push({

    position: LatLng(52.377776, 4.8869561),
    
    type: 'showroom',
    icon: '/etc/designs/shop/clientlibs/img/icons/showrooms-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/nl/amsterdam/amsterdam">Amsterdam Showroom</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">13 Prinsenstraat' +
            "<br>Amsterdam, North Holland, The Netherlands" +
            '</p>' +
            '<br>' +
            '<a href="tel:31206277367">020 627 7367</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Amsterdam Showroom'
});





push({

    position: LatLng(61.195688, -149.896401),
    
    type: 'showroom',
    icon: '/etc/designs/shop/clientlibs/img/icons/showrooms-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/anchorage/anchorage">Anchorage Showroom</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">Northern Lights Village, 1441 W Northern Lights' + '<br/>Unit G/H' +
            "<br>Anchorage, Alaska, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:9076771346">(907) 677-1346</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Anchorage Showroom'
});





push({

    position: LatLng(42.2576964, -83.70045189999999),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/ann-arbor/annarbormi">Ann Arbor store</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">3070 Washtenaw Avenue' +
            "<br>Ann Arbor, Michigan, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:7349736454">(734) 973-6454</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Ann Arbor store'
});





push({

    position: LatLng(38.980139, -76.53975899999999),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/annapolis/annapolis">Annapolis store</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">2002 Annapolis Mall' + '<br/>Unit 1454' +
            "<br>Annapolis, Maryland, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:4105712753">(410) 571-2753</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Annapolis store'
});





push({

    position: LatLng(-32.01056, 115.834432),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/au/applecross/applecross">Applecross</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">Shop 2&amp;5, 37 Ardross St' +
            "<br>Perth, Western Australia, Australia" +
            '</p>' +
            '<br>' +
            '<a href="tel:893169698">(08) 9316 9698</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Applecross'
});





push({

    position: LatLng(38.6015342, -121.4273544),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/sacramento/ardenfair">Arden Fair</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">1689 Arden Way' + '<br/>Unit 1274' +
            "<br>Sacramento, California, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:9169211296">(916) 921-1296</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Arden Fair'
});





push({

    position: LatLng(19.3085109, -99.214068),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/mx/mexico-city/artz-pendregal">Artz Pedregal</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">1900 Periférico Sur' +
            "<br>Jardines del Pedregal, Mexico City, MX" +
            '</p>' +
            '<br>' +
            '<a href="tel:5559293352">01 55 5929 3352</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Artz Pedregal'
});





push({

    position: LatLng(39.189324, -106.818132),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/aspen/aspen">Aspen store</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">204 South Galena Street' +
            "<br>Aspen, Colorado, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:9709252033">(970) 925-2033</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Aspen store'
});





push({

    position: LatLng(33.960282, -83.383761),
    
    type: 'showroom',
    icon: '/etc/designs/shop/clientlibs/img/icons/showrooms-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/athens/athensshowroom">Athens Showroom</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">327 - Building G Prince Ave' +
            "<br>athens, Georgia, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:7065481847">(706) 548-1847</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Athens Showroom'
});





push({

    position: LatLng(34.0710565, -84.2762291),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/alpharetta/avalon">Avalon</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">5120 Avalon Boulevard' +
            "<br>Alpharetta, Georgia, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:6782485492">(678) 248-5492</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Avalon'
});





push({

    position: LatLng(39.10174, -74.71742),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/new-jersey/avalon-local">Avalon Local</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">2013 Dune Dr' +
            "<br>Avalon, New Jersey, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:6093681050">(609) 368-1050</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Avalon Local'
});





push({

    position: LatLng(47.56067239999999, -52.7536061),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/ca/st-john-s/avalon-mall">Avalon Mall</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">48 Kenmount Road ' + '<br/>Unit 0220' +
            "<br>St. John's, Newfoundland and Labrador, Canada" +
            '</p>' +
            '<br>' +
            '<a href="tel:7097538321">(709) 753-8321</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Avalon Mall'
});





push({

    position: LatLng(25.9573136, -80.14325079999999),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/aventura/aventuramall">Aventura Mall</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">#910, 19565 Biscayne Blvd Aventura, FL 33180' +
            "<br>Aventura, Florida, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:3054667294">(305) 466-7294</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Aventura Mall'
});





push({

    position: LatLng(35.3414311, -119.1034731),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/bakersfield/bakersfield-store">Bakersfield</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">9000 Ming Avenue' + '<br/>Suite E2 & E3' +
            "<br>Bakersfield, California, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:0"></a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Bakersfield'
});





push({

    position: LatLng(-33.857974, 151.181576),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/au/balmain/balmain">Balmain Store</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">272 Darling Street' +
            "<br>Balmain, New South Wales, Australia" +
            '</p>' +
            '<br>' +
            '<a href="tel:298104087">(02) 9810 4087</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Balmain Store'
});





push({

    position: LatLng(51.16368139999999, -115.5607938),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/ca/banff/banff-otw-seasonal-store">Banff OTW Seasonal Store</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">405 Spray Avenue' + '<br/>Mez 1 Retail Box 960' +
            "<br>Banff, Alberta, Canada" +
            '</p>' +
            '<br>' +
            '<a href="tel:4037621089">(403) 762-1089</a>' +
            '<h2>Any moment. Any weather. Always On. Our outerwear moves with you from one moment to the next.</h2>' +
            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Banff OTW Seasonal Store'
});





push({

    position: LatLng(51.1755979, -115.5714559),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/ca/banff/banff">Banff Store</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">121A Banff Avenue' +
            "<br>Banff, Alberta, Canada" +
            '</p>' +
            '<br>' +
            '<a href="tel:4037603303">(403) 760-3303</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Banff Store'
});





push({

    position: LatLng(3.1313573, 101.6710535),
    
    type: 'showroom',
    icon: '/etc/designs/shop/clientlibs/img/icons/showrooms-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/my/kuala-lumpur/bangsar-showroom">Bangsar Showroom</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">Jalan Telawi 3' + '<br/>No.20' +
            "<br>Kuala Lumpur, Malaysia" +
            '</p>' +
            '<br>' +
            '<a href="tel:322800332">03-2280 0332</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Bangsar Showroom'
});





push({

    position: LatLng(30.25769529999999, -97.80690519999999),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/austin/bartoncreeksquare">Barton Creek Square</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">Unit A10A 2901 South Capital of Texas Highway' +
            "<br>Austin, Texas, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:5123295541">(512) 329-5541</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Barton Creek Square'
});





push({

    position: LatLng(29.54221549999999, -95.1483744),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/friendswood/baybrook-seasonal">Baybrook Mall Seasonal Store</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">500 Baybrook Mall Drive' + '<br/>Space 1036' +
            "<br>Friendswood, Texas, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:2812863247">(281) 286-3247</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Baybrook Mall Seasonal Store'
});





push({

    position: LatLng(45.3470236, -75.8068072),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/ca/nepean/bayshore-store">Bayshore Shopping Centre</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">100 Bayshore Drive' +
            "<br>nepean, Ontario, Canada" +
            '</p>' +
            '<br>' +
            '<a href="tel:6137210220">(613) 721-0220</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Bayshore Shopping Centre'
});





push({

    position: LatLng(39.9142393, 116.4117852),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/cn/beijing/beijing-apm">Beijing APM</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">Unit L116#, Level 1, Sun Dong An Plaza, 138 Wang Fu Jing Street' +
            "<br>Dong Cheng District, Beijing, Mainland China" +
            '</p>' +
            '<br>' +
            '<a href="tel:0"></a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Beijing APM'
});





push({

    position: LatLng(39.9696239, 116.490424),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/cn/beijing/beijing-indigo">Beijing Indigo</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">18 Jiuxianqiao Road' +
            "<br>Chaoyang District, Beijing, Mainland China" +
            '</p>' +
            '<br>' +
            '<a href="tel:0"></a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Beijing Indigo'
});





push({

    position: LatLng(47.6151275, -122.203095),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/bellevue/bellevuesquare">Bellevue Square</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">224 Bellevue Square' +
            "<br>Bellevue, Washington, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:4254625530">(425) 462-5530</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Bellevue Square'
});





push({

    position: LatLng(37.8688666, -122.3002717),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/berkeley/college-ave">Berkeley</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">1901 Fourth Street' +
            "<br>Berkeley, California, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:5106660418">(510) 666-0418</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Berkeley'
});





push({

    position: LatLng(52.525116, 13.40676),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/de/berlin/berlin-mitte-store">Berlin Mitte Store</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">Alte Schönhauser Str. 32A' +
            "<br>Berlin, Berlin, Germany" +
            '</p>' +
            '<br>' +
            '<a href="tel:0"></a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Berlin Mitte Store'
});





push({

    position: LatLng(49.8863277, -119.4949756),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/ca/kelowna/bernardavenue">Bernard Ave</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">410 Bernard Avenue' +
            "<br>Kelowna, British Columbia, Canada" +
            '</p>' +
            '<br>' +
            '<a href="tel:2507638257">(250) 763-8257</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Bernard Ave'
});





push({

    position: LatLng(38.9807511, -77.0971563),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/bethesda/bethesda">Bethesda Row</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">4838 Bethesda Avenue' +
            "<br>Bethesda, Maryland, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:3016520574">(301) 652-0574</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Bethesda Row'
});





push({

    position: LatLng(51.89183790000001, -1.1549966),
    
    type: 'outlet',
    icon: '/etc/designs/shop/clientlibs/img/icons/outlets-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/gb/bicester/bicester-village">Bicester Village</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">50 Pingle Drive' + '<br/>Unit 111' +
            "<br>Bicester, England, United Kingdom" +
            '</p>' +
            '<br>' +
            '<a href="tel:1869226692">01869 226692</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Bicester Village'
});





push({

    position: LatLng(33.5103953, -112.0286923),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/phoenix/biltmore">Biltmore Fashion Park</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">#133, 2502 East Camelback Road' +
            "<br>Phoenix, Arizona, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:6029561402">(602) 956-1402</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Biltmore Fashion Park'
});





push({

    position: LatLng(35.4451629, -80.8802742),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/huntersville/birkdale">Birkdale Village</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">16836 Birkdale Commons Parkway' +
            "<br>Huntersville, North Carolina, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:7048920916">(704) 892-0916</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Birkdale Village'
});





push({

    position: LatLng(40.81478970000001, -74.2191782),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/montclair/bloomfieldave">Bloomfield Ave</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">520 Bloomfield Avenue' +
            "<br>Montclair, New Jersey, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:9735090150">(973) 509-0150</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Bloomfield Ave'
});





push({

    position: LatLng(26.3652588, -80.1327395),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/boca-raton/bocaraton">Boca Town Center</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">6000 Glades Road' + '<br/>1148C' +
            "<br>Boca Raton, Florida, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:5613926022">(561) 392-6022</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Boca Town Center'
});





push({

    position: LatLng(-33.89102, 151.277726),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/au/bondi-beach/bondi-beach-local">Bondi Beach Local</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">Pacific Bondi Beach' + '<br/>180 Campbell Parade' +
            "<br>Bondi Beach, New South Wales, Australia" +
            '</p>' +
            '<br>' +
            '<a href="tel:385592995">(03) 8559 2995</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Bondi Beach Local'
});





push({

    position: LatLng(-33.8916693, 151.2502695),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/au/bondi-junction/bondijunction">Bondi Junction</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">500 Oxford Street' + '<br/>Level 4 Shop 4015' +
            "<br>Bondi Junction, New South Wales, Australia" +
            '</p>' +
            '<br>' +
            '<a href="tel:61293889893">(02) 9388 9893</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Bondi Junction'
});





push({

    position: LatLng(42.3524221, -71.047062),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/boston/seaport">Boston Seaport</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">62 Seaport Boulevard' +
            "<br>Boston, Massachusetts, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:8572334884">(857) 233-4884</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Boston Seaport'
});





push({

    position: LatLng(52.243261, -113.809506),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/ca/red-deer/bower-place">Bower Place</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">4900 Molly Banister Drive' +
            "<br>Red Deer, Alberta, Canada" +
            '</p>' +
            '<br>' +
            '<a href="tel:4033400952">(403) 340-0952</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Bower Place'
});





push({

    position: LatLng(45.679582, -111.0364213),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/bozeman/bozeman-seasonal-store">Bozeman Seasonal Store</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">23 East Main Street' +
            "<br>Bozeman, MT, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:4065863860">(406) 586-3860</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Bozeman Seasonal Store'
});





push({

    position: LatLng(33.9148897, -117.8866922),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/brea/brea-mall">Brea Mall</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">1065 Brea Mall' +
            "<br>Brea, California, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:7146720796">(714) 672-0796</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Brea Mall'
});





push({

    position: LatLng(39.4765339, -106.0451609),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/breckenridge/breckenridge-seasonal-store">Breckenridge Seasonal Store</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">Suite A2 - 505 South Main Street' +
            "<br>Breckenridge, Colorado, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:9704533976">(970) 453-3976</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Breckenridge Seasonal Store'
});





push({

    position: LatLng(34.052183, -118.470972),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/los-angeles/brentwood">Brentwood</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">11920 San Vicente Boulevard' +
            "<br>Los Angeles, California, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:3104423563">(310) 442-3563</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Brentwood'
});





push({

    position: LatLng(42.928102, -85.60920899999999),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/bretonvillage/bretonvillage">Breton Village</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">1944 Breton Road Southeast' +
            "<br>Grand Rapids, Michigan, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:6162853228">(616) 285-3228</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Breton Village'
});





push({

    position: LatLng(25.7671683, -80.1930722),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/miami/brickell-city-center">Brickell City Center</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">Suite 256B - 701 South Miami Avenue' +
            "<br>Miami, Florida, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:7864822998">(786) 482-2998</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Brickell City Center'
});





push({

    position: LatLng(45.3937552, -122.7537482),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/tigard/tigard">Bridgeport Village</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">7381 Southwest Bridgeport Road' +
            "<br>Tigard, Oregon, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:5036207438">(503) 620-7438</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Bridgeport Village'
});





push({

    position: LatLng(40.58612189999999, -74.6193168),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/bridgewater/bridgewater">Bridgewater Commons</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">400 Commons Way' + '<br/>Space #2405' +
            "<br>Bridgewater, New Jersey, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:9085263752">(908) 526-3752</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Bridgewater Commons'
});





push({

    position: LatLng(-37.912041, 144.992213),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/au/brighton/brighton">Brighton Store</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">2 Church Street, Brighton' +
            "<br>Brighton, Victoria, Australia" +
            '</p>' +
            '<br>' +
            '<a href="tel:95910450">95910450</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Brighton Store'
});





push({

    position: LatLng(40.7141115, -74.01556699999999),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/new-york/brookfield-place">Brookfield Place</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">250 Vesey Street' +
            "<br>New York, New York, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:2127860315">(212) 786-0315</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Brookfield Place'
});





push({

    position: LatLng(32.079709, -81.095722),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/savannah/broughton-st">Broughton St</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">309 West Broughton Street' +
            "<br>Savannah, Georgia, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:9122326387">(912) 232-6387</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Broughton St'
});





push({

    position: LatLng(53.34242949999999, -6.259931),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/ie/dublin/brown-thomas">Brown Thomas</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">88-95 Grafton Street' + '<br/>Dublin 2' +
            "<br>Dublin, Ireland" +
            '</p>' +
            '<br>' +
            '<a href="tel:35316056666">(01) 605 6666</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Brown Thomas'
});





push({

    position: LatLng(41.911366, -87.677132),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/chicago/bucktown">Bucktown </a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">1627 North Damen Avenue' +
            "<br>Chicago, Illinois, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:7732271869">(773) 227-1869</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Bucktown '
});





push({

    position: LatLng(37.579626, -122.345931),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/burlingame/burlingame">Burlingame Ave</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">1304 Burlingame Ave' +
            "<br>Burlingame, California, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:6503475858">(650) 347-5858</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Burlingame Ave'
});





push({

    position: LatLng(42.4822898, -71.21354389999999),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/burlington/burlingtonmall">Burlington Mall</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">#1313A 75 Middlesex Turnpike ' +
            "<br>Burlington, Massachusetts, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:7812210179">(781) 221-0179</a>' +
            '<h2>1313A 75 Middlesex Turnpike </h2>' +
            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Burlington Mall'
});





push({

    position: LatLng(48.456807, -122.33657),
    
    type: 'outlet',
    icon: '/etc/designs/shop/clientlibs/img/icons/outlets-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/burlington/mountvernon">Burlington Outlet</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">296 Fashion Way' +
            "<br>Burlington, Washington, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:3607072982">(360) 707-2982</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Burlington Outlet'
});





push({

    position: LatLng(-34.941417, 138.641803),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/au/adelaide/burnside">Burnside </a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">447 Portrush Road' +
            "<br>Glenside, South Australia, Australia" +
            '</p>' +
            '<br>' +
            '<a href="tel:883798796">(08) 8379 8796</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Burnside '
});





push({

    position: LatLng(34.2177613, -119.0580488),
    
    type: 'outlet',
    icon: '/etc/designs/shop/clientlibs/img/icons/outlets-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/camarillo/camarillo-premium-outlets">Camarillo Premium Outlets</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">Suite 714 850 East Ventura Boulevard' +
            "<br>Camarillo, California, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:8053833673">(805) 383-3673</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Camarillo Premium Outlets'
});





push({

    position: LatLng(-37.8298157, 145.0569791),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/au/camberwell/camberwell">Camberwell</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">769 Burke Road' +
            "<br>Camberwell, Victoria, Australia" +
            '</p>' +
            '<br>' +
            '<a href="tel:398825162">(03) 9882 5162</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Camberwell'
});





push({

    position: LatLng(29.951217, -90.0649925),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/new-orleans/canalplace">Canal Place</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">333 Canal Street' + '<br/>#100' +
            "<br>New Orleans, Louisiana, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:5045223264">(504) 522-3264</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Canal Place'
});





push({

    position: LatLng(51.503163, -0.0185147),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/gb/london/canary-wharf">Canary Wharf</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">45 Bank Street' + '<br/>Unit 80' +
            "<br>London, England, United Kingdom" +
            '</p>' +
            '<br>' +
            '<a href="tel:0"></a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Canary Wharf'
});





push({

    position: LatLng(-35.2797855, 149.1329263),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/au/canberra/canberraaus">Canberra store </a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">148 Bunda Street' +
            "<br>Canberra, Australian Capital Territory, Australia" +
            '</p>' +
            '<br>' +
            '<a href="tel:262300610">(02) 6230 0610</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Canberra store '
});





push({

    position: LatLng(45.567468, -73.749966),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/ca/laval/carrefourlaval">Carrefour Laval</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">3035 Boulevard le Carrefour' + '<br/>Local D012A' +
            "<br>Laval, Quebec, Canada" +
            '</p>' +
            '<br>' +
            '<a href="tel:4506867562">(450) 686-7562</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Carrefour Laval'
});





push({

    position: LatLng(36.1132302, -95.9759017),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/tulsa/centre1">Center1</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">3506 South Peoria Avenue' + '<br/>Center 1' +
            "<br>Tulsa, Oklahoma, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:9187424243">(918) 742-4243</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Center1'
});





push({

    position: LatLng(34.0599924, -118.4200376),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/los-angeles/century-city">Century City</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">10250 Santa Monica Boulevard' + '<br/>Unit 1960' +
            "<br>Los Angeles, California, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:3102770843">(310) 277-0843</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Century City'
});





push({

    position: LatLng(30.6255, -96.34002),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/college-station/century-square">Century Square</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">155 Century Court' + '<br/>Suite 109' +
            "<br>College Station, Texas, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:9797045376">(979) 704-5376</a>' +
            '<h2>grand opening 10.26</h2>' +
            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Century Square'
});





push({

    position: LatLng(-37.8865468, 145.0831083),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/au/melbourne/chadstone">Chadstone Shopping Centre</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">1341 Dandenong Road' + '<br/>Shop 329' +
            "<br>Melbourne, Victoria, Australia" +
            '</p>' +
            '<br>' +
            '<a href="tel:395648002">(03) 9564 8002</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Chadstone Shopping Centre'
});





push({

    position: LatLng(46.098754, -64.76078799999999),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/ca/dieppe/champlain-place">Champlain Place</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">477 Paul Street' + '<br/>Unit F001A' +
            "<br>Dieppe, NB, Canada" +
            '</p>' +
            '<br>' +
            '<a href="tel:5068589770">(506) 858-9770</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Champlain Place'
});





push({

    position: LatLng(33.3016651, -111.8980181),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/chandler/chandler">Chandler Blvd</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">3111 West Chandler Boulevard' + '<br/>1200' +
            "<br>Chandler, Arizona, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:4808990545">(480) 899-0545</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Chandler Blvd'
});





push({

    position: LatLng(-37.849632, 144.993983),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/au/prahran/chapelstreet">Chapel Street </a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">256-260 Chapel Street' +
            "<br>Prahran, Victoria, Australia" +
            '</p>' +
            '<br>' +
            '<a href="tel:61395100277">(03) 9510 0277</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Chapel Street '
});





push({

    position: LatLng(-33.795108, 151.186831),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/au/chatswood/chatswood">Chatswood Chase</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">345 Victoria Avenue' +
            "<br>Chatswood, New South Wales, Australia" +
            '</p>' +
            '<br>' +
            '<a href="tel:610294100166">(02) 9410 0166</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Chatswood Chase'
});





push({

    position: LatLng(30.652596, 104.084036),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/cn/chengdu/taikooli-chengdu">Chengdu - Taikoo Li</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">8 Zhong Sha Mao Jie' +
            "<br>Chengdu, Sichuan, Mainland China" +
            '</p>' +
            '<br>' +
            '<a href="tel:0"></a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Chengdu - Taikoo Li'
});





push({

    position: LatLng(30.649821, 104.116098),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/cn/chengdu/mixc-chengdu">Chengdu Mix C </a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">Shop163, 8 Shuang Qing Lu, ' + '<br/> Chenghua District' +
            "<br>Chengdu, Sichuan, Mainland China" +
            '</p>' +
            '<br>' +
            '<a href="tel:0"></a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Chengdu Mix C '
});





push({

    position: LatLng(37.5266422, 127.040007),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/kr/seoul/cheongdam-store">Cheongdam</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">835 Seolleung-ro' +
            "<br>Seoul, Gangnam-gu, South Korea" +
            '</p>' +
            '<br>' +
            '<a href="tel:262030199">02-6203-0199</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Cheongdam'
});





push({

    position: LatLng(-27.3410343, 153.010869),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/au/chermside/chermside">Chermside</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">Gympie Road' +
            "<br>Brisbane, Queensland, Australia" +
            '</p>' +
            '<br>' +
            '<a href="tel:733598294">(07) 3359 8294</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Chermside'
});





push({

    position: LatLng(39.7164456, -104.9531262),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/denver/cherrycreek">Cherry Creek</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">3000 East 1st Street' + '<br/>Unit 1103' +
            "<br>Denver, Colorado, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:7209416470">(720) 941-6470</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Cherry Creek'
});





push({

    position: LatLng(39.9418533, -75.0261976),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/new-jersey/cherry-hill">Cherry Hill Mall </a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">2000 Route 38' + '<br/>Unit 1143' +
            "<br>Cherry Hill, New Jersey, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:8566625824">(856) 662-5824</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Cherry Hill Mall '
});





push({

    position: LatLng(42.3227561, -71.16898809999999),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/newton/chestnuthill">Chestnut Hill</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">55 Boylston Street' +
            "<br>Newton, Massachusetts, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:6177136316">(617) 713-6316</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Chestnut Hill'
});





push({

    position: LatLng(41.9754926, -87.8659742),
    
    type: 'outlet',
    icon: '/etc/designs/shop/clientlibs/img/icons/outlets-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/chicago/chicago-outlet">Chicago Outlet</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">5220 Fashion Outlets Way' +
            "<br>Chicago, Illinois, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:8472330057">(847) 233-0057</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Chicago Outlet'
});





push({

    position: LatLng(34.00184, -117.73026),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/chinohills/chino-hills-seasonal">Chino Hills Seasonal</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">13850 City Center Drive' + '<br/>Unit 5010' +
            "<br>Chino Hills, California, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:9093649156">(909) 364-9156</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Chino Hills Seasonal'
});





push({

    position: LatLng(50.9951926, -114.0742866),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/ca/calgary/chinookcentre">Chinook Center</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">6455 Macleod Trail Southwest' + '<br/>Suite #0126' +
            "<br>Calgary, Alberta, Canada" +
            '</p>' +
            '<br>' +
            '<a href="tel:4032537373">(403) 253-7373</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Chinook Center'
});





push({

    position: LatLng(29.52082, 106.517753),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/cn/sichuan/chongqing-mixc">Chongqing MixC</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">L280 - No.55 Xiejiawan Centre Street' +
            "<br>Chongqing, Sichuan, Mainland China" +
            '</p>' +
            '<br>' +
            '<a href="tel:2368630689">023 6863 0689</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Chongqing MixC'
});





push({

    position: LatLng(-43.5328914, 172.6388262),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/nz/christchurch/christchurch">Christchurch Store</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">145 - 161 Cashel St' + '<br/>Tenancy B, Grand Central Building' +
            "<br>Christchurch, Canterbury, New Zealand" +
            '</p>' +
            '<br>' +
            '<a href="tel:33669937">03-366 9937</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Christchurch Store'
});





push({

    position: LatLng(44.4794966, -73.2127496),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/burlington/burlingtonvt">Church Street</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">31 Church Street' +
            "<br>Burlington, Vermont, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:8028600732">(802) 860-0732</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Church Street'
});





push({

    position: LatLng(29.7413678, -95.77504049999999),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/katy/cinco-ranch-seasonal">Cinco Ranch Seasonal</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">23501 Cinco Ranch Boulevard' + '<br/>Unit B-150' +
            "<br>Katy, Texas, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:2815743580">(281) 574-3580</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Cinco Ranch Seasonal'
});





push({

    position: LatLng(40.7681947, -111.8918819),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/salt-lake-city/trolleysquare">City Creek Center</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">50 Main Street' + '<br/>Suite 270' +
            "<br>Salt Lake City, Utah, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:8013590577">(801) 359-0577</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'City Creek Center'
});





push({

    position: LatLng(52.5045065, 13.3295381),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/de/berlin/city-west-store">City West</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">Kurfürstendamm 24' +
            "<br>Berlin, Berlin, Germany" +
            '</p>' +
            '<br>' +
            '<a href="tel:3072616914">030 72616914</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'City West'
});





push({

    position: LatLng(45.4358538, -122.5728022),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/happy-valley/clackamas-seasonal">Clackamas Seasonal</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">12000 Southeast 82nd Avenue' + '<br/>Unit E103' +
            "<br>Happy Valley, Oregon, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:5036590753">(503) 659-0753</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Clackamas Seasonal'
});





push({

    position: LatLng(-31.9820352, 115.7807663),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/au/claremont/claremont-store">Claremont Store</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">9 Bay View Terrace' + '<br/>L2. 232 Claremont Quarter' +
            "<br>Claremont, Western Australia, Australia" +
            '</p>' +
            '<br>' +
            '<a href="tel:893842601">(08) 9384 2601</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Claremont Store'
});





push({

    position: LatLng(38.8883682, -77.0924903),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/arlington/clarendon">Clarendon Blvd</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">2847 Clarendon Boulevard' + '<br/>Unit 150' +
            "<br>Arlington, Virginia, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:7038070539">(703) 807-0539</a>' +
            '<h2>www.facebook.com/lululemonArlington</h2>' +
            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Clarendon Blvd'
});





push({

    position: LatLng(35.511647, -97.53376600000001),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/oklahoma-city/classencurve">Classen Curve</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">5854 North Classen Boulevard' + '<br/>Unit P-11' +
            "<br>Oklahoma City, Oklahoma, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:4058428346">(405) 842-8346</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Classen Curve'
});





push({

    position: LatLng(39.9987206, -86.1294932),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/carmel/clay-terrace-seasonal">Clay Terrace Seasonal</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">14511 Clay Terrace Boulevard' + '<br/>Unit 100' +
            "<br>Carmel, Indiana, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:3178445943">(317) 844-5943</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Clay Terrace Seasonal'
});





push({

    position: LatLng(40.970296, -73.9564259),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/new-jersey/closter-plaza">Closter Plaza</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">19 Vervalen Street' + '<br/>#61' +
            "<br>Closter, New Jersey, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:2017674639">(201) 767-4639</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Closter Plaza'
});





push({

    position: LatLng(43.1101135, -77.546447),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/rochester/cloverviewplaza">Clover View Plaza</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">2924 Monroe Avenue' +
            "<br>Rochester, New York, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:5855869304">(585) 586-9304</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Clover View Plaza'
});





push({

    position: LatLng(-37.808073, 144.989032),
    
    type: 'outlet',
    icon: '/etc/designs/shop/clientlibs/img/icons/outlets-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/au/collingwood/melbourneoutlet">Collingwood Factory Outlet</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">30 Rupert St' +
            "<br>Collingwood, Victoria, Australia" +
            '</p>' +
            '<br>' +
            '<a href="tel:394177848">(03) 9417 7848</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Collingwood Factory Outlet'
});





push({

    position: LatLng(50.9396003, 6.945849099999999),
    
    type: 'showroom',
    icon: '/etc/designs/shop/clientlibs/img/icons/showrooms-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/de/cologne/cologne">Cologne Showroom</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">Shop Unity St. Apern St. 17-21 ' +
            "<br>Cologne, Cologne, Germany" +
            '</p>' +
            '<br>' +
            '<a href="tel:22127745339">0221 27745339</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Cologne Showroom'
});





push({

    position: LatLng(34.1460441, -118.1526158),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/pasadena/pasadena">Colorado Blvd</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">103 West Colorado Boulevard' +
            "<br>Pasadena, California, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:6267920791">(626) 792-0791</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Colorado Blvd'
});





push({

    position: LatLng(38.9502922, -92.3278043),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/columbia/columbia-seasonal">Columbia Seasonal</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">111 South 9th Street' + '<br/>Suite 170' +
            "<br>Columbia, Missouri, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:0"></a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Columbia Seasonal'
});





push({

    position: LatLng(43.4977272, -80.52832579999999),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/ca/waterloo/conestoga-mall">Conestoga Mall</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">550 King Street North' +
            "<br>Waterloo, Ontario, Canada" +
            '</p>' +
            '<br>' +
            '<a href="tel:5198850141">(519) 885-0141</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Conestoga Mall'
});





push({

    position: LatLng(49.2795486, -122.7989549),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/ca/coquitlam/coquitlam">Coquitlam Centre</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">2929 Barnet Highway' + '<br/>Unit #2706' +
            "<br>Coquitlam, British Columbia, Canada" +
            '</p>' +
            '<br>' +
            '<a href="tel:6044643800">(604) 464-3800</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Coquitlam Centre'
});





push({

    position: LatLng(50.45049849999999, -104.6114122),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/ca/regina/regina">Cornwall Centre</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">2114 11th Avenue' + '<br/>Unit 102' +
            "<br>Regina, Saskatchewan, Canada" +
            '</p>' +
            '<br>' +
            '<a href="tel:3065252989">(306) 525-2989</a>' +
            '<h2>Temporary Space located on 2nd level of the Cornwall Centre (across from Saje Wellness)</h2>' +
            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Cornwall Centre'
});





push({

    position: LatLng(39.0416359, -94.593007),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/kansas-city/kansascitymo">Country Club Plaza</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">401 Nichols Road' +
            "<br>Kansas City, Missouri, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:8165312894">(816) 531-2894</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Country Club Plaza'
});





push({

    position: LatLng(34.035143, -118.6849123),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/malibu/country-mart">Country Mart</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">3880 Cross Creek Road' +
            "<br>Malibu, California, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:3104561237">(310) 456-1237</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Country Mart'
});





push({

    position: LatLng(51.512701, -0.12527),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/gb/london/coventgardenstore">Covent Garden</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">125-126 Long Acre' +
            "<br>London, England, United Kingdom" +
            '</p>' +
            '<br>' +
            '<a href="tel:2078365052">020 7836 5052</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Covent Garden'
});





push({

    position: LatLng(37.797319, -122.4318165),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/san-francisco/cowhollow">Cow Hollow</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">1981 Union Street' +
            "<br>San Francisco, California, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:4157765858">(415) 776-5858</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Cow Hollow'
});





push({

    position: LatLng(47.6588248, -117.4227231),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/spokane/crescentcourt">Crescent Court</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">707 West Main Avenue' +
            "<br>Spokane, Washington, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:5097470276">(509) 747-0276</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Crescent Court'
});





push({

    position: LatLng(41.4575133, -81.950598),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/westlake/crocker-park">Crocker Park</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">201 Market Street' +
            "<br>Westlake, Ohio, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:4402500415">(440) 250-0415</a>' +
            '<h2>Now Open</h2>' +
            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Crocker Park'
});





push({

    position: LatLng(42.689889, -73.853465),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/albany/crossgates-mall-store">Crossgates Mall </a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">1 Crossgates Mall Road' + '<br/>Suite B203' +
            "<br>Albany, New York, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:5184560638">(518) 456-0638</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Crossgates Mall '
});





push({

    position: LatLng(43.6698404, -79.3931556),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/ca/toronto/yorkville">Cumberland St.</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">153 Cumberland Street' +
            "<br>Toronto, Ontario, Canada" +
            '</p>' +
            '<br>' +
            '<a href="tel:4169649544">(416) 964-9544</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Cumberland St.'
});





push({

    position: LatLng(25.69053, -80.3125),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/miami/dadeland-seasonal">Dadeland Seasonal</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">7535 North Kendall Drive' +
            "<br>Miami, Florida, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:3056621750">(305) 662-1750</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Dadeland Seasonal'
});





push({

    position: LatLng(34.6737928, 135.5008272),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/jp/osaka/shinsaibashi-daimaru">Daimaru Shinsaibashi</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">1-7-1 Shinsaibashi-Suji Chuo-ku' +
            "<br>Osaka, Japan" +
            '</p>' +
            '<br>' +
            '<a href="tel:0"></a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Daimaru Shinsaibashi'
});





push({

    position: LatLng(32.928493, -96.820319),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/dallas/dallasgalleria">Dallas Galleria</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">#2285 13350 N. Dallas Parkway' +
            "<br>Dallas, Texas, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:9723852316">(972) 385-2316</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Dallas Galleria'
});





push({

    position: LatLng(41.381317, -73.478368),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/danbury/danburyfairmall">Danbury Fair Mall</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">D-201 - 7 Backus Ave' +
            "<br>Danbury, Connecticut, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:2037923436">(203) 792-3436</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Danbury Fair Mall'
});





push({

    position: LatLng(42.1610659, -88.0543942),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/deer-park/deerpark">Deer Park Town Center</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">20530 North Rand Road' +
            "<br>Deer Park, Illinois, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:8474386341">(847) 438-6341</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Deer Park Town Center'
});





push({

    position: LatLng(33.8258145, -118.3513984),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/torrance/del-amo-fashion-center">Del Amo Fashion Center</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">21540 Hawthorne Boulevard' +
            "<br>Torrance, California, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:3102143858">(310) 214-3858</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Del Amo Fashion Center'
});





push({

    position: LatLng(36.5850983, -121.8941453),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/monterey/del-monte-center">Del Monte Center</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">440 Del Monte Center' + '<br/>Suite 47' +
            "<br>Monterey, California, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:8313751950">(831) 375-1950</a>' +
            '<h2>facebook.com/lululemonmonterey</h2>' +
            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Del Monte Center'
});





push({

    position: LatLng(42.1785734, -70.90907419999999),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/hingham/derbystreet">Derby St. Shops</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">94 Derby Street' + '<br/>Suite 219 & 221' +
            "<br>Hingham, Massachusetts, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:7817491169">(781) 749-1169</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Derby St. Shops'
});





push({

    position: LatLng(41.5898669, -93.6143007),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/des-moines/des-moines-seasonal">Des Moines Seasonal Store</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">Suite 108 - 219 East Grand Avenue' +
            "<br>Des Moines, Iowa, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:5152446542">(515) 244-6542</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Des Moines Seasonal Store'
});





push({

    position: LatLng(33.9289171, -116.8158445),
    
    type: 'outlet',
    icon: '/etc/designs/shop/clientlibs/img/icons/outlets-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/cabazon/desert-hills-outlets">Desert Hills Premium Outlets </a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">48400 Seminole Drive' + '<br/>Unit 502 ' +
            "<br>Cabazon, California, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:9519228182">(951) 922-8182</a>' +
            '<h2>We\'re here!</h2>' +
            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Desert Hills Premium Outlets '
});





push({

    position: LatLng(43.0717902, -76.17119029999999),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/destiny/destiny">Destiny Store</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">9596 Destiny USA Drive' +
            "<br>Syracuse, New York, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:3154224290">(315) 422-4290</a>' +
            '<h2>We\'re here!</h2>' +
            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Destiny Store'
});





push({

    position: LatLng(42.2743221, -83.0018047),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/ca/Windsor/devonshire-store">Devonshire Mall</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">3100 Howard Avenue' + '<br/>Unit E12' +
            "<br>Windsor, Ontario, Canada" +
            '</p>' +
            '<br>' +
            '<a href="tel:5199721140">(519) 972-1140</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Devonshire Mall'
});





push({

    position: LatLng(42.2746699, -83.00355619999999),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/ca/Windsor/Devonshire">Devonshire Mall Seasonal Store</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">3100 Howard Avenue' +
            "<br>Windsor, Ontario, Canada" +
            '</p>' +
            '<br>' +
            '<a href="tel:5199721140">(519) 972-1140</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Devonshire Mall Seasonal Store'
});





push({

    position: LatLng(-37.787117, 145.126144),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/au/melbourne/melbourne">Doncaster Store</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">619 Doncaster Road' +
            "<br>Melbourne, Victoria, Australia" +
            '</p>' +
            '<br>' +
            '<a href="tel:398401524">(03) 9840 1524</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Doncaster Store'
});





push({

    position: LatLng(42.3347882, -83.04931309999999),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/detroit/downtown-detroit-local">Downtown Detroit Local</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">1459 Woodward Avenue' +
            "<br>Detroit, Michigan, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:3139650806">(313) 965-0806</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Downtown Detroit Local'
});





push({

    position: LatLng(40.8145053, -96.7007828),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/lincoln/downtown-lincoln-local">Downtown Lincoln - Local</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">144 North 14th Street' + '<br/>Suite 101' +
            "<br>Lincoln, Nebraska, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:0"></a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Downtown Lincoln - Local'
});





push({

    position: LatLng(36.150941, -115.333686),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/las-vegas/downtownsummerlin">Downtown Summerlin</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">1870 Festival Plaza Drive' + '<br/>Suite 100' +
            "<br>Las Vegas, Nevada, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:7022404175">(702) 240-4175</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Downtown Summerlin'
});





push({

    position: LatLng(25.0805422, 55.1403426),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/ae/dubai/dubai-marina-mall">Dubai Marina Mall</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">Emaar Drive, Dubai Marina' +
            "<br>Dubai, AE" +
            '</p>' +
            '<br>' +
            '<a href="tel:971043958527">04 395 8527</a>' +
            '<h2>Breathe deeply and appreciate the moment</h2>' +
            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Dubai Marina Mall'
});





push({

    position: LatLng(1.2784409, 103.8432547),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/sg/singapore/duxton-road">Duxton Road</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">79 Duxton Road' +
            "<br>Singapore, Singapore, Singapore" +
            '</p>' +
            '<br>' +
            '<a href="tel:62218130">6221 8130</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Duxton Road'
});





push({

    position: LatLng(40.9634379, -72.18615299999999),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/east-hampton/easthampton">East Hampton store</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">35 Main Street' +
            "<br>East Hampton, New York, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:6313244192">(631) 324-4192</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'East Hampton store'
});





push({

    position: LatLng(40.0498627, -82.9157517),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/columbus/eastontownctr">Easton Town Ctr</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">3960 Easton Station' +
            "<br>Columbus, Ohio, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:6144766971">(614) 476-6971</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Easton Town Ctr'
});





push({

    position: LatLng(43.0278153, -77.4429449),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/victor/eastview-mall">Eastview Mall</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">7979 Pittsford Victor Road' + '<br/>Unit F8' +
            "<br>Victor, New York, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:5852239676">(585) 223-9676</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Eastview Mall'
});





push({

    position: LatLng(42.7640917, -84.5176492),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/lansing/eastwood-towne-center">Eastwood Towne Center</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">3032 Towne Centre Boulevard' +
            "<br>East Lansing, Michigan, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:5173161198">(517) 316-1198</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Eastwood Towne Center'
});





push({

    position: LatLng(43.6530812, -79.3807893),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/ca/toronto/eatoncentre">Eaton Ctr. </a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">218 Yonge street' + '<br/>Unit 3-102B' +
            "<br>Toronto, Ontario, Canada" +
            '</p>' +
            '<br>' +
            '<a href="tel:4165970422">(416) 597-0422</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Eaton Ctr. '
});





push({

    position: LatLng(55.9533297, -3.1998836),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/gb/edinburgh/edinburgh-store">Edinburgh Store</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">57 George Street' +
            "<br>Edinburgh, Scotland, United Kingdom" +
            '</p>' +
            '<br>' +
            '<a href="tel:1312251151">0131 225 1151</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Edinburgh Store'
});





push({

    position: LatLng(31.8345335, -106.5450197),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/el-paso/el-paso-local">El Paso Local</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">La Villata on Mesa, 6801 North Mesa Street' + '<br/>Suite A-1' +
            "<br>El Paso, Texas, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:9158750596">(915) 875-0596</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'El Paso Local'
});





push({

    position: LatLng(31.775538, -106.50149),
    
    type: 'showroom',
    icon: '/etc/designs/shop/clientlibs/img/icons/showrooms-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/el-paso/elpasoshowroom">El Paso Showroom</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">2430 N. Mesa' +
            "<br>El Paso, Texas, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:9153510497">(915) 351-0497</a>' +
            '<h2>https://www.facebook.com/lululemonelpaso/timeline</h2>' +
            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'El Paso Showroom'
});





push({

    position: LatLng(43.5111419, -96.7758084),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/sioux-falls/empire-mall">Empire Mall</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">4001 West 41st Street' + '<br/>Suite 0318B' +
            "<br>Sioux Falls, SD, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:6053613952">(605) 361-3952</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Empire Mall'
});





push({

    position: LatLng(-37.812448, 144.963627),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/au/melbourne/emporium">Emporium</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">275-321 Lonsdale Street' +
            "<br>Melbourne, Victoria, Australia" +
            '</p>' +
            '<br>' +
            '<a href="tel:61396549561">(03) 9654 9561</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Emporium'
});





push({

    position: LatLng(41.46339510000001, -81.47793349999999),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/woodmere/woodmere">Eton Chagrin</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">28699 Chagrin Boulevard' + '<br/>Suite 200' +
            "<br>Woodmere, Ohio, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:2165911294">(216) 591-1294</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Eton Chagrin'
});





push({

    position: LatLng(44.0659362, -123.0783822),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/eugene/eugene-seasonal-store">Eugene Seasonal Store</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">323 Oakway Road' + '<br/>Suite F' +
            "<br>Eugene, Oregon, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:5413458215">(541) 345-8215</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Eugene Seasonal Store'
});





push({

    position: LatLng(43.7777578, -79.3444512),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/ca/toronto/fairview-mall">Fairview Mall</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">1800 Sheppard Avenue East' + '<br/>Unit 2031A, Fairview Mall' +
            "<br>Toronto, Ontario, Canada" +
            '</p>' +
            '<br>' +
            '<a href="tel:4167569612">(416) 756-9612</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Fairview Mall'
});





push({

    position: LatLng(45.463805, -73.83086),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/ca/pointe-claire/fairview">Fairview Pointe-Claire</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">6815, route Transcanadienne' + '<br/>Unit G013C' +
            "<br>Pointe-Claire, Quebec, Canada" +
            '</p>' +
            '<br>' +
            '<a href="tel:5146953613">(514) 695-3613</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Fairview Pointe-Claire'
});





push({

    position: LatLng(33.6168201, -117.8725185),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/newport-beach/fashionisland">Fashion Island</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">203 Newport Center Drive' +
            "<br>Newport Beach, California, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:9496449642">(949) 644-9642</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Fashion Island'
});





push({

    position: LatLng(40.6381504, -111.8887876),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/murray/fashionplace">Fashion Place</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">6191 South State Street' + '<br/>Unit 1575' +
            "<br>Murray, Utah, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:8012811082">(801) 281-1082</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Fashion Place'
});





push({

    position: LatLng(36.128213, -115.172998),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/las-vegas/fashionshowmall">Fashion Show Mall</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">Unit 2040 3200 South Las Vegas Boulevard' +
            "<br>Las Vegas, Nevada, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:7026961282">(702) 696-1282</a>' +
            '<h2>https://www.facebook.com/lululemonLasVegas</h2>' +
            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Fashion Show Mall'
});





push({

    position: LatLng(32.767446, -117.165648),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/san-diego/fashionvalley">Fashion Valley</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">890A - 7007 Friars Rd' +
            "<br>San Diego, California, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:6196923628">(619) 692-3628</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Fashion Valley'
});





push({

    position: LatLng(41.77021690000001, -72.5442815),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/fayetteville/fayetteville-local">Fayetteville Local </a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">200 West Center Street' + '<br/>Suite 2' +
            "<br>Fayetteville , Arkansas, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:4794446917">(479) 444-6917</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Fayetteville Local '
});





push({

    position: LatLng(22.3372788, 114.1745274),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/hk/hong-kong/festival-walk">Festival Walk</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">80 Tat Chee Avenue' +
            "<br>Hong Kong SAR, Kowloon, Hong Kong, China" +
            '</p>' +
            '<br>' +
            '<a href="tel:24726568">2472 6568</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Festival Walk'
});





push({

    position: LatLng(36.8085037, -119.8046807),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/fresno/fig-garden-village-store">Fig Garden Village</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">712 West Shaw Avenue' +
            "<br>Fresno, California, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:5592244647">(559) 224-4647</a>' +
            '<h2>We\'re here</h2>' +
            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Fig Garden Village'
});





push({

    position: LatLng(29.591094, -95.6249248),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/sugar-land/first-colony-mall">First Colony Mall</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">16535 Southwest Freeway' +
            "<br>Sugar Land, Texas, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:2815651424">(281) 565-1424</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'First Colony Mall'
});





push({

    position: LatLng(35.203468, -111.6487158),
    
    type: 'showroom',
    icon: '/etc/designs/shop/clientlibs/img/icons/showrooms-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/flagstaff/flagstaff-showroom">Flagstaff Showroom</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">516 North Humphreys Street' +
            "<br>Flagstaff, Arizona, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:9282140997">(928) 214-0997</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Flagstaff Showroom'
});





push({

    position: LatLng(40.7379574, -73.99272049999999),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/new-york/Flatiron">Flatiron</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">114 5th Avenue' +
            "<br>New York, New York, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:2126270314">(212) 627-0314</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Flatiron'
});









push({

    position: LatLng(40.5885303, -105.0752843),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/fort-collins/the-local-fort-collins">Fort Collins Local</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">217 Linden Street' +
            "<br>Fort Collins, Colorado, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:9704934809">(970) 493-4809</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Fort Collins Local'
});





push({

    position: LatLng(32.7292066, -97.3622352),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/fort-worth/fortworth">Fort Worth Store</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">1540 South University Drive' + '<br/>Unit 110' +
            "<br>Fort Worth, Texas, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:8178828075">(817) 882-8075</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Fort Worth Store'
});





push({

    position: LatLng(36.1173432, -115.1763623),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/las-vegas/forum-shops-at-caesars-">Forum Shops at Caesars</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">3500 South Las Vegas Boulevard' + '<br/>Unit F01A' +
            "<br>Las Vegas, Nevada, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:7024744251">(702) 474-4251</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Forum Shops at Caesars'
});





push({

    position: LatLng(44.2685246, -88.4713428),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/appleton/fox-river-seasonal-store">Fox River Seasonal Store</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">4301 West Wisconsin Avenue' + '<br/>Space #0434' +
            "<br>Appleton, Wisconsin, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:9207394982">(920) 739-4982</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Fox River Seasonal Store'
});





push({

    position: LatLng(50.1118753, 8.677601),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/de/frankfurt/frankfurt-store">Frankfurt Store</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">4 Am Salzhaus' +
            "<br>Frankfurt, Hesse, Germany" +
            '</p>' +
            '<br>' +
            '<a href="tel:6990559155">069 90559155</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Frankfurt Store'
});





push({

    position: LatLng(40.2536455, -74.3001769),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/new-jersey/freehold-raceway-mall">Freehold Raceway Mall  </a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">3710 Route 9' +
            "<br>Freehold, New Jersey, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:7328661685">(732) 866-1685</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Freehold Raceway Mall  '
});





push({

    position: LatLng(36.0867514, -79.837484),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/greensboro/friendly-center">Friendly Center</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">3326 West Friendly Avenue #101' +
            "<br>Greensboro, North Carolina, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:3368547924">(336) 854-7924</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Friendly Center'
});





push({

    position: LatLng(41.8850081, -87.6507807),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/chicago/fulton-market-local">Fulton Market Local</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">167 North Sangamon Street' +
            "<br>Chicago, Illinois, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:3122432788">(312) 243-2788</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Fulton Market Local'
});





push({

    position: LatLng(35.6699532, 139.764398),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/jp/tokyo/ginza-six">GINZA SIX</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">6-10-1 Ginza' +
            "<br>Tokyo, Japan" +
            '</p>' +
            '<br>' +
            '<a href="tel:355375387">03-5537-5387</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'GINZA SIX'
});





push({

    position: LatLng(29.6216601, -82.3791676),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/gainesville/gainesville-seasonal">Gainesville Seasonal</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">3730 Southwest Archer Road' + '<br/>Suite 210' +
            "<br>Gainesville, Florida, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:3523731256">(352) 373-1256</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Gainesville Seasonal'
});





push({

    position: LatLng(39.114889, -77.205982),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/gaithersburg/gaithersburg-store">Gaithersburg Store</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">138 Crown Park Ave.' +
            "<br>Gaithersburg, Maryland, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:2406830484">(240) 683-0484</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Gaithersburg Store'
});





push({

    position: LatLng(44.8765803, -93.3282947),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/edina/galleriaedina">Galleria Edinapick</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">3385 Galleria' + '<br/>Suite 3260' +
            "<br>Edina, Minnesota, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:9529200756">(952) 920-0756</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Galleria Edinapick'
});





push({

    position: LatLng(38.7734419, -121.2692846),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/roseville/roseville">Galleria at Roseville</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">1151 Galleria Boulevard' + '<br/>Space 115' +
            "<br>Roseville, California, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:9167840366">(916) 784-0366</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Galleria at Roseville'
});





push({

    position: LatLng(41.76399199999999, -71.45821699999999),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/cranston/gardencity">Garden City Center</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">30 Hillside Road' +
            "<br>Cranston, Rhode Island, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:4019421814">(401) 942-1814</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Garden City Center'
});





push({

    position: LatLng(40.9181079, -74.07817159999999),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/paramus/gardenstate">Garden State Plaza</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">100 Garden State Plaza Boulevard' +
            "<br>Paramus, New Jersey, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:2012912590">(201) 291-2590</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Garden State Plaza'
});





push({

    position: LatLng(-38.157319, 144.3449),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/au/newtown/geelong-popup">Geelong popup</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">343-347 Pakington Street' + '<br/>Shop 2' +
            "<br>Newtown, Victoria, Australia" +
            '</p>' +
            '<br>' +
            '<a href="tel:352295816">(03) 5229 5816</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Geelong popup'
});





push({

    position: LatLng(38.9054, -77.064813),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/washington/georgetownstore">Georgetown</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">3265 M Street Northwest' +
            "<br>Washington, District of Columbia, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:2023331738">(202) 333-1738</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Georgetown'
});





push({

    position: LatLng(44.4130869, -79.7080849),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/ca/barrie/georgian-mall-store">Georgian Mall store</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">509 Bayfield Street' + '<br/>Unit N038A' +
            "<br>Barrie, Ontario, Canada" +
            '</p>' +
            '<br>' +
            '<a href="tel:7057228133">(705) 722-8133</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Georgian Mall store'
});





push({

    position: LatLng(37.0250971, -121.5669431),
    
    type: 'outlet',
    icon: '/etc/designs/shop/clientlibs/img/icons/outlets-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/gilroy/gilroy">Gilroy Premium Outlets</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">8555 San Ysidro Avenue' + '<br/>Suite D115' +
            "<br>Gilroy, California, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:4088464281">(408) 846-4281</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Gilroy Premium Outlets'
});





push({

    position: LatLng(32.8433979, -117.2734251),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/san-diego/lajolla">Girard St</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">7835 Girard Street ' +
            "<br>San Diego, California, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:8584594407">(858) 459-4407</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Girard St'
});





push({

    position: LatLng(44.9397416, -93.1367818),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/saint-paul/grandave">Grand Ave. St. Paulpicpick</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">870 Grand Avenue' +
            "<br>Saint Paul, Minnesota, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:6512223123">(651) 222-3123</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Grand Ave. St. Paulpicpick'
});





push({

    position: LatLng(37.7900546, -122.4055512),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/san-francisco/unionsquare">Grant Ave </a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">327 Grant Avenue' +
            "<br>San Francisco, California, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:4154020914">(415) 402-0914</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Grant Ave '
});





push({

    position: LatLng(30.3788596, -86.3146182),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/santa-rosa-beach/grayton-beach">Grayton Beach</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">500 Grand Boulevard' + '<br/>Suite 107K' +
            "<br>Miramar Beach, Florida, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:8505340701">(850) 534-0701</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Grayton Beach'
});





push({

    position: LatLng(36.0215568, -115.086928),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/henderson/green-valley-seasonal-store">Green Valley Seasonal Store</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">2240 Village Walk Drive' + '<br/>Suite #130' +
            "<br>Henderson, Nevada, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:7026172250">(702) 617-2250</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Green Valley Seasonal Store'
});





push({

    position: LatLng(39.6941236, -84.10139649999999),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/beavercreek/greene-town-center">Greene Town Center</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">68 Plum Street' +
            "<br>beavercreek, Ohio, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:9374262062">(937) 426-2062</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Greene Town Center'
});





push({

    position: LatLng(34.8451836, -82.40204399999999),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/greenville/greenville0">Greenville</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">600 South Main Street' +
            "<br>Greenville, South Carolina, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:8642829022">(864) 282-9022</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Greenville'
});





push({

    position: LatLng(41.028514, -73.62592699999999),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/greenwich/greenwich">Greenwich Ave</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">151 Greenwich Avenue' +
            "<br>Greenwich, Connecticut, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:2036225046">(203) 622-5046</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Greenwich Ave'
});





push({

    position: LatLng(40.33336990000001, -74.0628558),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/shrewsbury/shrewsbury">Grove at Shrewsbury</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">553 Route 35' + '<br/>Space # N-7' +
            "<br>Shrewsbury, New Jersey, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:7325761586">(732) 576-1586</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Grove at Shrewsbury'
});





push({

    position: LatLng(23.1169583, 113.3300993),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/cn/guangzhou/guangzhou-igc">Guangzhou IGC</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">No. 222,  Xing Min Lu, Pearl River New City , Unit NO. 123, Floor 1 IGC' + '<br/>Tianhe District' +
            "<br>Guangzhou, Guangzhou, Mainland China" +
            '</p>' +
            '<br>' +
            '<a href="tel:0"></a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Guangzhou IGC'
});





push({

    position: LatLng(23.1343685, 113.3323002),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/cn/guangzhou/guangzhou-taikoo-hui">Guangzhou Taikoo Hui</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">383 Tianhe Road' + '<br/>Shop MU48' +
            "<br>Guangzhou, Guangzhou, Mainland China" +
            '</p>' +
            '<br>' +
            '<a href="tel:0"></a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Guangzhou Taikoo Hui'
});





push({

    position: LatLng(51.2350565, -0.5715772),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/gb/guildford/Guildford">Guildford</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">Unit 7-8 Tunsgate Square' +
            "<br>Guildford, England, United Kingdom" +
            '</p>' +
            '<br>' +
            '<a href="tel:1483375858">01483 375858</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Guildford'
});





push({

    position: LatLng(53.5525746, 9.990349799999999),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/de/hamburg/hamburg">Hamburg</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">9-11 Poststrasse' +
            "<br>Hamburg, Hamburg, Germany" +
            '</p>' +
            '<br>' +
            '<a href="tel:4034068668">040 34068668</a>' +
            '<h2>We are so excited to welcome you into our new home here in Hamburg.</h2>' +
            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Hamburg'
});





push({

    position: LatLng(35.66593, 139.70623),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/jp/tokyo/harajuku-local">Harajuku Local</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">SIX HARAJUKU TERRACE S1, 5-16-3 Jingumae' +
            "<br>Tokyo, Japan" +
            '</p>' +
            '<br>' +
            '<a href="tel:364274545">03-6427-4545</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Harajuku Local'
});





push({

    position: LatLng(39.2833891, -76.6009186),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/baltimore/harboreast">Harbor East</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">820 Aliceanna Street' + '<br/>107-1b' +
            "<br>Baltimore, Maryland, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:4105285485">(410) 528-5485</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Harbor East'
});





push({

    position: LatLng(51.4996445, -0.163577),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/gb/london/harrods-store">Harrods Store</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">85 Brompton Road' +
            "<br>London, England, United Kingdom" +
            '</p>' +
            '<br>' +
            '<a href="tel:2078938377">020 7893 8377</a>' +
            '<h2>5th floor sportswear department</h2>' +
            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Harrods Store'
});





push({

    position: LatLng(42.3734718, -71.12072669999999),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/cambridge/harvard-square-seasonal-store">Harvard Square Seasonal Store</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">25 Brattle Street' +
            "<br>Cambridge, Massachusetts, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:6176615399">(617) 661-5399</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Harvard Square Seasonal Store'
});





push({

    position: LatLng(32.3546788, -90.14957199999999),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/jackson/highlandvillageinjackson">Highland Village </a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">4500 Interstate 55 Frontage Road' + '<br/>Suite 120' +
            "<br>Jackson, Mississippi, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:6013660367">(601) 366-0367</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Highland Village '
});





push({

    position: LatLng(39.7618676, -105.0327213),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/denver/highlands-square">Highlands Square</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">3420 West 32nd Avenue' + '<br/>Unit 102' +
            "<br>Denver, Colorado, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:3034773203">(303) 477-3203</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Highlands Square'
});





push({

    position: LatLng(-37.7733003, 144.8887353),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/au/maribyrnong/highpoint">Highpoint</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">Shop L03 3526 120-200 Rosamond Road' + '<br/>Maribyrnong' +
            "<br>Maribyrnong, Victoria, Australia" +
            '</p>' +
            '<br>' +
            '<a href="tel:393170187">(03) 9317 0187</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Highpoint'
});





push({

    position: LatLng(49.057299, -122.3768722),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/ca/abbotsford/highstreet-seasonal-store">Highstreet Seasonal Store</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">3122 Mount Lehman Road' + '<br/>Unit G100' +
            "<br>Abbotsford, British Columbia, Canada" +
            '</p>' +
            '<br>' +
            '<a href="tel:7787529402">(778) 752-9402</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Highstreet Seasonal Store'
});





push({

    position: LatLng(36.1037193, -86.81738899999999),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/nashville/nashville">Hill Center</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">4027 Hillsboro Pike' + '<br/>Unit 705' +
            "<br>Nashville, Tennessee, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:6152927699">(615) 292-7699</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Hill Center'
});





push({

    position: LatLng(30.3094934, -97.94143079999999),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/austin/hill-country-galleria-seasonal-store">Hill Country Galleria Seasonal Store</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">12820 Hill Country Boulevard' + '<br/>Suite E-120' +
            "<br>Austin, Texas, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:5122638548">(512) 263-8548</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Hill Country Galleria Seasonal Store'
});





push({

    position: LatLng(43.07136029999999, -89.45125),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/madison/hilldale">Hilldale</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">574 North Midvale Boulevard' +
            "<br>Madison, Wisconsin, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:6082312130">(608) 231-2130</a>' +
            '<h2>Winter hours are in effect until March 3rd, 2019</h2>' +
            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Hilldale'
});





push({

    position: LatLng(37.5384983, -122.3019095),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/san-mateo/hillsdale-seasonal-store">Hillsdale Seasonal Store</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">60 31st Avenue' +
            "<br>San Mateo, California, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:6505702280">(650) 570-2280</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Hillsdale Seasonal Store'
});





push({

    position: LatLng(32.1871081, -80.7171941),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/hilton-head-island/hilton-head-island-seasonal">Hilton Head Seasonal </a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">32 Shelter Cove Lane' + '<br/>Unit 151' +
            "<br>Hilton Head Island, South Carolina, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:8436895005">(843) 689-5005</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Hilton Head Seasonal '
});





push({

    position: LatLng(-42.8830283, 147.3266156),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/au/hobart/hobart">Hobart store </a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">Murray Street' + '<br/>Shop No. T18' +
            "<br>Hobart, Tasmania, Australia" +
            '</p>' +
            '<br>' +
            '<a href="tel:61362311406">(03) 6231 1406</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Hobart store '
});





push({

    position: LatLng(40.740452, -74.029749),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/new-jersey/hoboken">Hoboken</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">313 Washington Street' +
            "<br>Hoboken, New Jersey, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:0"></a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Hoboken'
});





push({

    position: LatLng(-33.8557109, 151.0766107),
    
    type: 'outlet',
    icon: '/etc/designs/shop/clientlibs/img/icons/outlets-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/au/homebush/homebushoutlet">Homebush Outlet</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">1-5 Underwood Road' +
            "<br>Homebush, New South Wales, Australia" +
            '</p>' +
            '<br>' +
            '<a href="tel:61297468119">(02) 9746 8119</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Homebush Outlet'
});





push({

    position: LatLng(22.3149715, 113.9340063),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/hk/hong-kong/hong-kong-airport">Hong Kong Airport</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">Unit 6W560, Level 6, West Hall, Terminal 1 1 Sky Plaza Rd, Chep Lap Kok Hong Kong SAR' +
            "<br>Hong Kong SAR, Chep Lap Kok, Hong Kong, China" +
            '</p>' +
            '<br>' +
            '<a href="tel:26285030">2628 5030</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Hong Kong Airport'
});









push({

    position: LatLng(29.7803465, -95.5602723),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/houston/houstoncity">Houston CityCentre</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">800 Town and Country Boulevard' + '<br/>100' +
            "<br>Houston, Texas, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:7134641257">(713) 464-1257</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Houston CityCentre'
});





push({

    position: LatLng(29.7368358, -95.468812),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/houston/houston">Houston Galleria</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">5135 West Alabama Street' + '<br/>#7170' +
            "<br>Houston, Texas, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:7135521681">(713) 552-1681</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Houston Galleria'
});





push({

    position: LatLng(29.7838876, -95.39802),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/houston/houston-heights-local">Houston Heights Local</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">713 Heights Boulevard' +
            "<br>Houston, Texas, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:7138631280">(713) 863-1280</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Houston Heights Local'
});





push({

    position: LatLng(29.9968226, -95.75738559999999),
    
    type: 'outlet',
    icon: '/etc/designs/shop/clientlibs/img/icons/outlets-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/cypress/houston-premium-outlets">Houston Premium Outlets</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">29300 Hempstead Road' + '<br/>Unit 813' +
            "<br>Cypress, Texas, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:2812568841">(281) 256-8841</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Houston Premium Outlets'
});





push({

    position: LatLng(33.7852458, -84.4119893),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/atlanta/howellmill">Howell Mill</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">1168 Howell Mill Road' + '<br/>Unit A, B, C' +
            "<br>Atlanta, Georgia, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:4048980774">(404) 898-0774</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Howell Mill'
});





push({

    position: LatLng(39.139826, -84.4413716),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/cincinnati/hydeparksquare">Hyde Park Square</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">3500 Michigan Avenue' + '<br/>R-1 & R-2' +
            "<br>Cincinnati, Ohio, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:5133211656">(513) 321-1656</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Hyde Park Square'
});





push({

    position: LatLng(27.9364467, -82.475928),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/tampa/hydeparkvillage">Hyde Park Village</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">727 South Dakota Avenue' +
            "<br>Tampa, Florida, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:8132512640">(813) 251-2640</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Hyde Park Village'
});





push({

    position: LatLng(22.279642, 114.1838257),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/hk/hong-kong/hysan-store">Hysan Place</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">Shop 104-105, Hysan Place, 500 Hennessy Road' +
            "<br>Hong Kong SAR, Hong Kong Island, Hong Kong, China" +
            '</p>' +
            '<br>' +
            '<a href="tel:85226236151">2623 6151</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Hysan Place'
});





push({

    position: LatLng(22.2851951, 114.1583339),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/hk/hong-kong/ifc-store">IFC</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">Shop 1098B  8 Finance Street' +
            "<br>Hong Kong SAR, Hong Kong Island, Hong Kong, China" +
            '</p>' +
            '<br>' +
            '<a href="tel:29977170">2997 7170</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'IFC'
});





push({

    position: LatLng(31.221517, 121.544379),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/cn/shanghai/ifc-pudong">IFC Pudong</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">Shop LG1-32, B1 Level, Shanghai IFC Mall , No. 8, Century Avenue' +
            "<br>Shanghai, Shanghai, Mainland China" +
            '</p>' +
            '<br>' +
            '<a href="tel:2161059267">021 6105 9267</a>' +
            '<h2>WeChat: lululemon</h2>' +
            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'IFC Pudong'
});





push({

    position: LatLng(-27.499399, 152.972794),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/au/indooroopilly/indooroopilly">Indooroopilly store</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">322 Moggill Road' +
            "<br>Indooroopilly, Queensland, Australia" +
            '</p>' +
            '<br>' +
            '<a href="tel:737201889">(07) 3720 1889</a>' +
            '<h2>Come in and see us!</h2>' +
            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Indooroopilly store'
});





push({

    position: LatLng(27.9634228, -82.5206719),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/tampa/international-plaza">International Plaza</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">2223 North Westshore Boulevard' +
            "<br>Tampa, Florida, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:8138726831">(813) 872-6831</a>' +
            '<h2>We\'re open, come visit us!</h2>' +
            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'International Plaza'
});





push({

    position: LatLng(1.3041059, 103.831781),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/sg/singapore/ion">Ion Orchard</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">2 Orchard Turn' + '<br/>Unit B1-11' +
            "<br>Singapore, Singapore, Singapore" +
            '</p>' +
            '<br>' +
            '<a href="tel:66341895">6634 1895</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Ion Orchard'
});





push({

    position: LatLng(41.6829213, -91.5627162),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/coralville/Iowa-River-Landing-Local">Iowa River Landing Local</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">920 East 2nd Avenue' + '<br/>Suite 160' +
            "<br>Coralville, Iowa, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:3193410885">(319) 341-0885</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Iowa River Landing Local'
});





push({

    position: LatLng(33.6680012, -117.7623894),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/irvine/irvine">Irvine Spectrum Ctr</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">750 Irvine Spectrum Drive ' +
            "<br>Irvine, California, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:9495859830">(949) 585-9830</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Irvine Spectrum Ctr'
});





push({

    position: LatLng(-27.456552, 153.038735),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/au/fortitude-valley/jamesstreet">James Street</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">Shop 4, 15 James St.' +
            "<br>Fortitude Valley, Queensland, Australia" +
            '</p>' +
            '<br>' +
            '<a href="tel:732160610">(07) 3216 0610</a>' +
            '<h2>#mumyouretheone</h2>' +
            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'James Street'
});





push({

    position: LatLng(37.513747, 127.105283),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/kr/seoul/jamsil-lotte-world-mall">Jamsil Lotte World Mall</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">29 Shinceon-Dong, Unit No. 35-1' +
            "<br>Seoul, Songpa-Gu, South Korea" +
            '</p>' +
            '<br>' +
            '<a href="tel:264131800">02-6413-1800</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Jamsil Lotte World Mall'
});





push({

    position: LatLng(41.7731251, -88.1485945),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/naperville/naperville">Jefferson Ave</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">21 West Jefferson Avenue' +
            "<br>Naperville, Illinois, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:6303696811">(630) 369-6811</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Jefferson Ave'
});





push({

    position: LatLng(40.6600434, -74.1715571),
    
    type: 'outlet',
    icon: '/etc/designs/shop/clientlibs/img/icons/outlets-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/elizabeth/jersey-garden-mills">Jersey Garden Mills</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">651 Kapkowski Road' +
            "<br>Elizabeth, New Jersey, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:9083525458">(908) 352-5458</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Jersey Garden Mills'
});





push({

    position: LatLng(48.4277663, -123.3677501),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/ca/victoria/johnsonstreet">Johnson</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">584 Johnson Street' +
            "<br>Victoria, British Columbia, Canada" +
            '</p>' +
            '<br>' +
            '<a href="tel:2503831313">(250) 383-1313</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Johnson'
});





push({

    position: LatLng(1.662981, 103.5999371),
    
    type: 'outlet',
    icon: '/etc/designs/shop/clientlibs/img/icons/outlets-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/my/johor/johor-outlet">Johor Outlet</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">Suite No. 718 Johor Premium Outlets, Indahpura, 81000 Kulai' +
            "<br>Johor, Malaysia" +
            '</p>' +
            '<br>' +
            '<a href="tel:6076600091">6076600091</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Johor Outlet'
});





push({

    position: LatLng(41.5698453, -93.8030635),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/west-des-moines/jordan-creek-town-center">Jordan Creek Town Center</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">101 Jordan Creek Parkway' + '<br/>Unit 11380' +
            "<br>west des moines, Iowa, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:5153272577">(515) 327-2577</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Jordan Creek Town Center'
});





push({

    position: LatLng(21.2788576, -157.8279644),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/honolulu/kalakaua">Kalakaua Avenue</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">2270 Kalakaua Avenue' +
            "<br>Honolulu, Hawaii, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:8089239583">(808) 923-9583</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Kalakaua Avenue'
});





push({

    position: LatLng(-31.878155, 115.779182),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/au/karrinyup/karrinyup">Karrinyup Store</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">Shop F101, 200 Karrinyup Road' +
            "<br>Karrinyup, Western Australia, Australia" +
            '</p>' +
            '<br>' +
            '<a href="tel:610892041144">(08) 9204 1144</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Karrinyup Store'
});





push({

    position: LatLng(39.2029603, -84.37556149999999),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/cincinnati/kenwood">Kenwood</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">7875 Montgomery Road' +
            "<br>Cincinnati, Ohio, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:5137912524">(513) 791-2524</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Kenwood'
});





push({

    position: LatLng(31.224082, 121.450842),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/cn/shanghai/kerry-center">Kerry Center</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">1515 Nan Jing Xi Lu' +
            "<br>Shanghai, Shanghai, Mainland China" +
            '</p>' +
            '<br>' +
            '<a href="tel:2161810950">021 6181 0950</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Kerry Center'
});





push({

    position: LatLng(39.91406509999999, -86.1111523),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/indianapolis/keystone">Keystone Mall</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">8702 Keystone Crossing' + '<br/>Unit 21' +
            "<br>Indianapolis, Indiana, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:3178445235">(317) 844-5235</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Keystone Mall'
});





push({

    position: LatLng(32.6072636, -80.148517),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/johns-island/kiawah-island-seasonal">Kiawah Island Seaonal</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">510 Freshfields Drive' +
            "<br>Johns Island, South Carolina, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:8437683566">(843) 768-3566</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Kiawah Island Seaonal'
});





push({

    position: LatLng(32.782558, -79.934394),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/charleston/kingstreet">King Street </a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">279 King Street' +
            "<br>Charleston, South Carolina, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:8439376123">(843) 937-6123</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'King Street '
});





push({

    position: LatLng(40.0876331, -75.3918595),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/king-of-prussia/kingofprussia">King of Prussia Store</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">160 North Gulph Road' + '<br/>Suite 2190' +
            "<br>King of Prussia, Pennsylvania, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:6103370780">(610) 337-0780</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'King of Prussia Store'
});





push({

    position: LatLng(51.4917253, -0.1596887),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/gb/london/kingsroad">King\'s Road</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">38-42 King\'s Road' +
            "<br>London, England, United Kingdom" +
            '</p>' +
            '<br>' +
            '<a href="tel:2075840005">020 7584 0005</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'King\'s Road'
});





push({

    position: LatLng(35.9363615, -83.9918196),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/knoxville/kingston-pike">Kingston Pike</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">5410 Kingston Pike' +
            "<br>Knoxville, Tennessee, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:8655841519">(865) 584-1519</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Kingston Pike'
});





push({

    position: LatLng(53.56402199999999, -113.508534),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/ca/edmonton/kingsway">Kingsway</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">#223A 109st & Princess Elizabeth Avenue' +
            "<br>Edmonton, Alberta, Canada" +
            '</p>' +
            '<br>' +
            '<a href="tel:7804711200">(780) 471-1200</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Kingsway'
});





push({

    position: LatLng(35.5666002, -82.5423753),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/asheville/kitchinplace">Kitchin Place</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">1 Kitchin Place' +
            "<br>Asheville, North Carolina, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:8282775320">(828) 277-5320</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Kitchin Place'
});





push({

    position: LatLng(43.1139678, -70.7303835),
    
    type: 'outlet',
    icon: '/etc/designs/shop/clientlibs/img/icons/outlets-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/kittery/kittery">Kittery Outlet</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">Route 1' +
            "<br>Kittery, Maine, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:2074389347">(207) 438-9347</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Kittery Outlet'
});





push({

    position: LatLng(32.8230908, -96.78923999999999),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/dallas/knoxstreet">Knox Street</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">3201 Knox Street' +
            "<br>Dallas, Texas, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:2144430438">(214) 443-0438</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Knox Street'
});





push({

    position: LatLng(19.63542, -155.98978),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/kailua/kona-seasonal-store">Kona Seasonal Store</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">75-5799 Alii Drive' + '<br/>Unit C4' +
            "<br>Kailua, Hawaii, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:8083262973">(808) 326-2973</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Kona Seasonal Store'
});





push({

    position: LatLng(32.3230656, -110.9295816),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/tucson/laencantada">La Encantada</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">2905 East Skyline Drive' + '<br/>Unit 255' +
            "<br>Tucson, Arizona, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:5205297024">(520) 529-7024</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'La Encantada'
});









push({

    position: LatLng(43.4477927, -79.666474),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/ca/oakville/lakeshore">Lakeshore</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">291 Lakeshore Road East' +
            "<br>Oakville, Ontario, Canada" +
            '</p>' +
            '<br>' +
            '<a href="tel:9053389449">(905) 338-9449</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Lakeshore'
});





push({

    position: LatLng(30.0060907, -90.1573392),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/metairie/lakeside-shopping-center">Lakeside Shopping Center </a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">3301 Veterans Memorial Boulevard' + '<br/>Suite 14' +
            "<br>Metairie, Louisiana, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:5048335053">(504) 833-5053</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Lakeside Shopping Center '
});





push({

    position: LatLng(40.0502507, -76.3179487),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/lancaster/lancaster-local0">Lancaster Local</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">661 Harrisburg Avenue' +
            "<br>Lancaster, Pennsylvania, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:7172097173">(717) 209-7173</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Lancaster Local'
});





push({

    position: LatLng(44.2829585, -78.3317708),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/ca/peterborough/lansdowne-seasonal">Lansdowne Seasonal</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">645 Lansdowne Street' + '<br/>Unit 162' +
            "<br>Peterborough, Ontario, Canada" +
            '</p>' +
            '<br>' +
            '<a href="tel:7057482122">(705) 748-2122</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Lansdowne Seasonal'
});





push({

    position: LatLng(36.1629301, -115.1583209),
    
    type: 'outlet',
    icon: '/etc/designs/shop/clientlibs/img/icons/outlets-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/las-vegas/las-vegas-premium-outlet-north">Las Vegas Premium Outlet North</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">855 South Grand Central Parkway' + '<br/>Unit 1540' +
            "<br>Las Vegas, Nevada, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:7023840031">(702) 384-0031</a>' +
            '<h2>Now Open</h2>' +
            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Las Vegas Premium Outlet North'
});





push({

    position: LatLng(38.9706617, -95.2356451),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/lawrence/lawrence-seasonal-store">Lawrence Seasonal Store</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">714 Massachusetts Street' +
            "<br>Lawrence, Kansas, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:7858409811">(785) 840-9811</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Lawrence Seasonal Store'
});





push({

    position: LatLng(35.5330921, 139.6959443),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/jp/kawasaki-shi/lazona-kawasaki">Lazona Kawasaki</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">72-1 Horikawa-cho Saiwai-ku' + '<br/>Section A-2, Lazona Kawasaki Plaza' +
            "<br>Kawasaki-Shi, Japan" +
            '</p>' +
            '<br>' +
            '<a href="tel:445403370">044-540-3370</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Lazona Kawasaki'
});





push({

    position: LatLng(48.8510258, 2.3245092),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/fr/paris/le-bon-marche">Le Bon Marche</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">24 Rue de Sevres' +
            "<br>Paris, France" +
            '</p>' +
            '<br>' +
            '<a href="tel:0"></a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Le Bon Marche'
});





push({

    position: LatLng(48.8565282, 2.3604469),
    
    type: 'showroom',
    icon: '/etc/designs/shop/clientlibs/img/icons/showrooms-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/fr/paris/le-marais-showroom">Le Marais Showroom</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">3 Rue des Rosiers' + '<br/>16 rue Pavée' +
            "<br>Paris, France" +
            '</p>' +
            '<br>' +
            '<a href="tel:145670386">01 45 67 03 86</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Le Marais Showroom'
});





push({

    position: LatLng(38.9115402, -94.63844929999999),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/leawood/leawood">Leawood Store</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">4553 West 119th Street' + '<br/>Unit A110' +
            "<br>Leawood, Kansas, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:9136961031">(913) 696-1031</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Leawood Store'
});





push({

    position: LatLng(42.2314578, -71.1792921),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/dedham/legacyplace">Legacy Place</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">680 Legacy Place, unit 242' +
            "<br>Dedham, Massachusetts, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:7813260376">(781) 326-0376</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Legacy Place'
});





push({

    position: LatLng(33.0773877, -96.8218563),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/plano/plano">Legacy West</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">7500 Windross Ave' + '<br/>Unit B190 ' +
            "<br>Plano, Texas, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:9723780572">(972) 378-0572</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Legacy West'
});





push({

    position: LatLng(40.6306436, -75.4804145),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/whitehall/lehigh-valley-mall">Lehigh Valley Mall </a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">907 Lehigh Valley Lifestyle Center' +
            "<br>Whitehall, Pennsylvania, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:6102641486">(610) 264-1486</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Lehigh Valley Mall '
});





push({

    position: LatLng(37.9778917, -84.5276413),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/lexington/lexingtongreen">Lexington</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">151 Larue' + '<br/>Suite 135' +
            "<br>Lexington, Kentucky, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:8599710676">(859) 971-0676</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Lexington'
});





push({

    position: LatLng(43.2177266, -79.8613787),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/ca/hamilton/lime-ridge-mall">Lime Ridge Mall</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">999 Upper Wentworth Street' + '<br/>Unit 226' +
            "<br>Hamilton, Ontario, Canada" +
            '</p>' +
            '<br>' +
            '<a href="tel:9053834168">(905) 383-4168</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Lime Ridge Mall'
});





push({

    position: LatLng(41.91105599999999, -87.65285),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/chicago/lincoln-park">Lincoln Park</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">944 West North Avenue' +
            "<br>Chicago, Illinois, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:3126012134">(312) 601-2134</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Lincoln Park'
});





push({

    position: LatLng(25.790242, -80.13761),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/miami/lincolnroad">Lincoln Road</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">846 Lincoln Rd.' +
            "<br>Miami Beach, Florida, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:3055345582">(305) 534-5582</a>' +
            '<h2>#sweatbeach</h2>' +
            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Lincoln Road'
});





push({

    position: LatLng(40.8152549, -96.6362521),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/lincoln/lincoln-seasonal-store">Lincoln Seasonal Store</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">5 Gateway Mall' + '<br/>Unit 290' +
            "<br>Lincoln, Nebraska, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:4027426776">(402) 742-6776</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Lincoln Seasonal Store'
});





push({

    position: LatLng(40.772265, -73.9818203),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/new-york/newyork">Lincoln Square</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">1928 Broadway' +
            "<br>New York, New York, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:2127121767">(212) 712-1767</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Lincoln Square'
});





push({

    position: LatLng(51.51355160000001, -0.1232),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/gb/london/london-pop-up">London Pop-up</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">57-59 Long Acre' +
            "<br>London, England, United Kingdom" +
            '</p>' +
            '<br>' +
            '<a href="tel:0"></a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'London Pop-up'
});





push({

    position: LatLng(33.828544, -118.1430229),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/long-beach/long-beach-seasonal-store">Long Beach Seasonal Store</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">3891 North Lakewood Boulevard' + '<br/>Suite 500' +
            "<br>Long Beach, California, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:5623775157">(562) 377-5157</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Long Beach Seasonal Store'
});





push({

    position: LatLng(37.2234279, -121.9831458),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/los-gatos/los-gatos-store">Los Gatos Store</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">32 North Santa Cruz Avenue' +
            "<br>Los Gatos, California, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:4083351374">(408) 335-1374</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Los Gatos Store'
});





push({

    position: LatLng(37.5649903, 126.981369),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/kr/seoul/lotte-main-department">Lotte Main Department Store</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">81 Namdaemun-ro, Sogong-dong' + '<br/>3F, Lotte Main Department Store' +
            "<br>Seoul, Jung-gu, South Korea" +
            '</p>' +
            '<br>' +
            '<a href="tel:0"></a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Lotte Main Department Store'
});





push({

    position: LatLng(33.52088, -101.90278),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/lubbock/lubbock-seasonal">Lubbock Seasonal</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">4210 82nd Street' + '<br/>Unit 228' +
            "<br>Lubbock, Texas, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:8067917729">(806) 791-7729</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Lubbock Seasonal'
});





push({

    position: LatLng(34.7028884, 135.4955467),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/jp/osaka/lucua-osaka-store">Lucua Osaka</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">3-1-3 Umeda Kita-ku , Section 201' + '<br/>Osaka -shi' +
            "<br>Osaka, Japan" +
            '</p>' +
            '<br>' +
            '<a href="tel:647966806">06-4796-6806</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Lucua Osaka'
});





push({

    position: LatLng(47.2428496, -122.241779),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/sumner/lululemon-in-motion">Lululemon in Motion</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">140th Avenue East' + '<br/>Unit 2201' +
            "<br>Sumner, Washington, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:0"></a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Lululemon in Motion'
});





push({

    position: LatLng(36.8162169, -76.0723231),
    
    type: 'showroom',
    icon: '/etc/designs/shop/clientlibs/img/icons/showrooms-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/virginia-beach/lynnhaven-seasonal-store">Lynnhaven Seasonal</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">701 Lynnhaven Parkway' + '<br/>Unit E03A' +
            "<br>Virginia Beach, Virginia, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:7576313004">(757) 631-3004</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Lynnhaven Seasonal'
});





push({

    position: LatLng(36.8491811, -76.2880058),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/norfolk/macarthur-center-sesaonal-store">MacArthur Center Seasonal Store</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">300 Monticello Avenue' + '<br/>Space 208' +
            "<br>Norfolk, Virginia, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:7572718056">(757) 271-8056</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'MacArthur Center Seasonal Store'
});





push({

    position: LatLng(-33.7772, 151.12412),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/au/north-ryde/macquarie">Macquarie</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">Cnr Herring & Waterloo Roads' +
            "<br>North Ryde, New South Wales, Australia" +
            '</p>' +
            '<br>' +
            '<a href="tel:298886689">(02) 9888 6689</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Macquarie'
});





push({

    position: LatLng(40.780142, -73.959746),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/new-york/madisonave">Madison Avenue</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">1146 Madison Avenue' +
            "<br>New York, New York, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:2124521909">(212) 452-1909</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Madison Avenue'
});





push({

    position: LatLng(40.6424262, -111.495484),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/park-city/mainst">Main St. Park City</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">333 Main Street' + '<br/>Unit G' +
            "<br>Park City, Utah, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:4356493485">(435) 649-3485</a>' +
            '<h2>Check out our Facebook Page for our local community events!</h2>' +
            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Main St. Park City'
});





push({

    position: LatLng(28.4854757, -81.4316755),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/orlando/mallatmillenia">Mall at Millenia</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">4200 Conroy Road' + '<br/>J-260' +
            "<br>Orlando, Florida, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:4073522307">(407) 352-2307</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Mall at Millenia'
});





push({

    position: LatLng(39.2156752, -76.8617348),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/columbia/columbia">Mall in Columbia</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">10300 Little Patuxent Parkway' +
            "<br>Columbia, Maryland, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:4109971289">(410) 997-1289</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Mall in Columbia'
});





push({

    position: LatLng(44.8532652, -93.2428521),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/bloomington/bloomington">Mall of America</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">154 South Avenue' +
            "<br>Bloomington, Minnesota, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:9528546785">(952) 854-6785</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Mall of America'
});





push({

    position: LatLng(34.0646432, -83.98398929999999),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/buford/mall-of-georgia-seasonal-store">Mall of Georgia Seasonal Store</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">3333 Buford Drive' + '<br/>Suite 1037' +
            "<br>Buford, Georgia, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:0"></a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Mall of Georgia Seasonal Store'
});





push({

    position: LatLng(25.3226299, 51.3486767),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/qa/doha/mall-of-qatar">Mall of Qatar</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">Dukhan Highway' +
            "<br>Doha, Doha, QA" +
            '</p>' +
            '<br>' +
            '<a href="tel:97444680125">4468 0125</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Mall of Qatar'
});





push({

    position: LatLng(25.118107, 55.200608),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/ae/dubai/malloftheemirates">Mall of the Emirates</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">Sheikh Zayed Road' +
            "<br>Dubai, AE" +
            '</p>' +
            '<br>' +
            '<a href="tel:97143474651">04 347 4651</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Mall of the Emirates'
});





push({

    position: LatLng(53.4824274, -2.2459292),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/gb/manchester/manchester-store">Manchester store</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">7 Saint Anns Square' +
            "<br>Manchester, England, United Kingdom" +
            '</p>' +
            '<br>' +
            '<a href="tel:1618352009">0161 835 2009</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Manchester store'
});





push({

    position: LatLng(40.7953544, -73.67486699999999),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/manhasset/manhasset">Manhasset</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">1950 Northern Boulevard' + '<br/>Unit 0040' +
            "<br>Manhasset, New York, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:5166271514">(516) 627-1514</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Manhasset'
});





push({

    position: LatLng(43.32572, -79.820583),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/ca/burlington/mapleview">Mapleview Mall</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">Space B16 900 Maple Ave' +
            "<br>Burlington, Ontario, Canada" +
            '</p>' +
            '<br>' +
            '<a href="tel:9056343106">(905) 634-3106</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Mapleview Mall'
});





push({

    position: LatLng(1.2841228, 103.8595527),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/sg/singapore/marina-bay-sands">Marina Bay Sands</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">10 Bayfront Avenue' + '<br/>B2-42, The Shoppes at Marina Bay Sands' +
            "<br>Singapore, Singapore, Singapore" +
            '</p>' +
            '<br>' +
            '<a href="tel:0"></a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Marina Bay Sands'
});





push({

    position: LatLng(51.08269334, -114.152154543),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/ca/calgary/marketmall">Market Mall</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">15R - 3625 Shaganappi Trail NW' +
            "<br>Calgary, Alberta, Canada" +
            '</p>' +
            '<br>' +
            '<a href="tel:4032025855">(403) 202-5855</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Market Mall'
});





push({

    position: LatLng(42.252188, -87.840255),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/lake-forest/market-square">Market Square</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">680 North Western Avenue' +
            "<br>Lake Forest, Illinois, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:8477359041">(847) 735-9041</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Market Square'
});





push({

    position: LatLng(30.175248, -95.46038),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/shenandoah/woodlands">Market St, Woodlands</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">#820 9595 Six Pines Drive' +
            "<br>Shenandoah, Texas, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:2812980673">(281) 298-0673</a>' +
            '<h2>come join us for in-store yoga!</h2>' +
            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Market St, Woodlands'
});





push({

    position: LatLng(42.5167576, -71.0343394),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/lynnfield/marketstreet">Market Street</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">1300 Market Street' +
            "<br>Lynnfield, Massachusetts, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:7813344738">(781) 334-4738</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Market Street'
});





push({

    position: LatLng(43.8683035, -79.2884833),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/ca/markham/markville-shopping-center">Markville Shopping Centre</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">5000 Highway 7' + '<br/>unit 2266' +
            "<br>Markham, Ontario, Canada" +
            '</p>' +
            '<br>' +
            '<a href="tel:9055131981">(905) 513-1981</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Markville Shopping Centre'
});





push({

    position: LatLng(41.3895195, -70.51435479999999),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/marthas-vineyard/marthas-vineyard">Martha\'s Vineyard Seasonal Store</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">11 South Summer Street' +
            "<br>Martha's Vineyard, Massachusetts, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:5089398474">(508) 939-8474</a>' +
            '<h2>live near the ocean & inhale the pure salt air that flows over the water</h2>' +
            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Martha\'s Vineyard Seasonal Store'
});





push({

    position: LatLng(38.6447848, -90.26251309999999),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/st-louis/marylandplaza">Maryland Plaza</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">26 Maryland Plaza' +
            "<br>St. Louis, Missouri, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:3144546857">(314) 454-6857</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Maryland Plaza'
});





push({

    position: LatLng(51.5211026, -0.152176),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/gb/london/marylebone">Marylebone</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">74-75 Marylebone High St.' +
            "<br>London, England, United Kingdom" +
            '</p>' +
            '<br>' +
            '<a href="tel:2079353105">020 7935 3105</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Marylebone'
});





push({

    position: LatLng(43.025599, -81.27838009999999),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/ca/london/masonville">Masonville Pl.</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">1680 Richmond Street' +
            "<br>London, Ontario, Canada" +
            '</p>' +
            '<br>' +
            '<a href="tel:5196456805">(519) 645-6805</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Masonville Pl.'
});





push({

    position: LatLng(48.4462254, -123.3696272),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/ca/victoria/mayfair-mall-seasonal-store">Mayfair Seasonal</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">3147 Douglas Street' + '<br/>Unit-616' +
            "<br>Victoria, British Columbia, Canada" +
            '</p>' +
            '<br>' +
            '<a href="tel:2503610071">(250) 361-0071</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Mayfair Seasonal'
});





push({

    position: LatLng(40.7409616, -74.006097),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/new-york/meatpacking">Meatpacking</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">408 West 14th Street' +
            "<br>New York, New York, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:2122552978">(212) 255-2978</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Meatpacking'
});





push({

    position: LatLng(-37.82267, 144.98005),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/au/melbourne/melbourne-park">Melbourne Park</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">Melbourne Park' +
            "<br>Melbourne, Victoria, Australia" +
            '</p>' +
            '<br>' +
            '<a href="tel:0"></a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Melbourne Park'
});





push({

    position: LatLng(34.0817139, -118.3778158),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/los-angeles/melrose">Melrose Ave</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">8532 Melrose Avenue' +
            "<br>Los Angeles, California, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:3106599590">(310) 659-9590</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Melrose Ave'
});





push({

    position: LatLng(34.7119316, -86.5862794),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/huntsville/merchants-walk">Merchants Walk</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">920 Bob Wallace Avenue Southwest SUITE 313' +
            "<br>Huntsville, Alabama, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:2565350422">(256) 535-0422</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Merchants Walk'
});





push({

    position: LatLng(25.731171, -80.25968859999999),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/coral-gables/merrick-park">Merrick Park</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">342 San Lorenzo Avenue' +
            "<br>Coral Gables, Florida, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:3054619981">(305) 461-9981</a>' +
            '<h2>formerly South Miami store</h2>' +
            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Merrick Park'
});





push({

    position: LatLng(49.2264147, -122.998757),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/ca/burnaby/metrotown">Metrotown</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">4800 Kingsway' + '<br/>Unit 318' +
            "<br>Burnaby, British Columbia, Canada" +
            '</p>' +
            '<br>' +
            '<a href="tel:6044304659">(604) 430-4659</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Metrotown'
});





push({

    position: LatLng(36.1096038, -115.1723076),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/las-vegas/miracle-mile-seasonal-store">Miracle Mile Seasonal Store</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">3663 South Las Vegas Boulevard' + '<br/>Suite 170' +
            "<br>Las Vegas, Nevada, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:7027341099">(702) 734-1099</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Miracle Mile Seasonal Store'
});





push({

    position: LatLng(25.216238, 55.407781),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/ae/dubai/mirdif-city-centre">Mirdif City Centre</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">Emirates Road' +
            "<br>Dubai, AE" +
            '</p>' +
            '<br>' +
            '<a href="tel:97142881248">04 288 1248</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Mirdif City Centre'
});





push({

    position: LatLng(30.68945, -88.13095),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/mobile/mobile-seasonal">Mobile Seasonal</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">9 Du Rhu Drive' + '<br/>Suite 358' +
            "<br>Mobile, Alabama, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:0"></a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Mobile Seasonal'
});





push({

    position: LatLng(34.4219674, -119.6501878),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/santa-barbara/montecito-seasonal">Montecito Seasonal</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">1046 Coast Village Road' + '<br/>Suite G' +
            "<br>Santa Barbara, California, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:8055650494">(805) 565-0494</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Montecito Seasonal'
});





push({

    position: LatLng(35.2807776, -120.6635097),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/san-luis-obispo/monterey-street">Monterey street</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">840 Monterey Street' + '<br/>Suite B101' +
            "<br>San Luis Obispo, California, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:8057864681">(805) 786-4681</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Monterey street'
});





push({

    position: LatLng(39.025002, -77.148335),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/bethesda/montgomerymall">Montgomery Mall</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">7101 Democracy Blvd.' +
            "<br>Bethesda, Maryland, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:3013650719">(301) 365-0719</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Montgomery Mall'
});





push({

    position: LatLng(45.5227151, -73.6019034),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/ca/montreal/montreal-local">Montreal Local</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">268 St-Viateur W' +
            "<br>Montreal, Quebec, Canada" +
            '</p>' +
            '<br>' +
            '<a href="tel:5142744204">(514) 274-4204</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Montreal Local'
});





push({

    position: LatLng(-37.96984, 145.087626),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/au/moorabbin-airport/moorabbinoutlet">Moorabbin Outlet</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">250 Centre Dandenong Road' + '<br/>Shop G-43' +
            "<br>Moorabbin Airport, Victoria, Australia" +
            '</p>' +
            '<br>' +
            '<a href="tel:395830311">(03) 9583 0311</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Moorabbin Outlet'
});





push({

    position: LatLng(49.0477259, -122.7862716),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/ca/surrey/morgan-crossing-store">Morgan Crossing</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">15735 Croydon Drive' + '<br/>Unit 103' +
            "<br>Surrey, British Columbia, Canada" +
            '</p>' +
            '<br>' +
            '<a href="tel:7785450737">(778) 545-0737</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Morgan Crossing'
});





push({

    position: LatLng(49.0482863, -122.7832031),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/ca/surrey/Morgan-Crossing">Morgan Crossing Seasonal store</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">N110-15850 26th Avenue' +
            "<br>Surrey, British Columbia, Canada" +
            '</p>' +
            '<br>' +
            '<a href="tel:7785450737">(778) 545-0737</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Morgan Crossing Seasonal store'
});





push({

    position: LatLng(38.8715447, -77.2300569),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/fairfax/mosaic">Mosaic</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">2920 District Avenue' + '<br/>Suite 105' +
            "<br>Fairfax, Virginia, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:7032804368">(703) 280-4368</a>' +
            '<h2>Free covered parking in the Market garage. Dogs are welcomed!</h2>' +
            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Mosaic'
});





push({

    position: LatLng(-33.828184, 151.244408),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/au/sydney/mosman">Mosman</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">814-816 Military Road' +
            "<br>Sydney, New South Wales, Australia" +
            '</p>' +
            '<br>' +
            '<a href="tel:299607652">(02) 9960 7652</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Mosman'
});





push({

    position: LatLng(32.82942, -79.83049),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/mt-pleasant/mt-pleasant-town-centre">Mt Pleasant Town Centre</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">1232 Belk Dr' +
            "<br>Mt Pleasant, South Carolina, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:8438561166">(843) 856-1166</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Mt Pleasant Town Centre'
});





push({

    position: LatLng(45.18059, -79.63441),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/ca/minett/muskokapopup">Muskoka Seasonal</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">1112 Juddhaven Road' + '<br/>Lululemon Containers' +
            "<br>Minett, Ontario, Canada" +
            '</p>' +
            '<br>' +
            '<a href="tel:0"></a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Muskoka Seasonal'
});





push({

    position: LatLng(33.784212, -78.77334599999999),
    
    type: 'outlet',
    icon: '/etc/designs/shop/clientlibs/img/icons/outlets-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/myrtle-beach/myrtle-beach-outlet">Myrtle Beach Outlet</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">10843 Kings Road' +
            "<br>myrtle beach, South Carolina, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:8432130266">(843) 213-0266</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Myrtle Beach Outlet'
});





push({

    position: LatLng(34.0693266, -118.4009733),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/beverly-hills/northbeverly">N. Beverly Dr</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">334 North Beverly Drive' +
            "<br>Beverly Hills, California, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:3108588339">(310) 858-8339</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'N. Beverly Dr'
});





push({

    position: LatLng(40.7573496, -73.9776961),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/new-york/nyc-5th-ave">NYC 5th Ave </a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">597 5th Avenue' +
            "<br>New York, New York, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:2125934264">(212) 593-4264</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'NYC 5th Ave '
});





push({

    position: LatLng(40.7260784, -73.9926516),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/new-york/nyc-lab">NYC Lab</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">50 Bond Street' +
            "<br>New York, New York, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:2124753951">(212) 475-3951</a>' +
            '<h2>@lululemonlabnyc</h2>' +
            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'NYC Lab'
});





push({

    position: LatLng(40.7254562, -73.9998755),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/new-york/soho">NYC Lab Prince Street</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">125 Prince Street' +
            "<br>New York, New York, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:2123348276">(212) 334-8276</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'NYC Lab Prince Street'
});





push({

    position: LatLng(32.044579, 118.785532),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/cn/nanjing-shi/nanjing-deji-plaza">Nanjing Deji Plaza</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">18 Zhongshan Road, XinJieKou, Xuanwu Qu' +
            "<br>Nanjing Shi, Jiangsu Sheng, Mainland China" +
            '</p>' +
            '<br>' +
            '<a href="tel:0"></a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Nanjing Deji Plaza'
});





push({

    position: LatLng(38.2985453, -122.2875728),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/napa/napa-local-">Napa Local</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">1220 1st Street' +
            "<br>Napa, California, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:7076909977">(707) 690-9977</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Napa Local'
});





push({

    position: LatLng(42.3002758, -71.38345629999999),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/natick/natick">Natick Collection</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">1245 Worcester Street' + '<br/>Unit 4054 & 4055' +
            "<br>Natick, Massachusetts, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:5086553127">(508) 655-3127</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Natick Collection'
});





push({

    position: LatLng(41.311027, -72.9300969),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/new-haven/new-haven">New Haven</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">11 + 13 Broadway' +
            "<br>New Haven, Connecticut, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:2034956150">(203) 495-6150</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'New Haven'
});





push({

    position: LatLng(46.5199747, -80.9462428),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/ca/sudbury/new-sudbury-centre">New Sudbury Centre</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">1349 Lasalle Boulevard' + '<br/>Space # 26' +
            "<br>Greater Sudbury, Ontario, Canada" +
            '</p>' +
            '<br>' +
            '<a href="tel:0"></a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'New Sudbury Centre'
});





push({

    position: LatLng(22.3817123, 114.1885735),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/hk/hong-kong/new-town-plaza-store">New Town Plaza</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">New Town Plaza Phase 1 L4 - Shop 469' + '<br/>18 Sha Tin Centre Street' +
            "<br>Hong Kong SAR, Sha Tin, Hong Kong, China" +
            '</p>' +
            '<br>' +
            '<a href="tel:22346433">2234 6433</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'New Town Plaza'
});





push({

    position: LatLng(42.348726, -71.08669),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/boston/newbury">Newbury</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">337 Newbury St' +
            "<br>Boston, Massachusetts, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:6178676561">(617) 867-6561</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Newbury'
});





push({

    position: LatLng(41.489783, -71.3147424),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/newport/newport-local">Newport Local</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">17 Touro Street' +
            "<br>Newport, Rhode Island, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:4018471549">(401) 847-1549</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Newport Local'
});





push({

    position: LatLng(43.1577953, -79.172525),
    
    type: 'outlet',
    icon: '/etc/designs/shop/clientlibs/img/icons/outlets-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/ca/niagara-on-the-lake/niagarafallsoutlet">Niagara Falls Outlet</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">300 Taylor Road' +
            "<br>Niagara Falls, Ontario, Canada" +
            '</p>' +
            '<br>' +
            '<a href="tel:9056855538">(905) 685-5538</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Niagara Falls Outlet'
});





push({

    position: LatLng(52.37225, 4.88615),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/nl/amsterdam/nine-streets">Nine Streets</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">Hartenstraat 13' +
            "<br>Amsterdam, North Holland, The Netherlands" +
            '</p>' +
            '<br>' +
            '<a href="tel:0"></a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Nine Streets'
});





push({

    position: LatLng(34.3578094, -84.0478658),
    
    type: 'outlet',
    icon: '/etc/designs/shop/clientlibs/img/icons/outlets-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/dawsonville/north-georgia-premium-outlets">North Georgia Premium Outlets</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">800 Georgia 400 S.' + '<br/>Unit 590' +
            "<br>Dawsonville, Georgia, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:7062161231">(706) 216-1231</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'North Georgia Premium Outlets'
});





push({

    position: LatLng(35.8402688, -78.6434057),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/raleigh/northhills">North Hills</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">4421 Six Forks Road' + '<br/>Suite 113' +
            "<br>Raleigh, North Carolina, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:9197849044">(919) 784-9044</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'North Hills'
});





push({

    position: LatLng(44.98573, -93.2711),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/minneapolis/north-loop">North Loop</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">134 North 3rd Ave' +
            "<br>Minneapolis, Minnesota, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:6123320534">(612) 332-0534</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'North Loop'
});





push({

    position: LatLng(32.8685678, -96.77449519999999),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/dallas/northpark">North Park</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">8687 North Central Expressway' + '<br/>Unit 624' +
            "<br>Dallas, Texas, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:2142340305">(214) 234-0305</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'North Park'
});





push({

    position: LatLng(42.1508912, -87.8174997),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/northbrook/northbrook">Northbrook Court</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">2176 Northbrook Court ' + '<br/>Upper level entrance between Lord and Taylor and Neiman Marcus' +
            "<br>Northbrook, Illinois, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:8474801749">(847) 480-1749</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Northbrook Court'
});





push({

    position: LatLng(41.84997, -87.95192),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/oak-brook/oak_brookcenter">Oakbrook Ctr</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">622 Oakbrook Center' +
            "<br>Oak Brook, Illinois, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:6303681610">(630) 368-1610</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Oakbrook Ctr'
});





push({

    position: LatLng(49.2328268, -123.11689),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/ca/vancouver/oakridge">Oakridge</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">650 West 41st Avenue' + '<br/>CRU189' +
            "<br>Vancouver, British Columbia, Canada" +
            '</p>' +
            '<br>' +
            '<a href="tel:6046771134">(604) 677-1134</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Oakridge'
});





push({

    position: LatLng(51.5195605, -0.07449589999999999),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/gb/london/old-spitalfields-market">Old Spitalfields Market</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">1 Horner Square, Spitalfields' +
            "<br>London, England, United Kingdom" +
            '</p>' +
            '<br>' +
            '<a href="tel:2072475982">020 7247 5982</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Old Spitalfields Market'
});





push({

    position: LatLng(38.80487000000001, -77.0472659),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/alexandria/oldtown">Old Town</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">700 King Street' +
            "<br>Alexandria, Virginia, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:7038381673">(703) 838-1673</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Old Town'
});





push({

    position: LatLng(42.5468106, -83.2168212),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/birmingham/birminghammi">Old Woodward</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">101 South Old Woodward Ave' +
            "<br>Birmingham, Michigan, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:2485939760">(248) 593-9760</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Old Woodward'
});





push({

    position: LatLng(28.3873263, -81.4911403),
    
    type: 'outlet',
    icon: '/etc/designs/shop/clientlibs/img/icons/outlets-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/orlando/orlandooutlets">Orlando Premium Outlet</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">8200 Vineland Avenue' + '<br/>Space #1035' +
            "<br>Orlando, Florida, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:4072381076">(407) 238-1076</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Orlando Premium Outlet'
});





push({

    position: LatLng(43.88987789999999, -78.87966349999999),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/ca/oshawa/oshawacentre">Oshawa Centre</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">#2050 - 419 King Street West ' +
            "<br>Oshawa, Ontario, Canada" +
            '</p>' +
            '<br>' +
            '<a href="tel:9054353721">(905) 435-3721</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Oshawa Centre'
});





push({

    position: LatLng(49.8451046, -97.2136359),
    
    type: 'outlet',
    icon: '/etc/designs/shop/clientlibs/img/icons/outlets-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/ca/winnipeg/outlet-collection-winnipeg">Outlet Collection Winnipeg</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">555 Sterling Lyon Parkway' + '<br/>#302' +
            "<br>Winnipeg, Manitoba, Canada" +
            '</p>' +
            '<br>' +
            '<a href="tel:2044534363">(204) 453-4363</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Outlet Collection Winnipeg'
});





push({

    position: LatLng(38.2473268, -85.6100489),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/louisville/oxmoor-center">Oxmoor Center</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">7900 Shelbyville Road' +
            "<br>Louisville, Kentucky, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:5024297022">(502) 429-7022</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Oxmoor Center'
});





push({

    position: LatLng(49.2834121, -123.1175606),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/ca/vancouver/pacific-centre">Pacific Centre</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">701 West Georgia Street' + '<br/>Unit D067C' +
            "<br>Vancouver, British Columbia, Canada" +
            '</p>' +
            '<br>' +
            '<a href="tel:6046623880">(604) 662-3880</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Pacific Centre'
});





push({

    position: LatLng(-28.0366988, 153.4277805),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/au/broadbeach/pacific-fair">Pacific Fair</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">Hooker Boulevard' + '<br/>Shop 2757' +
            "<br>Broadbeach, Queensland, Australia" +
            '</p>' +
            '<br>' +
            '<a href="tel:755316564">(07) 5531 6564</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Pacific Fair'
});





push({

    position: LatLng(47.61232, -122.335137),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/seattle/pacificplace">Pacific Place</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">600 Pine Street' + '<br/>Suite #115' +
            "<br>Seattle, Washington, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:2066821286">(206) 682-1286</a>' +
            '<h2>#thesweatlifesea</h2>' +
            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Pacific Place'
});





push({

    position: LatLng(22.277509, 114.166341),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/hk/hong-kong/pacific-place">Pacific Place Hong Kong</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">88 Queensway' +
            "<br>Hong Kong SAR, Hong Kong Island, Hong Kong, China" +
            '</p>' +
            '<br>' +
            '<a href="tel:28105168">2810 5168</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Pacific Place Hong Kong'
});





push({

    position: LatLng(33.7200531, -116.3883572),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/palm-desert/palmdesert">Palm Desert Store</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">73-470 El Paseo Blvd Palm Desert ' +
            "<br>Palm Desert, California, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:7603411367">(760) 341-1367</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Palm Desert Store'
});





push({

    position: LatLng(40.3493382, -74.6620368),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/princeton/princeton">Palmer Square</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">36 Nassau Street' +
            "<br>Princeton, New Jersey, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:6099212035">(609) 921-2035</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Palmer Square'
});





push({

    position: LatLng(48.8515266, 2.3340193),
    
    type: 'showroom',
    icon: '/etc/designs/shop/clientlibs/img/icons/showrooms-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/fr/paris/paris-st-germain-showroom">Paris St Germain showroom</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">6 Place Saint-Sulpice' +
            "<br>Paris, France" +
            '</p>' +
            '<br>' +
            '<a href="tel:142032936">01 42 03 29 36</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Paris St Germain showroom'
});





push({

    position: LatLng(39.562915, -104.8727022),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/lone-tree/parkmeadows">Park Meadows pick</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">8401 Park Meadows Center Drive' + '<br/>#2600' +
            "<br>Lone Tree, Colorado, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:3036621334">(303) 662-1334</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Park Meadows pick'
});





push({

    position: LatLng(49.6989173, -112.8405325),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/ca/lethbridge/park-place-holiday-seasonal-store">Park Place Seasonal</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">501 1 Avenue South' + '<br/>CRU A23' +
            "<br>Lethbridge, Alberta, Canada" +
            '</p>' +
            '<br>' +
            '<a href="tel:4033810474">(403) 381-0474</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Park Place Seasonal'
});





push({

    position: LatLng(49.32536469999999, -123.1437732),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/ca/west-vancouver/parkroyal">Park Royal</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">940 Main Street' + '<br/>Unit B-1' +
            "<br>West Vancouver, British Columbia, Canada" +
            '</p>' +
            '<br>' +
            '<a href="tel:6049216125">(604) 921-6125</a>' +
            '<h2>lululemon men\'s number: 604-913-2205</h2>' +
            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Park Royal'
});





push({

    position: LatLng(49.3255069, -123.1441633),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/ca/west-vancouver/park-royal-mens">Park Royal Mens</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">1000 Main Street' + '<br/>Unit A3' +
            "<br>West Vancouver, British Columbia, Canada" +
            '</p>' +
            '<br>' +
            '<a href="tel:6049132205">(604) 913-2205</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Park Royal Mens'
});





push({

    position: LatLng(39.919524, 116.448621),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/cn/beijing/parkview-green">Parkview Green</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">9 Dongdaqiao Road' + '<br/>Unit (01) L1-11, Floor 1' +
            "<br>Chaoyang District, Beijing, Mainland China" +
            '</p>' +
            '<br>' +
            '<a href="tel:0"></a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Parkview Green'
});





push({

    position: LatLng(37.5091322, 127.0608511),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/kr/seoul/parnas-mall">Parnas Mall</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">521 Teheran-ro, Gangnam-gu, Seoul, South Korea  ' +
            "<br>Seoul, Gangnam-gu, South Korea" +
            '</p>' +
            '<br>' +
            '<a href="tel:262043677">02-6204-3677</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Parnas Mall'
});





push({

    position: LatLng(42.6255574, -82.945981),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/clinton-township/partridge-creek-seasonal-store">Partridge Creek Seasonal Store</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">17360 Hall Road' + '<br/>Suite #183' +
            "<br>Clinton Township, Michigan, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:5866906001">(586) 690-6001</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Partridge Creek Seasonal Store'
});





push({

    position: LatLng(19.3859923, -99.2545406),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/mx/mexico-city/paseo-arcos-bosques">Paseo Arcos Bosques</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">Paseo de Los Tamarindos ·90' +
            "<br>Bosques de las Lomas, Mexico City, MX" +
            '</p>' +
            '<br>' +
            '<a href="tel:5552066557">01 55 5206 6557</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Paseo Arcos Bosques'
});





push({

    position: LatLng(45.5238033, -122.6839392),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/portland/pearldistrict">Pearl District</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">1231 Northwest Couch Street' +
            "<br>Portland, Oregon, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:5032740007">(503) 274-0007</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Pearl District'
});





push({

    position: LatLng(43.1360847, -79.2240958),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/ca/st--catharines/pen-centre-seasonal">Pen Centre Seasonal Store</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">221 Glendale Avenue' + '<br/>Unit 78B' +
            "<br>St Catharines, Ontario, Canada" +
            '</p>' +
            '<br>' +
            '<a href="tel:9056850640">(905) 685-0640</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Pen Centre Seasonal Store'
});





push({

    position: LatLng(33.9238569, -84.3405724),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/atlanta/atlanta">Perimeter Mall</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">4400 Ashford Dunwoody Road' + '<br/>Suite 2405' +
            "<br>Atlanta, Georgia, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:7709019857">(770) 901-9857</a>' +
            '<h2>We have special hours for the holiday season!</h2>' +
            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Perimeter Mall'
});





push({

    position: LatLng(-31.9530044, 115.8574693),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/au/perth/perthcity">Perth City</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">Shop H127, enex100  ' + '<br/> ' +
            "<br>Perth, Western Australia, Australia" +
            '</p>' +
            '<br>' +
            '<a href="tel:61892021422">(08) 9202 1422</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Perth City'
});





push({

    position: LatLng(40.25592, -73.992526),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/new-jersey/pier-village-seasonal-store">Pier Village Seasonal Store</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">80 Ocean Avenue, Pier Village, 07740' +
            "<br>Long Branch, New Jersey, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:7322292409">(732) 229-2409</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Pier Village Seasonal Store'
});





push({

    position: LatLng(53.8973582, -122.7774471),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/ca/prince-george/pine-centre-seasonal-store">Pine Centre seasonal store </a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">3055 Massey Drive' + '<br/>Unit 107' +
            "<br>Prince George, British Columbia, Canada" +
            '</p>' +
            '<br>' +
            '<a href="tel:0"></a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Pine Centre seasonal store '
});





push({

    position: LatLng(36.3037526, -94.1753763),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/rogers/pinnacle-hills-holiday-seasonal-store">Pinnacle Hills Holiday Seasonal Store</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">2203 South Promenade Boulevard' + '<br/>Suite 5150' +
            "<br>Rogers, Arkansas, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:4796210305">(479) 621-0305</a>' +
            '<h2>Rooted in Connection. Rooted in Sweat. Rooted in Rogers</h2>' +
            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Pinnacle Hills Holiday Seasonal Store'
});





push({

    position: LatLng(45.5184023, -122.6772628),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/portland/pioneer-place-seasonal-store">Pioneer Place Seasonal Store</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">700 Southwest 5th Avenue' + '<br/>Suite 3050' +
            "<br>Portland, Oregon, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:5032270940">(503) 227-0940</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Pioneer Place Seasonal Store'
});





push({

    position: LatLng(46.77365409999999, -71.2760723),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/ca/quebec/place-st-foy">Place Ste-Foy</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">2452, boulevard Laurier' + '<br/>Local 046D' +
            "<br>Quebec, Quebec, Canada" +
            '</p>' +
            '<br>' +
            '<a href="tel:4186594607">(418) 659-4607</a>' +
            '<h2>Nous sommes ouverts 7 jours sur 7</h2>' +
            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Place Ste-Foy'
});





push({

    position: LatLng(38.630966, -90.40696),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/frontenac/plazafrontenac">Plaza Frontenac</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">1701 S Lindbergh Blvd #97' +
            "<br>Frontenac, Missouri, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:3149947662">(314) 994-7662</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Plaza Frontenac'
});





push({

    position: LatLng(21.8840756, -159.4693741),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/koloa/poipu-seasonal">Poipu Seasonal</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">2829 Ala Kalanikaumaka Street' + '<br/>Unit A101' +
            "<br>Koloa, Hawaii, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:8087427987">(808) 742-7987</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Poipu Seasonal'
});





push({

    position: LatLng(19.432375, -99.1954952),
    
    type: 'showroom',
    icon: '/etc/designs/shop/clientlibs/img/icons/showrooms-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/mx/mexico-city/polanco-showroom">Polanco Showroom</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">135 Alejandro Dumas' + '<br/>Polanco IV Secc, 11550 Ciudad de México' +
            "<br>Polanco, Mexico City, MX" +
            '</p>' +
            '<br>' +
            '<a href="tel:5552800600">01 55 5280 0600</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Polanco Showroom'
});





push({

    position: LatLng(40.145059, -82.981907),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/columbus/columbus">Polaris Fashion Place</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">1500 Polaris Parkway' + '<br/>Space 1038' +
            "<br>Columbus, Ohio, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:6148462151">(614) 846-2151</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Polaris Fashion Place'
});





push({

    position: LatLng(49.8838269, -97.1989624),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/ca/winnipeg/polopark">Polo Park</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">1485 Portage Avenue' + '<br/>Unit 0202B ' +
            "<br>Winnipeg, Manitoba, Canada" +
            '</p>' +
            '<br>' +
            '<a href="tel:2047746973">(204) 774-6973</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Polo Park'
});





push({

    position: LatLng(33.772251, -84.36591899999999),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/atlanta/ponce-city">Ponce City Market</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">675 Ponce De Leon Avenue Northeast' + '<br/>Suite C187' +
            "<br>Atlanta, Georgia, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:4048170583">(404) 817-0583</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Ponce City Market'
});





push({

    position: LatLng(-36.849972, 174.744474),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/nz/auckland/ponsonby">Ponsonby Store</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">239 Ponsonby Road' +
            "<br>Auckland, Auckland, New Zealand" +
            '</p>' +
            '<br>' +
            '<a href="tel:93769342">09-376 9342</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Ponsonby Store'
});





push({

    position: LatLng(45.12108670000001, -79.5801517),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/ca/port-carling/port-carling-seasonal-store">Port Carling Seasonal Store</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">Unit 402 - 123 Medora Street' +
            "<br>Port Carling, Ontario, Canada" +
            '</p>' +
            '<br>' +
            '<a href="tel:7057656657">(705) 765-6657</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Port Carling Seasonal Store'
});





push({

    position: LatLng(43.6567634, -70.2537535),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/portland/portland-local">Portland Local</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">18 Exchange Street' +
            "<br>Portland, Maine, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:2074826140">(207) 482-6140</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Portland Local'
});





push({

    position: LatLng(55.187018, -118.7919466),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/ca/grande-prairie/prairie-mall">Prairie Mall</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">11801 100 Street' + '<br/>Unit 430' +
            "<br>Grande Prairie, Alberta, Canada" +
            '</p>' +
            '<br>' +
            '<a href="tel:7805322354">(780) 532-2354</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Prairie Mall'
});





push({

    position: LatLng(44.232458429, -76.487972074),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/ca/kingston/princessstreet">Princess</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">270 Princess Street' +
            "<br>Kingston, Ontario, Canada" +
            '</p>' +
            '<br>' +
            '<a href="tel:6135493297">(613) 549-3297</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Princess'
});





push({

    position: LatLng(34.7690156, -92.45824139999999),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/little-rock/promenadeatchenal">Promenade at Chenal</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">17819 Chenal Parkway' + '<br/>Unit C-117' +
            "<br>Little Rock, Arkansas, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:5018210097">(501) 821-0097</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Promenade at Chenal'
});





push({

    position: LatLng(39.877963, -74.921501),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/evesham-township/sagemore">Promenade at Sagemore</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">500 Route 73 South' +
            "<br>Evesham Township, New Jersey, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:8569830952">(856) 983-0952</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Promenade at Sagemore'
});





push({

    position: LatLng(33.5249636, -117.1540907),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/temecula/promendateattemecula">Promenade at Temecula </a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">40820 Winchester Road - Unit 250' +
            "<br>Temecula, California, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:9512960765">(951) 296-0765</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Promenade at Temecula '
});





push({

    position: LatLng(34.1594029, -118.8205381),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/thousand-oaks/promenadeatwestlake">Promenade at Westlake</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">100 Promenade Way' + '<br/>E-4' +
            "<br>Thousand Oaks, California, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:8054946439">(805) 494-6439</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Promenade at Westlake'
});





push({

    position: LatLng(45.4756531, -75.6972849),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/ca/gatineau/promenades-gatineau-seasonal">Promenades Gatineau Seasonal Store</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">1100 Boulevard Maloney Ouest' + '<br/>Unit 119' +
            "<br>Gatineau, Quebec, Canada" +
            '</p>' +
            '<br>' +
            '<a href="tel:8195683881">(819) 568-3881</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Promenades Gatineau Seasonal Store'
});





push({

    position: LatLng(42.0483529, -70.18955729999999),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/provincetown/provincetown-seasonal-store">Provincetown Seasonal Store</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">184 Commercial Street' +
            "<br>Provincetown, Massachusetts, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:5084870258">(508) 487-0258</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Provincetown Seasonal Store'
});





push({

    position: LatLng(42.34849759999999, -71.0823684),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/boston/prudential">Prudential Center</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">776 Boylston Street' + '<br/>Space #6B' +
            "<br>Boston, Massachusetts, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:6172622030">(617) 262-2030</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Prudential Center'
});





push({

    position: LatLng(45.4449625, -73.4379581),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/ca/brossard/quartierdix">Quartier DIX30</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">9140, boulevard Leduc' + '<br/>Local 110' +
            "<br>Brossard, Quebec, Canada" +
            '</p>' +
            '<br>' +
            '<a href="tel:4504623542">(450) 462-3542</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Quartier DIX30'
});





push({

    position: LatLng(-27.4690885, 153.0266261),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/au/brisbane/queen-st-brisbane-store">Queen St Brisbane</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">Wintergarden Centre, Shop 104' + '<br/>171 - 209 Queen St' +
            "<br>Brisbane, Queensland, Australia" +
            '</p>' +
            '<br>' +
            '<a href="tel:732106019">(07) 3210 6019</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Queen St Brisbane'
});





push({

    position: LatLng(43.6491771, -79.39432479999999),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/ca/toronto/queenstreet">Queen St. W.</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">318 Queen Street West' +
            "<br>Toronto, Ontario, Canada" +
            '</p>' +
            '<br>' +
            '<a href="tel:4167031399">(416) 703-1399</a>' +
            '<h2>www.318queen.com</h2>' +
            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Queen St. W.'
});





push({

    position: LatLng(-36.8456406, 174.7659656),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/nz/auckland/auckland">Queen Street</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">87 Queen Street' +
            "<br>Auckland, Auckland, New Zealand" +
            '</p>' +
            '<br>' +
            '<a href="tel:93030625">09-303 0625</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Queen Street'
});





push({

    position: LatLng(-45.031963, 168.65844),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/nz/queenstown/queenstown">Queenstown Store</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">34 The Mall' +
            "<br>Queenstown, Queensland, New Zealand" +
            '</p>' +
            '<br>' +
            '<a href="tel:34413491">03-441 3491</a>' +
            '<h2>Pop-Up Store at the O\'Connells Shopping Centre 27th of August onward</h2>' +
            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Queenstown Store'
});





push({

    position: LatLng(34.1195145, -117.5355492),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/rancho-cucamonga/ranchocucamonga">Rancho Cucamonga Showroom</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">7375 Day Creek Boulevard' + '<br/>#D-103' +
            "<br>Rancho Cucamonga, California, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:9094632308">(909) 463-2308</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Rancho Cucamonga Showroom'
});





push({

    position: LatLng(52.2432619, -113.8095063),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/ca/red-deer/red-deer-seasonal-store">Red Deer Seasonal store</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">4900 Molly Banister Drive' +
            "<br>Red Deer, Alberta, Canada" +
            '</p>' +
            '<br>' +
            '<a href="tel:4033421320">(403) 342-1320</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Red Deer Seasonal store'
});





push({

    position: LatLng(51.5126153, -0.1405508),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/gb/london/regent-store">Regent Street Store</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">187 Regent Street' +
            "<br>London, England, United Kingdom" +
            '</p>' +
            '<br>' +
            '<a href="tel:2038978500">020 3897 8500</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Regent Street Store'
});





push({

    position: LatLng(38.9585135, -77.35910919999999),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/reston/reston-town-center">Reston Town Center </a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">11957 Market Street' +
            "<br>Reston, Virginia, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:7037878327">(703) 787-8327</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Reston Town Center '
});





push({

    position: LatLng(49.1653046, -123.1377765),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/ca/richmond/richmond-centre">Richmond Centre </a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">6551 Number 3 Road' +
            "<br>Richmond, British Columbia, Canada" +
            '</p>' +
            '<br>' +
            '<a href="tel:6042731300">(604) 273-1300</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Richmond Centre '
});





push({

    position: LatLng(51.4613667, -0.303422),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/gb/richmond/richmond-upon-thames-store">Richmond Upon Thames Store</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">The Quadrant' + '<br/>3-4 Dome Building ' +
            "<br>Richmond, England, United Kingdom" +
            '</p>' +
            '<br>' +
            '<a href="tel:2089485151">020 8948 5151</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Richmond Upon Thames Store'
});





push({

    position: LatLng(45.4256141, -75.6920693),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/ca/ottawa/rideaucentre">Rideau Centre</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">50 Rideau Street' + '<br/>3rd Floor Rideau Centre' +
            "<br>Ottawa, Ontario, Canada" +
            '</p>' +
            '<br>' +
            '<a href="tel:6132306633">(613) 230-6633</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Rideau Centre'
});





push({

    position: LatLng(44.9674532, -93.439748712673),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/minneapolis/westend">Ridgedalepick</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">12673 Wayzata Blvd' +
            "<br>Minneapolis, Minnesota, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:7635459069">(763) 545-9069</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Ridgedalepick'
});





push({

    position: LatLng(40.921733, -72.7169383),
    
    type: 'outlet',
    icon: '/etc/designs/shop/clientlibs/img/icons/outlets-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/riverhead/riverhead-outlet">Riverhead Outlet</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">910 Tanger Mall Drive' +
            "<br>Riverhead, New York, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:6317277547">(631) 727-7547</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Riverhead Outlet'
});





push({

    position: LatLng(49.2832537, -123.1227644),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/ca/vancouver/robson">Robson St</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">970 Robson Street' +
            "<br>Vancouver, British Columbia, Canada" +
            '</p>' +
            '<br>' +
            '<a href="tel:6046813118">(604) 681-3118</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Robson St'
});





push({

    position: LatLng(44.00715, -92.46121),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/minnesota/rochester-seasonal">Rochester Seasonal</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">Space 672 U.S. 14 E' +
            "<br>Rochester, Minnesota, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:5072880970">(507) 288-0970</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Rochester Seasonal'
});





push({

    position: LatLng(42.6836244, -83.1925005),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/rochester/rochester-store">Rochester Store</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">252 North Adams Road' +
            "<br>Rochester Hills, Michigan, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:2483750389">(248) 375-0389</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Rochester Store'
});





push({

    position: LatLng(42.7661196, -71.2303197),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/salem/rockingham-mall">Rockingham Mall</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">99 Rockingham Park Boulevard' +
            "<br>salem, New Hampshire, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:6038700046">(603) 870-0046</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Rockingham Mall'
});





push({

    position: LatLng(40.7383708, -73.6131462),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/garden-city/roosevelt">Roosevelt Field</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">#2042 - 630 Old Country Road' +
            "<br>Garden City, New York, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:5167411525">(516) 741-1525</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Roosevelt Field'
});





push({

    position: LatLng(40.543576, -80.0077263),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/pittsburgh/rossparkmall">Ross Park Mall</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">1000 Ross Park Mall Drive' + '<br/>Space N01K' +
            "<br>Pittsburgh, Pennsylvania, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:4123589538">(412) 358-9538</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Ross Park Mall'
});





push({

    position: LatLng(-34.9223717, 138.6031496),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/au/adelaide/adelaide">Rundle Mall</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">100 Rundle Mall' + '<br/>G06, Adelaide Central Plaza' +
            "<br>Adelaide, South Australia, Australia" +
            '</p>' +
            '<br>' +
            '<a href="tel:61883592672">(08) 8359 2672</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Rundle Mall'
});





push({

    position: LatLng(41.9000714, -87.6275126),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/chicago/rushwalton">Rush Street</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">930 North Rush Street' +
            "<br>Chicago, Illinois, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:3129150627">(312) 915-0627</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Rush Street'
});





push({

    position: LatLng(35.0934714, -89.8128164),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/memphis/Saddlecreek">Saddle Creek</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">2031 West Street' + '<br/>Suite 111' +
            "<br>Memphis, Tennessee, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:9017554871">(901) 755-4871</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Saddle Creek'
});





push({

    position: LatLng(48.867442, 2.3311308),
    
    type: 'showroom',
    icon: '/etc/designs/shop/clientlibs/img/icons/showrooms-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/fr/paris/Saint-Honore">Saint Honore Showroom</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">29 Place du Marché' + '<br/>Saint-Honoré' +
            "<br>Paris, France" +
            '</p>' +
            '<br>' +
            '<a href="tel:145081095">01 45 08 10 95</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Saint Honore Showroom'
});





push({

    position: LatLng(45.4982516, -73.574254),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/ca/montreal/stecatherine">Sainte-Catherine</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">1232 Rue Sainte-Catherine Ouest' +
            "<br>Montreal, Quebec, Canada" +
            '</p>' +
            '<br>' +
            '<a href="tel:5143940770">(514) 394-0770</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Sainte-Catherine'
});





push({

    position: LatLng(37.784948, -122.406672),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/san-francisco/sanfranciscocentre">San Francisco Centre</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">Unit 225 - 845 Market St' +
            "<br>San Francisco, California, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:4155463985">(415) 546-3985</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'San Francisco Centre'
});





push({

    position: LatLng(29.8282855, -97.9814069),
    
    type: 'outlet',
    icon: '/etc/designs/shop/clientlibs/img/icons/outlets-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/san-marcos/sanmarcos">San Marcos Premium Outlet</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">#1270 3939 S. Interstate 35' +
            "<br>San Marcos, Texas, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:5123530281">(512) 353-0281</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'San Marcos Premium Outlet'
});





push({

    position: LatLng(33.3107135, -111.7427365),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/gilbert/santan-village">SanTan Village</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">2200 East Williams Field Road' + '<br/>Unit 103' +
            "<br>Gilbert, Arizona, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:0"></a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'SanTan Village'
});





push({

    position: LatLng(34.1337614, -118.0523229),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/arcadia/santa-anita-holiday-seasonal-store">Santa Anita Seasonal Store</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">400 South Baldwin Avenue' + '<br/>Suite D12' +
            "<br>Arcadia, California, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:6262942920">(626) 294-2920</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Santa Anita Seasonal Store'
});





push({

    position: LatLng(34.419035, -119.699953),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/santa-barbara/santabarbara">Santa Barbara Store</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">651 Paseo Nuevo' + '<br/>Suite 101' +
            "<br>Santa Barbara, California, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:8055600616">(805) 560-0616</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Santa Barbara Store'
});





push({

    position: LatLng(30.336105, -86.163432),
    
    type: 'showroom',
    icon: '/etc/designs/shop/clientlibs/img/icons/showrooms-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/santa-rosa-beach/santarosabeach">Santa Rosa Beach Showroom</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">51 Uptown Grayton Circle' + '<br/>Unit 1' +
            "<br>Santa Rosa Beach, Florida, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:8505340004">(850) 534-0004</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Santa Rosa Beach Showroom'
});





push({

    position: LatLng(38.4455368, -122.6875614),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/santa-rosa/santa-rosa-local">Santa Rosa local</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">2307 Magowan Drive' +
            "<br>Santa Rosa, California, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:7075410168">(707) 541-0168</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Santa Rosa local'
});





push({

    position: LatLng(37.3222528, -121.9472191),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/san-jose/santanarow">Santana Row</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">334 Santana Row' + '<br/>Unit 1035' +
            "<br>San Jose, California, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:4085578721">(408) 557-8721</a>' +
            '<h2>We are moving back into our new space on August 1st!  We will be closed the two days before, 7/30-31</h2>' +
            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Santana Row'
});





push({

    position: LatLng(52.1275108, -106.6654553),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/ca/saskatoon/saskatoon">Saskatoon Store</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">118 21st Street East' +
            "<br>Saskatoon, Saskatchewan, Canada" +
            '</p>' +
            '<br>' +
            '<a href="tel:3066518858">(306) 651-8858</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Saskatoon Store'
});





push({

    position: LatLng(26.1493118, -80.32295429999999),
    
    type: 'outlet',
    icon: '/etc/designs/shop/clientlibs/img/icons/outlets-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/sunrise/sawgrass-mills-outlet">Sawgrass Mills Outlet</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">1800 Sawgrass Mills Circle' + '<br/>Suite 4075' +
            "<br>sunrise, Florida, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:9549088829">(954) 908-8829</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Sawgrass Mills Outlet'
});





push({

    position: LatLng(43.7767758, -79.2567924),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/ca/toronto/scarborough">Scarborough Town Centre</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">300 Borough Drive' +
            "<br>Toronto, Ontario, Canada" +
            '</p>' +
            '<br>' +
            '<a href="tel:4162905600">(416) 290-5600</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Scarborough Town Centre'
});





push({

    position: LatLng(33.5025088, -111.9290233),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/scottsdale/scottsdalefs">Scottsdale Fashion Square</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">7014 East Camelback Road' + '<br/>Unit B144' +
            "<br>Scottsdale, Arizona, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:4809463690">(480) 946-3690</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Scottsdale Fashion Square'
});





push({

    position: LatLng(33.6246991, -111.9241392),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/scottsdale/scottsdale">Scottsdale Quarter</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">15257 North Scottsdale Road' + '<br/>Suite 115' +
            "<br>Scottsdale, Arizona, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:4809222544">(480) 922-2544</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Scottsdale Quarter'
});





push({

    position: LatLng(48.09271409999999, -122.1876079),
    
    type: 'outlet',
    icon: '/etc/designs/shop/clientlibs/img/icons/outlets-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/tulalip/seattle-premium-outlets">Seattle Premium Outlets</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">10600 Quil Ceda Boulevard' + '<br/>Unit 419B' +
            "<br>Tulalip, Washington, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:3606510527">(360) 651-0527</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Seattle Premium Outlets'
});





push({

    position: LatLng(51.5145795, -0.1530982),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/gb/london/selfridges">Selfridges</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">400 Oxford Street, Floor 3' + '<br/>Marlyebone' +
            "<br>London, England, United Kingdom" +
            '</p>' +
            '<br>' +
            '<a href="tel:0"></a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Selfridges'
});





push({

    position: LatLng(48.1353403, 11.5700858),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/de/munich/sendlinger-strasse-">Sendlinger Strasse </a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">24 Sendlinger Strasse' +
            "<br>Munich, Bavaria, Germany" +
            '</p>' +
            '<br>' +
            '<a href="tel:498926207073">089 26207073</a>' +
            '<h2>Check out our weekly free community classes on facebook and join us! #sweatonceaday</h2>' +
            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Sendlinger Strasse '
});





push({

    position: LatLng(40.45119080000001, -79.9329448),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/pittsburgh/shadyside">Shadyside</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">5520 Walnut Street' +
            "<br>Pittsburgh, Pennsylvania, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:4126873592">(412) 687-3592</a>' +
            '<h2>https://www.facebook.com/lululemonPittsburgh/</h2>' +
            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Shadyside'
});





push({

    position: LatLng(31.195228, 121.437324),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/cn/shanghai/shanghai-grand-gateway">Shanghai Grand Gateway</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">Grand Gateway 66 No. 1 Hongqiao Rd.' + '<br/>Shop# 166A' +
            "<br>Shanghai, Shanghai, Mainland China" +
            '</p>' +
            '<br>' +
            '<a href="tel:0"></a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Shanghai Grand Gateway'
});





push({

    position: LatLng(31.2149994, 121.5613722),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/cn/shanghai/shanghai-kerry-parkside">Shanghai Kerry Parkside</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">1155 Fang Dian Lu' + '<br/>ShiJi GongYuan, Pudong Xinqu' +
            "<br>Shanghai, Shanghai, Mainland China" +
            '</p>' +
            '<br>' +
            '<a href="tel:0"></a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Shanghai Kerry Parkside'
});





push({

    position: LatLng(31.14312989999999, 121.6765901),
    
    type: 'outlet',
    icon: '/etc/designs/shop/clientlibs/img/icons/outlets-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/cn/shanghai/shanghai-village-outlet">Shanghai Village Outlet</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">Unit 16, No.88 Shendi East Road' + '<br/>Pudong New Area, 200127' +
            "<br>Shanghai, Shanghai, Mainland China" +
            '</p>' +
            '<br>' +
            '<a href="tel:0"></a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Shanghai Village Outlet'
});





push({

    position: LatLng(41.7747839, 123.434572),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/cn/shenyang/shenyang-mixc">Shenyang Mixc</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">288 Qingnian Street' +
            "<br>Shenyang, Liaoning, Mainland China" +
            '</p>' +
            '<br>' +
            '<a href="tel:0"></a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Shenyang Mixc'
});





push({

    position: LatLng(22.5402463, 113.9232894),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/cn/shenzhen/shenzhen-mixc-world">Shenzhen MixC World</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">9668 Shennan Avenue, Shop L158' + '<br/>Nanshan District' +
            "<br>Shenzhen, Guangdong, Mainland China" +
            '</p>' +
            '<br>' +
            '<a href="tel:0"></a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Shenzhen MixC World'
});





push({

    position: LatLng(43.61196, -79.55704399999999),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/ca/toronto/sherway">Sherway Gardens</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">Unit 1766, Sherway Gardens, 25 The West Mall' + '<br/>PO Box 146' +
            "<br>Toronto, Ontario, Canada" +
            '</p>' +
            '<br>' +
            '<a href="tel:4166206518">(416) 620-6518</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Sherway Gardens'
});





push({

    position: LatLng(35.6909599, 139.7040328),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/jp/tokyo/shinjuku-marui">Shinjuku Marui</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">3-30-13 Shinjuku, Shinjuku-ku' +
            "<br>Tokyo, Japan" +
            '</p>' +
            '<br>' +
            '<a href="tel:353677330">03-5367-7330</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Shinjuku Marui'
});





push({

    position: LatLng(39.8851097, -75.5302507),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/glen-mills/shoppesatbrintonlake">Shoppes at Brinton Lake</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">969 Baltimore Pike' + '<br/>Unit #2' +
            "<br>Glen Mills, Pennsylvania, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:6103581273">(610) 358-1273</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Shoppes at Brinton Lake'
});





push({

    position: LatLng(33.8405472, -84.3842251),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/atlanta/lenox">Shops Around Lenox</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">102 West Paces Ferry Road Northwest' + '<br/>Suite D' +
            "<br>Atlanta, Georgia, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:4048167678">(404) 816-7678</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Shops Around Lenox'
});





push({

    position: LatLng(38.9625618, -104.7942916),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/colorado-springs/shops-at-briargate-store">Shops at Briargate</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">1845 Briargate Parkway' + '<br/>Suite 489' +
            "<br>Colorado Springs, Colorado, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:7195932958">(719) 593-2958</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Shops at Briargate'
});





push({

    position: LatLng(29.5941969, -98.61512259999999),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/san-antonio/shopsatlacantera">Shops at La Cantera</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">#4457, 15900 La Cantera Parkway ' +
            "<br>San Antonio, Texas, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:2106944351">(210) 694-4351</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Shops at La Cantera'
});





push({

    position: LatLng(38.0647657, -78.4933721),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/charlottesville/shops-at-stonefield">Shops at Stonefield</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">2050 Bond Street' + '<br/>Suite 120 ' +
            "<br>Charlottesville, Virginia, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:4349640105">(434) 964-0105</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Shops at Stonefield'
});





push({

    position: LatLng(20.687145, -156.4406351),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/wailea/shops-at-wailea">Shops at Wailea</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">3750 Wailea Alanui Drive' + '<br/>EW-18' +
            "<br>Wailea, Hawaii, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:0"></a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Shops at Wailea'
});





push({

    position: LatLng(20.68687, -156.44037),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/wailea/shops-at-wailea-seasonal-store-">Shops at Wailea Seasonal</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">EW 15--3750 Wailea Alanui Drive' +
            "<br>Wailea, Hawaii, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:8088750274">(808) 875-0274</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Shops at Wailea Seasonal'
});





push({

    position: LatLng(28.1890779, -82.34968169999999),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/wesley-chapel/shops-at-wiregrass-seasonal">Shops at Wiregrass Seasonal Store</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">28211 Paseo Drive' + '<br/>Suite 160' +
            "<br>Wesley Chapel, Florida, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:8139733879">(813) 973-3879</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Shops at Wiregrass Seasonal Store'
});





push({

    position: LatLng(40.739873, -74.36348679999999),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/new-jersey/short-hills-mall">Short Hills Mallpis</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">1200 Morris Turnpike' + '<br/>Unit D245' +
            "<br>Short Hills, New Jersey, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:9735646167">(973) 564-6167</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Short Hills Mallpis'
});





push({

    position: LatLng(39.9754418, -83.0029491),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/columbus/short-north-seasonal">Short North Seasonal</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">640 North High Street' +
            "<br>Columbus, Ohio, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:6142244540">(614) 224-4540</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Short North Seasonal'
});





push({

    position: LatLng(37.65593, -77.61987),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/henrico/shortpumpstore">Short Pump</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">11800 W Broad Street' + '<br/>1128' +
            "<br>Richmond, Virginia, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:8043607923">(804) 360-7923</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Short Pump'
});





push({

    position: LatLng(40.8646494, -73.13335219999999),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/lake-grove/smith-haven-holiday-seasonal-store">Smith Haven Seasonal Store</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">514 Smith Haven Mall' + '<br/>E05' +
            "<br>Lake Grove, New York, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:6319790351">(631) 979-0351</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Smith Haven Seasonal Store'
});





push({

    position: LatLng(40.686023, -73.991302),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/brooklyn/smithst">Smith St.</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">166 Smith Street' +
            "<br>brooklyn, New York, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:7188526713">(718) 852-6713</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Smith St.'
});





push({

    position: LatLng(40.7226594, -73.9987472),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/new-york/soho-broadway">Soho Broadway</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">520 Broadway' +
            "<br>New York, New York, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:2127774248">(212) 777-4248</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Soho Broadway'
});





push({

    position: LatLng(42.560099, -83.183419),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/troy/somersetcollec">Somerset South</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">2801 West Big Beaver Road' + '<br/>J230' +
            "<br>Troy, Michigan, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:2486496267">(248) 649-6267</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Somerset South'
});





push({

    position: LatLng(-38.339126, 144.7406005),
    
    type: 'showroom',
    icon: '/etc/designs/shop/clientlibs/img/icons/showrooms-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/au/sorrento/sorrento">Sorrento Store</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">41 Ocean Beach Road' +
            "<br>Sorrento, Victoria, Australia" +
            '</p>' +
            '<br>' +
            '<a href="tel:359841516">(03) 5984 1516</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Sorrento Store'
});





push({

    position: LatLng(33.6916054, -117.8926978),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/costa-mesa/costamesa">South Coast Plaza</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">3333 Bear Street' + '<br/>Suite #102' +
            "<br>Costa Mesa, California, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:7146622732">(714) 662-2732</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'South Coast Plaza'
});





push({

    position: LatLng(40.3423756, -80.0560528),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/pittsburgh/south-hills-village">South Hills Village</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">301 South Hills Village' + '<br/>Unit 1325B' +
            "<br>Pittsburgh, Pennsylvania, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:0"></a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'South Hills Village'
});





push({

    position: LatLng(35.1522311, -80.8318968),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/charlotte/southpark">SouthPark</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">4400 Sharon Road' + '<br/>Suite M24A' +
            "<br>Charlotte, North Carolina, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:7043666538">(704) 366-6538</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'SouthPark'
});





push({

    position: LatLng(50.95282890000001, -114.0670056),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/ca/calgary/southcentre">Southcentre</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">100 Anderson Road Southeast' +
            "<br>Calgary, Alberta, Canada" +
            '</p>' +
            '<br>' +
            '<a href="tel:4033134434">(403) 313-4434</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Southcentre'
});





push({

    position: LatLng(53.486213, -113.514655),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/ca/edmonton/southgatecentre">Southgate Centre</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">Unit 412  5015 - 111 Street' +
            "<br>Edmonton, Alberta, Canada" +
            '</p>' +
            '<br>' +
            '<a href="tel:7803913175">(780) 391-3175</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Southgate Centre'
});





push({

    position: LatLng(32.9432395, -97.1305295),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/southlake/southlaketownsquare">Southlake Town Square</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">211 Grand Avenue' + '<br/>Unit 112' +
            "<br>Southlake, Texas, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:8174888035">(817) 488-8035</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Southlake Town Square'
});





push({

    position: LatLng(41.94688439999999, -87.66427170000001),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/chicago/southport">Southport Avenue</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">3556 North Southport Avenue' +
            "<br>Chicago, Illinois, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:7733274136">(773) 327-4136</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Southport Avenue'
});





push({

    position: LatLng(35.9358233, -86.82541839999999),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/franklin/southside">Southside at McEwen</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">1556 West McEwen Drive' + '<br/>Unit 118' +
            "<br>Franklin, Tennessee, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:6157789362">(615) 778-9362</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Southside at McEwen'
});





push({

    position: LatLng(44.6434065, -63.57573989999999),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/ca/halifax/halifax">Spring Garden Rd</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">5445 Spring Garden Road' +
            "<br>Halifax, Nova Scotia, Canada" +
            '</p>' +
            '<br>' +
            '<a href="tel:9024055252">(902) 405-5252</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Spring Garden Rd'
});





push({

    position: LatLng(40.7178494, -74.3589506),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/summit/springfield">Springfield Ave</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">402 Springfield Avenue' +
            "<br>Summit, New Jersey, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:9082773681">(908) 277-3681</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Springfield Ave'
});





push({

    position: LatLng(43.5930784, -79.64249110000002),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/ca/mississauga/squareone">Square One</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">Unit #2-212 100 City Centre Drive ' +
            "<br>Mississauga, Ontario, Canada" +
            '</p>' +
            '<br>' +
            '<a href="tel:9059490220">(905) 949-0220</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Square One'
});





push({

    position: LatLng(48.8530289, 2.3333514),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/fr/paris/paris-st-germain-store">St Germain</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">47 Rue Bonaparte' +
            "<br>Paris, France" +
            '</p>' +
            '<br>' +
            '<a href="tel:0"></a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'St Germain'
});





push({

    position: LatLng(30.2573127, -81.5253511),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/jacksonville/stjohnscenter">St Johns Ctr  </a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">4812 River City Drive' +
            "<br>Jacksonville, Florida, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:9046457904">(904) 645-7904</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'St Johns Ctr  '
});





push({

    position: LatLng(37.4430322, -122.171446),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/palo-alto/stanford-shopping-center">Stanford Shopping Center</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">660 Stanford Shopping Center' + '<br/>Unit 1101' +
            "<br>Palo Alto, California, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:6503212767">(650) 321-2767</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Stanford Shopping Center'
});





push({

    position: LatLng(37.5454246, 127.2236646),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/kr/hanam/starfield-hanam">Starfield Hanam</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">750 Misa-daero Hanam-si' + '<br/>L1 Floor,Unit  1275' +
            "<br>Hanam, Gyeonggi-do, South Korea" +
            '</p>' +
            '<br>' +
            '<a href="tel:3180286518">031-8028-6518</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Starfield Hanam'
});





push({

    position: LatLng(40.9830343, -111.9077466),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/farmington/station-park">Station Park</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">135 N West Promontory' + '<br/>F - 125' +
            "<br>Farmington, Utah, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:8014517475">(801) 451-7475</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Station Park'
});





push({

    position: LatLng(40.4854676, -106.8341544),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/steamboat-springs/steamboat-springs-seasonal">Steamboat Springs Seasonal</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">B102 - 703 Lincoln Avenue' +
            "<br>Steamboat Springs, Colorado, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:9708791520">(970) 879-1520</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Steamboat Springs Seasonal'
});





push({

    position: LatLng(59.3336485, 18.0717655),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/se/stockholm/stockholm">Stockholm Store</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">Smålandsgatan 20' +
            "<br>Stockholm, Nordic region , Sweden" +
            '</p>' +
            '<br>' +
            '<a href="tel:0"></a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Stockholm Store'
});





push({

    position: LatLng(37.6944041, -121.9246458),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/pleasanton/stoneridgemall">Stoneridge Shopping Center</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">2401 Stoneridge Mall Road' + '<br/>E224' +
            "<br>Pleasanton, California, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:9258471537">(925) 847-1537</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Stoneridge Shopping Center'
});





push({

    position: LatLng(37.7280817, -122.4770808),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/san-francisco/stonestown-galleria">Stonestown Galleria</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">3251 20th Avenue' + '<br/>Suite #267' +
            "<br>San Francisco, California, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:4152426105">(415) 242-6105</a>' +
            '<h2>Pop Up Officially opening on August 10, 2018</h2>' +
            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Stonestown Galleria'
});





push({

    position: LatLng(35.9054031, -78.9450648),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/durham/southpoint">Streets at Southpoint</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">8030 Renaissance Parkway' + '<br/>Suite #935 Building M' +
            "<br>Durham, North Carolina, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:9192480687">(919) 248-0687</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Streets at Southpoint'
});





push({

    position: LatLng(34.1435388, -118.3984125),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/los-angeles/studiocity">Studio City</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">12199 Ventura Boulevard' +
            "<br>Los Angeles, California, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:8187614361">(818) 761-4361</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Studio City'
});





push({

    position: LatLng(40.008829, -75.289638),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/ardmore/ardmore">Suburban Square</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">41 St. Georges Road' + '<br/>Unit 84' +
            "<br>Ardmore, Pennsylvania, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:6106422841">(610) 642-2841</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Suburban Square'
});





push({

    position: LatLng(33.4478305, -86.73273259999999),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/birmingham/birmingham">Summit Birmingham</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">214 Summit Boulevard' + '<br/>Suite 350' +
            "<br>Birmingham, Alabama, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:2059773643">(205) 977-3643</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Summit Birmingham'
});





push({

    position: LatLng(-26.6550835, 153.0871586),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/au/maroochydore/sunshine-plaza">Sunshine Plaza</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">154-164 Horton Parade' +
            "<br>Maroochydore, Queensland, Australia" +
            '</p>' +
            '<br>' +
            '<a href="tel:754527980">(07) 5452 7980</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Sunshine Plaza'
});





push({

    position: LatLng(31.30923499999999, 120.673049),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/cn/suzhou/suzhou-centre">Suzhou Centre</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">58 Xinghai Street' + '<br/>Unit (B)01-30/31, Suzhou Center' +
            "<br>Suzhou, Jiangsu Sheng, Mainland China" +
            '</p>' +
            '<br>' +
            '<a href="tel:0"></a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Suzhou Centre'
});





push({

    position: LatLng(47.2160891, -122.4687411),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/tacoma/tacoma-mall">Tacoma Mall</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">4502 South Steele Street' + '<br/>923A' +
            "<br>Tacoma, Washington, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:0"></a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Tacoma Mall'
});





push({

    position: LatLng(47.216413, -122.46784),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/tacoma/tacoma-seasonal-store">Tacoma Seasonal Store</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">4502 South Steele Street' + '<br/>Unit #674A' +
            "<br>Tacoma, Washington, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:2534720319">(253) 472-0319</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Tacoma Seasonal Store'
});





push({

    position: LatLng(31.2308037, 121.4617254),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/cn/shanghai/taikoo-hui">TaiKoo Hui</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">789 Nan Jing Xi Lu, Jingan District' + '<br/>Unit #251 - level 2' +
            "<br>Shanghai, Shanghai, Mainland China" +
            '</p>' +
            '<br>' +
            '<a href="tel:2161409600">021 6140 9600</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'TaiKoo Hui'
});





push({

    position: LatLng(39.935886, 116.455419),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/cn/beijing/sanlitun-north-taikoo-li">Taikoo Li -  Sanlitun North</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">Unit NLG-53, North District of Taikoo Li Sanlitun' +
            "<br>Chaoyang District, Beijing, Mainland China" +
            '</p>' +
            '<br>' +
            '<a href="tel:1064178818">010 6417 8818</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Taikoo Li -  Sanlitun North'
});





push({

    position: LatLng(-36.788416, 174.772583),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/nz/takapuna-beach/takapuna">Takapuna</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">Shop 2A - D, 19 - 29 Hurstmere Road Takapuna' +
            "<br>Takapuna Beach, Auckland, New Zealand" +
            '</p>' +
            '<br>' +
            '<a href="tel:6494887721">09-488 7721</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Takapuna'
});





push({

    position: LatLng(1.3027623, 103.8342901),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/sg/singapore/takashimaya">Takashimaya</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">391B Orchard Road' + '<br/>#03-12B/13' +
            "<br>Singapore, Singapore, Singapore" +
            '</p>' +
            '<br>' +
            '<a href="tel:6566942347">6694 2347</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Takashimaya'
});





push({

    position: LatLng(30.4635558, -84.27089989999999),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/tallahassee/tallahassee-local">Tallahassee Local</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">1817 Thomasville Road' +
            "<br>Tallahassee, Florida, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:8509150485">(850) 915-0485</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Tallahassee Local'
});





push({

    position: LatLng(35.3384969, 139.4469449),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/jp/fujisawa-shi/terrace-mall-shonan">Terrace Mall Shonan</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">1-3-1 Tsujidokandai, Terrace Mall Shonan' + '<br/>Section 238' +
            "<br>Fujisawa-shi, Japan" +
            '</p>' +
            '<br>' +
            '<a href="tel:466311270">0466-31-1270</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Terrace Mall Shonan'
});









push({

    position: LatLng(44.043827, -121.3156615),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/bend/the-bend-local">The Bend Local</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">655 Southwest Powerhouse Drive' +
            "<br>Bend, Oregon, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:5416178448">(541) 617-8448</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'The Bend Local'
});





push({

    position: LatLng(34.1534263, -118.6453615),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/calabasas/thecommons">The Commons</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">4719 Commons Way' +
            "<br>Calabasas, California, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:8182251417">(818) 225-1417</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'The Commons'
});





push({

    position: LatLng(43.0343807, -88.1637839),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/brookfield/the-corners-of-brookfield">The Corners of Brookfield</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">225 High Street' +
            "<br>Brookfield, Wisconsin, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:2627847623">(262) 784-7623</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'The Corners of Brookfield'
});





push({

    position: LatLng(30.402805, -97.725281),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/austin/domainstore">The Domain</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">11600 Century Oaks Terrace' + '<br/>A-7 (Unit 116)' +
            "<br>Austin, Texas, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:5123392067">(512) 339-2067</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'The Domain'
});





push({

    position: LatLng(33.0718691, -117.2652454),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/carlsbad/carlsbadforum">The Forum</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">1923 Calle Barcelona' + '<br/>136' +
            "<br>Carlsbad, California, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:7604790183">(760) 479-0183</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'The Forum'
});





push({

    position: LatLng(26.8468822, -80.0853068),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/palm-beach-gardens/thegardens">The Gardens</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">3101 PGA Boulevard' + '<br/>Space P229' +
            "<br>Palm Beach Gardens, Florida, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:5616913782">(561) 691-3782</a>' +
            '<h2>In the Gardens Mall, 2nd level near Macy\'s</h2>' +
            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'The Gardens'
});





push({

    position: LatLng(-33.866505, 151.207336),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/au/sydney/ivydistrict">The Ivy</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">330C George Street' + '<br/>Shop 2' +
            "<br>Sydney, New South Wales, Australia" +
            '</p>' +
            '<br>' +
            '<a href="tel:292338292">(02) 9233 8292</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'The Ivy'
});





push({

    position: LatLng(39.97240499999999, -75.134625),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/philadelphia/the-local-fishtown">The Local Fishtown</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">1424 Frankford Avenue' +
            "<br>Philadelphia, Pennsylvania, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:2154234170">(215) 423-4170</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'The Local Fishtown'
});





push({

    position: LatLng(43.6798903, -114.3634953),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/ketchum/the-local-sun-valley">The Local Sun Valley</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">191 North Main Street' +
            "<br>Ketchum, Idaho, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:2087266842">(208) 726-6842</a>' +
            '<h2>Stop by to find out the latest on trails we run, routes we love, and our favorite classes in town!</h2>' +
            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'The Local Sun Valley'
});





push({

    position: LatLng(18.4118265, -66.0248881),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/puerto-rico/san-juan">The Mall of San Juan</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">The Mall of San Juan Boulevard' + '<br/>Suite 266 1000 Mall of San Juan Blvd' +
            "<br>San Juan, PR, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:7873020471">(787) 302-0471</a>' +
            '<h2>Coming Soon</h2>' +
            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'The Mall of San Juan'
});





push({

    position: LatLng(-37.63704430000001, 176.1831134),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/nz/tauranga/the-mount">The Mount</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">121 Maunganui Road' +
            "<br>Tauranga, Mount Maunganui, New Zealand" +
            '</p>' +
            '<br>' +
            '<a href="tel:75721298">07-572 1298</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'The Mount'
});





push({

    position: LatLng(34.04759, -118.52491),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/pacific-palisades/the-pacific-palisades">The Pacific Palisades</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">15225 Palisades Village Lane' +
            "<br>Los Angeles, California, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:0"></a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'The Pacific Palisades'
});





push({

    position: LatLng(33.9029565, -118.3953442),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/el-segundo/thepoint">The Point</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">840 South Sepulveda Boulevard' + '<br/>Unit B108' +
            "<br>El Segundo, California, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:3106409476">(310) 640-9476</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'The Point'
});





push({

    position: LatLng(29.4929089, -98.48248339999999),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/san-antonio/quarrymarket">The Quarry</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">255 East Basse Road' + '<br/>Suite 6B' +
            "<br>San Antonio, Texas, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:2108328172">(210) 832-8172</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'The Quarry'
});





push({

    position: LatLng(40.7537936, -73.99969039999999),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/new-york/the-shops-at-hudson-yards">The Shops at Hudson Yards</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">500 West 33rd Street' + '<br/>RU 313' +
            "<br>New York, New York, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:2126431382">(212) 643-1382</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'The Shops at Hudson Yards'
});





push({

    position: LatLng(33.5587648, -117.6683415),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/mission-viejo/shopsatmissionviejo">The Shops at Mission Viejo</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">555 Shops At Mission Viejo' + '<br/>Unit 907B' +
            "<br>Mission Viejo, California, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:9493641067">(949) 364-1067</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'The Shops at Mission Viejo'
});





push({

    position: LatLng(41.097081, -74.01507170000001),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/nanuet/shopsatnanuet">The Shops at Nanuet</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">1151 Fashion Drive' +
            "<br>Nanuet, New York, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:8456242975">(845) 624-2975</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'The Shops at Nanuet'
});





push({

    position: LatLng(39.4041551, -119.7524147),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/reno/summit-sierra">The Summit Sierra</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">Suite 304 13935 South Virginia Street' +
            "<br>Reno, Nevada, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:7758519070">(775) 851-9070</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'The Summit Sierra'
});





push({

    position: LatLng(41.6831174, -83.6216808),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/toledo/The-toledo-local">The Toledo Local</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">3430 Secor Road' +
            "<br>Toledo, Ohio, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:4195367605">(419) 536-7605</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'The Toledo Local'
});





push({

    position: LatLng(22.1501591, 113.5573442),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/mo/macau/the-venetian-macao0">The Venetian Macao</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">Estrada da Baia de Nossa Senhora da Esperanca' + '<br/>Unit 2421' +
            "<br>Macao SAR, Macao, Macao, China" +
            '</p>' +
            '<br>' +
            '<a href="tel:85328438121">2843 8121</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'The Venetian Macao'
});





push({

    position: LatLng(37.93192, -122.515861),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/corte-madera/village">The Village</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">1620 Redwood Hwy' +
            "<br>Corte Madera, California, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:4159272891">(415) 927-2891</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'The Village'
});





push({

    position: LatLng(43.6210518, -116.3499008),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/meridian/meridianvillage">The Village at Meridian</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">3597 E. Monarch Sky Ln. #100' +
            "<br>Meridian, Idaho, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:2088959887">(208) 895-9887</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'The Village at Meridian'
});





push({

    position: LatLng(37.7096801, -97.2276409),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/wichita/The-Waterfront">The Waterfront</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">1423 North Webb Road' +
            "<br>Wichita, Kansas, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:3166300349">(316) 630-0349</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'The Waterfront'
});





push({

    position: LatLng(38.8751743, -77.0014765),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/washington/the-yards-local-">The Yards Local </a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">300 Tingey Street Southeast' +
            "<br>Washington, District of Columbia, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:2024884529">(202) 488-4529</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'The Yards Local '
});





push({

    position: LatLng(34.014767, -118.4949443),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/santa-monica/santamonicablvd">Third Street Promenade at Broadway</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">1457 Third Street Promenade at Broadway' +
            "<br>Santa Monica, California, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:3103199900">(310) 319-9900</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Third Street Promenade at Broadway'
});





push({

    position: LatLng(43.0342501, -87.90851789999999),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/milwaukee/thirdward">Third Ward</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">322 North Water Street' +
            "<br>Milwaukee, Wisconsin, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:4142245321">(414) 224-5321</a>' +
            '<h2>Parking (street): 2hr metered street parking Mon-Fri, Free 2hr on Sat., free all day on Sun.</h2>' +
            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Third Ward'
});





push({

    position: LatLng(36.0912452, -80.28325029999999),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/winston-salem/thruway-local-">Thruway Local </a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">312 South Stratford Road' +
            "<br>Winston-Salem, North Carolina, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:3367233002">(336) 723-3002</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Thruway Local '
});





push({

    position: LatLng(40.7685526, -73.9831866),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/new-york/time-warner-center">Time Warner Center</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">10 Columbus Circle' + '<br/>Unit 113' +
            "<br>New York, New York, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:2122622062">(212) 262-2062</a>' +
            '<h2>Located on the ground floor</h2>' +
            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Time Warner Center'
});





push({

    position: LatLng(40.044109, -75.391235),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/wayne/wayne">Town Center at Wayne</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">220 W Lancaster Avenue' +
            "<br>Wayne, Pennsylvania, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:6109647964">(610) 964-7964</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Town Center at Wayne'
});





push({

    position: LatLng(36.8423413, -76.1330035),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/virginia-beach/towncenterofvirginiabeach">Town Center of Virginia Beach</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">201 Town Center Drive' +
            "<br>Virginia Beach, Virginia, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:7574900152">(757) 490-0152</a>' +
            '<h2>#thesweatlifeVB</h2>' +
            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Town Center of Virginia Beach'
});





push({

    position: LatLng(39.4038997, -76.60062719999999),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/towson/towsoncenter">Towson Center</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">825 Dulaney Valley Road' +
            "<br>Towson, Maryland, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:4108230954">(410) 823-0954</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Towson Center'
});





push({

    position: LatLng(34.0172171, -80.9635041),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/columbia/trenholm-plaza-store">Trenholm Plaza</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">4840 Forest Drive' +
            "<br>Columbia, South Carolina, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:8037820640">(803) 782-0640</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Trenholm Plaza'
});





push({

    position: LatLng(49.0376281, -123.0852783),
    
    type: 'outlet',
    icon: '/etc/designs/shop/clientlibs/img/icons/outlets-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/ca/delta/tsawwassen-mills-outlet">Tsawwassen Mills Outlet</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">5000 Canoe Pass Way' + '<br/>Unit 170' +
            "<br>Vancouver, British Columbia, Canada" +
            '</p>' +
            '<br>' +
            '<a href="tel:6049482274">(604) 948-2274</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Tsawwassen Mills Outlet'
});





push({

    position: LatLng(33.21083, -87.5665),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/tuscaloosa/tuscaloosa-seasonal">Tuscaloosa Seasonal</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">2218 University Boulevard' + '<br/>Suite B' +
            "<br>Tuscaloosa, Alabama, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:2053493029">(205) 349-3029</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Tuscaloosa Seasonal'
});





push({

    position: LatLng(42.4899334, -83.4759009),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/novi/twelveoaksmall">Twelve Oaks Mall</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">27500 Novi Road' + '<br/>Unit C291' +
            "<br>Novi, Michigan, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:2483492125">(248) 349-2125</a>' +
            '<h2>Come check us out in our new space!</h2>' +
            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Twelve Oaks Mall'
});





push({

    position: LatLng(38.9166238, -77.2213857),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/tysons-corner/tysonscorner">Tysons Corner, McLean</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">lululemon 8066 Tysons Corner Center' + '<br/>Unit K4AU' +
            "<br>Tysons Corner, Virginia, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:7038211357">(703) 821-1357</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Tysons Corner, McLean'
});





push({

    position: LatLng(26.1548402, -80.1181233),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/fort-lauderdale/union-planters">Union Planters</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">2360 North Federal Highway' +
            "<br>Fort Lauderdale, Florida, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:9545645448">(954) 564-5448</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Union Planters'
});





push({

    position: LatLng(37.447256, -122.160357),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/palo-alto/paloalto">University Ave</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">432 University Avenue' +
            "<br>Palo Alto, California, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:6505661617">(650) 566-1617</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'University Ave'
});





push({

    position: LatLng(39.9535614, -75.1965008),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/philadelphia/university-city-seasonal">University City Seasonal Store</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">3661 Walnut Street' +
            "<br>Philadelphia, Pennsylvania, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:2152221117">(215) 222-1117</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'University City Seasonal Store'
});





push({

    position: LatLng(41.719128, -86.1901146),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/mishawaka/university-park-mall-seasonal-store">University Park Mall Seasonal</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">6501 Grape Road' + '<br/>Space 289' +
            "<br>Mishawaka, Indiana, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:5742713260">(574) 271-3260</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'University Park Mall Seasonal'
});





push({

    position: LatLng(27.393811, -82.446163),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/sarasota/universitytowncenter">University Town Center</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">Unit 275 140 University Town Centre Dr' +
            "<br>Sarasota, Florida, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:9412563860">(941) 256-3860</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'University Town Center'
});





push({

    position: LatLng(47.6640832, -122.2984756),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/seattle/universityvil">University Village</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">2656 Northeast University Village Street' + '<br/>E18' +
            "<br>Seattle, Washington, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:2065246025">(206) 524-6025</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'University Village'
});





push({

    position: LatLng(44.057934, -79.481123),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/ca/newmarket/uppercanadamall">Upper Canada Mall</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">17600 Yonge Street' + '<br/>Space Hh25' +
            "<br>Newmarket, Ontario, Canada" +
            '</p>' +
            '<br>' +
            '<a href="tel:9058535399">(905) 853-5399</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Upper Canada Mall'
});





push({

    position: LatLng(39.6408879, -106.374686),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/vail/vail">Vail Village</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">193 Gore Creek Drive' + '<br/>Unit A' +
            "<br>Vail, Colorado, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:9704767040">(970) 476-7040</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Vail Village'
});





push({

    position: LatLng(34.4156581, -118.5576274),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/valencia/valencia">Valencia Town Square</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">24201 Valencia Boulevard' +
            "<br>Valencia, California, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:6612911502">(661) 291-1502</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Valencia Town Square'
});





push({

    position: LatLng(43.8254765, -79.5386),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/ca/vaughan/vaughanmills">Vaughan Mills</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">1 Bass Pro Mills Drive' + '<br/>Unit 164A' +
            "<br>Vaughan, Ontario, Canada" +
            '</p>' +
            '<br>' +
            '<a href="tel:9056692039">(905) 669-2039</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Vaughan Mills'
});









push({

    position: LatLng(34.112322, -117.533294),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/rancho-cucamonga/victoria-gardens">Victoria Gardens</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">12468 South Main Street' + '<br/>Unit 1530' +
            "<br>Rancho Cucamonga, California, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:9094632714">(909) 463-2714</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Victoria Gardens'
});





push({

    position: LatLng(41.2613647, -96.184533),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/omaha/villagepoint">Village Pointe</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">17250 Davenport Street' + '<br/>Unit 104' +
            "<br>Omaha, Nebraska, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:4022890370">(402) 289-0370</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Village Pointe'
});





push({

    position: LatLng(49.2683922, -123.1531107),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/ca/vancouver/kitsilano">W 4th Ave</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">2101 West 4th Avenue' +
            "<br>Vancouver, British Columbia, Canada" +
            '</p>' +
            '<br>' +
            '<a href="tel:6047326111">(604) 732-6111</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'W 4th Ave'
});





push({

    position: LatLng(42.914093, -78.7646481),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/buffalo/waldengalleria">Walden Galleria</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">1 Walden Galleria' +
            "<br>Buffalo, New York, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:7166813916">(716) 681-3916</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Walden Galleria'
});





push({

    position: LatLng(37.8942628, -122.0581532),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/walnut-creek/walnutcreek">Walnut Creek Store</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">1210 Broadway Plaza' +
            "<br>Walnut Creek, California, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:9252741253">(925) 274-1253</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Walnut Creek Store'
});





push({

    position: LatLng(39.9498893, -75.1701849),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/philadelphia/walnutstreet">Walnut St</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">1720 Walnut Street' +
            "<br>Philadelphia, Pennsylvania, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:2155634806">(215) 563-4806</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Walnut St'
});





push({

    position: LatLng(40.825982, -73.411977),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/huntington-station/waltwhitman">Walt Whitman</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">Suite 1008C 160 Walt Whitman Road' +
            "<br>Huntington Station, New York, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:6313507353">(631) 350-7353</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Walt Whitman'
});





push({

    position: LatLng(35.04284, -85.308988),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/chattanooga/warehouse-row">Warehouse Row</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">1110 Market Street' + '<br/>Unit 117B' +
            "<br>Chattanooga, Tennessee, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:4237524313">(423) 752-4313</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Warehouse Row'
});





push({

    position: LatLng(-33.7686867, 151.2656139),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/au/brookvale/warringah">Warringah</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">Shop 1085 - Warringah Mall' + '<br/>Condamine St & Old Pittwater Rd' +
            "<br>Brookvale, New South Wales, Australia" +
            '</p>' +
            '<br>' +
            '<a href="tel:299074128">(02) 9907 4128</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Warringah'
});





push({

    position: LatLng(45.4481546, -122.7822679),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/portland/washington-square-store">Washington Square store</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">9355 S.W. Washington Square Rd' + '<br/>Space T-19' +
            "<br>Portland, Oregon, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:5034312367">(503) 431-2367</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Washington Square store'
});





push({

    position: LatLng(26.2124716, -81.8007377),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/naples/naples">Waterside Shops</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">Suite C-5 5435 Tamiami Trail North' +
            "<br>Naples, Florida, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:2392541517">(239) 254-1517</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Waterside Shops'
});





push({

    position: LatLng(41.8294271, -71.3878648),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/providence/wayland-square">Wayland Square</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">209 Wayland Avenue' +
            "<br>providence, Rhode Island, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:4014556850">(401) 455-6850</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Wayland Square'
});





push({

    position: LatLng(-41.284, 174.775212),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/nz/wellington/wellington">Wellington Store</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">276 Lambton Quay' +
            "<br>Wellington, Wellington, New Zealand" +
            '</p>' +
            '<br>' +
            '<a href="tel:6444734307">04-473 4307</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Wellington Store'
});





push({

    position: LatLng(49.771695, 9.5820224),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/de/wertheim/wertheim-village">Wertheim Village</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">Almosenberg' + '<br/>unit 128' +
            "<br>Wertheim, Wertheim, Germany" +
            '</p>' +
            '<br>' +
            '<a href="tel:93429664901">09342 9664901</a>' +
            '<h2>Sweat Once A Day</h2>' +
            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Wertheim Village'
});





push({

    position: LatLng(46.85894990000001, -96.84625620000001),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/fargo/west-acres-mall-">West Acres Mall </a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">3902 13th Avenue South' + '<br/>Suite 507' +
            "<br>Fargo, ND, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:7012828918">(701) 282-8918</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'West Acres Mall '
});





push({

    position: LatLng(38.6009828, -90.446958),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/st-louis/west-county-seasonal-store">West County Seasonal Store</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">80 West County Center Drive' + '<br/>Space #1150' +
            "<br>St. Louis, Missouri, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:3149651250">(314) 965-1250</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'West County Seasonal Store'
});





push({

    position: LatLng(53.5222349, -113.6201712),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/ca/edmonton/westedmonton">West Edmonton Mall</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">8882 170 Street Northwest' + '<br/>Unit 2846' +
            "<br>Edmonton, Alberta, Canada" +
            '</p>' +
            '<br>' +
            '<a href="tel:7804813656">(780) 481-3656</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'West Edmonton Mall'
});





push({

    position: LatLng(41.1104837, -81.57041939999999),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/akron/west-market-st-station-local">West Market St Station Local</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">1711 West Market Street' + '<br/>Suite 410' +
            "<br>Akron, Ohio, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:3308354450">(330) 835-4450</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'West Market St Station Local'
});





push({

    position: LatLng(45.392122583, -75.753888799),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/ca/ottawa/westboro">Westboro</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">340 Richmond Road' +
            "<br>Ottawa, Ontario, Canada" +
            '</p>' +
            '<br>' +
            '<a href="tel:6137611839">(613) 761-1839</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Westboro'
});





push({

    position: LatLng(41.0315075, -73.7584823),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/white-plains/westchestermall">Westchester Mall</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">125 Westchester Avenue' + '<br/>Unit 2870' +
            "<br>White Plains, New York, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:9142904328">(914) 290-4328</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Westchester Mall'
});





push({

    position: LatLng(41.0315075, -73.7584823),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/white-plains/westchestermall">Westchester Mall</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">125 Westchester Avenue' + '<br/>Unit 2870' +
            "<br>White Plains, New York, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:9142904328">(914) 290-4328</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Westchester Mall'
});





push({

    position: LatLng(41.7220581, -72.7627885),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/west-hartford/farmington">Westfarms Mall</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">545 West Farms Mall' +
            "<br>West Hartford, Connecticut, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:8603130782">(860) 313-0782</a>' +
            '<h2>Come visit us at the Mall!</h2>' +
            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Westfarms Mall'
});





push({

    position: LatLng(51.5072023, -0.2232423),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/gb/london/westfield">Westfield</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">Ariel Way' + '<br/>UNIT 2099, Level 50' +
            "<br>London, England, United Kingdom" +
            '</p>' +
            '<br>' +
            '<a href="tel:2087435227">020 8743 5227</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Westfield'
});





push({

    position: LatLng(42.061758, -87.7477105),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/skokie/skokie">Westfield Old Orchard</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">4999 Old Orchard Shopping Center' + '<br/>Unit K4' +
            "<br>Skokie, Illinois, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:8476742039">(847) 674-2039</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Westfield Old Orchard'
});





push({

    position: LatLng(47.4588958, -122.2584282),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/tukwila/westfieldsouthcentermall">Westfield Southcenter Mall</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">2800 Southcenter Mall' + '<br/>Unit 748' +
            "<br>Tukwila, Washington, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:2062424594">(206) 242-4594</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Westfield Southcenter Mall'
});





push({

    position: LatLng(-33.8708464, 151.20733),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/au/sydney/westfield-sydney-city">Westfield Sydney City</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">Westfield Sydney, Cnr Pitt St & Market St' +
            "<br>Sydney, New South Wales, Australia" +
            '</p>' +
            '<br>' +
            '<a href="tel:0"></a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Westfield Sydney City'
});





push({

    position: LatLng(34.190191, -118.6030615),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/canoga-park/westfield-topanga">Westfield Topanga</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">6600 Topanga Canyon Boulevard' + '<br/>Unit #2070B' +
            "<br>Los Angeles, California, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:8189329553">(818) 932-9553</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Westfield Topanga'
});





push({

    position: LatLng(32.8709237, -117.2107873),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/san-diego/westfieldutc">Westfield UTC</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">Unit H2 4545 La Jolla Village Drive' +
            "<br>San Diego, California, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:8585352042">(858) 535-2042</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Westfield UTC'
});





push({

    position: LatLng(33.5339096, -112.2660533),
    
    type: 'outlet',
    icon: '/etc/designs/shop/clientlibs/img/icons/outlets-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/glendale/westgate-outlets">Westgate outlets</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">6800 North 95th Avenue' + '<br/>Suite 380' +
            "<br>Glendale, Arizona, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:6238779291">(623) 877-9291</a>' +
            '<h2>Email us to receive our daily promotions.</h2>' +
            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Westgate outlets'
});





push({

    position: LatLng(45.4782607, -73.6044946),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/ca/westmount/westmount">Westmount</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">4895, rue Sherbrooke Ouest' +
            "<br>Westmount, Quebec, Canada" +
            '</p>' +
            '<br>' +
            '<a href="tel:5144886027">(514) 488-6027</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Westmount'
});





push({

    position: LatLng(41.142664, -73.3619498),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/westport/westport">Westport Store</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">91 Main Street' +
            "<br>Westport, Connecticut, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:2032271378">(203) 227-1378</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Westport Store'
});





push({

    position: LatLng(20.9210674, -156.6943726),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/lahaina/whalers-village">Whalers Village</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">2435 Kaanapali Parkway' +
            "<br>Lahaina, Hawaii, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:8086615323">(808) 661-5323</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Whalers Village'
});





push({

    position: LatLng(50.113838, -122.9545965),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/ca/whistler/mountainsquare">Whistler Village</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">4154 Village Green' + '<br/>Unit 118' +
            "<br>Whistler, British Columbia, Canada" +
            '</p>' +
            '<br>' +
            '<a href="tel:6049389642">(604) 938-9642</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Whistler Village'
});





push({

    position: LatLng(53.5181091, -113.5031351),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/ca/edmonton/whyteave">Whyte Ave </a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">10558 Whyte Ave - 82 Avenue ' +
            "<br>Edmonton, Alberta, Canada" +
            '</p>' +
            '<br>' +
            '<a href="tel:7804359363">(780) 435-9363</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Whyte Ave '
});





push({

    position: LatLng(40.7179302, -73.9590363),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/brooklyn/Williamsburg">Williamsburg</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">129 North 6th Street' +
            "<br>brooklyn, New York, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:7183874392">(718) 387-4392</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Williamsburg'
});





push({

    position: LatLng(49.1146628, -122.6741906),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/ca/langley/willowbrook-seasonal-store">Willowbrook Seasonal Store</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">19705 Fraser Highway' + '<br/>Store No. 426B' +
            "<br>Langley, British Columbia, Canada" +
            '</p>' +
            '<br>' +
            '<a href="tel:0"></a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Willowbrook Seasonal Store'
});









push({

    position: LatLng(28.598968, -81.350736),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/winter-park/winter-park">Winter Park </a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">200 North Park Avenue' +
            "<br>Winter Park, Florida, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:4076280033">(407) 628-0033</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Winter Park '
});





push({

    position: LatLng(41.316429, -74.126347),
    
    type: 'outlet',
    icon: '/etc/designs/shop/clientlibs/img/icons/outlets-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/woodbury/woodburycommon">Woodbury Common Outlet</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">435 Dune Road ' +
            "<br>Woodbury, New York, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:8459285470">(845) 928-5470</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Woodbury Common Outlet'
});





push({

    position: LatLng(42.045436, -88.036857),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/schaumburg/woodfieldmall">Woodfield Mall</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">L306 - 5 Woodfield Mall' +
            "<br>Schaumburg, Illinois, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:8479950246">(847) 995-0246</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Woodfield Mall'
});





push({

    position: LatLng(42.0381377, -71.35263909999999),
    
    type: 'outlet',
    icon: '/etc/designs/shop/clientlibs/img/icons/outlets-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/Massachusetts/Wrentham">Wrentham Village Premium Outlet</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">1 Outlet Boulevard' + '<br/>Suite 185' +
            "<br>Wrentham, Massachusetts, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:5083843732">(508) 384-3732</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Wrentham Village Premium Outlet'
});





push({

    position: LatLng(24.479833, 118.089425),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/cn/fujian/xiamen-mixc">Xiamen MixC</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">L265 - No.99 East hubin road' +
            "<br>Xiamen, Fujian, Mainland China" +
            '</p>' +
            '<br>' +
            '<a href="tel:0"></a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Xiamen MixC'
});





push({

    position: LatLng(34.20593, 108.96316),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/cn/xi-an/xi-an-joy-city">Xian Joy City</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">69 Ci’en West Road' +
            "<br>Xi'an, Shaanxi, Mainland China" +
            '</p>' +
            '<br>' +
            '<a href="tel:0"></a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Xian Joy City'
});





push({

    position: LatLng(31.4507404, 121.1032264),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/cn/shanghai/xintiandi">Xintiandi</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">No. 1, 123 Nong, Xingye Road, Huangpu District' + '<br/>Units 01a and 02' +
            "<br>Shanghai, Shanghai, Mainland China" +
            '</p>' +
            '<br>' +
            '<a href="tel:0"></a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Xintiandi'
});





push({

    position: LatLng(43.7135045, -79.40000930000001),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/ca/toronto/yonge">Yonge St.</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">2558 Yonge Street' +
            "<br>Toronto, Ontario, Canada" +
            '</p>' +
            '<br>' +
            '<a href="tel:4164871390">(416) 487-1390</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Yonge St.'
});





push({

    position: LatLng(43.7275369, -79.457692),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/ca/toronto/yorkdale">Yorkdale</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">3401 Dufferin Street' +
            "<br>Toronto, Ontario, Canada" +
            '</p>' +
            '<br>' +
            '<a href="tel:4162563883">(416) 256-3883</a>' +
            '<h2>can\'t get to us? Call us to purchase your next favourite piece over the phone. Shipping is on us!</h2>' +
            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Yorkdale'
});





push({

    position: LatLng(47.3718276, 8.543898100000002),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/ch/zurich/Zurich-store">Zurich store</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">12 Marktgasse' +
            "<br>Zurich, North, Switzerland" +
            '</p>' +
            '<br>' +
            '<a href="tel:432437881">043 243 78 81</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'Zurich store'
});





push({

    position: LatLng(42.1785417, -70.9090404),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/hingham/ivivva-derby-street">ivivva Derby Street</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">#107 Building 1 92 Derby Street' +
            "<br>Hingham, Massachusetts, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:7817401404">(781) 740-1404</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'ivivva Derby Street'
});





push({

    position: LatLng(44.853279, -93.241142),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/bloomington/ivivva-mall-of-america">ivivva Mall of America</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">290 South Avenue' +
            "<br>Bloomington, Minnesota, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:9528541614">(952) 854-1614</a>' +
            '<h2>inspired by active girls, created by lululemon.</h2>' +
            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'ivivva Mall of America'
});





push({

    position: LatLng(32.8685017, -96.7735125),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/dallas/ivivva-northpark-center">ivivva Northpark Center</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">Unit #2R1-2244  8687 North Central Expressway' +
            "<br>Dallas, Texas, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:2143634454">(214) 363-4454</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'ivivva Northpark Center'
});





push({

    position: LatLng(42.5600991, -83.1834191),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/us/troy/ivivva-somerset-collection">ivivva Somerset Collection</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">K244 – 2801 West Big Beaver Road' +
            "<br>Troy, Michigan, United States" +
            '</p>' +
            '<br>' +
            '<a href="tel:2484580960">(248) 458-0960</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'ivivva Somerset Collection'
});





push({

    position: LatLng(43.8256383, -79.5382147),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/ca/vaughan/ivivva-vaughan-mills">ivivva Vaughan Mills</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">1 Bass Pro Mills Drive' +
            "<br>Vaughan, Ontario, Canada" +
            '</p>' +
            '<br>' +
            '<a href="tel:9057384944">(905) 738-4944</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'ivivva Vaughan Mills'
});





push({

    position: LatLng(49.268358, -123.153374),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/ca/vancouver/ivivva-west-4th-ave">ivivva West 4th</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">2123 West 4th Avenue' +
            "<br>Vancouver, British Columbia, Canada" +
            '</p>' +
            '<br>' +
            '<a href="tel:6047326188">(604) 732-6188</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'ivivva West 4th'
});





push({

    position: LatLng(53.5224395, -113.6218728),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/ca/edmonton/ivivva-west-edmonton-mall">ivivva West Edmonton Mall</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">1169 - 8882 170 Street Northwest' +
            "<br>Edmonton, Alberta, Canada" +
            '</p>' +
            '<br>' +
            '<a href="tel:7804863633">(780) 486-3633</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'ivivva West Edmonton Mall'
});





push({

    position: LatLng(46.8029714, -71.2250555),
    
    type: 'showroom',
    icon: '/etc/designs/shop/clientlibs/img/icons/showrooms-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/ca/quebec/quebeccityshowroom">le showroom de Quebec</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">1168 Avenue Cartier' +
            "<br>Quebec, Quebec, Canada" +
            '</p>' +
            '<br>' +
            '<a href="tel:4185221636">(418) 522-1636</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'le showroom de Quebec'
});





push({

    position: LatLng(49.2831378, -123.1030768),
    
    type: 'store',
    icon: '/etc/designs/shop/clientlibs/img/icons/stores-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/ca/vancouver/lululemonlab">lululemon lab</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">50 Powell Street' +
            "<br>Vancouver, British Columbia, Canada" +
            '</p>' +
            '<br>' +
            '<a href="tel:6046898013">(604) 689-8013</a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'lululemon lab'
});





push({

    position: LatLng(34.6757702, 135.4982882),
    
    type: 'showroom',
    icon: '/etc/designs/shop/clientlibs/img/icons/showrooms-location.png',
    infobox: infobox({
        content: '<div class="lulu-infobox">' +
            '<h1><a href="/stores/jp/osaka/shinsaibashi-showroom">shinsaibashi showroom</a></h1>' +
            '<h2>contact</h2>' +
            '<p class="address">4-12-17 Minami Senba, Chuo-ku, Osaka-shi, Osaka ' +
            "<br>Osaka, Japan" +
            '</p>' +
            '<br>' +
            '<a href="tel:0"></a>' +

            '<img src="/etc/designs/shop/clientlibs/global/img/icons/down-arrow.png" class="marker-pointer" />' +
            '<div class="clear"></div>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 300,
        pixelOffset: foo(-150, -10),
        zIndex: 10000,
        boxStyle: {
            opacity: 1,
            width: "300px"
        },
        closeBoxMargin: "20px 15px 2px 2px",
        closeBoxURL: "/etc/designs/shop/clientlibs/img/icons/infobox-close.png",
        infoBoxClearance: foo(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false,
        alignBottom: true
    }),
    title: 'shinsaibashi showroom'
});


console.log(markers);


const connect = require('@databases/pg');

const sql = require('@databases/sql');

const db = connect(process.env.pg_connection);

markers.forEach(marker => {
    db.query(sql`
        
    INSERT INTO dev.lulu (store, type, address, geom)
    VALUES (
        ${marker.store},
        ${marker.type},
        ${marker.address},
        ST_SetSRID(ST_Point(${parseFloat(marker.latlng[0])}, ${parseFloat(marker.latlng[1])}),4326)
    )
    
    `)
    .then(
        results => console.log(results),
        err => console.error(err)
    );
})