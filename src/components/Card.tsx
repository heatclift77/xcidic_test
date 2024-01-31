/* eslint-disable @next/next/no-img-element */
import {
    Box,
    Button,
    Typography
} from "@mui/material"

interface Props {
    name: string
    img: string
    onClick?: () => void
}

function Card({
    name,
    img,
    onClick
}: Props) {
    return (
        <Button onClick={onClick}>
            <Box display={"flex"} justifyContent={"center"} bgcolor={"#dbdbd9"}>
                <Box width={"100px"} height={"120px"}>
                    <img src={img} alt="image" style={{ width: "100%" }} />
                </Box>
            </Box>
            <Typography fontWeight={700}>{name}</Typography>
        </Button>
    )
}

export default Card