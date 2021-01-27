import { useTranslation } from 'react-i18next';

const Section3 = () => {
  const { t } = useTranslation()

  return (
    <section className='section-3'>
      <div className='container'>
        <h2 className='title'>{t('title.21')}</h2>
        <div className='content'>
          <div className='left'>{t('title.22')}</div>
          <div className='right'>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin elit dui aliquam elementum tristique libero pretium lobortis. Aenean facilisi eu a nulla ornare. Tristique justo, vel hendrerit non pulvinar feugiat amet. Sapien sem molestie phasellus in sed arcu. Elit amet aliquam senectus sagittis. Sociis nisi cras aenean risus donec eget cursus facilisi. Gravida egestas a, sociis eu dictum aliquam. Sed vivamus faucibus dignissim condimentum.
            Elementum eu nunc nulla mattis duis pellentesque cras id. Tristique cursus ullamcorper nec accumsan. Egestas congue tortor, cras habitant mattis duis erat. Est lacus, velit, tempor at. Amet phasellus dictum aliquam ligula amet. Et, congue ac risus nulla massa egestas rhoncus. Pharetra massa felis justo tempus suspendisse risus. 
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae ipsum nulla consectetur sagittis, sit. At vel ornare pharetra eu mi curabitur. Libero, amet vitae justo, cursus augue. Suspendisse tortor augue velit condimentum. Amet sapien egestas est, at massa, viverra fames est neque. Sit nunc, elementum tincidunt lacinia. Scelerisque imperdiet mattis nam lacus diam nulla. Ante.
            </p>
          </div>
        </div>
        <div className='content content--2'>
          <div className='left'>{t('title.23')}</div>
          <div className='right'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin elit dui aliquam elementum tristique libero pretium lobortis. Aenean facilisi eu a nulla ornare. Tristique justo, vel hendrerit non pulvinar feugiat amet. Sapien sem molestie phasellus in sed arcu. Elit amet aliquam senectus sagittis. Sociis nisi cras aenean risus donec eget cursus facilisi. Gravida egestas a, sociis eu dictum aliquam. Sed vivamus faucibus dignissim condimentum.
              Elementum eu nunc nulla mattis duis pellentesque cras id. Tristique cursus ullamcorper nec accumsan. Egestas congue tortor, cras habitant mattis duis erat. Est lacus, velit, tempor at. Amet phasellus dictum aliquam ligula amet. Et, congue ac risus nulla massa egestas rhoncus. Pharetra massa felis justo tempus suspendisse risus. 
              </p>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae ipsum nulla consectetur sagittis, sit. At vel ornare pharetra eu mi curabitur. Libero, amet vitae justo, cursus augue. Suspendisse tortor augue velit condimentum. Amet sapien egestas est, at massa, viverra fames est neque. Sit nunc, elementum tincidunt lacinia. Scelerisque imperdiet mattis nam lacus diam nulla. Ante.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Section3