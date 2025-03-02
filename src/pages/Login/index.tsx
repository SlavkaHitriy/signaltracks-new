import { Box, Button, IconButton, Stack, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router';
import { FormEvent, useState } from 'react';
import { DefaultInput } from '@components/DefaultInput';
import { FormikProvider, useFormik } from 'formik';
import HideIcon from '@assets/icons/hide-password.svg';
import ShowIcon from '@assets/icons/show-password.svg';
import { CircleProgress } from '@components/CircleProgress';

export const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

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
          <Typography my={'32px'} variant={'h2'}>
            Sign In
          </Typography>
          <Box component={'form'} onSubmit={handleSubmit} width={'100%'}>
            <Stack gap={'32px'} width={'100%'}>
              <Stack minWidth={250} direction={'column'} width={'100%'}>
                <Typography variant={'footnote'} mb={'4px'} color={'grey.blue'}>
                  Email
                </Typography>
                <DefaultInput name={'email'} type={'email'} placeholder="example@oilservices.com" />
              </Stack>
              <Stack direction={'column'} width={'100%'}>
                <Typography variant={'footnote'} mb={'4px'} color={'grey.blue'}>
                  Password
                </Typography>
                <Box position={'relative'}>
                  <DefaultInput
                    name={'password'}
                    slotProps={{
                      input: {
                        endAdornment: (
                          <IconButton
                            sx={{
                              svg: {
                                width: 20,
                                height: 20
                              }
                            }}
                            variant={'contained'}
                            onClick={() => setShowPassword((prev) => !prev)}
                          >
                            {showPassword ? <HideIcon /> : <ShowIcon />}
                          </IconButton>
                        )
                      }
                    }}
                    type={showPassword ? 'text' : 'password'}
                    placeholder="*************************"
                  />
                </Box>
                <Box mt={'4px'} alignSelf={'flex-end'}>
                  <Link to={'/forgot-password'}>
                    <Typography
                      sx={{
                        color: 'grey.blue',
                        textDecoration: 'underline',
                        cursor: 'pointer',
                        fontSize: 13,
                        textAlign: 'right',
                        '&:hover': {
                          textDecoration: 'none'
                        }
                      }}
                    >
                      Forgot Password?
                    </Typography>
                  </Link>
                </Box>
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
                Sign In
              </Button>
            </Stack>
          </Box>
          <Stack width="100%" justifyContent={'center'} alignItems={'center'} direction={'row'} spacing={1} mt={4}>
            <Box
              sx={{
                height: '1px',
                width: '20%',
                bgcolor: 'grey.light'
              }}
            />
            <Box
              sx={{
                height: '1px',
                width: '20%',
                bgcolor: 'grey.light'
              }}
            />
          </Stack>
        </Stack>
      </Stack>
    </FormikProvider>
  );
};
