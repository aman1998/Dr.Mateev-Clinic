import { NavLink } from 'react-router-dom';
const Section1 = () => {
  return (
    <section className='section-1'>
      <div className='container'>
        <div className='title'>Виды операций</div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique eget lectus ut id. Aenean aliquet ut vitae nisl, dignissim lectus adipiscing. Id elementum magna viverra cursus ac id pharetra odio aliquam. Et volutpat enim id amet vitae. Id sapien nunc dictumst non quisque euismod. Tristique enim quam arcu elementum pellentesque non. Donec justo sit pharetra tempus. Enim ut risus ut vitae hendrerit lobortis ultricies arcu vitae. Arcu, quam venenatis ullamcorper pharetra ac dignissim integer. Blandit elit cursus odio euismod pellentesque fringilla. Scelerisque integer molestie at dolor hendrerit ornare est tristique. Suspendisse congue nullam bibendum nibh sit pellentesque. Scelerisque libero imperdiet molestie et, cras pellentesque leo, mauris scelerisque.
        </p>
        <div className='views'>
          <div className='left'>
            <div className='view-wrapper'>
              <h2 className='view-title'>Пластические операции</h2>
              <div className='view'>Подтяжка лица</div>
              <div className='view'>Пластика век</div>
              <div className='view'>Контурная пластика губ</div>
              <div className='view'>Липосакция</div>
              <div className='view'>Пластика живота</div>
              <div className='view'>Пластика груди</div>
              <div className='view'>Пластика дефектов после огнестрельных ранений</div>
              <div className='view'>Пластика заячьей губы</div>
              <div className='view'>Пластика послеоперационных рубцов</div>
              <div className='view'>Пластика травматических дефектов</div>
              <div className='view'>Пластика послеожоговых контрактур</div>
              <div className='view'>Пластика врожденных ложных суставов</div>
              <div className='view'>Пластика врожденных ложных суставов</div>
              <div className='view'>Эндопротезирование груди силиконовыми имплантами</div>
            </div>
            <NavLink to='/portfolio/1'>
              <div className='btn'>Узнать подробнее</div>
            </NavLink>
          </div>
          <div className='right'>
            <div className='view-wrapper'>
              <h2 className='view-title'>Реконструктивные операции</h2>
              <div className='view'>Микрохирургический шов повреждений нервов верхней конечности</div>
              <div className='view'>Микрохирургический шов сухожилий кисти</div>
              <div className='view'>Хирургическое лечение болей в кисти</div>
              <div className='view'>Хирургическая коррекция деформаций конечностей при ДЦП детей</div>
            </div>
            <NavLink to='/portfolio/1'>
              <div className='btn'>Узнать подробнее</div>
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Section1