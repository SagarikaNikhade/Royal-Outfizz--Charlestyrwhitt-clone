import { Box, Image, Grid, Button, Text, Stack, Heading, CardBody, Card, Center, GridItem } from "@chakra-ui/react";
import styles from "./Home.module.css";
import React from "react";

function Home() {
    return (
        <Box>
            
            {/* nxj nfjr */}
            <article className={styles.article}>
                <img className={styles.image} src='https://www.charlestyrwhitt.com/on/demandware.static/-/Library-Sites-CTShirtsSharedLibrary/default/dw0c60e00a/merchAssets/SS23/Homepage/hero/febshirts-hero-desktop.jpg' alt="background" />
                <h1 className={styles.header}>Timeless Classics</h1>
            </article>
            <Box>
                <Grid
                    templateColumns={['1fr', 'repeat(2, 1fr)']}
                    gap={['6', '12']}
                    maxW='100%'
                    marginTop={['10px', '30px']}
                >
                    <GridItem>
                        <Center>
                            <Image
                                src='https://www.charlestyrwhitt.com/on/demandware.static/-/Library-Sites-CTShirtsSharedLibrary/default/dw013a9536/merchAssets/SS23/Homepage/Editorial/hp1-editorial-JR-desktop.jpg'
                                alt='err'
                                borderRadius='lg'
                            />
                        </Center>
                        <Center>
                            <Heading size={['sm', 'md']}>Our new signing, Joe Root</Heading>
                        </Center>
                        <Center>
                            <Text fontSize={['sm', 'md']} color="#373737">
                                It's going to be a busy year for our newest signing, England Cricketer Joe Root.
                                Bringing his flair from the field to us, he shows you how he’d style our latest collection.
                            </Text>
                        </Center>
                        <Center>
                            <Button height={['36px', '48px']} width={['100%', '400px']} border='1px solid black' backgroundColor="white">
                                <a href="/product">SHOP NOW</a>
                            </Button>
                        </Center>
                    </GridItem>

                    <GridItem>
                        <Center>
                            <Image
                                src='https://www.charlestyrwhitt.com/on/demandware.static/-/Library-Sites-CTShirtsSharedLibrary/default/dw0718d61d/merchAssets/SS23/Homepage/wide-banner/tib-rfu-ss23-022.jpg'
                                alt='err'
                                borderRadius='lg'
                            />
                        </Center>
                        <Center>
                            <Heading size={['sm', 'md']}>Six Nations, One Team</Heading>
                        </Center>
                        <Center>
                            <Text fontSize={['sm', 'md']} color="#373737">
                                Show your support in fresh, spring-ready pieces,
                                and stay warm with our new easy-to-layer knitwear wherever you’re watching the game.
                            </Text>
                        </Center>
                        <Center>
                            <Button height={['36px', '48px']} width={['100%', '400px']} border='1px solid black' backgroundColor="white">
                                DISCOVER MORE
                            </Button>
                        </Center>
                    </GridItem>
                </Grid>

                <Grid
                    templateColumns={['1fr', 'repeat(2, 1fr)']}
                    gap={['6', '12']}
                    maxW='100%'
                    marginTop={['10px', '30px']}
                >
                    <GridItem>
                        <Center>
                            <Image
                                src='https://www.charlestyrwhitt.com/on/demandware.static/-/Library-Sites-CTShirtsSharedLibrary/default/dwe856ec10/merchAssets/SS23/Homepage/Editorial/hp1-editorial-TL-desktop.jpg'
                                alt='err'
                                borderRadius='lg'
                            />
                        </Center>
                        <Center>
                            <Heading size={['sm', 'md']}>A Tailored Life</Heading>
                        </Center>
                        <Center>
                            <Text fontSize={['sm', 'md']} color="#373737">
                                Meet unique leaders and explore style hints and tips through
                                Nick Wheeler's interviews in A Tailored Life.
                            </Text>
                        </Center>
                        <Center>
                            <Button height={['36px', '48px']} width={['100%', '400px']} border='1px solid black' backgroundColor="white">
                                EXPLORE MORE
                            </Button>
                        </Center>
                    </GridItem>

                    <GridItem>
                        <Center>
                            <Image
                                src='https://www.charlestyrwhitt.com/on/demandware.static/-/Library-Sites-CTShirtsSharedLibrary/default/dwa469ba16/merchAssets/SS23/Homepage/Editorial/hp3-marcus-desktop.jpg'
                                alt='err'
                                borderRadius='lg'
                            />
                        </Center>
                        <Center>
                            <Heading size={['sm', 'md']}>A Perfect 10</Heading>
                        </Center>
                        <Center>
                            <Text fontSize={['sm', 'md']} color="#373737">
                                We know and love Marcus Smith for his flair and creativity on the pitch,
                                and he brings this same energy and style whether he’s wearing our casual or formal pieces.
                            </Text>
                        </Center>
                        <Center>
                            <Button height={['36px', '48px']} width={['100%', '400px']} border='1px solid black' backgroundColor="white">
                                <a href="/product">SHOP NOW</a>
                            </Button>
                        </Center>
                    </GridItem>
                </Grid>
            </Box>

            <Box maxW='1500px' marginTop="30px">
                <Image src='https://www.charlestyrwhitt.com/on/demandware.static/-/Library-Sites-CTShirtsSharedLibrary/default/dw5f179d60/merchAssets/AW22/Homepage/wide-banner/custom-hp2-desktop01.jpg' alt='Dan Abramov' />
            </Box>

            <Grid
                templateColumns={['1fr', 'repeat(2, 1fr)', 'repeat(4, 1fr)']}
                gap={['6', '12', '20']}
                backgroundColor="#f5f5f5"
                marginTop={['10px', '30px']}
                marginBottom={['10px', '30px']}
                p={['10px', '20px']}
            >
                <GridItem>
                    <Center>
                        <Image width={['50px', '100px']} src='https://www.charlestyrwhitt.com/on/demandware.static/Sites-CTShirts-UK-Site/-/default/dwbbd2b2c7/images/icons-large/click-and-collect.svg' alt='error' />
                    </Center>
                    <Center>
                        <Heading size={['sm', 'md']} textAlign="center">Carbon Neutral</Heading>
                    </Center>
                    <Center>
                        <Text fontSize={['sm', 'md']} textAlign="center">
                            We are proud to be Carbon Neutral with Planet Mark
                        </Text>
                    </Center>
                </GridItem>

                <GridItem>
                    <Center>
                        <Image width={['50px', '100px']} src='https://www.charlestyrwhitt.com/on/demandware.static/Sites-CTShirts-UK-Site/-/default/dwbbd2b2c7/images/icons-large/click-and-collect.svg' alt='error' />
                    </Center>
                    <Center>
                        <Heading size={['sm', 'md']} textAlign="center">6-Month Returns</Heading>
                    </Center>
                    <Center>
                        <Text fontSize={['sm', 'md']} textAlign="center">
                            Exchange or return your purchase up to six months after receiving them
                        </Text>
                    </Center>
                </GridItem>

                <GridItem>
                    <Center>
                        <Image width={['50px', '100px']} src='https://www.charlestyrwhitt.com/on/demandware.static/Sites-CTShirts-UK-Site/-/default/dw4fe225d4/images/icons-large/padlock.svg' alt='error' />
                    </Center>
                    <Center>
                        <Heading size={['sm', 'md']} textAlign="center">Safe & Easy Payment</Heading>
                    </Center>
                    <Center>
                        <Text fontSize={['sm', 'md']} textAlign="center">
                            Shopping is safe with Charles Tyrwhitt. We accept payments via credit card, PayPal and Apple Pay.
                        </Text>
                    </Center>
                </GridItem>

                <GridItem>
                    <Center>
                        <Image width={['50px', '100px']} src='https://www.charlestyrwhitt.com/on/demandware.static/Sites-CTShirts-UK-Site/-/default/dw97c612c3/images/icons-large/express-delivery.svg' alt='error' />
                    </Center>
                    <Center>
                        <Heading size={['sm', 'md']} textAlign="center">Delivery Options</Heading>
                    </Center>
                    <Center>
                        <Text fontSize={['sm', 'md']} textAlign="center">
                            We offer various in-home and click and collect delivery options for your convenience
                        </Text>
                    </Center>
                </GridItem>
            </Grid>
        </Box>
    )
}

export default Home;