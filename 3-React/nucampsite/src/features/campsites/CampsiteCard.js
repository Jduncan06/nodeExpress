import {Card} from 'reactstrap';
import {CardImg} from 'reactstrap';
import {CardImgOverlay} from 'reactstrap';
import {CardTitle} from 'reactstrap';

const CampsiteCard = (props)=>{
    return(
        <Card>
            <CardImg
                width = '100%'
                src={props.campsite.image}
                alt={props.campsite.name}
            />
            <CardImgOverlay>
                <CardTitle>{props.campsite.name}</CardTitle>
            </CardImgOverlay>
        </Card>
    );
};
export default CampsiteCard;