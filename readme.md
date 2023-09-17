# AudioPen.ai Clone

Please use 
python --version Python > 3.10 & node --version >= v18


## Run Django Server
1. Navigate to the `audiopenclone` directory:

    ```commandline
    cd audiopenclone
    ```
   
2. Create a `.env` file and copy the provided environment variables into it. Reach out to Sai Arava or Arshad or Chaitanya for environment variables

   ```
    SECRET_KEY='*****'
    OPENAI_API_KEY='sk-********'
    GPT_MODEL='gpt-3.5-turbo'
    BASE_URL="https://picsum.photos"
    TOKEN_LENGTH=200
   ```
4. Install the Python dependencies:

    ```commandline
    pip install -r requirements.txt
    ```

5. Migrate and Start the Python server:

    ```commandline
    python manage.py makemigrations
    python manage.py migrate
    python manage.py runserver
    ```
   
## Run React Server
1. Navigate to the `client` directory:

    ```commandline
    cd client
    ```
2. Install node dependencies:

    ```commandline
    yarn install
   ```

3. Run dev server for React
   ```commandline
   yarn dev
   ```