import fire from '../../config/fire-config';
import Link from 'next/link';
import Nav from '../../components/Nav';

const Blog = (props) => {


  return (
    <>
      <Nav />
      <div>
        <h2>{props.title}</h2>
        <div style={{ display: 'flex', flexDirection: 'row', }}>
          <h6>{props.content}</h6>
          <h6>{props.vin}</h6>
          <h6>{props.price}</h6>
          <h6>{props.fuelType}</h6>
          <h6>{props.odometer}</h6>
          <h6>{props.year}</h6>
          <h6>{props.transmissionType}</h6>
          <h6>{props.make}</h6>
          <h6>{props.model}</h6>
          <h6>{props.condition}</h6>
          <h6>{props.interiorColor}</h6>
          <h6>{props.paintColor}</h6>
          <h6>{props.titleStatus}</h6>
          <h6>{props.passedSmog}</h6>
          <h6>{props.negotiablePrice}</h6>
          <h6>{props.drive}</h6>
          <h6>{props.originalOwner}</h6>
          <h6>{props.issueNoticed}</h6>
        </div>
        <Link href="/">
          <a>Back</a>
        </Link>
      </div>
    </>
  )
}
export const getServerSideProps = async ({ query }) => {
  const content = {}
  await fire.firestore()
    .collection('blogs')
    .doc(query.id)
    .get()
    .then(result => {
      content['title'] = result.data().title;
      content['content'] = result.data().content;
      content['vin'] = result.data().vin;
      content['price'] = result.data().price;
      content['fuelType'] = result.data().fuelType;
      content['odometer'] = result.data().odometer;
      content['year'] = result.data().year;
      content['transmissionType'] = result.data().transmissionType;
      content['vehicleType'] = result.data().vehicleType;
      content['make'] = result.data().make;
      content['model'] = result.data().model;
      content['condition'] = result.data().condition;
      content['interiorColor'] = result.data().interiorColor;
      content['paintColor'] = result.data().paintColor
      content['titleStatus'] = result.data().titleStatus;
      content['passedSmog'] = result.data().passedSmog;
      content['negotiablePrice'] = result.data().negotiablePrice;
      content['drive'] = result.data().drive;
      content['originalOwner'] = result.data().originalOwner;
      content['issueNoticed'] = result.data().issueNoticed;
    });
  return {
    props: {
      title: content.title,
      content: content.content,
      vin: content.vin,
      price: content.price,
      fuelType: content.fuelType,
      odometer: content.odometer,
      year: content.year,
      transmissionType: content.transmissionType,
      vehicleType: content.vehicleType,
      make: content.make,
      model: content.model,
      condition: content.condition,
      interiorColor: content.interiorColor,
      paintColor: content.paintColor,
      titleStatus: content.titleStatus,
      passedSmog: content.passedSmog,
      negotiablePrice: content.negotiablePrice,
      drive: content.drive,
      originalOwner: content.originalOwner,
      issueNoticed: content.issueNoticed,
    }
  }
}
export default Blog