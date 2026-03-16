pipeline {
    agent any
    environment {
        DEPLOY_DIR = "/var/www/cinnamon-miracle-frontend"
        APP_NAME = "cinnamon-frontend"
        PORT = "3001"
    }

    stages {

        stage('Checkout Code') {
            steps {
                checkout scm
            }
        }

        stage('Fix Node Permissions') {
            steps {
                sh '''
                    echo "Fixing Node & NPM permissions..."

                    if [ -f /usr/bin/npm ]; then
                        chmod +x /usr/bin/npm || true
                    fi

                    if [ -f /usr/bin/node ]; then
                        chmod +x /usr/bin/node || true
                    fi

                    if [ -f /usr/local/bin/npm ]; then
                        chmod +x /usr/local/bin/npm || true
                    fi

                    if [ -f /usr/local/bin/node ]; then
                        chmod +x /usr/local/bin/node || true
                    fi

                    echo "Permissions fixed"
                '''
            }
        }

        stage('Install Dependencies') {
            steps {
                sh '''
                    echo "Installing dependencies..."
                    npm install
                '''
            }
        }

        stage('Build React App') {
            steps {
                sh '''
                    echo "Building React app..."
                    npm run build
                '''
            }
        }

        stage('Deploy Build') {
            steps {
                sh '''
                    mkdir -p $DEPLOY_DIR
                    rm -rf $DEPLOY_DIR/*
                    cp -r dist/* $DEPLOY_DIR/
                '''
            }
        }

        stage('Start Application (PM2)') {
            steps {
                sh '''
                    echo "Starting application with PM2..."

                    pm2 delete $APP_NAME || true
                    pm2 start "serve -s $DEPLOY_DIR -l $PORT" --name $APP_NAME
                    pm2 save
                '''
            }
        }
    }

    post {
        success {
            echo "Frontend running on port 3001 via PM2"
        }
        failure {
            echo "Deployment failed"
        }
    }
}
