import { useGetPokemons } from "@/hooks/pokemon";
import Card from "@/components/Card";
import { Grid, Box, Dialog } from "@mui/material";
import { getDetail } from "@/services/pokemon";
import { useState } from "react";

export default function Home() {

  const { data } = useGetPokemons()
  const [openDetail, setOpenDetail] = useState(false)
  const [detail, setDetail] = useState({})

  return (
    <>
      <Grid container spacing={2}>
        {
          data?.data?.results?.map((c, idx) => (
            <Grid item xs={4} key={idx}>
              <Box display={"flex"}>
                <Card
                  name={c.name}
                  img="https://www.shutterstock.com/image-vector/cute-adorable-vector-illustration-creature-600nw-2313970711.jpg"
                  onClick={() => {
                    const response = getDetail(c.url)
                    setDetail(response)
                    setOpenDetail(true)
                  }}
                />
              </Box>
            </Grid>
          ))
        }
      </Grid>
      <Dialog open={openDetail} onClose={() => setOpenDetail(false)}>
        <Box>

        </Box>
      </Dialog>
    </>
  );
}
