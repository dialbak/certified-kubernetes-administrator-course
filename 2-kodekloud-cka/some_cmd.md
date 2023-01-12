# Practice Test - PODs
  - Take me to [Practice Test](https://kodekloud.com/topic/practice-test-pods/)

## Here are the solutions to the practice test
1. <details>
   <summary>How many pods exist on the system?</summary>

   ```bash
   kubectl get pods
   ```

   Count the number of pods (if any)

   </details>

1. <details>
   <summary>Create a new pod with the nginx image.</summary>

   ```bash
   kubectl run nginx --image=nginx
   ```
   </details>

1. <details>
   <summary>How many pods are created now?</summary>

   ```bash
   kubectl get pods
   ```

   Count the number of pods (if any)

   To get the system to tell you you can also do this

   ```bash
   kubectl get pods --no-headers | wc -l
   ```

   * `--no-headers` should be obvious - output only the details.
   * `wc` is the word count program. `-l` tells it to count lines instead, and it will count the lines emitted by `kubectl`
   </details>

1. <details>
   <summary>What is the image used to create the new pods?</summary>

    `kubectl describe` outputs lots of information. The following will describe all pods whose name starts with `newpods`, and then we filter with `grep` to get what we are looking for.

    ```bash
    kubectl describe pod newpods | grep image
    ```

    We see that all three are pulling the same image.
   </details>

1. <details>
   <summary>Which nodes are these pods placed on?</summary>

    ```bash
    kubectl get pods -o wide
    ```

    Note the node column for each of the 3 `newpods` pods

   </details>

1. <details>
   <summary>How many containers are part of the pod webapp?</summary>

   ```bash
   kubectl describe pod webapp
   ```

   Look under the `Containers` section. Note there is `nginx` and `agentx`

   </details>

1. <details>
   <summary>What images are used in the new webapp pod?</summary>

   Examine the output from Q6. For each of the identified containers, look at `Image:`

   </details>

1. <details>
   <summary>What is the state of the container agentx in the pod webapp?</summary>

   ```bash
   kubectl describe pod webapp
   ```

   Examine the `State:` field for the `agentx` container.

   </details>

1. <details>
   <summary>Why do you think the container agentx in pod webapp is in error?</summary>

   Examine the output from Q8 and look in the `Events:` section at the end. Look at the event that says `failed to pull and unpack image ...`

   </details>

1. <details>
   <summary>What does the READY column in the output of the kubectl get pods command indicate?</summary>

   ```bash
   kubectl get pods
   ```

   Look at the `webapp` pod which we know has two containers and one is in error. You can deduce which of the answers is correct from this.

   </details>

1. <details>
   <summary>Delete the webapp Pod.</summary>

   ```bash
   kubectl delete pod webapp
   ```

   To delete the pod without any delay and confirmation, we can add `--force` flag. Note that in a real production system, forcing is a last resort as it can leave behind containers that haven't been cleaned up properly. Some may have important cleanup jobs to run when they are requested to terminate, which wouldn't get run.

   You can however use `--force` in the exam as it will gain you time. No exam pods rely on any of the above.

   </details>

1. <details>
   <summary>Create a new pod with the name redis and with the image redis123.</br>Use a pod-definition YAML file.</summary>

   To create the pod definition YAML file:

   `--dry-run=client` tells `kubectl` to test without actually doing anything. `-o yaml` says "Output what you would send to API server to the console", which we then redirect into the named file.

   ```bash
   kubectl run redis --image=redis123 --dry-run=client -o yaml > redis.yaml
   ```

   And now use the YAML you created to deploy the pod.

   ```bash
   kubectl create -f redis.yaml
   ```

   </details>

1. <details>
   <summary>Now change the image on this pod to redis.</br>Once done, the pod should be in a running state.</summary>

   There are three ways this can be done!

   1. Method 1</br>
      Edit your manifest file created in last question

      ```bash
      vi redis.yaml
      ```

      Fix the image name in the redis.yaml to `redis`, save and exit.

      Apply the edited yaml

      ```bash
      kubectl apply -f redis.yaml
      ```

   1. Method 2</br>
      Edit the running pod directly (note not all fields can be edited this way)

      ```
      kubectl edit pod redis
      ```

      This will bring the pod YAML up in `vi`. Edit it as per method 1. When you eixt `vi` the change will be immediately applied. If you make a mistake, you will be dropped back into `vi`

   1. Method 3</br>
      Patch the image directly. For this you need to know the `name` of the container in the pod, as we assign the new image to that name, as in `container_image_name=new_image`

      ```bash
      kubectl set image pod/redis redis=redis
      ```

   </details>

# Practice Test - ReplicaSets
  - Take me to [Practice Test](https://kodekloud.com/topic/practice-test-replicasets/)

#### Solutions for the replicaset practice tests
1. <details>
   <summary>How many pods exist on the system?</summary>

   ```bash
   kubectl get pods
   ```

   Count the number of pods (if any)

   </details>

1. <details>
   <summary>How many ReplicaSets exist on the system?</summary>

   ```bash
   kubectl get replicasets
   ```

   Count the number of ReplicaSets  (if any)

   </details>


1. <details>
   <summary>How about now? How many ReplicaSets do you see?</summary>

   ```bash
   kubectl get replicasets
   ```

   Count the number of ReplicaSets  (if any)

   </details>

1. <details>
   <summary>How many PODs are DESIRED in the new-replica-set?</summary>

   From the output of Q3, look in `DESIRED` column
   </details>

1. <details>
   <summary>What is the image used to create the pods in the new-replica-set?</summary>

   ```
   kubectl describe replicaset
   ```

   ...and look under the containers section --- or --

   ```
   kubectl get rs -o wide
   ```

   ...and look in the `IMAGES` column. Kubernetes accepts `rs` as shorthand for `replicaset`.

   </details>

1. <details>
   <summary>How many PODs are READY in the new-replica-set?</summary>

   ```
   kubectl get rs
   ```

   Look in the `READY` column.
   </details>

1. <details>
   <summary>Why do you think the PODs are not ready?</summary>

   ```
   kubectl describe pods
   ```

   Look in the `Events` section at the end.
   </details>

1. <details>
   <summary>Delete any one of the 4 PODs.</summary>

   ```
   kubectl get pods
   ```

   Choose any of the four.

   ```
   kubectl delete pod new-replica-set-XXXX
   ```
   </details>

1. <details>
   <summary>How many PODs exist now?</summary>

   ```
   kubectl get pods
   ```

   </details>

1. <details>
   <summary>Why are there still 4 PODs, even after you deleted one?</summary>
   > ReplicaSets ensures that desired number of PODs always run

   </details>

1. <details>
   <summary>Create a ReplicaSet using the replicaset-definition-1.yaml file located at /root/.</br>There is an issue with the file, so try to fix it.</summary>

   ```
   kubectl create -f replicaset-definition-1.yaml
   ```

   Note the error message.

   Get the apiVersion for replicaset

   ```
   $ kubectl explain replicaset | grep VERSION
   ```

   Update the replicaset definition file in `vi` with correct version and then retry creation.

   ```
   $ kubectl create -f replicaset-definition-1.yaml
   ```
   </details>

1. <details>
   <summary>Fix the issue in the replicaset-definition-2.yaml file and create a ReplicaSet using it.</summary>

   ```
   kubectl create -f replicaset-definition-1.yaml
   ```

   Note the error message.

   Selector matchLabels should match with POD labels - Update `replicaset-definition-2.yaml`

   The values for labels on lines 9 and 13 should match.

   ```
   $ kubectl create -f replicaset-definition-2.yaml
   ```
   </details>

1. <details>
   <summary>Delete the two newly created ReplicaSets - replicaset-1 and replicaset-2</summary>

   ```
   kubectl delete replicaset replicaset-1
   kubectl delete rs replicaset-2
   ```

   --- OR ---

   ```
   kubectl delete replicaset replicaset-1 replicaset-2
   ```

   </details>

1. <details>
   <summary>Fix the original replica set new-replica-set to use the correct busybox image.</summary>

   ```
   kubectl edit replicaset new-replica-set
   ```

   Edit the image to be `busybox`, save and exit.
   </details>

1. <details>
   <summary>Fix the original replica set new-replica-set to use the correct busybox image.</summary>

   ```
   kubectl edit replicaset new-replica-set
   ```

   Fix the image, save and exit.

   You will note if you do `kubectl get pods`, that they are still broken. ReplicaSets are not very smart and do not redeploy pods when the container specification has been edited.

   We must either delete and recreate the replicaset by exporting its YAML...

   ```
   kubectl get rs new-replica-set -o yaml > rs.yaml
   kubectl delete rs new-replica-set
   kunectl create -f rs.yaml
   ```

   -- OR --

   Delete each broken pod. The ReplicaSet will deploy a new one in its place which should be working.

   -- OR --

   Scale it to zero, then back to 4
   ```
   kubectl scale rs new-replica-set --replicas 0
   kubectl scale rs new-replica-set --replicas 4
   ```

   </details>

1. <details>
   <summary>Scale the ReplicaSet to 5 PODs.</summary>

   ```
   kubectl scale rs new-replica-set --replicas 5
   ```

   </details>


# Practice Test - Deployments

- Take me to [Practice Test](https://kodekloud.com/topic/practice-tests-deployments/)

Solutions to the deployments practice test

1. <details>
   <summary>How many pods exist on the system?</summary>

   ```bash
   kubectl get pods
   ```

   Count the number of pods (if any)

   </details>

1. <details>
   <summary>How many ReplicaSets exist on the system?</summary>

   ```bash
   kubectl get replicasets
   ```

   Count the number of ReplicaSets  (if any)

   </details>

1. <details>
   <summary>How many Deployments exist on the system?</summary>

   ```bash
   kubectl get deployments
   ```

   Count the number of Deployments  (if any)

   </details>

1. <details>
   <summary>How many Deployments exist on the system now?</summary>

   ```bash
   kubectl get deployments
   ```

   Count the number of Deployments  (if any)

   </details>

1. <details>
   <summary>How many ReplicaSets exist on the system now?</summary>

   ```bash
   kubectl get replicasets
   ```

   Count the number of ReplicaSets  (if any)

   </details>

1. <details>
   <summary>How many Pods exist on the system?</summary>

   ```bash
   kubectl get pods
   ```

   Count the number of pods  (if any)

   </details>

1. <details>
   <summary>Out of all the existing PODs, how many are ready?</summary>

   From the output of the previous command, check the `READY` column
   </details>

1. <details>
   <summary>What is the image used to create the pods in the new deployment?</summary>

   ```
   kubectl describe deployment
   ```

   Look under the containers section.

   Another way - run the following and check the `IMAGES` column

   ```
   kubectl get deployment -o wide
   ```
   </details>

1. <details>
   <summary>Why do you think the deployment is not ready?</summary>

   ```
   kubectl describe pods
   ```

   Look under the events section.
   </details>

1. <details>
   <summary>Create a new Deployment using the deployment-definition-1.yaml file located at /root/.</br>There is an issue with the file, so try to fix it.</summary>

   ```
   kubectl create -f deployment-definition-1.yaml
   ```

   Note the error

   Edit the file with `vi`...

   The value for **`kind`** is incorrect. It should be **`Deployment`** with a capital **`D`**. Update the deployment
   definition and create the deployment with the above command.

   </details>

1. <details>
   <summary>Create a new Deployment with the below attributes using your own deployment definition file.</summary>

   Create a deployment definition file in `vi`, e.g. `my-deployment.yaml` with the following

    ```yaml
    apiVersion: apps/v1
    kind: Deployment
    metadata:
      labels:
        app: httpd-frontend
      name: httpd-frontend
    spec:
      replicas: 3
      selector:
        matchLabels:
          app: httpd-frontend
      template:
        metadata:
          labels:
            app: httpd-frontend
        spec:
          containers:
          - image: httpd:2.4-alpine
            name: httpd
    ```

   ```
   kubectl create -f my-deployment.yaml
   ```

   Or we could create it imperatively...

   ```
   kubectl create deployment httpd-frontend --image=httpd:2.4-alpine --replicas=3
   ```
   </details>


# Imperative commands 
Certification Tip!

Here's a tip!

As you might have seen already, it is a bit difficult to create and edit YAML files. Especially in the CLI. During the
exam, you might find it difficult to copy and paste YAML files from browser to terminal. Using the kubectl run command
can help in generating a YAML template. And sometimes, you can even get away with just the kubectl run command without
having to create a YAML file at all. For example, if you were asked to create a pod or deployment with specific name and
image you can simply run the kubectl run command.

Use the below set of commands and try the previous practice tests again, but this time try to use the below commands
instead of YAML files. Try to use these as much as you can going forward in all exercises

Reference (Bookmark this page for exam. It will be very handy):

https://kubernetes.io/docs/reference/kubectl/conventions/

- Create an NGINX Pod

```kubectl run nginx --image=nginx```

- Generate POD Manifest YAML file (-o yaml). Don't create it(--dry-run)

```kubectl run nginx --image=nginx --dry-run=client -o yaml```

- Create a deployment

```kubectl create deployment --image=nginx nginx```

- Generate Deployment YAML file (-o yaml). Don't create it(--dry-run)

```kubectl create deployment --image=nginx nginx --dry-run=client -o yaml```

Generate Deployment YAML file (-o yaml). Don't create it(--dry-run) with 4 Replicas (--replicas=4)

```kubectl create deployment --image=nginx nginx --dry-run=client -o yaml > nginx-deployment.yaml```

Save it to a file, make necessary changes to the file (for example, adding more replicas) and then create the deployment.

```kubectl create -f nginx-deployment.yaml```

OR

In k8s version 1.19+, we can specify the --replicas option to create a deployment with 4 replicas.

```kubectl create deployment --image=nginx nginx --replicas=4 --dry-run=client -o yaml > nginx-deployment.yaml``` 

# Practice Test - Namespaces
  - Take me to [Practice Test](https://kodekloud.com/topic/practice-test-namespaces/)

Solutions to practice test for namespaces

1. <details>
   <summary>How many Namespaces exist on the system?</summary>

   ```
   kubectl get namespace
   ```

   Count the number of namespaces (if any)
   </details>

1. <details>
   <summary>How many pods exist in the research namespace?</summary>

   ```
   kubectl get pods --namespace=research
   ```

   Count the number of pods (if any)
   </details>

1. <details>
   <summary>Create a POD in the finance namespace.</summary>

   ```
   kubectl run redis --image=redis --namespace=finance
   ```
   </details>

1. <details>
   <summary>Which namespace has the blue pod in it?</summary>

   ```
   kubectl get pods --all-namespaces
   ```

   Examine the output.

   Or use `grep` to filter the results, knowing that `NAMESPACE` is the first result column

   ```
   kubectl get pods --all-namespaces | grep blue
   ```

   </details>

1. <details>
   <summary>Access the Blue web application using the link above your terminal!!</summary>

   Press the `blue-application-ui` button at the top of the terminal. Try the following:

   ```
   Host Name: db-service
   Host Port: 6379
   ```
   </details>

1. <details>
   <summary>What DNS name should the Blue application use to access the database db-service in its own namespace - marketing?</summary>

   > db-service

   To access services in the same namespace, only the host name part of the fully qualified domain name (FQDN) is required.

   </details>

1. <details>
   <summary>What DNS name should the Blue application use to access the database db-service in the dev namespace?</summary>

   Either FQDN

   > db-service.dev.svc.cluster.local

   Or, it is sufficient just to append the namespace name

   > db-service.dev

   </details>

# Practice Test - Services
  - Take me to [Practice Test](https://kodekloud.com/topic/practice-test-services/)

#### Solutions to Practice test - Services

1. <details>
    <summary>How many Services exist on the system?</summary>

    ```
    kubectl get services
    ```

    Count the number of services (if any)
    </details>


1. Information only

1.  <details>
    <summary>What is the type of the default kubernetes service?</summary>

    From the output of Q1, examine the `TYPE` column.
    </details>

1.  <details>
    <summary>What is the targetPort configured on the kubernetes service?</summary>

    ```
    $ kubectl describe service | grep TargetPort
    ```
    </details>

1.  <details>
    <summary>How many labels are configured on the kubernetes service?</summary>

    ```
    kubectl describe service
    ```

    ...and look for labels.

    --- OR ---

    ```
    kubectl describe service --show-labels
    ```

    </details>

1.  <details>
    <summary>How many Endpoints are attached on the kubernetes service?</summary>

    ```
    kubectl describe service
    ```

    ...and look for endpoints

    </details>

1.  <details>
    <summary>How many Deployments exist on the system now?</summary>

    ```
    kubectl get deployment
    ```

    Count the deployments (if any)
    </details>

1.  <details>
    <summary>What is the image used to create the pods in the deployment?</summary>

    ```
    kubectl describe deployment
    ```

    Look in the containers section.

    --- OR ---

    ```
    kubectl get deployment -o wide
    ```

    Look in the `IMAGES` column

    </details>

1.  <details>
    <summary>Are you able to access the Web App UI?</summary>

    Try to access the Web Application UI using the tab simple-webapp-ui above the terminal.

    </details>

1.  <details>
    <summary>Create a new service to access the web application using the service-definition-1.yaml file.</summary>

    ```
    vi service-definition-1.yaml
    ```

    Fill in the values as directed, save and exit.

    ```
    kubectl create -f service-definition-1.yaml
    ```
    </details>

1. Test newly deployed service.

# Practice Test - Imperative Commands
  - Take me to [Practice Test](https://kodekloud.com/topic/practice-test-imperative-commands-2/)

Solutions for Practice Test - Imperative Commands

1. Information

1.  <details>
    <summary>Deploy a pod named nginx-pod using the nginx:alpine image.</summary>

    ```
    kubectl run nginx-pod --image=nginx:alpine
    ```
    </details>

1.  <details>
    <summary>Deploy a redis pod using the redis:alpine image with the labels set to tier=db.</summary>

    ```
    kubectl run redis --image=redis:alpine -l tier=db
    ```
    </details>

1.  <details>
    <summary>Create a service redis-service to expose the redis application within the cluster on port 6379.</summary>

    ```
    kubectl expose pod redis --port=6379 --name redis-service
    ```
    </details>

1.  <details>
    <summary>Create a deployment named webapp using the image kodekloud/webapp-color with 3 replicas.</summary>

    ```
    kubectl create deployment webapp --image=kodekloud/webapp-color --replicas=3
    ```
    </details>

1.  <details>
    <summary>Create a new pod called custom-nginx using the nginx image and expose it on container port 8080.</summary>

    ```
    kubectl run custom-nginx --image=nginx --port=8080
    ```
    </details>

1.  <details>
    <summary>Create a new namespace called dev-ns.</summary>

    ```
    kubectl create ns dev-ns
    ```
    </details>

1.  <details>
    <summary>Create a new deployment called redis-deploy in the dev-ns namespace with the redis image. It should have 2 replicas.</summary>

    ```
    kubectl create deployment redis-deploy -n dev-ns --image redis --replicas 2
    ```
    </details>

1.  <details>
    <summary>Create a pod called httpd using the image httpd:alpine in the default namespace.</br>Next, create a service of type ClusterIP by the same name (httpd).</br>The target port for the service should be 80.</summary>

    ```
    kubectl run httpd --image httpd:alpine --expose --port 80
    ```
    </details>


# Practice Test - Manual Scheduling
  - Take me to [Practice Test](https://kodekloud.com/topic/practice-test-manual-scheduling/)

Solutions to Practice Test - Manual Scheduling

- Run, **`kubectl create -f nginx.yaml`**
  
  <details>

  ```
  $ kubectl create -f nginx.yaml
  ```
  </details>

- Run the command 'kubectl get pods' and check the status column

  <details>

  ```
  $ kubectl get pods
  ```
  </details>

- Run the command 'kubectl get pods --namespace kube-system'

  <details>

  ```
  $ kubectl get pods --namespace kube-system
  ```
  </details>

- Set **`nodeName`** property on the pod to node01 node

  <details>

  ```
  $ vi nginx.yaml
  $ kubectl delete -f nginx.yaml
  $ kubectl create -f nginx.yaml
  ```
  </details>

- Set **`nodeName`** property on the pod to master node

  <details>

  ```
  $ vi nginx.yaml
  $ kubectl delete -f nginx.yaml
  $ kubectl create -f nginx.yaml
  ```
  </details>

# Practice Test - Labels and Selectors
  - Take me to [Practice Test](https://kodekloud.com/topic/practice-test-labels-and-selectors/)
  
Solutions to Practice Test - Labels and Selectors
- Run the command 'kubectl get pods --selector env=dev'
  
  <details>

  ```
  $ kubectl get pods --selector env=dev
  ```
  </details>

- Run the command 'kubectl get pods --selector bu=finance'

  <details>

  ```
  $ kubectl get pods --selector bu=finance
  ```
  </details>

- Run the command 'kubectl get all --selector env=prod'

  <details>

  ```
  $ kubectl get all --selector env=prod
  ```
  </details>

- Run the command 'kubectl get all --selector env=prod,bu=finance,tier=frontend'
  
  <details>

  ```
  $ kubectl get all --selector env=prod,bu=finance,tier=frontend
  ```
  </details>

- Set the labels on the pod definition template to frontend

  <details>

  ```
  $ vi replicaset-definition.yaml
  $ kubectl create -f replicaset-definition.yaml
  ```
  </details>

# Practice Test - Taints and Tolerations
  - Take me to [Practice Test](https://kodekloud.com/topic/practice-test-taints-and-tolerations/)
  
Solutions to the Practice Test - Taints and Tolerations

- Run the command 'kubectl get nodes' and count the number of nodes.
  
  <details>

  ```
  $ kubectl get nodes
  ```
  </details>

- Run the command 'kubectl describe node node01' and see the taint property

  <details>

  ```
  $ kubectl describe node node01
  ```
  </details>

- Run the command 'kubectl taint nodes node01 spray=mortein:NoSchedule'.

  <details>

  ```
  $ kubectl taint nodes node01 spray=mortein:NoSchedule
  ```
  </details>

- Answer file at /var/answers/mosquito.yaml

  <details>

  ```
  master $ cat /var/answers/mosquito.yaml
  apiVersion: v1
  kind: Pod
   metadata:
    name: mosquito
  spec:
   containers:
   - image: nginx
     name: mosquito
  ```
  ```
  $ kubectl create -f /var/answers/mosquito.yaml
  ```
  </details>

- Run the command 'kubectl get pods' and see the state

  <details>

  ```
  $ kubectl get pods
  ```
  </details>

- Why do you think the pod is in a pending state?

  <details>

  ```
  POD Mosquito cannot tolerate taint Mortein
  ```
  </details>

- Answer file at /var/answers/bee.yaml

  <details>

  ```
  master $ cat /var/answers/bee.yaml
  apiVersion: v1
  kind: Pod
  metadata:
   name: bee
  spec:
   containers:
   - image: nginx
     name: bee
   tolerations:
   - key: spray
     value: mortein
     effect: NoSchedule
     operator: Equal
  ```
  ```
  $ kubectl create -f /var/answers/bee.yaml
  ```
  </details>

- Notice the 'bee' pod was scheduled on node node01 despite the taint.

- Run the command 'kubectl describe node master' and see the taint property
  
  <details>

  ```
  $ kubectl describe node master
  ```
  </details>

- Run the command 'kubectl taint nodes master node-role.kubernetes.io/master:NoSchedule-'.
  
  <details>

  ```
  $ kubectl taint nodes master node-role.kubernetes.io/master:NoSchedule-
  ```
  </details>

- Run the command 'kubectl get pods' and see the state

  <details>

  ```
  $ kubectl get pods
  ```
  </details>

- Run the command 'kubectl get pods -o wide' and look at the Node column
 
  <details>

  ```
  $ kubectl get pods -o wide
  ```
  </details>


# Practice Test - Node Affinity
  - Take me to [Practice Test](https://kodekloud.com/topic/practice-test-node-affinity-2/)
  
Solutions to practice test - node affinity

- Run the command 'kubectl describe node node01' and count the number of labels under **`Labels Section`**.
  
  <details>

  ```
  $ kubectl describe node node01
  ```
  </details>

- Run the command 'kubectl describe node node01' and see the label section
  
  <details>

  ```
  $ kubectl describe node node01
  ```
  </details>

- Run the command 'kubectl label node node01 color=blue'.

  <details>

  ```
  $ kubectl label node node01 color=blue
  ```
  </details>

- Run the below commands

  <details>

  ```
  $ kubectl create deployment blue --image=nginx
  $ kubectl scale deployment blue --replicas=6
  ```
  </details>

- Check if master and node01 have any taints on them that will prevent the pods to be scheduled on them. If there are no taints, the pods can be scheduled on either node.
  
  <details>

  ```
  $ kubectl describe nodes|grep -i taints
  $ kubectl get pods -o wide
  ```
  </details>

- Answer file at /var/answers/blue-deployment.yaml
  
  <details>

  ```
  $ kubectl edit deployment blue
  ```
  </details>

  Add the below under the template.spec section
  
  <details>

  ```
  affinity:
      nodeAffinity:
          requiredDuringSchedulingIgnoredDuringExecution:
            nodeSelectorTerms:
            - matchExpressions:
              - key: color
                operator: In
                values:
                - blue
   ```
   </details>

 - Run the command 'kubectl get pods -o wide' and see the Node column
   
   <details>

   ```
   $ kubectl get pods -o wide
   ```
   </details>

 - Answer file at /var/answers/red-deployment.yaml
   Add the below under the template.spec section
   
   <details>

   ```
   affinity:
        nodeAffinity:
          requiredDuringSchedulingIgnoredDuringExecution:
            nodeSelectorTerms:
            - matchExpressions:
              - key: node-role.kubernetes.io/master
                operator: Exists
   ```
   ```
   $ kubectl create -f red-deployment.yaml
   ```
   ```
   $ kubectl get pods -o wide
   ```
   </details>
   
  
  
# Practice Test - Resource Limits
  - Take me to [Practice Test](https://kodekloud.com/topic/practice-test-resource-limits/)
  
Solutions to practice test - resource limtis
- Run the command 'kubectl describe pod rabbit' and inspect requests.
  
  <details>

  ```
  $ kubectl describe pod rabbit
  ```
  </details>

- Run the command 'kubectl delete pod rabbit'.

  <details>

  ```
  $ kubectl delete pod rabbit
  ```
  </details>

- Run the command 'kubectl get pods' and inspect the status of the pod elephant

  <details>

  ```
  $ kubectl get pods
  ```
  </details>

- The status 'OOMKilled' indicates that the pod ran out of memory. Identify the memory limit set on the POD.

- Generate a template of the existing pod.

  <details>

  ```
  $ kubectl get pods elephant -o yaml > elephant.yaml
  ```
  </details>

  Update the elephant.yaml pod definition with the resource memory limits to 20Mi
  
  <details>

  ```
  resources:
      limits:
        memory: 20Mi
  ---
  ```
  </details>

  Delete the pod and recreate it.
  
  <details>

  ```
  $ kubectl delete pod elephant
  $ kubectl create -f elephant.yaml
  ```
  </details>

- Inspect the status of POD. Make sure it's running
  
  <details>

  ```
  $ kubectl get pods
  ```
  </details>

- Run the command 'kubectl delete pod elephant'.

  <details>

  ```
  $ kubectl delete pod elephant
  ```
  </details>


# Practice Test - DaemonSets
  - Take me to [Practice Test](https://kodekloud.com/topic/practice-test-daemonsets/)
  
Solutions to practice test daemonsets
- Run the command kubectl get daemonsets --all-namespaces
  
  <details>

  ```
  $ kubectl get daemonsets --all-namespaces
  ```
  </details>

- Run the command kubectl get daemonsets --all-namespaces

  <details>

  ```
  $ kubectl get daemonsets --all-namespaces
  ```
  </details>

- Run the command kubectl get all --all-namespaces and identify the types

  <details>

  ```
  $ kubectl get all --all-namespaces
  ```
  </details>

- Run the command kubectl describe daemonset kube-proxy --namespace=kube-system

  <details>

  ```
  $ kubectl describe daemonset kube-proxy --namespace=kube-system
  ```
  </details>

- Run the command kubectl describe daemonset kube-flannel-ds-amd64 --namespace=kube-system

  <details>

  ```
  $ kubectl describe daemonset kube-flannel-ds-amd64 --namespace=kube-system
  ```
  </details>
    
- Create a daemonset

  <details>

  ```
  $ vi ds.yaml
  ```

  ```
  apiVersion: apps/v1
  kind: DaemonSet
  metadata:
    name: elasticsearch
    namespace: kube-system
    labels:
      k8s-app: fluentd-logging
  spec:
    selector:
      matchLabels:
        name: elasticsearch
    template:
      metadata:
        labels:
          name: elasticsearch
      spec:
        tolerations:
        # this toleration is to have the daemonset runnable on master nodes
        # remove it if your masters can't run pods
        - key: node-role.kubernetes.io/master
          effect: NoSchedule
        containers:
        - name: elasticsearch
          image: k8s.gcr.io/fluentd-elasticsearch:1.20
  ```
  </details>

- To create the daemonset and list the daemonsets and pods

  <details>

  ```
  $ kubectl create -f ds.yaml
  $ kubectl get ds -n kube-system
  $ kubectl get pod -n kube-system|grep elasticsearch
  ```
  </details>





