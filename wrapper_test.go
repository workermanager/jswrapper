package jswrapper

import (
	"fmt"
	"net"
	"os"
	"os/exec"
	"path/filepath"
	"testing"

	"google.golang.org/grpc"
	"sxbastudio.com/blockchain/wmrunner/proto/gowrapper"
	"sxbastudio.com/blockchain/wmrunner/proto/gowrapperimpl"
)

func TestWrapper(t *testing.T) {
	listener, _ := net.Listen("tcp", ":0")
	srv := grpc.NewServer()
	wrapper := gowrapperimpl.NewMessageImpl()
	wrapper.Queue = make(chan *gowrapper.Message, 2)
	wrapper.Queue <- &gowrapper.Message{Key: "a", Value: "1"}
	wrapper.Queue <- &gowrapper.Message{Key: "b", Value: "2"}
	gowrapper.RegisterMessageQueueServer(srv, wrapper)
	go srv.Serve(listener)
	cmd := exec.Command("node", "wrapper_test.mjs")
	cmd.Dir, _ = filepath.Abs("./test")
	cmd.Stderr = os.Stderr
	cmd.Stdout = os.Stdout
	cmd.Env = append(cmd.Env, fmt.Sprintf("WRAPPER_SERVER=%v", listener.Addr()))
	err := cmd.Run()
	if err != nil {
		t.Error(err)
		return
	}
}
