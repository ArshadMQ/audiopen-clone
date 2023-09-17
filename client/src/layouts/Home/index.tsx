import { Col, Divider, Image, Row } from 'antd'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthModal, Button, FloatingButtons, TestimonialCard, Spinner, SummarizeModal } from '../../components'
import { AudioBox, AudioContainer, BrandDescription, BrandName, BrandTitle, ButtonRow, CancelLink, CornerButtonsContainer, HeroRow, PlayStopButton, ReadMoreRow, TestimonialRow, Timer, TranscribingContainer, TranscribingText, WaveContainer } from './styledComponents'
import { BASE_URL } from '../../services/CONSTANTS'
import { useAuth } from '../../context/auth.context'
import { GENERATE } from '../../services/api/audio.service'
import { AudioRecorder, useAudioRecorder } from 'react-audio-voice-recorder';

const Home = () => {
    // const [isRecording, setIsRecording] = useState(false);
    const [audioData, setAudioData] = useState<Object | null>(null);
    const [remainingTime, setRemainingTime] = useState(180); // 3 minutes in seconds
    const navigate = useNavigate()
    const [testimonialData, setTestimonialData] = useState([]);
    const [isTranscribing, setIsTranscribing] = useState(false)
    const [openModal, setOpenModal] = useState(false)
    const [isSummarizing, setIsSummarizing] = useState(false)
    const [summarizeData, setSummarizeData] = useState({})
    const { user } = useAuth();
    const {
        startRecording,
        stopRecording,
        togglePauseResume,
        recordingBlob,
        isRecording,
        isPaused,
        recordingTime,
        mediaRecorder
    } = useAudioRecorder();

    const addAudioElement = (blob: any) => {
        const url = URL.createObjectURL(blob);
        const audio = document.createElement("audio");
        audio.src = url;
        audio.controls = true;
        document.body.appendChild(audio);
        const formData = new FormData();
        formData.append('files', blob);
        GENERATE(formData, user?.token).then(data => {
            setIsSummarizing(true);
            setSummarizeData(data?.data);
            setOpenModal(false)
            setIsTranscribing(false);
        }).catch(error => console.log(error))
    };

    function handleStartRecording() {
        setIsTranscribing(false);
        setOpenModal(true);
        startRecording()
        setRemainingTime(180); // Reset the timer
    }

    function handleStopRecording() {
        addAudioElement(recordingBlob)
        setIsTranscribing(true);
        stopRecording();
    }

    const formatTime = (seconds: any) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes < 10 ? '0' : ''}${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    };



    useEffect(() => {
        let timer: any = null;
        if (isRecording) {
            timer = setInterval(() => {
                if (remainingTime > 0) {
                    setRemainingTime(remainingTime - 1);
                } else {
                    stopRecording();
                    addAudioElement(recordingBlob)
                    setIsTranscribing(true);
                }
            }, 1000);
        } else {
            clearInterval(timer);
        }
        return () => clearInterval(timer);
    }, [isRecording, remainingTime]);

    useEffect(() => {
        axios.get(`${BASE_URL}/testimonial`).then(response => setTestimonialData(response?.data))
    }, [])



    return (
        <>
            <HeroRow justify={'center'}>
                <BrandName>AudioPen</BrandName><br />
                <BrandTitle>Go from fuzzy thought to clear text. <span>Fast.</span></BrandTitle>
                {openModal ? <>
                    <AudioContainer>
                        <AudioBox>
                            {isRecording ? <>
                                <Timer>{formatTime(remainingTime)}</Timer>
                                <WaveContainer>
                                    <AudioRecorder
                                        onRecordingComplete={addAudioElement}
                                        audioTrackConstraints={{
                                            noiseSuppression: false,
                                            echoCancellation: false,
                                        }}
                                        downloadOnSavePress={false}
                                        downloadFileExtension="wav"
                                        showVisualizer={true}
                                    />
                                </WaveContainer>
                                <PlayStopButton>
                                    <Image width={80} preview={false} onClick={handleStopRecording} src='https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fa7b19d7a245c07286533d7a21bca9acc.cdn.bubble.io%2Ff1687457916165x876681559944076700%2FStop%2520Recording.png?w=96&h=96&auto=compress&dpr=1&fit=max' style={{ cursor: 'pointer' }} />
                                </PlayStopButton>
                                <CornerButtonsContainer>
                                    <Image width={16} preview={false} src='https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fa7b19d7a245c07286533d7a21bca9acc.cdn.bubble.io%2Ff1685887680491x688314974321416600%2Frestart%2520button.png?w=24&h=24&auto=compress&dpr=1&fit=max' style={{ cursor: 'pointer' }} />
                                    <Image width={16} preview={false} src='https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fa7b19d7a245c07286533d7a21bca9acc.cdn.bubble.io%2Ff1685887692355x616623671124456600%2Fcancel.png?w=24&h=24&auto=compress&dpr=1&fit=max' style={{ cursor: 'pointer' }} />
                                </CornerButtonsContainer>
                            </> :
                                isTranscribing ? <>
                                    <TranscribingContainer>
                                        <Spinner />
                                        <TranscribingText>(2/3) transcribing...</TranscribingText>
                                        <CancelLink onClick={() => {
                                            stopRecording()
                                            setOpenModal(false);
                                        }}>cancel</CancelLink>
                                    </TranscribingContainer>
                                </> : null
                            }
                        </AudioBox>
                    </AudioContainer>
                </> : isSummarizing ? <SummarizeModal summarizeData={summarizeData} setSummarizeData={setSummarizeData} isSummarizing={isSummarizing} setIsSummarizing={setIsSummarizing} /> :
                    <>
                        <BrandDescription>Just hit record. Then start talking.<br />AudioPen will clean things up when you're done.</BrandDescription>
                        <ButtonRow justify={'center'}>
                            <AuthModal />
                            <Button text='see how it works' textColor='rgba(61, 63, 84, 1)' bgColor='transparent' onClick={() => navigate('/demo')} />
                        </ButtonRow>
                        <Row justify={'center'}>
                            <Image width={13} preview={false} src='https://a7b19d7a245c07286533d7a21bca9acc.cdn.bubble.io/f1687269973895x341757050325316030/Arrow%204.svg' />
                        </Row>
                    </>}
                {!isRecording && <FloatingButtons onClick={handleStartRecording} />}
            </HeroRow >
            <TestimonialRow>
                {testimonialData?.map((element, index) => (
                    <Col xxl={5} xl={8} lg={10} md={12} sm={24} xs={24} >
                        <TestimonialCard data={element} />
                    </Col>
                ))}

                <ReadMoreRow>
                    <Col><Button text='read more Testimonials' bgColor='transparent' textColor='rgba(61, 63, 84, 1)' /></Col>
                </ReadMoreRow>
                <Divider />
            </TestimonialRow>
        </>
    )
}

export default Home
