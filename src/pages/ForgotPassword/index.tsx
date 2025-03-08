import { Box, Button, Stack, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router';
import { FormEvent } from 'react';
import { DefaultInput } from '@components/DefaultInput';
import { FormikProvider, useFormik } from 'formik';
import { CircleProgress } from '@components/CircleProgress';

export const ForgotPassword = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: () => {}
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    navigate('/jobs');
  };

  return (
    <FormikProvider value={formik}>
      <Stack
        bgcolor={'background.secondary'}
        alignItems={'center'}
        justifyContent={'center'}
        height={'100vh'}
        py={10}
        px={4}
        width={'100%'}
      >
        <Stack alignItems={'center'} justifyContent={'center'} maxWidth={350} mx={'auto'}>
          <Stack direction={'row'} alignItems={'center'}>
            <Box mr={'8px'}>
              <CircleProgress
                sx={{
                  color: 'main'
                }}
                size={36}
                value={100}
                withoutText
              />
            </Box>
            <Typography
              sx={{
                color: 'main'
              }}
              variant={'h1'}
            >
              Tubular
            </Typography>
            <Typography
              variant={'h1'}
              sx={{
                color: 'main'
              }}
            >
              Pro
            </Typography>
          </Stack>
          <Stack my={'32px'} gap={'8px'} alignItems={'center'}>
            <Typography variant={'h2'}>Forgot Password?</Typography>
            <Typography variant={'body1'}>Enter your email to reset your password</Typography>
          </Stack>
          <Box component={'form'} onSubmit={handleSubmit} width={'100%'}>
            <Stack gap={'24px'} width={'100%'}>
              <Stack minWidth={250} direction={'column'} width={'100%'}>
                <Typography variant={'footnote'} mb={'4px'} color={'grey.blue'}>
                  Email
                </Typography>
                <DefaultInput name={'email'} type={'email'} placeholder="example@oilservices.com" />
              </Stack>
              <Button
                sx={{
                  fontSize: 20,
                  py: 1.2,
                  borderRadius: '30px',
                  maxWidth: 300,
                  width: '100%',
                  alignSelf: 'center'
                }}
                type={'submit'}
              >
                Send
              </Button>
            </Stack>
          </Box>
          <Stack width="100%" justifyContent={'center'} alignItems={'center'} direction={'row'} gap={'4px'} mt={4}>
            <Typography
              sx={{
                whiteSpace: 'nowrap'
              }}
            >
              Don’t have an account?
            </Typography>
            <Link to={'/register'}>
              <Typography
                variant={'body1'}
                sx={{
                  textDecoration: 'underline'
                }}
              >
                Sign Up
              </Typography>
            </Link>
          </Stack>
        </Stack>
      </Stack>
    </FormikProvider>
  );
};
