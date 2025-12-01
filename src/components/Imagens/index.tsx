import { Box, Typography } from '@mui/material';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

const Imagens = () => {
    return (
        <Box id="galeria" sx={{ py: { xs: 6, md: 10 }, px: 2 }}>
            <Box sx={{ maxWidth: "1100px", mx: "auto" }}>

                {/* TÍTULO */}
                <Box sx={{ textAlign: "center", mb: 6 }}>
                    <Typography
                        variant="h4"
                        sx={{
                            fontWeight: "bold",
                            fontSize: { xs: "22px", sm: "32px" },
                            letterSpacing: "-0.015em",
                        }}
                    >
                        Imagens
                    </Typography>

                    <Typography
                        sx={{
                            color: "gray",
                            mt: 2,
                            maxWidth: "700px",
                            mx: "auto",
                            fontSize: "1rem"
                        }}
                    >
                        Confira alguns registros de nossos eventos, celebrações e da vida em comunidade na Paróquia Santo Expedito.
                    </Typography>
                </Box>

                {/* CARROSSEL */}
                <Box sx={{ position: "relative" }}>
                    <Swiper
                        modules={[Navigation, Pagination]}
                        navigation
                        pagination={{ clickable: true }}
                        slidesPerView={1}
                        loop
                        spaceBetween={20}
                        style={{ paddingBottom: "40px" }}
                    >
                        {/* SLIDE 1 */}
                        <SwiperSlide>
                            <Box
                                sx={{
                                    width: "100%",
                                    aspectRatio: "16 / 9",
                                    backgroundImage:
                                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDTOp1wfWLfOqHpGkAKED0A4r-RI5DI-bTBFDioK5_GslOhFF6eixAsGdD2DRfQV-qSHQAFmzmDD03piHAvpH-xPOxyO9OzZAn4E2IqH-8D6ZkHcCC8qcL311g1KRBJt9BhO9HlZj3zhgl6ZhumJKpLkqM_CRj_AKLCwSPTctKi_aS9EpUkIjrDkzFpsOGSORqouIH72VToVm2tKfrnZfvyt9kaQlDGcyjc18ZQqjvKLEUhrxjRomLu-aL_z1xW5VtcXwVIZZVQyMYR")',
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    borderRadius: 3
                                }}
                            />
                        </SwiperSlide>

                        {/* SLIDE 2 */}
                        <SwiperSlide>
                            <Box
                                sx={{
                                    width: "100%",
                                    aspectRatio: "16 / 9",
                                    backgroundImage:
                                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA8E48RUOiHnDzmQlut_Iz5YfPgkcpyVofuRjP5mURsAZ3_Mr7Rp3LxUdPciqc3GJRX5cyN2zdd8kSOMBegTr5_JrnzHOVJ8pH-j3azWslsQyRzqYiy0Asm2BbFRu-KHiSXnF43cmkPWKpTa7lbDy5D454wYhoAbV4Ngy4oVLPiBF_BjSnpPRUWQ8ceXcbQgqUHHxCHQqdO6iUIj7aZhcLWFPY_TwJXlMQe_VSzTE7xGt2y2U5v6v2PPR7NV2CyAOhoXmP85llYNWPj")',
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    borderRadius: 3
                                }}
                            />
                        </SwiperSlide>

                        {/* SLIDE 3 */}
                        <SwiperSlide>
                            <Box
                                sx={{
                                    width: "100%",
                                    aspectRatio: "16 / 9",
                                    backgroundImage:
                                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAq1BlTEm6KtecFWovHYhA4pSZ1wi7prgnUqN-nUaO2hop2jBH_vqKNj9w6gk5d3OMuRwn-LeXTc0NCtGnqzJXGuYdLDkU4J4Aj7suxmh0LmUuPAC7fYVmYWBYwZ0uAVs3P_PCH_K8fIJsO-MeyG2UmxR3sNSxq9YRsFQibEv3LqJPW7oEJhxJtUhlEKIPGZ405n41G2e-uUQwNdkUuWbPnQnRpYbONBCo_zSDsG9SA9xQDcQotYoe4E9hCfHq0N1DZlWe6Vzupkdee")',
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    borderRadius: 3
                                }}
                            />
                        </SwiperSlide>
                    </Swiper>
                </Box>
            </Box>
        </Box>
    )
}

export default Imagens;
