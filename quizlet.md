Quand ont créé un nouveau pod à partir du même fichier de configuration l'IP change tout le temps vrai/faux ?@@

- vrai @@@

L'IP d'un service est permanent vrai/faux ?@@

- vrai, il faut attacher les services aux pods pour avoir des IP permanents @@@

On ne peut pas faire un replica d'une base de données avec deployment vrai/faux ? Pourquoi ?@@

- Vrai, parce que la base de données à un state il faut utiliser le component Statefulset @@@

Gérer les replicas de base de données est complexe, généralementles base de données sont stockées en dehors des
clusters k8s vrai/faux ?@@

- Vrai @@@

Pod ?@@

- Abstraction of containers@@@

Service ?@@

- Communication@@@

Ingress ?@@

- Route traffic into cluster@@@

ConfigMap & Secret ?@@

- External configuration @@@

Volume ?@@

- Data persistence @@@

Deployment & Statefulset (database) ?@@

- Replication @@@

2 Types of node k8s operate on ?@@

- master node(control plane) & worker node @@@

Each node has multiple pod v/f?@@

- vrai, @@@

3 process must be installed on every node ?@@

- Container runtime (docker or containerd)
- Kubelet
- Kube-proxy @@@

4 process run on every control plane node ?@@

- Api server (cluster entry point, validate request)
- Scheduler (where to put pod)
- Controller manager (detect state changes)
- Etcd (save all changes into the cluster, application data is note ave in etcd) @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@

?@@

- @@@








