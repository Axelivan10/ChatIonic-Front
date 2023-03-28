import {
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonPage,
  IonTitle,
  IonToolbar,
  IonSearchbar,
  IonBadge,
  IonList,
  IonButtons,
  IonBackButton,
} from "@ionic/react";

import ExploreContainer from "../components/ExploreContainer";

import "./TerminosyCondiciones.css";
const TerminosyCondiciones: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
        <IonButtons slot="start">
            <IonBackButton defaultHref={"/registro"} />
          </IonButtons>
          <IonTitle>Terminos y Condiciones</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen={true}>
        <div className="contenedorprincipal">
          <div className="contenedortexto">
            <h1>Política de privacidad de Achat</h1>

            <div className="div">
              <h2>1. Introducción</h2>
              <p>
                La Política de privacidad de Achat describe cómo se utilizan y
                protegen los datos personales que se proporcionan o se obtienen
                al utilizar los servicios basados en la nube y de mensajería de
                Achat.
              </p>
              <div>
                <h4>1.1 Principios de privacidad</h4>
                <p>
                  Achat tiene dos principios fundamentales en cuanto a la
                  recopilación y procesamiento de datos personales: no
                  utilizamos sus datos para mostrarle anuncios y solo
                  almacenamos los datos necesarios para que Achat funcione como
                  un servicio de mensajería seguro y rico en funciones.
                </p>
              </div>
              <div>
                <h4>1.2 Términos de servicio</h4>
                <p>
                  Esta Política de privacidad forma parte de nuestros Términos
                  de servicio, que describen los términos bajo los cuales usted
                  utiliza nuestros servicios y están disponibles en nuestro
                  sitio web. Por lo tanto, esta Política de privacidad debe
                  leerse junto con dichos términos.
                </p>
              </div>
            </div>
            <div className="div">
              <h2>2. Datos personales</h2>
              <p>
                Tratamos sus datos personales en base a que ese tratamiento es
                necesario para promover nuestros intereses legítimos, que
                incluyen: 1 brindar servicios eficaces e innovadores a nuestros
                usuarios, y 2 detectar, prevenir o abordar el fraude o problemas
                de seguridad relacionados con la provisión de nuestros
                servicios. Sin embargo, si sus intereses o derechos y libertades
                fundamentales que requieren la protección de datos personales
                anulan estos intereses legítimos, no llevaremos a cabo dicho
                tratamiento.
              </p>
              <div>
                <h4>2.1 Datos básicos de la cuenta</h4>
                <p>
                  Achat es un servicio de comunicación que requiere que
                  proporcione su número de teléfono móvil y algunos datos
                  básicos para crear su cuenta. Estos datos pueden incluir su
                  nombre de perfil, imagen de perfil y otra información
                  necesaria para crear y administrar su cuenta de Achat. Para
                  facilitar la comunicación con sus contactos y otras personas,
                  su nombre de perfil, imagen de perfil y nombre de usuario (si
                  decide configurarlo) en Achat son públicos. Sin embargo, en
                  Achat no solicitamos ni almacenamos información personal
                  adicional, como su nombre real, género, edad o intereses
                  personales.
                </p>
              </div>
              <div>
                <h4>2.2 Su dirección de correo electrónico</h4>
                <p>
                  Cuando decides almacenar información en Achat, puedes elegir
                  configurar un correo electrónico de recuperación de
                  contraseña. Esta dirección se usará únicamente para enviar un
                  código de recuperación de contraseña en caso de que la
                  olvides. A partir de este año, es posible que solicitemos a
                  algunos usuarios que proporcionen una dirección de correo
                  electrónico para recibir códigos de inicio de sesión por
                  correo electrónico en lugar de SMS, con la opción de usar
                  "Iniciar sesión con Google". En este caso, recibiremos una
                  dirección de correo electrónico que se almacenará por separado
                  de la dirección de correo electrónico de recuperación y solo
                  se usará para enviarte códigos de autenticación cuando inicies
                  sesión en tu cuenta. La dirección de correo electrónico de
                  inicio de sesión se almacenará hasta que cambies o elimines tu
                  cuenta. En Achat, respetamos tu privacidad y solo recopilamos
                  la información necesaria para brindarte un servicio seguro y
                  efectivo de comunicación.
                </p>
              </div>
              <div>
                <h4>2.3 Tus mensajes</h4>
                <p>
                  Achat es un servicio en la nube que ofrece la ventaja de
                  almacenar de manera segura y conveniente sus mensajes, fotos,
                  videos y documentos de chat en nuestros servidores. Al
                  hacerlo, puede acceder a sus datos desde cualquier
                  dispositivo, sin depender de copias de seguridad de terceros.
                  Para garantizar la seguridad de sus datos, todos los datos se
                  almacenan con un alto nivel de encriptación y las claves de
                  encriptación se almacenan en varios otros centros de datos en
                  diferentes jurisdicciones. De esta manera, se evita que
                  ingenieros locales o intrusos físicos accedan a los datos del
                  usuario.
                </p>
              </div>
              <div>
                <h4>2.4 Cookies</h4>
                <p>
                  En Achat solo utilizamos cookies necesarias para operar y
                  brindar nuestros Servicios en la web, sin utilizar cookies
                  para perfiles o publicidad. Estas cookies son archivos de
                  texto pequeños que nos permiten personalizar nuestros
                  Servicios para proporcionar una mejor experiencia de usuario.
                  Su navegador puede controlar estas cookies, incluyendo la
                  opción de aceptarlas o no y de eliminarlas. Tenga en cuenta
                  que si desactiva estas cookies, no podrá iniciar sesión en
                  Achat Web.
                </p>
              </div>
            </div>

            <div className="div">
              <h2>3. Con quien compartir sus datos personales</h2>
              <div>
                <h4>3.1 Otros usuarios de Telegram</h4>
                <p>
                  Achat se rige por dos principios fundamentales en lo que
                  respecta a la recopilación y el procesamiento de datos
                  privados: no utilizamos sus datos para mostrarle anuncios y
                  solo almacenamos los datos necesarios para que Achat funcione
                  como un servicio de mensajería seguro y rico en funciones.
                </p>
              </div>
            </div>
            <div className="div">
              <h2>
                4. Sus derechos con respecto a los datos personales que nos
                proporciona
              </h2>
              <div>
                <h4>4.1 Ejercicio de sus derechos</h4>
                <p>
                  "Achat se rige por dos principios fundamentales en cuanto a la
                  recopilación y procesamiento de datos privados: respetamos sus
                  derechos de privacidad y no utilizamos sus datos para fines
                  publicitarios. Si desea ejercer alguno de estos derechos, no
                  dude en ponerse en contacto con nosotros utilizando la
                  información de contacto proporcionada en la sección 12 que se
                  encuentra a continuación.
                </p>
              </div>
              <div>
                <h4>4.1 Configuración de datos</h4>
                <p>
                  En la sección de Configuración de datos de Privacidad y
                  seguridad, puede controlar cómo se utilizan sus datos,
                  incluyendo la opción de eliminar contactos sincronizados.
                  Tenga en cuenta que para poder utilizar nuestros Servicios,
                  debe aceptar nuestros modestos requisitos mínimos de Achat. Si
                  desea eliminar su cuenta de Achat, puede hacerlo a través de
                  la página de eliminación.
                </p>
              </div>
            </div>
            <div className="div">
              <h2>5. Cambios a esta Política de Privacidad</h2>
              <div>
                <h4>5.1 Versiones </h4>
                <p>
                  Achat revisa y actualiza su Política de privacidad de forma
                  regular. Cualquier modificación a esta Política de privacidad
                  entrará en vigor en el momento en que publiquemos la versión
                  actualizada en la página web www.achat.com. Le recomendamos
                  que visite nuestro sitio web con frecuencia para conocer
                  cualquier actualización o cambio en nuestra Política de
                  privacidad. En Achat, seguimos dos principios fundamentales
                  cuando se trata de la recopilación y el procesamiento de datos
                  privados. Si desea ejercer cualquiera de sus derechos, póngase
                  en contacto con nosotros utilizando los detalles
                  proporcionados en la sección 12 a continuación. Además, si
                  realizamos cambios significativos en esta Política de
                  privacidad, le informaremos a través de Achat.
                </p>
              </div>
            </div>
            <div className="div">
              <h2>6. Eliminación de datos</h2>
              <div>
                <h4>6.1 cuentas </h4>
                <p>
                  Si deseas eliminar tu cuenta, puedes hacerlo en la página de
                  desactivación. Ten en cuenta que, al eliminar tu cuenta, se
                  eliminarán todos los mensajes, medios, contactos y cualquier
                  otro dato que almacenes en la nube de Achat. Esta acción debe
                  ser confirmada a través de tu cuenta de Achat y no se puede
                  deshacer.
                </p>
              </div>
              <div>
                <h4>6.2 Mensajes </h4>
                <p>
                  En los chats secretos de Telegram, si elimina un mensaje, la
                  aplicación del otro lado también recibe la indicación de
                  eliminarlo. En los chats en la nube, puede eliminar un mensaje
                  para todos los participantes dentro de las 48 horas
                  posteriores al envío. Si no lo hace, eliminar un mensaje solo
                  lo eliminará de su historial de mensajes. Esto significa que
                  una copia permanecerá en el servidor como parte del historial
                  de mensajes de su contacto. Una vez que su contacto también lo
                  elimine, desaparecerá para siempre. A partir de las versiones
                  más recientes de Telegram, cualquier persona en un chat uno a
                  uno puede optar por eliminar los mensajes, tanto los enviados
                  como los recibidos, para ambos lados, sin límite de tiempo.
                  Cualquiera de las partes también puede optar por borrar todo
                  el historial de chat para ambas partes. En ese caso, se
                  indicará a las aplicaciones que eliminen todos los mensajes en
                  ese chat, independientemente de cuántos mensajes retenga
                  cualquiera de los participantes. En los supergrupos y canales,
                  eliminar un mensaje lo elimina para todos los participantes.
                  Tenga en cuenta que los mensajes eliminados y las versiones
                  originales de los mensajes editados de los supergrupos se
                  almacenan durante 48 horas después de la eliminación para que
                  se muestren en el registro de administradores.
                </p>
              </div>
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default TerminosyCondiciones;
