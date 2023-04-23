import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Nav from '../components/nav';
import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Heading,
  HStack,
  Image,
  Stack,
  Container,
  Link,
  Text,
} from '@chakra-ui/react';
import { Divider, Table } from '@chakra-ui/react';
import { FaGithub, FaFilePdf } from 'react-icons/fa';
import { employmentWC, employmentVA } from '../lib/employment';
import Footer from '../components/footer';
export default function Home() {
  return (
    <>
      <Nav />
      <Container maxW="700px">
        <section style={{ marginTop: '2rem' }}>
          <Text fontSize="3xl">Daniel Kennedy II</Text>
          {/* <Divider style={{ marginBottom: '2rem' }} /> */}
          <address>
            34 Jefferson Drive
            <br />
            Monessen, PA 15062
            <br />
            <Link href="tel:9092976469">909-297-6469</Link>
            <br />
            <Link href="mailto:kennedy2.daniel+vercel-resume@gmail.com">
              kennedy2.daniel@gmail.com
            </Link>
          </address>
        </section>
        <section style={{ marginTop: '2rem' }}>
          <Text fontSize="3xl">Summary</Text>
          <Divider style={{ marginBottom: '2rem' }} />
          <p>
            Information Technology professional with extensive full-stack web
            development and database administration experience across both
            public and private sectors.
          </p>

          <ButtonGroup variant="outline" spacing="6">
            <Button>
              <FaFilePdf color="red" style={{ marginRight: '1rem' }} /> Download
              r&eacute;sum&eacute;
            </Button>{' '}
            &nbsp;
            <Link href="https://github.com/kennedy2daniel" target="_blank">
              <Button>
                <FaGithub color="purple" style={{ marginRight: '1rem' }} />
                Visit Portfolio
              </Button>
            </Link>
          </ButtonGroup>
        </section>
        <section>
          <Text fontSize="3xl">Experience</Text>
          <Divider style={{ marginBottom: '2rem' }} />
          {/* begin employmeny history cards */}
          {employmentWC.map((job) => (
            <Card
              direction={{ base: 'column', sm: 'row' }}
              overflow="hidden"
              variant="outline"
              border="none"
            >
              <Stack>
                <CardBody>
                  <Heading size="md">{job.employer}</Heading>

                  <Text py="2">
                    <strong>
                      {job.title}
                      <br />
                      <em>{job.dates}</em>
                    </strong>
                  </Text>

                  <ul>
                    {job.duties.map((duty) => (
                      <li>{duty}</li>
                    ))}
                  </ul>
                </CardBody>
              </Stack>
            </Card>
          ))}
          {employmentVA.map((job) => (
            <Card
              direction={{ base: 'column', sm: 'row' }}
              overflow="hidden"
              variant="outline"
              border="none"
            >
              <Stack>
                <CardBody>
                  <Heading size="md">{job.employer}</Heading>

                  <Text py="2">
                    <strong>
                      {job.title}
                      <br />
                      <em>{job.dates}</em>
                    </strong>
                  </Text>

                  <ul>
                    {job.duties.map((duty) => (
                      <li>{duty}</li>
                    ))}
                  </ul>
                </CardBody>
              </Stack>
            </Card>
          ))}
        </section>
        <section style={{ marginTop: '2rem' }}>
          <Text fontSize="3xl">Education / Certificates</Text>
          <Divider style={{ marginBottom: '2rem' }} />
          <Card border="none" variant="outline">
            <CardBody>
              <ul>
                <li>
                  <abbr title="Associate Degree in Specialized Technology">
                    AST
                  </abbr>
                  , <u>Information Technology & Security</u> &middot; Penn
                  Commercial Business/Technical School &middot; September 2020
                </li>
                <li>
                  Certificate, <u>PowerBI Dashboard</u> &middot; New Horizons
                  &middot; November 2022
                </li>
                <li>
                  Certificate, <u>Sharepoint Online Power User</u> &middot; New
                  Horizons &middot; March 2022
                </li>
                <li>
                  Certificate, <u>Level 4 Security Awareness Training</u>
                  &middot;Criminal Justice Information Services (CJIS) &middot;
                  March 2023
                </li>
              </ul>
            </CardBody>
          </Card>
        </section>
      </Container>
      <Footer />
    </>
  );
}
