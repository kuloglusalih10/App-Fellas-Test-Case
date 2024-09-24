let airlines_data = [
    ['AUTOSTRAD','Autostradale'],
    ['EASTMIDLAN','East Midlands Trains'],
    ['FLIBCO','Flibco'],
    ['SR','Sundair'],
    ['LONGTEST','Long iata code test'],
    ['SAGALES','Sagales'],
    ['EUROLINES','Eurolines'],
    ['ISILINES','Isilines'],
    ['NOMAGO','Nomago'],
    ['WR','WestJet Encore'],
    ['CY','Cyprus Airways'],
    ['FLIXTRAIN','Flixtrain'],
    ['P2','Air Kenya'],
    ['JY','interCaribbean Airways'],
    ['UU','Air Austral'],
    ['SZS','Scandinavian Airlines Ireland'],
    ['GREYHOUND','Greyhound'],
    ['QV','Lao Airlines'],
    ['2N','NextJet'],
    ['AH','Air Algerie'],
    ['TQ','Tandem Aero'],
    ['RM','Armenia Aircompany'],
    ['NATEXPRESS','National Express'],
    ['A0','Avianca Argentina'],
    ['JG','JetGo'],
    ['M8','SkyJet Airlines'],
    ['M0','Aero Mongolia'],
    ['5T','Canadian North'],
    ['6D','Pelita'],
    ['GU','Avianca Guatemala'],
    ['XW','NokScoot'],
    ['UA','United Airlines'],
    ['X4','Alaska Seaplanes X4'],
    ['ND','FMI Air'],
    ['V0','Conviasa'],
    ['XX','Greenfly'],
    ['D7','AirAsia X'],
    ['XJ','Thai AirAsia X'],
    ['2P','PAL Express'],
    ['BUTAAIR','Buta Airways'],
    ['CU','Cubana de Aviación'],
    ['VV','Viva Air'],
    ['PQ','SkyUp Airlines'],
    ['W3','Arik Air'],
    ['PE','People Viennaline PE'],
    ['YD','Gomelavia'],
    ['GJ','Loong Air'],
    ['FLIXBUS','Flixbus'],
    ['CHIHUAHUEN','Transportes Chihuahuenses'],
    ['SNCB','SNCB'],
    ['99','Ciao Air'],
    ['S9','Starbow Airlines'],
    ['D4','Aerodart'],
    ['8G','Mid Africa Aviation'],
    ['8B','TransNusa'],
    ['AD','Azul'],
    ['VT','Air Tahiti'],
    ['KS','Peninsula Airways'],
    ['KB','Druk Air'],
    ['SX','SkyWork Airlines'],
    ['OV','SalamAir'],
    ['JI','Meraj Air'],
    ['3I','Air Comet Chile'],
    ['QA','Click (Mexicana)'],
    ['9J','Dana Airlines Limited'],
    ['A2','Astra Airlines'],
    ['SF','Tassili Airlines'],
    ['ICBUS','IC Bus'],
    ['DEINBUS','DeinBus'],
    ['ORESUNDST','Oresundstag'],
    ['LEBUSDIR','Le Bus Direct'],
    ['XU','African Express'],
    ['CD','Corendon Dutch Airlines B.V.'],
    ['J5','Alaska Seaplane Service'],
    ['LQ','Lanmei Airlines'],
    ['SV','Saudi Arabian Airlines'],
    ['LH','Lufthansa'],
    ['LA','LATAM Airlines'],
    ['QF','Qantas'],
    ['0B','Blue Air'],
    ['MV','Air Mediterranean'],
    ['DI','Norwegian Air UK'],
    ['RT','JSC UVT Aero'],
    ['F3','Flyadeal'],
    ['TRANSFERO','Transfero'],
    ['Y2','AirCentury'],
    ['9P','Air Arabia Jordan'],
    ['4C','LATAM Colombia'],
    ['A6','Air Travel'],
    ['B4','ZanAir'],
    ['T0','Avianca Peru'],
    ['L7','Lugansk Airlines'],
    ['YW','Air Nostrum'],
    ['Y7','NordStar Airlines'],
    ['NT','Binter Canarias'],
    ['3U','Sichuan Airlines'],
    ['11','TUIfly (X3)'],
    ['00','Anadolujet'],
    ['REGIOJETT','Regiojet Train'],
    ['LT','LongJiang Airlines'],
    ['XM','Alitalia Express'],
    ['4D','Air Sinai'],
    ['FK','Africa West'],
    ['2U','Air Guinee Express'],
    ['A7','Calafia Airlines'],
    ['GG','Air Guyane'],
    ['FL','AirTran Airways'],
    ['TE','FlyLal'],
    ['SE','XL Airways France'],
    ['WF','Widerøe'],
    ['S1','Serbian Airlines'],
    ['II','LSM International '],
    ['HN','Hankook Airline'],
    ['NP','Nile Air'],
    ['M1','Maryland Air'],
    ['M2','MHS Aviation GmbH'],
    ['IRCITYLINK','Irish Citylink'],
    ['VRG','Voyage Air'],
    ['WI','White Airways'],
    ['NY','Air Iceland Connect'],
    ['4Z','Airlink (SAA)'],
    ['PT','Red Jet Andes'],
    ['ZE','Eastar Jet'],
    ['MI','SilkAir'],
    ['QR','Qatar Airways'],
    ['7F','First Air'],
    ['HG','Niki'],
    ['RJ','Royal Jordanian'],
    ['NN','VIM Airlines'],
    ['XQ','SunExpress'],
    ['9U','Air Moldova'],
    ['PM','Canary Fly'],
    ['GK','Jetstar Japan'],
    ['IN','Nam Air'],
    ['OO','SkyWest'],
    ['DJ','AirAsia Japan'],
    ['OA','Olympic Air'],
    ['ZM','Air Manas'],
    ['H1','Hahn Air'],
    ['LS','Jet2'],
    ['PP','Air Indus'],
    ['I8','Izhavia'],
    ['W8','Cargojet Airways'],
    ['ZT','Titan Airways'],
    ['4T','Belair'],
    ['QH','Bamboo Airways'],
    ['I0','LEVEL operated by Iberia'],
    ['KO','Komiaviatrans'],
    ['LEOEXT','LEOEXPRESS Train'],
    ['PJ','Air Saint Pierre'],
    ['2I','Star Peru'],
    ['IQ','Qazaq Air'],
    ['VL','Med-View Airline'],
    ['LEOEXB','LEOEXPRESS Bus'],
    ['KJ','British Mediterranean Airways'],
    ['BN','Horizon Airlines'],
    ['LG','Luxair'],
    ['O7','Orenburzhye Airline'],
    ['QT','TAMPA'],
    ['N7','Nordic Regional Airlines'],
    ['FIUMICINO','Fiumicino express'],
    ['3J','Jubba Airways'],
    ['MARINO','Marino Bus'],
    ['U1','Aviabus'],
    ['0X','Copenhagen Express'],
    ['3E','Air Choice One'],
    ['MK','Air Mauritius'],
    ['AP','AlbaStar'],
    ['TERAVSN','Terravision'],
    ['MU','China Eastern Airlines'],
    ['EXPRTRANS','Ekspres transfer'],
    ['7E','Sylt Air'],
    ['CT','Alitalia Cityliner'],
    ['OF','Overland Airways'],
    ['WZ','Red Wings'],
    ['LI','Leeward Islands Air Transport'],
    ['ZH','Shenzhen Airlines'],
    ['8Q','Onur Air'],
    ['NE','Nesma Air'],
    ['UI','Auric Air'],
    ['PK','Pakistan International Airlines'],
    ['EI','Aer Lingus'],
    ['LP','LATAM Peru'],
    ['U8','TUS Airways'],
    ['TC','Air Tanzania'],
    ['E5','Air Arabia Egypt'],
    ['WO','Swoop'],
    ['RC','Atlantic Airways'],
    ['A5','HOP!'],
    ['B9','Air Bangladesh'],
    ['5Y','Atlas Air'],
    ['6G','Air Wales'],
    ['6K','Asian Spirit'],
    ['R7','Aserca Airlines'],
    ['VU','Air Ivoire'],
    ['UM','Air Zimbabwe'],
    ['NM','Air Madrid'],
    ['FJ','Fiji Airways'],
    ['JS','Air Koryo'],
    ['MD','Air Madagascar'],
    ['8D','Astair'],
    ['OT','Aeropelican Air Services'],
    ['RE','Stobart Air'],
    ['5L','Aerosur'],
    ['Z3','Avient Aviation'],
    ['EC','Avialeasing Aviation Company'],
    ['ZL','Regional Express'],
    ['J8','Berjaya Air'],
    ['IO','IrAero'],
    ['AS','Alaska Airlines'],
    ['7G','Star Flyer'],
    ['2L','Helvetic Airways'],
    ['CITYLINK','Citylink'],
    ['FB','Bulgaria Air'],
    ['OI','Orchid Airlines'],
    ['APPENINO','Appenino shuttle '],
    ['EO','Pegas Fly'],
    ['LV','Level'],
    ['QI','Cimber Air'],
    ['AC','Air Canada'],
    ['LU','LAN Express'],
    ['SY','Sun Country Airlines'],
    ['WX','CityJet'],
    ['BD','Cambodia Bayon Airlines'],
    ['MS','Egyptair'],
    ['I5','AirAsia India'],
    ['PD','Porter Airlines'],
    ['8N','Regional Air Services'],
    ['PS','Ukraine International Airlines'],
    ['FV','Rossiya-Russian Airlines'],
    ['KR','Cambodia Airways'],
    ['W9','Wizz Air UK'],
    ['2K','Avianca Ecuador'],
    ['3O','Air Arabia Maroc'],
    ['LR','Avianca Costa Rica'],
    ['JJ','LATAM Brasil'],
    ['OPENSKIES','Openskies'],
    ['NF','Air Vanuatu'],
    ['GS','Tianjin Airlines'],
    ['EN','Air Dolomiti'],
    ['AJ','Aero Contractors'],
    ['BS','British International Helicopters'],
    ['CH','Bemidji Airlines'],
    ['8E','Bering Air'],
    ['4R','Renfe'],
    ['FE','Far Eastern Air Transport'],
    ['DQ','Coastal Air'],
    ['6A','Consorcio Aviaxsa'],
    ['SS','Corsair International'],
    ['YK','Avia Traffic Airline'],
    ['DO','Dominicana de Aviaci'],
    ['E3','Domodedovo Airlines'],
    ['H7','Eagle Air'],
    ['T3','Eastern Airways'],
    ['UZ','El-Buraq Air Transport'],
    ['B8','Eritrean Airlines'],
    ['EA','European Air Express'],
    ['GF','Gulf Air Bahrain'],
    ['TY','Air Caledonie'],
    ['L8','Line Blue'],
    ['LEOEXM','LEOEXPRESS Minibus'],
    ['5U','Transportes Aéreos Guatemaltecos'],
    ['P7','Small Planet Airline'],
    ['8I','MyAir'],
    ['XK','Air Corsica'],
    ['FW','Ibex Airlines'],
    ['I7','Int Air Iles'],
    ['LO','LOT Polish Airlines'],
    ['B2','Belavia Belarusian Airlines'],
    ['2T','TruJet'],
    ['TS','Air Transat'],
    ['OU','Croatia Airlines'],
    ['VX','Virgin America'],
    ['D2','Severstal Air Company'],
    ['KF','Air Belgium'],
    ['JN','JOON'],
    ['EH','ANA Wings'],
    ['XT','Indonesia AirAsia X'],
    ['TA','Avianca El Salvador'],
    ['UD','Hex Air'],
    ['RZ','Sansa Air'],
    ['4G','Gazpromavia'],
    ['G0','Ghana International Airlines'],
    ['IC','Indian Airlines'],
    ['D6','Interair South Africa'],
    ['KV','Kavminvodyavia'],
    ['M5','Kenmore Air'],
    ['Y9','Kish Air'],
    ['7K','Kogalymavia Air Company'],
    ['GW','Kuban Airlines'],
    ['NG','Lauda Air'],
    ['4P','Regional sky'],
    ['O2','Linear Air'],
    ['LN','Libyan Arab Airlines'],
    ['MP','Martinair'],
    ['MZ','Merpati Nusantara Airlines'],
    ['YV','Mesa Airlines'],
    ['MX','Mexicana de Aviaci'],
    ['MY','Midwest Airlines (Egypt)'],
    ['2M','Maya Island Air'],
    ['3R','Moskovia Airlines'],
    ['M9','Motor Sich'],
    ['NC','National Jet Systems'],
    ['RL','Royal Falcon'],
    ['BU','Baikotovitchestrian Airlines '],
    ['8J','Eco Jet'],
    ['LUFTHBUS','Lufthansa express bus'],
    ['PI','Polar Airlines'],
    ['9B','AccesRail'],
    ['I9','Air Italy'],
    ['ESTLOREK','EST Lorek'],
    ['MQ','Envoy Air as American Eagle'],
    ['SLOVAKLNS','Slovak Lines '],
    ['PH','Polynesian Airlines'],
    ['EY','Etihad Airways'],
    ['WY','Oman Air'],
    ['SZ','Somon Air'],
    ['OK','Czech Airlines'],
    ['A9','Georgian Airways'],
    ['8P','Pacific Coastal Airline'],
    ['AY','Finnair'],
    ['U4','Buddha Air'],
    ['RQ','Kam Air'],
    ['GZ','Air Rarotonga'],
    ['YX','Republic Airline'],
    ['G7','GoJet Airlines'],
    ['ON','Nauru Air Corporation'],
    ['QB','Qeshm Air'],
    ['V7','Volotea'],
    ['RH','Republic Express Airlines'],
    ['3P','Tiara Air'],
    ['RA','Nepal Airlines'],
    ['KE','Korean Air'],
    ['CG','PNG Air'],
    ['EJ','New England Airlines'],
    ['U7','Northern Dene Airways'],
    ['J3','Northwestern Air'],
    ['O6','Avianca Brazil'],
    ['PV','PAN Air'],
    ['PU','Plus Ultra Lineas Aereas'],
    ['LZ','belleair'],
    ['JH','Fuji Dream Airlines'],
    ['8F','STP Airways'],
    ['QQ','Alliance Airlines'],
    ['MN','Kulula'],
    ['NU','Japan Transocean Air'],
    ['EK','Emirates'],
    ['IK','Pegas Fly'],
    ['9E','Endeavor Air'],
    ['OY','Andes Líneas Aéreas'],
    ['Z2','Philippines AirAsia'],
    ['BB','Seaborne Airlines'],
    ['CX','Cathay Pacific'],
    ['CZECHRAILB','Czech Rail bus'],
    ['GM','Chair Airlines'],
    ['J4','Badr Airlines'],
    ['PZ','LATAM Paraguay'],
    ['BK','Okay Airways'],
    ['5M','Sibaviatrans'],
    ['ZS','Sama Airlines'],
    ['FT','FlyEgypt FT'],
    ['FS','Servicios de Transportes A'],
    ['SD','Sudan Airways'],
    ['RB','Syrian Arab Airlines'],
    ['S5','Shuttle America'],
    ['FQ','Thomas Cook Airlines'],
    ['GE','TransAsia Airways'],
    ['VR','TACV'],
    ['HK','Yangon Airways'],
    ['EXPRESSBUS','ExpressBus'],
    ['XZ','Congo Express'],
    ['G4','Allegiant Air'],
    ['BY','TUI Airways'],
    ['IY','Yemenia'],
    ['G6','Air Volga'],
    ['Q2','Maldivian'],
    ['KW','Carnival Air Lines'],
    ['S6','Sunrise Airways'],
    ['AX','Trans States Airlines'],
    ['3T','Turan Air'],
    ['U5','USA3000 Airlines'],
    ['UF','UM Airlines'],
    ['US','US Airways'],
    ['TV','Tibet Airlines'],
    ['2W','Welcome Air'],
    ['8O','West Coast Air'],
    ['IV','Wind Jet'],
    ['MF','Xiamen Airlines'],
    ['9Y','Air Kazakhstan'],
    ['B7','Uni Air'],
    ['H8','Latin American Wings'],
    ['47','88'],
    ['69','Royal European Airlines'],
    ['7Y','Mann Yadanarpon Airlines'],
    ['4L','Euroline'],
    ['ZF','Azur Air'],
    ['6P','Gryphon Airlines'],
    ['JR','Joy Air'],
    ['UR','Azur Air Germany'],
    ['TI','Tailwind Airlines'],
    ['5F','Fly One'],
    ['KT','VickJet'],
    ['H5','I-Fly'],
    ['G5','China Express Airlines'],
    ['D1','Domenican Airlines'],
    ['C4','LionXpress'],
    ['P8','Air Mekong'],
    ['VG','VLM Airlines'],
    ['SVENSKABUS','Svenska Buss'],
    ['V6','VIP Ecuador'],
    ['7Z','Halcyonair'],
    ['NB','Sterling Airlines'],
    ['1T','Hitit Bilgisayar Hizmetleri'],
    ['6Y','SmartLynx Airlines'],
    ['2Q','Air Cargo Carriers'],
    ['OC','Oriental Air Bridge'],
    ['TD','Atlantis European Airways'],
    ['NO','Neos Air'],
    ['4Q','Safi Airlines'],
    ['YM','Montenegro Airlines'],
    ['7P','AirPanama'],
    ['DT','TAAG Angola Airlines'],
    ['A4','Azimuth'],
    ['VK','LEVEL operated by ANISEC'],
    ['7Q','Elite Airways'],
    ['DZ','Donghai Airlines'],
    ['YQ','TAR Aerolineas'],
    ['6J','Solaseed Air'],
    ['E4','Elysian Airlines'],
    ['D3','Daallo Airlines'],
    ['IA','Iraqi Airways'],
    ['XO','LTE International Airways'],
    ['CE','Chalair'],
    ['7L','Sun Dor'],
    ['JK','Spanair'],
    ['S3','SBA Airlines'],
    ['UH','AtlasGlobal Ukraine'],
    ['VI','Volga-Dnepr Airlines'],
    ['GY','Colorful Guizhou Airlines'],
    ['5P','Small Planet Airlines'],
    ['M4','Mistral Air'],
    ['R8','AirRussia'],
    ['12','12 North'],
    ['QD','JC International Airlines'],
    ['QM','Air Malawi'],
    ['XV','BVI Airways'],
    ['L6','Mauritania Airlines International'],
    ['DX','DAT Danish Air Transport'],
    ['HC','Air Senegal'],
    ['V9','Star1 Airlines'],
    ['STANSTDEXP','Stansted Express'],
    ['1B','Abacus International'],
    ['HT','Hellenic Imperial Airways'],
    ['1I','NetJets'],
    ['9Q','PB Air'],
    ['SB','Aircalin'],
    ['YO','TransHolding System'],
    ['MB','MNG Airlines'],
    ['3F','Fly Colombia ( Interliging Flights )'],
    ['ZN','Zenith International Airline'],
    ['R5','Jordan Aviation'],
    ['NX','Air Macau'],
    ['4N','Air North'],
    ['QJ','Jet Airways'],
    ['EV','ExpressJet'],
    ['3G','Atlant-Soyuz Airlines'],
    ['2F','Frontier Flying Service'],
    ['VO','FlyVLM'],
    ['2B','AlbaWings'],
    ['3B','Binter Cabo Verde'],
    ['FM','Shanghai Airlines'],
    ['WJ','JetSMART Argentina'],
    ['AU','Austral Lineas Aereas'],
    ['H6','Bulgarian Air Charter'],
    ['HF','Air Cote Ivoire'],
    ['ZA','Sky Angkor Airlines'],
    ['JF','Jetairfly'],
    ['WA','KLM Cityhopper'],
    ['GO','Kuzu Airlines Cargo'],
    ['L3','LTU Austria'],
    ['HE','Luftfahrtgesellschaft Walter'],
    ['DM','Maersk'],
    ['NW','Northwest Airlines'],
    ['O8','Siam Air'],
    ['QO','Origin Pacific Airways'],
    ['NI','Portugalia'],
    ['RD','Ryan International Airlines'],
    ['YS','Régional'],
    ['AL','Skywalk Airlines'],
    ['9S','Spring Airlines'],
    ['9T','Transwest Air'],
    ['6B','TUIfly Nordic'],
    ['ZG','Grozny Avia'],
    ['8Z','Wizz Air Hungary'],
    ['CV','Air Chathams'],
    ['SP','SATA Air Acores'],
    ['LF','Contour Airlines'],
    ['WQ','Swiftair'],
    ['78','Southjet cargo'],
    ['YL','Yamal Airlines'],
    ['K1','Kostromskie avialinii'],
    ['PO','Polar Airlines'],
    ['JB','Helijet'],
    ['L4','LASA Argentina'],
    ['ZX','Japan Regio'],
    ['CQ','Coastal Aviation'],
    ['BQ','Buquebus Líneas Aéreas'],
    ['VIARAILCAD','VIA Rail Canada'],
    ['HI','Papillon Grand Canyon Helicopters'],
    ['SJRAIL','Swedish Railways'],
    ['YR','SENIC AIRLINES'],
    ['M7','MasAir'],
    ['AN','Ansett Australia'],
    ['MR','Hunnu Air'],
    ['YY','Virginwings'],
    ['4K','Askari Aviation'],
    ['QC','Camair-co'],
    ['OG','AirOnix'],
    ['8U','Afriqiyah Airways'],
    ['FG','Ariana Afghan Airlines'],
    ['GV','Grant Aviation'],
    ['BH','Hawkair'],
    ['8H','Heli France'],
    ['T4','Hellas Jet'],
    ['CL','Lufthansa CityLine'],
    ['GH','Globus'],
    ['4M','LATAM Argentina'],
    ['WU','Jetways Airlines Limited'],
    ['FU','Fuzhou Airlines'],
    ['HW','Hello'],
    ['L5','Atlas Atlantique Airlines'],
    ['OM','MIAT Mongolian Airlines'],
    ['W5','Mahan Air'],
    ['MA','Malév'],
    ['N5','Skagway Air Service'],
    ['VP','VASP'],
    ['4H','United Airways'],
    ['SO','Salsa Haiti'],
    ['ZC','Korongo Airlines'],
    ['WH','China Northwest Airlines (WH)'],
    ['5Q','BQB Lineas Aereas'],
    ['KG','Royal Airways'],
    ['YH','Yangon Airways Ltd.'],
    ['Q3','Anguilla Air Services'],
    ['CB','CCML Airlines'],
    ['GB','BRAZIL AIR'],
    ['N1','N1'],
    ['G1','Indya Airline Group'],
    ['M3','Air Norway'],
    ['OP','PassionAir'],
    ['QU','Azur Air Ukraine'],
    ['24','Euro Jet'],
    ['EZ','Evergreen International Airlines'],
    ['SUNLINES','Sun lines'],
    ['ZY','Ada Air'],
    ['C1','CanXpress'],
    ['EM','Empire Airlines'],
    ['C5','CommutAir'],
    ['C3','Contact Air'],
    ['CS','Continental Micronesia'],
    ['0D','Darwin Airline'],
    ['DK','Eastland Air'],
    ['XE','ExpressJet'],
    ['RF','Florida West International Airways'],
    ['TU','Tunisair'],
    ['T7','Twin Jet'],
    ['VA','Virgin Australia Airlines'],
    ['W1','World Experience Airline'],
    ['ZQ','Locair'],
    ['I6','Air indus'],
    ['OQ','Chongqing Airlines'],
    ['1C','OneChina'],
    ['PA','Airblue'],
    ['RG','Rotana Jet'],
    ['TJ','Tradewind Aviation'],
    ['DN','Norwegian Air Argentina'],
    ['NS','Hebei Airlines'],
    ['VF','Valuair'],
    ['HM','Air Seychelles'],
    ['KN','China United'],
    ['W2','Flexflight'],
    ['NA','Nesma Air'],
    ['9I','Alliance Air'],
    ['TH','TransBrasil Airlines'],
    ['Y1','Yellowstone Club Private Shuttle'],
    ['F1','Fly Brasil'],
    ['1F','CB Airways UK ( Interliging Flights )'],
    ['T6','Airswift Transport'],
    ['N0','Norte Lineas Aereas'],
    ['H9','Himalaya Airlines'],
    ['6U','Air Cargo Germany'],
    ['XB','NEXT Brasil'],
    ['GN','GNB Linhas Aereas'],
    ['E1','Usa Sky Cargo'],
    ['QY','Red Jet Canada'],
    ['4X','Red Jet Mexico'],
    ['Y8','Marusya Airways'],
    ['FH','Freebird Airlines'],
    ['2D','Aero VIP (2D)'],
    ['__','FakeAirline'],
    ['HQ','Thomas Cook Belgium'],
    ['4B','BoutiqueAir'],
    ['1X','Branson Air Express'],
    ['E9','Evelop Airlines'],
    ['DA','Aerolinea de Antioquia'],
    ['MEMENTO','MementoBUS'],
    ['2O','Island Air Kodiak'],
    ['BG','Biman Bangladesh Airlines'],
    ['WV','Aero VIP'],
    ['TX','Air Caraïbes'],
    ['ANDBUS','Andbus'],
    ['VC','Via Air'],
    ['20','Air Salone'],
    ['EJR','EJR – East Japan Rail Company'],
    ['IR','Iran Air'],
    ['ZZ','Zz'],
    ['5E','SGA Airlines'],
    ['VIEAPLINES','Vienna Airport Lines'],
    ['JM','Jambojet'],
    ['REGIOJET','RegioJet'],
    ['IZ','Arkia'],
    ['HD','Air Do'],
    ['CI','China Airlines'],
    ['5H','Fly540'],
    ['QG','Citilink'],
    ['K6','Cambodia Angkor Air'],
    ['LB','Air Costa'],
    ['Q6','Volaris Costa Rica'],
    ['F8','Flair Airlines'],
    ['AE','Mandarin Airlines'],
    ['DG','CebGo'],
    ['OE','LaudaMotion'],
    ['XG','SunExpress'],
    ['IW','Wings Air'],
    ['CZ','China Southern Airlines'],
    ['GOOPTI','GoOpti'],
    ['LIZ','Air Liaison'],
    ['3C','Air Chathams Limited 3C'],
    ['CAT','CAT- City Airport Train'],
    ['OXFORDBUS','Oxford Bus Company'],
    ['LPA','Air Leap'],
    ['K8','Kan Air'],
    ['O1','Orbit Airlines Azerbaijan'],
    ['EE','RegionalJet'],
    ['YE','Yan Air'],
    ['AA','American Airlines'],
    ['9K','Cape Air'],
    ['RO','Tarom'],
    ['A1','Atifly'],
    ['9X','Southern Airways Express'],
    ['Z9','Bek Air'],
    ['Z8','Amaszonas'],
    ['PKSZCZECIN','PKS Szczencin'],
    ['TROPOCEAN','Tropic Ocean Airways'],
    ['ENZ','Jota Aviation'],
    ['TN','Air Tahiti Nui'],
    ['REGIOJETB','Regiojet Bus'],
    ['76','Southjet'],
    ['77','Southjet connect'],
    ['AO','Avianova (Russia)'],
    ['P6','Pascan Aviation'],
    ['CC','CM Airlines'],
    ['KM','Air Malta'],
    ['GR','Aurigny Air Services'],
    ['RK','Air Afrique'],
    ['QL','Laser Air'],
    ['CJ','BA CityFlyer'],
    ['9L','Colgan Air'],
    ['OH','Comair'],
    ['JE','Mango'],
    ['TG','Thai Airways International'],
    ['VN','Vietnam Airlines'],
    ['OB','Boliviana de Aviación'],
    ['OS','Austrian Airlines'],
    ['C7','Cinnamon Air'],
    ['VB','VivaAerobus'],
    ['UX','Air Europa'],
    ['FR','Ryanair'],
    ['SW','Air Namibia'],
    ['WW','WOW air'],
    ['SQS','Susi Air'],
    ['QX','Horizon Air'],
    ['P0','Proflight Zambia'],
    ['SA','South African Airways'],
    ['YU','EuroAtlantic Airways'],
    ['NJ','Nordic Global Airlines'],
    ['9M','Central Mountain Air'],
    ['NETTBUSS','Nettbuss'],
    ['5D','Aerolitoral'],
    ['OLLEX','Ollex (express)'],
    ['EF','EasyFly'],
    ['KI','KrasAvia'],
    ['XL','LATAM Ecuador'],
    ['V3','Carpatair'],
    ['R4','Rossiya'],
    ['6T','Air Mandalay'],
    ['ES','Estelar Latinoamerica'],
    ['7N','Pawa Dominicana'],
    ['U6','Ural Airlines'],
    ['2C','SNCF'],
    ['WK','Edelweiss Air'],
    ['ATV','Avanti Air'],
    ['2J','Air Burkina'],
    ['X5','Air Europa express'],
    ['WN','Southwest Airlines'],
    ['CITYBUSEXP','CityBusExpress'],
    ['DOMO','Domo Swiss Express'],
    ['WAGNERTRNS','Wagner Transport'],
    ['MAROZZI','Marozzi'],
    ['NK','Spirit Airlines'],
    ['A3','Aegean'],
    ['SM','Air Cairo'],
    ['6S','SaudiGulf Airlines'],
    ['KY','Kunming Airlines'],
    ['P5','Wingo airlines'],
    ['RRV','Mombasa Air Safari'],
    ['RY','Air Jiangxi'],
    ['Z7','Amaszonas Uruguay'],
    ['OW','Skyward Express Limited'],
    ['GLOBTOUR','Globtour'],
    ['GOBUS','Gobus'],
    ['GALICJAEX','Galicja Express'],
    ['BUS4YOU','Bus4You'],
    ['ARRIVA','Arriva'],
    ['BUSPLANA','Busplana'],
    ['SKANETRAF','Skanetrafiken'],
    ['NSB','NSB'],
    ['VASTTRAF','Vasttrafik'],
    ['H3','Harbour Air (Priv)'],
    ['LTKRONOBUS','LT Kronoberg'],
    ['SBK','Blue Sky Aviation'],
    ['GCS','Skyway CR'],
    ['ULENDO','Fly Ulendo'],
    ['GOVERNORS','Governors Aviation'],
    ['BZ','Blue Bird Airways'],
    ['F4','Air Flamenco'],
    ['STEWISLAND','Stewart Island Flights'],
    ['RLY','Air Loyaute'],
    ['DVR','Divi Divi Air'],
    ['TGVLYRIA','TGV Lyria'],
    ['THELLO','Thello'],
    ['GRUMAIR','Grumeti Air'],
    ['THALYS','Thalys'],
    ['O4','Orange2Fly'],
    ['SKYPASADA','Sky Pasada'],
    ['NSI','NS'],
    ['RZD','Russian Railways '],
    ['AMTRAKT','Amtrak train '],
    ['BP','Air Botswana'],
    ['BI','Royal Brunei Airlines'],
    ['BELARURAIL','Belarusian Railway'],
    ['GRANDEXP','Grand Express'],
    ['COMBOIOS','Comboios de Portugal'],
    ['MAV','MAV'],
    ['SBB','SBB'],
    ['V8','ATRAN Cargo Airlines'],
    ['CW','Air Marshall Islands'],
    ['AEH',' Aero4M'],
    ['EILAT','Eilat Shuttle'],
    ['ZJ','Zambezi Airlines (ZMA)'],
    ['GEORGIBUS','Georgian Bus'],
    ['NAVETTE','Navette de Vatry'],
    ['INTERGLOB','Follow me! Interglobus'],
    ['MICCOLIS','Miccolis'],
    ['CILENTO','Cilento'],
    ['GP','APG Airlines'],
    ['LTKRONOTRN','LT Kronoberg'],
    ['S7','S7 Airlines'],
    ['MW','Mokulele Flight Service'],
    ['IG','Air Italy'],
    ['FLYTRISTAR','Fly Tristar Services'],
    ['6F','Primera Air Nordic'],
    ['ZP','Amaszonas del Paraguay S.A. Lineas Aereas'],
    ['EMETEBE','Emetebe Airlines'],
    ['ASSALAAM','As Salaam Air'],
    ['K5','Silverstone Air'],
    ['Y6','AB Aviation'],
    ['UNIAIR','Unity Air'],
    ['EUROSTAR','Eurostar'],
    ['FLYSAFARI','Fly Safari Airlink'],
    ['RHONEXP','Rhônexpress'],
    ['RV','Caspian Airlines'],
    ['C0','Centralwings'],
    ['Y5','Golden Myanmar Airlines'],
    ['YT','Yeti Airways'],
    ['SMSFLUG','SMS Flughafen'],
    ['MINIBUD','Minibud Ltd.'],
    ['FLZ','Flightlink'],
    ['7D','Madagasikara Airways'],
    ['GRENADINE','Grenadine Airways'],
    ['AEROBUSLIS','Aerobus Lisbon'],
    ['CFLB','CFL'],
    ['MEGABUS','Megabus'],
    ['GETBUS','Get Bus'],
    ['SITBUS','Sit Bus Shuttle'],
    ['9H','Air Changan'],
    ['WT','Wasaya Airways'],
    ['B3','Bhutan Airlines'],
    ['AMTRAKB','Amtrak bus'],
    ['100RUMOS','100Rumos'],
    ['HOOSIER','Hoosier ride'],
    ['DSB','DSB'],
    ['GDE','Great Dane Airlines'],
    ['QUICKLLAMA','QuickLlama'],
    ['QN','Skytrans'],
    ['SALTLAKEEX','Salt Lake Express'],
    ['ADIRONDACK','Adirondack Trailways'],
    ['U3','Avies'],
    ['IS','Fly Ais Airlines'],
    ['J2','Azerbaijan Airlines'],
    ['FI','Icelandair'],
    ['FP','Pelican Airlines'],
    ['A8','Aerolink Uganda'],
    ['CRAVIATION','CR Aviation'],
    ['XLL','Air Excel Limited'],
    ['IF','Fly Baghdad Airlines'],
    ['ARPTSUPERS','Airport Supersaver'],
    ['SC','Shandong Airlines'],
    ['R3','Yakutia Airlines'],
    ['PRESTIA','Prestia e Comande'],
    ['BEAUVAIS','Beauvaisbus'],
    ['FLYBUS','Flybus Iceland'],
    ['AIRBEXP','Airport Bus Express'],
    ['CFLT','CFL'],
    ['R6','RACSA'],
    ['RW','Republic Airlines'],
    ['JZ','Skyways Express'],
    ['T2','Thai Air Cargo'],
    ['C2','CanXplorer'],
    ['VIRGINIABR','Virginia Breeze'],
    ['NYCAIRPORT','NYC Airporter'],
    ['DF','Michael Airlines'],
    ['Q5','40-Mile Air'],
    ['NQ','Air Japan'],
    ['EP','Iran Aseman Airlines'],
    ['IE','Solomon Airlines'],
    ['SH','Sharp Airlines'],
    ['PARKSOFHAM','Parks of Hamilton'],
    ['V5','Aerovías DAP'],
    ['4A','Air Kiribati'],
    ['T5','Turkmenistan Airlines'],
    ['XF','Vladivostok Air'],
    ['LC','Varig Log'],
    ['7W','Windrose Airlines'],
    ['KP','ASKY Airlines'],
    ['PKP','PKP Intercity'],
    ['EG','Ernest Airlines'],
    ['MALTATRANS','Maltatransfer'],
    ['HP','America West Airlines'],
    ['F7','Etihad Regional'],
    ['6H','Israir'],
    ['TZ','Scoot - old'],
    ['WC','Avianca Honduras'],
    ['MT','Thomas Cook Airlines'],
    ['6I','Alsie Express'],
    ['S2','Jet Konnect'],
    ['ID','Batik Air'],
    ['VZ','Thai Vietjet'],
    ['I2','Iberia Express'],
    ['HY','Uzbekistan Airways'],
    ['BMCAEROBUS','BMC Aerobus'],
    ['8V','Astral Aviation'],
    ['8T','Air Tindi'],
    ['ZW','Air Wisconsin'],
    ['GI','Itek Air'],
    ['JD','Beijing Capital Airlines'],
    ['V2','Vision Airlines'],
    ['ZV','V Air'],
    ['U9','Tatarstan Airlines'],
    ['JC','JAL Express'],
    ['UB','Myanmar National Airlines'],
    ['DS','EasyJet (DS)'],
    ['6O','Orbest'],
    ['YN','Air Creebec'],
    ['TM','LAM Mozambique Airlines'],
    ['7V','Federal Airlines'],
    ['VD','Air Libert'],
    ['JO','JALways'],
    ['E2','Eurowings Europe'],
    ['PB','Provincial Airlines'],
    ['V4','Vieques Air Link'],
    ['P1','Regional Sky'],
    ['0V','VASCO'],
    ['PX','Air Niugini'],
    ['N6','Nomad Aviation'],
    ['ZD','EWA Air'],
    ['4W','Allied Air'],
    ['VH','Viva Air'],
    ['OUIGO','Ouigo'],
    ['ZSSK','Slovak rail'],
    ['ML','Air Mediterranee'],
    ['B1','Baltic Air lines'],
    ['TO','Transavia France'],
    ['P9','Peruvian Airlines'],
    ['JA','JetSMART'],
    ['TT','Tiger Airways Australia'],
    ['6R','Alrosa'],
    ['J1','One Jet'],
    ['7I','Insel Air'],
    ['7J','Tajik Air'],
    ['AV','Avianca'],
    ['ST','Germania'],
    ['DB','Brit Air'],
    ['JU','Air Serbia'],
    ['F2','Safarilink Aviation'],
    ['UL','SriLankan Airlines'],
    ['9N','Tropic Air Limited'],
    ['PN','West Air China'],
    ['HX','Hong Kong Airlines'],
    ['J7','Afrijet Business Service'],
    ['AW','Africa World Airlines'],
    ['EL','Ellinair'],
    ['DR','Ruili Airlines'],
    ['K9','KrasAvia (old iata)'],
    ['OR','TUI Airlines Netherlands'],
    ['5C','Nature Air'],
    ['8L','Lucky air'],
    ['EB','Wamos Air'],
    ['WS','WestJet'],
    ['YC','Yamal Air'],
    ['JX','Jambojet'],
    ['5O','ASL Airlines France'],
    ['S8','SkyWise'],
    ['JEFFERSON','Jefferson Lines'],
    ['SG','Spicejet'],
    ['XY','flynas'],
    ['9C','Spring Airlines'],
    ['DV','Scat Airlines'],
    ['GT','Air Guilin'],
    ['AB','Air Berlin'],
    ['9W','Jet Airways'],
    ['MJ','Myway Airlines'],
    ['VJ','VietJet Air'],
    ['YZ','Alas Uruguay'],
    ['NL','Shaheen Air International'],
    ['FA','Fly Safair'],
    ['BM','flybmi'],
    ['PF','Primera Air'],
    ['JV','Perimeter Aviation'],
    ['3Q','Yunnan Airlines'],
    ['LJ','Jin Air'],
    ['OD','Malindo Air'],
    ['KK','AtlasGlobal'],
    ['BC','Skymark Airlines'],
    ['KQ','Kenya Airways'],
    ['KL','KLM Royal Dutch Airlines'],
    ['IX','Air India Express'],
    ['K7','Air KBZ'],
    ['ZI','Aigle Azur'],
    ['8A','Atlas Blue'],
    ['LX','Swiss International Air Lines'],
    ['9V','Avior Airlines'],
    ['G9','Air Arabia'],
    ['5Z','Cem Air'],
    ['Z6','Dniproavia'],
    ['XN','Xpressair'],
    ['CA','Air China'],
    ['N4','Nordwind Airlines'],
    ['MO','Calm Air'],
    ['X9','Fake Airline'],
    ['NZ','Air New Zealand'],
    ['VQ','Novoair'],
    ['KX','Cayman Airways'],
    ['CO','Cobalt Air'],
    ['WB','Rwandair Express'],
    ['SI','Blue Islands'],
    ['8R','Sol Líneas Aéreas'],
    ['I4','I-Fly'],
    ['YJ','Asian Wings Air'],
    ['RX','Regent Airways'],
    ['2G','Angara airlines'],
    ['7R','Rusline'],
    ['JW','Vanilla Air'],
    ['5N','Smartavia'],
    ['BX','Air Busan'],
    ['W4','LC Perú'],
    ['G3','Gol Transportes Aéreos'],
    ['DP','Pobeda'],
    ['PW','Precision Air'],
    ['JQ','Jetstar Airways'],
    ['5K','Hi Fly'],
    ['BJ','NouvelAir'],
    ['CM','Copa Airlines'],
    ['8M','Myanmar Airways'],
    ['B6','JetBlue Airways'],
    ['ME','Middle East Airlines'],
    ['OZ','Asiana Airlines'],
    ['KU','Kuwait Airways'],
    ['OJ','Fly Jamaica Airways'],
    ['3S','Air Antilles Express'],
    ['TL','Airnorth'],
    ['QK','Air Canada Jazz'],
    ['VW','Aeromar'],
    ['QW','Qingdao Airlines'],
    ['WP','Island Air'],
    ['CF','City Airline'],
    ['HO','Juneyao Airlines'],
    ['KD','Kalstar Aviation'],
    ['QS','SmartWings'],
    ['TR','Scoot'],
    ['6W','Saratov Aviation Division'],
    ['B0','Aws express'],
    ['3M','Silver Airways'],
    ['IP','Island Spirit'],
    ['1D','Aerolinea de Antioquia'],
    ['UK','Air Vistara'],
    ['AQ','9 Air'],
    ['SK','SAS'],
    ['DY','Norwegian'],
    ['UO','Hong Kong Express Airways'],
    ['AF','Air France'],
    ['TP','TAP Portugal'],
    ['AI','Air India Limited'],
    ['VY','Vueling'],
    ['JL','Japan Airlines'],
    ['KC','Air Astana'],
    ['SN','Brussels Airlines'],
    ['FC','Fly Corporate'],
    ['TF','Braathens Regional Aviation'],
    ['TB','tuifly.be'],
    ['EW','Eurowings'],
    ['IB','Iberia Airlines'],
    ['Q7','Sky Bahamas'],
    ['7M','MAP Linhas Aéreas'],
    ['FO','Flybondi'],
    ['CP','Compass Airlines'],
    ['9R','SATENA'],
    ['FD','Thai AirAsia'],
    ['FZ','Fly Dubai'],
    ['X3','TUIfly'],
    ['TK','Turkish Airlines'],
    ['7H','Ravn Alaska'],
    ['D8','Norwegian International'],
    ['JP','Adria Airways'],
    ['BURLINGTON','Burlington Trailways'],
    ['2Z','Passaredo'],
    ['CN','Canadian National Airways'],
    ['WM','Windward Islands Airways'],
    ['PC','Pegasus'],
    ['LK','Lao Skyway'],
    ['RP','Chautauqua Airlines'],
    ['LY','El Al Israel Airlines'],
    ['F9','Frontier Airlines'],
    ['3L','Intersky'],
    ['J9','Jazeera Airways'],
    ['UE','Nasair'],
    ['DH','Dennis Sky'],
    ['TW','Tway Airlines'],
    ['3H','AirInuit'],
    ['W6','Wizzair'],
    ['Y4','Volaris'],
    ['6E','IndiGo Airlines'],
    ['PG','Bangkok Airways'],
    ['VTTRANSLIN','Vermont Translines'],
    ['DD','Nok Air'],
    ['FY','Firefly'],
    ['ED','Airblue'],
    ['FN','Fastjet'],
    ['JT','Lion Air'],
    ['YB','BoraJet'],
    ['7C','Jeju Air'],
    ['SL','Thai Lion Air'],
    ['CZECHRAIL','Czech Rail'],
    ['C9','SkyWise'],
    ['AZ','Alitalia'],
    ['AR','Aerolineas Argentinas'],
    ['4O','Interjet'],
    ['AM','AeroMéxico'],
    ['H2','Sky Airline'],
    ['5J','Cebu Pacific'],
    ['BV','Blue Panorama'],
    ['DE','Condor'],
    ['QZ','Indonesia AirAsia'],
    ['U2','easyJet'],
    ['ALSA','Alsa'],
    ['4U','germanwings'],
    ['3K','Jetstar Asia Airways'],
    ['DL','Delta Air Lines'],
    ['UT','UTair'],
    ['HA','Hawaiian Airlines'],
    ['WG','Sunwing'],
    ['R2','Orenburg Airlines'],
    ['UN','Transaero Airlines'],
    ['AK','AirAsia'],
    ['SJ','Sriwijaya Air'],
    ['SQ','Singapore Airlines'],
    ['UP','Bahamasair'],
    ['BA','British Airways'],
    ['SU','Aeroflot Russian Airlines'],
    ['EQ','TAME'],
    ['BW','Caribbean Airlines'],
    ['GA','Garuda Indonesia'],
    ['ET','Ethiopian Airlines'],
    ['HV','Transavia'],
    ['G8','Go Air'],
    ['UJ','AlMasria Universal Airlines'],
    ['BF','French Bee'],
    ['Q9','Wataniya Airways'],
    ['EU','Chengdu Airlines'],
    ['MENORCA','Berlinas Menorca'],
    ['DUBLINBUS','Dublin Bus'],
    ['LAMEZIA','Lamezia Multiservizi'],
    ['VYRAIL','Vy'],
    ['EMT','Emetebe Airlines'],
    ['FKK','Unity Air'],
    ['KA','Cathay Dragon'],
    ['XR','Corendon Airlines Europe'],
    ['DC','Braathens Regional Airways'],
    ['I3','ATA Airlines (Iran)'],
    ['ZO','Zagros Airlines'],
    ['B5','East African'],
    ['EIREAGLE','Eireagle'],
    ['GTOURSSA','Giosy tours SA'],
    ['WESTFALEN','Westfalen Bahn'],
    ['NORDWEST','NordWestBahn'],
    ['KORAIL','Korail'],
    ['YCAT','Yuma County Area Transit'],
    ['DALATRAFIK','Dalatrafik'],
    ['FLYGBUSSAR','Flygbussarna'],
    ['BT','airBaltic'],
    ['HZ','Aurora Airlines'],
    ['MM','Peach Aviation'],
    ['HH','Taban Airlines'],
    ['EUROTRANS','AD EuroTrans'],
    ['ARRIVAUK','Arriva United Kingdom'],
    ['MTRNORDIC','MTR Nordic'],
    ['OL','Samoa Airways'],
    ['IZY','IZY'],
    ['5W','WESTBahn'],
    ['TAGKOMPANI','Tagkompaniet'],
    ['GL','Air Greenland'],
    ['BARONSBUS','Barons Bus'],
    ['NYTRAILWAY','New York Trailways'],
    ['OUIBUS','Ouibus'],
    ['LM','LoganAir LM'],
    ['SHA','Shree Airlines'],
    ['FULLINGTON','Fullington Trailways'],
    ['CAPITALCOL','Capital - Colonial Trailways'],
    ['BL','Jetstar Pacific'],
    ['YORKSTIGER','Yorkshire Tiger'],
    ['FIRSTBUS','First Bus'],
    ['HIGHPEAK','High Peak'],
    ['YELLOWBUS','Yellow Buses'],
    ['BATHBUS','Bath Bus Company'],
    ['BLEKINGEB','Blekingetrafiken bus'],
    ['IJ','Spring Airlines Japan'],
    ['VRRAIL','VR'],
    ['BE','flybe'],
    ['OBB','OBB'],
    ['SLORAIL','Slovenian Railways'],
    ['ULT','Public Traffic Uppland train'],
    ['MEGABUST','Megabus train'],
    ['MEGABUSB','Megabus bus'],
    ['CITYZAP','Cityzap'],
    ['COASTLINER','Coastliner'],
    ['GREENLINE','Green Line'],
    ['STAGECOACB','Stagecoach bus'],
    ['OXFORDTUBE','Oxford Tube'],
    ['ENNO','Enno'],
    ['METRONOM','Metronom'],
    ['SUDTHURING','Sud-Thuringen-Bahn'],
    ['VIAS','Vias'],
    ['MERIBOBBRB','Meridian, BOB, BRB'],
    ['EUROBAHN','Eurobahn'],
    ['LANDERBAHN','Landerbahn'],
    ['ABELLIO','Abellio'],
    ['CZECHRAILT','Czech Rail train'],
    ['SLT','Stockholm Public Transport train'],
    ['S0','Aerolineas Sosa'],
    ['AG','Aruba Airlines'],
    ['GX','GX airlines'],
    ['PR','Philippine Airlines'],
    ['UQ','Urumqi Airlines'],
    ['UG','TunisAir Express'],
    ['K2','EuroLot'],
    ['VE','VE'],
    ['D9','Aeroflot-Don'],
    ['IT','Tigerair Taiwan'],
    ['ZK','Great Lakes Airlines'],
    ['HR','Hahn Airlines'],
    ['HU','Hainan Airlines'],
    ['PY','Surinam Airways'],
    ['7B','Fly Blue Crane'],
    ['LW','Latin American Wings'],
    ['RI','Mandala Airlines'],
    ['Q8','Trans Air Congo'],
    ['XC','Corendon'],
    ['WE','Thai Smile'],
    ['PL','Southern Air Charter'],
    ['AT','Royal Air Maroc'],
    ['BR','EVA Air'],
    ['MH','Malaysia Airlines'],
    ['OX','Orient Thai Airlines'],
    ['S4','SATA Azores Airlines'],
    ['7T','Trenitalia'],
    ['ARDATUR','Arda Tur'],
    ['MAGICSHUT','Magical Shuttle'],
    ['CRNJAT','Crnja tours'],
    ['VS','Virgin Atlantic Airways'],
    ['GDNEX','GDN Express'],
    ['GLOBALBIO','Global biomet '],
    ['CHRISTRAN','Christian Transfers'],
    ['YELLOWTRAN','Yellow Transfers'],
    ['GQ','Sky Express'],
    ['2A','Deutsche Bahn'],
    ['AUTNA','Autna SL - Spain'],
    ['CHINARAIL','China Railway'],
    ['OKBUS','OK bus'],
    ['MOUNTAINLI','Mountain Line Transit Authority'],
    ['BOLTBUS','BoltBus'],
    ['SWISSTOURS','SwissTours'],
    ['AUTOLIFEDE','Autolinee federico'],
    ['NH','All Nippon Airways'],
    ['AEROBUSBCN','Aerobus Barcelona'],
    ['ROMAEX','Roma Express'],
    ['BALEARIA','Balearia'],
    ['5G','MAYAir'],
    ['WD','Amsterdam Airlines'],
    ['Z4','Ibom Air'],
    ['ZB','Air Albania'],
    ['P4','Air Peace Limited'],
    ['ITALONTV','Italo NTV'],
    ['ITALOBUS','Italobus'],
    ['W7','Wings of Lebanon'],
    ['RS','Air Seoul']
]

export const airlines_name = new Map(airlines_data);