pipeline {
    agent any

    environment {
        APP_DIR = "/var/www/cinnamon-miracle-frontend"
        REPO = "https://github.com/mgunawardhana/cinnamon-miracle-frontend.git"
    }

    stages {

        stage('Clone Repository') {
            steps {
                sh """
                rm -rf \$APP_DIR
                git clone \$REPO \$APP_DIR
                """
            }
        }

        stage('Install Dependencies') {
            steps {
                sh """
                cd \$APP_DIR
                npm install
                """
            }
        }

        stage('Build React App') {
            steps {
                sh """
                cd \$APP_DIR
                npm run build
                """
            }
        }

        stage('Deploy & Run') {
            steps {
                sh """
                cd \$APP_DIR

                pm2 delete cinnamon-frontend || true

                pm2 start "serve -s dist -l 3001" --name cinnamon-frontend

                pm2 save
                """
            }
        }
    }

    post {
        success {
            echo "Frontend deployed successfully on port 3001"
        }
        failure {
            echo "Deployment failed"
        }
    }
}
