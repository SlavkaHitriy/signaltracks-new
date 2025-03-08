import { Box, Button, IconButton, Stack, Typography } from '@mui/material';
import { FormikProvider, useFormik } from 'formik';
import { useNavigate, useParams } from 'react-router';
import CloseIcon from '@assets/icons/close.svg';
import { DefaultSelect } from '@components/DefaultSelect';
import UploadCSVIcon from '@assets/icons/upload-csv.svg';
import { DataGrid } from '@mui/x-data-grid';
import { columns, rows } from '@pages/Import/config/jobs';

export const Import = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const formik = useFormik({
    initialValues: {
      template: ''
    },
    onSubmit: () => {}
  });
  const template = formik.values.template;

  return (
    <FormikProvider value={formik}>
      <Stack p={'20px 24px'} flex={1} overflow={'hidden auto'}>
        <Stack
          pb={'20px'}
          gap={'24px'}
          alignItems={'center'}
          justifyContent={'space-between'}
          direction={'row'}
          sx={(theme) => ({
            borderBottom: theme.borders.default
          })}
        >
          <Typography variant={'h2'}>Import</Typography>
          <IconButton
            variant={'contained'}
            sx={(theme) => ({
              flexShrink: 0,
              '&:hover': {
                bgcolor: theme.palette.neutral['400']
              },
              bgcolor: 'neutral.500'
            })}
            onClick={() => navigate(`/jobs/${id}`)}
          >
            <CloseIcon />
          </IconButton>
        </Stack>
        <Stack py={'20px'} gap={'36px'} direction={'row'}>
          <Stack width={360} gap={'12px'}>
            <DefaultSelect displayEmpty values={['Template 1', 'Template 2', 'Template 3']} name="template" />
            {template && (
              <>
                <Button
                  // @ts-expect-error error
                  color={'text.primary'}
                  sx={{
                    color: 'text.primary',
                    textTransform: 'capitalize',
                    fontSize: '14px',
                    px: '36px !important'
                  }}
                  startIcon={<UploadCSVIcon />}
                  variant={'outlined'}
                  component={'label'}
                >
                  Upload CSV
                  <Box component={'input'} type={'file'} hidden />
                </Button>
                <Button>Save</Button>
              </>
            )}
          </Stack>
          {template && (
            <Box
              sx={{
                width: 250,
                height: 250,
                border: '1px solid #E0E0E0',
                borderRadius: '8px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              Here will be an image
            </Box>
          )}
        </Stack>
        <Stack flex={1}>{template && <DataGrid columns={columns} rows={rows} />}</Stack>
      </Stack>
    </FormikProvider>
  );
};
