const goalConfigs = {
  sprint: {
    label: 'Sprint-Triathlon',
    weeklyVolume: 7,
    sessions: 4,
    emphasis: { swim: 0.35, bike: 0.3, run: 0.25, strength: 0.1 },
    intensity: 'Mäßig bis hoch',
  },
  olympic: {
    label: 'Olympic-Triathlon',
    weeklyVolume: 9,
    sessions: 5,
    emphasis: { swim: 0.3, bike: 0.35, run: 0.25, strength: 0.1 },
    intensity: 'Konstanter aerobischer Aufbau',
  },
  half: {
    label: 'Halb-Ironman',
    weeklyVolume: 12,
    sessions: 6,
    emphasis: { swim: 0.25, bike: 0.4, run: 0.25, strength: 0.1 },
    intensity: 'Ausdauerorientiert mit Tempo-Blöcken',
  },
  ironman: {
    label: 'Ironman',
    weeklyVolume: 16,
    sessions: 7,
    emphasis: { swim: 0.2, bike: 0.45, run: 0.25, strength: 0.1 },
    intensity: 'Lange lockere Einheiten mit gezielter Pacing-Strategie',
  },
};

const workoutLibrary = {
  strength: [
    { name: 'Bulgarian Split Squat', focus: 'Bein-Kraft', benefit: 'Verbessert Einbein-Stabilität und Laufkraft.', sets: '3 x 6-8/Seite', equipment: 'Kurzhanteln', howto: 'Steh einen großen Schritt vor einer Bank und leg den hinteren Fuß mit dem Spann darauf. Beug das vordere Knie und senk dich gerade nach unten, bis das Knie fast den Boden berührt. Drück dich über die vordere Ferse kräftig wieder hoch.' },
    { name: 'Einbeiniger Romanian Deadlift', focus: 'Hintere Kette', benefit: 'Stärkt Gesäß und hintere Oberschenkelmuskulatur.', sets: '3 x 6-8/Seite', equipment: 'Kurzhantel', howto: 'Steh auf einem Bein, das andere schwebt leicht hinter dir. Halt die Hantel vor den Oberschenkeln, schieb das Gesäß nach hinten und beug dich mit geradem Rücken vor – das hintere Bein geht mit nach oben. Geh so tief, bis du die Rückseite des Beins spürst, dann komm aufrecht zurück.' },
    { name: 'Trap-Bar Deadlift / Kreuzheben', focus: 'Ganzkörperkraft', benefit: 'Baut schwere Zugkraft und Hüftstärke auf.', sets: '3-4 x 4-6', equipment: 'Trap-Bar/ Langhantel', howto: 'Stell dich in die Trap-Bar, Füße hüftbreit. Beug Knie und Hüfte, greif die Griffe, der Rücken bleibt gerade. Drück dich mit den Beinen nach oben, bis du aufrecht stehst, und lass die Stange kontrolliert wieder ab.' },
    { name: 'Farmer Carry', focus: 'Core & Griff', benefit: 'Verbessert Rumpfstabilität und Haltung unter Last.', sets: '4 x 30-60s', equipment: 'Kurzhanteln', howto: 'Nimm in jede Hand eine Hantel, stell dich aufrecht hin, Schultern zurück. Geh langsam und kontrolliert geradeaus – Rumpf fest, Blick nach vorn, ohne zu wippen.' },
    { name: 'Klimmzüge / Lat Pulldown', focus: 'Oberkörper', benefit: 'Unterstützt Zugkraft im Schwimmen und Haltung.', sets: '3 x 6-8', howto: 'Greif die Stange etwas breiter als schulterbreit, Handrücken von dir weg. Zieh dich hoch, bis das Kinn über der Stange ist, Ellenbogen nach unten. Senk dich langsam ab, bis die Arme fast gestreckt sind. An der Lat-Maschine ziehst du die Stange zur oberen Brust.' },
    { name: 'Plank Variationen (Shoulder Taps)', focus: 'Core', benefit: 'Verbessert Rumpfstabilität und Kraftübertragung.', sets: '3 x 30s', howto: 'Stütz dich im Unterarm- oder Liegestütz, der Körper bildet eine gerade Linie. Heb eine Hand kurz ab und tippe die gegenüberliegende Schulter an, dann wechsle die Seite – ohne dass der Rumpf wippt.' },
    { name: 'Hip Thrust', focus: 'Hüftstrecker', benefit: 'Erhöht Explosivkraft und Stabilität beim Rad/Lauf.', sets: '3 x 8-10', howto: 'Leg den oberen Rücken auf eine Bank, Füße hüftbreit auf den Boden, Knie im rechten Winkel. Drück die Hüfte kräftig nach oben, bis der Körper eine gerade Linie bildet. Press das Gesäß oben an und senk die Hüfte kontrolliert ab.' },
    { name: 'Goblet Squat', focus: 'Bein-Kraft & Kniekontrolle', benefit: 'Baut Beinkraft auf und schützt die Knie durch kontrollierte Bewegung.', sets: '3 x 8-12', equipment: 'Kurzhantel oder Kettlebell', howto: 'Halt die Hantel mit beiden Händen vor der Brust, die Ellenbogen zeigen nach unten. Stell dich schulterbreit hin, schieb das Gesäß nach hinten und geh tief in die Kniebeuge, bis die Oberschenkel mindestens parallel zum Boden sind. Drück dich über die Fersen wieder hoch und halt den Rumpf dabei fest – das Knie bleibt über den Zehen. Die tiefe Position stärkt Hüfte und Sprunggelenk mit, die du für die Aero-Haltung und einen kräftigen Lauf brauchst.' },
    { name: 'Pallof Press', focus: 'Rumpf-Antirotation', benefit: 'Stabilisiert den Rumpf und hält die Aero-Position über lange Einheiten.', sets: '3 x 8-12/Seite', equipment: 'Widerstandsband oder Kabelzug', howto: 'Befestige das Band in Brusthöhe und dreh dich seitlich zur Aufhängung. Halt das Band mit beiden Händen vor der Brust, streck die Arme gerade nach vorn und lass dich vom Band nicht zur Seite drehen – Rumpf bleibt ruhig und aufrecht. Zieh die Arme langsam wieder zur Brust und wiederhole. Das trainiert die Rumpfsteifigkeit, die im Windschatten-Sitz dein Becken stabil hält und die Kraft ins Pedal bringt.' },
    { name: 'Step-Up', focus: 'Einbein-Kraft', benefit: 'Verbessert Hüftstabilität und links-rechts-Balance fürs Laufen.', sets: '3 x 6-10/Seite', equipment: 'Kiste/Bank, optional Kurzhanteln', howto: 'Stell dich vor eine Kiste in Kniehöhe, ein Fuß vollständig oben. Drück dich über diesen Fuß nach oben, bis das Bein gestreckt ist, und geh kontrolliert wieder herunter – das andere Bein stützt nur ab. Bleib aufrecht, das Knie zeigt in Fahrtrichtung. Starte ohne Gewicht, mit Kurzhanteln in der Hand wird es schwerer. Mit einem Widerstandsband um die Knie forderst du zusätzlich den Gesäßmuskel.' },
  ],
  swim: [
    { name: 'Catch-Up Drill', focus: 'Armzug-Symmetrie', benefit: 'Verbessert Timing und Wassergefühl.', sets: '4–6 x 25 m', equipment: 'Pull Buoy (optional)', howto: 'Schwimm ganz ruhig und lass beide Arme gestreckt vor dir im Wasser liegen. Zieh mit dem einen Arm einen kompletten Zug und bring die Hand über dem Wasser zurück – erst wenn sie den vorderen Arm wieder eingeholt hat, beginnt der andere Zug. Führe die Hand beim Überholen hoch am Körper vorbei, der Ellbogen geht voran und bleibt oben, der Körper rollt zur Eintauchseite. So trainierst du volle, symmetrische Züge und sauberes Timing.' },
    { name: 'Fingertip Drag', focus: 'Ellbogenhöhe', benefit: 'Fördert hohe Ellbogen-Position beim Zug.', sets: '4 x 25 m', howto: 'Schwimm normal und zieh bei der Überholphase (Recovery) die Fingerspitzen leicht durch das Wasser – knapp unter der Oberfläche, wie wenn du eine Linie über das Wasser ziehst. Halte den Ellbogen dabei hoch und lass Schulter und Arm entspannt bleiben, ohne zu schlagen. Wenn der Zug sauber sitzt, heb die Fingerspitzen im normalen Schwimmen einen Zentimeter über die Wasseroberfläche – das ist dein Zielbild für einen hohen Ellbogen.' },
    { name: 'Pull Buoy + Paddles', focus: 'Zugkraft', benefit: 'Isoliert Oberkörper und Kraft im Zug.', sets: '4–6 x 50 m', equipment: 'Pull Buoy, Handpaddles', howto: 'Klemme den Pull Buoy zwischen die Oberschenkel und zieh die Paddles an – die Beine treiben entspannt hinterher, nur der Oberkörper arbeitet. Tauch die Hand schulterbreit ein, halt den Ellbogen hoch und zieh mit langem, kontrolliertem Zug bis zum Oberschenkel. Spüre den Druck der Paddles am Wasser: Stimmt der Zugwinkel, bleibt das Paddel ruhig liegen. Beginne mit kurzen Bahnen und kleineren Paddles, bis dein Zug ruhig und ohne Schulterzucken bleibt.' },
    { name: 'Kicking Sets', focus: 'Bein-Kick', benefit: 'Verbessert Beinkraft und Körperposition.', sets: '6 x 50 m', equipment: 'Kickboard (optional)', howto: 'Kick mit relativ gestreckten Beinen aus der Hüfte – kleine Amplitude, schnelle Frequenz, die Knie bleiben unter der Wasseroberfläche, nicht wie beim Fahrradfahren. Der Abwärtskick erzeugt den Schub, der Aufwärtskick ist entspannt. Halte die Hüfte oben: Bauch angespannt, Kopf ruhig im Wasser. Variiere zwischen Streamline-Kicken mit gestreckten Armen und Kicken auf der Seite mit ausgestrecktem Arm, um die Körperrotation zu trainieren.' },
    { name: '6-Kick Switch (6/1/6)', focus: 'Körperrotation & Balance', benefit: 'Verbessert Seitenlage, Rotation und eine stabile, ruhige Körperlinie.', sets: '6 x 25-50 m', howto: 'Stoß dich in Streamline ab, zieh einen Zug und rotier auf die Seite: Der eine Arm liegt gestreckt vorn, der andere entspannt an der Hüfte, der Bauchnabel zeigt zur Beckenwand. Kick jetzt sechsmal ruhig auf dieser Seite, dann nimm einen Zug und rotier auf die andere, wo wieder sechs Kicks folgen. Kopf bleibt ruhig, Kopf, Hüfte und Fersen bilden eine Linie. Mit Flossen ist es einfacher, wenn die Beine absinken.' },
    { name: 'Sculling', focus: 'Wassergefühl & Catch', benefit: 'Trainiert den kraftvollen Catch mit Hand und Unterarm.', sets: '4 x 25 m', equipment: 'Pull Buoy (optional)', howto: 'Schwimm mit dem Pull Buoy zwischen den Beinen, Kopf im Wasser, beide Arme gestreckt vorn. Beug Handgelenk und Ellbogen leicht, sodass die Ellenbogen höher als die Handgelenke liegen, und sculle die Hände schnell, aber kontrolliert nach links und rechts – nur durch die Handstellung entsteht Vortrieb, die Bewegung bleibt klein. Variiere zwischen Vorderarm-Scull (vorne) und Schulter-Scull (Arme unter den Schultern).' },
    { name: 'Fist Drill', focus: 'Unterarm-Catch', benefit: 'Lehrt, das Wasser mit dem ganzen Unterarm statt nur der Hand zu fassen.', sets: '4 x 25 m', howto: 'Schwimm Freistil mit geschlossenen Fäusten – es fühlt sich an, als hättest du nichts zum Ziehen. Zieh trotzdem bewusst mit dem Unterarm durch, halt den Ellbogen hoch und greif das Wasser vor dir, als würdest du über ein Fass greifen. Erst wenn du die Fäuste öffnest, spürst du sofort den stärkeren Druck an Hand und Unterarm. Langsam schwimmen, die Technik zählt, nicht die Geschwindigkeit.' },
  ],
  bike: [
    { name: 'Cadence Drills', focus: 'Trittfrequenz', benefit: 'Verbessert Rundenfluss und Effizienz.', sets: '3–5 x 1–3 min', howto: 'Schalte in einen leichten Gang und tritt schneller als gewohnt – etwa 100–110 U/min, mit wenig Widerstand. Fokussiere auf einen runden Tritt: über den oberen Punkt nach vorne drücken, über den unteren Punkt mitziehen, ohne tote Punkte. Halte den Oberkörper ruhig und das Becken stabil – wippst du auf dem Sattel, ist der Widerstand zu hoch oder das Tempo zu schnell: erst wieder ruhig treten, dann steigern. Baue die Durchgänge locker in Anfangsphase oder Grundlagenfahrten ein, am besten auf frischen Beinen.' },
    { name: 'Sweet-Spot Intervals', focus: 'Tempoausdauer', benefit: 'Hoher Trainingsreiz bei moderater Belastung.', sets: '2–3 x 10–15 min', howto: 'Fahre kontinuierlich bei 88–94 % deiner FTP – spürbar hart, aber nicht so scharf, dass die Beine verhärten; es liegt zwischen Tempo- und Schwellenbereich. Halte pro Intervall 10–15 Minuten einen runden Tritt und ein gleichmäßiges Tempo. Danach 3–5 Minuten locker ausrollen. Der Sweet Spot verbindet hohen Trainingsreiz mit machbarer Dauer und ist ideal, um im Jahresverlauf mehr Trainingsvolumen aufzunehmen.' },
    { name: 'Hill Repeats', focus: 'Kraftausdauer', benefit: 'Erhöht Beinkraft und Kletterfähigkeit.', sets: '5–8 x 2–4 min', equipment: 'Anstieg mit 4–8 %', howto: 'Such dir einen Anstieg mit 4–8 % Steigung. Fahr jeden Durchgang 2–4 Minuten konstant hart an der Schwelle – meist im Sitzen mit ruhigem Oberkörper, bei steilen Rampen darfst du kurz stehend nachhelfen. Halte die Trittfrequenz dabei über 70 U/min und wähle die Gänge entsprechend leicht. Nach jedem Durchgang rollst du locker und mit leichtem Gang wieder hinunter, bevor der nächste beginnt.' },
    { name: 'One-Leg Drills', focus: 'Pedaltechnik', benefit: 'Eliminiert tote Punkte und macht den Tritt rund und effizient.', sets: '6–10 x 1 min/Bein', equipment: 'Trainer (empfohlen)', howto: 'Mach die Übung am besten auf dem Trainer, das freie Bein liegt auf einem Hocker oder hängt entspannt. Tritt eine Minute lang nur mit einem Bein bei mittlerer Trittfrequenz und spüre die vier Phasen: über den oberen Punkt drücken, Kraft nach unten – und unten nicht auf das Pedal warten, sondern aktiv nach hinten-oben mitziehen. Wechsle ohne Pause das Bein, an schwachen Tagen startest du mit dem schwächeren. Ruhig, aber mit voller Konzentration treten.' },
    { name: 'Standing Starts', focus: 'Explosivkraft', benefit: 'Steigert neuromuskuläre Kraft und Beschleunigung (T1, Rennsituationen).', sets: '6–8 x 8–15 s', howto: 'Auf flacher, sicherer Strecke in einem schweren Gang fast zum Stillstand rollen und dann aus dem Sattel maximal beschleunigen – die ersten zwei Pedalumdrehungen sofort hart, danach im Sitzen das Tempo halten. Dazwischen vollständig erholen (2–5 Minuten lockeres Rollen), sonst wird aus der Krafteinheit eine reine Ausdauerbelastung. Einsteiger starten mit 5–6 Wiederholungen, die Technik zählt mehr als die Wattzahl.' },
    { name: 'Big Gear / Torque Intervals', focus: 'Kraftausdauer', benefit: 'Erhöht Kraft bei niedriger Trittfrequenz – wichtig für Hügel und Gegenwind.', sets: '4 x 4–8 min @ 45–60 U/min', howto: 'Schalte in einen schweren Gang, sodass du nur rund 45–60 Umdrehungen pro Minute trittst. Halte die Leistung dabei konstant – meist sitzend, Rumpf ruhig, mit bewusst hohem Drehmoment pro Pedalumdrehung. Bei Knie- oder Rückenbeschwerden die Trittfrequenz um 10 U/min erhöhen. Maximal 1–2 solcher Einheiten pro Woche, nie an aufeinanderfolgenden Tagen.' },
  ],
  run: [
    { name: 'Strides', focus: 'Laufökonomie', benefit: 'Verbessert Technik und Schrittfrequenz.', sets: '4–8 x 20–30 s', howto: 'Lauf nach dem Warm-up 20–30 Sekunden in der Anstrengung eines schnellen Rennens (rund 85–95 % deines Meilen-Tempos). Schleich dich die ersten 5 Sekunden ins Tempo ein, bleib aufrecht und entspannt, dann mach kurze, schnelle Schritte statt weiter Sprünge: hohe Schrittfrequenz, Mittelfuß-Aufsatz, Arme aktiv. Zwischen den Wiederholungen 2 Minuten vollständig erholen, danach locker auslaufen. Ideal 2–3× pro Woche als Einschub in leichte Läufe.' },
    { name: 'Tempo Runs', focus: 'Laktatschwelle', benefit: 'Erhöht konstante Renngeschwindigkeit.', sets: '20–30 min', howto: 'Lauf 20–30 Minuten am Stück in einem Tempo, das sich komfortabel hart anfühlt („comfortably hard", RPE 7–8) – deutlich schneller als normal, aber durchhaltbar. Das trainiert die Laktatschwelle: Du spürst die Beine, kannst aber noch in kurzen Sätzen sprechen. Halte das Tempo gleichmäßig, Oberkörper aufrecht, Arme ruhig. Starte nach einem 10–15-minütigen Warm-up und rolle am Ende 5–10 Minuten aus.' },
    { name: 'Long Easy Run', focus: 'Grundlagenausdauer', benefit: 'Baut Ausdauer und muskuläre Anpassung.', sets: '60–90 min', howto: 'Lauf 60–90 Minuten in einem Gesprächstempo – etwa 55–75 % deines 5-Kilometer-Renntempos (Zielwert um 65 %), also rund 40–55 Sekunden pro Kilometer langsamer als dein 5K-Tempo. Du solltest dabei durchgehend ganze Sätze sprechen können, der Puls liegt bei 65–75 % der maximalen Herzfrequenz. Halte den Lauf bewusst locker und gleichmäßig – hier entsteht die Grundlagenausdauer, die deine Renngeschwindigkeit trägt.' },
    { name: 'Fartlek (Speed Play)', focus: 'Tempo-Wechsel', benefit: 'Verbessert Tempowechselfähigkeit und VO2max, ohne harte Intervalle.', sets: '20–30 min', howto: 'Lauf nach dem Warm-up am Stück und wechsle die Geschwindigkeit nach Gefühl oder Landmarken: zum Beispiel eine Minute zügig, eine Minute locker, immer wieder – oder bergauf schneller, bergab entspannen. Die schnellen Abschnitte liegen zwischen 10-km- und Halbmarathon-Tempo, die Erholungen sind ein leichtes Joggen, nie ein Gehen. Weil alles nach Gefühl läuft, passt sich das Tempo dem Gelände an und du bleibst auch auf unruhigem Untergrund motiviert.' },
    { name: 'Hill Repeats (Lauf)', focus: 'Kraft & VO2max', benefit: 'Stärkt Beinkraft, Kniehebung und Laufökonomie bergauf.', sets: '6–10 x 45–60 s', howto: 'Such einen Anstieg mit 5–8 % Steigung. Lauf jeden Durchgang 45–60 Sekunden hart (Anstrengung 8–9/10), mit aktiver Kniehebung, kräftigem Armtreiben und aufrechtem Oberkörper. Jogg entspannt wieder hinunter, um dich zu erholen. Achte darauf, dass die Steigung nicht so steil ist, dass deine Schrittfrequenz einbricht. Der Hügel ersetzt Schnelligkeitstraining und schont zugleich Sehnen und Gelenke.' },
    { name: 'Fast Downs', focus: 'Kadenz & Quadrizeps', benefit: 'Trainiert schnelle, leichte Schritte bergab und die Beine fürs bergige Rennen.', sets: '5–8 x 20–30 s', howto: 'Lauf einen Gefälleabschnitt bergauf gemütlich, dann beschleunige beim Abwärtslaufen auf mehr als dein flaches Tempo – aber mit kurzen, schnellen Schritten und leichter Landung. Der Fuß landet unter dem Körperschwerpunkt, nicht vor dir, und du setzt nie hart mit der Ferse auf; die Arme balancieren mit. Bei Knieproblemen die Übung weglassen und durch leichte Strides ersetzen.' },
  ],
  brick: [
    { name: 'Short Brick (45–60 min Rad + 15 min Lauf)', focus: 'Koppeln', benefit: 'Gewöhnt Beine an Wechsel vom Rad zum Laufen.', sets: '45–60 min Rad + 15 min Lauf', howto: 'Fahr zuerst deine gewohnte Rad-Einheit – in etwa so lange wie dein Rad-Rennteil. Im Wechsel (T2) ziehst du Radschuhe aus, nimmst den Helm ab und ziehst die Laufschuhe an, dann läufst du direkt weiter. Der Lauf ist bewusst kurz (rund 15 Minuten) und im lockeren Tempo – wichtig ist, dass die Beine das Gefühl des Radfahrens ablegen und aufs Laufen umschalten. Diese Anpassung passiert vor allem in den ersten 10–20 Minuten nach dem Rad, der Lauf muss dafür nicht lang sein.' },
    { name: 'Race-Pace Brick', focus: 'Wettkampfsimulation', benefit: 'Trainiert Renntempo nach Radfahrt.', sets: '60–90 min Rad + 20–30 min Lauf', howto: 'Simuliere die Wechselsituation deines Rennens: Radabschnitt im Renntempo, danach zügiger Wechsel und sofort der Lauf im Rennlauf-Tempo – nicht schneller. Beginne die ersten 2–3 Minuten kontrolliert, bis die Beine das flache Radgefühl verloren haben, dann übernimm das Zieltempo. Übe dabei deinen T2-Ablauf: Schuhe, Helm, Verpflegung – alles in fester Reihenfolge. Am Ende locker auslaufen und die Einheit im Trainingstagebuch mit Werten notieren.' },
    { name: 'T2 Transition Training', focus: 'Wechsel T2', benefit: 'Macht den Rad-Lauf-Wechsel sicher und spart wertvolle Sekunden.', sets: '5–8 x kompletter T2', howto: 'Leg alles bereit, als wäre es Renntag: Laufschuhe mit offenen Schnürsenkeln, Renngürtel, Kappe, Verpflegung. Stelle die Reihenfolge fest (Rad abstellen, Helm ab, Schuhe an, Gürtel um, loslaufen) und übe sie nach einer kurzen Radfahrt oder am Ende einer Rad-Einheit mehrmals hintereinander – Ziel unter 60–90 Sekunden. Wiederhole den Ablauf, bis er automatisch abläuft. Der Wechsel unter Zeitdruck ist der einzige Trainingsreiz, der den Renntag wirklich vorbereitet.' },
    { name: 'Long Brick (lange Radfahrt + Lauf)', focus: 'Ausdauer-Koppeln', benefit: 'Simuliert den Rennverlauf und übt das Laufen auf müden Beinen.', sets: '2–3 h Rad + 30–45 min Lauf', howto: 'Fahre eine lange Radfahrt in Renntempo-Erholung und steige dann direkt in einen 30–45-minütigen Lauf um – die ersten 5–10 Minuten bewusst 15–30 Sekunden pro Kilometer langsamer als sonst, bis sich die Beine umgestellt haben. Nutze diese Einheit für deine Renner-Ernährung: Iss und trinke, was du auch am Renntag planst. Nach so einem Brick brauchst du 48–72 Stunden Erholung, plane danach leichte Tage ein.' },
  ],
  mobility: [
    { name: 'Thoracic Rotations', focus: 'Brustwirbelsäule', benefit: 'Verbessert Schwimm- und Fahrhaltung.', sets: '1–2 x 6–10/Seite', howto: 'Leg dich auf die Seite, Hüfte und Knie sind gebeugt, das obere Knie liegt auf einem Kissen abgestützt, damit das Becken stabil bleibt. Streck beide Arme vor dir aus und öffne den oberen Arm langsam über die Decke weiter Richtung Boden hinter dir, während der Blick der Hand folgt. Atme am Ende der Drehung tief in die Brustwirbelsäule hinein, halte kurz und komm kontrolliert zurück. Wichtig: Die Bewegung kommt aus der Brustwirbelsäule, Becken und unterer Rücken bleiben ruhig.' },
    { name: 'Glute Bridges', focus: 'Hüftaktivierung', benefit: 'Aktiviert Gesäßmuskulatur vor Belastung.', sets: '2–3 x 10–12', howto: 'Leg dich auf den Rücken, die Füße stehen hüftbreit und etwa 15 cm vor dem Gesäß, die Handflächen zeigen nach oben. Spanne Gesäß und Bauch an, drück die Fersen in den Boden und heb die Hüfte, bis Knie, Hüfte und Schultern eine gerade Linie bilden. Halte oben 2 Sekunden an und senk die Hüfte langsam wieder ab, ohne ins Hohlkreuz zu fallen. Spürst du den Anspruch vor allem in den Oberschenkeln, stell die Füße etwas weiter vom Gesäß weg.' },
    { name: 'Calf & Achilles Mobility', focus: 'Waden', benefit: 'Verhindert Überbelastung beim Laufen.', sets: '2–3 x 10/Bein', equipment: 'Step oder Treppenkante', howto: 'Stell dich mit den Fußballen auf eine Treppenkante oder einen Step, die Fersen hängen frei. Heb dich auf die Zehenspitzen und senk dich dann sehr langsam über 5–6 Sekunden ab – die Ferse geht unter die Kantenhöhe, bis du eine Dehnung in der Wade spürst. Halte das Knie gestreckt; für die einbeinige Variante stütz dich mit einer Hand an einer Wand ab. Das kräftigt die Waden exzentrisch und schützt Wadenmuskulatur und Achillessehne vor Überlastung.' },
    { name: '90/90 Hip Stretch', focus: 'Hüftrotation', benefit: 'Verbessert die Innen- und Außenrotation der Hüfte – entscheidend für die Aero-Haltung.', sets: '1–2 x 30–60 s/Seite', howto: 'Sitz auf dem Boden, das vordere Bein ist vor dir außenrotiert (Schienbein parallel zur Brust, Winkel 90 Grad), das hintere Bein neben dir innenrotiert (auch 90 Grad). Halt den Oberkörper aufrecht, die Schultern über der Hüfte. Halte die Position 30–60 Sekunden und wechsle dann die Seite. Zieht es zu stark, lege ein Kissen unter das Gesäß – das Becken bleibt gerade, sonst kippt die Übung und dehnt nichts mehr.' },
    { name: 'Hip Flexor Lunge Stretch', focus: 'Hüftbeuger', benefit: 'Dehnt die verkürzten Hüftbeuger von Bürojob und Radposition.', sets: '2 x 45–60 s/Seite', howto: 'Geh in einen Ausfallschritt, das hintere Knie liegt auf dem Boden, das vordere Knie über dem Fuß. Spanne das Gesäß der hinteren Seite an und schieb die Hüfte nach vorn, bis du die Dehnung in der vorderen Hüfte und im Oberschenkel spürst – das Becken bleibt aufgerichtet, nicht ins Hohlkreuz fallen. Für mehr Intensität den Arm der hinteren Seite über den Kopf heben und leicht zur Seite beugen. Halte 45–60 Sekunden, dann Seite wechseln.' },
    { name: 'Worlds Greatest Stretch', focus: 'Ganzkörper-Mobilität', benefit: 'Kombiniert Hüfte, Brustwirbelsäule und Rumpfstabilität in einer Übung.', sets: '1–2 x 6–10/Seite', howto: 'Geh in einen tiefen Ausfallschritt, das vordere Knie über dem Fuß. Setz die Hand der vorderen Seite auf den Boden, dreh den Oberkörper nach oben und öffne den Arm Richtung Decke, der Blick folgt der Hand – die Brustwirbelsäule rotiert, das Becken bleibt ruhig. Dreh zurück, kurz halten, dann wiederholen, bevor du die Seite wechselst. Klassischer Pre-Workout-Zug: dynamisch vor dem Training, langsam und gehalten danach.' },
    { name: 'Deep Goblet Squat Hold', focus: 'Hüfte & Sprunggelenk', benefit: 'Erweitert die aktive Beweglichkeit von Hüfte und Fußgelenken.', sets: '3 x 30 s', equipment: 'Kurzhantel oder Kettlebell', howto: 'Halt eine leichte Hantel vor der Brust und geh tief in die Kniebeuge, bis die Oberschenkel die Waden berühren oder du fast auf dem Boden sitzt – die Fersen bleiben am Boden. Halte die Position 30 Sekunden und drück die Knie mit den Ellenbogen sanft nach außen. Rumpf aufrecht, die Tiefe ist wichtiger als das Gewicht. Diese Haltung trainiert genau den Bewegungsraum, den du für die Aero-Position und einen langen Laufschritt brauchst.' },
  ],
  nutrition: [
    { name: 'Pre-Workout Snack (30–60 min)', focus: 'Energie', benefit: 'Leichter Kohlenhydrat-Snack (Banane, Toast).', sets: '30–60 min vorher', howto: 'Isst du 1–3 Stunden vorher, wähle eine kleine Mahlzeit aus leicht verdaulichen Kohlenhydraten und etwas Protein – zum Beispiel Haferflocken mit Banane oder Vollkornbrot mit Erdnussbutter. Kurz vor dem Start (30–60 min) reicht ein kleiner Kohlenhydrat-Snack wie eine Banane, ein Energie-Riegel oder Toast mit Marmelade; schweres, fettiges Essen vermeiden. Trinke dazu genug (200–400 ml Wasser) und teste jeden Snack erst im Training, damit es im Wettkampf keine Überraschungen gibt.' },
    { name: 'Post-Workout Protein', focus: 'Erholung', benefit: 'Schnelle Proteinzufuhr + Kohlenhydrate.', sets: 'Innerhalb 30–60 min', howto: 'Versorge die Muskeln innerhalb von 30–60 Minuten nach dem Training mit Protein und Kohlenhydraten – etwa ein Shake mit Whey- oder pflanzlichem Protein plus Banane und Haferflocken, Quark mit Früchten oder ein Vollkornbrot mit Käse oder Truthahn. Das Protein unterstützt die Reparatur der Muskulatur, die Kohlenhydrate füllen die Glykogenspeicher wieder auf. Dazu ausreichend trinken. Nach langen Einheiten oder bei einem zweiten Training am Tag sind die Kohlenhydrate besonders wichtig.' },
    { name: 'Energie-Quetschies (selbstgemacht)', focus: 'Unterwegs-Energie', benefit: 'Einfaches, leckeres Energie-Gel im Quetschbeutel.', sets: 'Rezept = 2 Portionen', equipment: 'Mehrweg-Quetschbeutel (150 ml)', howto: 'Zutaten: 250 g Honig, Saft einer halben Zitrone, 1 Prise Salz, optional 1 zerquetschte Banane. Alles in einer Schüssel gut verrühren, bis eine glatte Masse entsteht. Fülle sie mit einem Trichter in zwei Mehrweg-Quetschbeutel (je 150 ml) – etwa 80–85 % voll, dann bleiben die Beutel platzsparend. Pro Beutel hast du rund 90–100 g Kohlenhydrate: genug für 60–90 Minuten Sport. Kühl lagern und im Training testen, bevor du sie im Wettkampf einsetzt.' },
    { name: 'Carb Loading (36–48 h vor dem Rennen)', focus: 'Glykogenspeicher', benefit: 'Startet mit vollen Speichern – die Grundlage für dein Renntempo.', sets: '36–48 h vorher', howto: 'Beginne 36–48 Stunden vor dem Rennen, die Kohlenhydrate zu erhöhen: rund 8–12 g pro Kilogramm Körpergewicht am Tag. Wähle leicht verdauliche, ballaststoffarme Quellen wie Reis, Nudeln, Weißbrot, Bananen und Sportgetränke – Hülsenfrüchte, Rohkost und fettige Speisen dafür reduzieren. Fett und Eiweiß kommen über die Mahlzeiten natürlich dazu. Teste die Ladung vor deinem Trainingshöhepunkt, damit dein Magen am Renntag weiß, was kommt.' },
    { name: 'Hydration & Elektrolyte', focus: 'Flüssigkeit & Salz', benefit: 'Verhindert Leistungsabfall und Krämpfe bei Hitze und langen Einheiten.', sets: 'Nach Schweißrate (Test!)', howto: 'Finde deine Schweißrate einmal im Training: vor und nach 90 Minuten Radfahren wiegen (minus getrunkene Menge) und 1 Liter pro Kilo Verlust nachtrinken. Unterwegs trinkst du auf dem Rad rund 500–800 ml pro Stunde, dazu Salz: 500–1500 mg Natrium pro Liter Getränk, mehr bei Hitze und hohem Schwitzen. Auf dem Lauf nimmst du nur kleine Schlucke an jeder Verpflegungsstation. Nie nur über Stunden klares Wasser – das verdünnt das Blut und kann gefährlich werden.' },
    { name: 'Race-Day Fueling Plan', focus: 'Renntag-Strategie', benefit: 'Hält Energie und Magen im Rennen stabil.', sets: '60–90 g Kohlenhydrate/h', howto: 'Plane deine Nährstoffe wie eine Disziplin mit: Ein kohlenhydratreiches, leicht verdauliches Frühstück 2–4 Stunden vor dem Start, kurz davor 30–60 g Kohlenhydrate. Auf dem Rad 60–90 g Kohlenhydrate pro Stunde aus Gel, Sportgetränk und Riegel – in den letzten 20 Minuten vor dem Wechsel auf Wasser und kleine Snacks umstellen. Auf dem Lauf dann konservativ 40–60 g pro Stunde in kleinen Schlucken. Jedes Produkt zuerst im Training testen – am Renntag gibt es keine neuen Experimente.' },
  ],
};

let currentPlanData = null; // stores the latest generated plan for export

const weeklyStrengthRotation = [[0, 1, 2], [3, 4, 5], [1, 3, 5]];
const weekdays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const labels = { Mon: 'Montag', Tue: 'Dienstag', Wed: 'Mittwoch', Thu: 'Donnerstag', Fri: 'Freitag', Sat: 'Samstag', Sun: 'Sonntag' };
const yearModal = document.getElementById('annualModal');
const annualViewBtn = document.getElementById('annualViewBtn');
const closeAnnualModal = document.getElementById('closeAnnualModal');
const annualGrid = document.getElementById('annualGrid');
const annualGridModal = document.getElementById('annualGridModal');
const annualEditor = document.getElementById('annualEditor');
const annualDayDetail = document.getElementById('annualDayDetail');
let selectedDate = null;
const plannerForm = document.getElementById('plannerForm');
const loadDemoBtn = document.getElementById('loadDemoBtn');
const weekPlanList = document.getElementById('weekPlanList');
const strengthList = document.getElementById('strengthList');
const availabilitySummary = document.getElementById('availabilitySummary');
const weeklyVolume = document.getElementById('weeklyVolume');
const workoutCount = document.getElementById('workoutCount');
const focusMatch = document.getElementById('focusMatch');
const planTitle = document.getElementById('planTitle');
const eventSummary = document.getElementById('eventSummary');
const eventPlanTimeline = document.getElementById('eventPlanTimeline');
const timeTable = document.getElementById('timeTable');
const swimLevelInput = document.getElementById('swimLevel');
const bikeLevelInput = document.getElementById('bikeLevel');
const runLevelInput = document.getElementById('runLevel');
const trainingDaysInput = document.getElementById('trainingDays');
const blockedDates = new Set();
const annualAvailability = {};
let disciplineFilter = null; // 'swim' | 'bike' | 'run' | 'strength' or null

function minutesToTime(totalMinutes) {
  const safeTotal = Math.max(0, totalMinutes);
  const hours = Math.floor(safeTotal / 60) % 24;
  const minutes = safeTotal % 60;
  return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
}

function getDateKeyFromDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function getCurrentWeekDateKeys() {
  const now = new Date();
  const monday = new Date(now);
  const day = monday.getDay();
  const diff = day === 0 ? -6 : 1 - day;
  monday.setDate(monday.getDate() + diff);
  monday.setHours(0, 0, 0, 0);

  return weekdays.map((_, index) => {
    const date = new Date(monday);
    date.setDate(monday.getDate() + index);
    return getDateKeyFromDate(date);
  });
}

function getAnnualAvailabilityMap() {
  const map = {};
  const currentWeekDates = getCurrentWeekDateKeys();
  const fallback = getAvailabilityMap();

  weekdays.forEach((day, index) => {
    const dateKey = currentWeekDates[index];
    const dateEntry = annualAvailability[dateKey];

    if (dateEntry && dateEntry.available && Array.isArray(dateEntry.windows) && dateEntry.windows.length) {
      const windows = dateEntry.windows
        .map((windowEntry) => {
          const startMinutes = timeToMinutes(windowEntry.start);
          const endMinutes = timeToMinutes(windowEntry.end);
          if (startMinutes === null || endMinutes === null || endMinutes <= startMinutes) {
            return null;
          }
          return { start: windowEntry.start, end: windowEntry.end, minutes: endMinutes - startMinutes };
        })
        .filter(Boolean);

      const minutes = windows.reduce((sum, windowEntry) => sum + windowEntry.minutes, 0);
      map[day] = { windows: windows.map(({ start, end }) => ({ start, end })), minutes };
      return;
    }

    map[day] = fallback[day] || { windows: [], minutes: 0 };
  });

  return map;
}

function timeToMinutes(value) {
  if (!value) return null;
  const [hours, minutes] = value.split(':').map(Number);
  if (Number.isNaN(hours) || Number.isNaN(minutes)) return null;
  return hours * 60 + minutes;
}

function formatMinutes(totalMinutes) {
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  return minutes === 0 ? `${hours} h` : `${hours} h ${minutes} min`;
}

function getAvailabilityMap() {
  // Previously this read DOM time inputs — weekly settings are now stored in `annualAvailability` per date.
  // Return empty availability per weekday by default.
  return weekdays.reduce((m, day) => { m[day] = { windows: [], minutes: 0 }; return m; }, {});
}

function getBlockedWindowMap() {
  return weekdays.reduce((map, day) => {
    map[day] = { windows: [], minutes: 0 };
    return map;
  }, {});
}

function addMinutesToTime(timeValue, minutesToAdd) {
  if (!timeValue) return timeValue;
  const total = timeToMinutes(timeValue) + minutesToAdd;
  const hours = Math.floor(total / 60) % 24;
  const mins = total % 60;
  return `${String(hours).padStart(2, '0')}:${String(mins).padStart(2, '0')}`;
}

function getShiftedTime(startTime, offsetMinutes) {
  return addMinutesToTime(startTime, Math.max(0, offsetMinutes));
}

function getFreeSegments(availability) {
  if (!availability || !Array.isArray(availability.windows)) {
    return [];
  }

  return availability.windows
    .map((windowEntry) => {
      const start = timeToMinutes(windowEntry.start);
      const end = timeToMinutes(windowEntry.end);
      if (start === null || end === null || end <= start) {
        return null;
      }
      return { start, end };
    })
    .filter(Boolean);
}

function updateAvailabilitySummary() {
  const map = getAnnualAvailabilityMap();
  const totalMinutes = Object.values(map).reduce((sum, value) => sum + (value.minutes || 0), 0);
  const hours = totalMinutes / 60;
  availabilitySummary.textContent = `${hours.toFixed(hours >= 10 ? 0 : 1).replace('.0', '')} h`;
}

const STORAGE_KEY = 'trifit_availability_v1';
const FORM_STORAGE_KEY = 'trifit_form_v1';

function persistAvailability() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(annualAvailability));
  } catch (err) {
    console.warn('Speichern der Zeiten fehlgeschlagen', err);
  }
}

function loadAvailability() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return;
    const data = JSON.parse(raw);
    Object.keys(data).forEach((key) => {
      annualAvailability[key] = data[key];
    });
  } catch (err) {
    console.warn('Laden der Zeiten fehlgeschlagen', err);
  }
}

function persistFormState() {
  try {
    const obj = {};
    new FormData(plannerForm).forEach((value, key) => {
      obj[key] = value;
    });
    localStorage.setItem(FORM_STORAGE_KEY, JSON.stringify(obj));
  } catch (err) {
    console.warn('Formular speichern fehlgeschlagen', err);
  }
}

function loadFormState() {
  try {
    const raw = localStorage.getItem(FORM_STORAGE_KEY);
    if (!raw) return;
    const obj = JSON.parse(raw);
    Object.keys(obj).forEach((key) => {
      const el = plannerForm.querySelector(`[name="${key}"]`);
      if (el) el.value = obj[key];
    });
  } catch (err) {
    console.warn('Formular laden fehlgeschlagen', err);
  }
}

function resetAllData() {
  Object.keys(annualAvailability).forEach((key) => delete annualAvailability[key]);
  try {
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem(FORM_STORAGE_KEY);
  } catch (err) {
    /* ignore */
  }
  plannerForm.reset();
  renderAnnualOverview();
  renderAvailabilityOverview();
  generatePlanFromForm();
  showToast('Alle Daten wurden gelöscht. Der Demo-Plan ist jederzeit über die Schaltfläche verfügbar.');
}

// Wire up confirm modal
const confirmModal = document.getElementById('confirmModal');
const confirmOkBtn = document.getElementById('confirmOkBtn');
const confirmCancelBtn = document.getElementById('confirmCancelBtn');
const confirmCloseBtn = document.getElementById('confirmCloseBtn');
const confirmBackdrop = document.getElementById('confirmBackdrop');

function showConfirmModal() {
  if (!confirmModal) return;
  confirmModal.classList.remove('hidden');
  confirmModal.setAttribute('aria-hidden', 'false');
  confirmOkBtn?.focus();
}

function hideConfirmModal() {
  if (!confirmModal) return;
  confirmModal.classList.add('hidden');
  confirmModal.setAttribute('aria-hidden', 'true');
}

confirmOkBtn?.addEventListener('click', () => { hideConfirmModal(); resetAllData(); });
confirmCancelBtn?.addEventListener('click', hideConfirmModal);
confirmCloseBtn?.addEventListener('click', hideConfirmModal);
confirmBackdrop?.addEventListener('click', hideConfirmModal);
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && confirmModal && !confirmModal.classList.contains('hidden')) {
    hideConfirmModal();
  }
});

// Wire up reset buttons
const resetAllBtn = document.getElementById('resetAllBtn');
resetAllBtn?.addEventListener('click', showConfirmModal);

const disciplineIcons = {
  swim: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2 7c2.5 0 2.5-2 5-2s2.5 2 5 2 2.5-2 5-2 2.5 2 5 2"/><path d="M2 12c2.5 0 2.5-2 5-2s2.5 2 5 2 2.5-2 5-2 2.5 2 5 2"/><path d="M2 17c2.5 0 2.5-2 5-2s2.5 2 5 2 2.5-2 5-2 2.5 2 5 2"/></svg>',
  bike: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="6" cy="17" r="4"/><circle cx="18" cy="17" r="4"/><path d="M6 17l3-6h4l5 6M9 11l2 6M12 11l3-5"/></svg>',
  run: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="14" cy="4" r="2"/><path d="M13 7l-4 5 2 6 3-3 1 4"/><path d="M13 13l4 3"/><path d="M9 15l-3 2"/></svg>',
  strength: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 5l5 5-8 8-5-5z"/><path d="M18 2l3 3M2 19l3 3"/></svg>',
  rest: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 14.5A8.5 8.5 0 1 1 9.5 4a7 7 0 0 0 10.5 10.5z"/></svg>',
};

function showToast(message, type = 'success') {
  let container = document.getElementById('toastContainer');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toastContainer';
    container.className = 'toast-container';
    container.setAttribute('aria-live', 'polite');
    document.body.appendChild(container);
  }
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.textContent = message;
  container.appendChild(toast);
  requestAnimationFrame(() => toast.classList.add('show'));
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 350);
  }, 3400);
}

function renderAvailabilityOverview() {
  if (!timeTable) return;
  const map = getAnnualAvailabilityMap();
  const totalMinutes = Object.values(map).reduce((sum, value) => sum + (value.minutes || 0), 0);

  const rows = weekdays.map((day) => {
    const dayInfo = map[day] || { windows: [], minutes: 0 };
    const windows = dayInfo.windows || [];
    const minutes = dayInfo.minutes || 0;
    const timeText = windows.length
      ? windows.map((w) => `${w.start}–${w.end}`).join(', ')
      : 'Keine Zeit';
    return `
      <div class="avail-day-row">
        <span class="avail-day-name">${labels[day]}</span>
        <span class="avail-day-time ${minutes > 0 ? 'has' : ''}">${timeText}</span>
        <span class="avail-day-hours ${minutes > 0 ? 'has' : ''}">${minutes > 0 ? formatMinutes(minutes) : '–'}</span>
      </div>
    `;
  }).join('');

  timeTable.innerHTML = `
    <div class="avail-week-card">
      <div class="avail-week-head">
        <div class="avail-week-summary">
          <strong>${totalMinutes > 0 ? `${formatMinutes(totalMinutes)} eingeplant` : 'Noch keine Zeit eingetragen'}</strong>
          <span>${totalMinutes > 0 ? 'Diese Woche hast du folgende Zeitfenster:' : 'Trage pro Tag ein Zeitfenster ein (z. B. 06:30–07:45) – daraus baut der Coach deinen Wochenplan.'}</span>
        </div>
        <div class="avail-week-actions">
          <button type="button" id="editAvailabilityBtn" class="ghost-btn mini-btn">Zeiten bearbeiten</button>
          <button type="button" id="resetAvailabilityBtn" class="text-btn" title="Alle gespeicherten Daten löschen">Zurücksetzen</button>
        </div>
      </div>
      <div class="avail-day-list">${rows}</div>
    </div>
  `;

  const editBtn = document.getElementById('editAvailabilityBtn');
  if (editBtn) editBtn.addEventListener('click', openAnnualModal);
  const resetBtn = document.getElementById('resetAvailabilityBtn');
  if (resetBtn) resetBtn.addEventListener('click', showConfirmModal);

  updateAvailabilitySummary();
}

function getDayNameForDateKey(dateKey) {
  const date = new Date(`${dateKey}T00:00:00`);
  const dayIndex = (date.getDay() + 6) % 7;
  return weekdays[dayIndex];
}

function getWeekDatesForDateKey(dateKey) {
  const date = new Date(`${dateKey}T00:00:00`);
  const day = date.getDay();
  const diff = day === 0 ? -6 : 1 - day;
  const monday = new Date(date);
  monday.setDate(date.getDate() + diff);

  return weekdays.map((_, index) => {
    const nextDate = new Date(monday);
    nextDate.setDate(monday.getDate() + index);
    return getDateKeyFromDate(nextDate);
  });
}

function getWeekSummaryForDateKey(dateKey) {
  const formData = new FormData(plannerForm);
  const goal = formData.get('goal');
  const experience = formData.get('experience');
  const focus = formData.get('focus');
  const config = goalConfigs[goal];

  return getWeekDatesForDateKey(dateKey).map((weekDateKey) => {
    const dayName = getDayNameForDateKey(weekDateKey);
    const dayAvailability = annualAvailability[weekDateKey] || { available: true, windows: [] };
    const windows = Array.isArray(dayAvailability.windows) && dayAvailability.windows.length
      ? dayAvailability.windows
      : getAvailabilityMap()[dayName]?.windows || [];

    const availabilityForDay = {
      windows,
      minutes: windows.reduce((sum, windowEntry) => sum + (timeToMinutes(windowEntry.end) - timeToMinutes(windowEntry.start) || 0), 0),
    };

    const sessions = buildWeeklyPlan([dayName], { [dayName]: availabilityForDay }, {}, experience, focus, config)
      .filter((session) => session.type !== 'rest');

    return {
      dateKey: weekDateKey,
      dayName,
      label: labels[dayName],
      windows,
      sessions,
    };
  });
}

function navigateDay(dateKey, deltaDays) {
  const date = new Date(`${dateKey}T00:00:00`);
  date.setDate(date.getDate() + deltaDays);
  const newKey = getDateKeyFromDate(date);
  selectedDate = newKey;
  openAnnualEditor(newKey);
  renderAnnualOverview();
  renderWeekStrip(newKey);
  scrollSelectedIntoView();
}

function renderWeekStrip(dateKey) {
  const strip = document.getElementById('weekStrip');
  if (!strip) return;
  const weekKeys = getWeekDatesForDateKey(dateKey);
  const todayKey = getDateKeyFromDate(new Date());
  strip.innerHTML = weekKeys.map((key) => {
    const date = new Date(`${key}T00:00:00`);
    const entry = annualAvailability[key];
    const hasTime = entry && entry.available && Array.isArray(entry.windows) && entry.windows.length > 0;
    const classes = [
      key === dateKey ? 'selected' : '',
      key === todayKey ? 'today' : '',
    ].filter(Boolean).join(' ');
    return `
      <button type="button" class="day-chip ${classes}" data-date="${key}" aria-label="Tag auswählen: ${date.toLocaleDateString('de-DE')}">
        <span class="chip-dow">${date.toLocaleDateString('de-DE', { weekday: 'short' })}</span>
        <span class="chip-day">${date.getDate()}</span>
        ${hasTime ? '<span class="chip-dot"></span>' : ''}
      </button>
    `;
  }).join('');
  strip.querySelectorAll('.day-chip').forEach((btn) => {
    btn.addEventListener('click', () => {
      selectedDate = btn.dataset.date;
      openAnnualEditor(selectedDate);
      renderAnnualOverview();
      renderWeekStrip(selectedDate);
      scrollSelectedIntoView();
    });
  });
}

function scrollSelectedIntoView() {
  const cell = document.querySelector('.day-cell.selected');
  const scroller = document.querySelector('.modal-right');
  if (!cell || !scroller) return;
  const scrollerRect = scroller.getBoundingClientRect();
  const cellRect = cell.getBoundingClientRect();
  scroller.scrollBy({ top: cellRect.top - scrollerRect.top - 40, behavior: 'smooth' });
}

function getWeeksUntilEvent(dateString) {
  try {
    const today = new Date();
    const event = new Date(`${dateString}T00:00:00`);
    // compute difference in full weeks (rounded down)
    const diffDays = Math.ceil((event - today) / (1000 * 60 * 60 * 24));
    return Math.max(0, Math.floor(diffDays / 7));
  } catch (e) {
    return null;
  }
}

function getTrainingPhase(weeksUntil) {
  if (weeksUntil === null) return null;
  if (weeksUntil <= 1) return 'Taper';
  if (weeksUntil <= 3) return 'Peak';
  if (weeksUntil <= 12) return 'Build';
  return 'Base';
}

function getPhaseScale(phase) {
  // scaling factors applied to session durations
  switch ((phase || '').toLowerCase()) {
    case 'taper':
      return 0.5;
    case 'peak':
      return 0.9;
    case 'build':
      return 1.0;
    case 'base':
    default:
      return 0.75;
  }
}

const phaseExplanations = {
  Base: {
    swim: 'In der Grundlagenphase baust du eine solide aerobe Basis auf. Das Tempo ist locker, der Fokus liegt auf Technik und Ausdauer.',
    bike: 'Die Grundlage für deine Radleistung wird gelegt. Lockere,长距离Fahrten stoffwechsel- und gefäßsystem.',
    run: 'Du gewöhnst deinen Körper an die Belastung. Lockere Läufe im GA1 stoffwechsel- und gefäßsystem.',
    strength: 'Kraft und Stabilität werden aufgebaut, um Verletzungen vorzubeugen und die Bewegungsqualität zu verbessern.',
    default: 'Du baust jetzt eine solide Basis auf – ausdauer, Technik und Regeneration stehen im Vordergrund.',
  },
  Build: {
    swim: 'Die Intensität steigt. Du arbeitest an deinem Schwimm-Pacing und baust Schwelle und Kraft im Wasser auf.',
    bike: 'Sweet-Spot- und Threshold-Einheiten bringen deine Radleistung auf Wettkampfniveau.',
    run: 'Tempo- und Schwelleinheiten verbessern dein Lauftempo und deine aerobe Kapazität.',
    strength: 'Die Kraft wird sportartspezifisch weiterentwickelt – Explosivkraft und Belastbarkeit stehen im Vordergrund.',
    default: 'Die Intensität steigt. Du bringst deine Leistung auf Wettkampfniveau.',
  },
  Peak: {
    swim: 'Du simulierst Wettkampfbedingungen. Pacing, Tempo-Wechsel und mentale Härte werden trainiert.',
    bike: 'Rennnahe Einheiten mit hoher Intensität, aber reduziertem Volumen. Du polierst deine Form.',
    run: 'Rennahe Tempoeinheiten. Du fühlst dich scharf und bereit, das Volumen sinkt leicht.',
    strength: 'Leichtes, knackiges Krafttraining hält die Form, ohne Ermüdung aufzubauen.',
    default: 'Du bist in Topform. Das Volumen sinkt leicht, die Intensität bleibt hoch.',
  },
  Taper: {
    swim: 'Lockere Schwimmeinheiten mit kurzen Impulsen. Du erholst dich und kommst frisch an den Start.',
    bike: 'Kurze, lockere Einheiten mit wenigen kurzen Schubbe. Die Beine sollen frisch bleiben.',
    run: 'Leichte Läufe mit kurzen Tempogalops. Der Körper erholt sich und speichert Energie.',
    strength: 'Nur noch leichte Mobilitäts- und Stabilitätsarbeit. Kein Kraftverlust, volle Erholung.',
    default: 'Du erholst dich und sparst Energie für den Wettkampf. Kurze, lockere Impulse reichen.',
  },
};

function getPhaseExplanation(phase, type) {
  if (!phase || !phaseExplanations[phase]) return '';
  return phaseExplanations[phase][type] || phaseExplanations[phase].default;
}

function synthesizeWeeklySessions(config, phaseScale, experience, focus) {
  const pattern = getWeeklyExercisePattern();
  const sessionsCount = Math.max(1, Math.round((config ? config.sessions : 5) * ((phaseScale + 1) / 2)));
  const totalMinutes = Math.round((config.weeklyVolume * phaseScale) * 60);
  const perSession = Math.max(20, Math.round(totalMinutes / Math.max(1, sessionsCount)));
  const sessions = [];
  for (let i = 0; i < sessionsCount; i++) {
    const type = pattern[i % pattern.length];
    sessions.push({
      type,
      day: weekdays[i % 7],
      minutes: perSession,
      duration: `${perSession} min`,
      timeWindow: 'TBD',
      label: type === 'swim' ? 'Schwimmen' : type === 'bike' ? 'Rad' : type === 'run' ? 'Laufen' : 'Kraft',
      intensity: config.intensity,
      description: `Generische ${type}-Einheit für die Phase`,
    });
  }
  return sessions;
}

function buildPlanUntilEvent(eventDateString, goal, experience, focus, config) {
  const eventDate = new Date(`${eventDateString}T00:00:00`);
  const startWeek = getWeekStart(new Date());
  const eventWeekStart = getWeekStart(eventDate);
  const weeks = [];
  for (let cursor = new Date(startWeek); cursor <= eventWeekStart; cursor.setDate(cursor.getDate() + 7)) {
    const weekStart = new Date(cursor);
    const weekKeys = getWeekDateKeysFrom(weekStart);
    const availability = getAnnualAvailabilityMapForWeek(weekStart);
    const totalMinutes = Object.values(availability).reduce((s, d) => s + (d.minutes || 0), 0);
    const weeksUntil = Math.max(0, Math.ceil((eventDate - weekStart) / (1000 * 60 * 60 * 24 * 7)));
    const phase = getTrainingPhase(weeksUntil);
    const scale = getPhaseScale(phase);

    let weekSessions = [];
    if (totalMinutes >= 60) {
      const availableDays = weekdays.filter((d) => availability[d].minutes > 0);
      weekSessions = buildWeeklyPlan(availableDays, availability, {}, experience, focus, config);
      // filter rest sessions
      weekSessions = weekSessions.filter((s) => s.type !== 'rest');
      // scale by phase
      weekSessions = weekSessions.map((s) => ({ ...s, minutes: Math.max(20, Math.round(s.minutes * scale)), duration: `${Math.max(20, Math.round(s.minutes * scale))} min` }));
    } else {
      weekSessions = synthesizeWeeklySessions(config, scale, experience, focus);
    }

    // Attach actual date keys
    const sessionsByDate = weekSessions.map((s, i) => {
      const dayIndex = weekdays.indexOf(s.day) >= 0 ? weekdays.indexOf(s.day) : (i % 7);
      const dateKey = weekKeys[dayIndex];
      return { date: dateKey, ...s };
    });

    weeks.push({ start: getDateKeyFromDate(weekStart), phase, weeksUntil, sessions: sessionsByDate });
  }

  // render HTML
  const html = weeks.map((w) => {
    const sessionHtml = w.sessions.length
      ? w.sessions.map((s) => `
          <div class="week-session ${s.type}">
            <strong>${s.date} — ${labels[s.day] || s.day}</strong>
            <div>${s.label} • ${s.duration} • ${s.timeWindow}</div>
            <small>${s.description}</small>
          </div>
        `).join('')
      : `<div class="detail-empty">Keine Einheiten für diese Woche</div>`;
    return `
      <div class="period-week-block">
        <h4>Woche ab ${w.start} — Phase: ${w.phase} (${w.weeksUntil} Wochen bis Event)</h4>
        ${sessionHtml}
      </div>
    `;
  }).join('');

  return `<div class="full-plan-until-event">${html}</div>`;
}

function generatePeriodizedPlan(weeksUntil, eventType, levels, daysPerWeek, config) {
  const weeks = Math.max(1, Math.min(12, weeksUntil));
  // allocate phases heuristically
  let taper = weeks >= 1 ? 1 : 0;
  let peak = Math.min(3, Math.floor(weeks * 0.25));
  let build = Math.floor(weeks * 0.45);
  let base = weeks - (taper + peak + build);
  if (base < 0) { base = 0; build = Math.max(0, build + base); }

  const phaseBlocks = [];
  for (let i = 0; i < base; i++) phaseBlocks.push('Base');
  for (let i = 0; i < build; i++) phaseBlocks.push('Build');
  for (let i = 0; i < peak; i++) phaseBlocks.push('Peak');
  for (let i = 0; i < taper; i++) phaseBlocks.push('Taper');

  // fill to length 'weeks' if rounding issues
  while (phaseBlocks.length < weeks) phaseBlocks.unshift('Base');

  const baseVolume = config ? config.weeklyVolume : (goalConfigs[eventType] ? goalConfigs[eventType].weeklyVolume : 8);

  const phaseVolumeScale = { Base: 0.7, Build: 1.0, Peak: 0.95, Taper: 0.6 };

  const rows = phaseBlocks.map((phaseName, idx) => {
    const weekIndex = weeks - idx; // week relative to event (approx)
    const scale = phaseVolumeScale[phaseName] || 1;
    const hours = Math.max(1, Math.round((baseVolume * scale) * 10) / 10);
    const sessions = Math.max(1, Math.round((config ? config.sessions : 5) * scale));

    // discipline time distribution
    const emphasis = (config && config.emphasis) ? config.emphasis : { swim: 0.3, bike: 0.4, run: 0.2, strength: 0.1 };
    const swimH = Math.max(0.25, Math.round((hours * emphasis.swim) * 10) / 10);
    const bikeH = Math.max(0.25, Math.round((hours * emphasis.bike) * 10) / 10);
    const runH = Math.max(0.25, Math.round((hours * emphasis.run) * 10) / 10);

    return `<div class="period-week"><strong>Woche -${weekIndex}</strong> <span class="phase">${phaseName}</span> — ${hours} h, ${sessions} Einheiten — Schwim ${swimH}h · Rad ${bikeH}h · Lauf ${runH}h</div>`;
  });

  return `<div class="period-timeline">
    <h4>Periodisierung (letzte ${weeks} Wochen vor Wettkampf)</h4>
    ${rows.join('')}
  </div>`;
}

function buildAnnualDaySummary(dateKey) {
  const formData = new FormData(plannerForm);
  const goal = formData.get('goal');
  const experience = formData.get('experience');
  const focus = formData.get('focus');
  const config = goalConfigs[goal];
  const dayName = getDayNameForDateKey(dateKey);
  const dayAvailability = annualAvailability[dateKey] || { available: true, windows: [] };
  const windows = Array.isArray(dayAvailability.windows) && dayAvailability.windows.length
    ? dayAvailability.windows
    : getAvailabilityMap()[dayName]?.windows || [];

  const summary = windows.length
    ? windows.map((windowEntry) => `${windowEntry.start}–${windowEntry.end}`).join(' · ')
    : 'Keine Zeit eingetragen';

  const availabilityForDay = { windows, minutes: windows.reduce((sum, windowEntry) => sum + (timeToMinutes(windowEntry.end) - timeToMinutes(windowEntry.start) || 0), 0) };
  const sessions = buildWeeklyPlan([dayName], { [dayName]: availabilityForDay }, {}, experience, focus, config);
  const meaningfulSessions = sessions.filter((session) => session.type !== 'rest');

  return {
    dateLabel: new Date(`${dateKey}T00:00:00`).toLocaleDateString('de-DE', { weekday: 'long', day: '2-digit', month: '2-digit', year: 'numeric' }),
    summary,
    sessions: meaningfulSessions,
    week: getWeekSummaryForDateKey(dateKey),
  };
}

function renderAnnualDayDetail(dateKey) {
  if (!annualDayDetail) return;

  const detail = buildAnnualDaySummary(dateKey);
  const sessionMarkup = detail.sessions.length
    ? detail.sessions
        .map((session) => `
          <li>
            <span class="detail-pill ${session.type}">${session.label}</span>
            <strong>${session.timeWindow}</strong>
            <small>${session.description}</small>
          </li>
        `)
        .join('')
    : '<li class="detail-empty">Für diesen Tag ist noch kein Training eingeplant.</li>';

  const weekMarkup = detail.week
    .map((entry) => {
      const sessionText = entry.sessions.length
        ? entry.sessions.map((session) => `${session.label}: ${session.timeWindow}`).join(' · ')
        : 'Ruhe';
      const windowText = entry.windows.length
        ? entry.windows.map((windowEntry) => `${windowEntry.start}-${windowEntry.end}`).join(' / ')
        : 'kein Zeitfenster';

      return `
        <div class="week-row">
          <strong>${entry.label}</strong>
          <span>${windowText}</span>
          <small>${sessionText}</small>
        </div>
      `;
    })
    .join('');

  annualDayDetail.innerHTML = `
    <div class="annual-detail-card">
      <div class="detail-header">
        <div>
          <p class="section-tag">Ausgewählter Tag</p>
          <h3>${detail.dateLabel}</h3>
        </div>
        <span class="summary-pill">${detail.summary}</span>
      </div>
      <div class="week-overview-box">
        <h4>Woche im Blick</h4>
        ${weekMarkup}
      </div>
      <ul class="detail-list">${sessionMarkup}</ul>
    </div>
  `;
}

function renderAnnualOverview() {
  const refDate = selectedDate ? new Date(`${selectedDate}T00:00:00`) : new Date();
  const refYear = refDate.getFullYear();
  const refMonth = refDate.getMonth();
  const todayKey = getDateKeyFromDate(new Date());
  const monthNames = ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'];
  const weekDayHeaders = ['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So'];

  const formData = new FormData(plannerForm);
  const eventDateVal = formData.get('eventDate');
  let eventDateObj = null;
  if (eventDateVal) {
    const parts = eventDateVal.split('-');
    eventDateObj = new Date(parseInt(parts[0], 10), parseInt(parts[1], 10) - 1, parseInt(parts[2], 10));
  }

  const getPhaseClassForDate = (dateKey) => {
    if (!eventDateObj) return '';
    const parts = dateKey.split('-');
    const d = new Date(parseInt(parts[0], 10), parseInt(parts[1], 10) - 1, parseInt(parts[2], 10));
    const diffMs = eventDateObj - d;
    const weeksUntil = Math.ceil(diffMs / (7 * 86400000));
    if (weeksUntil < 0) return '';
    const phase = getTrainingPhase(weeksUntil);
    if (!phase) return '';
    return `phase-${phase.toLowerCase()}`;
  };

  const renderMonth = (monthIndex) => {
    const daysInMonth = new Date(refYear, monthIndex + 1, 0).getDate();
    const firstWeekday = (new Date(refYear, monthIndex, 1).getDay() + 6) % 7; // Montag zuerst
    const cells = [];
    for (let i = 0; i < firstWeekday; i += 1) {
      cells.push('<span class="day-cell blank"></span>');
    }
    for (let day = 1; day <= daysInMonth; day += 1) {
      const dateKey = `${refYear}-${String(monthIndex + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
      const entry = annualAvailability[dateKey];
      const hasTime = entry && entry.available && Array.isArray(entry.windows) && entry.windows.length > 0;
      const blocked = entry && !entry.available;
      const classes = [
        blocked ? 'blocked' : '',
        hasTime ? 'has-time' : '',
        dateKey === todayKey ? 'today' : '',
        dateKey === selectedDate ? 'selected' : '',
        getPhaseClassForDate(dateKey),
      ].filter(Boolean).join(' ');
      cells.push(`<button type="button" class="day-cell ${classes}" data-date="${dateKey}" aria-label="Tag ${dateKey}">${day}</button>`);
    }
    const header = weekDayHeaders.map((d) => `<span class="dow">${d}</span>`).join('');
    return `
      <div class="month-card ${monthIndex === refMonth ? 'current' : ''}">
        <div class="month-head">
          <h4>${monthNames[monthIndex]}</h4>
          <span class="month-year">${refYear}</span>
        </div>
        <div class="month-days">${header}${cells.join('')}</div>
      </div>
    `;
  };

  const gridHtml = Array.from({ length: 12 }, (_, index) => renderMonth(index)).join('');
  if (annualGrid) annualGrid.innerHTML = gridHtml;
  if (annualGridModal) annualGridModal.innerHTML = gridHtml;

  document.querySelectorAll('.day-cell[data-date]').forEach((button) => {
    button.addEventListener('click', () => {
      const { date } = button.dataset;
      if (!date) return;
      selectedDate = date;
      openAnnualEditor(date);
      renderAnnualOverview();
      renderWeekStrip(date);
      scrollSelectedIntoView();
    });
  });
}

function openAnnualEditor(dateKey) {
  if (!annualEditor) return;

  const entry = annualAvailability[dateKey] || { available: true, windows: [] };
  const windows = entry.available !== false && Array.isArray(entry.windows) && entry.windows.length
    ? entry.windows.map((w) => ({ ...w }))
    : [];
  const dateObj = new Date(`${dateKey}T00:00:00`);

  const windowRowHtml = (windowEntry, index) => `
    <div class="annual-window-row">
      <span class="window-label">Zeitraum ${index + 1}</span>
      <div class="window-inputs">
        <input type="time" class="annual-slot" data-slot="start" value="${windowEntry.start || '08:00'}" />
        <span class="window-sep">bis</span>
        <input type="time" class="annual-slot" data-slot="end" value="${windowEntry.end || '09:30'}" />
      </div>
      <button type="button" class="window-remove" data-remove="${index}" aria-label="Zeitfenster entfernen">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg>
      </button>
    </div>
  `;

  const collectWindows = () => Array.from(document.querySelectorAll('.annual-window-row')).map((row) => {
    const start = row.querySelector('.annual-slot[data-slot="start"]')?.value;
    const end = row.querySelector('.annual-slot[data-slot="end"]')?.value;
    const startMinutes = timeToMinutes(start);
    const endMinutes = timeToMinutes(end);
    if (start && end && startMinutes !== null && endMinutes !== null && endMinutes > startMinutes) {
      return { start, end };
    }
    return null;
  }).filter(Boolean);

  const wireEditor = () => {
    const toggle = document.getElementById('annualAvailableToggle');
    const saveButton = document.getElementById('saveAnnualEntry');
    const addBtn = document.getElementById('addWindowBtn');

    const updateAvailabilityState = () => {
      const available = toggle.checked;
      document.querySelectorAll('.annual-slot').forEach((input) => {
        input.disabled = !available;
      });
    };

    toggle.addEventListener('change', updateAvailabilityState);
    updateAvailabilityState();

    if (addBtn) {
      addBtn.addEventListener('click', () => {
        windows.push({ start: '18:00', end: '19:00' });
        renderEditor();
      });
    }

    document.querySelectorAll('.window-remove').forEach((btn) => {
      btn.addEventListener('click', () => {
        const index = parseInt(btn.dataset.remove, 10);
        if (Number.isInteger(index)) windows.splice(index, 1);
        renderEditor();
      });
    });

    saveButton.addEventListener('click', () => {
      const available = toggle.checked;
      const windowEntries = collectWindows();
      if (available && windowEntries.length) {
        annualAvailability[dateKey] = { available: true, windows: windowEntries };
      } else {
        annualAvailability[dateKey] = { available: false, windows: [] };
      }
      renderAnnualOverview();
      renderAnnualDayDetail(dateKey);
      renderWeekStrip(dateKey);
      renderAvailabilityOverview();
      persistAvailability();
      generatePlanFromForm();
      showToast('Zeiten gespeichert – dein Plan wurde aktualisiert.');
    });
  };

  const renderEditor = () => {
    annualEditor.innerHTML = `
      <div class="annual-editor-card">
        <div class="editor-header">
          <div class="editor-date">
            <strong>${dateObj.toLocaleDateString('de-DE', { weekday: 'long', day: '2-digit', month: '2-digit', year: 'numeric' })}</strong>
            <span class="editor-key">${dateKey}</span>
          </div>
          <label class="toggle-row">
            <input id="annualAvailableToggle" type="checkbox" ${entry.available !== false ? 'checked' : ''} />
            <span>Zeit vorhanden</span>
          </label>
        </div>
        <div class="window-list">
          ${windows.length
            ? windows.map(windowRowHtml).join('')
            : '<div class="window-empty">Noch keine Zeitfenster – füge unten eins hinzu.</div>'}
        </div>
        <div class="window-actions">
          <button type="button" id="addWindowBtn" class="ghost-btn mini-btn">+ Zeitfenster</button>
        </div>
        <button type="button" id="saveAnnualEntry" class="primary-btn compact">Zeiten speichern</button>
      </div>
    `;
    wireEditor();
  };

  selectedDate = dateKey;
  renderEditor();
  renderAnnualDayDetail(dateKey);
  renderWeekStrip(dateKey);

  // Einzel-Tag-Navigation
  const prevBtn = document.getElementById('prevDayBtn');
  const nextBtn = document.getElementById('nextDayBtn');
  const todayBtn = document.getElementById('todayBtn');
  if (prevBtn) prevBtn.onclick = () => { navigateDay(dateKey, -1); };
  if (nextBtn) nextBtn.onclick = () => { navigateDay(dateKey, 1); };
  if (todayBtn) todayBtn.onclick = () => {
    const todayKey = getDateKeyFromDate(new Date());
    selectedDate = todayKey;
    openAnnualEditor(todayKey);
    renderAnnualOverview();
    scrollSelectedIntoView();
  };
}

function getCurrentWeekIndex() {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 1);
  const diff = now - start;
  return Math.ceil((diff / (1000 * 60 * 60 * 24) + start.getDay() + 1) / 7);
}

function getWeekStart(date) {
  const d = new Date(date);
  const day = d.getDay();
  const diff = day === 0 ? -6 : 1 - day; // Monday
  d.setDate(d.getDate() + diff);
  d.setHours(0, 0, 0, 0);
  return d;
}

function getWeekDateKeysFrom(startDate) {
  const base = new Date(startDate);
  const keys = [];
  for (let i = 0; i < 7; i++) {
    const d = new Date(base);
    d.setDate(base.getDate() + i);
    keys.push(getDateKeyFromDate(d));
  }
  return keys;
}

function getAnnualAvailabilityMapForWeek(weekStartDate) {
  const map = {};
  const weekKeys = getWeekDateKeysFrom(weekStartDate);
  weekdays.forEach((day, index) => {
    const dateKey = weekKeys[index];
    const entry = annualAvailability[dateKey];
    if (entry && entry.available && Array.isArray(entry.windows) && entry.windows.length) {
      const windows = entry.windows.map((w) => ({ start: w.start, end: w.end, minutes: (timeToMinutes(w.end) - timeToMinutes(w.start)) }));
      const minutes = windows.reduce((s, w) => s + (w.minutes || 0), 0);
      map[day] = { windows: windows.map(({ start, end }) => ({ start, end })), minutes };
    } else {
      map[day] = { windows: [], minutes: 0 };
    }
  });
  return map;
}

function getWeeklyExercisePattern() {
  const weekIndex = getCurrentWeekIndex();
  return ['swim', 'bike', 'run', 'strength', 'bike', 'run', 'swim'];
}

function loadDemoPlan() {
  const demoWindows = {
    Mon: [['06:30', '07:45'], ['18:00', '19:30']],
    Tue: [['06:00', '07:10'], ['18:15', '19:00']],
    Wed: [['05:45', '07:15']],
    Thu: [['18:30', '20:00'], ['06:15', '07:00']],
    Fri: [['06:00', '07:30']],
    Sat: [['07:00', '09:00'], ['17:00', '17:45']],
    Sun: [['08:00', '10:00']],
  };

  // Populate demo availability into `annualAvailability` for the next 12 weeks
  const start = getWeekStart(new Date());
  for (let w = 0; w < 12; w++) {
    const weekStart = new Date(start);
    weekStart.setDate(start.getDate() + w * 7);
    const weekDates = getWeekDateKeysFrom(weekStart);
    weekdays.forEach((day, idx) => {
      const windows = demoWindows[day] || [];
      const dateKey = weekDates[idx];
      const windowEntries = windows.map(([s, e]) => ({ start: s, end: e })).filter(Boolean);
      if (windowEntries.length) annualAvailability[dateKey] = { available: true, windows: windowEntries };
    });
  }

  document.getElementById('goal').value = 'olympic';
  document.getElementById('experience').value = 'intermediate';
  document.getElementById('focus').value = 'endurance';
  document.getElementById('athleteName').value = 'Mia';

  renderAvailabilityOverview();
  generatePlanFromForm();
  persistAvailability();
}

function buildWeeklyPlan(availableDays, availability, blockedMap, experience, focus, config, performanceData) {
  const pattern = getWeeklyExercisePattern();
  const schedule = [];

  weekdays.forEach((day, dayIndex) => {
    const dayAvailability = availability[day];
    const freeSegments = getFreeSegments(dayAvailability);

    if (!freeSegments.length) {
      schedule.push({ day, type: 'rest', label: 'Ruhe', description: 'Regeneration und Mobilität', timeWindow: 'Kein Training', duration: '0 min', intensity: 'Recovery', minutes: 0 });
      return;
    }

    let sessionCounter = 0;
    freeSegments.forEach((segment) => {
      const totalSegmentMinutes = segment.end - segment.start;
      const maxSessions = totalSegmentMinutes >= 180 ? 3 : totalSegmentMinutes >= 110 ? 2 : 1;
      const baseDuration = Math.max(35, Math.floor(totalSegmentMinutes / maxSessions));
      let cursor = segment.start;

      for (let sessionIndex = 0; sessionIndex < maxSessions && cursor + baseDuration <= segment.end; sessionIndex += 1) {
        const type = pattern[(dayIndex + sessionCounter + sessionIndex) % pattern.length];
        const sessionMinutes = Math.min(baseDuration, segment.end - cursor);
        const startTime = minutesToTime(cursor);
        const endTime = minutesToTime(cursor + sessionMinutes);
        schedule.push(buildSession(type, day, sessionMinutes, startTime, endTime, experience, focus, config, performanceData));
        cursor += sessionMinutes;
        sessionCounter += 1;
      }
    });
  });

  return schedule;
}

function generatePlanFromForm() {
  const formData = new FormData(plannerForm);
  const goal = formData.get('goal');
  const experience = formData.get('experience');
  const focus = formData.get('focus');
  const name = (formData.get('athleteName') || 'Athlet').toString().trim() || 'Athlet';
  const eventName = (formData.get('eventName') || '').toString().trim();
  const eventDate = formData.get('eventDate');
  const eventType = formData.get('eventType') || goal;
  const availability = getAnnualAvailabilityMap();
  const blocked = getBlockedWindowMap();
  const availableDays = weekdays.filter((day) => availability[day].minutes > 0);
  const config = goalConfigs[goal];

  const performanceData = {
    swimTime: (formData.get('swimTime') || '').toString().trim(),
    ftpWatts: parseInt(formData.get('ftpWatts') || '0', 10) || null,
    fiveKTime: (formData.get('fiveKTime') || '').toString().trim(),
    maxHR: parseInt(formData.get('maxHR') || '0', 10) || null,
    restHR: parseInt(formData.get('restHR') || '0', 10) || null,
  };

  // update charts
  try {
    renderDisciplinePie((config && config.emphasis) || { swim: 0.3, bike: 0.4, run: 0.2, strength: 0.1 });
    renderWeeklyVolumeChart(availability);
  } catch (err) {
    // fail silently but keep plan generation
    console.warn('Chart render failed', err);
  }

  if (!availableDays.length && !eventDate) {
    weekPlanList.innerHTML = '<div class="empty-state"><strong>Noch kein Plan möglich.</strong><br>Bitte trage im Jahreskalender (oben rechts) mindestens ein Zeitfenster ein oder setze ein Wettkampfdatum.</div>';
    weeklyVolume.textContent = '0 h';
    workoutCount.textContent = '0';
    focusMatch.textContent = '-';
    planTitle.textContent = 'Kein Zeitfenster ausgewählt';
    return;
  }

  const allWeekSessions = buildWeeklyPlan(availableDays, availability, blocked, experience, focus, config, performanceData);

  // If an event date is set, compute weeks until event and scale sessions
  let weeksUntil = null;
  let phase = null;
  if (eventDate) {
    weeksUntil = getWeeksUntilEvent(eventDate);
    phase = getTrainingPhase(weeksUntil);
  }

  // create a 12-week periodization block if event set
  if (eventDate && weeksUntil !== null) {
    const levels = { swim: formData.get('swimLevel') || 'intermediate', bike: formData.get('bikeLevel') || 'intermediate', run: formData.get('runLevel') || 'intermediate' };
    const daysPerWeek = Math.max(1, parseInt(formData.get('trainingDays') || 5, 10));
    const timelineHtml = generatePeriodizedPlan(Math.min(weeksUntil, 52), eventType || goal, levels, daysPerWeek, config);
    if (eventPlanTimeline) eventPlanTimeline.innerHTML = timelineHtml;
    // build full weekly schedule until event
    const fullHtml = buildPlanUntilEvent(eventDate, goal, experience, focus, config);
    if (eventPlanTimeline) eventPlanTimeline.innerHTML = timelineHtml + fullHtml;
  } else if (eventPlanTimeline) {
    eventPlanTimeline.innerHTML = '';
  }
  const timelinePanel = document.getElementById('timelinePanel');
  if (timelinePanel) timelinePanel.classList.toggle('hidden', !(eventDate && weeksUntil !== null));
  let plannedSessions = allWeekSessions.filter((session) => session.type !== 'rest');

  // apply discipline filter from pie chart if set
  if (disciplineFilter) {
    plannedSessions = plannedSessions.filter((s) => s.type === disciplineFilter);
  }

  if (phase) {
    const scale = getPhaseScale(phase);
    plannedSessions = plannedSessions.map((session) => {
      const scaled = Math.max(20, Math.round(session.minutes * scale));
      const explanation = getPhaseExplanation(phase, session.type);
      return { ...session, minutes: scaled, duration: `${scaled} min`, phase, phaseExplanation: explanation };
    });
  }
  const sessions = plannedSessions.slice(0, Math.min(config.sessions + 2, plannedSessions.length));
  const totalMinutes = sessions.reduce((sum, session) => sum + session.minutes, 0);
  const totalHours = totalMinutes / 60;

  // Store plan data for export
  currentPlanData = {
    athlete: name,
    goal: config.label,
    goalKey: goal,
    eventName: eventName || null,
    eventDate: eventDate || null,
    eventType: eventType,
    phase: phase || null,
    weeksUntil: weeksUntil,
    sessions: sessions,
    workoutLibrary: Object.fromEntries(Object.keys(workoutLibrary).map((cat) => [cat, workoutLibrary[cat].map((ex) => ({ name: ex.name, focus: ex.focus, benefit: ex.benefit, sets: ex.sets, equipment: ex.equipment || null, howto: ex.howto }))]))
  };

  const selectedFocus = focus === 'performance'
    ? 'Leistung + Power'
    : focus === 'technique'
      ? 'Technik'
      : focus === 'recovery'
        ? 'Erholung'
        : 'Ausdauer';

  planTitle.textContent = eventName ? `${name}s Vorbereitung: ${eventName}` : `${name}s ${config.label}-Plan`;
  if (eventDate) {
    const phaseExplainer = phase ? ` — ${getPhaseExplanation(phase, 'default')}` : '';
    eventSummary.textContent = `${eventName || eventType} in ${weeksUntil} Wochen · Phase: ${phase}${phaseExplainer}`;
  } else {
    eventSummary.textContent = 'Kein Ziel gesetzt';
  }
  weeklyVolume.textContent = `${totalHours.toFixed(totalHours >= 10 ? 0 : 1).replace('.0', '')} h`;
  workoutCount.textContent = String(sessions.length);
  focusMatch.textContent = selectedFocus;
  renderDisciplineBreakdown(sessions);

  weekPlanList.innerHTML = (() => {
    const sorted = sessions.sort((a, b) => weekdays.indexOf(a.day) - weekdays.indexOf(b.day));
    const grouped = {};
    sorted.forEach((s) => { (grouped[s.day] = grouped[s.day] || []).push(s); });
    return Object.keys(grouped).map((day) => `
      <div class="day-group">
        <h4 class="day-group-header">${labels[day] || day}</h4>
        ${grouped[day].map((session, si) => {
          const uid = `session-${session.day}-${si}`;
          const hasDetail = session.workoutDetail && session.workoutDetail.main;
          const zonesHtml = (session.workoutDetail && session.workoutDetail.zones && session.workoutDetail.zones.length)
            ? `<div class="zone-references">${session.workoutDetail.zones.map((z) => `<div class="zone-ref">${z}</div>`).join('')}</div>` : '';
          const detailHtml = hasDetail ? `
            <div class="session-workout-detail" role="button" tabindex="0" aria-expanded="false" data-uid="${uid}">
              <div class="session-workout-body">
                ${session.workoutDetail.main.map((step) => `<div class="workout-step"><strong>${step.label}:</strong> ${step.text}</div>`).join('')}
                ${zonesHtml}
              </div>
              <span class="workout-detail-toggle"><span class="workout-detail-label">Workout Details</span><span class="ex-howto-chevron"></span></span>
            </div>` : '';
          return `
          <article class="day-plan-card ${session.type}">
            <header>
              <div class="card-title-row">
                <span class="disc-icon ${session.type}">${disciplineIcons[session.type] || ''}</span>
                <div>
                  <h4>${session.timeWindow}</h4>
                  <span class="session-summary">${session.summary || session.description}</span>
                </div>
              </div>
              <span class="pill ${session.type}">${session.label} · ${session.duration}</span>
            </header>
            <div class="session-meta">
              <span>${session.intensity}</span>
            </div>
            ${session.phaseExplanation ? `<p class="phase-explanation">${session.phaseExplanation}</p>` : ''}
            ${detailHtml}
            <button type="button" class="complete-btn ${session.completed ? 'done' : ''}" data-session-id="${session.id || ''}" aria-label="Als erledigt markieren">${session.completed ? '✓ Erledigt' : '○ Erledigen'}</button>
          </article>`;
        }).join('')}
      </div>
    `).join('');
  })();

  renderStrengthExercises();
  bindWorkoutDetailToggles();
  renderProgressChart();
}

function renderStrengthExercises() {
  // Render grouped workout categories for quick reference
  const sections = [];
  const categoryTitles = {
    strength: 'Kraft',
    swim: 'Schwimmen',
    bike: 'Rad',
    run: 'Laufen',
    brick: 'Rad + Lauf',
    mobility: 'Mobilität',
    nutrition: 'Ernährung',
  };

  Object.keys(workoutLibrary).forEach((cat, index) => {
    const items = workoutLibrary[cat];
    const title = categoryTitles[cat] || cat.charAt(0).toUpperCase() + cat.slice(1);
    const expanded = index === 0;
    const html = items
      .map((ex) => `
        <article class="exercise-card">
          <div class="meta">
            <span>${ex.focus || ''}</span>
            <span>${ex.sets || ''}</span>
          </div>
          <h4>${ex.name}</h4>
          <p>${ex.benefit || ''}${ex.equipment ? ' • Equipment: ' + ex.equipment : ''}</p>
          ${ex.howto ? `
          <div class="ex-howto" role="button" tabindex="0" aria-expanded="false">
            <div class="ex-howto-body"><strong>So geht's:</strong> ${ex.howto}</div>
            <span class="ex-howto-toggle"><span class="ex-howto-label">Beschreibung öffnen</span><span class="ex-howto-chevron"></span></span>
          </div>` : ''}
        </article>
      `)
      .join('');

    sections.push(`
      <section class="exercise-section">
          <button type="button" class="collapsible-toggle ex-cat-header${expanded ? ' open' : ''}" aria-expanded="${expanded}" aria-controls="ex-grid-${cat}">
          <span class="collapsible-title ex-cat-title"><span class="ex-cat-dot"></span>${title}<span class="ex-cat-count">${items.length}</span></span>
          <span class="collapsible-label">${expanded ? 'Ausblenden' : 'Anzeigen'}</span>
          <span class="collapsible-chevron"></span>
        </button>
        <div class="ex-cat-body${expanded ? '' : ' hidden'}" id="ex-grid-${cat}">
          <div class="exercise-grid">${html}</div>
        </div>
      </section>
    `);
  });

  strengthList.innerHTML = sections.join('');

  if (!strengthList.dataset.expandBound) {
    strengthList.dataset.expandBound = '1';
    strengthList.addEventListener('click', handleStrengthExpand);
    strengthList.addEventListener('keydown', handleStrengthExpand);
  }
}

function handleStrengthExpand(event) {
  const box = event.target.closest('.ex-howto');
  if (!box) return;
  if (event.type === 'keydown' && event.key !== 'Enter' && event.key !== ' ') return;
  if (event.type === 'keydown') event.preventDefault();

  const isOpen = box.classList.toggle('open');
  box.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  const label = box.querySelector('.ex-howto-label');
  if (label) label.textContent = isOpen ? 'Beschreibung schließen' : 'Beschreibung öffnen';
}

function handleCollapsibleToggle(event) {
  const toggle = event.target.closest('.collapsible-toggle');
  if (!toggle) return;
  const controls = toggle.getAttribute('aria-controls');
  const body = controls ? document.getElementById(controls) : null;
  if (!body) return;

  const isOpen = body.classList.contains('hidden');
  toggle.classList.toggle('open', isOpen);
  toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  body.classList.toggle('hidden', !isOpen);
  const label = toggle.querySelector('.collapsible-label');
  if (label) label.textContent = isOpen ? 'Ausblenden' : 'Anzeigen';
}

// Workout detail toggle (expand/collapse workout steps)
function handleWorkoutDetailToggle(event) {
  const box = event.target.closest('.session-workout-detail');
  if (!box) return;
  if (event.type === 'keydown' && event.key !== 'Enter' && event.key !== ' ') return;
  if (event.type === 'keydown') event.preventDefault();
  const isOpen = box.classList.toggle('open');
  box.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  const label = box.querySelector('.workout-detail-label');
  if (label) label.textContent = isOpen ? 'Workout verbergen' : 'Workout Details';
}

// Bind workout detail toggles (delegated on weekPlanList)
function bindWorkoutDetailToggles() {
  const el = document.getElementById('weekPlanList');
  if (!el || el.dataset.detailBound) return;
  el.dataset.detailBound = '1';
  el.addEventListener('click', handleWorkoutDetailToggle);
  el.addEventListener('keydown', handleWorkoutDetailToggle);
}

function buildSession(type, day, sessionMinutes, startTime, endTime, experience, focus, config, performanceData) {
  const duration = `${sessionMinutes} min`;
  const labelMap = { swim: 'Schwimmen', bike: 'Rad', run: 'Laufen', strength: 'Kraft' };

  const detail = generateWorkoutDetail(type, experience, focus, sessionMinutes, performanceData);

  return {
    id: `${type}-${day}-${startTime.replace(':', '')}`,
    type,
    day,
    duration,
    minutes: sessionMinutes,
    label: labelMap[type] || type,
    timeWindow: `${startTime}–${endTime}`,
    intensity: detail.zoneLabel,
    summary: detail.summary,
    description: detail.summary,
    workoutDetail: detail,
  };
}

function generateWorkoutDetail(type, experience, focus, minutes, performanceData) {
  const pd = performanceData || {};
  const ratio = Math.max(0.1, minutes / 60);
  const warmupMin = Math.round(Math.min(10, Math.max(5, minutes * 0.12)));
  const cooldownMin = Math.round(Math.min(10, Math.max(5, minutes * 0.1)));
  const mainMin = Math.max(10, minutes - warmupMin - cooldownMin);

  const templates = {
    swim: {
      beginner: {
        endurance: {
          summary: `Technik-Schwimmen: Drills und gleichmäßige Züge`,
          main: [
            { label: 'Aufwärmen', text: `${warmupMin} min locker schwimmen, lockerer Beinschlag` },
            { label: 'Drills', text: `${Math.round(mainMin * 0.3)} min Catch-Up Drill (25 m Sport, 25 m normal), Fokus auf lange Züge` },
            { label: 'Hauptteil', text: `${Math.round(mainMin * 0.5)} min gleichmäßig im lockeren Tempo, 100 m-Sets, ca. 2:00–2:20 / 100 m` },
            { label: 'Cool-down', text: `${cooldownMin} min locker Rückenschwimmen und Beinschlag` },
          ],
          zone: 'GA1', zoneLabel: 'Locker',
        },
        performance: {
          summary: `Tempo-Einheit: 4 × 100 m mit kontrolliertem Tempo`,
          main: [
            { label: 'Aufwärmen', text: `${warmupMin} min lockeres Schwimmen mit Fokus auf Wasserlage` },
            { label: 'Hauptteil', text: `4 × 100 m im moderaten Tempo (ca. 1:55–2:10 / 100 m), 30 s Pause dazwischen` },
            { label: 'Cool-down', text: `${cooldownMin} min locker schwimmen, Technik-Drills` },
          ],
          zone: 'GA2', zoneLabel: 'Moderat',
        },
        technique: {
          summary: `Technik-Fokus: Ellbogenhöhe und Catch-Verbesserung`,
          main: [
            { label: 'Aufwärmen', text: `${warmupMin} min lockeres Schwimmen` },
            { label: 'Drills', text: `4 × 25 m Fist Drill + 4 × 25 m Fingertip Drag, Fokus auf hohen Ellbogen` },
            { label: 'Hauptteil', text: `${Math.round(mainMin * 0.5)} min Sculling-Übungen, langsamer Tempo mit viel Druck` },
            { label: 'Cool-down', text: `${cooldownMin} min locker schwimmen` },
          ],
          zone: 'Technik', zoneLabel: 'Technik',
        },
        recovery: {
          summary: `Lockeres Schwimmen: Regeneration und Mobilität`,
          main: [
            { label: 'Aufwärmen', text: `${warmupMin} min sehr lockeres Schwimmen` },
            { label: 'Hauptteil', text: `${mainMin} min locker im GA1, 100 m-Sets ohne Pause-Zwang, entspannt` },
            { label: 'Cool-down', text: `${cooldownMin} min Rückenschwimmen und Strecken` },
          ],
          zone: 'GA1', zoneLabel: 'Regeneration',
        },
      },
      intermediate: {
        endurance: {
          summary: `Ausdauer-Schwimmen: 6 × 100 m mit gleichmäßigem Tempo`,
          main: [
            { label: 'Aufwärmen', text: `${warmupMin} min: 200 m locker + 4 × 50 m Drills (Catch-Up, Fingertip Drag)` },
            { label: 'Hauptteil', text: `6 × 100 m im GA2-Tempo (ca. 1:45–2:00 / 100 m), 20 s Pause. Letzter Satz 5 s schneller.` },
            { label: 'Cool-down', text: `${cooldownMin} min locker schwimmen + Beinschlag` },
          ],
          zone: 'GA2', zoneLabel: 'Ausdauer',
        },
        performance: {
          summary: `Tempo-Intervalle: 4 × 200 m @ Wettkampftempo`,
          main: [
            { label: 'Aufwärmen', text: `${warmupMin} min: 300 m locker + 4 × 25 m Progression` },
            { label: 'Hauptteil', text: `4 × 200 m im Wettkampftempo (ca. 1:40–1:55 / 100 m), 30 s Pause. Ziel: gleichmäßig von Satz 1 bis 4.` },
            { label: 'Cool-down', text: `${cooldownMin} min locker + Technik-Drills` },
          ],
          zone: 'WS', zoneLabel: 'Schwelle',
        },
        technique: {
          summary: `Technik-Intervalle: Catch und Rotation verfeinern`,
          main: [
            { label: 'Aufwärmen', text: `${warmupMin} min lockeres Schwimmen` },
            { label: 'Drills', text: `4 × 50 m 6-Kick Switch (Seitenlage, 6 Kicks pro Seite)` },
            { label: 'Hauptteil', text: `4 × 100 m mit Fokus auf hohen Ellbogen und sauberen Catch, moderates Tempo` },
            { label: 'Cool-down', text: `${cooldownMin} min locker schwimmen` },
          ],
          zone: 'Technik', zoneLabel: 'Technik',
        },
        recovery: {
          summary: `Lockeres Schwimmen: aktive Erholung`,
          main: [
            { label: 'Aufwärmen', text: `${warmupMin} min sehr lockeres Schwimmen` },
            { label: 'Hauptteil', text: `${mainMin} min locker im GA1, 100 m-Sets, entspannt und rhythmisch` },
            { label: 'Cool-down', text: `${cooldownMin} min Rückenschwimmen + Strecken` },
          ],
          zone: 'GA1', zoneLabel: 'Regeneration',
        },
      },
      advanced: {
        endurance: {
          summary: `Lange Ausdauer: 8 × 100 m @ gleichmäßigem Pace`,
          main: [
            { label: 'Aufwärmen', text: `${warmupMin} min: 400 m locker + 4 × 50 m Progression` },
            { label: 'Hauptteil', text: `8 × 100 m im GA2-Tempo (ca. 1:35–1:50 / 100 m), 15 s Pause. Gleichmäßigkeit über alles.` },
            { label: 'Cool-down', text: `${cooldownMin} min locker + Beinschlag` },
          ],
          zone: 'GA2', zoneLabel: 'Ausdauer',
        },
        performance: {
          summary: `Threshold-Schwimmen: 5 × 200 m @ Schwelle`,
          main: [
            { label: 'Aufwärmen', text: `${warmupMin} min: 400 m locker + 4 × 50 m Staffel` },
            { label: 'Hauptteil', text: `5 × 200 m an der Schwelle (ca. 1:30–1:45 / 100 m), 25 s Pause. Letzter Satz: versuchen, 2–3 s schneller.` },
            { label: 'Cool-down', text: `${cooldownMin} min locker + Technik` },
          ],
          zone: 'SCHW', zoneLabel: 'Schwelle',
        },
        technique: {
          summary: `Kraft-Schwimmen: Paddles + Power-Drills`,
          main: [
            { label: 'Aufwärmen', text: `${warmupMin} min lockeres Schwimmen` },
            { label: 'Kraft', text: `4 × 100 m mit Paddles im moderaten Tempo, Fokus auf langen Zug` },
            { label: 'Speed', text: `6 × 50 m Sprint (ca. 70–80 %), 45 s Pause, hoher Ellbogen` },
            { label: 'Cool-down', text: `${cooldownMin} min locker schwimmen` },
          ],
          zone: 'Kraft', zoneLabel: 'Kraft',
        },
        recovery: {
          summary: `Lockeres Schwimmen: Regeneration`,
          main: [
            { label: 'Aufwärmen', text: `${warmupMin} min sehr lockeres Schwimmen` },
            { label: 'Hauptteil', text: `${mainMin} min locker im GA1, rhythmisch und entspannt` },
            { label: 'Cool-down', text: `${cooldownMin} min Rückenschwimmen + Strecken` },
          ],
          zone: 'GA1', zoneLabel: 'Regeneration',
        },
      },
    },
    bike: {
      beginner: {
        endurance: {
          summary: `Grundlage:锁ere Fahrt mit Kadenzarbeit`,
          main: [
            { label: 'Aufwärmen', text: `${warmupMin} min leichtes Treten, 90–100 U/min Kadenz` },
            { label: 'Hauptteil', text: `${mainMin} min锁ere Fahrt im GA1, gleichmäßig, Kadenz 85–95 U/min` },
            { label: 'Cool-down', text: `${cooldownMin} min lockeres Ausrollen` },
          ],
          zone: 'GA1', zoneLabel: 'Locker',
        },
        performance: {
          summary: `Tempo-Einheit: 3 × 8 min @ moderatem Tempo`,
          main: [
            { label: 'Aufwärmen', text: `${warmupMin} min leichtes Treten` },
            { label: 'Hauptteil', text: `3 × 8 min im moderaten Tempo (RPE 5–6), 3 min locker dazwischen` },
            { label: 'Cool-down', text: `${cooldownMin} min lockeres Ausrollen` },
          ],
          zone: 'GA2', zoneLabel: 'Moderat',
        },
        technique: {
          summary: `Kadenz-Drills: Tritt aufbessern`,
          main: [
            { label: 'Aufwärmen', text: `${warmupMin} min lockeres Treten` },
            { label: 'Drills', text: `3 × 3 min bei 100–110 U/min (leichter Gang), 2 min locker` },
            { label: 'Hauptteil', text: `${Math.round(mainMin * 0.4)} min lockere Fahrt mit bewusst runden Tritt` },
            { label: 'Cool-down', text: `${cooldownMin} min lockeres Ausrollen` },
          ],
          zone: 'Technik', zoneLabel: 'Technik',
        },
        recovery: {
          summary: `Lockere Runde: Regeneration`,
          main: [
            { label: 'Aufwärmen', text: `${warmupMin} min sehr lockeres Treten` },
            { label: 'Hauptteil', text: `${mainMin} min lockere Fahrt im GA1, kein Druck` },
            { label: 'Cool-down', text: `${cooldownMin} min lockeres Ausrollen` },
          ],
          zone: 'GA1', zoneLabel: 'Regeneration',
        },
      },
      intermediate: {
        endurance: {
          summary: `Grundlage:锁ere Fahrt mit Kadenz-Zielen`,
          main: [
            { label: 'Aufwärmen', text: `${warmupMin} min lockeres Treten, 90–100 U/min` },
            { label: 'Hauptteil', text: `${mainMin} min锁ere Fahrt im GA1, Kadenz 88–95 U/min, gleichmäßig` },
            { label: 'Cool-down', text: `${cooldownMin} min lockeres Ausrollen` },
          ],
          zone: 'GA1', zoneLabel: 'Locker',
        },
        performance: {
          summary: `Sweet-Spot: 3 × 10 min @ 88–94 % FTP`,
          main: [
            { label: 'Aufwärmen', text: `${warmupMin} min lockeres Treten + 2 × 1 min leicht progressive Kadenz` },
            { label: 'Hauptteil', text: `3 × 10 min im Sweet-Spot (88–94 % FTP, RPE 7), 5 min locker dazwischen` },
            { label: 'Cool-down', text: `${cooldownMin} min lockeres Ausrollen` },
          ],
          zone: 'SS', zoneLabel: 'Sweet Spot',
        },
        technique: {
          summary: `Kadenz-Training: Einbein-Drills und schnelle Umdrehungen`,
          main: [
            { label: 'Aufwärmen', text: `${warmupMin} min lockeres Treten` },
            { label: 'Drills', text: `4 × 1 min Einbein-Pedalieren (pro Seite), 1 min locker` },
            { label: 'Hauptteil', text: `3 × 3 min bei 100–110 U/min im leichten Gang, Fokus auf runden Tritt` },
            { label: 'Cool-down', text: `${cooldownMin} min lockeres Ausrollen` },
          ],
          zone: 'Technik', zoneLabel: 'Technik',
        },
        recovery: {
          summary: `Lockere Runde: aktive Erholung`,
          main: [
            { label: 'Aufwärmen', text: `${warmupMin} min sehr lockeres Treten` },
            { label: 'Hauptteil', text: `${mainMin} min lockere Fahrt im GA1, kein Druck` },
            { label: 'Cool-down', text: `${cooldownMin} min lockeres Ausrollen` },
          ],
          zone: 'GA1', zoneLabel: 'Regeneration',
        },
      },
      advanced: {
        endurance: {
          summary: `Lange锁ere Fahrt: aerobe Grundlage`,
          main: [
            { label: 'Aufwärmen', text: `${warmupMin} min lockeres Treten` },
            { label: 'Hauptteil', text: `${mainMin} min锁ere Fahrt im GA1 (60–75 % FTP), Kadenz 88–95 U/min` },
            { label: 'Cool-down', text: `${cooldownMin} min lockeres Ausrollen` },
          ],
          zone: 'GA1', zoneLabel: 'Locker',
        },
        performance: {
          summary: `Threshold-Intervalle: 2 × 20 min @ FTP`,
          main: [
            { label: 'Aufwärmen', text: `${warmupMin} min lockeres Treten + 3 × 1 min progressives Anfahren` },
            { label: 'Hauptteil', text: `2 × 20 min bei FTP (RPE 8), 8 min locker dazwischen. Konstantes Tempo, kein Drücken.` },
            { label: 'Cool-down', text: `${cooldownMin} min lockeres Ausrollen` },
          ],
          zone: 'SCHW', zoneLabel: 'Schwelle',
        },
        technique: {
          summary: `Kadenz & Power: hohe Frequenz + kurze Sprint-Phasen`,
          main: [
            { label: 'Aufwärmen', text: `${warmupMin} min lockeres Treten` },
            { label: 'Drills', text: `4 × 1 min Einbein-Drills (pro Seite), hohe Kadenz` },
            { label: 'Hauptteil', text: `6 × 30 s Sprint @ 110+ U/min, 2:30 min locker, Fokus auf Explosivität` },
            { label: 'Cool-down', text: `${cooldownMin} min lockeres Ausrollen` },
          ],
          zone: 'VO2', zoneLabel: 'VO₂max',
        },
        recovery: {
          summary: `Lockere Runde: Erholung`,
          main: [
            { label: 'Aufwärmen', text: `${warmupMin} min sehr lockeres Treten` },
            { label: 'Hauptteil', text: `${mainMin} min lockere Fahrt im GA1` },
            { label: 'Cool-down', text: `${cooldownMin} min lockeres Ausrollen` },
          ],
          zone: 'GA1', zoneLabel: 'Regeneration',
        },
      },
    },
    run: {
      beginner: {
        endurance: {
          summary: `Lockere锁ere Laufeinheit mit Lauf-ABC`,
          main: [
            { label: 'Aufwärmen', text: `${warmupMin} min flottes Gehen + 2 × 30 s Ankippen` },
            { label: 'Lauf-ABC', text: `3 × 30 m A-Skips, Kniehebung, kurze Schritte` },
            { label: 'Hauptteil', text: `${mainMin} min lockeres Laufen im GA1, Ganzsatz-Dialog möglich` },
            { label: 'Cool-down', text: `${cooldownMin} min Gehen + Dehnung` },
          ],
          zone: 'GA1', zoneLabel: 'Locker',
        },
        performance: {
          summary: `Progressiver Lauf: stufenweise Tempo steigern`,
          main: [
            { label: 'Aufwärmen', text: `${warmupMin} min lockeres Laufen` },
            { label: 'Hauptteil', text: `${mainMin} min: 3 Stufen à ${Math.round(mainMin / 3)} min, jeweils etwas schneller (GA2 → GA2+ → GA3)` },
            { label: 'Cool-down', text: `${cooldownMin} min lockeres Auslaufen` },
          ],
          zone: 'GA2', zoneLabel: 'Moderat',
        },
        technique: {
          summary: `Technik-Lauf: Cadence und Schrittfrequenz`,
          main: [
            { label: 'Aufwärmen', text: `${warmupMin} min lockeres Laufen` },
            { label: 'Drills', text: `4 × 30 m Fast Feet (schnelle, kurze Schritte, >160 SPM)` },
            { label: 'Hauptteil', text: `${Math.round(mainMin * 0.6)} min lockeres Laufen mit bewusst hoher Kadenz` },
            { label: 'Cool-down', text: `${cooldownMin} min lockeres Auslaufen` },
          ],
          zone: 'Technik', zoneLabel: 'Technik',
        },
        recovery: {
          summary: `Lockeres Laufen: Regeneration`,
          main: [
            { label: 'Aufwärmen', text: `${warmupMin} min lockeres Gehen` },
            { label: 'Hauptteil', text: `${mainMin} min sehr lockeres Laufen im GA1` },
            { label: 'Cool-down', text: `${cooldownMin} min Gehen + Dehnung` },
          ],
          zone: 'GA1', zoneLabel: 'Regeneration',
        },
      },
      intermediate: {
        endurance: {
          summary: `Grundlage:锁ere Fahrt im GA1`,
          main: [
            { label: 'Aufwärmen', text: `${warmupMin} min lockeres Laufen + 2 × 20 m Ankippen` },
            { label: 'Hauptteil', text: `${mainMin} min锁ere Fahrt im GA1 (65–75 % HFmax), gleichmäßig` },
            { label: 'Cool-down', text: `${cooldownMin} min lockeres Auslaufen` },
          ],
          zone: 'GA1', zoneLabel: 'Locker',
        },
        performance: {
          summary: `Tempo-Intervalle: 4 × 5 min @ Schwellentempo`,
          main: [
            { label: 'Aufwärmen', text: `${warmupMin} min lockeres Laufen + 2 × 20 m Ankippen` },
            { label: 'Hauptteil', text: `4 × 5 min im Schwellentempo (RPE 7, ca. Halbmarathon-Pace), 2:30 min locker dazwischen` },
            { label: 'Cool-down', text: `${cooldownMin} min lockeres Auslaufen` },
          ],
          zone: 'SCHW', zoneLabel: 'Schwelle',
        },
        technique: {
          summary: `Fartlek: Tempowechsel nach Gefühl`,
          main: [
            { label: 'Aufwärmen', text: `${warmupMin} min lockeres Laufen` },
            { label: 'Hauptteil', text: `${mainMin} min Fartlek: 1 min zügig / 1 min locker, nach Gefühl, 8–10 Wiederholungen` },
            { label: 'Cool-down', text: `${cooldownMin} min lockeres Auslaufen` },
          ],
          zone: 'GA2', zoneLabel: 'Variabel',
        },
        recovery: {
          summary: `Lockeres Laufen: aktive Erholung`,
          main: [
            { label: 'Aufwärmen', text: `${warmupMin} min lockeres Gehen` },
            { label: 'Hauptteil', text: `${mainMin} min sehr lockeres Laufen im GA1` },
            { label: 'Cool-down', text: `${cooldownMin} min Gehen + Dehnung` },
          ],
          zone: 'GA1', zoneLabel: 'Regeneration',
        },
      },
      advanced: {
        endurance: {
          summary: `Lange锁ere Fahrt: aerobe Grundlage`,
          main: [
            { label: 'Aufwärmen', text: `${warmupMin} min lockeres Laufen` },
            { label: 'Hauptteil', text: `${mainMin} min锁ere Fahrt im GA1 (65–75 % HFmax), gleichmäßig und entspannt` },
            { label: 'Cool-down', text: `${cooldownMin} min lockeres Auslaufen` },
          ],
          zone: 'GA1', zoneLabel: 'Locker',
        },
        performance: {
          summary: `Threshold-Lauf: 3 × 10 min @ Schwellentempo`,
          main: [
            { label: 'Aufwärmen', text: `${warmupMin} min lockeres Laufen + 3 × 20 m Ankippen` },
            { label: 'Hauptteil', text: `3 × 10 min im Schwellentempo (RPE 8, ca. 10K-Pace), 3 min locker dazwischen` },
            { label: 'Cool-down', text: `${cooldownMin} min lockeres Auslaufen` },
          ],
          zone: 'SCHW', zoneLabel: 'Schwelle',
        },
        technique: {
          summary: `Hill Repeats + Cadence: Kraft und Frequenz`,
          main: [
            { label: 'Aufwärmen', text: `${warmupMin} min lockeres Laufen` },
            { label: 'Hügel', text: `6 × 45 s Bergsprints (5–8 % Steigung), Jogg den Hügel runter` },
            { label: 'Cadence', text: `4 × 20 s Fast Feet auf flachem Stück (>170 SPM)` },
            { label: 'Cool-down', text: `${cooldownMin} min lockeres Auslaufen` },
          ],
          zone: 'VO2', zoneLabel: 'VO₂max',
        },
        recovery: {
          summary: `Lockeres Laufen: Erholung`,
          main: [
            { label: 'Aufwärmen', text: `${warmupMin} min lockeres Gehen` },
            { label: 'Hauptteil', text: `${mainMin} min sehr lockeres Laufen im GA1` },
            { label: 'Cool-down', text: `${cooldownMin} min Gehen + Dehnung` },
          ],
          zone: 'GA1', zoneLabel: 'Regeneration',
        },
      },
    },
    strength: {
      beginner: {
        endurance: {
          summary: `Mobilität & Grundkraft: Ganzkörper-Grundprogramm`,
          main: [
            { label: 'Aufwärmen', text: `${warmupMin} min Mobilität: Hüftöffner, Thoracic Rotations, Armkreise` },
            { label: 'Hauptteil', text: `3 Runden: 10 Kniebeugen (Körpergewicht) + 8 Liegestütze + 30 s Plank + 10 Glute Bridges` },
            { label: 'Cool-down', text: `${cooldownMin} min Dehnung: Hüftbeuger, Wade, Brustwirbelsäule` },
          ],
          zone: 'Kraft', zoneLabel: 'Grundkraft',
        },
        performance: {
          summary: `Bein- & Rumpfkraft: Grundkraft-Programm`,
          main: [
            { label: 'Aufwärmen', text: `${warmupMin} min Mobilität` },
            { label: 'Hauptteil', text: `3 × 10 Bulgarian Split Squat + 3 × 10 Glute Bridge + 3 × 30 s Side Plank` },
            { label: 'Cool-down', text: `${cooldownMin} min Dehnung` },
          ],
          zone: 'Kraft', zoneLabel: 'Kraft',
        },
        technique: {
          summary: `Stabilität & Balance: Rumpf- und Hüftarbeit`,
          main: [
            { label: 'Aufwärmen', text: `${warmupMin} min Mobilität` },
            { label: 'Hauptteil', text: `3 × 10 Single-Leg RDL + 3 × 12 Glute Bridge + 3 × 30 s Bird-Dog` },
            { label: 'Cool-down', text: `${cooldownMin} min Dehnung` },
          ],
          zone: 'Stabilität', zoneLabel: 'Stabilität',
        },
        recovery: {
          summary: `Mobilität & Erholung: Ganzkörper-Dehnung`,
          main: [
            { label: 'Aufwärmen', text: `${warmupMin} min lockeres Gehen` },
            { label: 'Hauptteil', text: `${mainMin} min Mobilitäts-Flow: Hüftöffner, Thoracic Rotations, World's Greatest Stretch` },
            { label: 'Cool-down', text: `${cooldownMin} min tiefe Atmung + Entspannung` },
          ],
          zone: 'Mobilität', zoneLabel: 'Mobilität',
        },
      },
      intermediate: {
        endurance: {
          summary: `Triathlon-Kraft: Ganzkörper-Grundprogramm`,
          main: [
            { label: 'Aufwärmen', text: `${warmupMin} min Mobilität: Hüftöffner, Thoracic Rotations` },
            { label: 'Hauptteil', text: `3 × 8 Goblet Squat + 3 × 8 Kurzhantel-Rudern + 3 × 10 Romanian Deadlift + 3 × 30 s Plank` },
            { label: 'Cool-down', text: `${cooldownMin} min Dehnung` },
          ],
          zone: 'Kraft', zoneLabel: 'Kraft',
        },
        performance: {
          summary: `Explosivkraft: Bein- und Rumpfprogramm`,
          main: [
            { label: 'Aufwärmen', text: `${warmupMin} min Mobilität + 2 × 5 Kniebeugen` },
            { label: 'Hauptteil', text: `3 × 6 Trap-Bar Deadlift + 3 × 8 Bulgarian Split Squat + 3 × 12 Pallof Press + 3 × 8 Step-Up` },
            { label: 'Cool-down', text: `${cooldownMin} min Dehnung` },
          ],
          zone: 'Kraft', zoneLabel: 'Kraft',
        },
        technique: {
          summary: `Stabilität & Balance: einbeinige Arbeit`,
          main: [
            { label: 'Aufwärmen', text: `${warmupMin} min Mobilität` },
            { label: 'Hauptteil', text: `3 × 8 Single-Leg RDL + 3 × 8 Step-Up mit Kniehebung + 3 × 30 s Side Plank + 3 × 10 Hip Thrust` },
            { label: 'Cool-down', text: `${cooldownMin} min Dehnung` },
          ],
          zone: 'Stabilität', zoneLabel: 'Stabilität',
        },
        recovery: {
          summary: `Mobilität & Erholung`,
          main: [
            { label: 'Aufwärmen', text: `${warmupMin} min lockeres Gehen` },
            { label: 'Hauptteil', text: `${mainMin} min Mobilitäts-Flow: 90/90 Hip Stretch, Thoracic Rotations, Deep Squat Hold` },
            { label: 'Cool-down', text: `${cooldownMin} min tiefe Atmung` },
          ],
          zone: 'Mobilität', zoneLabel: 'Mobilität',
        },
      },
      advanced: {
        endurance: {
          summary: `Kraftausdauer: Ganzkörper-Programm mit progressive Überlastung`,
          main: [
            { label: 'Aufwärmen', text: `${warmupMin} min Mobilität + 2 × 5 Kniebeugen` },
            { label: 'Hauptteil', text: `3 × 8 Goblet Squat + 3 × 8 Kurzhantel-Rudern + 3 × 10 Romanian Deadlift + 3 × 12 Pallof Press + 3 × 30 s Plank` },
            { label: 'Cool-down', text: `${cooldownMin} min Dehnung` },
          ],
          zone: 'Kraft', zoneLabel: 'Kraft',
        },
        performance: {
          summary: `Maximalkraft: schwere Verbundübungen`,
          main: [
            { label: 'Aufwärmen', text: `${warmupMin} min Mobilität + 2 × 3 schwere Kniebeugen` },
            { label: 'Hauptteil', text: `4 × 5 Trap-Bar Deadlift @ 80–85 % 1RM + 4 × 5 Goblet Squat + 3 × 6 Bulgarian Split Squat + 3 × 8 Pallof Press` },
            { label: 'Cool-down', text: `${cooldownMin} min Dehnung` },
          ],
          zone: 'Max', zoneLabel: 'Maximalkraft',
        },
        technique: {
          summary: `Explosivkraft & Plyometrie`,
          main: [
            { label: 'Aufwärmen', text: `${warmupMin} min Mobilität + 2 × 5 Sprünge` },
            { label: 'Hauptteil', text: `3 × 5 Box Jumps + 3 × 6 Single-Leg RDL + 3 × 8 Step-Up mit Gewicht + 3 × 30 s Hollow Hold` },
            { label: 'Cool-down', text: `${cooldownMin} min Dehnung` },
          ],
          zone: 'Power', zoneLabel: 'Power',
        },
        recovery: {
          summary: `Mobilität & Erholung`,
          main: [
            { label: 'Aufwärmen', text: `${warmupMin} min lockeres Gehen` },
            { label: 'Hauptteil', text: `${mainMin} min Mobilitäts-Flow: 90/90, Thoracic Rotations, World's Greatest Stretch, Deep Squat Hold` },
            { label: 'Cool-down', text: `${cooldownMin} min tiefe Atmung` },
          ],
          zone: 'Mobilität', zoneLabel: 'Mobilität',
        },
      },
    },
  };

  // Select template based on focus; fall back to endurance
  const disciplineTemplates = templates[type] || templates.run;
  const experienceTemplates = disciplineTemplates[experience] || disciplineTemplates.intermediate || disciplineTemplates.beginner;
  const selected = experienceTemplates[focus] || experienceTemplates.endurance;

  // Scale intervals based on available time
  if (minutes < 40) {
    selected.main = selected.main.slice(0, Math.max(2, selected.main.length - 1));
    const lastLabel = selected.main[selected.main.length - 1].label;
    if (lastLabel !== 'Cool-down') {
      selected.main.push({ label: 'Cool-down', text: `${cooldownMin} min lockeres Auskühlen` });
    }
  }

  // Enrich with performance-based zone references
  selected.zones = [];
  if (pd.maxHR) {
    const hrRest = pd.restHR || 55;
    const hrReserve = pd.maxHR - hrRest;
    selected.zones.push(`HR-Zonen: GA1 ${Math.round(hrRest + hrReserve * 0.65)}–${Math.round(hrRest + hrReserve * 0.75)} bpm · GA2 ${Math.round(hrRest + hrReserve * 0.75)}–${Math.round(hrRest + hrReserve * 0.85)} bpm · Schwelle ${Math.round(hrRest + hrReserve * 0.85)}–${Math.round(hrRest + hrReserve * 0.95)} bpm`);
  }
  if (pd.ftpWatts && (type === 'bike' || type === 'brick')) {
    const ftp = pd.ftpWatts;
    selected.zones.push(`Watt-Zonen: GA1 <${Math.round(ftp * 0.56)} W · GA2 ${Math.round(ftp * 0.56)}–${Math.round(ftp * 0.75)} W · Sweet Spot ${Math.round(ftp * 0.88)}–${Math.round(ftp * 0.94)} W · Schwelle ${ftp} W`);
  }
  if (pd.swimTime && type === 'swim') {
    const parts = pd.swimTime.split(':');
    const totalSec = parts.length === 2 ? parseInt(parts[0], 10) * 60 + parseInt(parts[1], 10) : parseInt(parts[0], 10) || 540;
    const per100 = Math.round(totalSec / 4);
    const m = Math.floor(per100 / 60);
    const s = per100 % 60;
    selected.zones.push(`100-m-Ziel: lockeres Tempo ${m}:${String(s + 15).padStart(2, '0')} / GA2 ${m}:${String(s + 5).padStart(2, '0')} / Wettkampf ${m}:${String(s).padStart(2, '0')} / Tempo ${m}:${String(Math.max(0, s - 5)).padStart(2, '0')}`);
  }
  if (pd.fiveKTime && type === 'run') {
    const parts = pd.fiveKTime.split(':');
    const totalSec = parts.length === 2 ? parseInt(parts[0], 10) * 60 + parseInt(parts[1], 10) : parseInt(parts[0], 10) || 1500;
    const secPerKm = Math.round(totalSec / 5);
    const m = Math.floor(secPerKm / 60);
    const s = secPerKm % 60;
    selected.zones.push(`Pace-Zonen: lockeres Tempo ${m}:${String(s + 30).padStart(2, '0')} / GA2 ${m}:${String(s + 15).padStart(2, '0')} / 10K-Pace ${m}:${String(s + 5).padStart(2, '0')} / 5K-Pace ${m}:${String(s).padStart(2, '0')}`);
  }

  return selected;
}

const openAnnualModal = () => {
  if (!selectedDate) {
    selectedDate = getDateKeyFromDate(new Date());
    openAnnualEditor(selectedDate);
  }
  const fabContainerEl = document.getElementById('fabContainer');
  if (fabContainerEl) fabContainerEl.style.visibility = 'hidden';
  if (yearModal) {
    yearModal.classList.remove('hidden');
    yearModal.setAttribute('aria-hidden', 'false');
  }
};

if (annualViewBtn) {
  annualViewBtn.addEventListener('click', openAnnualModal);
}

if (closeAnnualModal) {
  closeAnnualModal.addEventListener('click', () => {
    if (yearModal) {
      yearModal.classList.add('hidden');
      yearModal.setAttribute('aria-hidden', 'true');
    }
    const fabContainerEl = document.getElementById('fabContainer');
    if (fabContainerEl) fabContainerEl.style.visibility = '';
  });
}

// Escape key closes open modals
document.addEventListener('keydown', (e) => {
  if (e.key !== 'Escape') return;
  if (yearModal && !yearModal.classList.contains('hidden')) {
    yearModal.classList.add('hidden');
    yearModal.setAttribute('aria-hidden', 'true');
    const fabContainerEl = document.getElementById('fabContainer');
    if (fabContainerEl) fabContainerEl.style.visibility = '';
  }
});

plannerForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(plannerForm);
  const hasAvailability = Object.values(getAnnualAvailabilityMap()).some((day) => (day.minutes || 0) > 0);
  const hasEventDate = Boolean(formData.get('eventDate'));

  // Validate required fields
  const nameInput = document.getElementById('athleteName');
  const nameLabel = nameInput?.closest('label');
  let valid = true;

  if (nameLabel && (!formData.get('athleteName') || !formData.get('athleteName').trim())) {
    nameLabel.classList.add('has-error');
    valid = false;
  } else if (nameLabel) {
    nameLabel.classList.remove('has-error');
  }

  if (!hasAvailability && !hasEventDate) {
    showToast('Trage zuerst ein Zeitfenster im Jahreskalender ein – daraus baut der Coach deinen Plan.', 'error');
    plannerForm.classList.remove('shake');
    void plannerForm.offsetWidth;
    plannerForm.classList.add('shake');
    valid = false;
  }

  if (!valid) return;

  // Show loading state
  const outputPanel = document.querySelector('.output-panel');
  if (outputPanel) outputPanel.classList.add('generating');

  persistFormState();
  generatePlanFromForm();

  // Remove loading state after a brief delay
  requestAnimationFrame(() => {
    setTimeout(() => {
      if (outputPanel) outputPanel.classList.remove('generating');
    }, 200);
  });

  showToast('Dein Trainingsplan wurde aktualisiert.');
});

loadDemoBtn.addEventListener('click', () => {
  loadDemoPlan();
  showToast('Demo-Plan geladen – Zeitfenster für 12 Wochen eingetragen.');
});

document.querySelectorAll('.time-input').forEach((input) => {
  input.addEventListener('input', () => {
    updateAvailabilitySummary();
    generatePlanFromForm();
  });
});

// react to event inputs immediately
const eventInputs = document.querySelectorAll('#eventName, #eventDate, #eventType');
eventInputs.forEach((el) => {
  if (el) el.addEventListener('change', () => { generatePlanFromForm(); });
});

// update when level/day inputs change
document.querySelectorAll('#swimLevel,#bikeLevel,#runLevel,#trainingDays').forEach((el) => {
  if (el) el.addEventListener('change', () => { generatePlanFromForm(); });
});

loadFormState();
loadAvailability();
const hasAnySavedData = Object.keys(annualAvailability).length > 0 || localStorage.getItem(FORM_STORAGE_KEY) !== null;
renderAnnualOverview();
updateAvailabilitySummary();
renderAvailabilityOverview();
renderStrengthExercises();
document.addEventListener('click', handleCollapsibleToggle);
bindWorkoutDetailToggles();
if (!hasAnySavedData) {
  loadDemoPlan();
} else {
  generatePlanFromForm();
}

// Charts and draggable FABs
const pieChartEl = document.getElementById('pieChart');
const barChartEl = document.getElementById('barChart');

function polarToCartesian(cx, cy, r, angleDeg) {
  const angleRad = ((angleDeg - 90) * Math.PI) / 180.0;
  return { x: cx + r * Math.cos(angleRad), y: cy + r * Math.sin(angleRad) };
}

function describeArc(cx, cy, r, startAngle, endAngle) {
  const start = polarToCartesian(cx, cy, r, endAngle);
  const end = polarToCartesian(cx, cy, r, startAngle);
  const largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1';
  return `M ${cx} ${cy} L ${start.x} ${start.y} A ${r} ${r} 0 ${largeArcFlag} 0 ${end.x} ${end.y} Z`;
}

function renderDisciplineBreakdown(sessions) {
  const barsEl = document.getElementById('discBars');
  if (!barsEl) return;
  const minutesByType = { swim: 0, bike: 0, run: 0, strength: 0 };
  sessions.forEach((s) => {
    if (minutesByType[s.type] !== undefined) minutesByType[s.type] += s.minutes || 0;
  });
  const maxMin = Math.max(1, ...Object.values(minutesByType));
  const labels = { swim: 'Schwimmen', bike: 'Rad', run: 'Laufen', strength: 'Kraft' };
  const order = ['swim', 'bike', 'run', 'strength'];
  barsEl.innerHTML = order.map((type) => {
    const min = minutesByType[type];
    const h = (min / 60).toFixed(1).replace('.0', '');
    const pct = Math.round((min / maxMin) * 100);
    return `<div class="disc-bar-row">
      <span class="disc-bar-label">${labels[type]}</span>
      <div class="disc-bar-track"><div class="disc-bar-fill ${type}" style="width:${pct}%"></div></div>
      <span class="disc-bar-value">${h} h</span>
    </div>`;
  }).join('');
}

// ---------- Weekly progress tracking ----------

const PROGRESS_STORAGE_KEY = 'trifit_completed_sessions';

function getCompletedSessions() {
  try {
    return JSON.parse(localStorage.getItem(PROGRESS_STORAGE_KEY)) || {};
  } catch (_) { return {}; }
}

function saveCompletedSession(sessionId) {
  const completed = getCompletedSessions();
  const weekKey = getWeekKey(new Date());
  if (!completed[weekKey]) completed[weekKey] = [];
  if (!completed[weekKey].includes(sessionId)) {
    completed[weekKey].push(sessionId);
    localStorage.setItem(PROGRESS_STORAGE_KEY, JSON.stringify(completed));
  }
}

function removeCompletedSession(sessionId) {
  const completed = getCompletedSessions();
  const weekKey = getWeekKey(new Date());
  if (completed[weekKey]) {
    completed[weekKey] = completed[weekKey].filter((id) => id !== sessionId);
    localStorage.setItem(PROGRESS_STORAGE_KEY, JSON.stringify(completed));
  }
}

function getWeekKey(date) {
  const d = new Date(date);
  d.setHours(0, 0, 0, 0);
  d.setDate(d.getDate() + 3 - ((d.getDay() + 6) % 7));
  const week1 = new Date(d.getFullYear(), 0, 4);
  const weekNum = 1 + Math.round(((d - week1) / 86400000 - 3 + ((week1.getDay() + 6) % 7)) / 7);
  return `${d.getFullYear()}-W${String(weekNum).padStart(2, '0')}`;
}

function handleCompleteToggle(event) {
  const btn = event.target.closest('.complete-btn');
  if (!btn) return;
  const sessionId = btn.dataset.sessionId;
  if (!sessionId) return;
  const completed = getCompletedSessions();
  const weekKey = getWeekKey(new Date());
  const isDone = completed[weekKey] && completed[weekKey].includes(sessionId);
  if (isDone) {
    removeCompletedSession(sessionId);
    btn.classList.remove('done');
    btn.textContent = '○ Erledigen';
  } else {
    saveCompletedSession(sessionId);
    btn.classList.add('done');
    btn.textContent = '✓ Erledigt';
  }
  renderProgressChart();
}

function renderProgressChart() {
  const el = document.getElementById('progressChart');
  if (!el) return;
  const completed = getCompletedSessions();
  const weekKeys = Object.keys(completed).sort().slice(-8);
  if (!weekKeys.length) {
    el.innerHTML = '<div class="empty-state">Noch keine Fortschritte. Klicke „Erledigen" bei einer Einheit.</div>';
    return;
  }
  const maxCount = Math.max(1, ...weekKeys.map((k) => (completed[k] || []).length));
  el.innerHTML = `<div class="progress-bars">${weekKeys.map((wk) => {
    const count = (completed[wk] || []).length;
    const pct = Math.round((count / maxCount) * 100);
    return `<div class="progress-bar-col">
      <span class="progress-count">${count}</span>
      <div class="progress-track"><div class="progress-fill" style="height:${pct}%"></div></div>
      <span class="progress-week">${wk.replace('-', ' ')}</span>
    </div>`;
  }).join('')}</div>`;
}

function bindCompleteButtons() {
  const el = document.getElementById('weekPlanList');
  if (!el || el.dataset.completeBound) return;
  el.dataset.completeBound = '1';
  el.addEventListener('click', handleCompleteToggle);
}

function renderDisciplinePie(emphasis) {
  if (!pieChartEl) return;
  const w = 160;
  const cx = w / 2;
  const cy = w / 2;
  const r = 60;
  const colors = { swim: '#38bdf8', bike: '#a78bfa', run: '#fbbf24', strength: '#34d399' };
  let start = 0;
  const keys = ['swim', 'bike', 'run', 'strength'];
  const slices = keys.map((k) => ({ k, v: emphasis[k] || 0 }));
  const svgParts = [];
  slices.forEach((s) => {
    const angle = s.v * 360;
    if (angle <= 0) return;
    const path = describeArc(cx, cy, r, start, start + angle);
    svgParts.push(`<path data-k="${s.k}" d="${path}" fill="${colors[s.k]}" opacity="0.95"></path>`);
    start += angle;
  });
  const legend = keys.map((k) => `<div class="legend-row" data-k="${k}"><span style="display:inline-block;width:12px;height:12px;background:${colors[k]};border-radius:3px;margin-right:8px"></span>${k}</div>`).join('');
  pieChartEl.innerHTML = `<svg width="${w}" height="${w}" viewBox="0 0 ${w} ${w}" role="img">${svgParts.join('')}</svg><div class="pie-legend">${legend}</div>`;

  // interactions
  pieChartEl.querySelectorAll('path[data-k]').forEach((p) => {
    p.style.cursor = 'pointer';
    p.addEventListener('click', () => { toggleDisciplineFilter(p.dataset.k); });
    p.addEventListener('mouseenter', () => { p.setAttribute('opacity', '1'); });
    p.addEventListener('mouseleave', () => { if (!disciplineFilter || disciplineFilter !== p.dataset.k) p.setAttribute('opacity', '0.95'); });
  });
  pieChartEl.querySelectorAll('.legend-row').forEach((el) => {
    el.style.cursor = 'pointer';
    el.addEventListener('click', () => { toggleDisciplineFilter(el.dataset.k); });
  });
  updatePieSelection();
}

function toggleDisciplineFilter(k) {
  if (!k) return;
  disciplineFilter = disciplineFilter === k ? null : k;
  updatePieSelection();
  generatePlanFromForm();
}

function updatePieSelection() {
  if (!pieChartEl) return;
  pieChartEl.querySelectorAll('path[data-k]').forEach((p) => {
    if (disciplineFilter && p.dataset.k === disciplineFilter) {
      p.style.stroke = '#ffffff';
      p.style.strokeWidth = '2';
      p.setAttribute('opacity', '1');
    } else {
      p.style.stroke = 'none';
      p.setAttribute('opacity', '0.95');
    }
  });
  pieChartEl.querySelectorAll('.legend-row').forEach((el) => {
    const key = el.dataset.k;
    el.style.opacity = (!disciplineFilter || disciplineFilter === key) ? '1' : '0.45';
  });
}

function renderWeeklyVolumeChart(availability) {
  if (!barChartEl) return;
  const data = weekdays.map((d) => (availability[d] && availability[d].minutes ? Math.round((availability[d].minutes / 60) * 10) / 10 : 0));
  const max = Math.max(1, ...data);
  const w = 320;
  const h = 80;
  const barW = Math.floor(w / data.length) - 6;
  const currentWeekDates = getCurrentWeekDateKeys();
  const bars = data.map((val, i) => {
    const barH = Math.round((val / max) * (h - 20));
    const x = i * (barW + 6) + 6;
    const y = h - barH - 10;
    const color = i % 3 === 0 ? '#38bdf8' : i % 3 === 1 ? '#a78bfa' : '#fbbf24';
    return `<g data-date="${currentWeekDates[i]}"><rect x="${x}" y="${y}" width="${barW}" height="${barH}" fill="${color}" rx="4"></rect><text x="${x + barW/2}" y="${h - 2}" font-size="10" text-anchor="middle" fill="var(--text-3)">${weekdays[i]}</text></g>`;
  }).join('');
  barChartEl.innerHTML = `<svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" role="img">${bars}</svg>`;

  // attach interactions to bars
  barChartEl.querySelectorAll('g[data-date]').forEach((g) => {
    g.style.cursor = 'pointer';
    g.addEventListener('click', () => {
      const dateKey = g.dataset.date;
      if (!dateKey) return;
      selectedDate = dateKey;
      openAnnualModal();
      openAnnualEditor(dateKey);
    });
  });
}

function initDraggableFABs() {
  const container = document.getElementById('fabContainer');
  if (!container) return;
  const buttons = Array.from(container.querySelectorAll('.fab'));
  const saved = JSON.parse(localStorage.getItem('fabPositions') || '{}');

  buttons.forEach((btn, idx) => {
    const key = btn.dataset.action || `fab${idx}`;
    btn.style.position = 'fixed';
    if (saved[key]) {
      btn.style.right = 'auto';
      btn.style.left = saved[key].left;
      btn.style.top = saved[key].top;
    }

    let dragging = false;
    let startX = 0;
    let startY = 0;
    let origLeft = 0;
    let origTop = 0;
    let hasMoved = false;

    const onDown = (e) => {
      e.preventDefault();
      dragging = true;
      hasMoved = false;
      startX = e.clientX || (e.touches && e.touches[0].clientX);
      startY = e.clientY || (e.touches && e.touches[0].clientY);
      origLeft = parseInt(btn.style.left || (window.innerWidth - btn.offsetLeft - btn.offsetWidth) || 0, 10);
      origTop = parseInt(btn.style.top || btn.offsetTop || 0, 10);
      window.addEventListener('pointermove', onMove);
      window.addEventListener('pointerup', onUp);
    };

    const onMove = (ev) => {
      if (!dragging) return;
      const mx = ev.clientX;
      const my = ev.clientY;
      const dx = mx - startX;
      const dy = my - startY;
      if (Math.abs(dx) > 4 || Math.abs(dy) > 4) hasMoved = true;
      btn.style.left = `${origLeft + dx}px`;
      btn.style.top = `${origTop + dy}px`;
    };

    const onUp = () => {
      if (!dragging) return;
      dragging = false;
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerup', onUp);
      // persist
      const pos = { left: btn.style.left, top: btn.style.top };
      const cur = JSON.parse(localStorage.getItem('fabPositions') || '{}');
      cur[key] = pos;
      localStorage.setItem('fabPositions', JSON.stringify(cur));
    };

    btn.addEventListener('pointerdown', onDown);

    // click handler for actions
    btn.addEventListener('click', (ev) => {
      // ignore click if the pointer moved (was a drag)
      if (hasMoved) { hasMoved = false; return; }
      const action = btn.dataset.action;
      if (action === 'annual') openAnnualModal();
      if (action === 'demo') loadDemoPlan();
      if (action === 'export') {
        const payload = currentPlanData || { annualAvailability, event: { name: document.getElementById('eventName')?.value || '', date: document.getElementById('eventDate')?.value || '', type: document.getElementById('eventType')?.value || '' } };
        const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url; a.download = 'trifit-coach-plan.json'; a.click(); URL.revokeObjectURL(url);
        showToast('Dein Trainingsplan wurde als JSON-Datei exportiert.');
      }
    });
  });
}

initDraggableFABs();
