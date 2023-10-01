import { Grid } from "@mui/material";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

const arr = [1, 2, 3, 4, 5, 6, 7, 8]
export default function Imgs() {
    return (
        <>
            <Grid container spacing={2} >
                {arr.map(item => (
                    <Grid item xs={3}>
                        <Card sx={{ maxWidth: 310 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    maxHeight="300"
                                    image="https://haycafe.vn/wp-content/uploads/2022/02/Anh-gai-xinh-Viet-Nam-682x600.jpg"
                                    alt={item}
                                />
                            </CardActionArea>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </>
    )
}

// import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import { CardActionArea } from '@mui/material';

// export default function ActionAreaCard() {
//     return (
// <Card sx={{ maxWidth: 190 }}>
//     <CardActionArea>
//         <CardMedia
//             component="img"
//             height="200"
//             image="/static/images/cards/contemplative-reptile.jpg"
//         />
//     </CardActionArea>
// </Card>
//     );
// }