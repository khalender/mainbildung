import React from 'react';

export const DatenschutzPage: React.FC = () => {
  return (
    <div className="p-8 max-w-4xl mx-auto text-left">
      <h1 className="text-3xl font-bold mb-8">Datenschutzerklärung</h1>

      <div className="space-y-8">
        <section>
          <h2 className="text-xl font-semibold mb-4">1. Verantwortlicher</h2>
          <p className="mb-2">Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO) und anderer nationaler Datenschutzgesetze der Mitgliedsstaaten sowie sonstiger datenschutzrechtlicher Bestimmungen ist:</p>
          <p className="font-semibold mt-4">Main-Bildung Förderverein e.V.</p>
          <p>Hessenstraße 129</p>
          <p>97078 Würzburg</p>
          <p className="mt-2">Telefon: <a href="tel:+491712707271" className="text-blue-600 hover:underline">+49 171 2707271</a></p>
          <p>E-Mail: <a href="mailto:info@main-bildung.de" className="text-blue-600 hover:underline">info@main-bildung.de</a></p>
          <p className="mt-4"><strong>Datenschutzbeauftragter:</strong></p>
          <p>Recep Bedir</p>
          <p>E-Mail: <a href="mailto:recep.bedir@main-bildung.de" className="text-blue-600 hover:underline">recep.bedir@main-bildung.de</a></p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">2. Allgemeines zur Datenverarbeitung</h2>
          <h3 className="text-lg font-medium mb-2">2.1 Umfang der Verarbeitung personenbezogener Daten</h3>
          <p className="mb-4">Wir verarbeiten personenbezogene Daten unserer Nutzer grundsätzlich nur, soweit dies zur Bereitstellung einer funktionsfähigen Website sowie unserer Inhalte und Leistungen erforderlich ist. Die Verarbeitung personenbezogener Daten erfolgt regelmäßig nur nach Einwilligung des Nutzers oder soweit eine rechtliche Erlaubnis besteht.</p>

          <h3 className="text-lg font-medium mb-2">2.2 Rechtsgrundlagen für die Verarbeitung personenbezogener Daten</h3>
          <p className="mb-2">Soweit wir für Verarbeitungsvorgänge personenbezogener Daten eine Einwilligung der betroffenen Person einholen, dient Art. 6 Abs. 1 lit. a DSGVO als Rechtsgrundlage.</p>
          <p className="mb-2">Bei der Verarbeitung von personenbezogenen Daten, die zur Erfüllung eines Vertrages erforderlich ist, dessen Vertragspartei die betroffene Person ist, dient Art. 6 Abs. 1 lit. b DSGVO als Rechtsgrundlage. Dies gilt auch für Verarbeitungsvorgänge, die zur Durchführung vorvertraglicher Maßnahmen erforderlich sind.</p>
          <p className="mb-2">Soweit eine Verarbeitung personenbezogener Daten zur Erfüllung einer rechtlichen Verpflichtung erforderlich ist, der unser Verein unterliegt, dient Art. 6 Abs. 1 lit. c DSGVO als Rechtsgrundlage.</p>
          <p className="mb-2">Ist die Verarbeitung zur Wahrung eines berechtigten Interesses unseres Vereins oder eines Dritten erforderlich und überwiegen die Interessen, Grundrechte und Grundfreiheiten des Betroffenen das erstgenannte Interesse nicht, so dient Art. 6 Abs. 1 lit. f DSGVO als Rechtsgrundlage für die Verarbeitung.</p>

          <h3 className="text-lg font-medium mb-2">2.3 Datenlöschung und Speicherdauer</h3>
          <p>Die personenbezogenen Daten der betroffenen Person werden gelöscht oder gesperrt, sobald der Zweck der Speicherung entfällt. Eine Speicherung kann darüber hinaus erfolgen, wenn dies durch den europäischen oder nationalen Gesetzgeber in unionsrechtlichen Verordnungen, Gesetzen oder sonstigen Vorschriften, denen der Verantwortliche unterliegt, vorgesehen wurde.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">3. Bereitstellung der Website und Erstellung von Logfiles</h2>
          <h3 className="text-lg font-medium mb-2">3.1 Beschreibung und Umfang der Datenverarbeitung</h3>
          <p className="mb-4">Bei jedem Aufruf unserer Internetseite erfasst unser System automatisiert Daten und Informationen vom Computersystem des aufrufenden Rechners. Folgende Daten werden hierbei erhoben:</p>
          <ul className="list-disc pl-6 mb-4 space-y-1">
            <li>IP-Adresse des Nutzers</li>
            <li>Datum und Uhrzeit des Zugriffs</li>
            <li>Websites, von denen das System des Nutzers auf unsere Internetseite gelangt (Referrer)</li>
            <li>Websites, die vom System des Nutzers über unsere Website aufgerufen werden</li>
            <li>Verwendeter Browser und ggf. das Betriebssystem des Rechners</li>
          </ul>

          <h3 className="text-lg font-medium mb-2">3.2 Rechtsgrundlage für die Datenverarbeitung</h3>
          <p className="mb-4">Rechtsgrundlage für die vorübergehende Speicherung der Daten und der Logfiles ist Art. 6 Abs. 1 lit. f DSGVO.</p>

          <h3 className="text-lg font-medium mb-2">3.3 Zweck der Datenverarbeitung</h3>
          <p className="mb-4">Die vorübergehende Speicherung der IP-Adresse durch das System ist notwendig, um eine Auslieferung der Website an den Rechner des Nutzers zu ermöglichen. Hierfür muss die IP-Adresse des Nutzers für die Dauer der Sitzung gespeichert bleiben. Die Speicherung in Logfiles erfolgt, um die Funktionsfähigkeit der Website sicherzustellen. Zudem dienen uns die Daten zur Optimierung der Website und zur Sicherstellung der Sicherheit unserer informationstechnischen Systeme.</p>

          <h3 className="text-lg font-medium mb-2">3.4 Dauer der Speicherung</h3>
          <p>Die Daten werden gelöscht, sobald sie für die Erreichung des Zweckes ihrer Erhebung nicht mehr erforderlich sind. Im Falle der Erfassung der Daten zur Bereitstellung der Website ist dies der Fall, wenn die jeweilige Sitzung beendet ist. Im Falle der Speicherung der Daten in Logfiles ist dies nach spätestens sieben Tagen der Fall.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">4. Hosting und Auftragsverarbeitung</h2>
          <p className="mb-4">Unsere Website wird bei Amazon Web Services (AWS) gehostet. Anbieter ist die Amazon Web Services EMEA SARL, 38 Avenue John F. Kennedy, L-1855 Luxemburg (nachfolgend: AWS).</p>

          <h3 className="text-lg font-medium mb-2">4.1 Server-Standort</h3>
          <p className="mb-4">Die Datenverarbeitung erfolgt auf AWS-Servern in der Region Irland (Europe-West-1). Alle Daten verbleiben innerhalb der Europäischen Union.</p>

          <h3 className="text-lg font-medium mb-2">4.2 Auftragsverarbeitungsvertrag (AVV)</h3>
          <p className="mb-4">Mit AWS besteht ein Auftragsverarbeitungsvertrag gemäß Art. 28 DSGVO. AWS verarbeitet die Daten ausschließlich auf Grundlage unserer Weisungen und gewährleistet die Einhaltung der datenschutzrechtlichen Bestimmungen.</p>

          <h3 className="text-lg font-medium mb-2">4.3 Zweck der Verarbeitung</h3>
          <p className="mb-4">Der Hosting-Dienst dient der Bereitstellung der folgenden Leistungen: Infrastruktur- und Plattformdienstleistungen, Rechenkapazität, Speicherplatz und Datenbankdienste, Sicherheitsleistungen sowie technische Wartungsleistungen.</p>

          <h3 className="text-lg font-medium mb-2">4.4 Rechtsgrundlage</h3>
          <p>Rechtsgrundlage für die Verarbeitung ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einer sicheren und stabilen Website-Bereitstellung) sowie Art. 28 DSGVO (Auftragsverarbeitung).</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">5. Verwendung von Cookies</h2>
          <p className="mb-4">Unsere Website verwendet keine Cookies. Es werden keine Tracking-Mechanismen, Analyse-Tools oder ähnliche Technologien eingesetzt, die Daten auf Ihrem Endgerät speichern.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">6. Kontaktaufnahme per E-Mail</h2>
          <h3 className="text-lg font-medium mb-2">6.1 Beschreibung und Umfang der Datenverarbeitung</h3>
          <p className="mb-4">Eine Kontaktaufnahme über die bereitgestellte E-Mail-Adresse ist möglich. In diesem Fall werden die mit der E-Mail übermittelten personenbezogenen Daten des Nutzers verarbeitet.</p>

          <h3 className="text-lg font-medium mb-2">6.2 Rechtsgrundlage für die Datenverarbeitung</h3>
          <p className="mb-4">Rechtsgrundlage für die Verarbeitung der Daten, die im Zuge einer Übersendung einer E-Mail übermittelt werden, ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Bearbeitung der Anfrage).</p>

          <h3 className="text-lg font-medium mb-2">6.3 Zweck der Datenverarbeitung</h3>
          <p className="mb-4">Die Verarbeitung der personenbezogenen Daten dient uns allein zur Bearbeitung der Kontaktaufnahme. Hierin liegt auch das erforderliche berechtigte Interesse an der Verarbeitung der Daten.</p>

          <h3 className="text-lg font-medium mb-2">6.4 Dauer der Speicherung</h3>
          <p>Die Daten werden gelöscht, sobald sie für die Erreichung des Zweckes ihrer Erhebung nicht mehr erforderlich sind. Für die personenbezogenen Daten, die per E-Mail übersandt wurden, ist dies dann der Fall, wenn die jeweilige Konversation mit dem Nutzer beendet ist. Beendet ist die Konversation dann, wenn sich aus den Umständen entnehmen lässt, dass der betroffene Sachverhalt abschließend geklärt ist.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">7. Datenverarbeitung bei Minderjährigen</h2>
          <p className="mb-4">Unsere Website enthält keine für Minderjährige problematischen Inhalte. Wir sammeln wissentlich keine personenbezogenen Daten von Kindern unter 16 Jahren. Sollten wir versehentlich solche Daten erhalten haben, werden diese unverzüglich gelöscht.</p>
          <p>Eltern oder Erziehungsberechtigte können sich jederzeit an uns wenden, wenn sie der Ansicht sind, dass ihr Kind uns personenbezogene Daten übermittelt hat.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">7. Rechte der betroffenen Person</h2>
          <p className="mb-4">Werden personenbezogene Daten von Ihnen verarbeitet, sind Sie Betroffener i.S.d. DSGVO und es stehen Ihnen folgende Rechte gegenüber dem Verantwortlichen zu:</p>

          <h3 className="text-lg font-medium mb-2">7.1 Auskunftsrecht (Art. 15 DSGVO)</h3>
          <p className="mb-4">Sie können von dem Verantwortlichen eine Bestätigung darüber verlangen, ob personenbezogene Daten, die Sie betreffen, von uns verarbeitet werden. Liegt eine solche Verarbeitung vor, können Sie von dem Verantwortlichen über folgende Informationen Auskunft verlangen:</p>
          <ul className="list-disc pl-6 mb-4 space-y-1">
            <li>die Zwecke, zu denen die personenbezogenen Daten verarbeitet werden;</li>
            <li>die Kategorien von personenbezogenen Daten, welche verarbeitet werden;</li>
            <li>die Empfänger oder Kategorien von Empfängern, gegenüber denen die Sie betreffenden personenbezogenen Daten offengelegt wurden oder noch offengelegt werden;</li>
            <li>die geplante Dauer der Speicherung der Sie betreffenden personenbezogenen Daten oder, falls konkrete Angaben hierzu nicht möglich sind, Kriterien für die Festlegung der Speicherdauer;</li>
            <li>das Bestehen eines Rechts auf Berichtigung oder Löschung der Sie betreffenden personenbezogenen Daten, eines Rechts auf Einschränkung der Verarbeitung durch den Verantwortlichen oder eines Widerspruchsrechts gegen diese Verarbeitung;</li>
            <li>das Bestehen eines Beschwerderechts bei einer Aufsichtsbehörde;</li>
            <li>alle verfügbaren Informationen über die Herkunft der Daten, wenn die personenbezogenen Daten nicht bei der betroffenen Person erhoben werden;</li>
            <li>das Bestehen einer automatisierten Entscheidungsfindung einschließlich Profiling gemäß Art. 22 Abs. 1 und 4 DSGVO und – zumindest in diesen Fällen – aussagekräftige Informationen über die involvierte Logik sowie die Tragweite und die angestrebten Auswirkungen einer derartigen Verarbeitung für die betroffene Person.</li>
          </ul>

          <h3 className="text-lg font-medium mb-2">7.2 Recht auf Berichtigung (Art. 16 DSGVO)</h3>
          <p className="mb-4">Sie haben ein Recht auf Berichtigung und/oder Vervollständigung gegenüber dem Verantwortlichen, sofern die verarbeiteten personenbezogenen Daten, die Sie betreffen, unrichtig oder unvollständig sind.</p>

          <h3 className="text-lg font-medium mb-2">7.3 Recht auf Löschung (Art. 17 DSGVO)</h3>
          <p className="mb-4">Sie können von dem Verantwortlichen verlangen, dass die Sie betreffenden personenbezogenen Daten unverzüglich gelöscht werden, sofern einer der folgenden Gründe zutrifft:</p>
          <ul className="list-disc pl-6 mb-4 space-y-1">
            <li>Die Sie betreffenden personenbezogenen Daten sind für die Zwecke, für die sie erhoben oder auf sonstige Weise verarbeitet wurden, nicht mehr notwendig.</li>
            <li>Sie widerrufen Ihre Einwilligung, auf die sich die Verarbeitung gem. Art. 6 Abs. 1 lit. a oder Art. 9 Abs. 2 lit. a DSGVO stützte, und es fehlt an einer anderweitigen Rechtsgrundlage für die Verarbeitung.</li>
            <li>Sie legen gem. Art. 21 Abs. 1 DSGVO Widerspruch gegen die Verarbeitung ein und es liegen keine vorrangigen berechtigten Gründe für die Verarbeitung vor, oder Sie legen gem. Art. 21 Abs. 2 DSGVO Widerspruch gegen die Verarbeitung ein.</li>
            <li>Die Sie betreffenden personenbezogenen Daten wurden unrechtmäßig verarbeitet.</li>
            <li>Die Löschung der Sie betreffenden personenbezogenen Daten ist zur Erfüllung einer rechtlichen Verpflichtung nach dem Unionsrecht oder dem Recht der Mitgliedstaaten erforderlich, dem der Verantwortliche unterliegt.</li>
            <li>Die Sie betreffenden personenbezogenen Daten wurden in Bezug auf angebotene Dienste der Informationsgesellschaft gemäß Art. 8 Abs. 1 DSGVO erhoben.</li>
          </ul>

          <h3 className="text-lg font-medium mb-2">7.4 Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</h3>
          <p className="mb-4">Sie können die Einschränkung der Verarbeitung der Sie betreffenden personenbezogenen Daten verlangen, wenn eine der folgenden Voraussetzungen gegeben ist:</p>
          <ul className="list-disc pl-6 mb-4 space-y-1">
            <li>die Richtigkeit der Sie betreffenden personenbezogenen von Ihnen bestritten wird, und zwar für eine Dauer, die es dem Verantwortlichen ermöglicht, die Richtigkeit der personenbezogenen Daten zu überprüfen;</li>
            <li>die Verarbeitung unrechtmäßig ist und Sie die Löschung der personenbezogenen Daten ablehnen und stattdessen die Einschränkung der Nutzung der personenbezogenen Daten verlangen;</li>
            <li>der Verantwortliche die personenbezogenen Daten für die Zwecke der Verarbeitung nicht länger benötigt, Sie diese jedoch zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen benötigen;</li>
            <li>Sie Widerspruch gegen die Verarbeitung gemäß Art. 21 Abs. 1 DSGVO eingelegt haben und noch nicht feststeht, ob die berechtigten Gründe des Verantwortlichen gegenüber Ihren Gründen überwiegen.</li>
          </ul>

          <h3 className="text-lg font-medium mb-2">7.5 Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</h3>
          <p className="mb-4">Sie haben das Recht, die Sie betreffenden personenbezogenen Daten, die Sie dem Verantwortlichen bereitgestellt haben, in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten. Außerdem haben Sie das Recht, diese Daten einem anderen Verantwortlichen ohne Behinderung durch den Verantwortlichen, dem die personenbezogenen Daten bereitgestellt wurden, zu übermitteln, sofern die Verarbeitung auf der Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO oder Art. 9 Abs. 2 lit. a DSGVO oder auf einem Vertrag gemäß Art. 6 Abs. 1 lit. b DSGVO beruht.</p>

          <h3 className="text-lg font-medium mb-2">7.6 Widerspruchsrecht (Art. 21 DSGVO)</h3>
          <p className="mb-4">Sie haben das Recht, aus Gründen, die sich aus ihrer besonderen Situation ergeben, jederzeit gegen die Verarbeitung der Sie betreffenden personenbezogenen Daten, die aufgrund von Art. 6 Abs. 1 lit. e oder f DSGVO erfolgt, Widerspruch einzulegen. Der Verantwortliche verarbeitet die Sie betreffenden personenbezogenen Daten nicht mehr, es sei denn, er kann zwingende schutzwürdige Gründe für die Verarbeitung nachweisen, die Ihre Interessen, Rechte und Freiheiten überwiegen, oder die Verarbeitung dient der Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen.</p>

          <h3 className="text-lg font-medium mb-2">7.7 Recht auf Widerruf einer datenschutzrechtlichen Einwilligung (Art. 7 Abs. 3 DSGVO)</h3>
          <p className="mb-4">Sie haben das Recht, Ihre datenschutzrechtliche Einwilligung jederzeit zu widerrufen. Durch den Widerruf der Einwilligung wird die Rechtmäßigkeit der aufgrund der Einwilligung bis zum Widerruf erfolgten Verarbeitung nicht berührt.</p>

          <h3 className="text-lg font-medium mb-2">7.8 Automatisierte Entscheidung im Einzelfall einschließlich Profiling (Art. 22 DSGVO)</h3>
          <p className="mb-4">Sie haben das Recht, nicht einer ausschließlich auf einer automatisierten Verarbeitung – einschließlich Profiling – beruhenden Entscheidung unterworfen zu werden, die Ihnen gegenüber rechtliche Wirkung entfaltet oder Sie in ähnlicher Weise erheblich beeinträchtigt. Wir verwenden keine automatisierten Entscheidungsfindungen oder Profiling-Verfahren.</p>

          <h3 className="text-lg font-medium mb-2">7.9 Recht auf Beschwerde bei einer Aufsichtsbehörde (Art. 77 DSGVO)</h3>
          <p>Unbeschadet eines anderweitigen verwaltungsrechtlichen oder gerichtlichen Rechtsbehelfs steht Ihnen das Recht auf Beschwerde bei einer Aufsichtsbehörde zu, wenn Sie der Ansicht sind, dass die Verarbeitung der Sie betreffenden personenbezogenen Daten gegen die DSGVO verstößt. Die Aufsichtsbehörde, bei der die Beschwerde eingereicht wurde, unterrichtet den Beschwerdeführer über den Stand und die Ergebnisse der Beschwerde einschließlich der Möglichkeit eines gerichtlichen Rechtsbehelfs nach Art. 78 DSGVO.</p>
          <p className="mt-2">Zuständige Aufsichtsbehörde für den Main-Bildung Förderverein e.V.:</p>
          <p className="font-semibold mt-2">Bayerisches Landesamt für Datenschutzaufsicht (BayLDA)</p>
          <p>Promenade 27</p>
          <p>91522 Ansbach</p>
          <p>Telefon: +49 (0) 981 53 1300</p>
          <p>E-Mail: poststelle@lda.bayern.de</p>
          <p>Website: <a href="https://www.lda.bayern.de" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">www.lda.bayern.de</a></p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">8. Datensicherheit</h2>
          <p>Wir verwenden innerhalb des Website-Besuchs das verbreitete SSL-Verfahren (Secure Socket Layer) in Verbindung mit der jeweils höchsten Verschlüsselungsstufe, die von Ihrem Browser unterstützt wird. Alle Daten, die Sie an uns übermitteln, können so nicht von Dritten mitgelesen werden. Wir bedienen uns außerdem geeigneter technischer und organisatorischer Sicherheitsmaßnahmen, um Ihre Daten gegen zufällige oder vorsätzliche Manipulationen, teilweisen oder vollständigen Verlust, Zerstörung oder gegen den unbefugten Zugriff Dritter zu schützen.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">9. Aktualität und Änderung dieser Datenschutzerklärung</h2>
          <p>Diese Datenschutzerklärung ist aktuell gültig und hat den Stand Februar 2026. Durch die Weiterentwicklung unserer Website und Angebote darüber oder aufgrund geänderter gesetzlicher beziehungsweise behördlicher Vorgaben kann es notwendig werden, diese Datenschutzerklärung zu ändern. Die jeweils aktuelle Datenschutzerklärung kann jederzeit auf der Website unter <a href="/legal/datenschutz" className="text-blue-600 hover:underline">www.main-bildung.de/legal/datenschutz</a> von Ihnen abgerufen und ausgedruckt werden.</p>
        </section>
      </div>
    </div>
  );
};
