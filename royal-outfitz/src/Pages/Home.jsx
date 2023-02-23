import { AspectRatio, Box, Image, Grid, Button, Text, Stack, Heading, CardBody, Card, Center, GridItem } from "@chakra-ui/react";
function Home() {
    return (
        <div>
            <h1>Home Page</h1>
            {/* <AspectRatio maxW='1500px' ratio={1} border="5px solid yellow" display="block" height="400px">
                <iframe
                    border="5px solid red"
                    title='naruto'
                    src='https://player.vimeo.com/progressive_redirect/playback/794475762/rendition/720p/file.mp4?loc=external&signature=e44109bc16e899b63407050b0ef3de6b4d340b7c275c3f287ae846c21642e404' alt='Dan Abramov'
                    allowFullScreen
                />
            </AspectRatio> */}
            
            <Box maxW='1500px' marginTop="30px">
                <Image src='https://www.charlestyrwhitt.com/on/demandware.static/-/Library-Sites-CTShirtsSharedLibrary/default/dw0c60e00a/merchAssets/SS23/Homepage/hero/febshirts-hero-desktop.jpg' alt='Dan Abramov' />
            </Box>

            <Box maxW='1500px' marginTop="30px">
                <Image src='https://www.charlestyrwhitt.com/on/demandware.static/-/Library-Sites-CTShirtsSharedLibrary/default/dw73d084aa/merchAssets/SS23/Homepage/hp/henley-hp2-desktop.jpg' alt='Dan Abramov' />
            </Box>

            <Grid templateColumns='repeat(2, 1fr)' gap={6} border="1px solid black" maxW='100%' >
                <Card width='100%' >
                    <CardBody>
                        <Image
                            src='https://www.charlestyrwhitt.com/on/demandware.static/-/Library-Sites-CTShirtsSharedLibrary/default/dw013a9536/merchAssets/SS23/Homepage/Editorial/hp1-editorial-JR-desktop.jpg'
                            alt='err'
                            borderRadius='lg'
                        />
                        <Stack mt='6' spacing='3'>
                            <Center>
                                <Heading size="18px">Our new signing, Joe Root</Heading>
                            </Center>
                            <Center>
                                <Text size="18px" color="#373737">
                                    It's going to be a busy year for our newest signing, England Cricketer Joe Root.
                                    Bringing his flair from the field to us, he shows you how he’d style our latest collection.
                                </Text>
                            </Center>
                            <Center>
                                <Button height='48px' width='400px' border='1px solid black' backgroundColor="white">
                                    SHOP NOW
                                </Button>
                            </Center>
                        </Stack>
                    </CardBody>
                </Card>

                <Card maxW='100%' >
                    <CardBody>
                        <Image
                            src='https://www.charlestyrwhitt.com/on/demandware.static/-/Library-Sites-CTShirtsSharedLibrary/default/dw0718d61d/merchAssets/SS23/Homepage/wide-banner/tib-rfu-ss23-022.jpg'
                            alt='err'
                            borderRadius='lg'
                        />
                        <Stack mt='6' spacing='3'>
                            <Center>
                                <Heading size="18px">Six Nations, One Team</Heading>
                            </Center>
                            <Center>
                                <Text size="18px" color="#373737">
                                    Show your support in fresh, spring-ready pieces,
                                    and stay warm with our new easy-to-layer knitwear wherever you’re watching the game.
                                </Text>
                            </Center>
                            <Center>
                                <Button height='48px' width='400px' border='1px solid black' backgroundColor="white">
                                    DISCOVER MORE
                                </Button>
                            </Center>
                        </Stack>
                    </CardBody>
                </Card>
<Card width='100%' >
                    <CardBody>
                        <Image
                            src='https://www.charlestyrwhitt.com/on/demandware.static/-/Library-Sites-CTShirtsSharedLibrary/default/dwe856ec10/merchAssets/SS23/Homepage/Editorial/hp1-editorial-TL-desktop.jpg'
                            alt='err'
                            borderRadius='lg'
                        />
                        <Stack mt='6' spacing='3'>
                            <Center>
                                <Heading size="18px">A Tailored Life</Heading>
                            </Center>
                            <Center>
                                <Text size="18px" color="#373737">
                                    Meet unique leaders and explore style hints and tips through
                                    Nick Wheeler's interviews in A Tailored Life.
                                </Text>
                            </Center>
                            <Center>
                                <Button height='48px' width='400px' border='1px solid black' backgroundColor="white">
                                    EXPLORE MORE
                                </Button>
                            </Center>
                        </Stack>
                    </CardBody>
                </Card>

                <Card width='100%' >
                    <CardBody>
                        <Image
                            src='https://www.charlestyrwhitt.com/on/demandware.static/-/Library-Sites-CTShirtsSharedLibrary/default/dwa469ba16/merchAssets/SS23/Homepage/Editorial/hp3-marcus-desktop.jpg'
                            alt='err'
                            borderRadius='lg'
                        />
                        <Stack mt='6' spacing='3'>
                            <Center>
                                <Heading size="18px">A Perfect 10</Heading>
                            </Center>
                            <Center>
                                <Text size="18px" color="#373737">
                                    We know and love Marcus Smith for his flair and creativity on the pitch,
                                    and he brings this same energy and style whether he’s wearing our casual or formal pieces.
                                </Text>
                            </Center>
                            <Center>
                                <Button height='48px' width='400px' border='1px solid black' backgroundColor="white">
                                    SHOP NOW
                                </Button>
                            </Center>
                        </Stack>
                    </CardBody>
                </Card>
            </Grid>

            <Box maxW='1500px' marginTop="30px">
                <Image src='https://www.charlestyrwhitt.com/on/demandware.static/-/Library-Sites-CTShirtsSharedLibrary/default/dw5f179d60/merchAssets/AW22/Homepage/wide-banner/custom-hp2-desktop01.jpg' alt='Dan Abramov' />
            </Box>

Lopa, [22-02-2023 23:34]
<Grid templateColumns='repeat(4, 1fr)' gap={20} backgroundColor="#f5f5f5" marginTop="30px">
                <GridItem >
                    <Center>
                        <Image width="100px" src='https://www.charlestyrwhitt.com/on/demandware.static/Sites-CTShirts-UK-Site/-/default/dwbbd2b2c7/images/icons-large/click-and-collect.svg' alt='error' />
                    </Center>
                    <Center>
                        <Heading size="18px">Carbon Neutral</Heading>
                    </Center>
                    <br />
                    <Center>
                        <Text size="18px">We are proud to be Carbon Neutral with Planet Mark</Text>
                    </Center>
                </GridItem>
                <GridItem >
                    <Center>
                        <Image width="100px" src='https://www.charlestyrwhitt.com/on/demandware.static/Sites-CTShirts-UK-Site/-/default/dwbbd2b2c7/images/icons-large/click-and-collect.svg' alt='error' />
                    </Center>
                    <Center>
                        <Heading size="18px">6-Month Returns</Heading>
                    </Center>
                    <br />
                    <Center>
                        <Text size="18px">Exchange or return your purchase up to six months after receiving them</Text>
                    </Center>
                </GridItem>
                <GridItem >
                    <Center>
                        <Image width="100px" src='https://www.charlestyrwhitt.com/on/demandware.static/Sites-CTShirts-UK-Site/-/default/dw4fe225d4/images/icons-large/padlock.svg' alt='error' />
                    </Center>
                    <Center>
                        <Heading size="18px">Safe & Easy Payment</Heading>
                    </Center>
                    <br />
                    <Center>
                        <Text size="18px">Shopping is safe with Charles Tyrwhitt. We accept payments via credit card, PayPal and Apple Pay.</Text>
                    </Center>
                </GridItem>
                <GridItem >
                    <Center>
                        <Image width="100px" src='https://www.charlestyrwhitt.com/on/demandware.static/Sites-CTShirts-UK-Site/-/default/dw97c612c3/images/icons-large/express-delivery.svg' alt='error' />
                    </Center>
                    <Center>
                        <Heading size="18px">Delivery Options</Heading>
                    </Center>
                    <br />
                    <Center>
                        <Text size="18px">We offer various in-home and click and collect delivery options for your convenience</Text>
                    </Center>
                </GridItem>
            </Grid>
        </div>
    )
}

export default Home;