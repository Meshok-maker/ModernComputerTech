import { Button, FormControl, Input, InputLabel } from "@mui/material";
import React, { useState } from "react";

const AllImages = ["https://adijuhpalace.ru/800/600/https/n1s1.elle.ru/e4/14/6b/e4146b309f701b7e040b31ca16f58157/1920x1200_0xc35dbb80_17119083041493282650.jpeg",
    "https://www.mushroomtravel.com/page/wp-content/uploads/2018/10/pixabay-the-eiffel-tower-4104637_1920.jpg",
    "https://russland-reisen.de/wp-content/uploads/2019/08/Premium-Reisen-Moskau-e1566306865487.jpg"];


const Pictures = () => {

    const [Images, setImages] = useState(AllImages);
    const [changeble, setChangeble] = useState({ first: 0, second: 0 });

    const handleClickChangePic: React.MouseEventHandler<HTMLButtonElement> = (event) => {
        const temp = Images;
        const tempIndex = temp[changeble.first];
        temp[changeble.first] = temp[changeble.second];
        temp[changeble.second] = tempIndex;
        setImages(temp);
        setChangeble(prev => ({ ...prev }));
        console.log(changeble);

    }

    const handleIndexChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        console.log(event.target);
        setChangeble(prev => ({ ...prev, [event.target.id]: Number(event.target.value) }));
    }


    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div>
                {
                    Images.map((item, index) => (<img key={index} style={{ marginLeft: "5px", objectFit: "cover", height: "210px" }} src={item} />))
                }
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <FormControl style={{ flex: 1 }}>

                    <InputLabel htmlFor="first">Номер первой картинки</InputLabel>

                    <Input inputProps={{ min: "0", max: "2" }} type="number" id="first" value={changeble.first} onChange={handleIndexChange} />


                </FormControl>

                <FormControl style={{ flex: 1 }}>

                    <InputLabel htmlFor="second">Номер второй картинки</InputLabel>

                    <Input inputProps={{ min: "0", max: "2" }} type="number" id="second" value={changeble.second} onChange={handleIndexChange} />

                </FormControl>

                <Button variant="outlined" onClick={handleClickChangePic}>Поменять местами</Button>
            </div>

        </div>
    );
}

export default Pictures;