import { useTranslation } from 'react-i18next';

const Section4 = () => {
  const { t } = useTranslation()
  
  return (
    <section className='section-4'>
      <div className='container'>
        <h2 className='title'>{t('title.8')}</h2>
        <div className='text'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nisi, morbi etiam in lobortis faucibus massa. Accumsan sagittis lacus et sollicitudin varius montes, pretium. Turpis rutrum pulvinar nulla ultricies velit. Tellus ultrices risus, consequat etiam fermentum lacinia purus in. Elementum dictum lacus, lectus id risus. Ac dolor at in eleifend sit elit pellentesque dictumst.
        </div>
      </div>
    </section>
  )
}

export default Section4