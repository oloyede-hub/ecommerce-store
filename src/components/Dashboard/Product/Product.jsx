import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

const useStyles = makeStyles({
    root: {
        width: 345,
        margin: 10,
        display: "flex",
        flexDirection: "column",
    },
   
});

export default function Product({ product }) {
    const classes = useStyles();

    // console.log(JSON.stringify(product, null, 2));
    const truncateDescription = (str, maxlength) => {
        return (str.length > maxlength) ? str.slice(0, maxlength - 1) + '…' : str; 
    };

    return (
        <Card className={classes.root}>
            <CardActionArea className={classes.top}>
                <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="140"
                    image={product.media.source}

                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {product.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p" dangerouslySetInnerHTML={{ __html: truncateDescription(product.description,80) }} />
                </CardContent>
            </CardActionArea>
            <CardActions className={classes.bottom}>
                <Button size="small" color="secondary">
                    +
                </Button>
                <Button size="small" color="secondary">
                    -
                </Button>
                <Button size="small" color="secondary">
                <AddShoppingCartIcon className="icon" />
                    Add To Cart
                </Button>
            </CardActions>
        </Card>
    );
}