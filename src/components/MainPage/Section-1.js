import { useTranslation } from 'react-i18next';

const Section1 = () => {
  const { t } = useTranslation()
  return (
    <section className='section-1'>
      <div className='container'>
        <div className='title'>{t('text.3')}</div>
        <div className='title'>{t('text.14')}</div>
      </div>
    </section>
  )
}

export default Section1