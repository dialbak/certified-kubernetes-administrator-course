C'est quoi Kubernetes ?@@

- Outil d'orchestration de conteneurs open source
- Développé par Google
- Qui Automatise de nombreux processus impliqués dans le déploiement, la gestion et la mise à l'échelle des applications
  conteneurisées @@@

Qu'est-ce qui justifie l'adoption de kubernetes ?@@

- Tendance du passage d'architecture Monolith à Microservices
- Les conteneurs sont l'hôte idéal pour les applications de microservices @@@

Kubernetes a de nombreux composants, mais quels sont les principaux à connaitre ?@@

- POD
- SERVICE INGRESS
- CONFIGMAP SECRET
- DEPLOYMENT STATEFULSET
- VOLUMES @@@

C'est quoi un POD ?@@

- Groupe de 1 ou plusieurs conteneurs
- La plus petite unité de K8s
- Une abstraction sur un conteneur
- 1 application/conteneur par Pod
- Pods est éphémère @@@

Lorsqu'un pod est recréé dans Kubernetes, il est remplacé par un nouveau pod qui est essentiellement une nouvelle
instance du ou des mêmes conteneurs. Cela signifie que le nouveau pod se verra attribuer une nouvelle adresse IP, car
l'adresse IP est liée au pod et non aux conteneurs qu'il contient. Vrai ou Faux ?@@

- Vrai @@@

Qu'est-ce qu'un SERVICE ?@@

- Une adresse IP statique/permanente qui peut être attachée à chaque Pod
- Sert également de Load-balancers (équilibreur de charge)
- Les cycles de vie du service et le Pod ne sont pas connectés Si le Pod plante, le service et son adresse IP seront les
  mêmes @@@

Quels sont les différents types de services ?@@

- Internal && External
- Service interne : Par défaut, par exemple une base de données, qui ne doit pas être accessible depuis l'extérieur
- Service externe : Application accessible via le navigateur @@@

C'est quoi un INGRESS ?@@

- Ingress est le point d'entrée de votre cluster K8s
- La requête va d'abord à Ingress, qui fait la redirection vers le Service https://my-app.com
- URL of external Service: http://124.89.101.2:8080
- URL of Ingress Service: https://my-app.com @@@

C'est quoi un CONFIGMAP ?@@

- Pour stocker des données non confidentielles dans des paires clé-valeur
- Example DB_URL = mongo-db-service @@@

Qu'est-ce qu'un SECRET ?@@

- Similaire à ConfigMap, mais pour stocker des données sensibles telles que des mots de passe ou des tokens
- DB_USER = mongo-user
- DB_PWD = mongo-pwd
- Les pods peuvent consommer ConfigMaps et Secrets en tant que variables d'environnement, arguments CLI ou en tant que
  fichiers de configuration dans un volume
- Le stockage des données dans un composant secret ne les rend pas automatiquement sécurisées, Recommandé d'utiliser des
  outils de gestion secrète de tiers kubernetes seul ne suffit pas @@@

Qu'est-ce qu'un VOLUME ?@@

- Lorsqu'un conteneur plante, K8s redémarre le conteneur, mais avec un état propre. Ce qui signifie que vos données sont
  perdues !
- K8s ne gère aucune persistance de données, ce qui signifie que vous êtes responsable de la sauvegarde, de la
  réplication des données, etc.
- Les données sont stockées sur une infrastructure physique ou virtuelle et mise à la disposition du cluster. @@@

C'est quoi un DEPLOYMENT ?@@

- Deployment est une abstraction de Pods
- Plan de construction pour les pods
- En travaillant avec les déploiements et en définissant le nombre de replicas, K8s crée des pods @@@

C'est quoi un STATEFULSET ?@@

- Plan pour les applications stateful comme les bases de données, etc.
- StatefulSet s'assure que les lectures et les écritures de la base de données sont synchronisées pour éviter les
  incohérences de données @@@

Qu'est-ce qu'un cluster Kubernetes ?@@ 

- Un ensemble de worker machines, called "Nodes"
- Et un control plane @@@

Qu'est-ce qu'un worker node ?@@

- Les pods (applications conteneurisées) s'exécutent sur les worker node
- Chaque node exécute plusieurs pods 
- Les worker node nécessite de machines plus de ressources, car le travail réel s'exécute sur elles@@@

Qu'est-ce qu'uun control plane ?@@

- Gère-les worker node et les pods dans le cluster 
- Beaucoup plus important et doit être répliqué Donc, en production, 
- les répliques s'exécutent sur plusieurs machines @@@

?@@

@@@

?@@

@@@

?@@

@@@

?@@

@@@


?@@

@@@


?@@

@@@


?@@

@@@


?@@

@@@


?@@

@@@


?@@

@@@


?@@

@@@


?@@

@@@


?@@

@@@


?@@

@@@


?@@

@@@






















































































































































































































































