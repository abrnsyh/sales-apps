import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Image,
  Input,
  Stack,
  Text,
} from '@chakra-ui/react';
import { useForm } from '@inertiajs/react';

export default function Login() {
  const { errors, post, clearErrors, setData, processing } = useForm({
    email: '',
    password: '',
  });

  function handleSubmit(e) {
    e.preventDefault();
    post('/login');
  }

  return (
    <Flex h="100vh" justifyContent="center" alignItems="center">
      <Flex
        bg="#0B0B20"
        justifyContent="center"
        alignItems="center"
        padding="11px"
        borderRadius="32px"
        gap="14px"
      >
        <Image src="/bg-login.png" />

        <Flex flexDir="column" gap="24px" py="16px" pl="16px" pr="37px">
          <Box>
            <Heading variant="h1" color="#066C98">
              Selamat Datang
            </Heading>
            <Text maxW="190px" fontSize="14px" color="#F7F7F7">
              Silahkan masukan email dan password anda
            </Text>
          </Box>
          <Stack
            p="14px"
            as="form"
            autoComplete="false"
            onSubmit={handleSubmit}
          >
            <FormControl isInvalid={errors.email}>
              <FormLabel mb="4px" color="#066C98" fontSize="14px">
                Email
              </FormLabel>
              <Input
                required
                onChange={e => setData('email', e.target.value)}
                type="email"
                bg="#F7F7F7"
                placeholder="Masukan email anda"
                onFocus={() => clearErrors('email')}
              />
              {errors.email ? (
                <FormErrorMessage>{errors.email}</FormErrorMessage>
              ) : null}
            </FormControl>
            <FormControl isInvalid={errors.password}>
              <FormLabel mb="4px" color="#066C98" fontSize="14px">
                Password
              </FormLabel>
              <Input
                required
                onChange={e => setData('password', e.target.value)}
                type="password"
                bg="#F7F7F7"
                placeholder="Masukan password anda"
                onFocus={() => clearErrors('email')}
              />
              {errors.password ? (
                <FormErrorMessage>{errors.password}</FormErrorMessage>
              ) : null}
            </FormControl>
            <Button
              isLoading={processing}
              type="submit"
              mt="32px"
              fontSize="16px"
              color="#F7F7F7"
              bg="#066C98"
              _hover={{ bg: '#066C98', opacity: '0.8', color: '#F7F7F7' }}
            >
              Masuk
            </Button>
            <Button
              width="max-content"
              mt="4px"
              fontSize="12px"
              variant="link"
              color="#919191"
              mx="auto"
            >
              Lupa Password?
            </Button>
          </Stack>
        </Flex>
      </Flex>
    </Flex>
  );
}
