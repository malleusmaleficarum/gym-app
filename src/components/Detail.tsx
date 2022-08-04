import { Stack, Button, Typography } from "@mui/material";
import BodyPartImage from "../assets/icons/body-part.png";
import TargetImage from "../assets/icons/target.png";
import EquipmentImage from "../assets/icons/equipment.png";

const Detail = ({ exerciseDetail }: any) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;
  const extraDetail = [
    {
      icon: BodyPartImage,
      name: bodyPart,
    },
    {
      icon: TargetImage,
      name: target,
    },
    {
      icon: EquipmentImage,
      name: equipment,
    },
  ];

  return (
    <Stack
      gap='60px'
      sx={{ flexDirection: { lg: "row" }, p: "20px", alignItems: "center" }}
    >
      <img src={gifUrl} alt={name} loading='lazy' className='detail-image' />
      <Stack sx={{ gap: { lg: "35px", xs: "20px" } }}>
        <Typography variant='h4'>{name}</Typography>
        <Typography>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia quas
          nostrum esse magnam tempore dolores repudiandae labore dolorem magni
          voluptatem dolor rerum delectus recusandae dolorum similique, alias
          sunt expedita ipsam est, accusamus maxime corrupti sit consectetur.
        </Typography>
        {extraDetail.map((item: any, i: any) => (
          <Stack key={i} direction='row' gap='24px' alignItems='center'>
            <Button
              sx={{
                background: "#fff2db",
                borderRadius: "50%",
                width: "100px",
                height: "100px",
              }}
            >
              <img
                src={item.icon}
                alt='icon'
                style={{ width: "50px", height: "50px" }}
              />
            </Button>
            <Typography variant='h5' textTransform='capitalize'>
              {item.name}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default Detail;
