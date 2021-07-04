import react from 'react'
import './frontend.css'
import College from './frontend task/colleges.json'
import img from './frontend task/college_02.jpg'
const FrontendTask = () => {
  const styleStyle = {
    fontWeight: 'bold',
    fontSize: '13px',
  }
  return (
    <>
      <p className="text-left ml-2">Colleges in North India</p>
      <div className="row m-0 p-0 text-center">
        {College.colleges.map((info, index) => (
          <div className="main" key={index}>
            <div className="box1 img_section">
              <img src={img} alt="college" />
              <div className="overlay"></div>
              <div className="promoted">
                <div className="arrow_right"></div>
                <div className="ml-4 p-1">PROMOTED</div>
              </div>

              <div className="rating_remarks">
                <span>
                  <span style={{ fontWeight: 'bold' }}>3.9</span>/5
                </span>
                <h6>{info.rating_remarks}</h6>
              </div>
              {/*  */}
              <div className="bottom">
                <div className="left">
                  <div className="mb-2">{info.tags[0]}</div>
                  <div className="mb-2">{info.tags[1]}</div>
                </div>
                <div className="right">
                  <p>#{info.ranking}</p>
                </div>
              </div>
            </div>

            {/* bottom of image */}
            <div className="row">
              {/* left */}
              <div className="col-8 text-left mt-2">
                <div className="ml-1">
                  <h5
                    style={{ fontSize: '19px' }}
                    className="d-flex align-items-center"
                  >
                    {info.college_name}
                    <div style={{ fontSize: '10px', marginLeft: '2px' }}>
                      {['star', 'star', 'star', 'star', 'star-o'].map(
                        (info) => (
                          <i className={`fa fa-${info}`}></i>
                        ),
                      )}
                    </div>
                  </h5>
                  <div style={{ fontSize: '12px' }}>
                    {info.nearest_place[0]} {' |'}
                    <span className="text-muted">
                      {' '}
                      {info.nearest_place[1]}{' '}
                    </span>
                  </div>
                  <div style={{ fontSize: '13px' }}>
                    <span style={(styleStyle, { color: '#6ef0af' })}>
                      93% Match :{' '}
                    </span>
                    <span style={styleStyle}>
                      {info.famous_nearest_places.split(' ')[0]}{' '}
                    </span>
                    <span className="text-muted">
                      {info.famous_nearest_places.split(' ')[1]}{' '}
                      {info.famous_nearest_places.split(' ')[2]}{' '}
                      {info.famous_nearest_places.split(' ')[3]}{' '}
                    </span>
                    <span style={styleStyle}>
                      {info.famous_nearest_places.split(' ')[4]}{' '}
                      {info.famous_nearest_places.split(' ')[5]}{' '}
                    </span>
                    <span className="text-muted">
                      {info.famous_nearest_places.split(' ')[6]}{' '}
                      {info.famous_nearest_places.split(' ')[7]}{' '}
                      {info.famous_nearest_places.split(' ')[8]}{' '}
                    </span>
                  </div>
                </div>
                <div className="mt-2 offertext p-2">
                  {info.offertext.split(' ')[0]}{' '}
                  <span style={styleStyle}>
                    {info.offertext.split(' ')[1].split(',')[0]}{' '}
                    <span style={{ color: '#6ef0af' }}>
                      {' '}
                      {info.offertext.split(' ')[2]}
                    </span>{' '}
                    {info.offertext.split(' ')[3]}{' '}
                    {info.offertext.split(' ')[4]}{' '}
                    {info.offertext.split(' ')[5]}{' '}
                    {info.offertext.split(' ')[6]}{' '}
                    <span style={{ color: '#6ef0af' }}>
                      {' '}
                      {info.offertext.split(' ')[7]}{' '}
                    </span>{' '}
                    {info.offertext.split(' ')[8]}{' '}
                    {info.offertext.split(' ')[9]}{' '}
                    {info.offertext.split(' ')[10]}{' '}
                    <span style={{ color: '#6ef0e3' }}>
                      {info.offertext.split(' ')[11]}{' '}
                    </span>
                  </span>
                </div>
              </div>

              {/* right */}
              <div className="col-4">
                <div className="discount d-flex mt-2 justify-content-end mr-3">
                  <div style={{ textDecoration: 'line-through' }}>
                    <i className="fa fa-inr"></i> {info.original_fees}
                  </div>
                  <div className="d-flex discount_symbol ml-2">
                    <div className="right_arrow "></div>
                    <div className="circle"></div>
                    <div className="box">{info.discount}</div>
                  </div>
                </div>
                <div className="text-right mt-2 mr-3">
                  <h4 className="text-danger ">
                    <i className="fa fa-inr"></i> {info.discounted_fees}
                  </h4>
                  <span className="mt-0" style={{ fontSize: '12px' }}>
                    {info.fees_cycle}
                  </span>
                  <div
                    className="d-flex "
                    style={{
                      fontSize: '11px',
                      fontWeight: 'bold',
                      color: 'rgb(95, 218, 162)',
                    }}
                  >
                    <span>{info.amenties[0]}</span>
                    <span>
                      <div className="dot ml-1 mr-1"></div>
                    </span>
                    <span>{info.amenties[1]}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default FrontendTask
